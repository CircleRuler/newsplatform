var require = meteorInstall({"server":{"server.js":function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// server/server.js                                                        //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
Posts = new Meteor.Collection("posts");                                    // 1
SystemInfo = new Meteor.Collection("systemInfo");                          // 2
UserInfo = new Meteor.Collection("userInfo");                              // 3
                                                                           //
Images = new FS.Collection("images", {                                     // 5
   stores: [new FS.Store.FileSystem("images", { path: "~/uploadsImage" })]
});                                                                        //
                                                                           //
Audios = new FS.Collection("audios", {                                     // 9
   stores: [new FS.Store.FileSystem("audios", { path: "~/uploadsAudio" })]
});                                                                        //
                                                                           //
Videos = new FS.Collection("videos", {                                     // 13
   stores: [new FS.Store.FileSystem("videos", { path: "~/uploadsVideo" })]
});                                                                        //
                                                                           //
Posts.allow({                                                              // 17
   insert: function () {                                                   // 18
      function insert(userId, doc) {                                       // 18
         return userId && doc.user._id === userId;                         // 19
      }                                                                    //
                                                                           //
      return insert;                                                       //
   }(),                                                                    //
   update: function () {                                                   // 21
      function update() {                                                  // 21
         return true;                                                      // 22
      }                                                                    //
                                                                           //
      return update;                                                       //
   }()                                                                     //
});                                                                        //
SystemInfo.allow({                                                         // 25
   insert: function () {                                                   // 26
      function insert() {                                                  // 26
         return true;                                                      // 27
      }                                                                    //
                                                                           //
      return insert;                                                       //
   }(),                                                                    //
   update: function () {                                                   // 29
      function update() {                                                  // 29
         return true;                                                      // 30
      }                                                                    //
                                                                           //
      return update;                                                       //
   }(),                                                                    //
   remove: function () {                                                   // 32
      function remove() {                                                  // 32
         return true;                                                      // 33
      }                                                                    //
                                                                           //
      return remove;                                                       //
   }()                                                                     //
});                                                                        //
UserInfo.allow({                                                           // 36
   insert: function () {                                                   // 37
      function insert() {                                                  // 37
         return true;                                                      // 38
      }                                                                    //
                                                                           //
      return insert;                                                       //
   }(),                                                                    //
   update: function () {                                                   // 40
      function update() {                                                  // 40
         return true;                                                      // 41
      }                                                                    //
                                                                           //
      return update;                                                       //
   }(),                                                                    //
   remove: function () {                                                   // 43
      function remove() {                                                  // 43
         return true;                                                      // 44
      }                                                                    //
                                                                           //
      return remove;                                                       //
   }()                                                                     //
});                                                                        //
Images.allow({                                                             // 47
   insert: function () {                                                   // 48
      function insert() {                                                  // 48
         return true;                                                      // 49
      }                                                                    //
                                                                           //
      return insert;                                                       //
   }(),                                                                    //
   update: function () {                                                   // 51
      function update() {                                                  // 51
         return true;                                                      // 52
      }                                                                    //
                                                                           //
      return update;                                                       //
   }(),                                                                    //
   remove: function () {                                                   // 54
      function remove() {                                                  // 54
         return true;                                                      // 55
      }                                                                    //
                                                                           //
      return remove;                                                       //
   }()                                                                     //
});                                                                        //
Audios.allow({                                                             // 58
   insert: function () {                                                   // 59
      function insert() {                                                  // 59
         return true;                                                      // 60
      }                                                                    //
                                                                           //
      return insert;                                                       //
   }(),                                                                    //
   update: function () {                                                   // 62
      function update() {                                                  // 62
         return true;                                                      // 63
      }                                                                    //
                                                                           //
      return update;                                                       //
   }(),                                                                    //
   remove: function () {                                                   // 65
      function remove() {                                                  // 65
         return true;                                                      // 66
      }                                                                    //
                                                                           //
      return remove;                                                       //
   }()                                                                     //
});                                                                        //
Videos.allow({                                                             // 69
   insert: function () {                                                   // 70
      function insert() {                                                  // 70
         return true;                                                      // 71
      }                                                                    //
                                                                           //
      return insert;                                                       //
   }(),                                                                    //
   update: function () {                                                   // 73
      function update() {                                                  // 73
         return true;                                                      // 74
      }                                                                    //
                                                                           //
      return update;                                                       //
   }(),                                                                    //
   remove: function () {                                                   // 76
      function remove() {                                                  // 76
         return true;                                                      // 77
      }                                                                    //
                                                                           //
      return remove;                                                       //
   }()                                                                     //
});                                                                        //
                                                                           //
var timeTask = setInterval(function () {                                   // 81
   var date = new Date();                                                  // 82
   var h = date.getHours();                                                // 83
   var m = date.getMinutes();                                              // 84
   var s = date.getSeconds();                                              // 85
   if (h == 0 && m == 0 && s == 0) {                                       // 86
      callFunction();                                                      // 87
   }                                                                       //
}, 1000);                                                                  //
function callFunction() {                                                  // 90
   UserInfo.update({}, { $set: { todayScore: 0 } }, false, true);          // 91
   console.log(1);                                                         // 92
}                                                                          //
/////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// server/main.js                                                          //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var _meteor = require('meteor/meteor');                                    // 1
                                                                           //
_meteor.Meteor.startup(function () {                                       // 3
  // code to run on server at startup                                      //
                                                                           //
});                                                                        //
/////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/server.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
