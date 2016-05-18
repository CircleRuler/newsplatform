Posts = new Meteor.Collection("posts");
SystemInfo = new Meteor.Collection("systemInfo");
UserInfo = new Meteor.Collection("userInfo");
Posts.allow({
    insert: function (userId,doc) {
        return userId && (doc.user._id === userId);
    },
     update: function () {
        return true;
     }
})
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