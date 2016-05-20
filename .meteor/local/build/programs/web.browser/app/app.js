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
      "class": "span7",                                                                                                // 17
      id: "post",                                                                                                      // 18
      rows: "2"                                                                                                        // 19
    }), "\n                ", HTML.P({                                                                                 // 20
      "class": "span1",                                                                                                // 21
      style: "visibility:hidden;"                                                                                      // 22
    }, "  nbsp"), "\n                ", HTML.BUTTON({                                                                  // 23
      id: "submit",                                                                                                    // 24
      "class": "btn btn-success btn-large span2 pull-right"                                                            // 25
    }, "发表"), "\n            "), "\n            ", HTML.P({                                                            // 26
      style: "visibility:hidden;"                                                                                      // 27
    }, "  nbsp"), "\n            ", Blaze.If(function() {                                                              // 28
      return Spacebars.call(view.lookup("getMediaBtn"));                                                               // 29
    }, function() {                                                                                                    // 30
      return [ "\n            ", HTML.DIV({                                                                            // 31
        "class": "control-group"                                                                                       // 32
      }, "\n                ", HTML.BUTTON({                                                                           // 33
        id: "getAudio",                                                                                                // 34
        "class": "btn btn-default"                                                                                     // 35
      }, "获取录音"), "\n                ", HTML.BUTTON({                                                                  // 36
        id: "getImage",                                                                                                // 37
        "class": "btn btn-default"                                                                                     // 38
      }, "链接图片"), "\n                ", HTML.BUTTON({                                                                  // 39
        id: "getVideo",                                                                                                // 40
        "class": "btn btn-default"                                                                                     // 41
      }, "获取视频"), "\n            "), "\n            " ];                                                               // 42
    }), "\n            \n        "), "\n    " ];                                                                       // 43
  }, function() {                                                                                                      // 44
    return [ "\n        ", HTML.H2("游客无法发布新闻或者评论。请注册或者登陆。"), "\n    " ];                                               // 45
  }), "\n    \n    ", Blaze.Each(function() {                                                                          // 46
    return Spacebars.call(view.lookup("topPosts"));                                                                    // 47
  }, function() {                                                                                                      // 48
    return [ "\n        ", HTML.DIV({                                                                                  // 49
      "class": "center well singlePost"                                                                                // 50
    }, "\n            ", HTML.DIV({                                                                                    // 51
      "class": ""                                                                                                      // 52
    }, "\n                ", HTML.DIV({                                                                                // 53
      "class": "postTitle"                                                                                             // 54
    }, "\n                    ", HTML.H2({                                                                             // 55
      "class": "text-primary span10"                                                                                   // 56
    }, Blaze.View("lookup:user.username", function() {                                                                 // 57
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 58
    }), " \n                    ", HTML.BUTTON({                                                                       // 59
      id: "addFriend",                                                                                                 // 60
      "class": "btn btn-info"                                                                                          // 61
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 62
      id: "likePost",                                                                                                  // 63
      "class": "btn btn-warning"                                                                                       // 64
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 65
      return Spacebars.mustache(view.lookup("like"));                                                                  // 66
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 67
      id: "untopPost",                                                                                                 // 68
      "class": "btn btn-danger"                                                                                        // 69
    }, "取消置顶 "), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({               // 70
      "class": "col-xs-3 "                                                                                             // 71
    }), "\n            "), "\n            ", HTML.P({                                                                  // 72
      "class": "muted"                                                                                                 // 73
    }, Blaze.View("lookup:time", function() {                                                                          // 74
      return Spacebars.mustache(view.lookup("time"));                                                                  // 75
    })), "\n            ", HTML.P({                                                                                    // 76
      "class": ""                                                                                                      // 77
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 78
      return Blaze.View("lookup:post", function() {                                                                    // 79
        return Spacebars.mustache(view.lookup("post"));                                                                // 80
      });                                                                                                              // 81
    })), "\n            ", Blaze.If(function() {                                                                       // 82
      return Spacebars.call(view.lookup("currentUser"));                                                               // 83
    }, function() {                                                                                                    // 84
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 85
        type: "text",                                                                                                  // 86
        "class": "span8",                                                                                              // 87
        id: function() {                                                                                               // 88
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 89
        }                                                                                                              // 90
      }), "\n                    ", HTML.BUTTON({                                                                      // 91
        id: "commnetSubmit",                                                                                           // 92
        "class": "btn btn-success"                                                                                     // 93
      }, "评论"), "\n                "), "\n            " ];                                                             // 94
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 95
      return Spacebars.call(view.lookup("comments"));                                                                  // 96
    }, function() {                                                                                                    // 97
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 98
        "class": "postTitle"                                                                                           // 99
      }, Blaze.View("lookup:user.username", function() {                                                               // 100
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 101
      })), " : ", Blaze.View("lookup:post", function() {                                                               // 102
        return Spacebars.mustache(view.lookup("post"));                                                                // 103
      })), "\n            " ];                                                                                         // 104
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 105
  }), "\n\n    ", Blaze.Each(function() {                                                                              // 106
    return Spacebars.call(view.lookup("posts"));                                                                       // 107
  }, function() {                                                                                                      // 108
    return [ "\n        ", HTML.DIV({                                                                                  // 109
      "class": "center singlePost"                                                                                     // 110
    }, "\n            ", HTML.DIV({                                                                                    // 111
      "class": ""                                                                                                      // 112
    }, "\n                ", HTML.DIV({                                                                                // 113
      "class": "postTitle"                                                                                             // 114
    }, "\n                    ", HTML.H2({                                                                             // 115
      "class": "text-primary span10"                                                                                   // 116
    }, Blaze.View("lookup:user.username", function() {                                                                 // 117
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 118
    }), " \n                    ", HTML.BUTTON({                                                                       // 119
      id: "addFriend",                                                                                                 // 120
      "class": "btn btn-info"                                                                                          // 121
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 122
      id: "likePost",                                                                                                  // 123
      "class": "btn btn-warning"                                                                                       // 124
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 125
      return Spacebars.mustache(view.lookup("like"));                                                                  // 126
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 127
      id: "topPost",                                                                                                   // 128
      "class": "btn btn-danger"                                                                                        // 129
    }, "置顶 "), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                 // 130
      "class": "col-xs-3 "                                                                                             // 131
    }), "\n            "), "\n            ", HTML.P({                                                                  // 132
      "class": "muted"                                                                                                 // 133
    }, Blaze.View("lookup:time", function() {                                                                          // 134
      return Spacebars.mustache(view.lookup("time"));                                                                  // 135
    })), "\n            ", HTML.P({                                                                                    // 136
      "class": ""                                                                                                      // 137
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 138
      return Blaze.View("lookup:post", function() {                                                                    // 139
        return Spacebars.mustache(view.lookup("post"));                                                                // 140
      });                                                                                                              // 141
    })), "\n            ", Blaze.If(function() {                                                                       // 142
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 143
    }, function() {                                                                                                    // 144
      return [ "\n            ", Blaze.Each(function() {                                                               // 145
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 147
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 148
          controls: "",                                                                                                // 149
          src: function() {                                                                                            // 150
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 151
          }                                                                                                            // 152
        })), "\n            " ];                                                                                       // 153
      }), "\n            " ];                                                                                          // 154
    }), "\n            ", Blaze.If(function() {                                                                        // 155
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 156
    }, function() {                                                                                                    // 157
      return [ "\n            ", Blaze.Each(function() {                                                               // 158
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 160
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 161
          src: function() {                                                                                            // 162
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 163
          },                                                                                                           // 164
          alt: "",                                                                                                     // 165
          "class": "thumbnail"                                                                                         // 166
        })), "\n            " ];                                                                                       // 167
      }), "\n            " ];                                                                                          // 168
    }), "\n            ", Blaze.If(function() {                                                                        // 169
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 170
    }, function() {                                                                                                    // 171
      return [ "\n            ", Blaze.Each(function() {                                                               // 172
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 174
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 175
          src: function() {                                                                                            // 176
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 177
          }                                                                                                            // 178
        })), "\n            " ];                                                                                       // 179
      }), "\n            " ];                                                                                          // 180
    }), "\n            ", Blaze.If(function() {                                                                        // 181
      return Spacebars.call(view.lookup("currentUser"));                                                               // 182
    }, function() {                                                                                                    // 183
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 184
        type: "text",                                                                                                  // 185
        "class": "span8",                                                                                              // 186
        id: function() {                                                                                               // 187
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 188
        }                                                                                                              // 189
      }), "\n                    ", HTML.BUTTON({                                                                      // 190
        id: "commnetSubmit",                                                                                           // 191
        "class": "btn btn-success"                                                                                     // 192
      }, "评论"), "\n                "), "\n            " ];                                                             // 193
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 194
      return Spacebars.call(view.lookup("comments"));                                                                  // 195
    }, function() {                                                                                                    // 196
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 197
        "class": "postTitle"                                                                                           // 198
      }, Blaze.View("lookup:user.username", function() {                                                               // 199
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 200
      })), " : ", Blaze.View("lookup:post", function() {                                                               // 201
        return Spacebars.mustache(view.lookup("post"));                                                                // 202
      })), "\n            " ];                                                                                         // 203
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 204
  }) ];                                                                                                                // 205
}));                                                                                                                   // 206
                                                                                                                       // 207
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
var isGetImage = false;                                                                                                // 18
var isGetAudio = false;                                                                                                // 19
var isGetVideo = false;                                                                                                // 20
var captureImageId = false;                                                                                            // 21
var captureAudioId = false;                                                                                            // 22
var captureVideoId = false;                                                                                            // 23
                                                                                                                       //
