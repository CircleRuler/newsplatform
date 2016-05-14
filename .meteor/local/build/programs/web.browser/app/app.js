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
    }, "\n            ", HTML.DIV({                                                                              // 12
      "class": "form-group"                                                                                      // 13
    }, "\n                ", HTML.LABEL({                                                                        // 14
      "for": "post"                                                                                              // 15
    }, "Password"), "\n                ", HTML.TEXTAREA({                                                        // 16
      "class": "",                                                                                               // 17
      id: "post",                                                                                                // 18
      rows: "3"                                                                                                  // 19
    }), "\n            "), "\n            \n            ", HTML.DIV({                                            // 20
      "class": "control-group"                                                                                   // 21
    }, "\n                ", HTML.LABEL({                                                                        // 22
      "for": "exampleInputFile"                                                                                  // 23
    }, "链接图片"), "\n                ", HTML.INPUT({                                                               // 24
      type: "file",                                                                                              // 25
      id: "exampleInputFile"                                                                                     // 26
    }), "\n            "), "\n            ", HTML.BUTTON({                                                       // 27
      id: "submit",                                                                                              // 28
      "class": "btn btn-success"                                                                                 // 29
    }, "发表"), "\n        "), "\n    " ];                                                                         // 30
  }, function() {                                                                                                // 31
    return [ "\n        ", HTML.H2("游客无法发布新闻或者评论。请注册或者登陆。"), "\n    " ];                                         // 32
  }), "\n    ", HTML.DIV({                                                                                       // 33
    "class": "row well center"                                                                                   // 34
  }, "\n        ", Blaze.Each(function() {                                                                       // 35
    return Spacebars.call(view.lookup("topPosts"));                                                              // 36
  }, function() {                                                                                                // 37
    return [ "\n        ", HTML.DIV({                                                                            // 38
      "class": "well"                                                                                            // 39
    }, "\n            ", HTML.DIV({                                                                              // 40
      "class": "col-xs-3 "                                                                                       // 41
    }, "\n                ", HTML.H2({                                                                           // 42
      "class": "pull-left"                                                                                       // 43
    }, "\n                    ", Blaze.View("lookup:user.username", function() {                                 // 44
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                 // 45
    }), " :\n                "), "\n            "), "\n            ", HTML.DIV({                                 // 46
      "class": "col-xs-3 "                                                                                       // 47
    }, HTML.BUTTON({                                                                                             // 48
      id: "addFriend",                                                                                           // 49
      "class": "btn btn-primary pull-right"                                                                      // 50
    }, "加好友")), "\n            ", HTML.DIV({                                                                     // 51
      "class": "col-xs-3 "                                                                                       // 52
    }, HTML.BUTTON({                                                                                             // 53
      id: "likePost",                                                                                            // 54
      "class": "btn btn-info col-xs-3 pull-right"                                                                // 55
    }, "点赞(", Blaze.View("lookup:like", function() {                                                             // 56
      return Spacebars.mustache(view.lookup("like"));                                                            // 57
    }), ")")), "\n        "), "\n            ", HTML.P({                                                         // 58
      "class": "muted"                                                                                           // 59
    }, Blaze.View("lookup:time", function() {                                                                    // 60
      return Spacebars.mustache(view.lookup("time"));                                                            // 61
    })), "\n            ", HTML.P(Spacebars.include(view.lookupTemplate("markdown"), function() {                // 62
      return Blaze.View("lookup:post", function() {                                                              // 63
        return Spacebars.mustache(view.lookup("post"));                                                          // 64
      });                                                                                                        // 65
    })), "\n            ", Blaze.If(function() {                                                                 // 66
      return Spacebars.call(view.lookup("currentUser"));                                                         // 67
    }, function() {                                                                                              // 68
      return [ "\n                ", HTML.P("\n                ", HTML.INPUT({                                   // 69
        type: "text",                                                                                            // 70
        "class": "span8",                                                                                        // 71
        id: function() {                                                                                         // 72
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                     // 73
        }                                                                                                        // 74
      }), "\n                ", HTML.BUTTON({                                                                    // 75
        id: "commnetSubmit",                                                                                     // 76
        "class": "btn btn-success"                                                                               // 77
      }, "评论"), "\n                "), "\n            " ];                                                       // 78
    }), "\n            ", Blaze.Each(function() {                                                                // 79
      return Spacebars.call(view.lookup("comments"));                                                            // 80
    }, function() {                                                                                              // 81
      return [ "\n                ", HTML.P(Blaze.View("lookup:user.username", function() {                      // 82
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                               // 83
      }), " 评论: ", Blaze.View("lookup:post", function() {                                                        // 84
        return Spacebars.mustache(view.lookup("post"));                                                          // 85
      })), "\n            " ];                                                                                   // 86
    }), "\n        " ];                                                                                          // 87
  }), "\n    "), "\n    ", HTML.DIV({                                                                            // 88
    "class": "row well center"                                                                                   // 89
  }, "\n        ", Blaze.Each(function() {                                                                       // 90
    return Spacebars.call(view.lookup("posts"));                                                                 // 91
  }, function() {                                                                                                // 92
    return [ "\n        ", HTML.DIV({                                                                            // 93
      "class": "well"                                                                                            // 94
    }, "\n            ", HTML.DIV("\n                ", HTML.H2({                                                // 95
      "class": "pull-left"                                                                                       // 96
    }, "\n                    ", Blaze.View("lookup:user.username", function() {                                 // 97
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                 // 98
    }), " :\n                "), "\n            "), "\n            ", HTML.BUTTON({                              // 99
      id: "addFriend",                                                                                           // 100
      "class": "btn btn-primary col-xs-3 pull-right"                                                             // 101
    }, "加好友"), "\n            ", HTML.BUTTON({                                                                   // 102
      id: "likePost",                                                                                            // 103
      "class": "btn btn-info col-xs-3 pull-right"                                                                // 104
    }, "点赞(", Blaze.View("lookup:like", function() {                                                             // 105
      return Spacebars.mustache(view.lookup("like"));                                                            // 106
    }), ")"), "\n        "), "\n            ", HTML.P({                                                          // 107
      "class": "muted"                                                                                           // 108
    }, Blaze.View("lookup:time", function() {                                                                    // 109
      return Spacebars.mustache(view.lookup("time"));                                                            // 110
    })), "\n            ", HTML.P(Spacebars.include(view.lookupTemplate("markdown"), function() {                // 111
      return Blaze.View("lookup:post", function() {                                                              // 112
        return Spacebars.mustache(view.lookup("post"));                                                          // 113
      });                                                                                                        // 114
    })), "\n            ", Blaze.If(function() {                                                                 // 115
      return Spacebars.call(view.lookup("currentUser"));                                                         // 116
    }, function() {                                                                                              // 117
      return [ "\n                ", HTML.P("\n                ", HTML.INPUT({                                   // 118
        type: "text",                                                                                            // 119
        "class": "span8",                                                                                        // 120
        id: function() {                                                                                         // 121
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                     // 122
        }                                                                                                        // 123
      }), "\n                ", HTML.BUTTON({                                                                    // 124
        id: "commnetSubmit",                                                                                     // 125
        "class": "btn btn-success"                                                                               // 126
      }, "评论"), "\n                "), "\n            " ];                                                       // 127
    }), "\n            ", Blaze.Each(function() {                                                                // 128
      return Spacebars.call(view.lookup("comments"));                                                            // 129
    }, function() {                                                                                              // 130
      return [ "\n                ", HTML.P(Blaze.View("lookup:user.username", function() {                      // 131
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                               // 132
      }), " 评论: ", Blaze.View("lookup:post", function() {                                                        // 133
        return Spacebars.mustache(view.lookup("post"));                                                          // 134
      })), "\n            " ];                                                                                   // 135
    }), "\n        " ];                                                                                          // 136
  }), "\n    ") ];                                                                                               // 137
}));                                                                                                             // 138
                                                                                                                 // 139
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
    topPosts: function () {                                                                                      // 26
        function topPosts() {                                                                                    //
            return Posts.find({ "top": true, "super": 0 }, { sort: { time: -1 } });                              // 27
        }                                                                                                        //
                                                                                                                 //
        return topPosts;                                                                                         //
    }(),                                                                                                         //
    posts: function () {                                                                                         // 29
        function posts() {                                                                                       //
            if (!Meteor.userId()) {                                                                              // 30
                return Posts.find({ "user._id": "NAEQJhrKe79xtC8Hd", "super": 0, "top": false }, { sort: { time: -1 } });
            } else {                                                                                             //
                return Posts.find({ "super": 0, "top": false }, { sort: { time: -1 } });                         // 33
            }                                                                                                    //
        }                                                                                                        //
                                                                                                                 //
        return posts;                                                                                            //
    }(),                                                                                                         //
    comments: function () {                                                                                      // 36
        function comments() {                                                                                    //
            return Posts.find({ "super": this._id }, { sort: { time: -1 } });                                    // 37
        }                                                                                                        //
                                                                                                                 //
        return comments;                                                                                         //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.lists.helpers({                                                                                         // 41
    lists: function () {                                                                                         // 42
        function lists() {                                                                                       //
            return UserInfo.find({}, { sort: { rank: 1 } });                                                     // 43
        }                                                                                                        //
                                                                                                                 //
        return lists;                                                                                            //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.self.helpers({                                                                                          // 47
    self: function () {                                                                                          // 48
        function self() {                                                                                        //
            return UserInfo.find({ "user._id": Meteor.userId() });                                               // 49
        }                                                                                                        //
                                                                                                                 //
        return self;                                                                                             //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.friend.helpers({                                                                                        // 53
    friend: function () {                                                                                        // 54
        function friend() {                                                                                      //
            var Afriend = UserInfo.findOne({ "user._id": Meteor.userId() }).Friends;                             // 55
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } });                       // 56
        }                                                                                                        //
                                                                                                                 //
        return friend;                                                                                           //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 60
    Backbone.history.start({ pushState: true });                                                                 // 61
});                                                                                                              //
                                                                                                                 //
