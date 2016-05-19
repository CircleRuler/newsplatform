var require = meteorInstall({"client":{"template.client.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.client.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return [ Spacebars.include(view.lookupTemplate("nav")), "\n    ", Spacebars.include(view.lookupTemplate("container")), "\n    ", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
Template.__checkName("nav");                                                                                           // 8
Template["nav"] = new Template("Template.nav", (function() {                                                           // 9
  var view = this;                                                                                                     // 10
  return HTML.DIV({                                                                                                    // 11
    "class": "navbar navbar-inverse navbar-fixed-top"                                                                  // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    "class": "navbar-inner"                                                                                            // 14
  }, "\n            ", HTML.DIV({                                                                                      // 15
    "class": "container"                                                                                               // 16
  }, "\n                ", HTML.Raw('<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </a>'), "\n                ", HTML.Raw('<a href="/" class="brand">新闻爆料</a>'), "\n                ", HTML.DIV({
    "class": "nav-collapse"                                                                                            // 18
  }, "\n                    ", HTML.UL({                                                                               // 19
    "class": "nav"                                                                                                     // 20
  }, "\n                        ", HTML.LI({                                                                           // 21
    "class": function() {                                                                                              // 22
      return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "lists"));                                        // 23
    }                                                                                                                  // 24
  }, HTML.Raw('<a href="/lists" style="font-weight: bold;color:#eee;font-size: 18px;">排行榜</a>')), "\n                        ", HTML.LI({
    "class": function() {                                                                                              // 26
      return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "index"));                                        // 27
    }                                                                                                                  // 28
  }, HTML.Raw('<a href="/">首页</a>')), "\n                        ", Blaze.If(function() {                              // 29
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 30
  }, function() {                                                                                                      // 31
    return [ "\n                            ", HTML.LI({                                                               // 32
      "class": function() {                                                                                            // 33
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "self"));                                       // 34
      }                                                                                                                // 35
    }, HTML.A({                                                                                                        // 36
      href: "/self"                                                                                                    // 37
    }, Blaze.View("lookup:currentUser.username", function() {                                                          // 38
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                                // 39
    }))), "\n                            ", HTML.LI({                                                                  // 40
      "class": function() {                                                                                            // 41
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "friend"));                                     // 42
      }                                                                                                                // 43
    }, HTML.A({                                                                                                        // 44
      href: "/friend"                                                                                                  // 45
    }, "好友")), "\n                            ", HTML.LI(HTML.A({                                                      // 46
      href: "/logout"                                                                                                  // 47
    }, "登出")), "\n                        " ];                                                                         // 48
  }, function() {                                                                                                      // 49
    return [ "\n                            ", HTML.LI({                                                               // 50
      "class": function() {                                                                                            // 51
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "login"));                                      // 52
      }                                                                                                                // 53
    }, HTML.A({                                                                                                        // 54
      href: "/login"                                                                                                   // 55
    }, "登入")), "\n                            ", HTML.LI({                                                             // 56
      "class": function() {                                                                                            // 57
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "reg"));                                        // 58
      }                                                                                                                // 59
    }, HTML.A({                                                                                                        // 60
      href: "/reg"                                                                                                     // 61
    }, "注册")), "\n                        " ];                                                                         // 62
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ");                   // 63
}));                                                                                                                   // 64
                                                                                                                       // 65
