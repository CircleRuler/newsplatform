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
        "class": "btn btn-danger"                                                                                      // 39
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 40
        return Spacebars.mustache(view.lookup("object"));                                                              // 41
      }), ")"), "\n                    " ];                                                                            // 42
    }), " :\n                    "), "\n                "), "\n                ", HTML.DIV({                           // 43
      "class": "col-xs-3 "                                                                                             // 44
    }), "\n            "), "\n            ", HTML.P({                                                                  // 45
      "class": "muted"                                                                                                 // 46
    }, Blaze.View("lookup:time", function() {                                                                          // 47
      return Spacebars.mustache(view.lookup("time"));                                                                  // 48
    })), "\n            ", HTML.P({                                                                                    // 49
      "class": ""                                                                                                      // 50
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 51
      return Blaze.View("lookup:post", function() {                                                                    // 52
        return Spacebars.mustache(view.lookup("post"));                                                                // 53
      });                                                                                                              // 54
    })), "\n            ", Blaze.If(function() {                                                                       // 55
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 56
    }, function() {                                                                                                    // 57
      return [ "\n            ", Blaze.Each(function() {                                                               // 58
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 60
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 61
          controls: "",                                                                                                // 62
          src: function() {                                                                                            // 63
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 64
          }                                                                                                            // 65
        })), "\n            " ];                                                                                       // 66
      }), "\n            " ];                                                                                          // 67
    }), "\n            ", Blaze.If(function() {                                                                        // 68
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 69
    }, function() {                                                                                                    // 70
      return [ "\n            ", Blaze.Each(function() {                                                               // 71
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 73
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 74
          src: function() {                                                                                            // 75
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 76
          },                                                                                                           // 77
          alt: "",                                                                                                     // 78
          "class": "thumbnail"                                                                                         // 79
        })), "\n            " ];                                                                                       // 80
      }), "\n            " ];                                                                                          // 81
    }), "\n            ", Blaze.If(function() {                                                                        // 82
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 83
    }, function() {                                                                                                    // 84
      return [ "\n            ", Blaze.Each(function() {                                                               // 85
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 87
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 88
          src: function() {                                                                                            // 89
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 90
          }                                                                                                            // 91
        })), "\n            " ];                                                                                       // 92
      }), "\n            " ];                                                                                          // 93
    }), "\n            ", Blaze.If(function() {                                                                        // 94
      return Spacebars.call(view.lookup("currentUser"));                                                               // 95
    }, function() {                                                                                                    // 96
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 97
        type: "text",                                                                                                  // 98
        "class": "span8",                                                                                              // 99
        id: function() {                                                                                               // 100
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 101
        }                                                                                                              // 102
      }), "\n                    ", HTML.BUTTON({                                                                      // 103
        id: "commnetSubmit",                                                                                           // 104
        "class": "btn btn-success"                                                                                     // 105
      }, "评论"), "\n                "), "\n            " ];                                                             // 106
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 107
      return Spacebars.call(view.lookup("comments"));                                                                  // 108
    }, function() {                                                                                                    // 109
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 110
        "class": "postTitle"                                                                                           // 111
      }, HTML.A({                                                                                                      // 112
        href: "/self",                                                                                                 // 113
        id: "toViewOther"                                                                                              // 114
      }, Blaze.View("lookup:user.username", function() {                                                               // 115
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 116
      })), " ", Blaze.If(function() {                                                                                  // 117
        return Spacebars.call(view.lookup("to"));                                                                      // 118
      }, function() {                                                                                                  // 119
        return HTML.SPAN({                                                                                             // 120
          style: "color:black;"                                                                                        // 121
        }, "回复");                                                                                                      // 122
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 123
        return Spacebars.mustache(view.lookup("to"));                                                                  // 124
      })), " :", HTML.BUTTON({                                                                                         // 125
        id: "displayCommnetButton",                                                                                    // 126
        type: "button",                                                                                                // 127
        "class": "btn btn-link"                                                                                        // 128
      }, Blaze.View("lookup:post", function() {                                                                        // 129
        return Spacebars.mustache(view.lookup("post"));                                                                // 130
      }))), "\n                ", HTML.P({                                                                             // 131
        style: "display:none;",                                                                                        // 132
        id: function() {                                                                                               // 133
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 134
        },                                                                                                             // 135
        "class": "commnetP"                                                                                            // 136
      }, "\n                ", Blaze.If(function() {                                                                   // 137
        return Spacebars.call(view.lookup("currentUser"));                                                             // 138
      }, function() {                                                                                                  // 139
        return [ "\n                    ", HTML.INPUT({                                                                // 140
          type: "text",                                                                                                // 141
          "class": "span8",                                                                                            // 142
          id: function() {                                                                                             // 143
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 144
          }                                                                                                            // 145
        }), "\n                    ", HTML.BUTTON({                                                                    // 146
          id: "commnetSubmitToCommnet",                                                                                // 147
          "class": "btn btn-success"                                                                                   // 148
        }, "回复"), "\n                " ];                                                                              // 149
      }), "\n                "), "\n            " ];                                                                   // 150
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 151
  }) ];                                                                                                                // 152
}));                                                                                                                   // 153
                                                                                                                       // 154
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
    }, "删除")), " \n                "), "\n            " ];                                                             // 20
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
        }, "回复"), "\n                " ];                                                                              // 193
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
        }, "回复"), "\n                " ];                                                                              // 343
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
        "class": "btn btn-danger"                                                                                      // 39
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 40
        return Spacebars.mustache(view.lookup("object"));                                                              // 41
      }), ")"), "\n                    " ];                                                                            // 42
    }), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                        // 43
      "class": "col-xs-3 "                                                                                             // 44
    }), "\n            "), "\n            ", HTML.P({                                                                  // 45
      "class": "muted"                                                                                                 // 46
    }, Blaze.View("lookup:time", function() {                                                                          // 47
      return Spacebars.mustache(view.lookup("time"));                                                                  // 48
    })), "\n            ", HTML.P({                                                                                    // 49
      "class": ""                                                                                                      // 50
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 51
      return Blaze.View("lookup:post", function() {                                                                    // 52
        return Spacebars.mustache(view.lookup("post"));                                                                // 53
      });                                                                                                              // 54
    })), "\n            ", Blaze.If(function() {                                                                       // 55
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 56
    }, function() {                                                                                                    // 57
      return [ "\n            ", Blaze.Each(function() {                                                               // 58
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 60
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 61
          controls: "",                                                                                                // 62
          src: function() {                                                                                            // 63
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 64
          }                                                                                                            // 65
        })), "\n            " ];                                                                                       // 66
      }), "\n            " ];                                                                                          // 67
    }), "\n            ", Blaze.If(function() {                                                                        // 68
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 69
    }, function() {                                                                                                    // 70
      return [ "\n            ", Blaze.Each(function() {                                                               // 71
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 73
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 74
          src: function() {                                                                                            // 75
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 76
          },                                                                                                           // 77
          alt: "",                                                                                                     // 78
          "class": "thumbnail"                                                                                         // 79
        })), "\n            " ];                                                                                       // 80
      }), "\n            " ];                                                                                          // 81
    }), "\n            ", Blaze.If(function() {                                                                        // 82
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 83
    }, function() {                                                                                                    // 84
      return [ "\n            ", Blaze.Each(function() {                                                               // 85
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 87
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 88
          src: function() {                                                                                            // 89
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 90
          }                                                                                                            // 91
        })), "\n            " ];                                                                                       // 92
      }), "\n            " ];                                                                                          // 93
    }), "\n            ", Blaze.If(function() {                                                                        // 94
      return Spacebars.call(view.lookup("currentUser"));                                                               // 95
    }, function() {                                                                                                    // 96
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 97
        type: "text",                                                                                                  // 98
        "class": "span8",                                                                                              // 99
        id: function() {                                                                                               // 100
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 101
        }                                                                                                              // 102
      }), "\n                    ", HTML.BUTTON({                                                                      // 103
        id: "commnetSubmit",                                                                                           // 104
        "class": "btn btn-success"                                                                                     // 105
      }, "评论"), "\n                "), "\n            " ];                                                             // 106
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 107
      return Spacebars.call(view.lookup("comments"));                                                                  // 108
    }, function() {                                                                                                    // 109
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 110
        "class": "postTitle"                                                                                           // 111
      }, HTML.A({                                                                                                      // 112
        href: "/self",                                                                                                 // 113
        id: "toViewOther"                                                                                              // 114
      }, Blaze.View("lookup:user.username", function() {                                                               // 115
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 116
      })), " ", Blaze.If(function() {                                                                                  // 117
        return Spacebars.call(view.lookup("to"));                                                                      // 118
      }, function() {                                                                                                  // 119
        return HTML.SPAN({                                                                                             // 120
          style: "color:black;"                                                                                        // 121
        }, "回复");                                                                                                      // 122
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 123
        return Spacebars.mustache(view.lookup("to"));                                                                  // 124
      })), " :", HTML.BUTTON({                                                                                         // 125
        id: "displayCommnetButton",                                                                                    // 126
        type: "button",                                                                                                // 127
        "class": "btn btn-link"                                                                                        // 128
      }, Blaze.View("lookup:post", function() {                                                                        // 129
        return Spacebars.mustache(view.lookup("post"));                                                                // 130
      }))), "\n                ", HTML.P({                                                                             // 131
        style: "display:none;",                                                                                        // 132
        id: function() {                                                                                               // 133
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 134
        },                                                                                                             // 135
        "class": "commnetP"                                                                                            // 136
      }, "\n                ", Blaze.If(function() {                                                                   // 137
        return Spacebars.call(view.lookup("currentUser"));                                                             // 138
      }, function() {                                                                                                  // 139
        return [ "\n                    ", HTML.INPUT({                                                                // 140
          type: "text",                                                                                                // 141
          "class": "span8",                                                                                            // 142
          id: function() {                                                                                             // 143
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 144
          }                                                                                                            // 145
        }), "\n                    ", HTML.BUTTON({                                                                    // 146
          id: "commnetSubmitToCommnet",                                                                                // 147
          "class": "btn btn-success"                                                                                   // 148
        }, "评论"), "\n                " ];                                                                              // 149
      }), "\n                "), "\n            " ];                                                                   // 150
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 151
  }), "\n    ", HTML.OL("\n    ", HTML.Raw('<h3 class="text-danger">十大最活跃用户</h3>'), "\n    ", HTML.TABLE({             // 152
    "class": "table table-striped table-hover"                                                                         // 153
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH({                                // 154
    style: "vertical-align:top;"                                                                                       // 155
  }, "＃"), "\n                ", HTML.TD("名次"), "\n                ", HTML.TD("昵称"), "\n                ", HTML.TD("UID"), "\n                ", HTML.TD("今日活跃度"), "\n                ", HTML.TD("总活跃度"), "\n            "), "\n        "), "\n        ", HTML.TBODY({
    id: "scoreList"                                                                                                    // 157
  }, "\n            ", Blaze.Each(function() {                                                                         // 158
    return Spacebars.call(view.lookup("lists"));                                                                       // 159
  }, function() {                                                                                                      // 160
    return [ "\n                ", HTML.TR("\n                    ", HTML.TH(), "\n                    ", HTML.TD(HTML.LI()), "\n                    ", HTML.TD(Blaze.View("lookup:user.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 162
    })), "\n                    ", HTML.TD(Blaze.View("lookup:rank", function() {                                      // 163
      return Spacebars.mustache(view.lookup("rank"));                                                                  // 164
    })), "\n                    ", HTML.TD(Blaze.View("lookup:todayScore", function() {                                // 165
      return Spacebars.mustache(view.lookup("todayScore"));                                                            // 166
    })), "\n                    ", HTML.TD(Blaze.View("lookup:totalScore", function() {                                // 167
      return Spacebars.mustache(view.lookup("totalScore"));                                                            // 168
    })), "\n                "), "\n            " ];                                                                    // 169
  }), "\n        "), "\n    "), "\n    ") ];                                                                           // 170
}));                                                                                                                   // 171
                                                                                                                       // 172
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
    })), "\n            ", HTML.DT("UID"), HTML.DD(Blaze.View("lookup:rank", function() {                              // 47
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
    }, HTML.A({                                                                                                        // 63
      href: "/self",                                                                                                   // 64
      id: "toViewOther"                                                                                                // 65
    }, Blaze.View("lookup:user.username", function() {                                                                 // 66
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 67
    })), "\n                    ", Blaze.If(function() {                                                               // 68
      return Spacebars.call(view.lookup("currentUser"));                                                               // 69
    }, function() {                                                                                                    // 70
      return [ "\n                    ", HTML.BUTTON({                                                                 // 71
        id: "addFriend",                                                                                               // 72
        "class": "btn btn-info"                                                                                        // 73
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 74
        id: "addCollection",                                                                                           // 75
        "class": "btn btn-primary"                                                                                     // 76
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 77
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 78
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 79
        id: "likePost",                                                                                                // 80
        "class": "btn btn-warning"                                                                                     // 81
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 82
        return Spacebars.mustache(view.lookup("like"));                                                                // 83
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 84
        id: "objectPost",                                                                                              // 85
        "class": "btn btn-danger"                                                                                      // 86
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 87
        return Spacebars.mustache(view.lookup("object"));                                                              // 88
      }), ")"), "\n                    " ];                                                                            // 89
    }), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                        // 90
      "class": "col-xs-3 "                                                                                             // 91
    }), "\n            "), "\n            ", HTML.P({                                                                  // 92
      "class": "muted"                                                                                                 // 93
    }, Blaze.View("lookup:time", function() {                                                                          // 94
      return Spacebars.mustache(view.lookup("time"));                                                                  // 95
    })), "\n            ", HTML.P({                                                                                    // 96
      "class": ""                                                                                                      // 97
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 98
      return Blaze.View("lookup:post", function() {                                                                    // 99
        return Spacebars.mustache(view.lookup("post"));                                                                // 100
      });                                                                                                              // 101
    })), "\n            ", Blaze.If(function() {                                                                       // 102
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 103
    }, function() {                                                                                                    // 104
      return [ "\n            ", Blaze.Each(function() {                                                               // 105
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 107
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 108
          controls: "",                                                                                                // 109
          src: function() {                                                                                            // 110
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 111
          }                                                                                                            // 112
        })), "\n            " ];                                                                                       // 113
      }), "\n            " ];                                                                                          // 114
    }), "\n            ", Blaze.If(function() {                                                                        // 115
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 116
    }, function() {                                                                                                    // 117
      return [ "\n            ", Blaze.Each(function() {                                                               // 118
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 120
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 121
          src: function() {                                                                                            // 122
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 123
          },                                                                                                           // 124
          alt: "",                                                                                                     // 125
          "class": "thumbnail"                                                                                         // 126
        })), "\n            " ];                                                                                       // 127
      }), "\n            " ];                                                                                          // 128
    }), "\n            ", Blaze.If(function() {                                                                        // 129
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 130
    }, function() {                                                                                                    // 131
      return [ "\n            ", Blaze.Each(function() {                                                               // 132
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 134
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 135
          src: function() {                                                                                            // 136
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 137
          }                                                                                                            // 138
        })), "\n            " ];                                                                                       // 139
      }), "\n            " ];                                                                                          // 140
    }), "\n            ", Blaze.If(function() {                                                                        // 141
      return Spacebars.call(view.lookup("currentUser"));                                                               // 142
    }, function() {                                                                                                    // 143
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 144
        type: "text",                                                                                                  // 145
        "class": "span8",                                                                                              // 146
        id: function() {                                                                                               // 147
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 148
        }                                                                                                              // 149
      }), "\n                    ", HTML.BUTTON({                                                                      // 150
        id: "commnetSubmit",                                                                                           // 151
        "class": "btn btn-success"                                                                                     // 152
      }, "评论"), "\n                "), "\n            " ];                                                             // 153
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 154
      return Spacebars.call(view.lookup("comments"));                                                                  // 155
    }, function() {                                                                                                    // 156
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 157
        "class": "postTitle"                                                                                           // 158
      }, HTML.A({                                                                                                      // 159
        href: "/self",                                                                                                 // 160
        id: "toViewOther"                                                                                              // 161
      }, Blaze.View("lookup:user.username", function() {                                                               // 162
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 163
      })), " ", Blaze.If(function() {                                                                                  // 164
        return Spacebars.call(view.lookup("to"));                                                                      // 165
      }, function() {                                                                                                  // 166
        return HTML.SPAN({                                                                                             // 167
          style: "color:black;"                                                                                        // 168
        }, "回复");                                                                                                      // 169
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 170
        return Spacebars.mustache(view.lookup("to"));                                                                  // 171
      })), " :", HTML.BUTTON({                                                                                         // 172
        id: "displayCommnetButton",                                                                                    // 173
        type: "button",                                                                                                // 174
        "class": "btn btn-link"                                                                                        // 175
      }, Blaze.View("lookup:post", function() {                                                                        // 176
        return Spacebars.mustache(view.lookup("post"));                                                                // 177
      }))), "\n                ", HTML.P({                                                                             // 178
        style: "display:none;",                                                                                        // 179
        id: function() {                                                                                               // 180
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 181
        },                                                                                                             // 182
        "class": "commnetP"                                                                                            // 183
      }, "\n                ", Blaze.If(function() {                                                                   // 184
        return Spacebars.call(view.lookup("currentUser"));                                                             // 185
      }, function() {                                                                                                  // 186
        return [ "\n                    ", HTML.INPUT({                                                                // 187
          type: "text",                                                                                                // 188
          "class": "span8",                                                                                            // 189
          id: function() {                                                                                             // 190
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 191
          }                                                                                                            // 192
        }), "\n                    ", HTML.BUTTON({                                                                    // 193
          id: "commnetSubmitToCommnet",                                                                                // 194
          "class": "btn btn-success"                                                                                   // 195
        }, "回复"), "\n                " ];                                                                              // 196
      }), "\n                "), "\n            " ];                                                                   // 197
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 198
  }) ];                                                                                                                // 199
}));                                                                                                                   // 200
                                                                                                                       // 201
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
    }(),                                                                                                               //
    comments: function () {                                                                                            // 146
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 147
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 151
    self: function () {                                                                                                // 152
        function self() {                                                                                              //
            if (!localStorage.getItem("targetUserId")) {                                                               // 153
                localStorage.setItem("targetUserId", _meteor.Meteor.userId());                                         // 154
            }                                                                                                          //
            return UserInfo.find({ "user._id": localStorage.getItem("targetUserId") });;                               // 156
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    isFriend: function () {                                                                                            // 158
        function isFriend() {                                                                                          //
            if (!UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": localStorage.getItem("targetUserId") })) {
                return true;                                                                                           // 160
            } else {                                                                                                   //
                return false;                                                                                          // 162
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return isFriend;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 165
        function posts() {                                                                                             //
            var otherPost = Posts.find({ "super": 0, "user._id": localStorage.getItem("targetUserId") }, { sort: { time: -1 } });
            localStorage.setItem("targetUserId", _meteor.Meteor.userId());                                             // 167
            return otherPost;                                                                                          // 168
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 170
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 171
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.helpers({                                                                                         // 175
    collections: function () {                                                                                         // 176
        function collections() {                                                                                       //
            return Posts.find({ "super": 0, "collectioners": _meteor.Meteor.userId() }, { sort: { time: -1 } });       // 177
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 179
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 180
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 184
    friendToday: function () {                                                                                         // 185
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 186
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { time: -1 } });                            // 187
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
//-------------------------------- Helpers End ---------------------------------------                                 //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 193
    Backbone.history.start({ pushState: true });                                                                       // 194
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 197
    routes: {                                                                                                          // 198
        "": "index",                                                                                                   // 199
        "login": "login",                                                                                              // 200
        "reg": "reg",                                                                                                  // 201
        "logout": "logout",                                                                                            // 202
        "friend": "friend",                                                                                            // 203
        "lists": "lists",                                                                                              // 204
        "self": "self",                                                                                                // 205
        "collections": "collections"                                                                                   // 206
    },                                                                                                                 //
    index: function () {                                                                                               // 208
        function index() {                                                                                             // 208
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 211
        function friend() {                                                                                            // 211
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 214
        function lists() {                                                                                             // 214
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 217
        function self() {                                                                                              // 217
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    collections: function () {                                                                                         // 220
        function collections() {                                                                                       // 220
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "", collections: "active" });
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }(),                                                                                                               //
    login: function () {                                                                                               // 223
        function login() {                                                                                             // 223
            if (_meteor.Meteor.userId()) {                                                                             // 224
                this.navigate("/", true);                                                                              // 225
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 226
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 230
        function reg() {                                                                                               // 230
            if (_meteor.Meteor.userId()) {                                                                             // 231
                this.navigate("/", true);                                                                              // 232
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 233
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 237
        function logout() {                                                                                            // 237
            if (_meteor.Meteor.userId()) {                                                                             // 238
                _meteor.Meteor.logout();                                                                               // 239
                this.navigate("/", true);                                                                              // 240
                Session.set("info", { success: "登出成功", error: "" });                                                   // 241
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 242
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 244
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 245
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 248
        function redirect(url) {                                                                                       // 248
            this.navigate(url, true);                                                                                  // 249
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 252
                                                                                                                       //
//------------------------------- events start ------------------------------                                          //
                                                                                                                       //
Template.reg.events({                                                                                                  // 256
    'click #submit': function () {                                                                                     // 257
        function clickSubmit(event) {                                                                                  // 257
            event.preventDefault();                                                                                    // 258
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 259
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 260
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 262
            var $password = $("#password").val();                                                                      // 263
            var $password_repeat = $("#password-repeat").val();                                                        // 264
            var isAdmin = false;                                                                                       // 265
            if ($username == "admin") {                                                                                // 266
                isAdmin = true;                                                                                        // 267
            }                                                                                                          //
            if ($username.length >= 11) {                                                                              // 269
                Session.set("info", { success: "", error: "用户名长度最大为10" });                                             // 270
                return;                                                                                                // 271
            }                                                                                                          //
            if ($password.length === 0 || $username.length === 0) {                                                    // 273
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 274
                return;                                                                                                // 275
            }                                                                                                          //
                                                                                                                       //
            if ($password !== $password_repeat) {                                                                      // 278
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 279
                return;                                                                                                // 280
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 282
                username: $username,                                                                                   // 283
                password: $password }, function (err) {                                                                // 284
                if (err) {                                                                                             // 286
                    Session.set("info", { success: "", error: "注册失败,用户名已存在或其他未知原因" });                                 // 287
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 289
                    UserInfo.insert({                                                                                  // 290
                        user: _meteor.Meteor.user(),                                                                   // 291
                        isAdmin: isAdmin,                                                                              // 292
                        collections: [],                                                                               // 293
                        totalScore: 0,                                                                                 // 294
                        todayScore: 0,                                                                                 // 295
                        totalLike: 0,                                                                                  // 296
                        totalObject: 0,                                                                                // 297
                        totalCollection: 0,                                                                            // 298
                        totalPost: 0,                                                                                  // 299
                        totalFriend: 1,                                                                                // 300
                        Friends: [_meteor.Meteor.userId()],                                                            // 301
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 302
                        time: new Date()                                                                               // 303
                    });                                                                                                //
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                   // 305
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 306
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 314
    'click #submit': function () {                                                                                     // 315
        function clickSubmit(event) {                                                                                  // 315
            event.preventDefault();                                                                                    // 316
            var $username = $("#username").val();                                                                      // 317
            var $password = $("#password").val();                                                                      // 318
            if ($password.length === 0 || $username.length === 0) {                                                    // 319
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 320
                return;                                                                                                // 321
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 323
                if (err) {                                                                                             // 324
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 325
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 327
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 328
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 329
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 330
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 331
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 341
    'click #submit': function () {                                                                                     // 342
        function clickSubmit(event) {                                                                                  // 342
            event.preventDefault();                                                                                    // 343
            var $post = $("#post").val();                                                                              // 344
            if ($post.length === 0 || $post.length >= 300) {                                                           // 345
                Session.set("info", { success: "", error: "请将字数限制在1-300字以内" });                                        // 346
                return;                                                                                                // 347
            }                                                                                                          //
            Posts.insert({                                                                                             // 349
                user: _meteor.Meteor.user(),                                                                           // 350
                post: $post,                                                                                           // 351
                "super": 0,                                                                                            // 352
                to: false,                                                                                             // 353
                like: 0,                                                                                               // 354
                Likers: [],                                                                                            // 355
                object: 0,                                                                                             // 356
                Objecters: [],                                                                                         // 357
                totalCollection: 0,                                                                                    // 358
                collectioners: [],                                                                                     // 359
                top: false,                                                                                            // 360
                score: 0,                                                                                              // 361
                isGetImage: isGetImage,                                                                                // 362
                isGetAudio: isGetAudio,                                                                                // 363
                isGetVideo: isGetVideo,                                                                                // 364
                captureImageId: captureImageId,                                                                        // 365
                captureAudioId: captureAudioId,                                                                        // 366
                captureVideoId: captureVideoId,                                                                        // 367
                time: new Date() }, function (err) {                                                                   // 368
                if (err) {                                                                                             // 370
                    Session.set("info", { success: "", error: "发表失败" });                                               // 371
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 373
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 374
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 380
                }                                                                                                      //
            });                                                                                                        //
            isGetImage = false;                                                                                        // 384
            isGetAudio = false;                                                                                        // 385
            isGetVideo = false;                                                                                        // 386
            captureImageId = false;                                                                                    // 387
            captureAudioId = false;                                                                                    // 388
            captureVideoId = false;                                                                                    // 389
            UserInfo.update({ "_id": _meteor.Meteor.userId() }, { $inc: { "totalPost": 1 } }, false, true);            // 390
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 395
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 397
        function clickCommnetSubmit(event) {                                                                           // 397
            event.preventDefault();                                                                                    // 398
            var thisId = "#" + this._id;                                                                               // 399
            var $comment = $("#" + this._id).val();                                                                    // 400
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 401
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 402
                scroll(0, 0);                                                                                          // 403
                return;                                                                                                // 404
            }                                                                                                          //
            Posts.insert({                                                                                             // 406
                user: _meteor.Meteor.user(),                                                                           // 407
                post: $comment,                                                                                        // 408
                "super": this._id,                                                                                     // 409
                to: false,                                                                                             // 410
                time: new Date() }, function (err) {                                                                   // 411
                if (err) {                                                                                             // 413
                    Session.set("info", { success: "", error: "评论失败" });                                               // 414
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 416
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 417
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 423
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 428
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 430
        function clickCommnetSubmitToCommnet(event) {                                                                  // 430
            event.preventDefault();                                                                                    // 431
            var thisId = "#" + this._id;                                                                               // 432
            var $commentTo = $("#" + this._id).val();                                                                  // 433
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 434
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 435
                scroll(0, 0);                                                                                          // 436
                return;                                                                                                // 437
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 439
            Posts.insert({                                                                                             // 440
                user: _meteor.Meteor.user(),                                                                           // 441
                post: $commentTo,                                                                                      // 442
                "super": this["super"],                                                                                // 443
                to: userName,                                                                                          // 444
                time: new Date() }, function (err) {                                                                   // 445
                if (err) {                                                                                             // 447
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 448
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 450
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 451
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 457
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 461
            $(".commnetP").css("display", "none");                                                                     // 462
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 464
        function clickDisplayCommnetButton(event) {                                                                    // 464
            event.preventDefault();                                                                                    // 465
            var thisId = "#" + "p" + this._id;                                                                         // 466
            $(".commnetP").css("display", "none");                                                                     // 467
            $(thisId).css("display", "block");                                                                         // 468
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 470
        function clickToViewOther(event) {                                                                             // 470
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 472
            console.log(_meteor.Meteor.userId());                                                                      // 473
            console.log(targetUserId);                                                                                 // 474
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 476
        function clickAddFriend(event) {                                                                               // 476
            event.preventDefault();                                                                                    // 477
            var $friendId = this.user._id;                                                                             // 478
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 479
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 480
                scroll(0, 0);                                                                                          // 481
                return;                                                                                                // 482
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 485
            UserInfo.update({                                                                                          // 486
                "_id": userInfoId                                                                                      // 487
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 489
                $inc: { "totalFriend": 1 }                                                                             // 490
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 494
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 495
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 497
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 498
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 508
        function clickAddCollection(event) {                                                                           // 508
            event.preventDefault();                                                                                    // 509
            var $PostId = this._id;                                                                                    // 510
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 511
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 512
                scroll(0, 0);                                                                                          // 513
                return;                                                                                                // 514
            }                                                                                                          //
            Posts.update({                                                                                             // 516
                "_id": this._id                                                                                        // 517
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 519
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 520
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 524
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 525
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 527
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 528
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 529
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 537
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 538
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 545
        function clickLikePost(event) {                                                                                // 545
            event.preventDefault();                                                                                    // 546
            var thisId = this._id;                                                                                     // 547
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 548
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 549
                scroll(0, 0);                                                                                          // 550
                return;                                                                                                // 551
            }                                                                                                          //
            Posts.update({                                                                                             // 553
                "_id": this._id                                                                                        // 554
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 556
                $inc: { "like": 1, "score": 10 }                                                                       // 557
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 561
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 562
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 564
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 565
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 566
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 574
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 575
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 581
        function clickObjectPost(event) {                                                                              // 581
            event.preventDefault();                                                                                    // 582
            var thisId = this._id;                                                                                     // 583
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 584
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 585
                scroll(0, 0);                                                                                          // 586
                return;                                                                                                // 587
            }                                                                                                          //
            Posts.update({                                                                                             // 589
                "_id": this._id                                                                                        // 590
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 592
                $inc: { "object": 1, "score": -8 }                                                                     // 593
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 597
                    Session.set("info", { success: "", error: "异议无效" });                                               // 598
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 600
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 601
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 602
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 610
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 611
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 617
        function clickTopPost(event) {                                                                                 // 617
            event.preventDefault();                                                                                    // 618
            if (_meteor.Meteor.user().username != "admin") {                                                           // 619
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 620
                scroll(0, 0);                                                                                          // 621
                return;                                                                                                // 622
            }                                                                                                          //
            Posts.update({                                                                                             // 624
                "_id": this._id                                                                                        // 625
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 627
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 631
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 632
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 634
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 635
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 645
        function clickUntopPost(event) {                                                                               // 645
            event.preventDefault();                                                                                    // 646
            if (_meteor.Meteor.user().username != "admin") {                                                           // 647
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 648
                scroll(0, 0);                                                                                          // 649
                return;                                                                                                // 650
            }                                                                                                          //
            Posts.update({                                                                                             // 652
                "_id": this._id                                                                                        // 653
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 655
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 659
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 660
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 662
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 667
        function clickGetImage(event) {                                                                                // 667
            event.preventDefault();                                                                                    // 668
            navigator.device.capture.captureImage(captureImageSuccess, captureError, { limit: 1 });                    // 669
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 671
        function clickGetAudio(event) {                                                                                // 671
            event.preventDefault();                                                                                    // 672
            navigator.device.capture.captureAudio(captureAudioSuccess, captureError, { limit: 1 });                    // 673
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 675
        function clickGetVideo(event) {                                                                                // 675
            event.preventDefault();                                                                                    // 676
            navigator.device.capture.captureVideo(captureVideoSuccess, captureError, { limit: 1 });                    // 677
        }                                                                                                              //
                                                                                                                       //
        return clickGetVideo;                                                                                          //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.events({                                                                                          // 681
    'click #commnetSubmit': function () {                                                                              // 682
        function clickCommnetSubmit(event) {                                                                           // 682
            event.preventDefault();                                                                                    // 683
            var thisId = "#" + this._id;                                                                               // 684
            var $comment = $("#" + this._id).val();                                                                    // 685
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 686
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 687
                scroll(0, 0);                                                                                          // 688
                return;                                                                                                // 689
            }                                                                                                          //
            Posts.insert({                                                                                             // 691
                user: _meteor.Meteor.user(),                                                                           // 692
                post: $comment,                                                                                        // 693
                "super": this._id,                                                                                     // 694
                to: false,                                                                                             // 695
                time: new Date() }, function (err) {                                                                   // 696
                if (err) {                                                                                             // 698
                    Session.set("info", { success: "", error: "评论失败" });                                               // 699
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 701
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 702
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 708
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 713
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 715
        function clickCommnetSubmitToCommnet(event) {                                                                  // 715
            event.preventDefault();                                                                                    // 716
            var thisId = "#" + this._id;                                                                               // 717
            var $commentTo = $("#" + this._id).val();                                                                  // 718
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 719
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 720
                scroll(0, 0);                                                                                          // 721
                return;                                                                                                // 722
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 724
            Posts.insert({                                                                                             // 725
                user: _meteor.Meteor.user(),                                                                           // 726
                post: $commentTo,                                                                                      // 727
                "super": this["super"],                                                                                // 728
                to: userName,                                                                                          // 729
                time: new Date() }, function (err) {                                                                   // 730
                if (err) {                                                                                             // 732
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 733
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 735
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 736
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 742
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 746
            $(".commnetP").css("display", "none");                                                                     // 747
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 749
        function clickDisplayCommnetButton(event) {                                                                    // 749
            event.preventDefault();                                                                                    // 750
            var thisId = "#" + "p" + this._id;                                                                         // 751
            $(".commnetP").css("display", "none");                                                                     // 752
            $(thisId).css("display", "block");                                                                         // 753
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 755
        function clickToViewOther(event) {                                                                             // 755
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 757
            console.log(_meteor.Meteor.userId());                                                                      // 758
            console.log(targetUserId);                                                                                 // 759
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 761
        function clickAddFriend(event) {                                                                               // 761
            event.preventDefault();                                                                                    // 762
            var $friendId = this.user._id;                                                                             // 763
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 764
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 765
                scroll(0, 0);                                                                                          // 766
                return;                                                                                                // 767
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 770
            UserInfo.update({                                                                                          // 771
                "_id": userInfoId                                                                                      // 772
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 774
                $inc: { "totalFriend": 1 }                                                                             // 775
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 779
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 780
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 782
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 783
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 793
        function clickAddCollection(event) {                                                                           // 793
            event.preventDefault();                                                                                    // 794
            var $PostId = this._id;                                                                                    // 795
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 796
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 797
                scroll(0, 0);                                                                                          // 798
                return;                                                                                                // 799
            }                                                                                                          //
            Posts.update({                                                                                             // 801
                "_id": this._id                                                                                        // 802
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 804
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 805
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 809
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 810
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 812
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 813
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 814
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 822
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 823
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 830
        function clickLikePost(event) {                                                                                // 830
            event.preventDefault();                                                                                    // 831
            var thisId = this._id;                                                                                     // 832
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 833
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 834
                scroll(0, 0);                                                                                          // 835
                return;                                                                                                // 836
            }                                                                                                          //
            Posts.update({                                                                                             // 838
                "_id": this._id                                                                                        // 839
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 841
                $inc: { "like": 1, "score": 10 }                                                                       // 842
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 846
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 847
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 849
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 850
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 851
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 859
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 860
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 866
        function clickObjectPost(event) {                                                                              // 866
            event.preventDefault();                                                                                    // 867
            var thisId = this._id;                                                                                     // 868
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 869
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 870
                scroll(0, 0);                                                                                          // 871
                return;                                                                                                // 872
            }                                                                                                          //
            Posts.update({                                                                                             // 874
                "_id": this._id                                                                                        // 875
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 877
                $inc: { "object": 1, "score": -8 }                                                                     // 878
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 882
                    Session.set("info", { success: "", error: "异议无效" });                                               // 883
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 885
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 886
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 887
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 895
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 896
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }()                                                                                                                //
});                                                                                                                    //
Template.self.events({                                                                                                 // 903
    'click #commnetSubmit': function () {                                                                              // 904
        function clickCommnetSubmit(event) {                                                                           // 904
            event.preventDefault();                                                                                    // 905
            var thisId = "#" + this._id;                                                                               // 906
            var $comment = $("#" + this._id).val();                                                                    // 907
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 908
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 909
                scroll(0, 0);                                                                                          // 910
                return;                                                                                                // 911
            }                                                                                                          //
            Posts.insert({                                                                                             // 913
                user: _meteor.Meteor.user(),                                                                           // 914
                post: $comment,                                                                                        // 915
                "super": this._id,                                                                                     // 916
                to: false,                                                                                             // 917
                time: new Date() }, function (err) {                                                                   // 918
                if (err) {                                                                                             // 920
                    Session.set("info", { success: "", error: "评论失败" });                                               // 921
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 923
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 924
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 930
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 935
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 937
        function clickCommnetSubmitToCommnet(event) {                                                                  // 937
            event.preventDefault();                                                                                    // 938
            var thisId = "#" + this._id;                                                                               // 939
            var $commentTo = $("#" + this._id).val();                                                                  // 940
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 941
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 942
                scroll(0, 0);                                                                                          // 943
                return;                                                                                                // 944
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 946
            Posts.insert({                                                                                             // 947
                user: _meteor.Meteor.user(),                                                                           // 948
                post: $commentTo,                                                                                      // 949
                "super": this["super"],                                                                                // 950
                to: userName,                                                                                          // 951
                time: new Date() }, function (err) {                                                                   // 952
                if (err) {                                                                                             // 954
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 955
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 957
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 958
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 964
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 968
            $(".commnetP").css("display", "none");                                                                     // 969
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 971
        function clickDisplayCommnetButton(event) {                                                                    // 971
            event.preventDefault();                                                                                    // 972
            var thisId = "#" + "p" + this._id;                                                                         // 973
            $(".commnetP").css("display", "none");                                                                     // 974
            $(thisId).css("display", "block");                                                                         // 975
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 977
        function clickToViewOther(event) {                                                                             // 977
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 979
            console.log(_meteor.Meteor.userId());                                                                      // 980
            console.log(targetUserId);                                                                                 // 981
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 983
        function clickAddFriend(event) {                                                                               // 983
            event.preventDefault();                                                                                    // 984
            var $friendId = this.user._id;                                                                             // 985
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 986
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 987
                scroll(0, 0);                                                                                          // 988
                return;                                                                                                // 989
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 992
            UserInfo.update({                                                                                          // 993
                "_id": userInfoId                                                                                      // 994
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 996
                $inc: { "totalFriend": 1 }                                                                             // 997
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 1001
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 1002
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 1004
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1005
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 1015
        function clickAddCollection(event) {                                                                           // 1015
            event.preventDefault();                                                                                    // 1016
            var $PostId = this._id;                                                                                    // 1017
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 1018
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 1019
                scroll(0, 0);                                                                                          // 1020
                return;                                                                                                // 1021
            }                                                                                                          //
            Posts.update({                                                                                             // 1023
                "_id": this._id                                                                                        // 1024
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 1026
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 1027
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1031
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 1032
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 1034
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1035
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1036
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 1044
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 1045
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 1052
        function clickLikePost(event) {                                                                                // 1052
            event.preventDefault();                                                                                    // 1053
            var thisId = this._id;                                                                                     // 1054
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 1055
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 1056
                scroll(0, 0);                                                                                          // 1057
                return;                                                                                                // 1058
            }                                                                                                          //
            Posts.update({                                                                                             // 1060
                "_id": this._id                                                                                        // 1061
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 1063
                $inc: { "like": 1, "score": 10 }                                                                       // 1064
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1068
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 1069
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 1071
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1072
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1073
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1081
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 1082
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 1088
        function clickObjectPost(event) {                                                                              // 1088
            event.preventDefault();                                                                                    // 1089
            var thisId = this._id;                                                                                     // 1090
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 1091
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 1092
                scroll(0, 0);                                                                                          // 1093
                return;                                                                                                // 1094
            }                                                                                                          //
            Posts.update({                                                                                             // 1096
                "_id": this._id                                                                                        // 1097
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 1099
                $inc: { "object": 1, "score": -8 }                                                                     // 1100
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1104
                    Session.set("info", { success: "", error: "异议无效" });                                               // 1105
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 1107
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1108
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1109
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1117
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 1118
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.events({                                                                                                // 1126
    'click #commnetSubmit': function () {                                                                              // 1127
        function clickCommnetSubmit(event) {                                                                           // 1127
            event.preventDefault();                                                                                    // 1128
            var thisId = "#" + this._id;                                                                               // 1129
            var $comment = $("#" + this._id).val();                                                                    // 1130
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 1131
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 1132
                scroll(0, 0);                                                                                          // 1133
                return;                                                                                                // 1134
            }                                                                                                          //
            Posts.insert({                                                                                             // 1136
                user: _meteor.Meteor.user(),                                                                           // 1137
                post: $comment,                                                                                        // 1138
                "super": this._id,                                                                                     // 1139
                to: false,                                                                                             // 1140
                time: new Date() }, function (err) {                                                                   // 1141
                if (err) {                                                                                             // 1143
                    Session.set("info", { success: "", error: "评论失败" });                                               // 1144
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 1146
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1147
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 1153
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 1158
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 1160
        function clickCommnetSubmitToCommnet(event) {                                                                  // 1160
            event.preventDefault();                                                                                    // 1161
            var thisId = "#" + this._id;                                                                               // 1162
            var $commentTo = $("#" + this._id).val();                                                                  // 1163
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 1164
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 1165
                scroll(0, 0);                                                                                          // 1166
                return;                                                                                                // 1167
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 1169
            Posts.insert({                                                                                             // 1170
                user: _meteor.Meteor.user(),                                                                           // 1171
                post: $commentTo,                                                                                      // 1172
                "super": this["super"],                                                                                // 1173
                to: userName,                                                                                          // 1174
                time: new Date() }, function (err) {                                                                   // 1175
                if (err) {                                                                                             // 1177
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 1178
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 1180
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1181
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 1187
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 1191
            $(".commnetP").css("display", "none");                                                                     // 1192
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 1194
        function clickDisplayCommnetButton(event) {                                                                    // 1194
            event.preventDefault();                                                                                    // 1195
            var thisId = "#" + "p" + this._id;                                                                         // 1196
            $(".commnetP").css("display", "none");                                                                     // 1197
            $(thisId).css("display", "block");                                                                         // 1198
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 1200
        function clickToViewOther(event) {                                                                             // 1200
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 1202
            console.log(_meteor.Meteor.userId());                                                                      // 1203
            console.log(targetUserId);                                                                                 // 1204
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 1206
        function clickAddFriend(event) {                                                                               // 1206
            event.preventDefault();                                                                                    // 1207
            var $friendId = this.user._id;                                                                             // 1208
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 1209
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 1210
                scroll(0, 0);                                                                                          // 1211
                return;                                                                                                // 1212
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 1215
            UserInfo.update({                                                                                          // 1216
                "_id": userInfoId                                                                                      // 1217
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 1219
                $inc: { "totalFriend": 1 }                                                                             // 1220
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 1224
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 1225
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 1227
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1228
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 1238
        function clickAddCollection(event) {                                                                           // 1238
            event.preventDefault();                                                                                    // 1239
            var $PostId = this._id;                                                                                    // 1240
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 1241
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 1242
                scroll(0, 0);                                                                                          // 1243
                return;                                                                                                // 1244
            }                                                                                                          //
            Posts.update({                                                                                             // 1246
                "_id": this._id                                                                                        // 1247
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 1249
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 1250
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1254
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 1255
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 1257
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1258
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1259
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 1267
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 1268
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 1275
        function clickLikePost(event) {                                                                                // 1275
            event.preventDefault();                                                                                    // 1276
            var thisId = this._id;                                                                                     // 1277
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 1278
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 1279
                scroll(0, 0);                                                                                          // 1280
                return;                                                                                                // 1281
            }                                                                                                          //
            Posts.update({                                                                                             // 1283
                "_id": this._id                                                                                        // 1284
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 1286
                $inc: { "like": 1, "score": 10 }                                                                       // 1287
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1291
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 1292
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 1294
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1295
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1296
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1304
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 1305
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 1311
        function clickObjectPost(event) {                                                                              // 1311
            event.preventDefault();                                                                                    // 1312
            var thisId = this._id;                                                                                     // 1313
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 1314
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 1315
                scroll(0, 0);                                                                                          // 1316
                return;                                                                                                // 1317
            }                                                                                                          //
            Posts.update({                                                                                             // 1319
                "_id": this._id                                                                                        // 1320
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 1322
                $inc: { "object": 1, "score": -8 }                                                                     // 1323
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1327
                    Session.set("info", { success: "", error: "异议无效" });                                               // 1328
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 1330
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1331
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1332
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1340
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 1341
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.events({                                                                                               // 1349
    'click #deleteFriend': function () {                                                                               // 1350
        function clickDeleteFriend(event) {                                                                            // 1350
            event.preventDefault();                                                                                    // 1351
            var $friendId = this.user._id;                                                                             // 1352
            if (!UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                    // 1353
                Session.set("info", { success: "", error: "错误：此好友不存在" });                                              // 1354
                scroll(0, 0);                                                                                          // 1355
                return;                                                                                                // 1356
            }                                                                                                          //
            if ($friendId == _meteor.Meteor.userId()) {                                                                // 1358
                Session.set("info", { success: "", error: "错误：不能删除自己" });                                              // 1359
                scroll(0, 0);                                                                                          // 1360
                return;                                                                                                // 1361
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 1364
            UserInfo.update({                                                                                          // 1365
                "_id": userInfoId                                                                                      // 1366
            }, {                                                                                                       //
                $pull: { "Friends": $friendId },                                                                       // 1368
                $inc: { "totalFriend": -1 }                                                                            // 1369
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 1373
                    Session.set("info", { success: "", error: "删除好友失败" });                                             // 1374
                } else {                                                                                               //
                    Session.set("info", { success: "删除成功", error: "" });                                               // 1376
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1377
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: -50, totalScore: -50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickDeleteFriend;                                                                                      //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 1387
        function clickToViewOther(event) {                                                                             // 1387
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 1389
            console.log(_meteor.Meteor.userId());                                                                      // 1390
            console.log(targetUserId);                                                                                 // 1391
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