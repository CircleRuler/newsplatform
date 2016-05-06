var require = meteorInstall({"client":{"template.client.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.client.js                                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.body.addContent((function() {                                                                           // 2
  var view = this;                                                                                               // 3
  return [ Spacebars.include(view.lookupTemplate("nav")), "\n    ", Spacebars.include(view.lookupTemplate("container")), "\n    ", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                                                             // 5
Meteor.startup(Template.body.renderToDocument);                                                                  // 6
                                                                                                                 // 7
Template.__checkName("nav");                                                                                     // 8
Template["nav"] = new Template("Template.nav", (function() {                                                     // 9
  var view = this;                                                                                               // 10
  return HTML.DIV({                                                                                              // 11
    "class": "navbar navbar-inverse navbar-fixed-top"                                                            // 12
  }, "\n        ", HTML.DIV({                                                                                    // 13
    "class": "navbar-inner"                                                                                      // 14
  }, "\n            ", HTML.DIV({                                                                                // 15
    "class": "container"                                                                                         // 16
  }, "\n                ", HTML.Raw('<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </a>'), "\n                ", HTML.Raw('<a href="/" class="brand">新闻爆料</a>'), "\n                ", HTML.DIV({
    "class": "nav-collapse"                                                                                      // 18
  }, "\n                    ", HTML.UL({                                                                         // 19
    "class": "nav"                                                                                               // 20
  }, "\n                        ", HTML.LI({                                                                     // 21
    "class": function() {                                                                                        // 22
      return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "lists"));                                  // 23
    }                                                                                                            // 24
  }, HTML.Raw('<a href="/lists" style="font-weight: bold;color:#eee;font-size: 18px;">排行榜</a>')), "\n                        ", HTML.LI({
    "class": function() {                                                                                        // 26
      return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "index"));                                  // 27
    }                                                                                                            // 28
  }, HTML.Raw('<a href="/">首页</a>')), "\n                        ", Blaze.If(function() {                        // 29
    return Spacebars.call(view.lookup("currentUser"));                                                           // 30
  }, function() {                                                                                                // 31
    return [ "\n                            ", HTML.LI({                                                         // 32
      "class": function() {                                                                                      // 33
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "self"));                                 // 34
      }                                                                                                          // 35
    }, HTML.A({                                                                                                  // 36
      href: "/self"                                                                                              // 37
    }, Blaze.View("lookup:currentUser.username", function() {                                                    // 38
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                          // 39
    }))), "\n                            ", HTML.LI({                                                            // 40
      "class": function() {                                                                                      // 41
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "friend"));                               // 42
      }                                                                                                          // 43
    }, HTML.A({                                                                                                  // 44
      href: "/friend"                                                                                            // 45
    }, "好友")), "\n                            ", HTML.LI(HTML.A({                                                // 46
      href: "/logout"                                                                                            // 47
    }, "登出")), "\n                        " ];                                                                   // 48
  }, function() {                                                                                                // 49
    return [ "\n                            ", HTML.LI({                                                         // 50
      "class": function() {                                                                                      // 51
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "login"));                                // 52
      }                                                                                                          // 53
    }, HTML.A({                                                                                                  // 54
      href: "/login"                                                                                             // 55
    }, "登入")), "\n                            ", HTML.LI({                                                       // 56
      "class": function() {                                                                                      // 57
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "reg"));                                  // 58
      }                                                                                                          // 59
    }, HTML.A({                                                                                                  // 60
      href: "/reg"                                                                                               // 61
    }, "注册")), "\n                        " ];                                                                   // 62
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ");             // 63
}));                                                                                                             // 64
                                                                                                                 // 65
