import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.device.capture);
    }

});

Session.setDefault("currentUrl", {index: "active", login: "", reg: "",friend:"",lists:"",self:"",collections:""});
Session.setDefault("info", {success:"",error:""});

Posts = new Meteor.Collection("posts");
SystemInfo = new Meteor.Collection("systemInfo");
UserInfo = new Meteor.Collection("userInfo");

var isGetImage = false;
var isGetAudio = false;
var isGetVideo = false;
var isGetLocalImage = false;
var captureImageId = false;
var captureAudioId = false;
var captureVideoId = false;
var locallImageId = false;

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploadsImage"})]
});

Audios = new FS.Collection("audios", {
  stores: [new FS.Store.FileSystem("audios", {path: "~/uploadsAudio"})]
});

Videos = new FS.Collection("videos", {
  stores: [new FS.Store.FileSystem("videos", {path: "~/uploadsVideo"})]
});

LocalImages = new FS.Collection("localimages", {
  stores: [new FS.Store.FileSystem("localimages", {path: "~/uploadsLocalImage"})]
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
//---------------------------------- Helpers  start --------------------------------
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
    goodNews(){
        return Posts.find({"super":0},{sort: {score: -1},limit: 10});
    },
    lists(){
        return UserInfo.find({},{sort: {totalScore: -1},limit: 10});
    },
});

Template.self.helpers({
    self(){
        if(!localStorage.getItem("targetUserId")){
            localStorage.setItem("targetUserId",Meteor.userId());
        }
        return UserInfo.find({"user._id":localStorage.getItem("targetUserId")});;
    },
    isFriend(){
        if (!UserInfo.findOne({"user._id":Meteor.userId(),"Friends":localStorage.getItem("targetUserId")})){
            return true;
        }else{
            return false;
        }
    },
    posts(){
        var otherPost = Posts.find({"super":0,"user._id":localStorage.getItem("targetUserId")},{sort: {time: -1}});
        localStorage.setItem("targetUserId",Meteor.userId());
        return otherPost;
    }
});

Template.collections.helpers({
    collections(){
        return Posts.find({"super":0,"collectioners":Meteor.userId()},{sort: {time: -1}});
    }
});

Template.friend.helpers({
    friendToday(){
        var Afriend = UserInfo.findOne({"user._id":Meteor.userId()}).Friends;
        return UserInfo.find({"user._id":{$in : Afriend}},{sort:{time:-1}});
    },
});

