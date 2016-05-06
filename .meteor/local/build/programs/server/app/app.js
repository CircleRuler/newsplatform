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
   }()                                                               //
});                                                                  //
SystemInfo.allow({                                                   // 9
   insert: function () {                                             // 10
      function insert() {                                            // 10
         return true;                                                // 11
      }                                                              //
                                                                     //
      return insert;                                                 //
   }(),                                                              //
   update: function () {                                             // 13
      function update() {                                            // 13
         return true;                                                // 14
      }                                                              //
                                                                     //
      return update;                                                 //
   }(),                                                              //
   remove: function () {                                             // 16
      function remove() {                                            // 16
         return true;                                                // 17
      }                                                              //
                                                                     //
      return remove;                                                 //
   }()                                                               //
});                                                                  //
UserInfo.allow({                                                     // 20
   insert: function () {                                             // 21
      function insert() {                                            // 21
         return true;                                                // 22
      }                                                              //
                                                                     //
      return insert;                                                 //
   }(),                                                              //
   update: function () {                                             // 24
      function update() {                                            // 24
         return true;                                                // 25
      }                                                              //
                                                                     //
      return update;                                                 //
   }(),                                                              //
   remove: function () {                                             // 27
      function remove() {                                            // 27
         return true;                                                // 28
      }                                                              //
                                                                     //
      return remove;                                                 //
   }()                                                               //
});                                                                  //
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
});                                                                  //
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/server.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
