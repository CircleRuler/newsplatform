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
  return HTML.Raw('<p class="muted text-center">Newsplatform 2016</p>\n    <div class="x-goto-top" style="display: block;" onclick="javascript:scroll(0,0);">\n        <div class="x-arrow"></div>\n        <div class="x-stick"></div>\n    </div>');
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
  return HTML.OL(HTML.Raw('\n    <h1 class="text-danger" align="top">好友列表</h1>\n    '), HTML.TABLE({                   // 5
    "class": "table table-striped table-hover"                                                                         // 6
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH("＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("总发布数"), "\n                ", HTML.TD("操作"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("friendToday"));                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(HTML.A({
      href: "/self",                                                                                                   // 11
      id: "toViewOther"                                                                                                // 12
    }, Blaze.View("lookup:user.username", function() {                                                                 // 13
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 14
    }))), "\n                    ", HTML.TD(Blaze.View("lookup:totalPost", function() {                                // 15
      return Spacebars.mustache(view.lookup("totalPost"));                                                             // 16
    })), "\n                    ", HTML.TD(HTML.BUTTON({                                                               // 17
      id: "deleteFriend",                                                                                              // 18
      "class": "btn btn-info"                                                                                          // 19
    }, "删除好友")), " \n                "), "\n            " ];                                                           // 20
  }), "\n        "), "\n    "), "\n    ");                                                                             // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
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
    }, HTML.A({                                                                                                        // 57
      href: "/self",                                                                                                   // 58
      id: "toViewOther"                                                                                                // 59
    }, Blaze.View("lookup:user.username", function() {                                                                 // 60
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 61
    })), "\n                    ", Blaze.If(function() {                                                               // 62
      return Spacebars.call(view.lookup("currentUser"));                                                               // 63
    }, function() {                                                                                                    // 64
      return [ "\n                    ", HTML.BUTTON({                                                                 // 65
        id: "addFriend",                                                                                               // 66
        "class": "btn btn-info"                                                                                        // 67
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 68
        id: "addCollection",                                                                                           // 69
        "class": "btn btn-primary"                                                                                     // 70
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 71
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 72
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 73
        id: "likePost",                                                                                                // 74
        "class": "btn btn-warning"                                                                                     // 75
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 76
        return Spacebars.mustache(view.lookup("like"));                                                                // 77
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 78
        id: "objectPost",                                                                                              // 79
        "class": "btn btn-warning"                                                                                     // 80
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 81
        return Spacebars.mustache(view.lookup("object"));                                                              // 82
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 83
        id: "untopPost",                                                                                               // 84
        "class": "btn btn-danger"                                                                                      // 85
      }, "取消置顶 "), " \n                    " ];                                                                        // 86
    }), "   :\n                    "), "\n                "), "\n                ", HTML.DIV({                         // 87
      "class": "col-xs-3 "                                                                                             // 88
    }), "\n            "), "\n            ", HTML.P({                                                                  // 89
      "class": "muted"                                                                                                 // 90
    }, Blaze.View("lookup:time", function() {                                                                          // 91
      return Spacebars.mustache(view.lookup("time"));                                                                  // 92
    })), "\n            ", HTML.P({                                                                                    // 93
      "class": ""                                                                                                      // 94
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 95
      return Blaze.View("lookup:post", function() {                                                                    // 96
        return Spacebars.mustache(view.lookup("post"));                                                                // 97
      });                                                                                                              // 98
    })), "\n            ", Blaze.If(function() {                                                                       // 99
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 100
    }, function() {                                                                                                    // 101
      return [ "\n            ", Blaze.Each(function() {                                                               // 102
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 104
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 105
          controls: "",                                                                                                // 106
          src: function() {                                                                                            // 107
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 108
          }                                                                                                            // 109
        })), "\n            " ];                                                                                       // 110
      }), "\n            " ];                                                                                          // 111
    }), "\n            ", Blaze.If(function() {                                                                        // 112
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 113
    }, function() {                                                                                                    // 114
      return [ "\n            ", Blaze.Each(function() {                                                               // 115
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 117
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 118
          src: function() {                                                                                            // 119
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 120
          },                                                                                                           // 121
          alt: "",                                                                                                     // 122
          "class": "thumbnail"                                                                                         // 123
        })), "\n            " ];                                                                                       // 124
      }), "\n            " ];                                                                                          // 125
    }), "\n            ", Blaze.If(function() {                                                                        // 126
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 127
    }, function() {                                                                                                    // 128
      return [ "\n            ", Blaze.Each(function() {                                                               // 129
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 131
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 132
          src: function() {                                                                                            // 133
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 134
          }                                                                                                            // 135
        })), "\n            " ];                                                                                       // 136
      }), "\n            " ];                                                                                          // 137
    }), "\n            ", Blaze.If(function() {                                                                        // 138
      return Spacebars.call(view.lookup("currentUser"));                                                               // 139
    }, function() {                                                                                                    // 140
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 141
        type: "text",                                                                                                  // 142
        "class": "span8",                                                                                              // 143
        id: function() {                                                                                               // 144
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 145
        }                                                                                                              // 146
      }), "\n                    ", HTML.BUTTON({                                                                      // 147
        id: "commnetSubmit",                                                                                           // 148
        "class": "btn btn-success"                                                                                     // 149
      }, "评论"), "\n                "), "\n            " ];                                                             // 150
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 151
      return Spacebars.call(view.lookup("comments"));                                                                  // 152
    }, function() {                                                                                                    // 153
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 154
        "class": "postTitle"                                                                                           // 155
      }, HTML.A({                                                                                                      // 156
        href: "/self",                                                                                                 // 157
        id: "toViewOther"                                                                                              // 158
      }, Blaze.View("lookup:user.username", function() {                                                               // 159
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 160
      })), " ", Blaze.If(function() {                                                                                  // 161
        return Spacebars.call(view.lookup("to"));                                                                      // 162
      }, function() {                                                                                                  // 163
        return HTML.SPAN({                                                                                             // 164
          style: "color:black;"                                                                                        // 165
        }, "回复");                                                                                                      // 166
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 167
        return Spacebars.mustache(view.lookup("to"));                                                                  // 168
      })), " : ", HTML.BUTTON({                                                                                        // 169
        id: "displayCommnetButton",                                                                                    // 170
        type: "button",                                                                                                // 171
        "class": "btn btn-link"                                                                                        // 172
      }, Blaze.View("lookup:post", function() {                                                                        // 173
        return Spacebars.mustache(view.lookup("post"));                                                                // 174
      }))), "\n                ", HTML.P({                                                                             // 175
        style: "display:none;",                                                                                        // 176
        id: function() {                                                                                               // 177
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 178
        },                                                                                                             // 179
        "class": "commnetP"                                                                                            // 180
      }, "\n                ", Blaze.If(function() {                                                                   // 181
        return Spacebars.call(view.lookup("currentUser"));                                                             // 182
      }, function() {                                                                                                  // 183
        return [ "\n                    ", HTML.INPUT({                                                                // 184
          type: "text",                                                                                                // 185
          "class": "span8",                                                                                            // 186
          id: function() {                                                                                             // 187
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 188
          }                                                                                                            // 189
        }), "\n                    ", HTML.BUTTON({                                                                    // 190
          id: "commnetSubmitToCommnet",                                                                                // 191
          "class": "btn btn-success"                                                                                   // 192
        }, "评论"), "\n                " ];                                                                              // 193
      }), "\n                "), "\n            " ];                                                                   // 194
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 195
  }), "\n\n    ", Blaze.Each(function() {                                                                              // 196
    return Spacebars.call(view.lookup("posts"));                                                                       // 197
  }, function() {                                                                                                      // 198
    return [ "\n        ", HTML.DIV({                                                                                  // 199
      "class": "center singlePost"                                                                                     // 200
    }, "\n            ", HTML.DIV({                                                                                    // 201
      "class": ""                                                                                                      // 202
    }, "\n                ", HTML.DIV({                                                                                // 203
      "class": "postTitle"                                                                                             // 204
    }, "\n                    ", HTML.H2({                                                                             // 205
      "class": "text-primary span10"                                                                                   // 206
    }, HTML.A({                                                                                                        // 207
      href: "/self",                                                                                                   // 208
      id: "toViewOther"                                                                                                // 209
    }, Blaze.View("lookup:user.username", function() {                                                                 // 210
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 211
    })), "\n                    ", Blaze.If(function() {                                                               // 212
      return Spacebars.call(view.lookup("currentUser"));                                                               // 213
    }, function() {                                                                                                    // 214
      return [ "\n                    ", HTML.BUTTON({                                                                 // 215
        id: "addFriend",                                                                                               // 216
        "class": "btn btn-info"                                                                                        // 217
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 218
        id: "addCollection",                                                                                           // 219
        "class": "btn btn-primary"                                                                                     // 220
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 221
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 222
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 223
        id: "likePost",                                                                                                // 224
        "class": "btn btn-warning"                                                                                     // 225
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 226
        return Spacebars.mustache(view.lookup("like"));                                                                // 227
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 228
        id: "objectPost",                                                                                              // 229
        "class": "btn btn-warning"                                                                                     // 230
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 231
        return Spacebars.mustache(view.lookup("object"));                                                              // 232
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 233
        id: "topPost",                                                                                                 // 234
        "class": "btn btn-danger"                                                                                      // 235
      }, "置顶 "), "\n                    " ];                                                                           // 236
    }), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                        // 237
      "class": "col-xs-3 "                                                                                             // 238
    }), "\n            "), "\n            ", HTML.P({                                                                  // 239
      "class": "muted"                                                                                                 // 240
    }, Blaze.View("lookup:time", function() {                                                                          // 241
      return Spacebars.mustache(view.lookup("time"));                                                                  // 242
    })), "\n            ", HTML.P({                                                                                    // 243
      "class": ""                                                                                                      // 244
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 245
      return Blaze.View("lookup:post", function() {                                                                    // 246
        return Spacebars.mustache(view.lookup("post"));                                                                // 247
      });                                                                                                              // 248
    })), "\n            ", Blaze.If(function() {                                                                       // 249
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 250
    }, function() {                                                                                                    // 251
      return [ "\n            ", Blaze.Each(function() {                                                               // 252
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 254
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 255
          controls: "",                                                                                                // 256
          src: function() {                                                                                            // 257
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 258
          }                                                                                                            // 259
        })), "\n            " ];                                                                                       // 260
      }), "\n            " ];                                                                                          // 261
    }), "\n            ", Blaze.If(function() {                                                                        // 262
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 263
    }, function() {                                                                                                    // 264
      return [ "\n            ", Blaze.Each(function() {                                                               // 265
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 267
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 268
          src: function() {                                                                                            // 269
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 270
          },                                                                                                           // 271
          alt: "",                                                                                                     // 272
          "class": "thumbnail"                                                                                         // 273
        })), "\n            " ];                                                                                       // 274
      }), "\n            " ];                                                                                          // 275
    }), "\n            ", Blaze.If(function() {                                                                        // 276
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 277
    }, function() {                                                                                                    // 278
      return [ "\n            ", Blaze.Each(function() {                                                               // 279
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 281
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 282
          src: function() {                                                                                            // 283
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 284
          }                                                                                                            // 285
        })), "\n            " ];                                                                                       // 286
      }), "\n            " ];                                                                                          // 287
    }), "\n            ", Blaze.If(function() {                                                                        // 288
      return Spacebars.call(view.lookup("currentUser"));                                                               // 289
    }, function() {                                                                                                    // 290
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 291
        type: "text",                                                                                                  // 292
        "class": "span8",                                                                                              // 293
        id: function() {                                                                                               // 294
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 295
        }                                                                                                              // 296
      }), "\n                    ", HTML.BUTTON({                                                                      // 297
        id: "commnetSubmit",                                                                                           // 298
        "class": "btn btn-success"                                                                                     // 299
      }, "评论"), "\n                "), "\n            " ];                                                             // 300
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 301
      return Spacebars.call(view.lookup("comments"));                                                                  // 302
    }, function() {                                                                                                    // 303
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 304
        "class": "postTitle"                                                                                           // 305
      }, HTML.A({                                                                                                      // 306
        href: "/self",                                                                                                 // 307
        id: "toViewOther"                                                                                              // 308
      }, Blaze.View("lookup:user.username", function() {                                                               // 309
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 310
      })), " ", Blaze.If(function() {                                                                                  // 311
        return Spacebars.call(view.lookup("to"));                                                                      // 312
      }, function() {                                                                                                  // 313
        return HTML.SPAN({                                                                                             // 314
          style: "color:black;"                                                                                        // 315
        }, "回复");                                                                                                      // 316
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 317
        return Spacebars.mustache(view.lookup("to"));                                                                  // 318
      })), " :", HTML.BUTTON({                                                                                         // 319
        id: "displayCommnetButton",                                                                                    // 320
        type: "button",                                                                                                // 321
        "class": "btn btn-link"                                                                                        // 322
      }, Blaze.View("lookup:post", function() {                                                                        // 323
        return Spacebars.mustache(view.lookup("post"));                                                                // 324
      }))), "\n                ", HTML.P({                                                                             // 325
        style: "display:none;",                                                                                        // 326
        id: function() {                                                                                               // 327
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 328
        },                                                                                                             // 329
        "class": "commnetP"                                                                                            // 330
      }, "\n                ", Blaze.If(function() {                                                                   // 331
        return Spacebars.call(view.lookup("currentUser"));                                                             // 332
      }, function() {                                                                                                  // 333
        return [ "\n                    ", HTML.INPUT({                                                                // 334
          type: "text",                                                                                                // 335
          "class": "span8",                                                                                            // 336
          id: function() {                                                                                             // 337
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 338
          }                                                                                                            // 339
        }), "\n                    ", HTML.BUTTON({                                                                    // 340
          id: "commnetSubmitToCommnet",                                                                                // 341
          "class": "btn btn-success"                                                                                   // 342
        }, "评论"), "\n                " ];                                                                              // 343
      }), "\n                "), "\n            " ];                                                                   // 344
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 345
  }) ];                                                                                                                // 346
}));                                                                                                                   // 347
                                                                                                                       // 348
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
  return [ HTML.Raw('<h2 class="text-primary">十大综合排名最高新闻</h2>\n    '), Blaze.Each(function() {                         // 5
    return Spacebars.call(view.lookup("goodNews"));                                                                    // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", HTML.DIV({                                                                                  // 8
      "class": "center well singlePost"                                                                                // 9
    }, "\n            ", HTML.DIV({                                                                                    // 10
      "class": ""                                                                                                      // 11
    }, "\n                ", HTML.DIV({                                                                                // 12
      "class": "postTitle"                                                                                             // 13
    }, "\n                    ", HTML.H2({                                                                             // 14
      "class": "text-primary span10"                                                                                   // 15
    }, HTML.A({                                                                                                        // 16
      href: "/self",                                                                                                   // 17
      id: "toViewOther"                                                                                                // 18
    }, Blaze.View("lookup:user.username", function() {                                                                 // 19
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 20
    })), "\n                    ", Blaze.If(function() {                                                               // 21
      return Spacebars.call(view.lookup("currentUser"));                                                               // 22
    }, function() {                                                                                                    // 23
      return [ "\n                    ", HTML.BUTTON({                                                                 // 24
        id: "addFriend",                                                                                               // 25
        "class": "btn btn-info"                                                                                        // 26
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 27
        id: "addCollection",                                                                                           // 28
        "class": "btn btn-primary"                                                                                     // 29
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 30
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 31
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 32
        id: "likePost",                                                                                                // 33
        "class": "btn btn-warning"                                                                                     // 34
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 35
        return Spacebars.mustache(view.lookup("like"));                                                                // 36
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 37
        id: "objectPost",                                                                                              // 38
        "class": "btn btn-warning"                                                                                     // 39
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 40
        return Spacebars.mustache(view.lookup("object"));                                                              // 41
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 42
        id: "topPost",                                                                                                 // 43
        "class": "btn btn-danger"                                                                                      // 44
      }, "置顶 "), "\n                    " ];                                                                           // 45
    }), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                        // 46
      "class": "col-xs-3 "                                                                                             // 47
    }), "\n            "), "\n            ", HTML.P({                                                                  // 48
      "class": "muted"                                                                                                 // 49
    }, Blaze.View("lookup:time", function() {                                                                          // 50
      return Spacebars.mustache(view.lookup("time"));                                                                  // 51
    })), "\n            ", HTML.P({                                                                                    // 52
      "class": ""                                                                                                      // 53
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 54
      return Blaze.View("lookup:post", function() {                                                                    // 55
        return Spacebars.mustache(view.lookup("post"));                                                                // 56
      });                                                                                                              // 57
    })), "\n            ", Blaze.If(function() {                                                                       // 58
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 59
    }, function() {                                                                                                    // 60
      return [ "\n            ", Blaze.Each(function() {                                                               // 61
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 63
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 64
          controls: "",                                                                                                // 65
          src: function() {                                                                                            // 66
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 67
          }                                                                                                            // 68
        })), "\n            " ];                                                                                       // 69
      }), "\n            " ];                                                                                          // 70
    }), "\n            ", Blaze.If(function() {                                                                        // 71
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 72
    }, function() {                                                                                                    // 73
      return [ "\n            ", Blaze.Each(function() {                                                               // 74
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 76
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 77
          src: function() {                                                                                            // 78
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 79
          },                                                                                                           // 80
          alt: "",                                                                                                     // 81
          "class": "thumbnail"                                                                                         // 82
        })), "\n            " ];                                                                                       // 83
      }), "\n            " ];                                                                                          // 84
    }), "\n            ", Blaze.If(function() {                                                                        // 85
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 86
    }, function() {                                                                                                    // 87
      return [ "\n            ", Blaze.Each(function() {                                                               // 88
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 90
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 91
          src: function() {                                                                                            // 92
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 93
          }                                                                                                            // 94
        })), "\n            " ];                                                                                       // 95
      }), "\n            " ];                                                                                          // 96
    }), "\n            ", Blaze.If(function() {                                                                        // 97
      return Spacebars.call(view.lookup("currentUser"));                                                               // 98
    }, function() {                                                                                                    // 99
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 100
        type: "text",                                                                                                  // 101
        "class": "span8",                                                                                              // 102
        id: function() {                                                                                               // 103
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 104
        }                                                                                                              // 105
      }), "\n                    ", HTML.BUTTON({                                                                      // 106
        id: "commnetSubmit",                                                                                           // 107
        "class": "btn btn-success"                                                                                     // 108
      }, "评论"), "\n                "), "\n            " ];                                                             // 109
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 110
      return Spacebars.call(view.lookup("comments"));                                                                  // 111
    }, function() {                                                                                                    // 112
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 113
        "class": "postTitle"                                                                                           // 114
      }, HTML.A({                                                                                                      // 115
        href: "/self",                                                                                                 // 116
        id: "toViewOther"                                                                                              // 117
      }, Blaze.View("lookup:user.username", function() {                                                               // 118
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 119
      })), " ", Blaze.If(function() {                                                                                  // 120
        return Spacebars.call(view.lookup("to"));                                                                      // 121
      }, function() {                                                                                                  // 122
        return HTML.SPAN({                                                                                             // 123
          style: "color:black;"                                                                                        // 124
        }, "回复");                                                                                                      // 125
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 126
        return Spacebars.mustache(view.lookup("to"));                                                                  // 127
      })), " :", HTML.BUTTON({                                                                                         // 128
        id: "displayCommnetButton",                                                                                    // 129
        type: "button",                                                                                                // 130
        "class": "btn btn-link"                                                                                        // 131
      }, Blaze.View("lookup:post", function() {                                                                        // 132
        return Spacebars.mustache(view.lookup("post"));                                                                // 133
      }))), "\n                ", HTML.P({                                                                             // 134
        style: "display:none;",                                                                                        // 135
        id: function() {                                                                                               // 136
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 137
        },                                                                                                             // 138
        "class": "commnetP"                                                                                            // 139
      }, "\n                ", Blaze.If(function() {                                                                   // 140
        return Spacebars.call(view.lookup("currentUser"));                                                             // 141
      }, function() {                                                                                                  // 142
        return [ "\n                    ", HTML.INPUT({                                                                // 143
          type: "text",                                                                                                // 144
          "class": "span8",                                                                                            // 145
          id: function() {                                                                                             // 146
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 147
          }                                                                                                            // 148
        }), "\n                    ", HTML.BUTTON({                                                                    // 149
          id: "commnetSubmitToCommnet",                                                                                // 150
          "class": "btn btn-success"                                                                                   // 151
        }, "评论"), "\n                " ];                                                                              // 152
      }), "\n                "), "\n            " ];                                                                   // 153
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 154
  }), "\n    ", HTML.OL("\n    ", HTML.Raw('<h3 class="text-danger">十大最活跃用户</h3>'), "\n    ", HTML.TABLE({             // 155
    "class": "table table-striped table-hover"                                                                         // 156
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH({                                // 157
    style: "vertical-align:top;"                                                                                       // 158
  }, "＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("战斗力排名"), "\n                ", HTML.TD("今日积分"), "\n                ", HTML.TD("总积分"), "\n            "), "\n        "), "\n        ", HTML.TBODY({
    id: "scoreList"                                                                                                    // 160
  }, "\n            ", Blaze.Each(function() {                                                                         // 161
    return Spacebars.call(view.lookup("lists"));                                                                       // 162
  }, function() {                                                                                                      // 163
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 165
    })), "\n                    ", HTML.TD(Blaze.View("lookup:rank", function() {                                      // 166
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 167
    })), "\n                    ", HTML.TD(Blaze.View("lookup:todayScore", function() {                                // 168
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 169
    })), "\n                    ", HTML.TD(Blaze.View("lookup:totalScore", function() {                                // 170
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 171
    })), "\n                "), "\n            " ];                                                                    // 172
  }), "\n        "), "\n    "), "\n    ") ];                                                                           // 173
}));                                                                                                                   // 174
                                                                                                                       // 175
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
      }, "管理员账户", Blaze.View("lookup:user.username", function() {                                                      // 13
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 14
      }), "！"), "\n        " ];                                                                                        // 15
    }, function() {                                                                                                    // 16
      return [ "\n            ", HTML.H4({                                                                             // 17
        "class": "text-info"                                                                                           // 18
      }, "普通用户", Blaze.View("lookup:user.username", function() {                                                       // 19
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 20
      }), "。", Blaze.If(function() {                                                                                   // 21
        return Spacebars.call(view.lookup("isFriend"));                                                                // 22
      }, function() {                                                                                                  // 23
        return HTML.BUTTON({                                                                                           // 24
          id: "addFriend",                                                                                             // 25
          "class": "btn btn-info"                                                                                      // 26
        }, "加好友");                                                                                                     // 27
      })), "\n        " ];                                                                                             // 28
    }), "\n        ", HTML.DL({                                                                                        // 29
      "class": "dl-horizontal well"                                                                                    // 30
    }, "\n            ", HTML.DT("用户名"), HTML.DD(Blaze.View("lookup:user.username", function() {                       // 31
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 32
    })), "\n            ", HTML.DT("总积分"), HTML.DD(Blaze.View("lookup:totalScore", function() {                        // 33
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 34
    })), "\n            ", HTML.DT("今日积分"), HTML.DD(Blaze.View("lookup:todayScore", function() {                       // 35
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 36
    })), "\n            ", HTML.DT("好友总数"), HTML.DD(Blaze.View("lookup:totalFriend", function() {                      // 37
      return Spacebars.mustache(view.lookup("totalFriend"));                                                           // 38
    })), "\n            ", HTML.DT("被赞总数"), HTML.DD(Blaze.View("lookup:totalLike", function() {                        // 39
      return Spacebars.mustache(view.lookup("totalLike"));                                                             // 40
    })), "\n            ", HTML.DT("被异议总数"), HTML.DD(Blaze.View("lookup:totalObject", function() {                     // 41
      return Spacebars.mustache(view.lookup("totalObject"));                                                           // 42
    })), "\n            ", HTML.DT("被收藏总数"), HTML.DD(Blaze.View("lookup:totalCollection", function() {                 // 43
      return Spacebars.mustache(view.lookup("totalCollection"));                                                       // 44
    })), "\n            ", HTML.DT("发布新闻总数"), HTML.DD(Blaze.View("lookup:totalPost", function() {                      // 45
      return Spacebars.mustache(view.lookup("totalPost"));                                                             // 46
    })), "\n            ", HTML.DT("注册顺位"), HTML.DD(Blaze.View("lookup:rank", function() {                             // 47
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 48
    })), "\n            ", HTML.DT("注册时间"), HTML.DD(Blaze.View("lookup:time", function() {                             // 49
      return Spacebars.mustache(view.lookup("time"));                                                                  // 50
    })), "\n        "), "\n    " ];                                                                                    // 51
  }), HTML.Raw('\n    <h3 class="text-danger">发布过的新闻</h3>\n    '), Blaze.Each(function() {                             // 52
    return Spacebars.call(view.lookup("posts"));                                                                       // 53
  }, function() {                                                                                                      // 54
    return [ "\n        ", HTML.DIV({                                                                                  // 55
      "class": "center singlePost"                                                                                     // 56
    }, "\n            ", HTML.DIV({                                                                                    // 57
      "class": ""                                                                                                      // 58
    }, "\n                ", HTML.DIV({                                                                                // 59
      "class": "postTitle"                                                                                             // 60
    }, "\n                    ", HTML.H2({                                                                             // 61
      "class": "text-primary span10"                                                                                   // 62
    }, Blaze.View("lookup:user.username", function() {                                                                 // 63
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 64
    }), "\n                    ", HTML.BUTTON({                                                                        // 65
      id: "addCollection",                                                                                             // 66
      "class": "btn btn-primary"                                                                                       // 67
    }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                        // 68
      return Spacebars.mustache(view.lookup("totalCollection"));                                                       // 69
    }), ")"), "\n                    ", HTML.BUTTON({                                                                  // 70
      id: "likePost",                                                                                                  // 71
      "class": "btn btn-warning"                                                                                       // 72
    }, "点赞(", Blaze.View("lookup:like", function() {                                                                   // 73
      return Spacebars.mustache(view.lookup("like"));                                                                  // 74
    }), ")"), "\n                    "), "\n                "), "\n                ", HTML.DIV({                       // 75
      "class": "col-xs-3 "                                                                                             // 76
    }), "\n            "), "\n            ", HTML.P({                                                                  // 77
      "class": "muted"                                                                                                 // 78
    }, Blaze.View("lookup:time", function() {                                                                          // 79
      return Spacebars.mustache(view.lookup("time"));                                                                  // 80
    })), "\n            ", HTML.P({                                                                                    // 81
      "class": ""                                                                                                      // 82
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 83
      return Blaze.View("lookup:post", function() {                                                                    // 84
        return Spacebars.mustache(view.lookup("post"));                                                                // 85
      });                                                                                                              // 86
    })), "\n            ", Blaze.If(function() {                                                                       // 87
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 88
    }, function() {                                                                                                    // 89
      return [ "\n            ", Blaze.Each(function() {                                                               // 90
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 92
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 93
          controls: "",                                                                                                // 94
          src: function() {                                                                                            // 95
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 96
          }                                                                                                            // 97
        })), "\n            " ];                                                                                       // 98
      }), "\n            " ];                                                                                          // 99
    }), "\n            ", Blaze.If(function() {                                                                        // 100
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 101
    }, function() {                                                                                                    // 102
      return [ "\n            ", Blaze.Each(function() {                                                               // 103
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 105
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 106
          src: function() {                                                                                            // 107
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 108
          },                                                                                                           // 109
          alt: "",                                                                                                     // 110
          "class": "thumbnail"                                                                                         // 111
        })), "\n            " ];                                                                                       // 112
      }), "\n            " ];                                                                                          // 113
    }), "\n            ", Blaze.If(function() {                                                                        // 114
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 115
    }, function() {                                                                                                    // 116
      return [ "\n            ", Blaze.Each(function() {                                                               // 117
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 119
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 120
          src: function() {                                                                                            // 121
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 122
          }                                                                                                            // 123
        })), "\n            " ];                                                                                       // 124
      }), "\n            " ];                                                                                          // 125
    }), "\n            ", Blaze.If(function() {                                                                        // 126
      return Spacebars.call(view.lookup("currentUser"));                                                               // 127
    }, function() {                                                                                                    // 128
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 129
        type: "text",                                                                                                  // 130
        "class": "span8",                                                                                              // 131
        id: function() {                                                                                               // 132
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 133
        }                                                                                                              // 134
      }), "\n                    ", HTML.BUTTON({                                                                      // 135
        id: "commnetSubmit",                                                                                           // 136
        "class": "btn btn-success"                                                                                     // 137
      }, "评论"), "\n                "), "\n            " ];                                                             // 138
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 139
      return Spacebars.call(view.lookup("comments"));                                                                  // 140
    }, function() {                                                                                                    // 141
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 142
        "class": "postTitle"                                                                                           // 143
      }, Blaze.View("lookup:user.username", function() {                                                               // 144
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 145
      }), " ", Blaze.If(function() {                                                                                   // 146
        return Spacebars.call(view.lookup("to"));                                                                      // 147
      }, function() {                                                                                                  // 148
        return HTML.SPAN({                                                                                             // 149
          style: "color:black;"                                                                                        // 150
        }, "回复");                                                                                                      // 151
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 152
        return Spacebars.mustache(view.lookup("to"));                                                                  // 153
      })), " :", HTML.BUTTON({                                                                                         // 154
        id: "displayCommnetButton",                                                                                    // 155
        type: "button",                                                                                                // 156
        "class": "btn btn-link"                                                                                        // 157
      }, Blaze.View("lookup:post", function() {                                                                        // 158
        return Spacebars.mustache(view.lookup("post"));                                                                // 159
      }))), "\n                ", HTML.P({                                                                             // 160
        style: "display:none;",                                                                                        // 161
        id: function() {                                                                                               // 162
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 163
        },                                                                                                             // 164
        "class": "commnetP"                                                                                            // 165
      }, "\n                ", Blaze.If(function() {                                                                   // 166
        return Spacebars.call(view.lookup("currentUser"));                                                             // 167
      }, function() {                                                                                                  // 168
        return [ "\n                    ", HTML.INPUT({                                                                // 169
          type: "text",                                                                                                // 170
          "class": "span8",                                                                                            // 171
          id: function() {                                                                                             // 172
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 173
          }                                                                                                            // 174
        }), "\n                    ", HTML.BUTTON({                                                                    // 175
          id: "commnetSubmitToCommnet",                                                                                // 176
          "class": "btn btn-success"                                                                                   // 177
        }, "评论"), "\n                " ];                                                                              // 178
      }), "\n                "), "\n            " ];                                                                   // 179
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 180
  }) ];                                                                                                                // 181
}));                                                                                                                   // 182
                                                                                                                       // 183
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
    }                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Session.setDefault("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "", collections: "" });
Session.setDefault("info", { success: "", error: "" });                                                                // 13
                                                                                                                       //
Posts = new _meteor.Meteor.Collection("posts");                                                                        // 15
SystemInfo = new _meteor.Meteor.Collection("systemInfo");                                                              // 16
UserInfo = new _meteor.Meteor.Collection("userInfo");                                                                  // 17
                                                                                                                       //
var isGetImage = false;                                                                                                // 19
var isGetAudio = false;                                                                                                // 20
var isGetVideo = false;                                                                                                // 21
var isGetLocalImage = false;                                                                                           // 22
var captureImageId = false;                                                                                            // 23
var captureAudioId = false;                                                                                            // 24
var captureVideoId = false;                                                                                            // 25
var locallImageId = false;                                                                                             // 26
                                                                                                                       //
Images = new FS.Collection("images", {                                                                                 // 28
    stores: [new FS.Store.FileSystem("images", { path: "~/uploadsImage" })]                                            // 29
});                                                                                                                    //
                                                                                                                       //
Audios = new FS.Collection("audios", {                                                                                 // 32
    stores: [new FS.Store.FileSystem("audios", { path: "~/uploadsAudio" })]                                            // 33
});                                                                                                                    //
                                                                                                                       //
Videos = new FS.Collection("videos", {                                                                                 // 36
    stores: [new FS.Store.FileSystem("videos", { path: "~/uploadsVideo" })]                                            // 37
});                                                                                                                    //
                                                                                                                       //
LocalImages = new FS.Collection("localimages", {                                                                       // 40
    stores: [new FS.Store.FileSystem("localimages", { path: "~/uploadsLocalImage" })]                                  // 41
});                                                                                                                    //
                                                                                                                       //
var captureImageSuccess = function captureImageSuccess(mediaFiles) {                                                   // 44
    var i, path, len;                                                                                                  // 45
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 46
        path = mediaFiles[i].fullPath;                                                                                 // 47
        Images.insert(mediaFiles[i], function (err, fileObj) {                                                         // 48
            isGetImage = true;                                                                                         // 49
            captureImageId = fileObj._id;                                                                              // 50
            Session.set("info", { success: "插入图片成功", error: "" });                                                     // 51
        });                                                                                                            //
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
var captureAudioSuccess = function captureAudioSuccess(mediaFiles) {                                                   // 56
    var i, path, len;                                                                                                  // 57
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 58
        path = mediaFiles[i].fullPath;                                                                                 // 59
        Audios.insert(mediaFiles[i], function (err, fileObj) {                                                         // 60
            isGetAudio = true;                                                                                         // 61
            captureAudioId = fileObj._id;                                                                              // 62
            Session.set("info", { success: "插入音频成功", error: "" });                                                     // 63
        });                                                                                                            //
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
var captureVideoSuccess = function captureVideoSuccess(mediaFiles) {                                                   // 68
    var i, path, len;                                                                                                  // 69
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {                                                            // 70
        path = mediaFiles[i].fullPath;                                                                                 // 71
        Videos.insert(mediaFiles[i], function (err, fileObj) {                                                         // 72
            isGetVideo = true;                                                                                         // 73
            captureVideoId = fileObj._id;                                                                              // 74
            Session.set("info", { success: "插入小视频成功", error: "" });                                                    // 75
        });                                                                                                            //
    }                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
// capture error callback                                                                                              //
var captureError = function captureError(error) {                                                                      // 81
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');                                  // 82
};                                                                                                                     //
                                                                                                                       //
if (_meteor.Meteor.isCordova) {}                                                                                       // 85
//---------------------------------- Helpers  start --------------------------------                                   //
Template.info.helpers({                                                                                                // 89
    info: function () {                                                                                                // 90
        function info() {                                                                                              //
            return Session.get("info");                                                                                // 91
        }                                                                                                              //
                                                                                                                       //
        return info;                                                                                                   //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.container.helpers({                                                                                           // 95
    currentUrl: function () {                                                                                          // 96
        function currentUrl() {                                                                                        //
            return Session.get("currentUrl");                                                                          // 97
        }                                                                                                              //
                                                                                                                       //
        return currentUrl;                                                                                             //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.nav.helpers({                                                                                                 // 101
    active: function () {                                                                                              // 102
        function active() {                                                                                            //
            return Session.get("currentUrl");                                                                          // 103
        }                                                                                                              //
                                                                                                                       //
        return active;                                                                                                 //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.helpers({                                                                                               // 107
    topPosts: function () {                                                                                            // 108
        function topPosts() {                                                                                          //
            return Posts.find({ "top": true, "super": 0 }, { sort: { time: -1 } });                                    // 109
        }                                                                                                              //
                                                                                                                       //
        return topPosts;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 111
        function posts() {                                                                                             //
            if (!_meteor.Meteor.userId()) {                                                                            // 112
                return Posts.find({ "user.username": "admin", "super": 0, "top": false }, { sort: { time: -1 } });     // 113
            } else {                                                                                                   //
                return Posts.find({ "super": 0, "top": false }, { sort: { time: -1 } });                               // 115
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 118
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 119
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }(),                                                                                                               //
    getMediaBtn: function () {                                                                                         // 121
        function getMediaBtn() {                                                                                       //
            if (_meteor.Meteor.isCordova) {                                                                            // 122
                return true;                                                                                           // 123
            } else {                                                                                                   //
                return false;                                                                                          // 125
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return getMediaBtn;                                                                                            //
    }(),                                                                                                               //
    displayImage: function () {                                                                                        // 128
        function displayImage(id) {                                                                                    //
            return Images.find({ "_id": id });                                                                         // 129
        }                                                                                                              //
                                                                                                                       //
        return displayImage;                                                                                           //
    }(),                                                                                                               //
    displayAudio: function () {                                                                                        // 131
        function displayAudio(id) {                                                                                    //
            return Audios.find({ "_id": id });                                                                         // 132
        }                                                                                                              //
                                                                                                                       //
        return displayAudio;                                                                                           //
    }(),                                                                                                               //
    displayVideo: function () {                                                                                        // 134
        function displayVideo(id) {                                                                                    //
            return Videos.find({ "_id": id });                                                                         // 135
        }                                                                                                              //
                                                                                                                       //
        return displayVideo;                                                                                           //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.helpers({                                                                                               // 139
    goodNews: function () {                                                                                            // 140
        function goodNews() {                                                                                          //
            return Posts.find({ "super": 0 }, { sort: { score: -1 }, limit: 10 });                                     // 141
        }                                                                                                              //
                                                                                                                       //
        return goodNews;                                                                                               //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 143
        function lists() {                                                                                             //
            return UserInfo.find({}, { sort: { totalScore: -1 }, limit: 10 });                                         // 144
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 148
    self: function () {                                                                                                // 149
        function self() {                                                                                              //
            if (!localStorage.getItem("targetUserId")) {                                                               // 150
                localStorage.setItem("targetUserId", _meteor.Meteor.userId());                                         // 151
            }                                                                                                          //
            return UserInfo.find({ "user._id": localStorage.getItem("targetUserId") });;                               // 153
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    isFriend: function () {                                                                                            // 155
        function isFriend() {                                                                                          //
            if (!UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": localStorage.getItem("targetUserId") })) {
                return true;                                                                                           // 157
            } else {                                                                                                   //
                return false;                                                                                          // 159
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return isFriend;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 162
        function posts() {                                                                                             //
            var otherPost = Posts.find({ "super": 0, "user._id": localStorage.getItem("targetUserId") }, { sort: { time: -1 } });
            localStorage.setItem("targetUserId", _meteor.Meteor.userId());                                             // 164
            return otherPost;                                                                                          // 165
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.helpers({                                                                                         // 169
    collections: function () {                                                                                         // 170
        function collections() {                                                                                       //
            return Posts.find({ "super": 0, "collectioners": _meteor.Meteor.userId() }, { sort: { time: -1 } });       // 171
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 175
    friendToday: function () {                                                                                         // 176
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 177
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { time: -1 } });                            // 178
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
//-------------------------------- Helpers End ---------------------------------------                                 //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 184
    Backbone.history.start({ pushState: true });                                                                       // 185
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 188
    routes: {                                                                                                          // 189
        "": "index",                                                                                                   // 190
        "login": "login",                                                                                              // 191
        "reg": "reg",                                                                                                  // 192
        "logout": "logout",                                                                                            // 193
        "friend": "friend",                                                                                            // 194
        "lists": "lists",                                                                                              // 195
        "self": "self",                                                                                                // 196
        "collections": "collections"                                                                                   // 197
    },                                                                                                                 //
    index: function () {                                                                                               // 199
        function index() {                                                                                             // 199
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 202
        function friend() {                                                                                            // 202
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 205
        function lists() {                                                                                             // 205
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 208
        function self() {                                                                                              // 208
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    collections: function () {                                                                                         // 211
        function collections() {                                                                                       // 211
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "", collections: "active" });
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }(),                                                                                                               //
    login: function () {                                                                                               // 214
        function login() {                                                                                             // 214
            if (_meteor.Meteor.userId()) {                                                                             // 215
                this.navigate("/", true);                                                                              // 216
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 217
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 221
        function reg() {                                                                                               // 221
            if (_meteor.Meteor.userId()) {                                                                             // 222
                this.navigate("/", true);                                                                              // 223
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 224
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 228
        function logout() {                                                                                            // 228
            if (_meteor.Meteor.userId()) {                                                                             // 229
                _meteor.Meteor.logout();                                                                               // 230
                this.navigate("/", true);                                                                              // 231
                Session.set("info", { success: "登出成功", error: "" });                                                   // 232
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 233
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 235
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 236
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 239
        function redirect(url) {                                                                                       // 239
            this.navigate(url, true);                                                                                  // 240
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 243
                                                                                                                       //
//------------------------------- events start ------------------------------                                          //
                                                                                                                       //
Template.reg.events({                                                                                                  // 247
    'click #submit': function () {                                                                                     // 248
        function clickSubmit(event) {                                                                                  // 248
            event.preventDefault();                                                                                    // 249
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 250
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 251
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 253
            var $password = $("#password").val();                                                                      // 254
            var $password_repeat = $("#password-repeat").val();                                                        // 255
            var isAdmin = false;                                                                                       // 256
            if ($username == "admin") {                                                                                // 257
                isAdmin = true;                                                                                        // 258
            }                                                                                                          //
            if ($username.length >= 11) {                                                                              // 260
                Session.set("info", { success: "", error: "用户名长度最大为10" });                                             // 261
                return;                                                                                                // 262
            }                                                                                                          //
            if ($password.length === 0 || $username.length === 0) {                                                    // 264
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 265
                return;                                                                                                // 266
            }                                                                                                          //
                                                                                                                       //
            if ($password !== $password_repeat) {                                                                      // 269
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 270
                return;                                                                                                // 271
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 273
                username: $username,                                                                                   // 274
                password: $password }, function (err) {                                                                // 275
                if (err) {                                                                                             // 277
                    Session.set("info", { success: "", error: "注册失败,用户名已存在或其他未知原因" });                                 // 278
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 280
                    UserInfo.insert({                                                                                  // 281
                        user: _meteor.Meteor.user(),                                                                   // 282
                        isAdmin: isAdmin,                                                                              // 283
                        collections: [],                                                                               // 284
                        totalScore: 0,                                                                                 // 285
                        todayScore: 0,                                                                                 // 286
                        totalLike: 0,                                                                                  // 287
                        totalObject: 0,                                                                                // 288
                        totalCollection: 0,                                                                            // 289
                        totalPost: 0,                                                                                  // 290
                        totalFriend: 1,                                                                                // 291
                        Friends: [_meteor.Meteor.userId()],                                                            // 292
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 293
                        time: new Date()                                                                               // 294
                    });                                                                                                //
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                   // 296
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 297
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 305
    'click #submit': function () {                                                                                     // 306
        function clickSubmit(event) {                                                                                  // 306
            event.preventDefault();                                                                                    // 307
            var $username = $("#username").val();                                                                      // 308
            var $password = $("#password").val();                                                                      // 309
            if ($password.length === 0 || $username.length === 0) {                                                    // 310
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 311
                return;                                                                                                // 312
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 314
                if (err) {                                                                                             // 315
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 316
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 318
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 319
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 320
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 321
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 322
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 332
    'click #submit': function () {                                                                                     // 333
        function clickSubmit(event) {                                                                                  // 333
            event.preventDefault();                                                                                    // 334
            var $post = $("#post").val();                                                                              // 335
            if ($post.length === 0 || $post.length >= 300) {                                                           // 336
                Session.set("info", { success: "", error: "请将字数限制在1-300字以内" });                                        // 337
                return;                                                                                                // 338
            }                                                                                                          //
            Posts.insert({                                                                                             // 340
                user: _meteor.Meteor.user(),                                                                           // 341
                post: $post,                                                                                           // 342
                "super": 0,                                                                                            // 343
                to: false,                                                                                             // 344
                like: 0,                                                                                               // 345
                Likers: [],                                                                                            // 346
                object: 0,                                                                                             // 347
                Objecters: [],                                                                                         // 348
                totalCollection: 0,                                                                                    // 349
                collectioners: [],                                                                                     // 350
                top: false,                                                                                            // 351
                score: 0,                                                                                              // 352
                isGetImage: isGetImage,                                                                                // 353
                isGetAudio: isGetAudio,                                                                                // 354
                isGetVideo: isGetVideo,                                                                                // 355
                captureImageId: captureImageId,                                                                        // 356
                captureAudioId: captureAudioId,                                                                        // 357
                captureVideoId: captureVideoId,                                                                        // 358
                time: new Date() }, function (err) {                                                                   // 359
                if (err) {                                                                                             // 361
                    Session.set("info", { success: "", error: "发表失败" });                                               // 362
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 364
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 365
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 371
                }                                                                                                      //
            });                                                                                                        //
            isGetImage = false;                                                                                        // 375
            isGetAudio = false;                                                                                        // 376
            isGetVideo = false;                                                                                        // 377
            captureImageId = false;                                                                                    // 378
            captureAudioId = false;                                                                                    // 379
            captureVideoId = false;                                                                                    // 380
            UserInfo.update({ "_id": _meteor.Meteor.userId() }, { $inc: { "totalPost": 1 } }, false, true);            // 381
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 386
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 388
        function clickCommnetSubmit(event) {                                                                           // 388
            event.preventDefault();                                                                                    // 389
            var thisId = "#" + this._id;                                                                               // 390
            var $comment = $("#" + this._id).val();                                                                    // 391
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 392
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 393
                scroll(0, 0);                                                                                          // 394
                return;                                                                                                // 395
            }                                                                                                          //
            Posts.insert({                                                                                             // 397
                user: _meteor.Meteor.user(),                                                                           // 398
                post: $comment,                                                                                        // 399
                "super": this._id,                                                                                     // 400
                to: false,                                                                                             // 401
                time: new Date() }, function (err) {                                                                   // 402
                if (err) {                                                                                             // 404
                    Session.set("info", { success: "", error: "评论失败" });                                               // 405
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 407
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 408
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 414
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 419
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 421
        function clickCommnetSubmitToCommnet(event) {                                                                  // 421
            event.preventDefault();                                                                                    // 422
            var thisId = "#" + this._id;                                                                               // 423
            var $commentTo = $("#" + this._id).val();                                                                  // 424
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 425
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 426
                scroll(0, 0);                                                                                          // 427
                return;                                                                                                // 428
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 430
            Posts.insert({                                                                                             // 431
                user: _meteor.Meteor.user(),                                                                           // 432
                post: $commentTo,                                                                                      // 433
                "super": this["super"],                                                                                // 434
                to: userName,                                                                                          // 435
                time: new Date() }, function (err) {                                                                   // 436
                if (err) {                                                                                             // 438
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 439
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 441
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 442
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 448
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 452
            $(".commnetP").css("display", "none");                                                                     // 453
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 455
        function clickDisplayCommnetButton(event) {                                                                    // 455
            event.preventDefault();                                                                                    // 456
            var thisId = "#" + "p" + this._id;                                                                         // 457
            $(".commnetP").css("display", "none");                                                                     // 458
            $(thisId).css("display", "block");                                                                         // 459
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 461
        function clickToViewOther(event) {                                                                             // 461
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 463
            console.log(_meteor.Meteor.userId());                                                                      // 464
            console.log(targetUserId);                                                                                 // 465
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 467
        function clickAddFriend(event) {                                                                               // 467
            event.preventDefault();                                                                                    // 468
            var $friendId = this.user._id;                                                                             // 469
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 470
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 471
                scroll(0, 0);                                                                                          // 472
                return;                                                                                                // 473
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 476
            UserInfo.update({                                                                                          // 477
                "_id": userInfoId                                                                                      // 478
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 480
                $inc: { "totalFriend": 1 }                                                                             // 481
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 485
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 486
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 488
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 489
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 499
        function clickAddCollection(event) {                                                                           // 499
            event.preventDefault();                                                                                    // 500
            var $PostId = this._id;                                                                                    // 501
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 502
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 503
                scroll(0, 0);                                                                                          // 504
                return;                                                                                                // 505
            }                                                                                                          //
            Posts.update({                                                                                             // 507
                "_id": this._id                                                                                        // 508
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 510
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 511
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 515
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 516
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 518
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 519
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 520
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 528
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 529
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 536
        function clickLikePost(event) {                                                                                // 536
            event.preventDefault();                                                                                    // 537
            var thisId = this._id;                                                                                     // 538
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 539
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 540
                scroll(0, 0);                                                                                          // 541
                return;                                                                                                // 542
            }                                                                                                          //
            Posts.update({                                                                                             // 544
                "_id": this._id                                                                                        // 545
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 547
                $inc: { "like": 1, "score": 10 }                                                                       // 548
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 552
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 553
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 555
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 556
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 557
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 565
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 566
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 572
        function clickObjectPost(event) {                                                                              // 572
            event.preventDefault();                                                                                    // 573
            var thisId = this._id;                                                                                     // 574
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 575
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 576
                scroll(0, 0);                                                                                          // 577
                return;                                                                                                // 578
            }                                                                                                          //
            Posts.update({                                                                                             // 580
                "_id": this._id                                                                                        // 581
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 583
                $inc: { "object": 1, "score": -8 }                                                                     // 584
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 588
                    Session.set("info", { success: "", error: "异议无效" });                                               // 589
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 591
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 592
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 593
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 601
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 602
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 608
        function clickTopPost(event) {                                                                                 // 608
            event.preventDefault();                                                                                    // 609
            if (_meteor.Meteor.user().username != "admin") {                                                           // 610
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 611
                scroll(0, 0);                                                                                          // 612
                return;                                                                                                // 613
            }                                                                                                          //
            Posts.update({                                                                                             // 615
                "_id": this._id                                                                                        // 616
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 618
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 622
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 623
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 625
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 626
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 636
        function clickUntopPost(event) {                                                                               // 636
            event.preventDefault();                                                                                    // 637
            if (_meteor.Meteor.user().username != "admin") {                                                           // 638
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 639
                scroll(0, 0);                                                                                          // 640
                return;                                                                                                // 641
            }                                                                                                          //
            Posts.update({                                                                                             // 643
                "_id": this._id                                                                                        // 644
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 646
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 650
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 651
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 653
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 658
        function clickGetImage(event) {                                                                                // 658
            event.preventDefault();                                                                                    // 659
            navigator.device.capture.captureImage(captureImageSuccess, captureError, { limit: 1 });                    // 660
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 662
        function clickGetAudio(event) {                                                                                // 662
            event.preventDefault();                                                                                    // 663
            navigator.device.capture.captureAudio(captureAudioSuccess, captureError, { limit: 1 });                    // 664
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 666
        function clickGetVideo(event) {                                                                                // 666
            event.preventDefault();                                                                                    // 667
            navigator.device.capture.captureVideo(captureVideoSuccess, captureError, { limit: 1 });                    // 668
        }                                                                                                              //
                                                                                                                       //
        return clickGetVideo;                                                                                          //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.events({});                                                                                       // 672
Template.friend.events({                                                                                               // 675
    'click #deleteFriend': function () {                                                                               // 676
        function clickDeleteFriend(event) {                                                                            // 676
            event.preventDefault();                                                                                    // 677
            var $friendId = this.user._id;                                                                             // 678
            if (!UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                    // 679
                Session.set("info", { success: "", error: "错误：此好友不存在" });                                              // 680
                scroll(0, 0);                                                                                          // 681
                return;                                                                                                // 682
            }                                                                                                          //
            if ($friendId == _meteor.Meteor.userId()) {                                                                // 684
                Session.set("info", { success: "", error: "错误：不能删除自己" });                                              // 685
                scroll(0, 0);                                                                                          // 686
                return;                                                                                                // 687
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 690
            UserInfo.update({                                                                                          // 691
                "_id": userInfoId                                                                                      // 692
            }, {                                                                                                       //
                $pull: { "Friends": $friendId },                                                                       // 694
                $inc: { "totalFriend": -1 }                                                                            // 695
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 699
                    Session.set("info", { success: "", error: "删除好友失败" });                                             // 700
                } else {                                                                                               //
                    Session.set("info", { success: "删除成功", error: "" });                                               // 702
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 703
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: -50, totalScore: -50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickDeleteFriend;                                                                                      //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 713
        function clickToViewOther(event) {                                                                             // 713
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 715
            console.log(_meteor.Meteor.userId());                                                                      // 716
            console.log(targetUserId);                                                                                 // 717
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
//------------------------------- events End ------------------------------                                            //
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