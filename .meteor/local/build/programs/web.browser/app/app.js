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
    }, "发表"), "\n            "), "\n            ", Blaze.If(function() {                                               // 23
      return Spacebars.call(view.lookup("getAudioBtn"));                                                               // 24
    }, function() {                                                                                                    // 25
      return [ "\n            ", HTML.DIV({                                                                            // 26
        "class": "control-group"                                                                                       // 27
      }, "\n                ", HTML.BUTTON({                                                                           // 28
        id: "getAudio",                                                                                                // 29
        "class": "btn btn-default"                                                                                     // 30
      }, "获取录音"), "\n                ", HTML.BUTTON({                                                                  // 31
        id: "getImage",                                                                                                // 32
        "class": "btn btn-default"                                                                                     // 33
      }, "链接图片"), "\n                ", HTML.BUTTON({                                                                  // 34
        id: "getVideo",                                                                                                // 35
        "class": "btn btn-default"                                                                                     // 36
      }, "获取视频"), "\n            "), "\n            " ];                                                               // 37
    }), "\n            \n        "), "\n    " ];                                                                       // 38
  }, function() {                                                                                                      // 39
    return [ "\n        ", HTML.H2("游客无法发布新闻或者评论。请注册或者登陆。"), "\n    " ];                                               // 40
  }), "\n    \n    ", Blaze.Each(function() {                                                                          // 41
    return Spacebars.call(view.lookup("topPosts"));                                                                    // 42
  }, function() {                                                                                                      // 43
    return [ "\n        ", HTML.DIV({                                                                                  // 44
      "class": "center well singlePost"                                                                                // 45
    }, "\n            ", HTML.DIV({                                                                                    // 46
      "class": ""                                                                                                      // 47
    }, "\n                ", HTML.DIV({                                                                                // 48
      "class": "postTitle"                                                                                             // 49
    }, "\n                    ", HTML.H2({                                                                             // 50
      "class": "text-primary span10"                                                                                   // 51
    }, Blaze.View("lookup:user.username", function() {                                                                 // 52
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 53
    }), " \n                    ", HTML.BUTTON({                                                                       // 54
      id: "addFriend",                                                                                                 // 55
      "class": "btn btn-info"                                                                                          // 56
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 57
      id: "likePost",                                                                                                  // 58
      "class": "btn btn-warning"                                                                                       // 59
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 60
      return Spacebars.mustache(view.lookup("like"));                                                                  // 61
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 62
      id: "untopPost",                                                                                                 // 63
      "class": "btn btn-danger"                                                                                        // 64
    }, "取消置顶 "), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({               // 65
      "class": "col-xs-3 "                                                                                             // 66
    }), "\n            "), "\n            ", HTML.P({                                                                  // 67
      "class": "muted"                                                                                                 // 68
    }, Blaze.View("lookup:time", function() {                                                                          // 69
      return Spacebars.mustache(view.lookup("time"));                                                                  // 70
    })), "\n            ", HTML.P({                                                                                    // 71
      "class": "span10"                                                                                                // 72
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 73
      return Blaze.View("lookup:post", function() {                                                                    // 74
        return Spacebars.mustache(view.lookup("post"));                                                                // 75
      });                                                                                                              // 76
    })), "\n            ", Blaze.If(function() {                                                                       // 77
      return Spacebars.call(view.lookup("currentUser"));                                                               // 78
    }, function() {                                                                                                    // 79
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 80
        type: "text",                                                                                                  // 81
        "class": "span8",                                                                                              // 82
        id: function() {                                                                                               // 83
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 84
        }                                                                                                              // 85
      }), "\n                    ", HTML.BUTTON({                                                                      // 86
        id: "commnetSubmit",                                                                                           // 87
        "class": "btn btn-success"                                                                                     // 88
      }, "评论"), "\n                "), "\n            " ];                                                             // 89
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 90
      return Spacebars.call(view.lookup("comments"));                                                                  // 91
    }, function() {                                                                                                    // 92
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 93
        "class": "postTitle"                                                                                           // 94
      }, Blaze.View("lookup:user.username", function() {                                                               // 95
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 96
      })), " : ", Blaze.View("lookup:post", function() {                                                               // 97
        return Spacebars.mustache(view.lookup("post"));                                                                // 98
      })), "\n            " ];                                                                                         // 99
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 100
  }), "\n\n    ", Blaze.Each(function() {                                                                              // 101
    return Spacebars.call(view.lookup("posts"));                                                                       // 102
  }, function() {                                                                                                      // 103
    return [ "\n        ", HTML.DIV({                                                                                  // 104
      "class": "center singlePost"                                                                                     // 105
    }, "\n            ", HTML.DIV({                                                                                    // 106
      "class": ""                                                                                                      // 107
    }, "\n                ", HTML.DIV({                                                                                // 108
      "class": "postTitle"                                                                                             // 109
    }, "\n                    ", HTML.H2({                                                                             // 110
      "class": "text-primary span10"                                                                                   // 111
    }, Blaze.View("lookup:user.username", function() {                                                                 // 112
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 113
    }), " \n                    ", HTML.BUTTON({                                                                       // 114
      id: "addFriend",                                                                                                 // 115
      "class": "btn btn-info"                                                                                          // 116
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 117
      id: "likePost",                                                                                                  // 118
      "class": "btn btn-warning"                                                                                       // 119
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 120
      return Spacebars.mustache(view.lookup("like"));                                                                  // 121
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 122
      id: "topPost",                                                                                                   // 123
      "class": "btn btn-danger"                                                                                        // 124
    }, "置顶 "), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                 // 125
      "class": "col-xs-3 "                                                                                             // 126
    }), "\n            "), "\n            ", HTML.P({                                                                  // 127
      "class": "muted"                                                                                                 // 128
    }, Blaze.View("lookup:time", function() {                                                                          // 129
      return Spacebars.mustache(view.lookup("time"));                                                                  // 130
    })), "\n            ", HTML.P({                                                                                    // 131
      "class": "span10"                                                                                                // 132
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 133
      return Blaze.View("lookup:post", function() {                                                                    // 134
        return Spacebars.mustache(view.lookup("post"));                                                                // 135
      });                                                                                                              // 136
    })), "\n            ", Blaze.If(function() {                                                                       // 137
      return Spacebars.call(view.lookup("currentUser"));                                                               // 138
    }, function() {                                                                                                    // 139
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 140
        type: "text",                                                                                                  // 141
        "class": "span8",                                                                                              // 142
        id: function() {                                                                                               // 143
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 144
        }                                                                                                              // 145
      }), "\n                    ", HTML.BUTTON({                                                                      // 146
        id: "commnetSubmit",                                                                                           // 147
        "class": "btn btn-success"                                                                                     // 148
      }, "评论"), "\n                "), "\n            " ];                                                             // 149
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 150
      return Spacebars.call(view.lookup("comments"));                                                                  // 151
    }, function() {                                                                                                    // 152
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 153
        "class": "postTitle"                                                                                           // 154
      }, Blaze.View("lookup:user.username", function() {                                                               // 155
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 156
      })), " : ", Blaze.View("lookup:post", function() {                                                               // 157
        return Spacebars.mustache(view.lookup("post"));                                                                // 158
      })), "\n            " ];                                                                                         // 159
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 160
  }) ];                                                                                                                // 161
}));                                                                                                                   // 162
                                                                                                                       // 163
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
        //Session.set("info", {success:"navigator success hahaha", error: ""});                                        //
    }                                                                                                                  // 6
});                                                                                                                    //
                                                                                                                       //