Template.__checkName("container");                                                                               // 66
Template["container"] = new Template("Template.container", (function() {                                         // 67
  var view = this;                                                                                               // 68
  return HTML.DIV({                                                                                              // 69
    id: "container",                                                                                             // 70
    "class": "container"                                                                                         // 71
  }, "\n        ", Spacebars.include(view.lookupTemplate("info")), "\n        ", Blaze.If(function() {           // 72
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "index"));                                    // 73
  }, function() {                                                                                                // 74
    return [ "\n            ", Spacebars.include(view.lookupTemplate("index")), "\n        " ];                  // 75
  }), "\n        ", Blaze.If(function() {                                                                        // 76
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "login"));                                    // 77
  }, function() {                                                                                                // 78
    return [ "\n            ", Spacebars.include(view.lookupTemplate("login")), "\n        " ];                  // 79
  }), "\n        ", Blaze.If(function() {                                                                        // 80
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "reg"));                                      // 81
  }, function() {                                                                                                // 82
    return [ "\n            ", Spacebars.include(view.lookupTemplate("reg")), "\n        " ];                    // 83
  }), "\n        ", Blaze.If(function() {                                                                        // 84
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "self"));                                     // 85
  }, function() {                                                                                                // 86
    return [ "\n            ", Spacebars.include(view.lookupTemplate("self")), "\n        " ];                   // 87
  }), "\n        ", Blaze.If(function() {                                                                        // 88
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "friend"));                                   // 89
  }, function() {                                                                                                // 90
    return [ "\n            ", Spacebars.include(view.lookupTemplate("friend")), "\n        " ];                 // 91
  }), "\n        ", Blaze.If(function() {                                                                        // 92
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "lists"));                                    // 93
  }, function() {                                                                                                // 94
    return [ "\n            ", Spacebars.include(view.lookupTemplate("lists")), "\n        " ];                  // 95
  }), "\n    ");                                                                                                 // 96
}));                                                                                                             // 97
                                                                                                                 // 98
Template.__checkName("footer");                                                                                  // 99
Template["footer"] = new Template("Template.footer", (function() {                                               // 100
  var view = this;                                                                                               // 101
  return HTML.Raw('<p class="muted text-center">Newsplatform 2016</p>');                                         // 102
}));                                                                                                             // 103
                                                                                                                 // 104
Template.__checkName("info");                                                                                    // 105
Template["info"] = new Template("Template.info", (function() {                                                   // 106
  var view = this;                                                                                               // 107
  return [ Blaze.If(function() {                                                                                 // 108
    return Spacebars.call(Spacebars.dot(view.lookup("info"), "success"));                                        // 109
  }, function() {                                                                                                // 110
    return [ "\n        ", HTML.DIV({                                                                            // 111
      "class": "alert alert-success"                                                                             // 112
    }, Blaze.View("lookup:info.success", function() {                                                            // 113
      return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "success"));                                  // 114
    })), "\n    " ];                                                                                             // 115
  }), "\n    ", Blaze.If(function() {                                                                            // 116
    return Spacebars.call(Spacebars.dot(view.lookup("info"), "error"));                                          // 117
  }, function() {                                                                                                // 118
    return [ "\n        ", HTML.DIV({                                                                            // 119
      "class": "alert alert-error"                                                                               // 120
    }, Blaze.View("lookup:info.error", function() {                                                              // 121
      return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "error"));                                    // 122
    })), "\n    " ];                                                                                             // 123
  }) ];                                                                                                          // 124
}));                                                                                                             // 125
                                                                                                                 // 126
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.friend.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.friend.js                                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("friend");                                                                                  // 2
Template["friend"] = new Template("Template.friend", (function() {                                               // 3
  var view = this;                                                                                               // 4
  return Blaze.Each(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("friend"));                                                                // 6
  }, function() {                                                                                                // 7
    return [ "\n        ", HTML.LI(HTML.SPAN("第", Blaze.View("lookup:rank", function() {                         // 8
      return Spacebars.mustache(view.lookup("rank"));                                                            // 9
    }), "名"), HTML.SPAN(Blaze.View("lookup:user.username", function() {                                          // 10
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                 // 11
    })), HTML.SPAN("总分是", Blaze.View("lookup:totalScore", function() {                                           // 12
      return Spacebars.mustache(view.lookup("totalScore"));                                                      // 13
    }))), "\n    " ];                                                                                            // 14
  });                                                                                                            // 15
}));                                                                                                             // 16
                                                                                                                 // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.index.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.index.js                                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("index");                                                                                   // 2