Template.__checkName("container");                                                                                     // 66
Template["container"] = new Template("Template.container", (function() {                                               // 67
  var view = this;                                                                                                     // 68
  return HTML.DIV({                                                                                                    // 69
    id: "container",                                                                                                   // 70
    "class": "container"                                                                                               // 71
  }, "\n        ", Spacebars.include(view.lookupTemplate("info")), "\n        ", Blaze.If(function() {                 // 72
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "index"));                                          // 73
  }, function() {                                                                                                      // 74
    return [ "\n            ", Spacebars.include(view.lookupTemplate("index")), "\n        " ];                        // 75
  }), "\n        ", Blaze.If(function() {                                                                              // 76
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "login"));                                          // 77
  }, function() {                                                                                                      // 78
    return [ "\n            ", Spacebars.include(view.lookupTemplate("login")), "\n        " ];                        // 79
  }), "\n        ", Blaze.If(function() {                                                                              // 80
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "reg"));                                            // 81
  }, function() {                                                                                                      // 82
    return [ "\n            ", Spacebars.include(view.lookupTemplate("reg")), "\n        " ];                          // 83
  }), "\n        ", Blaze.If(function() {                                                                              // 84
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "self"));                                           // 85
  }, function() {                                                                                                      // 86
    return [ "\n            ", Spacebars.include(view.lookupTemplate("self")), "\n        " ];                         // 87
  }), "\n        ", Blaze.If(function() {                                                                              // 88
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "friend"));                                         // 89
  }, function() {                                                                                                      // 90
    return [ "\n            ", Spacebars.include(view.lookupTemplate("friend")), "\n        " ];                       // 91
  }), "\n        ", Blaze.If(function() {                                                                              // 92
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "lists"));                                          // 93
  }, function() {                                                                                                      // 94
    return [ "\n            ", Spacebars.include(view.lookupTemplate("lists")), "\n        " ];                        // 95
  }), "\n    ");                                                                                                       // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
Template.__checkName("footer");                                                                                        // 99
Template["footer"] = new Template("Template.footer", (function() {                                                     // 100
  var view = this;                                                                                                     // 101
  return HTML.Raw('<p class="muted text-center">Newsplatform 2016</p>');                                               // 102
}));                                                                                                                   // 103
                                                                                                                       // 104
Template.__checkName("info");                                                                                          // 105
Template["info"] = new Template("Template.info", (function() {                                                         // 106
  var view = this;                                                                                                     // 107
  return [ Blaze.If(function() {                                                                                       // 108
    return Spacebars.call(Spacebars.dot(view.lookup("info"), "success"));                                              // 109
  }, function() {                                                                                                      // 110
    return [ "\n        ", HTML.DIV({                                                                                  // 111
      "class": "alert alert-success"                                                                                   // 112
    }, Blaze.View("lookup:info.success", function() {                                                                  // 113
      return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "success"));                                        // 114
    })), "\n    " ];                                                                                                   // 115
  }), "\n    ", Blaze.If(function() {                                                                                  // 116
    return Spacebars.call(Spacebars.dot(view.lookup("info"), "error"));                                                // 117
  }, function() {                                                                                                      // 118
    return [ "\n        ", HTML.DIV({                                                                                  // 119
      "class": "alert alert-error"                                                                                     // 120
    }, Blaze.View("lookup:info.error", function() {                                                                    // 121
      return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "error"));                                          // 122
    })), "\n    " ];                                                                                                   // 123
  }) ];                                                                                                                // 124
}));                                                                                                                   // 125
                                                                                                                       // 126
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.friend.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.friend.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("friend");                                                                                        // 2
Template["friend"] = new Template("Template.friend", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.OL("\n    ", HTML.Raw('<h1 class="text-danger" align="top">今日积分排行</h1>'), "\n    ", HTML.TABLE({       // 5
    "class": "table table-striped table-hover"                                                                         // 6
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH("＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("今日积分"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("friendToday"));                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 11
    })), "\n                    ", HTML.TD(Blaze.View("lookup:todayScore", function() {                                // 12
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 13
    })), "\n                "), "\n            " ];                                                                    // 14
  }), "\n        "), "\n    "), "\n    "), "\n    ", HTML.OL("\n    ", HTML.Raw('<h1 class="text-primary" align="top">总积分排行</h1>'), "\n    ", HTML.TABLE({
    "class": "table table-striped table-hover"                                                                         // 16
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH("＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("总积分数"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("friendTotal"));                                                                 // 18
  }, function() {                                                                                                      // 19
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 21
    })), "\n                    ", HTML.TD(Blaze.View("lookup:totalScore", function() {                                // 22
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 23
    })), "\n                "), "\n            " ];                                                                    // 24
  }), "\n        "), "\n    "), "\n    "), "\n    ", HTML.OL("\n    ", HTML.Raw('<h1 class="text-info" align="top">总战斗力排行</h1>'), "\n    ", HTML.TABLE({
    "class": "table table-striped table-hover"                                                                         // 26
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH("＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("战斗力排名"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("friendRank"));                                                                  // 28
  }, function() {                                                                                                      // 29
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 31
    })), "\n                    ", HTML.TD(Blaze.View("lookup:rank", function() {                                      // 32
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 33
    })), "\n                "), "\n            " ];                                                                    // 34
  }), "\n        "), "\n    "), "\n    ") ];                                                                           // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.index.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.index.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("index");                                                                                         // 2
