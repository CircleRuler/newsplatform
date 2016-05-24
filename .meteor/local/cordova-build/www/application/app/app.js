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
    }, "好友")), "\n                            ", HTML.LI({                                                             // 46
      "class": function() {                                                                                            // 47
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "collections"));                                // 48
      }                                                                                                                // 49
    }, HTML.A({                                                                                                        // 50
      href: "/collections"                                                                                             // 51
    }, "收藏")), "\n                            ", HTML.LI(HTML.A({                                                      // 52
      href: "/logout"                                                                                                  // 53
    }, "登出")), "\n                        " ];                                                                         // 54
  }, function() {                                                                                                      // 55
    return [ "\n                            ", HTML.LI({                                                               // 56
      "class": function() {                                                                                            // 57
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "login"));                                      // 58
      }                                                                                                                // 59
    }, HTML.A({                                                                                                        // 60
      href: "/login"                                                                                                   // 61
    }, "登入")), "\n                            ", HTML.LI({                                                             // 62
      "class": function() {                                                                                            // 63
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "reg"));                                        // 64
      }                                                                                                                // 65
    }, HTML.A({                                                                                                        // 66
      href: "/reg"                                                                                                     // 67
    }, "注册")), "\n                        " ];                                                                         // 68
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ");                   // 69
}));                                                                                                                   // 70
                                                                                                                       // 71
Template.__checkName("container");                                                                                     // 72
Template["container"] = new Template("Template.container", (function() {                                               // 73
  var view = this;                                                                                                     // 74
  return HTML.DIV({                                                                                                    // 75
    id: "container",                                                                                                   // 76
    "class": "container"                                                                                               // 77
  }, "\n        ", Spacebars.include(view.lookupTemplate("info")), "\n        ", Blaze.If(function() {                 // 78
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "index"));                                          // 79
  }, function() {                                                                                                      // 80
    return [ "\n            ", Spacebars.include(view.lookupTemplate("index")), "\n        " ];                        // 81
  }), "\n        ", Blaze.If(function() {                                                                              // 82
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "login"));                                          // 83
  }, function() {                                                                                                      // 84
    return [ "\n            ", Spacebars.include(view.lookupTemplate("login")), "\n        " ];                        // 85
  }), "\n        ", Blaze.If(function() {                                                                              // 86
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "reg"));                                            // 87
  }, function() {                                                                                                      // 88
    return [ "\n            ", Spacebars.include(view.lookupTemplate("reg")), "\n        " ];                          // 89
  }), "\n        ", Blaze.If(function() {                                                                              // 90
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "self"));                                           // 91
  }, function() {                                                                                                      // 92
    return [ "\n            ", Spacebars.include(view.lookupTemplate("self")), "\n        " ];                         // 93
  }), "\n        ", Blaze.If(function() {                                                                              // 94
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "friend"));                                         // 95
  }, function() {                                                                                                      // 96
    return [ "\n            ", Spacebars.include(view.lookupTemplate("friend")), "\n        " ];                       // 97
  }), "\n        ", Blaze.If(function() {                                                                              // 98
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "lists"));                                          // 99
  }, function() {                                                                                                      // 100
    return [ "\n            ", Spacebars.include(view.lookupTemplate("lists")), "\n        " ];                        // 101
  }), "\n        ", Blaze.If(function() {                                                                              // 102
    return Spacebars.call(Spacebars.dot(view.lookup("currentUrl"), "collections"));                                    // 103
  }, function() {                                                                                                      // 104
    return [ "\n            ", Spacebars.include(view.lookupTemplate("collections")), "\n        " ];                  // 105
  }), "\n    ");                                                                                                       // 106
}));                                                                                                                   // 107
                                                                                                                       // 108
Template.__checkName("footer");                                                                                        // 109
Template["footer"] = new Template("Template.footer", (function() {                                                     // 110
  var view = this;                                                                                                     // 111
  return HTML.Raw('<p class="muted text-center">Newsplatform 2016</p>');                                               // 112
}));                                                                                                                   // 113
                                                                                                                       // 114