Template["index"] = new Template("Template.index", (function() {                                                 // 3
  var view = this;                                                                                               // 4
  return [ Blaze.If(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("currentUser"));                                                           // 6
  }, function() {                                                                                                // 7
    return [ "\n        ", HTML.FORM({                                                                           // 8
      action: "",                                                                                                // 9
      "class": "well form-inline center",                                                                        // 10
      style: "text-align:center;"                                                                                // 11
    }, "\n            ", HTML.TEXTAREA({                                                                         // 12
      "class": "span8",                                                                                          // 13
      id: "post"                                                                                                 // 14
    }), "\n            ", HTML.BUTTON({                                                                          // 15
      id: "submit",                                                                                              // 16
      "class": "btn btn-success"                                                                                 // 17
    }, "发表"), "\n        "), "\n    " ];                                                                         // 18
  }, function() {                                                                                                // 19
    return [ "\n        ", HTML.H2("游客无法发布新闻或者评论。请注册或者登陆。"), "\n    " ];                                         // 20
  }), "\n    ", Blaze.Each(function() {                                                                          // 21
    return Spacebars.call(view.lookup("posts"));                                                                 // 22
  }, function() {                                                                                                // 23
    return [ "\n        ", HTML.H2("\n            ", Blaze.View("lookup:user.username", function() {             // 24
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                 // 25
    }), " \n            ", HTML.BUTTON({                                                                         // 26
      id: "addFriend",                                                                                           // 27
      "class": "btn"                                                                                             // 28
    }, "加好友"), ":\n        "), "\n        ", HTML.P({                                                            // 29
      "class": "muted"                                                                                           // 30
    }, Blaze.View("lookup:time", function() {                                                                    // 31
      return Spacebars.mustache(view.lookup("time"));                                                            // 32
    })), "\n        ", HTML.P(Spacebars.include(view.lookupTemplate("markdown"), function() {                    // 33
      return Blaze.View("lookup:post", function() {                                                              // 34
        return Spacebars.mustache(view.lookup("post"));                                                          // 35
      });                                                                                                        // 36
    })), "\n        ", Blaze.If(function() {                                                                     // 37
      return Spacebars.call(view.lookup("currentUser"));                                                         // 38
    }, function() {                                                                                              // 39
      return [ "\n            ", HTML.P("\n            ", HTML.INPUT({                                           // 40
        type: "text",                                                                                            // 41
        "class": "span8",                                                                                        // 42
        id: function() {                                                                                         // 43
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                     // 44
        }                                                                                                        // 45
      }), "\n            ", HTML.BUTTON({                                                                        // 46
        id: "commnetSubmit",                                                                                     // 47
        "class": "btn btn-success"                                                                               // 48
      }, "评论"), "\n            "), "\n        " ];                                                               // 49
    }), "\n        ", Blaze.Each(function() {                                                                    // 50
      return Spacebars.call(view.lookup("comments"));                                                            // 51
    }, function() {                                                                                              // 52
      return [ "\n            ", HTML.P(Blaze.View("lookup:user.username", function() {                          // 53
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                               // 54
      }), " 评论: ", Blaze.View("lookup:post", function() {                                                        // 55
        return Spacebars.mustache(view.lookup("post"));                                                          // 56
      })), "\n        " ];                                                                                       // 57
    }), "\n    " ];                                                                                              // 58
  }) ];                                                                                                          // 59
}));                                                                                                             // 60
                                                                                                                 // 61
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.lists.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.lists.js                                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("lists");                                                                                   // 2
Template["lists"] = new Template("Template.lists", (function() {                                                 // 3
  var view = this;                                                                                               // 4
  return Blaze.Each(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("lists"));                                                                 // 6
  }, function() {                                                                                                // 7
    return [ "\n        ", HTML.LI(HTML.SPAN("第", Blaze.View("lookup:rank", function() {                         // 8
      return Spacebars.mustache(view.lookup("rank"));                                                            // 9
    }), "名"), HTML.SPAN(Blaze.View("lookup:user.username", function() {                                          // 10
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                 // 11
    })), HTML.SPAN("总分是", Blaze.View("lookup:totalScore", function() {                                           // 12
      return Spacebars.mustache(view.lookup("totalScore"));                                                      // 13
    }))), "\n    " ];                                                                                            // 14
  });                                                                                                            // 15
}));                                                                                                             // 16
                                                                                                                 // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.login.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.login.js                                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("login");                                                                                   // 2