Template["index"] = new Template("Template.index", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return [ Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", HTML.FORM({                                                                                 // 8
      action: "",                                                                                                      // 9
      "class": "well form-inline center",                                                                              // 10
      style: "text-align:center;"                                                                                      // 11
    }, "\n            ", HTML.DIV({                                                                                    // 12
      "class": "form-group"                                                                                            // 13
    }, "\n                ", HTML.LABEL({                                                                              // 14
      "for": "post"                                                                                                    // 15
    }, "发布内容"), "\n                ", HTML.TEXTAREA({                                                                  // 16
      "class": "span8",                                                                                                // 17
      id: "post",                                                                                                      // 18
      rows: "2"                                                                                                        // 19
    }), "\n                ", HTML.BUTTON({                                                                            // 20
      id: "submit",                                                                                                    // 21
      "class": "btn btn-success btn-large span2 pull-right"                                                            // 22
    }, "发表"), "\n            "), "\n            ", HTML.DIV({                                                          // 23
      "class": "control-group"                                                                                         // 24
    }, "\n                ", HTML.LABEL({                                                                              // 25
      "for": "exampleInputFile"                                                                                        // 26
    }, "链接图片"), "\n                ", HTML.INPUT({                                                                     // 27
      type: "file",                                                                                                    // 28
      id: "exampleInputFile"                                                                                           // 29
    }), "\n            "), "\n            \n        "), "\n    " ];                                                    // 30
  }, function() {                                                                                                      // 31
    return [ "\n        ", HTML.H2("游客无法发布新闻或者评论。请注册或者登陆。"), "\n    " ];                                               // 32
  }), "\n    \n    ", Blaze.Each(function() {                                                                          // 33
    return Spacebars.call(view.lookup("topPosts"));                                                                    // 34
  }, function() {                                                                                                      // 35
    return [ "\n        ", HTML.DIV({                                                                                  // 36
      "class": "center well singlePost"                                                                                // 37
    }, "\n            ", HTML.DIV({                                                                                    // 38
      "class": ""                                                                                                      // 39
    }, "\n                ", HTML.DIV({                                                                                // 40
      "class": "postTitle"                                                                                             // 41
    }, "\n                    ", HTML.H2({                                                                             // 42
      "class": "text-primary span10"                                                                                   // 43
    }, Blaze.View("lookup:user.username", function() {                                                                 // 44
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 45
    }), " \n                    ", HTML.BUTTON({                                                                       // 46
      id: "addFriend",                                                                                                 // 47
      "class": "btn btn-primary"                                                                                       // 48
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 49
      id: "likePost",                                                                                                  // 50
      "class": "btn btn-warning"                                                                                       // 51
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 52
      return Spacebars.mustache(view.lookup("like"));                                                                  // 53
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 54
      id: "untopPost",                                                                                                 // 55
      "class": "btn btn-danger"                                                                                        // 56
    }, "取消置顶 "), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({               // 57
      "class": "col-xs-3 "                                                                                             // 58
    }), "\n            "), "\n            ", HTML.P({                                                                  // 59
      "class": "muted"                                                                                                 // 60
    }, Blaze.View("lookup:time", function() {                                                                          // 61
      return Spacebars.mustache(view.lookup("time"));                                                                  // 62
    })), "\n            ", HTML.P({                                                                                    // 63
      "class": "span10"                                                                                                // 64
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 65
      return Blaze.View("lookup:post", function() {                                                                    // 66
        return Spacebars.mustache(view.lookup("post"));                                                                // 67
      });                                                                                                              // 68
    })), "\n            ", Blaze.If(function() {                                                                       // 69
      return Spacebars.call(view.lookup("currentUser"));                                                               // 70
    }, function() {                                                                                                    // 71
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 72
        type: "text",                                                                                                  // 73
        "class": "span8",                                                                                              // 74
        id: function() {                                                                                               // 75
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 76
        }                                                                                                              // 77
      }), "\n                    ", HTML.BUTTON({                                                                      // 78
        id: "commnetSubmit",                                                                                           // 79
        "class": "btn btn-success"                                                                                     // 80
      }, "评论"), "\n                "), "\n            " ];                                                             // 81
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 82
      return Spacebars.call(view.lookup("comments"));                                                                  // 83
    }, function() {                                                                                                    // 84
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 85
        "class": "postTitle"                                                                                           // 86
      }, Blaze.View("lookup:user.username", function() {                                                               // 87
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 88
      })), " : ", Blaze.View("lookup:post", function() {                                                               // 89
        return Spacebars.mustache(view.lookup("post"));                                                                // 90
      })), "\n            " ];                                                                                         // 91
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 92
  }), "\n\n    ", Blaze.Each(function() {                                                                              // 93
    return Spacebars.call(view.lookup("posts"));                                                                       // 94
  }, function() {                                                                                                      // 95
    return [ "\n        ", HTML.DIV({                                                                                  // 96
      "class": "center singlePost"                                                                                     // 97
    }, "\n            ", HTML.DIV({                                                                                    // 98
      "class": ""                                                                                                      // 99
    }, "\n                ", HTML.DIV({                                                                                // 100
      "class": "postTitle"                                                                                             // 101
    }, "\n                    ", HTML.H2({                                                                             // 102
      "class": "text-primary span10"                                                                                   // 103
    }, Blaze.View("lookup:user.username", function() {                                                                 // 104
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 105
    }), " \n                    ", HTML.BUTTON({                                                                       // 106
      id: "addFriend",                                                                                                 // 107
      "class": "btn btn-primary"                                                                                       // 108
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 109
      id: "likePost",                                                                                                  // 110
      "class": "btn btn-warning"                                                                                       // 111
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 112
      return Spacebars.mustache(view.lookup("like"));                                                                  // 113
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 114
      id: "topPost",                                                                                                   // 115
      "class": "btn btn-danger"                                                                                        // 116
    }, "置顶 "), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                 // 117
      "class": "col-xs-3 "                                                                                             // 118
    }), "\n            "), "\n            ", HTML.P({                                                                  // 119
      "class": "muted"                                                                                                 // 120
    }, Blaze.View("lookup:time", function() {                                                                          // 121
      return Spacebars.mustache(view.lookup("time"));                                                                  // 122
    })), "\n            ", HTML.P({                                                                                    // 123
      "class": "span10"                                                                                                // 124
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 125
      return Blaze.View("lookup:post", function() {                                                                    // 126
        return Spacebars.mustache(view.lookup("post"));                                                                // 127
      });                                                                                                              // 128
    })), "\n            ", Blaze.If(function() {                                                                       // 129
      return Spacebars.call(view.lookup("currentUser"));                                                               // 130
    }, function() {                                                                                                    // 131
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 132
        type: "text",                                                                                                  // 133
        "class": "span8",                                                                                              // 134
        id: function() {                                                                                               // 135
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 136
        }                                                                                                              // 137
      }), "\n                    ", HTML.BUTTON({                                                                      // 138
        id: "commnetSubmit",                                                                                           // 139
        "class": "btn btn-success"                                                                                     // 140
      }, "评论"), "\n                "), "\n            " ];                                                             // 141
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 142
      return Spacebars.call(view.lookup("comments"));                                                                  // 143
    }, function() {                                                                                                    // 144
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 145
        "class": "postTitle"                                                                                           // 146
      }, Blaze.View("lookup:user.username", function() {                                                               // 147
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 148
      })), " : ", Blaze.View("lookup:post", function() {                                                               // 149
        return Spacebars.mustache(view.lookup("post"));                                                                // 150
      })), "\n            " ];                                                                                         // 151
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 152
  }) ];                                                                                                                // 153
}));                                                                                                                   // 154
                                                                                                                       // 155
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.lists.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.lists.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("lists");                                                                                         // 2
Template["lists"] = new Template("Template.lists", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.OL("\n    ", HTML.TABLE({                                                                                // 5
    "class": "table table-striped table-hover"                                                                         // 6
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH({                                // 7
    style: "vertical-align:top;"                                                                                       // 8
  }, "＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("战斗力排名"), "\n                ", HTML.TD("今日积分"), "\n                ", HTML.TD("总积分"), "\n            "), "\n        "), "\n        ", HTML.TBODY({
    id: "scoreList"                                                                                                    // 10
  }, "\n            ", Blaze.Each(function() {                                                                         // 11
    return Spacebars.call(view.lookup("lists"));                                                                       // 12
  }, function() {                                                                                                      // 13
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 15
    })), "\n                    ", HTML.TD(Blaze.View("lookup:rank", function() {                                      // 16
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 17
    })), "\n                    ", HTML.TD(Blaze.View("lookup:todayScore", function() {                                // 18
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 19
    })), "\n                    ", HTML.TD(Blaze.View("lookup:totalScore", function() {                                // 20
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 21
    })), "\n                "), "\n            " ];                                                                    // 22
  }), "\n        "), "\n    "), "\n    ");                                                                             // 23
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.login.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("login");                                                                                         // 2
Template["login"] = new Template("Template.login", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<form action="" class="form-horizontal">\n        <fieldset>\n            <legend>用户登入</legend>\n            <div class="control-group">\n                <label for="username" class="control-label">用户名</label>\n                <div class="controls">\n                    <input type="text" id="username" class="input-xlarge" name="username" required="">\n                </div>\n            </div>\n            <div class="control-group">\n                <label for="password" class="control-label">密码</label>\n                <div class="controls">\n                    <input type="password" name="password" class="input-xlarge" id="password" required="">\n                </div>\n            </div>\n            <div class="form-actions">\n                <button id="submit" class="btn btn-primary">登入</button>\n            </div>\n        </fieldset>\n    </form>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.reg.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.reg.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("reg");                                                                                           // 2
Template["reg"] = new Template("Template.reg", (function() {                                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.FORM({                                                                                                   // 5
    action: "",                                                                                                        // 6
    "class": "form-horizontal"                                                                                         // 7
  }, "\n        ", HTML.FIELDSET("\n            ", HTML.getTag("lengend")("用户注册"), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="username" class="control-label">用户名</label>\n                <div class="controls">\n                    <input type="text" id="username" class="input-xlarge" name="username" required="" autocomplete="false">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="useremail" class="control-label">邮箱</label>\n                <div class="controls">\n                    <input type="text" id="useremail" class="input-xlarge" name="useremail" required="" autocomplete="false">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="password" class="control-label">密码</label>\n                <div class="controls">\n                    <input type="password" class="input-xlarge" id="password" name="password" required="">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="password-repeat" class="control-label">重复输入密码</label>\n                <div class="controls">\n                    <input type="password" name="password-repeat" class="input-xlarge" id="password-repeat" required="">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="form-actions">\n                <button id="submit" class="btn btn-primary">注册</button>\n            </div>'), "\n        "), "\n    ");
}));                                                                                                                   // 9
                                                                                                                       // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.self.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.self.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("self");                                                                                          // 2
Template["self"] = new Template("Template.self", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("self"));                                                                        // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", Blaze.If(function() {                                                                       // 8
      return Spacebars.call(view.lookup("isAdmin"));                                                                   // 9
    }, function() {                                                                                                    // 10
      return [ "\n            ", HTML.H1({                                                                             // 11
        "class": "text-danger"                                                                                         // 12
      }, "尊贵的管理员账户！"), "\n        " ];                                                                                 // 13
    }, function() {                                                                                                    // 14
      return [ "\n            ", HTML.H4({                                                                             // 15
        "class": "text-info"                                                                                           // 16
      }, "普通用户。"), "\n        " ];                                                                                     // 17
    }), "\n        ", HTML.DL({                                                                                        // 18
      "class": "dl-horizontal"                                                                                         // 19
    }, "\n            ", HTML.DT("用户名"), HTML.DD(Blaze.View("lookup:user.username", function() {                       // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 21
    })), "\n            ", HTML.DT("注册邮箱"), HTML.DD(Blaze.View("lookup:user.emails.0.address", function() {            // 22
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "emails", "0", "address"));                         // 23
    })), "\n            ", HTML.DT("总积分"), HTML.DD(Blaze.View("lookup:totalScore", function() {                        // 24
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 25
    })), "\n            ", HTML.DT("今日积分"), HTML.DD(Blaze.View("lookup:todayScore", function() {                       // 26
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 27
    })), "\n            ", HTML.DT("好友总数"), HTML.DD(Blaze.View("lookup:totalFriend", function() {                      // 28
      return Spacebars.mustache(view.lookup("totalFriend"));                                                           // 29
    })), "\n            ", HTML.DT("排名"), HTML.DD(Blaze.View("lookup:rank", function() {                               // 30
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 31
    })), "\n            ", HTML.DT("注册时间"), HTML.DD(Blaze.View("lookup:time", function() {                             // 32
      return Spacebars.mustache(view.lookup("time"));                                                                  // 33
    })), "\n        "), "\n    " ];                                                                                    // 34
  });                                                                                                                  // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client.js":["meteor/meteor",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/client.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _meteor = require("meteor/meteor");                                                                                // 1
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 3
    // code to run on server at startup                                                                                //
    document.addEventListener("deviceready", onDeviceReady, false);                                                    // 5
    function onDeviceReady() {                                                                                         // 6
        console.log(navigator.device.capture);                                                                         // 7
        Session.set("info", { success: "navigator success", error: "" });                                              // 8
    }                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Session.setDefault("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });            // 12
Session.setDefault("info", { success: "", error: "" });                                                                // 13
Posts = new _meteor.Meteor.Collection("posts");                                                                        // 14
SystemInfo = new _meteor.Meteor.Collection("systemInfo");                                                              // 15
UserInfo = new _meteor.Meteor.Collection("userInfo");                                                                  // 16
                                                                                                                       //
Template.info.helpers({                                                                                                // 20
    info: function () {                                                                                                // 21
        function info() {                                                                                              //
            return Session.get("info");                                                                                // 22
        }                                                                                                              //
                                                                                                                       //
        return info;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.container.helpers({                                                                                           // 26
    currentUrl: function () {                                                                                          // 27
        function currentUrl() {                                                                                        //
            return Session.get("currentUrl");                                                                          // 28
        }                                                                                                              //
                                                                                                                       //
        return currentUrl;                                                                                             //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.nav.helpers({                                                                                                 // 32
    active: function () {                                                                                              // 33
        function active() {                                                                                            //
            return Session.get("currentUrl");                                                                          // 34
        }                                                                                                              //
                                                                                                                       //
        return active;                                                                                                 //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.helpers({                                                                                               // 38
    topPosts: function () {                                                                                            // 39
        function topPosts() {                                                                                          //
            return Posts.find({ "top": true, "super": 0 }, { sort: { time: -1 } });                                    // 40
        }                                                                                                              //
                                                                                                                       //
        return topPosts;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 42
        function posts() {                                                                                             //
            if (!_meteor.Meteor.userId()) {                                                                            // 43
                return Posts.find({ "user.username": "admin", "super": 0, "top": false }, { sort: { time: -1 } });     // 44
            } else {                                                                                                   //
                return Posts.find({ "super": 0, "top": false }, { sort: { time: -1 } });                               // 46
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 49
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 50
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.helpers({                                                                                               // 54
    lists: function () {                                                                                               // 55
        function lists() {                                                                                             //
            return UserInfo.find({}, { sort: { totalScore: -1 } });                                                    // 56
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 60
    self: function () {                                                                                                // 61
        function self() {                                                                                              //
            return UserInfo.find({ "user._id": _meteor.Meteor.userId() });                                             // 62
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 66
    friendRank: function () {                                                                                          // 67
        function friendRank() {                                                                                        //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 68
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } }, { limit: 10 });              // 69
        }                                                                                                              //
                                                                                                                       //
        return friendRank;                                                                                             //
    }(),                                                                                                               //
    friendToday: function () {                                                                                         // 71
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 72
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { todayScore: -1 } }, { limit: 10 });       // 73
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }(),                                                                                                               //
    friendTotal: function () {                                                                                         // 75
        function friendTotal() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 76
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { totalScore: -1 } }, { limit: 10 });       // 77
        }                                                                                                              //
                                                                                                                       //
        return friendTotal;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 81
    Backbone.history.start({ pushState: true });                                                                       // 82
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 85
    routes: {                                                                                                          // 86
        "": "index",                                                                                                   // 87
        "login": "login",                                                                                              // 88
        "reg": "reg",                                                                                                  // 89
        "logout": "logout",                                                                                            // 90
        "friend": "friend",                                                                                            // 91
        "lists": "lists",                                                                                              // 92
        "self": "self"                                                                                                 // 93
    },                                                                                                                 //
    index: function () {                                                                                               // 95
        function index() {                                                                                             // 95
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });       // 96
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 98
        function friend() {                                                                                            // 98
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "" });       // 99
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 101
        function lists() {                                                                                             // 101
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "" });       // 102
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 104
        function self() {                                                                                              // 104
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active" });       // 105
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    login: function () {                                                                                               // 107
        function login() {                                                                                             // 107
            if (_meteor.Meteor.userId()) {                                                                             // 108
                this.navigate("/", true);                                                                              // 109
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 110
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "" });       // 112
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 114
        function reg() {                                                                                               // 114
            if (_meteor.Meteor.userId()) {                                                                             // 115
                this.navigate("/", true);                                                                              // 116
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 117
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "" });       // 119
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 121
        function logout() {                                                                                            // 121
            if (_meteor.Meteor.userId()) {                                                                             // 122
                _meteor.Meteor.logout();                                                                               // 123
                this.navigate("/", true);                                                                              // 124
                Session.set("info", { success: "登出成功", error: "" });                                                   // 125
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 126
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 128
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 129
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 132
        function redirect(url) {                                                                                       // 132
            this.navigate(url, true);                                                                                  // 133
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 136
                                                                                                                       //
Template.reg.events({                                                                                                  // 138
    'click #submit': function () {                                                                                     // 139
        function clickSubmit(event) {                                                                                  // 139
            event.preventDefault();                                                                                    // 140
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 141
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 142
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 144
            var $password = $("#password").val();                                                                      // 145
            var $useremail = $("#useremail").val();                                                                    // 146
            var $password_repeat = $("#password-repeat").val();                                                        // 147
            if ($password.length === 0 || $username.length === 0) {                                                    // 148
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 149
                return;                                                                                                // 150
            }                                                                                                          //
            if ($password !== $password_repeat) {                                                                      // 152
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 153
                return;                                                                                                // 154
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 156
                username: $username,                                                                                   // 157
                password: $password,                                                                                   // 158
                email: $useremail }, function (err) {                                                                  // 159
                if (err) {                                                                                             // 161
                    Session.set("info", { success: "", error: "注册失败" });                                               // 162
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 164
                    UserInfo.insert({                                                                                  // 165
                        user: _meteor.Meteor.user(),                                                                   // 166
                        isAdmin: false,                                                                                // 167
                        totalScore: 0,                                                                                 // 168
                        todayScore: 0,                                                                                 // 169
                        totalFriend: 1,                                                                                // 170
                        Friends: [_meteor.Meteor.userId()],                                                            // 171
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 172
                        time: new Date()                                                                               // 173
                    });                                                                                                //
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                           // 178
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                          // 179
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 183
    'click #submit': function () {                                                                                     // 184
        function clickSubmit(event) {                                                                                  // 184
            event.preventDefault();                                                                                    // 185
            var $username = $("#username").val();                                                                      // 186
            var $password = $("#password").val();                                                                      // 187
            if ($password.length === 0 || $username.length === 0) {                                                    // 188
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 189
                return;                                                                                                // 190
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 192
                if (err) {                                                                                             // 193
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 194
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 196
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 197
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 198
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 199
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 200
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 210
    'click #submit': function () {                                                                                     // 211
        function clickSubmit(event) {                                                                                  // 211
            event.preventDefault();                                                                                    // 212
            var $post = $("#post").val();                                                                              // 213
            if ($post.length === 0 || $post.length >= 200) {                                                           // 214
                Session.set("info", { success: "", error: "请将字数限制在1-200字以内" });                                        // 215
                return;                                                                                                // 216
            }                                                                                                          //
            Posts.insert({                                                                                             // 218
                user: _meteor.Meteor.user(),                                                                           // 219
                post: $post,                                                                                           // 220
                "super": 0,                                                                                            // 221
                like: 0,                                                                                               // 222
                Likers: [],                                                                                            // 223
                top: false,                                                                                            // 224
                time: new Date() }, function (err) {                                                                   // 225
                if (err) {                                                                                             // 227
                    Session.set("info", { success: "", error: "发表失败" });                                               // 228
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 230
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 231
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 237
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 241
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 243
        function clickCommnetSubmit(event) {                                                                           // 243
            event.preventDefault();                                                                                    // 244
            var $comment = $("#" + this._id).val();                                                                    // 245
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 246
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 247
                scroll(0, 0);                                                                                          // 248
                return;                                                                                                // 249
            }                                                                                                          //
            Posts.insert({                                                                                             // 251
                user: _meteor.Meteor.user(),                                                                           // 252
                post: $comment,                                                                                        // 253
                "super": this._id,                                                                                     // 254
                time: new Date() }, function (err) {                                                                   // 255
                if (err) {                                                                                             // 257
                    Session.set("info", { success: "", error: "评论失败" });                                               // 258
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 260
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 261
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $("#" + this._id).val("");                                                                         // 267
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 271
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 273
        function clickAddFriend(event) {                                                                               // 273
            event.preventDefault();                                                                                    // 274
            var $friendId = this.user._id;                                                                             // 275
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 276
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 277
                scroll(0, 0);                                                                                          // 278
                return;                                                                                                // 279
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 282
            UserInfo.update({                                                                                          // 283
                "_id": userInfoId                                                                                      // 284
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 286
                $inc: { "totalFriend": 1 }                                                                             // 287
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 291
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 292
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 294
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 295
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 305
        function clickLikePost(event) {                                                                                // 305
            event.preventDefault();                                                                                    // 306
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 307
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 308
                scroll(0, 0);                                                                                          // 309
                return;                                                                                                // 310
            }                                                                                                          //
            Posts.update({                                                                                             // 312
                "_id": this._id                                                                                        // 313
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 315
                $inc: { "like": 1 }                                                                                    // 316
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 320
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 321
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 323
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 324
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 325
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 334
        function clickTopPost(event) {                                                                                 // 334
            event.preventDefault();                                                                                    // 335
            if (_meteor.Meteor.user().username != "admin") {                                                           // 336
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 337
                scroll(0, 0);                                                                                          // 338
                return;                                                                                                // 339
            }                                                                                                          //
            Posts.update({                                                                                             // 341
                "_id": this._id                                                                                        // 342
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 344
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 348
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 349
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 351
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 352
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 362
        function clickUntopPost(event) {                                                                               // 362
            event.preventDefault();                                                                                    // 363
            if (_meteor.Meteor.user().username != "admin") {                                                           // 364
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 365
                scroll(0, 0);                                                                                          // 366
                return;                                                                                                // 367
            }                                                                                                          //
            Posts.update({                                                                                             // 369
                "_id": this._id                                                                                        // 370
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 372
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 376
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 377
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 379
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }()                                                                                                                //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.client.js");
require("./client/template.friend.js");
require("./client/template.index.js");
require("./client/template.lists.js");
require("./client/template.login.js");
require("./client/template.reg.js");
require("./client/template.self.js");
require("./client/client.js");