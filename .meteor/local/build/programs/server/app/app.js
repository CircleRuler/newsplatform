var require = meteorInstall({"server":{"server.js":function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// server/server.js                                                                  //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
Posts = new Meteor.Collection("posts");                                              // 1
SystemInfo = new Meteor.Collection("systemInfo");                                    // 2
UserInfo = new Meteor.Collection("userInfo");                                        // 3
                                                                                     //
Images = new FS.Collection("images", {                                               // 5
   stores: [new FS.Store.FileSystem("images", { path: "~/uploadsImage" })]           // 6
});                                                                                  //
                                                                                     //
Audios = new FS.Collection("audios", {                                               // 9
   stores: [new FS.Store.FileSystem("audios", { path: "~/uploadsAudio" })]           // 10
});                                                                                  //
                                                                                     //
Videos = new FS.Collection("videos", {                                               // 13
   stores: [new FS.Store.FileSystem("videos", { path: "~/uploadsVideo" })]           // 14
});                                                                                  //
                                                                                     //
LocalImages = new FS.Collection("localimages", {                                     // 17
   stores: [new FS.Store.FileSystem("localimages", { path: "~/uploadsLocalImage" })]
});                                                                                  //
                                                                                     //
Posts.allow({                                                                        // 21
   insert: function () {                                                             // 22
      function insert(userId, doc) {                                                 // 22
         return userId && doc.user._id === userId;                                   // 23
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 25
      function update() {                                                            // 25
         return true;                                                                // 26
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }()                                                                               //
});                                                                                  //
SystemInfo.allow({                                                                   // 29
   insert: function () {                                                             // 30
      function insert() {                                                            // 30
         return true;                                                                // 31
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 33
      function update() {                                                            // 33
         return true;                                                                // 34
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }(),                                                                              //
   remove: function () {                                                             // 36
      function remove() {                                                            // 36
         return true;                                                                // 37
      }                                                                              //
                                                                                     //
      return remove;                                                                 //
   }()                                                                               //
});                                                                                  //
UserInfo.allow({                                                                     // 40
   insert: function () {                                                             // 41
      function insert() {                                                            // 41
         return true;                                                                // 42
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 44
      function update() {                                                            // 44
         return true;                                                                // 45
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }(),                                                                              //
   remove: function () {                                                             // 47
      function remove() {                                                            // 47
         return true;                                                                // 48
      }                                                                              //
                                                                                     //
      return remove;                                                                 //
   }()                                                                               //
});                                                                                  //
Images.allow({                                                                       // 51
   insert: function () {                                                             // 52
      function insert() {                                                            // 52
         return true;                                                                // 53
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 55
      function update() {                                                            // 55
         return true;                                                                // 56
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }(),                                                                              //
   remove: function () {                                                             // 58
      function remove() {                                                            // 58
         return true;                                                                // 59
      }                                                                              //
                                                                                     //
      return remove;                                                                 //
   }(),                                                                              //
   download: function () {                                                           // 61
      function download() {                                                          // 61
         return true;                                                                // 62
      }                                                                              //
                                                                                     //
      return download;                                                               //
   }()                                                                               //
});                                                                                  //
Audios.allow({                                                                       // 65
   insert: function () {                                                             // 66
      function insert() {                                                            // 66
         return true;                                                                // 67
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 69
      function update() {                                                            // 69
         return true;                                                                // 70
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }(),                                                                              //
   remove: function () {                                                             // 72
      function remove() {                                                            // 72
         return true;                                                                // 73
      }                                                                              //
                                                                                     //
      return remove;                                                                 //
   }(),                                                                              //
   download: function () {                                                           // 75
      function download() {                                                          // 75
         return true;                                                                // 76
      }                                                                              //
                                                                                     //
      return download;                                                               //
   }()                                                                               //
});                                                                                  //
Videos.allow({                                                                       // 79
   insert: function () {                                                             // 80
      function insert() {                                                            // 80
         return true;                                                                // 81
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 83
      function update() {                                                            // 83
         return true;                                                                // 84
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }(),                                                                              //
   remove: function () {                                                             // 86
      function remove() {                                                            // 86
         return true;                                                                // 87
      }                                                                              //
                                                                                     //
      return remove;                                                                 //
   }(),                                                                              //
   download: function () {                                                           // 89
      function download() {                                                          // 89
         return true;                                                                // 90
      }                                                                              //
                                                                                     //
      return download;                                                               //
   }()                                                                               //
});                                                                                  //
LocalImages.allow({                                                                  // 93
   insert: function () {                                                             // 94
      function insert() {                                                            // 94
         return true;                                                                // 95
      }                                                                              //
                                                                                     //
      return insert;                                                                 //
   }(),                                                                              //
   update: function () {                                                             // 97
      function update() {                                                            // 97
         return true;                                                                // 98
      }                                                                              //
                                                                                     //
      return update;                                                                 //
   }(),                                                                              //
   remove: function () {                                                             // 100
      function remove() {                                                            // 100
         return true;                                                                // 101
      }                                                                              //
                                                                                     //
      return remove;                                                                 //
   }(),                                                                              //
   download: function () {                                                           // 103
      function download() {                                                          // 103
         return true;                                                                // 104
      }                                                                              //
                                                                                     //
      return download;                                                               //
   }()                                                                               //
});                                                                                  //
                                                                                     //
var timeTask = setInterval(function () {                                             // 108
   var date = new Date();                                                            // 109
   var h = date.getHours();                                                          // 110
   var m = date.getMinutes();                                                        // 111
   var s = date.getSeconds();                                                        // 112
   if (h == 0 && m == 0 && s == 0) {                                                 // 113
      callFunction();                                                                // 114
   }                                                                                 //
}, 1000);                                                                            //
function callFunction() {                                                            // 117
   UserInfo.update({}, { $set: { todayScore: 0 } }, false, true);                    // 118
   console.log(1);                                                                   // 119
}                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// server/main.js                                                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var _meteor = require('meteor/meteor');                                              // 1
                                                                                     //
_meteor.Meteor.startup(function () {                                                 // 4
  // code to run on server at startup                                                //
  UserInfo.update({}, { $set: { todayScore: 0 } }, false, true);                     // 6
});                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/server.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