Template["login"] = new Template("Template.login", (function() {                                                 // 3
  var view = this;                                                                                               // 4
  return HTML.Raw('<form action="" class="form-horizontal">\n        <fieldset>\n            <legend>用户登入</legend>\n            <div class="control-group">\n                <label for="username" class="control-label">用户名</label>\n                <div class="controls">\n                    <input type="text" id="username" class="input-xlarge" name="username" required="">\n                </div>\n            </div>\n            <div class="control-group">\n                <label for="password" class="control-label">密码</label>\n                <div class="controls">\n                    <input type="password" name="password" class="input-xlarge" id="password" required="">\n                </div>\n            </div>\n            <div class="form-actions">\n                <button id="submit" class="btn btn-primary">登入</button>\n            </div>\n        </fieldset>\n    </form>');
}));                                                                                                             // 6
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.reg.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.reg.js                                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("reg");                                                                                     // 2
Template["reg"] = new Template("Template.reg", (function() {                                                     // 3
  var view = this;                                                                                               // 4
  return HTML.FORM({                                                                                             // 5
    action: "",                                                                                                  // 6
    "class": "form-horizontal"                                                                                   // 7
  }, "\n        ", HTML.FIELDSET("\n            ", HTML.getTag("lengend")("用户注册"), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="username" class="control-label">用户名</label>\n                <div class="controls">\n                    <input type="text" id="username" class="input-xlarge" name="username" required="" autocomplete="false">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="useremail" class="control-label">邮箱</label>\n                <div class="controls">\n                    <input type="text" id="useremail" class="input-xlarge" name="useremail" required="" autocomplete="false">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="password" class="control-label">密码</label>\n                <div class="controls">\n                    <input type="password" class="input-xlarge" id="password" name="password" required="">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="password-repeat" class="control-label">重复输入密码</label>\n                <div class="controls">\n                    <input type="password" name="password-repeat" class="input-xlarge" id="password-repeat" required="">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="form-actions">\n                <button id="submit" class="btn btn-primary">注册</button>\n            </div>'), "\n        "), "\n    ");
}));                                                                                                             // 9
                                                                                                                 // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.self.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/template.self.js                                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("self");                                                                                    // 2
Template["self"] = new Template("Template.self", (function() {                                                   // 3
  var view = this;                                                                                               // 4
  return Blaze.Each(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("self"));                                                                  // 6
  }, function() {                                                                                                // 7
    return [ "\n        ", Blaze.If(function() {                                                                 // 8
      return Spacebars.call(view.lookup("isAdmin"));                                                             // 9
    }, function() {                                                                                              // 10
      return [ "\n            ", HTML.H1("尊贵的管理员账户！"), "\n        " ];                                           // 11
    }, function() {                                                                                              // 12
      return [ "\n            ", HTML.H4("普通用户。"), "\n        " ];                                               // 13
    }), "\n        ", HTML.LI("用户名：", Blaze.View("lookup:user.username", function() {                            // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                 // 15
    })), "\n        ", HTML.LI("注册邮箱：", Blaze.View("lookup:user.emails.0.address", function() {                  // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "emails", "0", "address"));                   // 17
    })), "\n        ", HTML.LI("总积分：", Blaze.View("lookup:totalScore", function() {                              // 18
      return Spacebars.mustache(view.lookup("totalScore"));                                                      // 19
    })), "\n        ", HTML.LI("今日积分：", Blaze.View("lookup:todayScore", function() {                             // 20
      return Spacebars.mustache(view.lookup("todayScore"));                                                      // 21
    })), "\n        ", HTML.LI("好友总数：", Blaze.View("lookup:totalFriend", function() {                            // 22
      return Spacebars.mustache(view.lookup("totalFriend"));                                                     // 23
    })), "\n        ", HTML.LI("排名：", Blaze.View("lookup:rank", function() {                                     // 24
      return Spacebars.mustache(view.lookup("rank"));                                                            // 25
    })), "\n        ", HTML.LI("注册时间：", Blaze.View("lookup:time", function() {                                   // 26
      return Spacebars.mustache(view.lookup("time"));                                                            // 27
    })), "\n    " ];                                                                                             // 28
  });                                                                                                            // 29
}));                                                                                                             // 30
                                                                                                                 // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// client/client.js                                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Session.setDefault("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });      // 1