//-------------------------------- Helpers End ---------------------------------------

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
        "self": "self",
        "collections":"collections"
    },
    index: function () {
        Session.set("currentUrl", {index: "active", login: "", reg: "",friend:"",lists:"",self:"",collections:""});
    },
    friend: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"active",lists:"",self:"",collections:""});
    },
    lists: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"",lists:"active",self:"",collections:""});
    },
    self: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"",lists:"",self:"active",collections:""});
    },
    collections: function () {
        Session.set("currentUrl", {index: "", login: "", reg: "",friend:"",lists:"",self:"",collections:"active"});
    },
    login: function () {
        if(Meteor.userId()){
            this.navigate("/",true);
            Session.set("info", {success:"", error: "用户已在线！"});
        }
        Session.set("currentUrl", {index: "", login:"active", reg: "",friend:"",lists:"",self:"",collections:""});
    },
    reg: function () {
        if(Meteor.userId()){
            this.navigate("/",true);
            Session.set("info", {success:"", error: "用户已在线！"});
        }
        Session.set("currentUrl", {index: "", login: "", reg: "active",friend:"",lists:"",self:"",collections:""});
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

//------------------------------- events start ------------------------------

Template.reg.events({
    'click #submit': function (event) {
        event.preventDefault();
        if(!SystemInfo.find({"_id":"1"},{totalUser:true})['totalUser']){
            SystemInfo.insert({"_id":"1","totalUser":0,"totalPost":0,"totalLogin":0});
        }
        var $username = $("#username").val();
        var $password = $("#password").val();
        var $password_repeat = $("#password-repeat").val();
        var isAdmin = false;
        if ($username == "admin"){
            isAdmin = true;
        }
        if ($username.length >= 11) {
            Session.set("info", {success: "", error:"用户名长度最大为10"});
            return;
        }
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
            password: $password},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"注册失败,用户名已存在或其他未知原因"});
                }else{
                    Session.set("info", {success:"注册成功", error:""});
                    UserInfo.insert({
                        user:Meteor.user(),
                        isAdmin:isAdmin,
                        collections:[],
                        totalScore:0,
                        todayScore:0,
                        totalLike:0,
                        totalObject:0,
                        totalCollection:0,
                        totalPost:0,
                        totalFriend:1,
                        Friends:[Meteor.userId()],
                        rank:SystemInfo.findOne({"_id":"1"},{totalUser:true})["totalUser"],
                        time:new Date()
                    });
                    SystemInfo.update({"_id":"1"},{$inc: {"totalUser":1}});
                    SystemInfo.update({"_id":"1"},{$inc: {"totalLogin":1}});
                }
            }
        );
        
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
        if ($post.length === 0 || $post.length >= 300) {
            Session.set("info", {success:"", error:"请将字数限制在1-300字以内"});
            return;
        }
        Posts.insert({
            user: Meteor.user(), 
            post: $post, 
            super:0,
            to:false,
            like:0,
            Likers:[],
            object:0,
            Objecters:[],
            totalCollection:0,
            collectioners:[],
            top:false,
            score:0,
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
        UserInfo.update(
            {"_id":Meteor.userId()},
            {$inc:{"totalPost":1}},
            false,true
        );
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
    },
    'click #commnetSubmit':function (event) {
        event.preventDefault();
        var thisId = "#"+this._id;
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
            to:false,
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
                    $(thisId).val("");
                }
            }
        );
        
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
    },
    'click #commnetSubmitToCommnet':function (event) {
        event.preventDefault();
        var thisId = "#"+this._id;
        var $commentTo = $("#"+this._id).val();
        if ($commentTo.length === 0 || $commentTo.length >= 100) {
            Session.set("info", {success:"", error:"请将字数限制在1-100字以内"});
            scroll(0,0);
            return;
        }
        var userName = Posts.findOne({"_id":this._id}).user.username; 
        Posts.insert({
            user: Meteor.user(), 
            post: $commentTo, 
            super:this.super,
            to:userName,
            time:new Date()},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"回复评论失败"});
                }else{
                    Session.set("info", {success:"回复评论成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:20,totalScore:20}},
                        false,true
                    );
                    $(thisId).val("");
                }
            }
        );
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
        $(".commnetP").css("display","none");
    },
    'click #displayCommnetButton':function (event) {
        event.preventDefault();
        var thisId = "#"+"p"+this._id;
        $(".commnetP").css("display","none");
        $(thisId).css("display","block");
    },
    'click #toViewOther':function (event) {
        //event.preventDefault();
        localStorage.setItem("targetUserId",this.user._id);
        console.log(Meteor.userId());
        console.log(targetUserId);
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
    'click #addCollection':function (event) {
        event.preventDefault();
        var $PostId = this._id;
        if (Posts.findOne({"_id":$PostId,"collectioners":Meteor.userId()})) {
            Session.set("info", {success:"", error:"错误：你已经此收藏过此新闻"});
            scroll(0,0);
            return;
        }
        Posts.update({
                "_id":this._id
            },{
                $addToSet:{"collectioners":Meteor.userId()},
                $inc:{"totalCollection":1,"score":15}
            },
            false,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"收藏失败"});
                }else{
                    Session.set("info", {success:"收藏成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:5,totalScore:5}},
                        false,true
                    );
                }
            }
        );
        var userInfoId = Posts.findOne({"_id":$PostId}).user._id;
        UserInfo.update(
            {"_id":userInfoId},
            {$inc:{totalCollection:1}},
            false,true
        );
        
    },
    'click #likePost':function (event) {
        event.preventDefault();
        var thisId = this._id;
        if (Posts.findOne({"_id":this._id,"Likers":Meteor.userId()})) {
            Session.set("info", {success:"", error:"错误：您已经点过赞"});
            scroll(0,0);
            return;
        }
        Posts.update({
                "_id":this._id
            },{
                $addToSet:{"Likers":Meteor.userId()},
                $inc:{"like":1,"score":10}
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
        var userInfoId = Posts.findOne({"_id":thisId}).user._id;
        UserInfo.update(
            {"_id":userInfoId},
            {$inc:{totalLike:1}},
            false,true
        );
    },
    'click #objectPost':function (event) {
        event.preventDefault();
        var thisId = this._id;
        if (Posts.findOne({"_id":this._id,"Objecters":Meteor.userId()})) {
            Session.set("info", {success:"", error:"错误：您已经点过异议"});
            scroll(0,0);
            return;
        }
        Posts.update({
                "_id":this._id
            },{
                $addToSet:{"Objecters":Meteor.userId()},
                $inc:{"object":1,"score":-8}
            },
            false,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"异议无效"});
                }else{
                    Session.set("info", {success:"反对有效", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:5,totalScore:5}},
                        false,true
                    );
                }
            }
        );
        var userInfoId = Posts.findOne({"_id":thisId}).user._id;
        UserInfo.update(
            {"_id":userInfoId},
            {$inc:{totalObject:1}},
            false,true
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
});

Template.collections.events({
    
});
Template.friend.events({
    'click #deleteFriend':function (event) {
        event.preventDefault();
        var $friendId = this.user._id;
        if (!UserInfo.findOne({"user._id":Meteor.userId(),"Friends":$friendId})) {
            Session.set("info", {success:"", error:"错误：此好友不存在"});
            scroll(0,0);
            return;
        }
        if ($friendId == Meteor.userId()) {
            Session.set("info", {success:"", error:"错误：不能删除自己"});
            scroll(0,0);
            return;
        }
        
        var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
        UserInfo.update({
                "_id":userInfoId
            },{
                $pull:{"Friends":$friendId},
                $inc:{"totalFriend":-1}
            },
            true,true,
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"删除好友失败"});
                }else{
                    Session.set("info", {success:"删除成功", error:""});
                    var userInfoId = UserInfo.findOne({"user._id":Meteor.userId()})._id;
                    UserInfo.update(
                        {"_id":userInfoId},
                        {$inc:{todayScore:-50,totalScore:-50}},
                        false,true
                    );
                }
            }
        );
    },
    'click #toViewOther':function (event) {
        //event.preventDefault();
        localStorage.setItem("targetUserId",this.user._id);
        console.log(Meteor.userId());
        console.log(targetUserId);
    }
});

//------------------------------- events End ------------------------------