var urlRouter = Backbone.Router.extend({                                                                         // 64
    routes: {                                                                                                    // 65
        "": "index",                                                                                             // 66
        "login": "login",                                                                                        // 67
        "reg": "reg",                                                                                            // 68
        "logout": "logout",                                                                                      // 69
        "friend": "friend",                                                                                      // 70
        "lists": "lists",                                                                                        // 71
        "self": "self"                                                                                           // 72
    },                                                                                                           //
    index: function () {                                                                                         // 74
        function index() {                                                                                       // 74
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return index;                                                                                            //
    }(),                                                                                                         //
    friend: function () {                                                                                        // 77
        function friend() {                                                                                      // 77
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return friend;                                                                                           //
    }(),                                                                                                         //
    lists: function () {                                                                                         // 80
        function lists() {                                                                                       // 80
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return lists;                                                                                            //
    }(),                                                                                                         //
    self: function () {                                                                                          // 83
        function self() {                                                                                        // 83
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active" });
        }                                                                                                        //
                                                                                                                 //
        return self;                                                                                             //
    }(),                                                                                                         //
    login: function () {                                                                                         // 86
        function login() {                                                                                       // 86
            if (Meteor.userId()) {                                                                               // 87
                this.navigate("/", true);                                                                        // 88
                Session.set("info", { success: "", error: "用户已在线！" });                                           // 89
            }                                                                                                    //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return login;                                                                                            //
    }(),                                                                                                         //
    reg: function () {                                                                                           // 93
        function reg() {                                                                                         // 93
            if (Meteor.userId()) {                                                                               // 94
                this.navigate("/", true);                                                                        // 95
                Session.set("info", { success: "", error: "用户已在线！" });                                           // 96
            }                                                                                                    //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "" });
        }                                                                                                        //
                                                                                                                 //
        return reg;                                                                                              //
    }(),                                                                                                         //
    logout: function () {                                                                                        // 100
        function logout() {                                                                                      // 100
            if (Meteor.userId()) {                                                                               // 101
                Meteor.logout();                                                                                 // 102
                this.navigate("/", true);                                                                        // 103
                Session.set("info", { success: "登出成功", error: "" });                                             // 104
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                 // 105
            } else {                                                                                             //
                this.navigate("/", true);                                                                        // 107
                Session.set("info", { success: "", error: "用户不在线！" });                                           // 108
            }                                                                                                    //
        }                                                                                                        //
                                                                                                                 //
        return logout;                                                                                           //
    }(),                                                                                                         //
    redirect: function () {                                                                                      // 111
        function redirect(url) {                                                                                 // 111
            this.navigate(url, true);                                                                            // 112
        }                                                                                                        //
                                                                                                                 //
        return redirect;                                                                                         //
    }()                                                                                                          //
});                                                                                                              //
Router = new urlRouter();                                                                                        // 115
                                                                                                                 //
Template.reg.events({                                                                                            // 117
    'click #submit': function () {                                                                               // 118
        function clickSubmit(event) {                                                                            // 118
            event.preventDefault();                                                                              // 119
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                            // 120
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });              // 121
            }                                                                                                    //
            var $username = $("#username").val();                                                                // 123
            var $password = $("#password").val();                                                                // 124
            var $useremail = $("#useremail").val();                                                              // 125
            var $password_repeat = $("#password-repeat").val();                                                  // 126
            if ($password.length === 0 || $username.length === 0) {                                              // 127
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                      // 128
                return;                                                                                          // 129
            }                                                                                                    //
            if ($password !== $password_repeat) {                                                                // 131
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                        // 132
                return;                                                                                          // 133
            }                                                                                                    //
            Accounts.createUser({                                                                                // 135
                username: $username,                                                                             // 136
                password: $password,                                                                             // 137
                email: $useremail }, function (err) {                                                            // 138
                if (err) {                                                                                       // 140
                    Session.set("info", { success: "", error: "注册失败" });                                         // 141
                } else {                                                                                         //
                    Session.set("info", { success: "注册成功", error: "" });                                         // 143
                    UserInfo.insert({                                                                            // 144
                        user: Meteor.user(),                                                                     // 145
                        isAdmin: false,                                                                          // 146
                        totalScore: 0,                                                                           // 147
                        todayScore: 0,                                                                           // 148
                        totalFriend: 1,                                                                          // 149
                        Friends: [Meteor.userId()],                                                              // 150
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],              // 151
                        time: new Date()                                                                         // 152
                    });                                                                                          //
                }                                                                                                //
            });                                                                                                  //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                     // 157
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                    // 158
        }                                                                                                        //
                                                                                                                 //
        return clickSubmit;                                                                                      //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.login.events({                                                                                          // 162
    'click #submit': function () {                                                                               // 163
        function clickSubmit(event) {                                                                            // 163
            event.preventDefault();                                                                              // 164
            var $username = $("#username").val();                                                                // 165
            var $password = $("#password").val();                                                                // 166
            if ($password.length === 0 || $username.length === 0) {                                              // 167
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                       // 168
                return;                                                                                          // 169
            }                                                                                                    //
            Meteor.loginWithPassword($username, $password, function (err) {                                      // 171
                if (err) {                                                                                       // 172
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                              // 173
                } else {                                                                                         //
                    Router.redirect("/");                                                                        // 175
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                            // 176
                    Session.set("info", { success: "登陆成功", error: "" });                                         // 177
                }                                                                                                //
            });                                                                                                  //
        }                                                                                                        //
                                                                                                                 //
        return clickSubmit;                                                                                      //
    }()                                                                                                          //
});                                                                                                              //
                                                                                                                 //
Template.index.events({                                                                                          // 183
    'click #submit': function () {                                                                               // 184
        function clickSubmit(event) {                                                                            // 184
            event.preventDefault();                                                                              // 185
            var $post = $("#post").val();                                                                        // 186
            if ($post.length === 0 || $post.length >= 200) {                                                     // 187
                Session.set("info", { success: "", error: "请将字数限制在1-200字以内" });                                  // 188
                return;                                                                                          // 189
            }                                                                                                    //
            Posts.insert({                                                                                       // 191
                user: Meteor.user(),                                                                             // 192
                post: $post,                                                                                     // 193
                "super": 0,                                                                                      // 194
                like: 0,                                                                                         // 195
                top: false,                                                                                      // 196
                time: new Date() }, function (err) {                                                             // 197
                if (err) {                                                                                       // 199
                    Session.set("info", { success: "", error: "发表失败，原因自寻" });                                    // 200
                } else {                                                                                         //
                    Session.set("info", { success: "发表成功", error: "" });                                         // 202
                    $("#post").val("");                                                                          // 203
                }                                                                                                //
            });                                                                                                  //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                     // 207
        }                                                                                                        //
                                                                                                                 //
        return clickSubmit;                                                                                      //
    }(),                                                                                                         //
    'click #commnetSubmit': function () {                                                                        // 209
        function clickCommnetSubmit(event) {                                                                     // 209
            event.preventDefault();                                                                              // 210
            var $comment = $("#" + this._id).val();                                                              // 211
            if ($comment.length === 0 || $comment.length >= 100) {                                               // 212
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                  // 213
                return;                                                                                          // 214
            }                                                                                                    //
            Posts.insert({                                                                                       // 216
                user: Meteor.user(),                                                                             // 217
                post: $comment,                                                                                  // 218
                "super": this._id,                                                                               // 219
                time: new Date() }, function (err) {                                                             // 220
                if (err) {                                                                                       // 222
                    Session.set("info", { success: "", error: "评论失败，原因自寻" });                                    // 223
                } else {                                                                                         //
                    Session.set("info", { success: "评论成功", error: "" });                                         // 225
                    $("#" + this._id).val("");                                                                   // 226
                }                                                                                                //
            });                                                                                                  //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                     // 230
        }                                                                                                        //
                                                                                                                 //
        return clickCommnetSubmit;                                                                               //
    }(),                                                                                                         //
    'click #addFriend': function () {                                                                            // 232
        function clickAddFriend(event) {                                                                         // 232
            event.preventDefault();                                                                              // 233
            var $friendId = this.user._id;                                                                       // 234
            if (UserInfo.findOne({ "Friends": $friendId })) {                                                    // 235
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                       // 236
                return;                                                                                          // 237
            }                                                                                                    //
                                                                                                                 //
            var userInfoId = UserInfo.findOne({ "user._id": Meteor.userId() })._id;                              // 240
            UserInfo.update({                                                                                    // 241
                "_id": userInfoId                                                                                // 242
            }, {                                                                                                 //
                $addToSet: { "Friends": $friendId },                                                             // 244
                $inc: { "totalFriend": 1 }                                                                       // 245
            }, true, true, function (err) {                                                                      //
                if (err) {                                                                                       // 249
                    Session.set("info", { success: "", error: "添加好友失败" });                                       // 250
                } else {                                                                                         //
                    Session.set("info", { success: "添加成功", error: "" });                                         // 252
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