Session.setDefault("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });            // 12
Session.setDefault("info", { success: "", error: "" });                                                                // 13
Posts = new _meteor.Meteor.Collection("posts");                                                                        // 14
SystemInfo = new _meteor.Meteor.Collection("systemInfo");                                                              // 15
UserInfo = new _meteor.Meteor.Collection("userInfo");                                                                  // 16
                                                                                                                       //
var captureSuccess = function captureSuccess(mediaFiles) {                                                             // 18
    var i, path, len;                                                                                                  // 19
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 20
        path = mediaFiles[i].fullPath;                                                                                 // 21
        // do something interesting with the file                                                                      //
        Session.set("info", { success: path, error: "" });                                                             // 20
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
// capture error callback                                                                                              //
var captureError = function captureError(error) {                                                                      // 28
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');                                  // 29
};                                                                                                                     //
                                                                                                                       //
if (_meteor.Meteor.isCordova) {}                                                                                       // 32
                                                                                                                       //
Template.info.helpers({                                                                                                // 36
    info: function () {                                                                                                // 37
        function info() {                                                                                              //
            return Session.get("info");                                                                                // 38
        }                                                                                                              //
                                                                                                                       //
        return info;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.container.helpers({                                                                                           // 42
    currentUrl: function () {                                                                                          // 43
        function currentUrl() {                                                                                        //
            return Session.get("currentUrl");                                                                          // 44
        }                                                                                                              //
                                                                                                                       //
        return currentUrl;                                                                                             //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.nav.helpers({                                                                                                 // 48
    active: function () {                                                                                              // 49
        function active() {                                                                                            //
            return Session.get("currentUrl");                                                                          // 50
        }                                                                                                              //
                                                                                                                       //
        return active;                                                                                                 //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.helpers({                                                                                               // 54
    topPosts: function () {                                                                                            // 55
        function topPosts() {                                                                                          //
            return Posts.find({ "top": true, "super": 0 }, { sort: { time: -1 } });                                    // 56
        }                                                                                                              //
                                                                                                                       //
        return topPosts;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 58
        function posts() {                                                                                             //
            if (!_meteor.Meteor.userId()) {                                                                            // 59
                return Posts.find({ "user.username": "admin", "super": 0, "top": false }, { sort: { time: -1 } });     // 60
            } else {                                                                                                   //
                return Posts.find({ "super": 0, "top": false }, { sort: { time: -1 } });                               // 62
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 65
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 66
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }(),                                                                                                               //
    getAudioBtn: function () {                                                                                         // 68
        function getAudioBtn() {                                                                                       //
            if (_meteor.Meteor.isCordova) {                                                                            // 69
                return true;                                                                                           // 70
            } else {                                                                                                   //
                return false;                                                                                          // 72
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return getAudioBtn;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.helpers({                                                                                               // 77
    lists: function () {                                                                                               // 78
        function lists() {                                                                                             //
            return UserInfo.find({}, { sort: { totalScore: -1 } });                                                    // 79
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 83
    self: function () {                                                                                                // 84
        function self() {                                                                                              //
            return UserInfo.find({ "user._id": _meteor.Meteor.userId() });                                             // 85
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 89
    friendRank: function () {                                                                                          // 90
        function friendRank() {                                                                                        //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 91
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } }, { limit: 10 });              // 92
        }                                                                                                              //
                                                                                                                       //
        return friendRank;                                                                                             //
    }(),                                                                                                               //
    friendToday: function () {                                                                                         // 94
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 95
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { todayScore: -1 } }, { limit: 10 });       // 96
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }(),                                                                                                               //
    friendTotal: function () {                                                                                         // 98
        function friendTotal() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 99
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { totalScore: -1 } }, { limit: 10 });       // 100
        }                                                                                                              //
                                                                                                                       //
        return friendTotal;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 104
    Backbone.history.start({ pushState: true });                                                                       // 105
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 108
    routes: {                                                                                                          // 109
        "": "index",                                                                                                   // 110
        "login": "login",                                                                                              // 111
        "reg": "reg",                                                                                                  // 112
        "logout": "logout",                                                                                            // 113
        "friend": "friend",                                                                                            // 114
        "lists": "lists",                                                                                              // 115
        "self": "self"                                                                                                 // 116
    },                                                                                                                 //
    index: function () {                                                                                               // 118
        function index() {                                                                                             // 118
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });       // 119
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 121
        function friend() {                                                                                            // 121
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "" });       // 122
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 124
        function lists() {                                                                                             // 124
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "" });       // 125
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 127
        function self() {                                                                                              // 127
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active" });       // 128
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    login: function () {                                                                                               // 130
        function login() {                                                                                             // 130
            if (_meteor.Meteor.userId()) {                                                                             // 131
                this.navigate("/", true);                                                                              // 132
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 133
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "" });       // 135
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 137
        function reg() {                                                                                               // 137
            if (_meteor.Meteor.userId()) {                                                                             // 138
                this.navigate("/", true);                                                                              // 139
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 140
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "" });       // 142
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 144
        function logout() {                                                                                            // 144
            if (_meteor.Meteor.userId()) {                                                                             // 145
                _meteor.Meteor.logout();                                                                               // 146
                this.navigate("/", true);                                                                              // 147
                Session.set("info", { success: "登出成功", error: "" });                                                   // 148
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 149
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 151
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 152
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 155
        function redirect(url) {                                                                                       // 155
            this.navigate(url, true);                                                                                  // 156
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 159
                                                                                                                       //
Template.reg.events({                                                                                                  // 161
    'click #submit': function () {                                                                                     // 162
        function clickSubmit(event) {                                                                                  // 162
            event.preventDefault();                                                                                    // 163
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 164
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 165
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 167
            var $password = $("#password").val();                                                                      // 168
            var $useremail = $("#useremail").val();                                                                    // 169
            var $password_repeat = $("#password-repeat").val();                                                        // 170
            if ($password.length === 0 || $username.length === 0) {                                                    // 171
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 172
                return;                                                                                                // 173
            }                                                                                                          //
            if ($password !== $password_repeat) {                                                                      // 175
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 176
                return;                                                                                                // 177
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 179
                username: $username,                                                                                   // 180
                password: $password,                                                                                   // 181
                email: $useremail }, function (err) {                                                                  // 182
                if (err) {                                                                                             // 184
                    Session.set("info", { success: "", error: "注册失败" });                                               // 185
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 187
                    UserInfo.insert({                                                                                  // 188
                        user: _meteor.Meteor.user(),                                                                   // 189
                        isAdmin: false,                                                                                // 190
                        totalScore: 0,                                                                                 // 191
                        todayScore: 0,                                                                                 // 192
                        totalFriend: 1,                                                                                // 193
                        Friends: [_meteor.Meteor.userId()],                                                            // 194
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 195
                        time: new Date()                                                                               // 196
                    });                                                                                                //
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                           // 201
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                          // 202
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 206
    'click #submit': function () {                                                                                     // 207
        function clickSubmit(event) {                                                                                  // 207
            event.preventDefault();                                                                                    // 208
            var $username = $("#username").val();                                                                      // 209
            var $password = $("#password").val();                                                                      // 210
            if ($password.length === 0 || $username.length === 0) {                                                    // 211
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 212
                return;                                                                                                // 213
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 215
                if (err) {                                                                                             // 216
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 217
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 219
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 220
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 221
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 222
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 223
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 233
    'click #submit': function () {                                                                                     // 234
        function clickSubmit(event) {                                                                                  // 234
            event.preventDefault();                                                                                    // 235
            var $post = $("#post").val();                                                                              // 236
            if ($post.length === 0 || $post.length >= 200) {                                                           // 237
                Session.set("info", { success: "", error: "请将字数限制在1-200字以内" });                                        // 238
                return;                                                                                                // 239
            }                                                                                                          //
            Posts.insert({                                                                                             // 241
                user: _meteor.Meteor.user(),                                                                           // 242
                post: $post,                                                                                           // 243
                "super": 0,                                                                                            // 244
                like: 0,                                                                                               // 245
                Likers: [],                                                                                            // 246
                top: false,                                                                                            // 247
                time: new Date() }, function (err) {                                                                   // 248
                if (err) {                                                                                             // 250
                    Session.set("info", { success: "", error: "发表失败" });                                               // 251
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 253
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 254
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 260
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 264
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 266
        function clickCommnetSubmit(event) {                                                                           // 266
            event.preventDefault();                                                                                    // 267
            var $comment = $("#" + this._id).val();                                                                    // 268
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 269
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 270
                scroll(0, 0);                                                                                          // 271
                return;                                                                                                // 272
            }                                                                                                          //
            Posts.insert({                                                                                             // 274
                user: _meteor.Meteor.user(),                                                                           // 275
                post: $comment,                                                                                        // 276
                "super": this._id,                                                                                     // 277
                time: new Date() }, function (err) {                                                                   // 278
                if (err) {                                                                                             // 280
                    Session.set("info", { success: "", error: "评论失败" });                                               // 281
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 283
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 284
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $("#" + this._id).val("");                                                                         // 290
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 294
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 296
        function clickAddFriend(event) {                                                                               // 296
            event.preventDefault();                                                                                    // 297
            var $friendId = this.user._id;                                                                             // 298
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 299
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 300
                scroll(0, 0);                                                                                          // 301
                return;                                                                                                // 302
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 305
            UserInfo.update({                                                                                          // 306
                "_id": userInfoId                                                                                      // 307
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 309
                $inc: { "totalFriend": 1 }                                                                             // 310
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 314
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 315
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 317
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 318
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 328
        function clickLikePost(event) {                                                                                // 328
            event.preventDefault();                                                                                    // 329
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 330
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 331
                scroll(0, 0);                                                                                          // 332
                return;                                                                                                // 333
            }                                                                                                          //
            Posts.update({                                                                                             // 335
                "_id": this._id                                                                                        // 336
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 338
                $inc: { "like": 1 }                                                                                    // 339
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 343
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 344
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 346
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 347
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 348
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 357
        function clickTopPost(event) {                                                                                 // 357
            event.preventDefault();                                                                                    // 358
            if (_meteor.Meteor.user().username != "admin") {                                                           // 359
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 360
                scroll(0, 0);                                                                                          // 361
                return;                                                                                                // 362
            }                                                                                                          //
            Posts.update({                                                                                             // 364
                "_id": this._id                                                                                        // 365
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 367
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 371
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 372
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 374
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 375
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 385
        function clickUntopPost(event) {                                                                               // 385
            event.preventDefault();                                                                                    // 386
            if (_meteor.Meteor.user().username != "admin") {                                                           // 387
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 388
                scroll(0, 0);                                                                                          // 389
                return;                                                                                                // 390
            }                                                                                                          //
            Posts.update({                                                                                             // 392
                "_id": this._id                                                                                        // 393
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 395
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 399
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 400
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 402
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 407
        function clickGetImage(event) {                                                                                // 407
            event.preventDefault();                                                                                    // 408
            navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });                         // 409
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 411
        function clickGetAudio(event) {                                                                                // 411
            event.preventDefault();                                                                                    // 412
            navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 1 });                         // 413
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 415
        function clickGetVideo(event) {                                                                                // 415
            event.preventDefault();                                                                                    // 416
            navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 2 });                         // 417
        }                                                                                                              //
                                                                                                                       //
        return clickGetVideo;                                                                                          //
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