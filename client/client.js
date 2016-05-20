import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.device.capture);
        //Session.set("info", {success:"navigator success hahaha", error: ""});
    }
});

Session.setDefault("currentUrl", {index: "active", login: "", reg: "",friend:"",lists:"",self:""});
Session.setDefault("info", {success:"",error:""});
Posts = new Meteor.Collection("posts");
SystemInfo = new Meteor.Collection("systemInfo");
UserInfo = new Meteor.Collection("userInfo");

var isGetImage = false;
var isGetAudio = false;
var isGetVideo = false;
var captureImageId = false;
var captureAudioId = false;
var captureVideoId = false;

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploadsImage"})]
});

Audios = new FS.Collection("audios", {
  stores: [new FS.Store.FileSystem("audios", {path: "~/uploadsAudio"})]
});

Videos = new FS.Collection("videos", {
  stores: [new FS.Store.FileSystem("videos", {path: "~/uploadsVideo"})]
});

var captureImageSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        Images.insert(mediaFiles[i],function (err, fileObj) {
            isGetImage = true;
            captureImageId = fileObj._id;
            Session.set("info", {success:"插入图片成功", error: ""});
        });
    }
};

var captureAudioSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        Audios.insert(mediaFiles[i],function (err, fileObj) {
            isGetAudio = true;
            captureAudioId = fileObj._id;
            Session.set("info", {success:"插入音频成功", error: ""});
        });
    }
};

var captureVideoSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        Videos.insert(mediaFiles[i],function (err, fileObj) {
            isGetVideo = true;
            captureVideoId = fileObj._id;
            Session.set("info", {success:"插入小视频成功", error: ""});
        });
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

if(Meteor.isCordova){
  
}

Template.info.helpers({
    info(){
        return Session.get("info");
    },
});

Template.container.helpers({
    currentUrl(){
        return Session.get("currentUrl");
    },
});

Template.nav.helpers({
    active(){
        return Session.get("currentUrl");
    },
});

Template.index.helpers({
    topPosts(){
        return Posts.find({"top":true,"super":0},{sort: {time: -1}});
    },
    posts(){
        if(!Meteor.userId()){
            return Posts.find({"user.username":"admin","super":0,"top":false,},{sort: {time: -1}});
        }else{
            return Posts.find({"super":0,"top":false},{sort: {time: -1}});
        }
    },
    comments(){
        return Posts.find({"super":this._id},{sort: {time: 1}});
    },
    getMediaBtn(){
        if(Meteor.isCordova){
            return true;
        }else{
            return false;
        }
    },
    displayImage(id){
        return Images.find({"_id":id});
    },
    displayAudio(id){
        return Audios.find({"_id":id});
    },
    displayVideo(id){
        return Videos.find({"_id":id});
    }
});

Template.lists.helpers({
    lists(){
        return UserInfo.find({},{sort: {totalScore: -1}})
    },
});

Template.self.helpers({
    self(){
        return UserInfo.find({"user._id":Meteor.userId()});
    },
});

Template.friend.helpers({
    friendRank(){
        var Afriend = UserInfo.findOne({"user._id":Meteor.userId()}).Friends;
        return UserInfo.find({"user._id":{$in : Afriend}},{sort:{rank:1}},{limit: 10 });
    },
    friendToday(){
        var Afriend = UserInfo.findOne({"user._id":Meteor.userId()}).Friends;
        return UserInfo.find({"user._id":{$in : Afriend}},{sort:{todayScore:-1}},{limit: 10 });
    },
    friendTotal(){
        var Afriend = UserInfo.findOne({"user._id":Meteor.userId()}).Friends;
        return UserInfo.find({"user._id":{$in : Afriend}},{sort:{totalScore:-1}},{limit: 10 });
    }
});

Meteor.startup(function () {
    Backbone.history.start({pushState: true});
});