Template.__checkName("info");                                                                                          // 115
Template["info"] = new Template("Template.info", (function() {                                                         // 116
  var view = this;                                                                                                     // 117
  return [ Blaze.If(function() {                                                                                       // 118
    return Spacebars.call(Spacebars.dot(view.lookup("info"), "success"));                                              // 119
  }, function() {                                                                                                      // 120
    return [ "\n        ", HTML.DIV({                                                                                  // 121
      "class": "alert alert-success"                                                                                   // 122
    }, Blaze.View("lookup:info.success", function() {                                                                  // 123
      return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "success"));                                        // 124
    })), "\n    " ];                                                                                                   // 125
  }), "\n    ", Blaze.If(function() {                                                                                  // 126
    return Spacebars.call(Spacebars.dot(view.lookup("info"), "error"));                                                // 127
  }, function() {                                                                                                      // 128
    return [ "\n        ", HTML.DIV({                                                                                  // 129
      "class": "alert alert-error"                                                                                     // 130
    }, Blaze.View("lookup:info.error", function() {                                                                    // 131
      return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "error"));                                          // 132
    })), "\n    " ];                                                                                                   // 133
  }) ];                                                                                                                // 134
}));                                                                                                                   // 135
                                                                                                                       // 136
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.collections.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("collections");                                                                                   // 2
Template["collections"] = new Template("Template.collections", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<h3 class="text-danger">您收藏的新闻</h3>\n    '), Blaze.Each(function() {                              // 5
    return Spacebars.call(view.lookup("collections"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", HTML.DIV({                                                                                  // 8
      "class": "center singlePost"                                                                                     // 9
    }, "\n            ", HTML.DIV({                                                                                    // 10
      "class": ""                                                                                                      // 11
    }, "\n                ", HTML.DIV({                                                                                // 12
      "class": "postTitle"                                                                                             // 13
    }, "\n                    ", HTML.H2({                                                                             // 14
      "class": "text-primary span10"                                                                                   // 15
    }, Blaze.View("lookup:user.username", function() {                                                                 // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 17
    }), " \n                    ", HTML.BUTTON({                                                                       // 18
      id: "addFriend",                                                                                                 // 19
      "class": "btn btn-info"                                                                                          // 20
    }, "加好友"), "\n                    ", HTML.BUTTON({                                                                 // 21
      id: "likePost",                                                                                                  // 22
      "class": "btn btn-warning"                                                                                       // 23
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 24
      return Spacebars.mustache(view.lookup("like"));                                                                  // 25
    }), ")"), "  :\n                    "), "\n                "), "\n            "), "\n            ", HTML.P({       // 26
      "class": "muted"                                                                                                 // 27
    }, Blaze.View("lookup:time", function() {                                                                          // 28
      return Spacebars.mustache(view.lookup("time"));                                                                  // 29
    })), "\n            ", HTML.P({                                                                                    // 30
      "class": ""                                                                                                      // 31
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 32
      return Blaze.View("lookup:post", function() {                                                                    // 33
        return Spacebars.mustache(view.lookup("post"));                                                                // 34
      });                                                                                                              // 35
    })), "\n            ", Blaze.If(function() {                                                                       // 36
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 37
    }, function() {                                                                                                    // 38
      return [ "\n            ", Blaze.Each(function() {                                                               // 39
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 41
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 42
          controls: "",                                                                                                // 43
          src: function() {                                                                                            // 44
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 45
          }                                                                                                            // 46
        })), "\n            " ];                                                                                       // 47
      }), "\n            " ];                                                                                          // 48
    }), "\n            ", Blaze.If(function() {                                                                        // 49
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 50
    }, function() {                                                                                                    // 51
      return [ "\n            ", Blaze.Each(function() {                                                               // 52
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 54
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 55
          src: function() {                                                                                            // 56
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 57
          },                                                                                                           // 58
          alt: "",                                                                                                     // 59
          "class": "thumbnail"                                                                                         // 60
        })), "\n            " ];                                                                                       // 61
      }), "\n            " ];                                                                                          // 62
    }), "\n            ", Blaze.If(function() {                                                                        // 63
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 64
    }, function() {                                                                                                    // 65
      return [ "\n            ", Blaze.Each(function() {                                                               // 66
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 68
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 69
          src: function() {                                                                                            // 70
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 71
          }                                                                                                            // 72
        })), "\n            " ];                                                                                       // 73
      }), "\n            " ];                                                                                          // 74
    }), "\n            ", Blaze.If(function() {                                                                        // 75
      return Spacebars.call(view.lookup("currentUser"));                                                               // 76
    }, function() {                                                                                                    // 77
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 78
        type: "text",                                                                                                  // 79
        "class": "span8",                                                                                              // 80
        id: function() {                                                                                               // 81
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 82
        }                                                                                                              // 83
      }), "\n                    ", HTML.BUTTON({                                                                      // 84
        id: "commnetSubmit",                                                                                           // 85
        "class": "btn btn-success"                                                                                     // 86
      }, "评论"), "\n                "), "\n            " ];                                                             // 87
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 88
      return Spacebars.call(view.lookup("comments"));                                                                  // 89
    }, function() {                                                                                                    // 90
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 91
        "class": "postTitle"                                                                                           // 92
      }, Blaze.View("lookup:user.username", function() {                                                               // 93
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 94
      }), " ", Blaze.If(function() {                                                                                   // 95
        return Spacebars.call(view.lookup("to"));                                                                      // 96
      }, function() {                                                                                                  // 97
        return HTML.SPAN({                                                                                             // 98
          style: "color:black;"                                                                                        // 99
        }, "回复");                                                                                                      // 100
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 101
        return Spacebars.mustache(view.lookup("to"));                                                                  // 102
      })), " :", HTML.BUTTON({                                                                                         // 103
        id: "displayCommnetButton",                                                                                    // 104
        type: "button",                                                                                                // 105
        "class": "btn btn-link"                                                                                        // 106
      }, Blaze.View("lookup:post", function() {                                                                        // 107
        return Spacebars.mustache(view.lookup("post"));                                                                // 108
      }))), "\n                ", HTML.P({                                                                             // 109
        style: "display:none;",                                                                                        // 110
        id: function() {                                                                                               // 111
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 112
        },                                                                                                             // 113
        "class": "commnetP"                                                                                            // 114
      }, "\n                ", Blaze.If(function() {                                                                   // 115
        return Spacebars.call(view.lookup("currentUser"));                                                             // 116
      }, function() {                                                                                                  // 117
        return [ "\n                    ", HTML.INPUT({                                                                // 118
          type: "text",                                                                                                // 119
          "class": "span8",                                                                                            // 120
          id: function() {                                                                                             // 121
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 122
          }                                                                                                            // 123
        }), "\n                    ", HTML.BUTTON({                                                                    // 124
          id: "commnetSubmitToCommnet",                                                                                // 125
          "class": "btn btn-success"                                                                                   // 126
        }, "评论"), "\n                " ];                                                                              // 127
      }), "\n                "), "\n            " ];                                                                   // 128
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 129
  }) ];                                                                                                                // 130
}));                                                                                                                   // 131
                                                                                                                       // 132
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
    }, "发布新闻"), "\n                ", HTML.TEXTAREA({                                                                  // 16
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
    }, "nbsp"), "\n            ", Blaze.If(function() {                                                                // 28
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
    }), "\n                    ", Blaze.If(function() {                                                                // 59
      return Spacebars.call(view.lookup("currentUser"));                                                               // 60
    }, function() {                                                                                                    // 61
      return [ "\n                    ", HTML.BUTTON({                                                                 // 62
        id: "addFriend",                                                                                               // 63
        "class": "btn btn-info"                                                                                        // 64
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 65
        id: "addCollection",                                                                                           // 66
        "class": "btn btn-primary"                                                                                     // 67
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 68
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 69
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 70
        id: "likePost",                                                                                                // 71
        "class": "btn btn-warning"                                                                                     // 72
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 73
        return Spacebars.mustache(view.lookup("like"));                                                                // 74
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 75
        id: "untopPost",                                                                                               // 76
        "class": "btn btn-danger"                                                                                      // 77
      }, "取消置顶 "), " \n                    " ];                                                                        // 78
    }), "   :\n                    "), "\n                "), "\n                ", HTML.DIV({                         // 79
      "class": "col-xs-3 "                                                                                             // 80
    }), "\n            "), "\n            ", HTML.P({                                                                  // 81
      "class": "muted"                                                                                                 // 82
    }, Blaze.View("lookup:time", function() {                                                                          // 83
      return Spacebars.mustache(view.lookup("time"));                                                                  // 84
    })), "\n            ", HTML.P({                                                                                    // 85
      "class": ""                                                                                                      // 86
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 87
      return Blaze.View("lookup:post", function() {                                                                    // 88
        return Spacebars.mustache(view.lookup("post"));                                                                // 89
      });                                                                                                              // 90
    })), "\n            ", Blaze.If(function() {                                                                       // 91
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 92
    }, function() {                                                                                                    // 93
      return [ "\n            ", Blaze.Each(function() {                                                               // 94
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 96
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 97
          controls: "",                                                                                                // 98
          src: function() {                                                                                            // 99
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 100
          }                                                                                                            // 101
        })), "\n            " ];                                                                                       // 102
      }), "\n            " ];                                                                                          // 103
    }), "\n            ", Blaze.If(function() {                                                                        // 104
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 105
    }, function() {                                                                                                    // 106
      return [ "\n            ", Blaze.Each(function() {                                                               // 107
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 109
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 110
          src: function() {                                                                                            // 111
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 112
          },                                                                                                           // 113
          alt: "",                                                                                                     // 114
          "class": "thumbnail"                                                                                         // 115
        })), "\n            " ];                                                                                       // 116
      }), "\n            " ];                                                                                          // 117
    }), "\n            ", Blaze.If(function() {                                                                        // 118
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 119
    }, function() {                                                                                                    // 120
      return [ "\n            ", Blaze.Each(function() {                                                               // 121
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 123
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 124
          src: function() {                                                                                            // 125
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 126
          }                                                                                                            // 127
        })), "\n            " ];                                                                                       // 128
      }), "\n            " ];                                                                                          // 129
    }), "\n            ", Blaze.If(function() {                                                                        // 130
      return Spacebars.call(view.lookup("currentUser"));                                                               // 131
    }, function() {                                                                                                    // 132
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 133
        type: "text",                                                                                                  // 134
        "class": "span8",                                                                                              // 135
        id: function() {                                                                                               // 136
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 137
        }                                                                                                              // 138
      }), "\n                    ", HTML.BUTTON({                                                                      // 139
        id: "commnetSubmit",                                                                                           // 140
        "class": "btn btn-success"                                                                                     // 141
      }, "评论"), "\n                "), "\n            " ];                                                             // 142
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 143
      return Spacebars.call(view.lookup("comments"));                                                                  // 144
    }, function() {                                                                                                    // 145
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 146
        "class": "postTitle"                                                                                           // 147
      }, Blaze.View("lookup:user.username", function() {                                                               // 148
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 149
      }), " ", Blaze.If(function() {                                                                                   // 150
        return Spacebars.call(view.lookup("to"));                                                                      // 151
      }, function() {                                                                                                  // 152
        return HTML.SPAN({                                                                                             // 153
          style: "color:black;"                                                                                        // 154
        }, "回复");                                                                                                      // 155
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 156
        return Spacebars.mustache(view.lookup("to"));                                                                  // 157
      })), " : ", HTML.BUTTON({                                                                                        // 158
        id: "displayCommnetButton",                                                                                    // 159
        type: "button",                                                                                                // 160
        "class": "btn btn-link"                                                                                        // 161
      }, Blaze.View("lookup:post", function() {                                                                        // 162
        return Spacebars.mustache(view.lookup("post"));                                                                // 163
      }))), "\n                ", HTML.P({                                                                             // 164
        style: "display:none;",                                                                                        // 165
        id: function() {                                                                                               // 166
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 167
        },                                                                                                             // 168
        "class": "commnetP"                                                                                            // 169
      }, "\n                ", Blaze.If(function() {                                                                   // 170
        return Spacebars.call(view.lookup("currentUser"));                                                             // 171
      }, function() {                                                                                                  // 172
        return [ "\n                    ", HTML.INPUT({                                                                // 173
          type: "text",                                                                                                // 174
          "class": "span8",                                                                                            // 175
          id: function() {                                                                                             // 176
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 177
          }                                                                                                            // 178
        }), "\n                    ", HTML.BUTTON({                                                                    // 179
          id: "commnetSubmitToCommnet",                                                                                // 180
          "class": "btn btn-success"                                                                                   // 181
        }, "评论"), "\n                " ];                                                                              // 182
      }), "\n                "), "\n            " ];                                                                   // 183
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 184
  }), "\n\n    ", Blaze.Each(function() {                                                                              // 185
    return Spacebars.call(view.lookup("posts"));                                                                       // 186
  }, function() {                                                                                                      // 187
    return [ "\n        ", HTML.DIV({                                                                                  // 188
      "class": "center singlePost"                                                                                     // 189
    }, "\n            ", HTML.DIV({                                                                                    // 190
      "class": ""                                                                                                      // 191
    }, "\n                ", HTML.DIV({                                                                                // 192
      "class": "postTitle"                                                                                             // 193
    }, "\n                    ", HTML.H2({                                                                             // 194
      "class": "text-primary span10"                                                                                   // 195
    }, Blaze.View("lookup:user.username", function() {                                                                 // 196
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 197
    }), "\n                    ", Blaze.If(function() {                                                                // 198
      return Spacebars.call(view.lookup("currentUser"));                                                               // 199
    }, function() {                                                                                                    // 200
      return [ "\n                    ", HTML.BUTTON({                                                                 // 201
        id: "addFriend",                                                                                               // 202
        "class": "btn btn-info"                                                                                        // 203
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 204
        id: "addCollection",                                                                                           // 205
        "class": "btn btn-primary"                                                                                     // 206
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 207
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 208
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 209
        id: "likePost",                                                                                                // 210
        "class": "btn btn-warning"                                                                                     // 211
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 212
        return Spacebars.mustache(view.lookup("like"));                                                                // 213
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 214
        id: "topPost",                                                                                                 // 215
        "class": "btn btn-danger"                                                                                      // 216
      }, "置顶 "), "\n                    " ];                                                                           // 217
    }), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                        // 218
      "class": "col-xs-3 "                                                                                             // 219
    }), "\n            "), "\n            ", HTML.P({                                                                  // 220
      "class": "muted"                                                                                                 // 221
    }, Blaze.View("lookup:time", function() {                                                                          // 222
      return Spacebars.mustache(view.lookup("time"));                                                                  // 223
    })), "\n            ", HTML.P({                                                                                    // 224
      "class": ""                                                                                                      // 225
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 226
      return Blaze.View("lookup:post", function() {                                                                    // 227
        return Spacebars.mustache(view.lookup("post"));                                                                // 228
      });                                                                                                              // 229
    })), "\n            ", Blaze.If(function() {                                                                       // 230
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 231
    }, function() {                                                                                                    // 232
      return [ "\n            ", Blaze.Each(function() {                                                               // 233
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 235
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 236
          controls: "",                                                                                                // 237
          src: function() {                                                                                            // 238
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 239
          }                                                                                                            // 240
        })), "\n            " ];                                                                                       // 241
      }), "\n            " ];                                                                                          // 242
    }), "\n            ", Blaze.If(function() {                                                                        // 243
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 244
    }, function() {                                                                                                    // 245
      return [ "\n            ", Blaze.Each(function() {                                                               // 246
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 248
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 249
          src: function() {                                                                                            // 250
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 251
          },                                                                                                           // 252
          alt: "",                                                                                                     // 253
          "class": "thumbnail"                                                                                         // 254
        })), "\n            " ];                                                                                       // 255
      }), "\n            " ];                                                                                          // 256
    }), "\n            ", Blaze.If(function() {                                                                        // 257
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 258
    }, function() {                                                                                                    // 259
      return [ "\n            ", Blaze.Each(function() {                                                               // 260
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 262
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 263
          src: function() {                                                                                            // 264
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 265
          }                                                                                                            // 266
        })), "\n            " ];                                                                                       // 267
      }), "\n            " ];                                                                                          // 268
    }), "\n            ", Blaze.If(function() {                                                                        // 269
      return Spacebars.call(view.lookup("currentUser"));                                                               // 270
    }, function() {                                                                                                    // 271
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 272
        type: "text",                                                                                                  // 273
        "class": "span8",                                                                                              // 274
        id: function() {                                                                                               // 275
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 276
        }                                                                                                              // 277
      }), "\n                    ", HTML.BUTTON({                                                                      // 278
        id: "commnetSubmit",                                                                                           // 279
        "class": "btn btn-success"                                                                                     // 280
      }, "评论"), "\n                "), "\n            " ];                                                             // 281
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 282
      return Spacebars.call(view.lookup("comments"));                                                                  // 283
    }, function() {                                                                                                    // 284
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 285
        "class": "postTitle"                                                                                           // 286
      }, Blaze.View("lookup:user.username", function() {                                                               // 287
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 288
      }), " ", Blaze.If(function() {                                                                                   // 289
        return Spacebars.call(view.lookup("to"));                                                                      // 290
      }, function() {                                                                                                  // 291
        return HTML.SPAN({                                                                                             // 292
          style: "color:black;"                                                                                        // 293
        }, "回复");                                                                                                      // 294
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 295
        return Spacebars.mustache(view.lookup("to"));                                                                  // 296
      })), " :", HTML.BUTTON({                                                                                         // 297
        id: "displayCommnetButton",                                                                                    // 298
        type: "button",                                                                                                // 299
        "class": "btn btn-link"                                                                                        // 300
      }, Blaze.View("lookup:post", function() {                                                                        // 301
        return Spacebars.mustache(view.lookup("post"));                                                                // 302
      }))), "\n                ", HTML.P({                                                                             // 303
        style: "display:none;",                                                                                        // 304
        id: function() {                                                                                               // 305
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 306
        },                                                                                                             // 307
        "class": "commnetP"                                                                                            // 308
      }, "\n                ", Blaze.If(function() {                                                                   // 309
        return Spacebars.call(view.lookup("currentUser"));                                                             // 310
      }, function() {                                                                                                  // 311
        return [ "\n                    ", HTML.INPUT({                                                                // 312
          type: "text",                                                                                                // 313
          "class": "span8",                                                                                            // 314
          id: function() {                                                                                             // 315
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 316
          }                                                                                                            // 317
        }), "\n                    ", HTML.BUTTON({                                                                    // 318
          id: "commnetSubmitToCommnet",                                                                                // 319
          "class": "btn btn-success"                                                                                   // 320
        }, "评论"), "\n                " ];                                                                              // 321
      }), "\n                "), "\n            " ];                                                                   // 322
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 323
  }) ];                                                                                                                // 324
}));                                                                                                                   // 325
                                                                                                                       // 326
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
  }, "\n        ", HTML.FIELDSET("\n            ", HTML.getTag("lengend")("用户注册"), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="username" class="control-label">用户名</label>\n                <div class="controls">\n                    <input type="text" id="username" class="input-xlarge" name="username" required="" autocomplete="false">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="password" class="control-label">密码</label>\n                <div class="controls">\n                    <input type="password" class="input-xlarge" id="password" name="password" required="">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="control-group">\n                <label for="password-repeat" class="control-label">重复输入密码</label>\n                <div class="controls">\n                    <input type="password" name="password-repeat" class="input-xlarge" id="password-repeat" required="">\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="form-actions">\n                <button id="submit" class="btn btn-primary">注册</button>\n            </div>'), "\n        "), "\n    ");
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
  return [ Blaze.Each(function() {                                                                                     // 5
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
      "class": "dl-horizontal well"                                                                                    // 19
    }, "\n            ", HTML.DT("用户名"), HTML.DD(Blaze.View("lookup:user.username", function() {                       // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 21
    })), "\n            ", HTML.DT("总积分"), HTML.DD(Blaze.View("lookup:totalScore", function() {                        // 22
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 23
    })), "\n            ", HTML.DT("今日积分"), HTML.DD(Blaze.View("lookup:todayScore", function() {                       // 24
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 25
    })), "\n            ", HTML.DT("好友总数"), HTML.DD(Blaze.View("lookup:totalFriend", function() {                      // 26
      return Spacebars.mustache(view.lookup("totalFriend"));                                                           // 27
    })), "\n            ", HTML.DT("排名"), HTML.DD(Blaze.View("lookup:rank", function() {                               // 28
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 29
    })), "\n            ", HTML.DT("注册时间"), HTML.DD(Blaze.View("lookup:time", function() {                             // 30
      return Spacebars.mustache(view.lookup("time"));                                                                  // 31
    })), "\n        "), "\n    " ];                                                                                    // 32
  }), HTML.Raw('\n    <h3 class="text-danger">您发布过的新闻</h3>\n    '), Blaze.Each(function() {                            // 33
    return Spacebars.call(view.lookup("posts"));                                                                       // 34
  }, function() {                                                                                                      // 35
    return [ "\n        ", HTML.DIV({                                                                                  // 36
      "class": "center singlePost"                                                                                     // 37
    }, "\n            ", HTML.DIV({                                                                                    // 38
      "class": ""                                                                                                      // 39
    }, "\n                ", HTML.DIV({                                                                                // 40
      "class": "postTitle"                                                                                             // 41
    }, "\n                    ", HTML.H2({                                                                             // 42
      "class": "text-primary span10"                                                                                   // 43
    }, Blaze.View("lookup:user.username", function() {                                                                 // 44
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 45
    }), "\n                    ", HTML.BUTTON({                                                                        // 46
      id: "addCollection",                                                                                             // 47
      "class": "btn btn-primary"                                                                                       // 48
    }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                        // 49
      return Spacebars.mustache(view.lookup("totalCollection"));                                                       // 50
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 51
      id: "likePost",                                                                                                  // 52
      "class": "btn btn-warning"                                                                                       // 53
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 54
      return Spacebars.mustache(view.lookup("like"));                                                                  // 55
    }), ")"), "\n                    "), "\n                "), "\n                ", HTML.DIV({                       // 56
      "class": "col-xs-3 "                                                                                             // 57
    }), "\n            "), "\n            ", HTML.P({                                                                  // 58
      "class": "muted"                                                                                                 // 59
    }, Blaze.View("lookup:time", function() {                                                                          // 60
      return Spacebars.mustache(view.lookup("time"));                                                                  // 61
    })), "\n            ", HTML.P({                                                                                    // 62
      "class": ""                                                                                                      // 63
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 64
      return Blaze.View("lookup:post", function() {                                                                    // 65
        return Spacebars.mustache(view.lookup("post"));                                                                // 66
      });                                                                                                              // 67
    })), "\n            ", Blaze.If(function() {                                                                       // 68
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 69
    }, function() {                                                                                                    // 70
      return [ "\n            ", Blaze.Each(function() {                                                               // 71
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 73
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 74
          controls: "",                                                                                                // 75
          src: function() {                                                                                            // 76
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 77
          }                                                                                                            // 78
        })), "\n            " ];                                                                                       // 79
      }), "\n            " ];                                                                                          // 80
    }), "\n            ", Blaze.If(function() {                                                                        // 81
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 82
    }, function() {                                                                                                    // 83
      return [ "\n            ", Blaze.Each(function() {                                                               // 84
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 86
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 87
          src: function() {                                                                                            // 88
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 89
          },                                                                                                           // 90
          alt: "",                                                                                                     // 91
          "class": "thumbnail"                                                                                         // 92
        })), "\n            " ];                                                                                       // 93
      }), "\n            " ];                                                                                          // 94
    }), "\n            ", Blaze.If(function() {                                                                        // 95
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 96
    }, function() {                                                                                                    // 97
      return [ "\n            ", Blaze.Each(function() {                                                               // 98
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 100
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 101
          src: function() {                                                                                            // 102
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 103
          }                                                                                                            // 104
        })), "\n            " ];                                                                                       // 105
      }), "\n            " ];                                                                                          // 106
    }), "\n            ", Blaze.If(function() {                                                                        // 107
      return Spacebars.call(view.lookup("currentUser"));                                                               // 108
    }, function() {                                                                                                    // 109
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 110
        type: "text",                                                                                                  // 111
        "class": "span8",                                                                                              // 112
        id: function() {                                                                                               // 113
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 114
        }                                                                                                              // 115
      }), "\n                    ", HTML.BUTTON({                                                                      // 116
        id: "commnetSubmit",                                                                                           // 117
        "class": "btn btn-success"                                                                                     // 118
      }, "评论"), "\n                "), "\n            " ];                                                             // 119
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 120
      return Spacebars.call(view.lookup("comments"));                                                                  // 121
    }, function() {                                                                                                    // 122
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 123
        "class": "postTitle"                                                                                           // 124
      }, Blaze.View("lookup:user.username", function() {                                                               // 125
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 126
      }), " ", Blaze.If(function() {                                                                                   // 127
        return Spacebars.call(view.lookup("to"));                                                                      // 128
      }, function() {                                                                                                  // 129
        return HTML.SPAN({                                                                                             // 130
          style: "color:black;"                                                                                        // 131
        }, "回复");                                                                                                      // 132
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 133
        return Spacebars.mustache(view.lookup("to"));                                                                  // 134
      })), " :", HTML.BUTTON({                                                                                         // 135
        id: "displayCommnetButton",                                                                                    // 136
        type: "button",                                                                                                // 137
        "class": "btn btn-link"                                                                                        // 138
      }, Blaze.View("lookup:post", function() {                                                                        // 139
        return Spacebars.mustache(view.lookup("post"));                                                                // 140
      }))), "\n                ", HTML.P({                                                                             // 141
        style: "display:none;",                                                                                        // 142
        id: function() {                                                                                               // 143
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 144
        },                                                                                                             // 145
        "class": "commnetP"                                                                                            // 146
      }, "\n                ", Blaze.If(function() {                                                                   // 147
        return Spacebars.call(view.lookup("currentUser"));                                                             // 148
      }, function() {                                                                                                  // 149
        return [ "\n                    ", HTML.INPUT({                                                                // 150
          type: "text",                                                                                                // 151
          "class": "span8",                                                                                            // 152
          id: function() {                                                                                             // 153
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 154
          }                                                                                                            // 155
        }), "\n                    ", HTML.BUTTON({                                                                    // 156
          id: "commnetSubmitToCommnet",                                                                                // 157
          "class": "btn btn-success"                                                                                   // 158
        }, "评论"), "\n                " ];                                                                              // 159
      }), "\n                "), "\n            " ];                                                                   // 160
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 161
  }) ];                                                                                                                // 162
}));                                                                                                                   // 163
                                                                                                                       // 164
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
Session.setDefault("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "", collections: "" });
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
    }(),                                                                                                               //
    posts: function () {                                                                                               // 142
        function posts() {                                                                                             //
            return Posts.find({ "super": 0, "user._id": _meteor.Meteor.userId() }, { sort: { time: -1 } });            // 143
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.helpers({                                                                                         // 147
    collections: function () {                                                                                         // 148
        function collections() {                                                                                       //
            return Posts.find({ "super": 0, "collectioners": _meteor.Meteor.userId() }, { sort: { time: -1 } });       // 149
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 153
    friendRank: function () {                                                                                          // 154
        function friendRank() {                                                                                        //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 155
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { rank: 1 } }, { limit: 10 });              // 156
        }                                                                                                              //
                                                                                                                       //
        return friendRank;                                                                                             //
    }(),                                                                                                               //
    friendToday: function () {                                                                                         // 158
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 159
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { todayScore: -1 } }, { limit: 10 });       // 160
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }(),                                                                                                               //
    friendTotal: function () {                                                                                         // 162
        function friendTotal() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 163
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { totalScore: -1 } }, { limit: 10 });       // 164
        }                                                                                                              //
                                                                                                                       //
        return friendTotal;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 168
    Backbone.history.start({ pushState: true });                                                                       // 169
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 172
    routes: {                                                                                                          // 173
        "": "index",                                                                                                   // 174
        "login": "login",                                                                                              // 175
        "reg": "reg",                                                                                                  // 176
        "logout": "logout",                                                                                            // 177
        "friend": "friend",                                                                                            // 178
        "lists": "lists",                                                                                              // 179
        "self": "self",                                                                                                // 180
        "collections": "collections"                                                                                   // 181
    },                                                                                                                 //
    index: function () {                                                                                               // 183
        function index() {                                                                                             // 183
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 186
        function friend() {                                                                                            // 186
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 189
        function lists() {                                                                                             // 189
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 192
        function self() {                                                                                              // 192
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    collections: function () {                                                                                         // 195
        function collections() {                                                                                       // 195
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "", collections: "active" });
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }(),                                                                                                               //
    login: function () {                                                                                               // 198
        function login() {                                                                                             // 198
            if (_meteor.Meteor.userId()) {                                                                             // 199
                this.navigate("/", true);                                                                              // 200
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 201
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 205
        function reg() {                                                                                               // 205
            if (_meteor.Meteor.userId()) {                                                                             // 206
                this.navigate("/", true);                                                                              // 207
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 208
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 212
        function logout() {                                                                                            // 212
            if (_meteor.Meteor.userId()) {                                                                             // 213
                _meteor.Meteor.logout();                                                                               // 214
                this.navigate("/", true);                                                                              // 215
                Session.set("info", { success: "登出成功", error: "" });                                                   // 216
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 217
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 219
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 220
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 223
        function redirect(url) {                                                                                       // 223
            this.navigate(url, true);                                                                                  // 224
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 227
                                                                                                                       //
Template.reg.events({                                                                                                  // 229
    'click #submit': function () {                                                                                     // 230
        function clickSubmit(event) {                                                                                  // 230
            event.preventDefault();                                                                                    // 231
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 232
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 233
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 235
            var $password = $("#password").val();                                                                      // 236
            var $password_repeat = $("#password-repeat").val();                                                        // 237
            var isAdmin = false;                                                                                       // 238
            if ($username == "admin") {                                                                                // 239
                isAdmin = true;                                                                                        // 240
            }                                                                                                          //
            if ($password.length === 0 || $username.length === 0) {                                                    // 242
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 243
                return;                                                                                                // 244
            }                                                                                                          //
            if ($password !== $password_repeat) {                                                                      // 246
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 247
                return;                                                                                                // 248
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 250
                username: $username,                                                                                   // 251
                password: $password }, function (err) {                                                                // 252
                if (err) {                                                                                             // 254
                    Session.set("info", { success: "", error: "注册失败" });                                               // 255
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 257
                    UserInfo.insert({                                                                                  // 258
                        user: _meteor.Meteor.user(),                                                                   // 259
                        isAdmin: isAdmin,                                                                              // 260
                        collections: [],                                                                               // 261
                        totalCollection: 0,                                                                            // 262
                        totalScore: 0,                                                                                 // 263
                        todayScore: 0,                                                                                 // 264
                        totalFriend: 1,                                                                                // 265
                        Friends: [_meteor.Meteor.userId()],                                                            // 266
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 267
                        time: new Date()                                                                               // 268
                    });                                                                                                //
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                           // 273
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                          // 274
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 278
    'click #submit': function () {                                                                                     // 279
        function clickSubmit(event) {                                                                                  // 279
            event.preventDefault();                                                                                    // 280
            var $username = $("#username").val();                                                                      // 281
            var $password = $("#password").val();                                                                      // 282
            if ($password.length === 0 || $username.length === 0) {                                                    // 283
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 284
                return;                                                                                                // 285
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 287
                if (err) {                                                                                             // 288
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 289
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 291
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 292
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 293
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 294
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 295
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 305
    'click #submit': function () {                                                                                     // 306
        function clickSubmit(event) {                                                                                  // 306
            event.preventDefault();                                                                                    // 307
            var $post = $("#post").val();                                                                              // 308
            if ($post.length === 0 || $post.length >= 300) {                                                           // 309
                Session.set("info", { success: "", error: "请将字数限制在1-300字以内" });                                        // 310
                return;                                                                                                // 311
            }                                                                                                          //
            Posts.insert({                                                                                             // 313
                user: _meteor.Meteor.user(),                                                                           // 314
                post: $post,                                                                                           // 315
                "super": 0,                                                                                            // 316
                to: false,                                                                                             // 317
                like: 0,                                                                                               // 318
                Likers: [],                                                                                            // 319
                totalCollection: 0,                                                                                    // 320
                collectioners: [],                                                                                     // 321
                top: false,                                                                                            // 322
                isGetImage: isGetImage,                                                                                // 323
                isGetAudio: isGetAudio,                                                                                // 324
                isGetVideo: isGetVideo,                                                                                // 325
                captureImageId: captureImageId,                                                                        // 326
                captureAudioId: captureAudioId,                                                                        // 327
                captureVideoId: captureVideoId,                                                                        // 328
                time: new Date() }, function (err) {                                                                   // 329
                if (err) {                                                                                             // 331
                    Session.set("info", { success: "", error: "发表失败" });                                               // 332
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 334
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 335
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 341
                }                                                                                                      //
            });                                                                                                        //
            isGetImage = false;                                                                                        // 345
            isGetAudio = false;                                                                                        // 346
            isGetVideo = false;                                                                                        // 347
            captureImageId = false;                                                                                    // 348
            captureAudioId = false;                                                                                    // 349
            captureVideoId = false;                                                                                    // 350
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 351
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 353
        function clickCommnetSubmit(event) {                                                                           // 353
            event.preventDefault();                                                                                    // 354
            var thisId = "#" + this._id;                                                                               // 355
            var $comment = $("#" + this._id).val();                                                                    // 356
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 357
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 358
                scroll(0, 0);                                                                                          // 359
                return;                                                                                                // 360
            }                                                                                                          //
            Posts.insert({                                                                                             // 362
                user: _meteor.Meteor.user(),                                                                           // 363
                post: $comment,                                                                                        // 364
                "super": this._id,                                                                                     // 365
                to: false,                                                                                             // 366
                time: new Date() }, function (err) {                                                                   // 367
                if (err) {                                                                                             // 369
                    Session.set("info", { success: "", error: "评论失败" });                                               // 370
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 372
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 373
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 379
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 383
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 385
        function clickCommnetSubmitToCommnet(event) {                                                                  // 385
            event.preventDefault();                                                                                    // 386
            var thisId = "#" + this._id;                                                                               // 387
            var $commentTo = $("#" + this._id).val();                                                                  // 388
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 389
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 390
                scroll(0, 0);                                                                                          // 391
                return;                                                                                                // 392
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 394
            Posts.insert({                                                                                             // 395
                user: _meteor.Meteor.user(),                                                                           // 396
                post: $commentTo,                                                                                      // 397
                "super": this["super"],                                                                                // 398
                to: userName,                                                                                          // 399
                time: new Date() }, function (err) {                                                                   // 400
                if (err) {                                                                                             // 402
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 403
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 405
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 406
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 412
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 416
            $(".commnetP").css("display", "none");                                                                     // 417
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 419
        function clickDisplayCommnetButton(event) {                                                                    // 419
            event.preventDefault();                                                                                    // 420
            var thisId = "#" + "p" + this._id;                                                                         // 421
            $(".commnetP").css("display", "none");                                                                     // 422
            $(thisId).css("display", "block");                                                                         // 423
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 425
        function clickAddFriend(event) {                                                                               // 425
            event.preventDefault();                                                                                    // 426
            var $friendId = this.user._id;                                                                             // 427
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 428
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 429
                scroll(0, 0);                                                                                          // 430
                return;                                                                                                // 431
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 434
            UserInfo.update({                                                                                          // 435
                "_id": userInfoId                                                                                      // 436
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 438
                $inc: { "totalFriend": 1 }                                                                             // 439
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 443
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 444
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 446
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 447
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 457
        function clickAddCollection(event) {                                                                           // 457
            event.preventDefault();                                                                                    // 458
            var $PostId = this._id;                                                                                    // 459
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 460
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 461
                scroll(0, 0);                                                                                          // 462
                return;                                                                                                // 463
            }                                                                                                          //
            Posts.update({                                                                                             // 465
                "_id": this._id                                                                                        // 466
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 468
                $inc: { "totalCollection": 1 }                                                                         // 469
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 473
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 474
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 476
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 477
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 478
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 488
        function clickLikePost(event) {                                                                                // 488
            event.preventDefault();                                                                                    // 489
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 490
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 491
                scroll(0, 0);                                                                                          // 492
                return;                                                                                                // 493
            }                                                                                                          //
            Posts.update({                                                                                             // 495
                "_id": this._id                                                                                        // 496
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 498
                $inc: { "like": 1 }                                                                                    // 499
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 503
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 504
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 506
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 507
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 508
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 517
        function clickTopPost(event) {                                                                                 // 517
            event.preventDefault();                                                                                    // 518
            if (_meteor.Meteor.user().username != "admin") {                                                           // 519
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 520
                scroll(0, 0);                                                                                          // 521
                return;                                                                                                // 522
            }                                                                                                          //
            Posts.update({                                                                                             // 524
                "_id": this._id                                                                                        // 525
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 527
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 531
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 532
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 534
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 535
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 545
        function clickUntopPost(event) {                                                                               // 545
            event.preventDefault();                                                                                    // 546
            if (_meteor.Meteor.user().username != "admin") {                                                           // 547
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 548
                scroll(0, 0);                                                                                          // 549
                return;                                                                                                // 550
            }                                                                                                          //
            Posts.update({                                                                                             // 552
                "_id": this._id                                                                                        // 553
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 555
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 559
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 560
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 562
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 567
        function clickGetImage(event) {                                                                                // 567
            event.preventDefault();                                                                                    // 568
            navigator.device.capture.captureImage(captureImageSuccess, captureError, { limit: 1 });                    // 569
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 571
        function clickGetAudio(event) {                                                                                // 571
            event.preventDefault();                                                                                    // 572
            navigator.device.capture.captureAudio(captureAudioSuccess, captureError, { limit: 1 });                    // 573
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 575
        function clickGetVideo(event) {                                                                                // 575
            event.preventDefault();                                                                                    // 576
            navigator.device.capture.captureVideo(captureVideoSuccess, captureError, { limit: 1 });                    // 577
        }                                                                                                              //
                                                                                                                       //
        return clickGetVideo;                                                                                          //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.events({                                                                                          // 581
    'click #addFriend': function () {                                                                                  // 582
        function clickAddFriend(event) {                                                                               // 582
            event.preventDefault();                                                                                    // 583
            var $friendId = this.user._id;                                                                             // 584
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 585
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 586
                scroll(0, 0);                                                                                          // 587
                return;                                                                                                // 588
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 591
            UserInfo.update({                                                                                          // 592
                "_id": userInfoId                                                                                      // 593
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 595
                $inc: { "totalFriend": 1 }                                                                             // 596
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 600
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 601
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 603
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 604
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 614
        function clickLikePost(event) {                                                                                // 614
            event.preventDefault();                                                                                    // 615
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 616
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 617
                scroll(0, 0);                                                                                          // 618
                return;                                                                                                // 619
            }                                                                                                          //
            Posts.update({                                                                                             // 621
                "_id": this._id                                                                                        // 622
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 624
                $inc: { "like": 1 }                                                                                    // 625
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 629
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 630
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 632
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 633
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 634
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }()                                                                                                                //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.client.js");
require("./client/template.collections.js");
require("./client/template.friend.js");
require("./client/template.index.js");
require("./client/template.lists.js");
require("./client/template.login.js");
require("./client/template.reg.js");
require("./client/template.self.js");
require("./client/client.js");