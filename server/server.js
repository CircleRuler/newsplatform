Posts = new Meteor.Collection("posts");
SystemInfo = new Meteor.Collection("systemInfo");
UserInfo = new Meteor.Collection("userInfo");

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

Posts.allow({
    insert: function (userId,doc) {
        return userId && (doc.user._id === userId);
    },
     update: function () {
        return true;
     }
});
SystemInfo.allow({
     insert: function () {
        return true;
     },
     update: function () {
        return true;
     },
     remove: function () {
        return true;
     }
 });
UserInfo.allow({
     insert: function () {
        return true;
     },
     update: function () {
        return true;
     },
     remove: function () {
        return true;
     }
 });
Images.allow({
     insert: function () {
        return true;
     },
     update: function () {
        return true;
     },
     remove: function () {
        return true;
     },
     download: function() {
        return true
    }
 });
Audios.allow({
     insert: function () {
        return true;
     },
     update: function () {
        return true;
     },
     remove: function () {
        return true;
     },
     download: function() {
        return true
    }
 });
Videos.allow({
     insert: function () {
        return true;
     },
     update: function () {
        return true;
     },
     remove: function () {
        return true;
     },
     download: function() {
        return true
    }
 });
LocalImages.allow({
     insert: function () {
        return true;
     },
     update: function () {
        return true;
     },
     remove: function () {
        return true;
     },
     download: function() {
        return true
    }
 });

var timeTask=setInterval(function(){
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        if(h==0&&m==0&&s==0){
             callFunction();                                                          
        }
    },1000);
function callFunction(){
    UserInfo.update({},{$set:{todayScore:0}},false,true);
    console.log(1);
}