Images = new FS.Collection("images", {                                                                                 // 25
    stores: [new FS.Store.FileSystem("images", { path: "~/uploadsImage" })]                                            // 26
});                                                                                                                    //
                                                                                                                       //
Audios = new FS.Collection("audios", {                                                                                 // 29
    stores: [new FS.Store.FileSystem("audios", { path: "~/uploadsAudio" })]                                            // 30
});                                                                                                                    //
                                                                                                                       //
Videos = new FS.Collection("videos", {                                                                                 // 33
    stores: [new FS.Store.FileSystem("videos", { path: "~/uploadsVideo" })]                                            // 34
});                                                                                                                    //
                                                                                                                       //
var captureImageSuccess = function captureImageSuccess(mediaFiles) {                                                   // 37
    var i, path, len;                                                                                                  // 38
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 39
        path = mediaFiles[i].fullPath;                                                                                 // 40
        Images.insert(mediaFiles[i], function (err, fileObj) {                                                         // 41
            isGetImage = true;                                                                                         // 42
            captureImageId = fileObj._id;                                                                              // 43
            Session.set("info", { success: "插入图片成功", error: "" });                                                     // 44
        });                                                                                                            //
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
var captureAudioSuccess = function captureAudioSuccess(mediaFiles) {                                                   // 49
    var i, path, len;                                                                                                  // 50
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 51
        path = mediaFiles[i].fullPath;                                                                                 // 52
        Audios.insert(mediaFiles[i], function (err, fileObj) {                                                         // 53
            isGetAudio = true;                                                                                         // 54
            captureAudioId = fileObj._id;                                                                              // 55
            Session.set("info", { success: "插入音频成功", error: "" });                                                     // 56
        });                                                                                                            //
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
var captureVideoSuccess = function captureVideoSuccess(mediaFiles) {                                                   // 61
    var i, path, len;                                                                                                  // 62
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 63
        path = mediaFiles[i].fullPath;                                                                                 // 64
        Videos.insert(mediaFiles[i], function (err, fileObj) {                                                         // 65
            isGetVideo = true;                                                                                         // 66
            captureVideoId = fileObj._id;                                                                              // 67
            Session.set("info", { success: "插入小视频成功", error: "" });                                                    // 68
        });                                                                                                            //
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
// capture error callback                                                                                              //
var captureError = function captureError(error) {                                                                      // 74
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');                                  // 75
};                                                                                                                     //
                                                                                                                       //
if (_meteor.Meteor.isCordova) {}                                                                                       // 78
                                                                                                                       //
Template.info.helpers({                                                                                                // 82
    info: function () {                                                                                                // 83
        function info() {                                                                                              //
            return Session.get("info");                                                                                // 84
        }                                                                                                              //
                                                                                                                       //
        return info;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.container.helpers({                                                                                           // 88
    currentUrl: function () {                                                                                          // 89
        function currentUrl() {                                                                                        //
            return Session.get("currentUrl");                                                                          // 90
        }                                                                                                              //
                                                                                                                       //
        return currentUrl;                                                                                             //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.nav.helpers({                                                                                                 // 94
    active: function () {                                                                                              // 95
        function active() {                                                                                            //
            return Session.get("currentUrl");                                                                          // 96
        }                                                                                                              //
                                                                                                                       //
        return active;                                                                                                 //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.helpers({                                                                                               // 100
    topPosts: function () {                                                                                            // 101
        function topPosts() {                                                                                          //
            return Posts.find({ "top": true, "super": 0 }, { sort: { time: -1 } });                                    // 102
        }                                                                                                              //
                                                                                                                       //
        return topPosts;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 104
        function posts() {                                                                                             //
            if (!_meteor.Meteor.userId()) {                                                                            // 105
                return Posts.find({ "user.username": "admin", "super": 0, "top": false }, { sort: { time: -1 } });     // 106
            } else {                                                                                                   //
                return Posts.find({ "super": 0, "top": false }, { sort: { time: -1 } });                               // 108
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 111
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 112
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }(),                                                                                                               //
    getMediaBtn: function () {                                                                                         // 114
        function getMediaBtn() {                                                                                       //
            if (_meteor.Meteor.isCordova) {                                                                            // 115
                return true;                                                                                           // 116
            } else {                                                                                                   //
                return false;                                                                                          // 118
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return getMediaBtn;                                                                                            //
    }(),                                                                                                               //
    displayImage: function () {                                                                                        // 121
        function displayImage(id) {                                                                                    //
            return Images.find({ "_id": id });                                                                         // 122
        }                                                                                                              //
                                                                                                                       //
        return displayImage;                                                                                           //
    }(),                                                                                                               //
    displayAudio: function () {                                                                                        // 124
        function displayAudio(id) {                                                                                    //
            return Audios.find({ "_id": id });                                                                         // 125
        }                                                                                                              //
                                                                                                                       //
        return displayAudio;                                                                                           //
    }(),                                                                                                               //
    displayVideo: function () {                                                                                        // 127
        function displayVideo(id) {                                                                                    //
            return Videos.find({ "_id": id });                                                                         // 128
        }                                                                                                              //
                                                                                                                       //
        return displayVideo;                                                                                           //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.helpers({                                                                                               // 132
    lists: function () {                                                                                               // 133
        function lists() {                                                                                             //
            return UserInfo.find({}, { sort: { totalScore: -1 } });                                                    // 134
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 138
    self: function () {                                                                                                // 139
        function self() {                                                                                              //
            return UserInfo.find({ "user._id": _meteor.Meteor.userId() });                                             // 140
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 144
    friendRank: function () {                                                                                          // 145
        function friendRank() {                                                                                        //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 146
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } }, { limit: 10 });              // 147
        }                                                                                                              //
                                                                                                                       //
        return friendRank;                                                                                             //
    }(),                                                                                                               //
    friendToday: function () {                                                                                         // 149
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 150
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { todayScore: -1 } }, { limit: 10 });       // 151
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }(),                                                                                                               //
    friendTotal: function () {                                                                                         // 153
        function friendTotal() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 154
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { totalScore: -1 } }, { limit: 10 });       // 155
        }                                                                                                              //
                                                                                                                       //
        return friendTotal;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 159
    Backbone.history.start({ pushState: true });                                                                       // 160
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 163
    routes: {                                                                                                          // 164
        "": "index",                                                                                                   // 165
        "login": "login",                                                                                              // 166
        "reg": "reg",                                                                                                  // 167
        "logout": "logout",                                                                                            // 168
        "friend": "friend",                                                                                            // 169
        "lists": "lists",                                                                                              // 170
        "self": "self"                                                                                                 // 171
    },                                                                                                                 //
    index: function () {                                                                                               // 173
        function index() {                                                                                             // 173
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "" });       // 174
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 176
        function friend() {                                                                                            // 176
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "" });       // 177
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 179
        function lists() {                                                                                             // 179
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "" });       // 180
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 182
        function self() {                                                                                              // 182
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active" });       // 183
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    login: function () {                                                                                               // 185
        function login() {                                                                                             // 185
            if (_meteor.Meteor.userId()) {                                                                             // 186
                this.navigate("/", true);                                                                              // 187
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 188
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "" });       // 190
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 192
        function reg() {                                                                                               // 192
            if (_meteor.Meteor.userId()) {                                                                             // 193
                this.navigate("/", true);                                                                              // 194
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 195
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "" });       // 197
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 199
        function logout() {                                                                                            // 199
            if (_meteor.Meteor.userId()) {                                                                             // 200
                _meteor.Meteor.logout();                                                                               // 201
                this.navigate("/", true);                                                                              // 202
                Session.set("info", { success: "登出成功", error: "" });                                                   // 203
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 204
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 206
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 207
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 210
        function redirect(url) {                                                                                       // 210
            this.navigate(url, true);                                                                                  // 211
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 214
                                                                                                                       //
Template.reg.events({                                                                                                  // 216
    'click #submit': function () {                                                                                     // 217
        function clickSubmit(event) {                                                                                  // 217
            event.preventDefault();                                                                                    // 218
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 219
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 220
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 222
            var $password = $("#password").val();                                                                      // 223
            var $useremail = $("#useremail").val();                                                                    // 224
            var $password_repeat = $("#password-repeat").val();                                                        // 225
            if ($password.length === 0 || $username.length === 0) {                                                    // 226
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 227
                return;                                                                                                // 228
            }                                                                                                          //
            if ($password !== $password_repeat) {                                                                      // 230
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 231
                return;                                                                                                // 232
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 234
                username: $username,                                                                                   // 235
                password: $password,                                                                                   // 236
                email: $useremail }, function (err) {                                                                  // 237
                if (err) {                                                                                             // 239
                    Session.set("info", { success: "", error: "注册失败" });                                               // 240
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 242
                    UserInfo.insert({                                                                                  // 243
                        user: _meteor.Meteor.user(),                                                                   // 244
                        isAdmin: false,                                                                                // 245
                        totalScore: 0,                                                                                 // 246
                        todayScore: 0,                                                                                 // 247
                        totalFriend: 1,                                                                                // 248
                        Friends: [_meteor.Meteor.userId()],                                                            // 249
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 250
                        time: new Date()                                                                               // 251
                    });                                                                                                //
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                           // 256
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                          // 257
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 261
    'click #submit': function () {                                                                                     // 262
        function clickSubmit(event) {                                                                                  // 262
            event.preventDefault();                                                                                    // 263
            var $username = $("#username").val();                                                                      // 264
            var $password = $("#password").val();                                                                      // 265
            if ($password.length === 0 || $username.length === 0) {                                                    // 266
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 267
                return;                                                                                                // 268
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 270
                if (err) {                                                                                             // 271
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 272
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 274
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 275
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 276
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 277
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 278
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 288
    'click #submit': function () {                                                                                     // 289
        function clickSubmit(event) {                                                                                  // 289
            event.preventDefault();                                                                                    // 290
            var $post = $("#post").val();                                                                              // 291
            if ($post.length === 0 || $post.length >= 200) {                                                           // 292
                Session.set("info", { success: "", error: "请将字数限制在1-200字以内" });                                        // 293
                return;                                                                                                // 294
            }                                                                                                          //
            Posts.insert({                                                                                             // 296
                user: _meteor.Meteor.user(),                                                                           // 297
                post: $post,                                                                                           // 298
                "super": 0,                                                                                            // 299
                like: 0,                                                                                               // 300
                Likers: [],                                                                                            // 301
                top: false,                                                                                            // 302
                isGetImage: isGetImage,                                                                                // 303
                isGetAudio: isGetAudio,                                                                                // 304
                isGetVideo: isGetVideo,                                                                                // 305
                captureImageId: captureImageId,                                                                        // 306
                captureAudioId: captureAudioId,                                                                        // 307
                captureVideoId: captureVideoId,                                                                        // 308
                time: new Date() }, function (err) {                                                                   // 309
                if (err) {                                                                                             // 311
                    Session.set("info", { success: "", error: "发表失败" });                                               // 312
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 314
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 315
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 321
                }                                                                                                      //
            });                                                                                                        //
            isGetImage = false;                                                                                        // 325
            isGetAudio = false;                                                                                        // 326
            isGetVideo = false;                                                                                        // 327
            captureImageId = false;                                                                                    // 328
            captureAudioId = false;                                                                                    // 329
            captureVideoId = false;                                                                                    // 330
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 331
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 333
        function clickCommnetSubmit(event) {                                                                           // 333
            event.preventDefault();                                                                                    // 334
            var $comment = $("#" + this._id).val();                                                                    // 335
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 336
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 337
                scroll(0, 0);                                                                                          // 338
                return;                                                                                                // 339
            }                                                                                                          //
            Posts.insert({                                                                                             // 341
                user: _meteor.Meteor.user(),                                                                           // 342
                post: $comment,                                                                                        // 343
                "super": this._id,                                                                                     // 344
                time: new Date() }, function (err) {                                                                   // 345
                if (err) {                                                                                             // 347
                    Session.set("info", { success: "", error: "评论失败" });                                               // 348
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 350
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 351
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $("#" + this._id).val("");                                                                         // 357
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 361
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 363
        function clickAddFriend(event) {                                                                               // 363
            event.preventDefault();                                                                                    // 364
            var $friendId = this.user._id;                                                                             // 365
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 366
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 367
                scroll(0, 0);                                                                                          // 368
                return;                                                                                                // 369
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 372
            UserInfo.update({                                                                                          // 373
                "_id": userInfoId                                                                                      // 374
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 376
                $inc: { "totalFriend": 1 }                                                                             // 377
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 381
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 382
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 384
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 385
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 395
        function clickLikePost(event) {                                                                                // 395
            event.preventDefault();                                                                                    // 396
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 397
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 398
                scroll(0, 0);                                                                                          // 399
                return;                                                                                                // 400
            }                                                                                                          //
            Posts.update({                                                                                             // 402
                "_id": this._id                                                                                        // 403
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 405
                $inc: { "like": 1 }                                                                                    // 406
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 410
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 411
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 413
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 414
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 415
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 424
        function clickTopPost(event) {                                                                                 // 424
            event.preventDefault();                                                                                    // 425
            if (_meteor.Meteor.user().username != "admin") {                                                           // 426
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 427
                scroll(0, 0);                                                                                          // 428
                return;                                                                                                // 429
            }                                                                                                          //
            Posts.update({                                                                                             // 431
                "_id": this._id                                                                                        // 432
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 434
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 438
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 439
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 441
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 442
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 452
        function clickUntopPost(event) {                                                                               // 452
            event.preventDefault();                                                                                    // 453
            if (_meteor.Meteor.user().username != "admin") {                                                           // 454
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 455
                scroll(0, 0);                                                                                          // 456
                return;                                                                                                // 457
            }                                                                                                          //
            Posts.update({                                                                                             // 459
                "_id": this._id                                                                                        // 460
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 462
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 466
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 467
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 469
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 474
        function clickGetImage(event) {                                                                                // 474
            event.preventDefault();                                                                                    // 475
            navigator.device.capture.captureImage(captureImageSuccess, captureError, { limit: 1 });                    // 476
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 478
        function clickGetAudio(event) {                                                                                // 478
            event.preventDefault();                                                                                    // 479
            navigator.device.capture.captureAudio(captureAudioSuccess, captureError, { limit: 1 });                    // 480
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 482
        function clickGetVideo(event) {                                                                                // 482
            event.preventDefault();                                                                                    // 483
            navigator.device.capture.captureVideo(captureVideoSuccess, captureError, { limit: 1 });                    // 484
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