var urlRouter = Backbone.Router.extend({
    routes: {
        "": "index",
        "login": "login",
        "reg": "reg",
        "logout": "logout",
        "friend": "friend",
        "lists": "lists",
        "self": "self"
    },
    index: function () {
        Session.set("currentUrl", {index: "active", login: "", reg: "",friend:"",lists:"",self:""});
    },
    friend: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"active",lists:"",self:""});
    },
    lists: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"",lists:"active",self:""});
    },
    self: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"",lists:"",self:"active"});
    },
    login: function () {
        if(Meteor.userId()){
            this.navigate("/",true);
            Session.set("info", {success:"", error: "用户已在线！"});
        }
        Session.set("currentUrl", {index: "", login:"active", reg: "",friend:"",lists:"",self:""});
    },
    reg: function () {
        if(Meteor.userId()){
            this.navigate("/",true);
            Session.set("info", {success:"", error: "用户已在线！"});
        }
        Session.set("currentUrl", {index: "", login: "", reg: "active",friend:"",lists:"",self:""});
    },
    logout: function () {
        if(Meteor.userId()){
            Meteor.logout();
            this.navigate("/",true);
            Session.set("info", {success:"登出成功", error: ""});
            SystemInfo.update({"_id":"1"},{$inc: {totalLogin:-1}});
        }else{
            this.navigate("/",true);
            Session.set("info", {success:"", error: "用户不在线！"});
        }
    },
    redirect: function(url){
        this.navigate(url, true);
    }
});
Router = new urlRouter;

Template.reg.events({
    'click #submit': function (event) {
        event.preventDefault();
        if(!SystemInfo.find({"_id":"1"},{totalUser:true})['totalUser']){
            SystemInfo.insert({"_id":"1","totalUser":0,"totalPost":0,"totalLogin":0});
        }
        var $username = $("#username").val();
        var $password = $("#password").val();
        var $useremail = $("#useremail").val();
        var $password_repeat = $("#password-repeat").val();
        if ($password.length === 0 || $username.length === 0) {
            Session.set("info", {success: "", error:"用户名或者密码不能为空"});
            return;
        }
        if ($password !== $password_repeat) {
            Session.set("info", {success: "",error:"两次输入密码不一致"});
            return;
        }
        Accounts.createUser({
            username: $username,
            password: $password,
            email: $useremail},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"注册失败"});
                }else{
                    Session.set("info", {success:"注册成功", error:""});
                    UserInfo.insert({
                        user:Meteor.user(),
                        isAdmin:false,
                        totalScore:0,
                        todayScore:0,
                        totalFriend:1,
                        Friends:[Meteor.userId()],
                        rank:SystemInfo.findOne({"_id":"1"},{totalUser:true})["totalUser"],
                        time:new Date()
                    });
                }
            }
        );
        SystemInfo.update({"_id":"1"},{$inc: {"totalUser":1}});
        SystemInfo.update({"_id":"1"},{$inc: {"totalLogin":1}});
    }
});

Template.login.events({
    'click #submit': function (event) {
        event.preventDefault();
        var $username = $("#username").val();
        var $password = $("#password").val();
        if ($password.length === 0 || $username.length === 0) {
            Session.set("info", {success:"", error: "用户名或密码不能为空"});
            return;
        } 
        Meteor.loginWithPassword($username, $password, function (err) {
            if(err){
                Session.set("info", {success:"", error:"登陆失败！用户名与密码不匹配。"});
            }else{
                Router.redirect("/");
                SystemInfo.update({"_id":"1"},{$inc: {"totalLogin":1}});
                Session.set("info", {success: "登陆成功", error:""});
                var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:1,totalScore:1}},
                        false,true
                    );
            }
        });
    }
});

