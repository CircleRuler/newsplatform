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
Images = new FS.Collection("images", {                                                                                 // 18
    stores: [new FS.Store.FileSystem("images", { path: "~/uploadsImage" })]                                            // 19
});                                                                                                                    //
                                                                                                                       //
Audios = new FS.Collection("audios", {                                                                                 // 22
    stores: [new FS.Store.FileSystem("audios", { path: "~/uploadsAudio" })]                                            // 23
});                                                                                                                    //
                                                                                                                       //
Videos = new FS.Collection("videos", {                                                                                 // 26
    stores: [new FS.Store.FileSystem("videos", { path: "~/uploadsVideo" })]                                            // 27
});                                                                                                                    //
                                                                                                                       //
var captureSuccess = function captureSuccess(mediaFiles) {                                                             // 30
    var i, path, len;                                                                                                  // 31
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 32
        path = mediaFiles[i].fullPath;                                                                                 // 33
        // do something interesting with the file                                                                      //
        Session.set("info", { success: mediaFiles[i], error: "" });                                                    // 32
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
// capture error callback                                                                                              //
var captureError = function captureError(error) {                                                                      // 40
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');                                  // 41
};                                                                                                                     //
                                                                                                                       //
if (_meteor.Meteor.isCordova) {}                                                                                       // 44
                                                                                                                       //
Template.info.helpers({                                                                                                // 48
    info: function () {                                                                                                // 49
        function info() {                                                                                              //
            return Session.get("info");                                                                                // 50
        }                                                                                                              //
                                                                                                                       //
        return info;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.container.helpers({                                                                                           // 54
    currentUrl: function () {                                                                                          // 55
        function currentUrl() {                                                                                        //
            return Session.get("currentUrl");                                                                          // 56
        }                                                                                                              //
                                                                                                                       //
        return currentUrl;                                                                                             //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.nav.helpers({                                                                                                 // 60
    active: function () {                                                                                              // 61
        function active() {                                                                                            //
            return Session.get("currentUrl");                                                                          // 62
        }                                                                                                              //
                                                                                                                       //
        return active;                                                                                                 //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.helpers({                                                                                               // 66
    topPosts: function () {                                                                                            // 67
        function topPosts() {                                                                                          //
            return Posts.find({ "top": true, "super": 0 }, { sort: { time: -1 } });                                    // 68
        }                                                                                                              //
                                                                                                                       //
        return topPosts;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 70
        function posts() {                                                                                             //
            if (!_meteor.Meteor.userId()) {                                                                            // 71
                return Posts.find({ "user.username": "admin", "super": 0, "top": false }, { sort: { time: -1 } });     // 72
            } else {                                                                                                   //
                return Posts.find({ "super": 0, "top": false }, { sort: { time: -1 } });                               // 74
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 77
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 78
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }(),                                                                                                               //
    getAudioBtn: function () {                                                                                         // 80
        function getAudioBtn() {                                                                                       //
            if (_meteor.Meteor.isCordova) {                                                                            // 81
                return true;                                                                                           // 82
            } else {                                                                                                   //
                return false;                                                                                          // 84
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return getAudioBtn;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.helpers({                                                                                               // 89
    lists: function () {                                                                                               // 90
        function lists() {                                                                                             //
            return UserInfo.find({}, { sort: { totalScore: -1 } });                                                    // 91
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 95
    self: function () {                                                                                                // 96
        function self() {                                                                                              //
            return UserInfo.find({ "user._id": _meteor.Meteor.userId() });                                             // 97
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 101
    friendRank: function () {                                                                                          // 102
        function friendRank() {                                                                                        //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 103
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } }, { limit: 10 });              // 104
        }                                                                                                              //
                                                                                                                       //
        return friendRank;                                                                                             //
    }(),                                                                                                               //
    friendToday: function () {                                                                                         // 106
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 107
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { todayScore: -1 } }, { limit: 10 });       // 108
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }(),                                                                                                               //
    friendTotal: function () {                                                                                         // 110
        function friendTotal() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 111
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { totalScore: -1 } }, { limit: 10 });       // 112
        }                                                                                                              //
                                                                                                                       //
        return friendTotal;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 116
    Backbone.history.start({ pushState: true });                                                                       // 117
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 120
    routes: {                                                                                                          // 121
        "": "index",                                                                                                   // 122
        "login": "login",                                                                                              // 123
        "reg": "reg",                                                                                                  // 124
        "logout": "logout",                                                                                            // 125
        "friend": "friend",                                                                                            // 126
        "lists": "lists",                                                                                              // 127
        "self": "self"                                                                                                 // 128
    },                                                                                                                 //
    index: function () {                                                                                               // 130
        function index() {                                                                                             // 130
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });       // 131
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 133
        function friend() {                                                                                            // 133
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "" });       // 134
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 136
        function lists() {                                                                                             // 136
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "" });       // 137
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 139
        function self() {                                                                                              // 139
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active" });       // 140
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    login: function () {                                                                                               // 142
        function login() {                                                                                             // 142
            if (_meteor.Meteor.userId()) {                                                                             // 143
                this.navigate("/", true);                                                                              // 144
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 145
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "" });       // 147
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 149
        function reg() {                                                                                               // 149
            if (_meteor.Meteor.userId()) {                                                                             // 150
                this.navigate("/", true);                                                                              // 151
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 152
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "" });       // 154
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 156
        function logout() {                                                                                            // 156
            if (_meteor.Meteor.userId()) {                                                                             // 157
                _meteor.Meteor.logout();                                                                               // 158
                this.navigate("/", true);                                                                              // 159
                Session.set("info", { success: "登出成功", error: "" });                                                   // 160
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 161
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 163
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 164
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 167
        function redirect(url) {                                                                                       // 167
            this.navigate(url, true);                                                                                  // 168
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 171
                                                                                                                       //
Template.reg.events({                                                                                                  // 173
    'click #submit': function () {                                                                                     // 174
        function clickSubmit(event) {                                                                                  // 174
            event.preventDefault();                                                                                    // 175
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 176
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 177
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 179
            var $password = $("#password").val();                                                                      // 180
            var $useremail = $("#useremail").val();                                                                    // 181
            var $password_repeat = $("#password-repeat").val();                                                        // 182
            if ($password.length === 0 || $username.length === 0) {                                                    // 183
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 184
                return;                                                                                                // 185
            }                                                                                                          //
            if ($password !== $password_repeat) {                                                                      // 187
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 188
                return;                                                                                                // 189
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 191
                username: $username,                                                                                   // 192
                password: $password,                                                                                   // 193
                email: $useremail }, function (err) {                                                                  // 194
                if (err) {                                                                                             // 196
                    Session.set("info", { success: "", error: "注册失败" });                                               // 197
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 199
                    UserInfo.insert({                                                                                  // 200
                        user: _meteor.Meteor.user(),                                                                   // 201
                        isAdmin: false,                                                                                // 202
                        totalScore: 0,                                                                                 // 203
                        todayScore: 0,                                                                                 // 204
                        totalFriend: 1,                                                                                // 205
                        Friends: [_meteor.Meteor.userId()],                                                            // 206
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 207
                        time: new Date()                                                                               // 208
                    });                                                                                                //
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                           // 213
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                          // 214
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 218
    'click #submit': function () {                                                                                     // 219
        function clickSubmit(event) {                                                                                  // 219
            event.preventDefault();                                                                                    // 220
            var $username = $("#username").val();                                                                      // 221
            var $password = $("#password").val();                                                                      // 222
            if ($password.length === 0 || $username.length === 0) {                                                    // 223
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 224
                return;                                                                                                // 225
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 227
                if (err) {                                                                                             // 228
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 229
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 231
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 232
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 233
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 234
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 235
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 245
    'click #submit': function () {                                                                                     // 246
        function clickSubmit(event) {                                                                                  // 246
            event.preventDefault();                                                                                    // 247
            var $post = $("#post").val();                                                                              // 248
            if ($post.length === 0 || $post.length >= 200) {                                                           // 249
                Session.set("info", { success: "", error: "请将字数限制在1-200字以内" });                                        // 250
                return;                                                                                                // 251
            }                                                                                                          //
            Posts.insert({                                                                                             // 253
                user: _meteor.Meteor.user(),                                                                           // 254
                post: $post,                                                                                           // 255
                "super": 0,                                                                                            // 256
                like: 0,                                                                                               // 257
                Likers: [],                                                                                            // 258
                top: false,                                                                                            // 259
                time: new Date() }, function (err) {                                                                   // 260
                if (err) {                                                                                             // 262
                    Session.set("info", { success: "", error: "发表失败" });                                               // 263
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 265
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 266
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 272
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 276
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 278
        function clickCommnetSubmit(event) {                                                                           // 278
            event.preventDefault();                                                                                    // 279
            var $comment = $("#" + this._id).val();                                                                    // 280
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 281
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 282
                scroll(0, 0);                                                                                          // 283
                return;                                                                                                // 284
            }                                                                                                          //
            Posts.insert({                                                                                             // 286
                user: _meteor.Meteor.user(),                                                                           // 287
                post: $comment,                                                                                        // 288
                "super": this._id,                                                                                     // 289
                time: new Date() }, function (err) {                                                                   // 290
                if (err) {                                                                                             // 292
                    Session.set("info", { success: "", error: "评论失败" });                                               // 293
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 295
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 296
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $("#" + this._id).val("");                                                                         // 302
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 306
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 308
        function clickAddFriend(event) {                                                                               // 308
            event.preventDefault();                                                                                    // 309
            var $friendId = this.user._id;                                                                             // 310
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 311
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 312
                scroll(0, 0);                                                                                          // 313
                return;                                                                                                // 314
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 317
            UserInfo.update({                                                                                          // 318
                "_id": userInfoId                                                                                      // 319
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 321
                $inc: { "totalFriend": 1 }                                                                             // 322
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 326
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 327
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 329
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 330
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 340
        function clickLikePost(event) {                                                                                // 340
            event.preventDefault();                                                                                    // 341
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 342
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 343
                scroll(0, 0);                                                                                          // 344
                return;                                                                                                // 345
            }                                                                                                          //
            Posts.update({                                                                                             // 347
                "_id": this._id                                                                                        // 348
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 350
                $inc: { "like": 1 }                                                                                    // 351
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 355
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 356
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 358
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 359
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 360
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 369
        function clickTopPost(event) {                                                                                 // 369
            event.preventDefault();                                                                                    // 370
            if (_meteor.Meteor.user().username != "admin") {                                                           // 371
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 372
                scroll(0, 0);                                                                                          // 373
                return;                                                                                                // 374
            }                                                                                                          //
            Posts.update({                                                                                             // 376
                "_id": this._id                                                                                        // 377
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 379
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 383
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 384
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 386
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 387
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 397
        function clickUntopPost(event) {                                                                               // 397
            event.preventDefault();                                                                                    // 398
            if (_meteor.Meteor.user().username != "admin") {                                                           // 399
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 400
                scroll(0, 0);                                                                                          // 401
                return;                                                                                                // 402
            }                                                                                                          //
            Posts.update({                                                                                             // 404
                "_id": this._id                                                                                        // 405
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 407
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 411
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 412
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 414
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 419
        function clickGetImage(event) {                                                                                // 419
            event.preventDefault();                                                                                    // 420
            navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });                         // 421
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 423
        function clickGetAudio(event) {                                                                                // 423
            event.preventDefault();                                                                                    // 424
            navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 1 });                         // 425
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 427
        function clickGetVideo(event) {                                                                                // 427
            event.preventDefault();                                                                                    // 428
            navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 2 });                         // 429
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