Session.setDefault("info", { success: "", error: "" });                                                          // 2
Posts = new Meteor.Collection("posts");                                                                          // 3
SystemInfo = new Meteor.Collection("systemInfo");                                                                // 4
UserInfo = new Meteor.Collection("userInfo");                                                                    // 5
                                                                                                                 //
Template.info.helpers({                                                                                          // 7
    info: function () {                                                                                          // 8
        function info() {                                                                                        //
            return Session.get("info");                                                                          // 9
        }                                                                                                        //
                                                                                                                 //
        return info;                                                                                             //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.container.helpers({                                                                                     // 13
    currentUrl: function () {                                                                                    // 14
        function currentUrl() {                                                                                  //
            return Session.get("currentUrl");                                                                    // 15
        }                                                                                                        //
                                                                                                                 //
        return currentUrl;                                                                                       //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.nav.helpers({                                                                                           // 19
    active: function () {                                                                                        // 20
        function active() {                                                                                      //
            return Session.get("currentUrl");                                                                    // 21
        }                                                                                                        //
                                                                                                                 //
        return active;                                                                                           //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.index.helpers({                                                                                         // 25
    posts: function () {                                                                                         // 26
        function posts() {                                                                                       //
            if (!Meteor.userId()) {                                                                              // 27
                return Posts.find({ "user._id": "NAEQJhrKe79xtC8Hd", "super": 0 }, { sort: { time: -1 } });      // 28
            } else {                                                                                             //
                return Posts.find({ "super": 0 }, { sort: { time: -1 } });                                       // 30
            }                                                                                                    //
        }                                                                                                        //
                                                                                                                 //
        return posts;                                                                                            //
    }(),                                                                                                         //
    comments: function () {                                                                                      // 33
        function comments() {                                                                                    //
            return Posts.find({ "super": this._id }, { sort: { time: -1 } });                                    // 34
        }                                                                                                        //
                                                                                                                 //
        return comments;                                                                                         //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.lists.helpers({                                                                                         // 38
    lists: function () {                                                                                         // 39
        function lists() {                                                                                       //
            return UserInfo.find({}, { sort: { rank: 1 } });                                                     // 40
        }                                                                                                        //
                                                                                                                 //
        return lists;                                                                                            //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.self.helpers({                                                                                          // 44
    self: function () {                                                                                          // 45
        function self() {                                                                                        //
            return UserInfo.find({ "user._id": Meteor.userId() });                                               // 46
        }                                                                                                        //
                                                                                                                 //
        return self;                                                                                             //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.friend.helpers({                                                                                        // 50
    friend: function () {                                                                                        // 51
        function friend() {                                                                                      //
            var Afriend = UserInfo.findOne({ "user._id": Meteor.userId() }).Friends;                             // 52
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } });                       // 53
        }                                                                                                        //
                                                                                                                 //
        return friend;                                                                                           //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 57
    Backbone.history.start({ pushState: true });                                                                 // 58
});                                                                                                              //
                                                                                                                 //
var urlRouter = Backbone.Router.extend({                                                                         // 61
    routes: {                                                                                                    // 62
        "": "index",                                                                                             // 63
        "login": "login",                                                                                        // 64
        "reg": "reg",                                                                                            // 65
        "logout": "logout",                                                                                      // 66
        "friend": "friend",                                                                                      // 67
        "lists": "lists",                                                                                        // 68
        "self": "self"                                                                                           // 69
    },                                                                                                           //
    index: function () {                                                                                         // 71
        function index() {                                                                                       // 71
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return index;                                                                                            //
    }(),                                                                                                         //
    friend: function () {                                                                                        // 74
        function friend() {                                                                                      // 74
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return friend;                                                                                           //
    }(),                                                                                                         //
    lists: function () {                                                                                         // 77
        function lists() {                                                                                       // 77
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return lists;                                                                                            //
    }(),                                                                                                         //
    self: function () {                                                                                          // 80
        function self() {                                                                                        // 80
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active" });
        }                                                                                                        //
                                                                                                                 //
        return self;                                                                                             //
    }(),                                                                                                         //
    login: function () {                                                                                         // 83
        function login() {                                                                                       // 83
            if (Meteor.userId()) {                                                                               // 84
                this.navigate("/", true);                                                                        // 85
                Session.set("info", { success: "", error: "用户已在线！" });                                           // 86
            }                                                                                                    //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return login;                                                                                            //
    }(),                                                                                                         //
    reg: function () {                                                                                           // 90
        function reg() {                                                                                         // 90
            if (Meteor.userId()) {                                                                               // 91
                this.navigate("/", true);                                                                        // 92
                Session.set("info", { success: "", error: "用户已在线！" });                                           // 93
            }                                                                                                    //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return reg;                                                                                              //
    }(),                                                                                                         //
    logout: function () {                                                                                        // 97
        function logout() {                                                                                      // 97
            if (Meteor.userId()) {                                                                               // 98
                Meteor.logout();                                                                                 // 99
                this.navigate("/", true);                                                                        // 100
                Session.set("info", { success: "登出成功", error: "" });                                             // 101
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                 // 102
            } else {                                                                                             //
                this.navigate("/", true);                                                                        // 104
                Session.set("info", { success: "", error: "用户不在线！" });                                           // 105
            }                                                                                                    //
        }                                                                                                        //
                                                                                                                 //
        return logout;                                                                                           //
    }(),                                                                                                         //
    redirect: function () {                                                                                      // 108
        function redirect(url) {                                                                                 // 108
            this.navigate(url, true);                                                                            // 109
        }                                                                                                        //
                                                                                                                 //
        return redirect;                                                                                         //
    }()                                                                                                          //
});                                                                                                              //
Router = new urlRouter();                                                                                        // 112
                                                                                                                 //
Template.reg.events({                                                                                            // 114
    'click #submit': function () {                                                                               // 115
        function clickSubmit(event) {                                                                            // 115
            event.preventDefault();                                                                              // 116
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                            // 117
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });              // 118
            }                                                                                                    //
            var $username = $("#username").val();                                                                // 120
            var $password = $("#password").val();                                                                // 121
            var $useremail = $("#useremail").val();                                                              // 122
            var $password_repeat = $("#password-repeat").val();                                                  // 123
            if ($password.length === 0 || $username.length === 0) {                                              // 124
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                      // 125
                return;                                                                                          // 126
            }                                                                                                    //
            if ($password !== $password_repeat) {                                                                // 128
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                        // 129
                return;                                                                                          // 130
            }                                                                                                    //
            Accounts.createUser({                                                                                // 132
                username: $username,                                                                             // 133
                password: $password,                                                                             // 134
                email: $useremail }, function (err) {                                                            // 135
                if (err) {                                                                                       // 137
                    Session.set("info", { success: "", error: "注册失败" });                                         // 138
                } else {                                                                                         //
                    Session.set("info", { success: "注册成功", error: "" });                                         // 140
                    UserInfo.insert({                                                                            // 141
                        user: Meteor.user(),                                                                     // 142
                        isAdmin: false,                                                                          // 143
                        totalScore: 0,                                                                           // 144
                        todayScore: 0,                                                                           // 145
                        totalFriend: 1,                                                                          // 146
                        Friends: [Meteor.userId()],                                                              // 147
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],              // 148
                        time: new Date()                                                                         // 149
                    });                                                                                          //
                }                                                                                                //
            });                                                                                                  //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                     // 154
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                    // 155
        }                                                                                                        //
                                                                                                                 //
        return clickSubmit;                                                                                      //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.login.events({                                                                                          // 159
    'click #submit': function () {                                                                               // 160
        function clickSubmit(event) {                                                                            // 160
            event.preventDefault();                                                                              // 161
            var $username = $("#username").val();                                                                // 162
            var $password = $("#password").val();                                                                // 163
            if ($password.length === 0 || $username.length === 0) {                                              // 164
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                       // 165
                return;                                                                                          // 166
            }                                                                                                    //
            Meteor.loginWithPassword($username, $password, function (err) {                                      // 168
                if (err) {                                                                                       // 169
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                              // 170
                } else {                                                                                         //
                    Router.redirect("/");                                                                        // 172
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                            // 173
                    Session.set("info", { success: "登陆成功", error: "" });                                         // 174
                }                                                                                                //
            });                                                                                                  //
        }                                                                                                        //
                                                                                                                 //
        return clickSubmit;                                                                                      //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.index.events({                                                                                          // 180
    'click #submit': function () {                                                                               // 181
        function clickSubmit(event) {                                                                            // 181
            event.preventDefault();                                                                              // 182
            var $post = $("#post").val();                                                                        // 183
            if ($post.length === 0 || $post.length >= 200) {                                                     // 184
                Session.set("info", { success: "", error: "请将字数限制在1-200字以内" });                                  // 185
                return;                                                                                          // 186
            }                                                                                                    //
            Posts.insert({                                                                                       // 188
                user: Meteor.user(),                                                                             // 189
                post: $post,                                                                                     // 190
                "super": 0,                                                                                      // 191
                time: new Date() }, function (err) {                                                             // 192
                if (err) {                                                                                       // 194
                    Session.set("info", { success: "", error: "发表失败，原因自寻" });                                    // 195
                } else {                                                                                         //
                    Session.set("info", { success: "发表成功", error: "" });                                         // 197
                    $("#post").val("");                                                                          // 198
                }                                                                                                //
            });                                                                                                  //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                     // 202
        }                                                                                                        //
                                                                                                                 //
        return clickSubmit;                                                                                      //
    }(),                                                                                                         //
    'click #commnetSubmit': function () {                                                                        // 204
        function clickCommnetSubmit(event) {                                                                     // 204
            event.preventDefault();                                                                              // 205
            var $comment = $("#" + this._id).val();                                                              // 206
            if ($comment.length === 0 || $comment.length >= 100) {                                               // 207
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                  // 208
                return;                                                                                          // 209
            }                                                                                                    //
            Posts.insert({                                                                                       // 211
                user: Meteor.user(),                                                                             // 212
                post: $comment,                                                                                  // 213
                "super": this._id,                                                                               // 214
                time: new Date() }, function (err) {                                                             // 215
                if (err) {                                                                                       // 217
                    Session.set("info", { success: "", error: "评论失败，原因自寻" });                                    // 218
                } else {                                                                                         //
                    Session.set("info", { success: "评论成功", error: "" });                                         // 220
                    $("#" + this._id).val("");                                                                   // 221
                }                                                                                                //
            });                                                                                                  //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                     // 225
        }                                                                                                        //
                                                                                                                 //
        return clickCommnetSubmit;                                                                               //
    }(),                                                                                                         //
    'click #addFriend': function () {                                                                            // 227
        function clickAddFriend(event) {                                                                         // 227
            event.preventDefault();                                                                              // 228
            var $friendId = this.user._id;                                                                       // 229
            if (UserInfo.findOne({ "Friends": $friendId })) {                                                    // 230
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                       // 231
                return;                                                                                          // 232
            }                                                                                                    //
                                                                                                                 //
            var userInfoId = UserInfo.findOne({ "user._id": Meteor.userId() })._id;                              // 235
            UserInfo.update({                                                                                    // 236
                "_id": userInfoId                                                                                // 237
            }, {                                                                                                 //
                $addToSet: { "Friends": $friendId },                                                             // 239
                $inc: { "totalFriend": 1 }                                                                       // 240
            }, true, true, function (err) {                                                                      //
                if (err) {                                                                                       // 244
                    Session.set("info", { success: "", error: "添加好友失败" });                                       // 245
                } else {                                                                                         //
                    Session.set("info", { success: "添加成功", error: "" });                                         // 247
                }                                                                                                //
            });                                                                                                  //
        }                                                                                                        //
                                                                                                                 //
        return clickAddFriend;                                                                                   //
    }()                                                                                                          //
});                                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.client.js");
require("./client/template.friend.js");
require("./client/template.index.js");
require("./client/template.lists.js");
require("./client/template.login.js");
require("./client/template.reg.js");
require("./client/template.self.js");
require("./client/client.js");