Template.index.events({
    'click #submit':function (event) {
        event.preventDefault();
        var $post = $("#post").val();
        if ($post.length === 0 || $post.length >= 200) {
            Session.set("info", {success:"", error:"请将字数限制在1-200字以内"});
            return;
        }
        Posts.insert({
            user: Meteor.user(), 
            post: $post, 
            super:0,
            like:0,
            Likers:[],
            top:false,
            isGetImage:isGetImage,
            isGetAudio:isGetAudio,
            isGetVideo:isGetVideo,
            captureImageId:captureImageId,
            captureAudioId:captureAudioId,
            captureVideoId:captureVideoId,
            time:new Date()},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"发表失败"});
                }else{
                    Session.set("info", {success:"发表成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:100,totalScore:100}},
                        false,true
                    );
                    $("#post").val("");
                }
            }
        );
        isGetImage = false;
        isGetAudio = false;
        isGetVideo = false;
        captureImageId = false;
        captureAudioId = false;
        captureVideoId = false;
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
    },
    'click #commnetSubmit':function (event) {
        event.preventDefault();
        var $comment = $("#"+this._id).val();
        if ($comment.length === 0 || $comment.length >= 100) {
            Session.set("info", {success:"", error:"请将字数限制在1-100字以内"});
            scroll(0,0);
            return;
        }
        Posts.insert({
            user: Meteor.user(), 
            post: $comment, 
            super:this._id,
            time:new Date()},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"评论失败"});
                }else{
                    Session.set("info", {success:"评论成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:20,totalScore:20}},
                        false,true
                    );
                    $("#"+this._id).val("");
                }
            }
        );
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
    },
    'click #addFriend':function (event) {
        event.preventDefault();
        var $friendId = this.user._id;
        if (UserInfo.findOne({"user._id":Meteor.userId(),"Friends":$friendId})) {
            Session.set("info", {success:"", error:"错误：此好友已经存在"});
            scroll(0,0);
            return;
        }
        
        var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
        UserInfo.update({
                "_id":userInfoId
            },{
                $addToSet:{"Friends":$friendId},
                $inc:{"totalFriend":1}
            },
            true,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"添加好友失败"});
                }else{
                    Session.set("info", {success:"添加成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:50,totalScore:50}},
                        false,true
                    );
                }
            }
        );
    },
    'click #likePost':function (event) {
        event.preventDefault();
        if (Posts.findOne({"_id":this._id,"Likers":Meteor.userId()})) {
            Session.set("info", {success:"", error:"错误：您已经点过赞"});
            scroll(0,0);
            return;
        }
        Posts.update({
                "_id":this._id
            },{
                $addToSet:{"Likers":Meteor.userId()},
                $inc:{"like":1}
            },
            false,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"点赞失败"});
                }else{
                    Session.set("info", {success:"点赞成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:5,totalScore:5}},
                        false,true
                    );
                }
            }
        );
    },
    'click #topPost':function (event) {
        event.preventDefault();
        if (Meteor.user().username!="admin") {
            Session.set("info", {success:"", error:"错误：您并非管理员。"});
            scroll(0,0);
            return;
        }
        Posts.update({
                "_id":this._id
            },{
                $set:{"top":true}
            },
            true,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"置顶失败"});
                }else{
                    Session.set("info", {success:"置顶成功", error:""});
                    var userInfoId = Posts.findOne({"_id":this._id}).user._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:80,totalScore:80}},
                        false,true
                    );
                }
            }
        );
    },
    'click #untopPost':function (event) {
        event.preventDefault();
        if (Meteor.user().username!="admin") {
            Session.set("info", {success:"", error:"错误：您并非管理员。"});
            scroll(0,0);
            return;
        }
        Posts.update({
                "_id":this._id
            },{
                $set:{"top":false}
            },
            true,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"取消置顶失败"});
                }else{
                    Session.set("info", {success:"取消置顶成功", error:""});
                }
            }
        );
    },
    'click #getImage':function (event) {
        event.preventDefault();
        navigator.device.capture.captureImage(captureImageSuccess, captureError, {limit:1});
    },
    'click #getAudio':function (event) {
        event.preventDefault();
        navigator.device.capture.captureAudio(captureAudioSuccess, captureError, {limit:1});
    },
    'click #getVideo':function (event) {
        event.preventDefault();
        navigator.device.capture.captureVideo(captureVideoSuccess, captureError, {limit:1}); 
    }
})
