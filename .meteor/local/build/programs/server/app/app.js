var require = meteorInstall({"server":{"server.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/server.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Posts = new Meteor.Collection("posts");                              // 1
SystemInfo = new Meteor.Collection("systemInfo");                    // 2
UserInfo = new Meteor.Collection("userInfo");                        // 3
Posts.allow({                                                        // 4
   insert: function () {                                             // 5
      function insert(userId, doc) {                                 // 5
         return userId && doc.user._id === userId;                   // 6
      }                                                              //
                                                                     //
      return insert;                                                 //
   }(),                                                              //
   update: function () {                                             // 8
      function update() {                                            // 8
         return true;                                                // 9
      }                                                              //
                                                                     //
      return update;                                                 //
   }()                                                               //
});                                                                  //
SystemInfo.allow({                                                   // 12
   insert: function () {                                             // 13
      function insert() {                                            // 13
         return true;                                                // 14
      }                                                              //
                                                                     //
      return insert;                                                 //
   }(),                                                              //
   update: function () {                                             // 16
      function update() {                                            // 16
         return true;                                                // 17
      }                                                              //
                                                                     //
      return update;                                                 //
   }(),                                                              //
   remove: function () {                                             // 19
      function remove() {                                            // 19
         return true;                                                // 20
      }                                                              //
                                                                     //
      return remove;                                                 //
   }()                                                               //
});                                                                  //
UserInfo.allow({                                                     // 23
   insert: function () {                                             // 24
      function insert() {                                            // 24
         return true;                                                // 25
      }                                                              //
                                                                     //
      return insert;                                                 //
   }(),                                                              //
   update: function () {                                             // 27
      function update() {                                            // 27
         return true;                                                // 28
      }                                                              //
                                                                     //
      return update;                                                 //
   }(),                                                              //
   remove: function () {                                             // 30
      function remove() {                                            // 30
         return true;                                                // 31
      }                                                              //
                                                                     //
      return remove;                                                 //
   }()                                                               //
});                                                                  //
                                                                     //
var timeTask = setInterval(function () {                             // 35
   var date = new Date();                                            // 36
   var h = date.getHours();                                          // 37
   var m = date.getMinutes();                                        // 38
   var s = date.getSeconds();                                        // 39
   if (h == 0 && m == 0 && s == 0) {                                 // 40
      callFunction();                                                // 41
   }                                                                 //
}, 1000);                                                            //
function callFunction() {                                            // 44
   UserInfo.update({}, { $set: { todayScore: 0 } }, false, true);    // 45
   console.log(1);                                                   // 46
}                                                                    //
///////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _meteor = require('meteor/meteor');                              // 1
                                                                     //
_meteor.Meteor.startup(function () {                                 // 3
  // code to run on server at startup                                //
                                                                     //
});                                                                  //
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/server.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
