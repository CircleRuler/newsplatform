Session.setDefault("currentUrl", {index: "active", login: "", reg: "",friend:"",lists:"",self:""});
Session.setDefault("info", {success:"",error:""});
Posts = new Meteor.Collection("posts");
SystemInfo = new Meteor.Collection("systemInfo");
UserInfo = new Meteor.Collection("userInfo");

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
    posts(){
        if(!Meteor.userId()){
            return Posts.find({"user._id":"NAEQJhrKe79xtC8Hd","super":0},{sort: {time: -1}});
        }else{
            return Posts.find({"super":0},{sort: {time: -1}});
        }
    },
    comments(){
        return Posts.find({"super":this._id},{sort: {time: -1}});
    },
});

Template.lists.helpers({
    lists(){
        return UserInfo.find({},{sort: {rank: 1}})
    },
});

Template.self.helpers({
    self(){
        return UserInfo.find({"user._id":Meteor.userId()});
    },
});

Template.friend.helpers({
    friend(){
        var Afriend = UserInfo.findOne({"user._id":Meteor.userId()}).Friends;
        return UserInfo.find({"user._id":{$in : Afriend}},{sort:{rank:1}});
    },
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
            time:new Date()},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"发表失败，原因自寻"});
                }else{
                    Session.set("info", {success:"发表成功", error:""});
                    $("#post").val("");
                }
            }
        );
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
    },
    'click #commnetSubmit':function (event) {
        event.preventDefault();
        var $comment = $("#"+this._id).val();
        if ($comment.length === 0 || $comment.length >= 100) {
            Session.set("info", {success:"", error:"请将字数限制在1-100字以内"});
            return;
        }
        Posts.insert({
            user: Meteor.user(), 
            post: $comment, 
            super:this._id,
            time:new Date()},
            function(err){
                if(err){
                    Session.set("info", {success:"", error:"评论失败，原因自寻"});
                }else{
                    Session.set("info", {success:"评论成功", error:""});
                    $("#"+this._id).val("");
                }
            }
        );
        SystemInfo.update({"_id":"1"},{$inc: {"totalPost":1}});
    },
    'click #addFriend':function (event) {
        event.preventDefault();
        var $friendId = this.user._id;
        if (UserInfo.findOne({"Friends":$friendId})) {
            Session.set("info", {success:"", error:"错误：此好友已经存在"});
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
                }
            }
        );
    }
})