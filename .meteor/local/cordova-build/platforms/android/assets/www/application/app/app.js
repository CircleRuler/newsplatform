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
    }, "收藏")), "\n                            \n                        " ];                                           // 52
  }, function() {                                                                                                      // 53
    return [ "\n                            ", HTML.LI({                                                               // 54
      "class": function() {                                                                                            // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "login"));                                      // 56
      }                                                                                                                // 57
    }, HTML.A({                                                                                                        // 58
      href: "/login"                                                                                                   // 59
    }, "登入")), "\n                            ", HTML.LI({                                                             // 60
      "class": function() {                                                                                            // 61
        return Spacebars.mustache(Spacebars.dot(view.lookup("active"), "reg"));                                        // 62
      }                                                                                                                // 63
    }, HTML.A({                                                                                                        // 64
      href: "/reg"                                                                                                     // 65
    }, "注册")), "\n                            ", HTML.LI(HTML.A({                                                      // 66
      href: "/logout"                                                                                                  // 67
    }, "登出")), "\n                        " ];                                                                         // 68
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
      style: "text-align:center;",                                                                                     // 11
      enctype: "multipart/form-data"                                                                                   // 12
    }, "\n            ", HTML.DIV({                                                                                    // 13
      "class": "form-group"                                                                                            // 14
    }, "\n                ", HTML.LABEL({                                                                              // 15
      "for": "post"                                                                                                    // 16
    }, "发布新闻"), "\n                ", HTML.TEXTAREA({                                                                  // 17
      "class": "span7",                                                                                                // 18
      id: "post",                                                                                                      // 19
      rows: "2"                                                                                                        // 20
    }), "\n                ", HTML.P({                                                                                 // 21
      "class": "span1",                                                                                                // 22
      style: "visibility:hidden;"                                                                                      // 23
    }, "  nbsp"), "\n                ", HTML.BUTTON({                                                                  // 24
      id: "submit",                                                                                                    // 25
      "class": "btn btn-success btn-large span2 pull-right"                                                            // 26
    }, "发表"), "\n            "), "\n            ", HTML.P("\n                ", HTML.DIV({                             // 27
      "class": "form-group"                                                                                            // 28
    }, "\n                ", HTML.LABEL({                                                                              // 29
      "for": "myFileInput"                                                                                             // 30
    }, "上传图片"), "\n                ", HTML.INPUT({                                                                     // 31
      type: "file",                                                                                                    // 32
      id: "myFileInput",                                                                                               // 33
      accept: "image/png,image/gif,image/jpg",                                                                         // 34
      name: "myFileInput",                                                                                             // 35
      multiple: "multiple"                                                                                             // 36
    }), "\n                "), "\n            "), "\n            ", Blaze.If(function() {                              // 37
      return Spacebars.call(view.lookup("getMediaBtn"));                                                               // 38
    }, function() {                                                                                                    // 39
      return [ "\n            ", HTML.DIV({                                                                            // 40
        "class": "control-group"                                                                                       // 41
      }, "\n                ", HTML.BUTTON({                                                                           // 42
        id: "getAudio",                                                                                                // 43
        "class": "btn btn-default"                                                                                     // 44
      }, "获取录音"), "\n                ", HTML.BUTTON({                                                                  // 45
        id: "getImage",                                                                                                // 46
        "class": "btn btn-default"                                                                                     // 47
      }, "链接图片"), "\n                ", HTML.BUTTON({                                                                  // 48
        id: "getVideo",                                                                                                // 49
        "class": "btn btn-default"                                                                                     // 50
      }, "获取视频"), "\n            "), "\n            " ];                                                               // 51
    }), "\n            \n        "), "\n    " ];                                                                       // 52
  }, function() {                                                                                                      // 53
    return [ "\n        ", HTML.H2("游客无法发布新闻或者评论。请注册或者登陆。"), "\n    " ];                                               // 54
  }), "\n    \n    ", Blaze.Each(function() {                                                                          // 55
    return Spacebars.call(view.lookup("topPosts"));                                                                    // 56
  }, function() {                                                                                                      // 57
    return [ "\n        ", HTML.DIV({                                                                                  // 58
      "class": "center well singlePost"                                                                                // 59
    }, "\n            ", HTML.DIV({                                                                                    // 60
      "class": ""                                                                                                      // 61
    }, "\n                ", HTML.DIV({                                                                                // 62
      "class": "postTitle"                                                                                             // 63
    }, "\n                    ", HTML.H2({                                                                             // 64
      "class": "text-primary span10"                                                                                   // 65
    }, HTML.A({                                                                                                        // 66
      href: "/self",                                                                                                   // 67
      id: "toViewOther"                                                                                                // 68
    }, Blaze.View("lookup:user.username", function() {                                                                 // 69
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 70
    })), "\n                    ", Blaze.If(function() {                                                               // 71
      return Spacebars.call(view.lookup("currentUser"));                                                               // 72
    }, function() {                                                                                                    // 73
      return [ "\n                    ", HTML.BUTTON({                                                                 // 74
        id: "addFriend",                                                                                               // 75
        "class": "btn btn-info"                                                                                        // 76
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 77
        id: "addCollection",                                                                                           // 78
        "class": "btn btn-primary"                                                                                     // 79
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 80
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 81
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 82
        id: "likePost",                                                                                                // 83
        "class": "btn btn-warning"                                                                                     // 84
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 85
        return Spacebars.mustache(view.lookup("like"));                                                                // 86
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 87
        id: "objectPost",                                                                                              // 88
        "class": "btn btn-warning"                                                                                     // 89
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 90
        return Spacebars.mustache(view.lookup("object"));                                                              // 91
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 92
        id: "untopPost",                                                                                               // 93
        "class": "btn btn-danger"                                                                                      // 94
      }, "取消置顶 "), " \n                    " ];                                                                        // 95
    }), "   :\n                    "), "\n                "), "\n                ", HTML.DIV({                         // 96
      "class": "col-xs-3 "                                                                                             // 97
    }), "\n            "), "\n            ", HTML.P({                                                                  // 98
      "class": "muted"                                                                                                 // 99
    }, Blaze.View("lookup:time", function() {                                                                          // 100
      return Spacebars.mustache(view.lookup("time"));                                                                  // 101
    })), "\n            ", HTML.P({                                                                                    // 102
      "class": ""                                                                                                      // 103
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 104
      return Blaze.View("lookup:post", function() {                                                                    // 105
        return Spacebars.mustache(view.lookup("post"));                                                                // 106
      });                                                                                                              // 107
    })), "\n            ", Blaze.If(function() {                                                                       // 108
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 109
    }, function() {                                                                                                    // 110
      return [ "\n            ", Blaze.Each(function() {                                                               // 111
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 113
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 114
          controls: "",                                                                                                // 115
          src: function() {                                                                                            // 116
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 117
          }                                                                                                            // 118
        })), "\n            " ];                                                                                       // 119
      }), "\n            " ];                                                                                          // 120
    }), "\n            ", Blaze.If(function() {                                                                        // 121
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 122
    }, function() {                                                                                                    // 123
      return [ "\n            ", Blaze.Each(function() {                                                               // 124
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 126
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 127
          src: function() {                                                                                            // 128
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 129
          },                                                                                                           // 130
          alt: "",                                                                                                     // 131
          "class": "thumbnail"                                                                                         // 132
        })), "\n            " ];                                                                                       // 133
      }), "\n            " ];                                                                                          // 134
    }), "\n            ", Blaze.If(function() {                                                                        // 135
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 136
    }, function() {                                                                                                    // 137
      return [ "\n            ", Blaze.Each(function() {                                                               // 138
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 140
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 141
          src: function() {                                                                                            // 142
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 143
          }                                                                                                            // 144
        })), "\n            " ];                                                                                       // 145
      }), "\n            " ];                                                                                          // 146
    }), "\n            ", Blaze.If(function() {                                                                        // 147
      return Spacebars.call(view.lookup("currentUser"));                                                               // 148
    }, function() {                                                                                                    // 149
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 150
        type: "text",                                                                                                  // 151
        "class": "span8",                                                                                              // 152
        id: function() {                                                                                               // 153
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 154
        }                                                                                                              // 155
      }), "\n                    ", HTML.BUTTON({                                                                      // 156
        id: "commnetSubmit",                                                                                           // 157
        "class": "btn btn-success"                                                                                     // 158
      }, "评论"), "\n                "), "\n            " ];                                                             // 159
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 160
      return Spacebars.call(view.lookup("comments"));                                                                  // 161
    }, function() {                                                                                                    // 162
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 163
        "class": "postTitle"                                                                                           // 164
      }, HTML.A({                                                                                                      // 165
        href: "/self",                                                                                                 // 166
        id: "toViewOther"                                                                                              // 167
      }, Blaze.View("lookup:user.username", function() {                                                               // 168
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 169
      })), " ", Blaze.If(function() {                                                                                  // 170
        return Spacebars.call(view.lookup("to"));                                                                      // 171
      }, function() {                                                                                                  // 172
        return HTML.SPAN({                                                                                             // 173
          style: "color:black;"                                                                                        // 174
        }, "回复");                                                                                                      // 175
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 176
        return Spacebars.mustache(view.lookup("to"));                                                                  // 177
      })), " : ", HTML.BUTTON({                                                                                        // 178
        id: "displayCommnetButton",                                                                                    // 179
        type: "button",                                                                                                // 180
        "class": "btn btn-link"                                                                                        // 181
      }, Blaze.View("lookup:post", function() {                                                                        // 182
        return Spacebars.mustache(view.lookup("post"));                                                                // 183
      }))), "\n                ", HTML.P({                                                                             // 184
        style: "display:none;",                                                                                        // 185
        id: function() {                                                                                               // 186
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 187
        },                                                                                                             // 188
        "class": "commnetP"                                                                                            // 189
      }, "\n                ", Blaze.If(function() {                                                                   // 190
        return Spacebars.call(view.lookup("currentUser"));                                                             // 191
      }, function() {                                                                                                  // 192
        return [ "\n                    ", HTML.INPUT({                                                                // 193
          type: "text",                                                                                                // 194
          "class": "span8",                                                                                            // 195
          id: function() {                                                                                             // 196
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 197
          }                                                                                                            // 198
        }), "\n                    ", HTML.BUTTON({                                                                    // 199
          id: "commnetSubmitToCommnet",                                                                                // 200
          "class": "btn btn-success"                                                                                   // 201
        }, "回复"), "\n                " ];                                                                              // 202
      }), "\n                "), "\n            " ];                                                                   // 203
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 204
  }), "\n\n    ", Blaze.Each(function() {                                                                              // 205
    return Spacebars.call(view.lookup("posts"));                                                                       // 206
  }, function() {                                                                                                      // 207
    return [ "\n        ", HTML.DIV({                                                                                  // 208
      "class": "center singlePost"                                                                                     // 209
    }, "\n            ", HTML.DIV({                                                                                    // 210
      "class": ""                                                                                                      // 211
    }, "\n                ", HTML.DIV({                                                                                // 212
      "class": "postTitle"                                                                                             // 213
    }, "\n                    ", HTML.H2({                                                                             // 214
      "class": "text-primary span10"                                                                                   // 215
    }, HTML.A({                                                                                                        // 216
      href: "/self",                                                                                                   // 217
      id: "toViewOther"                                                                                                // 218
    }, Blaze.View("lookup:user.username", function() {                                                                 // 219
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                       // 220
    })), "\n                    ", Blaze.If(function() {                                                               // 221
      return Spacebars.call(view.lookup("currentUser"));                                                               // 222
    }, function() {                                                                                                    // 223
      return [ "\n                    ", HTML.BUTTON({                                                                 // 224
        id: "addFriend",                                                                                               // 225
        "class": "btn btn-info"                                                                                        // 226
      }, "加好友"), "\n                    ", HTML.BUTTON({                                                               // 227
        id: "addCollection",                                                                                           // 228
        "class": "btn btn-primary"                                                                                     // 229
      }, "收藏(", Blaze.View("lookup:totalCollection", function() {                                                      // 230
        return Spacebars.mustache(view.lookup("totalCollection"));                                                     // 231
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 232
        id: "likePost",                                                                                                // 233
        "class": "btn btn-warning"                                                                                     // 234
      }, "点赞(", Blaze.View("lookup:like", function() {                                                                 // 235
        return Spacebars.mustache(view.lookup("like"));                                                                // 236
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 237
        id: "objectPost",                                                                                              // 238
        "class": "btn btn-warning"                                                                                     // 239
      }, "异议(", Blaze.View("lookup:object", function() {                                                               // 240
        return Spacebars.mustache(view.lookup("object"));                                                              // 241
      }), ")"), "\n                    ", HTML.BUTTON({                                                                // 242
        id: "topPost",                                                                                                 // 243
        "class": "btn btn-danger"                                                                                      // 244
      }, "置顶 "), "\n                    " ];                                                                           // 245
    }), "    :\n                    "), "\n                "), "\n                ", HTML.DIV({                        // 246
      "class": "col-xs-3 "                                                                                             // 247
    }), "\n            "), "\n            ", HTML.P({                                                                  // 248
      "class": "muted"                                                                                                 // 249
    }, Blaze.View("lookup:time", function() {                                                                          // 250
      return Spacebars.mustache(view.lookup("time"));                                                                  // 251
    })), "\n            ", HTML.P({                                                                                    // 252
      "class": ""                                                                                                      // 253
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {                                                 // 254
      return Blaze.View("lookup:post", function() {                                                                    // 255
        return Spacebars.mustache(view.lookup("post"));                                                                // 256
      });                                                                                                              // 257
    })), "\n            ", Blaze.If(function() {                                                                       // 258
      return Spacebars.call(view.lookup("isGetAudio"));                                                                // 259
    }, function() {                                                                                                    // 260
      return [ "\n            ", Blaze.Each(function() {                                                               // 261
        return Spacebars.dataMustache(view.lookup("displayAudio"), Spacebars.dot(view.lookup("."), "captureAudioId"));
      }, function() {                                                                                                  // 263
        return [ "\n            ", HTML.P(HTML.AUDIO({                                                                 // 264
          controls: "",                                                                                                // 265
          src: function() {                                                                                            // 266
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 267
          }                                                                                                            // 268
        })), "\n            " ];                                                                                       // 269
      }), "\n            " ];                                                                                          // 270
    }), "\n            ", Blaze.If(function() {                                                                        // 271
      return Spacebars.call(view.lookup("isGetImage"));                                                                // 272
    }, function() {                                                                                                    // 273
      return [ "\n            ", Blaze.Each(function() {                                                               // 274
        return Spacebars.dataMustache(view.lookup("displayImage"), Spacebars.dot(view.lookup("."), "captureImageId"));
      }, function() {                                                                                                  // 276
        return [ "\n            ", HTML.P(HTML.IMG({                                                                   // 277
          src: function() {                                                                                            // 278
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 279
          },                                                                                                           // 280
          alt: "",                                                                                                     // 281
          "class": "thumbnail"                                                                                         // 282
        })), "\n            " ];                                                                                       // 283
      }), "\n            " ];                                                                                          // 284
    }), "\n            ", Blaze.If(function() {                                                                        // 285
      return Spacebars.call(view.lookup("isGetVideo"));                                                                // 286
    }, function() {                                                                                                    // 287
      return [ "\n            ", Blaze.Each(function() {                                                               // 288
        return Spacebars.dataMustache(view.lookup("displayVideo"), Spacebars.dot(view.lookup("."), "captureVideoId"));
      }, function() {                                                                                                  // 290
        return [ "\n            ", HTML.P(HTML.VIDEO({                                                                 // 291
          src: function() {                                                                                            // 292
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 293
          }                                                                                                            // 294
        })), "\n            " ];                                                                                       // 295
      }), "\n            " ];                                                                                          // 296
    }), "\n            ", HTML.P({                                                                                     // 297
      "class": "span8 imageBox"                                                                                        // 298
    }, "\n            ", Blaze.If(function() {                                                                         // 299
      return Spacebars.call(view.lookup("isGetLocalImage"));                                                           // 300
    }, function() {                                                                                                    // 301
      return [ " \n            ", Blaze.Each(function() {                                                              // 302
        return Spacebars.dataMustache(view.lookup("displayLocalImage"), Spacebars.dot(view.lookup("."), "localimagesId"));
      }, function() {                                                                                                  // 304
        return [ "\n            ", HTML.A({                                                                            // 305
          href: function() {                                                                                           // 306
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 307
          },                                                                                                           // 308
          target: "_blank"                                                                                             // 309
        }, HTML.P({                                                                                                    // 310
          "class": "ninePhoto"                                                                                         // 311
        }, HTML.IMG({                                                                                                  // 312
          src: function() {                                                                                            // 313
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                         // 314
          },                                                                                                           // 315
          alt: "",                                                                                                     // 316
          "class": "ninePicture"                                                                                       // 317
        }))), "\n            " ];                                                                                      // 318
      }), "\n            " ];                                                                                          // 319
    }), "\n            "), "\n            ", Blaze.If(function() {                                                     // 320
      return Spacebars.call(view.lookup("currentUser"));                                                               // 321
    }, function() {                                                                                                    // 322
      return [ "\n                ", HTML.P("\n                    ", HTML.INPUT({                                     // 323
        type: "text",                                                                                                  // 324
        "class": "span8",                                                                                              // 325
        id: function() {                                                                                               // 326
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                           // 327
        }                                                                                                              // 328
      }), "\n                    ", HTML.BUTTON({                                                                      // 329
        id: "commnetSubmit",                                                                                           // 330
        "class": "btn btn-success"                                                                                     // 331
      }, "评论"), "\n                "), "\n            " ];                                                             // 332
    }), "\n            ", HTML.DIV("\n            ", Blaze.Each(function() {                                           // 333
      return Spacebars.call(view.lookup("comments"));                                                                  // 334
    }, function() {                                                                                                    // 335
      return [ "\n                ", HTML.P(HTML.SPAN({                                                                // 336
        "class": "postTitle"                                                                                           // 337
      }, HTML.A({                                                                                                      // 338
        href: "/self",                                                                                                 // 339
        id: "toViewOther"                                                                                              // 340
      }, Blaze.View("lookup:user.username", function() {                                                               // 341
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 342
      })), " ", Blaze.If(function() {                                                                                  // 343
        return Spacebars.call(view.lookup("to"));                                                                      // 344
      }, function() {                                                                                                  // 345
        return HTML.SPAN({                                                                                             // 346
          style: "color:black;"                                                                                        // 347
        }, "回复");                                                                                                      // 348
      }), " ", Blaze.View("lookup:to", function() {                                                                    // 349
        return Spacebars.mustache(view.lookup("to"));                                                                  // 350
      })), " :", HTML.BUTTON({                                                                                         // 351
        id: "displayCommnetButton",                                                                                    // 352
        type: "button",                                                                                                // 353
        "class": "btn btn-link"                                                                                        // 354
      }, Blaze.View("lookup:post", function() {                                                                        // 355
        return Spacebars.mustache(view.lookup("post"));                                                                // 356
      }))), "\n                ", HTML.P({                                                                             // 357
        style: "display:none;",                                                                                        // 358
        id: function() {                                                                                               // 359
          return [ "p", Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id")) ];                                  // 360
        },                                                                                                             // 361
        "class": "commnetP"                                                                                            // 362
      }, "\n                ", Blaze.If(function() {                                                                   // 363
        return Spacebars.call(view.lookup("currentUser"));                                                             // 364
      }, function() {                                                                                                  // 365
        return [ "\n                    ", HTML.INPUT({                                                                // 366
          type: "text",                                                                                                // 367
          "class": "span8",                                                                                            // 368
          id: function() {                                                                                             // 369
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "_id"));                                         // 370
          }                                                                                                            // 371
        }), "\n                    ", HTML.BUTTON({                                                                    // 372
          id: "commnetSubmitToCommnet",                                                                                // 373
          "class": "btn btn-success"                                                                                   // 374
        }, "回复"), "\n                " ];                                                                              // 375
      }), "\n                "), "\n            " ];                                                                   // 376
    }), "\n            "), "\n        "), "\n    " ];                                                                  // 377
  }) ];                                                                                                                // 378
}));                                                                                                                   // 379
                                                                                                                       // 380
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
var localimagesId = [];                                                                                                // 26
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
    }(),                                                                                                               //
    displayLocalImage: function () {                                                                                   // 137
        function displayLocalImage(id) {                                                                               //
            return LocalImages.find({ "_id": { $in: id } });                                                           // 138
        }                                                                                                              //
                                                                                                                       //
        return displayLocalImage;                                                                                      //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.helpers({                                                                                               // 142
    goodNews: function () {                                                                                            // 143
        function goodNews() {                                                                                          //
            return Posts.find({ "super": 0 }, { sort: { score: -1 }, limit: 10 });                                     // 144
        }                                                                                                              //
                                                                                                                       //
        return goodNews;                                                                                               //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 146
        function lists() {                                                                                             //
            return UserInfo.find({}, { sort: { totalScore: -1 }, limit: 10 });                                         // 147
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 149
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 150
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.helpers({                                                                                                // 154
    self: function () {                                                                                                // 155
        function self() {                                                                                              //
            if (!localStorage.getItem("targetUserId")) {                                                               // 156
                localStorage.setItem("targetUserId", _meteor.Meteor.userId());                                         // 157
            }                                                                                                          //
            return UserInfo.find({ "user._id": localStorage.getItem("targetUserId") });;                               // 159
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    isFriend: function () {                                                                                            // 161
        function isFriend() {                                                                                          //
            if (!UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": localStorage.getItem("targetUserId") })) {
                return true;                                                                                           // 163
            } else {                                                                                                   //
                return false;                                                                                          // 165
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return isFriend;                                                                                               //
    }(),                                                                                                               //
    posts: function () {                                                                                               // 168
        function posts() {                                                                                             //
            var otherPost = Posts.find({ "super": 0, "user._id": localStorage.getItem("targetUserId") }, { sort: { time: -1 } });
            localStorage.setItem("targetUserId", _meteor.Meteor.userId());                                             // 170
            return otherPost;                                                                                          // 171
        }                                                                                                              //
                                                                                                                       //
        return posts;                                                                                                  //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 173
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 174
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.helpers({                                                                                         // 178
    collections: function () {                                                                                         // 179
        function collections() {                                                                                       //
            return Posts.find({ "super": 0, "collectioners": _meteor.Meteor.userId() }, { sort: { time: -1 } });       // 180
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }(),                                                                                                               //
    comments: function () {                                                                                            // 182
        function comments() {                                                                                          //
            return Posts.find({ "super": this._id }, { sort: { time: 1 } });                                           // 183
        }                                                                                                              //
                                                                                                                       //
        return comments;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.helpers({                                                                                              // 187
    friendToday: function () {                                                                                         // 188
        function friendToday() {                                                                                       //
            var Afriend = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() }).Friends;                           // 189
            return UserInfo.find({ "user._id": { $in: Afriend } }, { sort: { time: -1 } });                            // 190
        }                                                                                                              //
                                                                                                                       //
        return friendToday;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
//-------------------------------- Helpers End ---------------------------------------                                 //
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 196
    Backbone.history.start({ pushState: true });                                                                       // 197
});                                                                                                                    //
                                                                                                                       //
var urlRouter = Backbone.Router.extend({                                                                               // 200
    routes: {                                                                                                          // 201
        "": "index",                                                                                                   // 202
        "login": "login",                                                                                              // 203
        "reg": "reg",                                                                                                  // 204
        "logout": "logout",                                                                                            // 205
        "friend": "friend",                                                                                            // 206
        "lists": "lists",                                                                                              // 207
        "self": "self",                                                                                                // 208
        "collections": "collections"                                                                                   // 209
    },                                                                                                                 //
    index: function () {                                                                                               // 211
        function index() {                                                                                             // 211
            Session.set("currentUrl", { index: "active", login: "", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return index;                                                                                                  //
    }(),                                                                                                               //
    friend: function () {                                                                                              // 214
        function friend() {                                                                                            // 214
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "active", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return friend;                                                                                                 //
    }(),                                                                                                               //
    lists: function () {                                                                                               // 217
        function lists() {                                                                                             // 217
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "active", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return lists;                                                                                                  //
    }(),                                                                                                               //
    self: function () {                                                                                                // 220
        function self() {                                                                                              // 220
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "active", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return self;                                                                                                   //
    }(),                                                                                                               //
    collections: function () {                                                                                         // 223
        function collections() {                                                                                       // 223
            Session.set("currentUrl", { index: "", login: "", reg: "", friend: "", lists: "", self: "", collections: "active" });
        }                                                                                                              //
                                                                                                                       //
        return collections;                                                                                            //
    }(),                                                                                                               //
    login: function () {                                                                                               // 226
        function login() {                                                                                             // 226
            if (_meteor.Meteor.userId()) {                                                                             // 227
                this.navigate("/", true);                                                                              // 228
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 229
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "active", reg: "", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return login;                                                                                                  //
    }(),                                                                                                               //
    reg: function () {                                                                                                 // 233
        function reg() {                                                                                               // 233
            if (_meteor.Meteor.userId()) {                                                                             // 234
                this.navigate("/", true);                                                                              // 235
                Session.set("info", { success: "", error: "用户已在线！" });                                                 // 236
            }                                                                                                          //
            Session.set("currentUrl", { index: "", login: "", reg: "active", friend: "", lists: "", self: "", collections: "" });
        }                                                                                                              //
                                                                                                                       //
        return reg;                                                                                                    //
    }(),                                                                                                               //
    logout: function () {                                                                                              // 240
        function logout() {                                                                                            // 240
            if (_meteor.Meteor.userId()) {                                                                             // 241
                _meteor.Meteor.logout();                                                                               // 242
                this.navigate("/", true);                                                                              // 243
                Session.set("info", { success: "登出成功", error: "" });                                                   // 244
                SystemInfo.update({ "_id": "1" }, { $inc: { totalLogin: -1 } });                                       // 245
            } else {                                                                                                   //
                this.navigate("/", true);                                                                              // 247
                Session.set("info", { success: "", error: "用户不在线！" });                                                 // 248
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return logout;                                                                                                 //
    }(),                                                                                                               //
    redirect: function () {                                                                                            // 251
        function redirect(url) {                                                                                       // 251
            this.navigate(url, true);                                                                                  // 252
        }                                                                                                              //
                                                                                                                       //
        return redirect;                                                                                               //
    }()                                                                                                                //
});                                                                                                                    //
Router = new urlRouter();                                                                                              // 255
                                                                                                                       //
//------------------------------- events start ------------------------------                                          //
                                                                                                                       //
Template.reg.events({                                                                                                  // 259
    'click #submit': function () {                                                                                     // 260
        function clickSubmit(event) {                                                                                  // 260
            event.preventDefault();                                                                                    // 261
            if (!SystemInfo.find({ "_id": "1" }, { totalUser: true })['totalUser']) {                                  // 262
                SystemInfo.insert({ "_id": "1", "totalUser": 0, "totalPost": 0, "totalLogin": 0 });                    // 263
            }                                                                                                          //
            var $username = $("#username").val();                                                                      // 265
            var $password = $("#password").val();                                                                      // 266
            var $password_repeat = $("#password-repeat").val();                                                        // 267
            var isAdmin = false;                                                                                       // 268
            if ($username == "admin") {                                                                                // 269
                isAdmin = true;                                                                                        // 270
            }                                                                                                          //
            if ($username.length >= 11) {                                                                              // 272
                Session.set("info", { success: "", error: "用户名长度最大为10" });                                             // 273
                return;                                                                                                // 274
            }                                                                                                          //
            if ($password.length === 0 || $username.length === 0) {                                                    // 276
                Session.set("info", { success: "", error: "用户名或者密码不能为空" });                                            // 277
                return;                                                                                                // 278
            }                                                                                                          //
                                                                                                                       //
            if ($password !== $password_repeat) {                                                                      // 281
                Session.set("info", { success: "", error: "两次输入密码不一致" });                                              // 282
                return;                                                                                                // 283
            }                                                                                                          //
            Accounts.createUser({                                                                                      // 285
                username: $username,                                                                                   // 286
                password: $password }, function (err) {                                                                // 287
                if (err) {                                                                                             // 289
                    Session.set("info", { success: "", error: "注册失败,用户名已存在或其他未知原因" });                                 // 290
                } else {                                                                                               //
                    Session.set("info", { success: "注册成功", error: "" });                                               // 292
                    UserInfo.insert({                                                                                  // 293
                        user: _meteor.Meteor.user(),                                                                   // 294
                        isAdmin: isAdmin,                                                                              // 295
                        collections: [],                                                                               // 296
                        totalScore: 0,                                                                                 // 297
                        todayScore: 0,                                                                                 // 298
                        totalLike: 0,                                                                                  // 299
                        totalObject: 0,                                                                                // 300
                        totalCollection: 0,                                                                            // 301
                        totalPost: 0,                                                                                  // 302
                        totalFriend: 1,                                                                                // 303
                        Friends: [_meteor.Meteor.userId()],                                                            // 304
                        rank: SystemInfo.findOne({ "_id": "1" }, { totalUser: true })["totalUser"],                    // 305
                        time: new Date()                                                                               // 306
                    });                                                                                                //
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalUser": 1 } });                                   // 308
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 309
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.login.events({                                                                                                // 317
    'click #submit': function () {                                                                                     // 318
        function clickSubmit(event) {                                                                                  // 318
            event.preventDefault();                                                                                    // 319
            var $username = $("#username").val();                                                                      // 320
            var $password = $("#password").val();                                                                      // 321
            if ($password.length === 0 || $username.length === 0) {                                                    // 322
                Session.set("info", { success: "", error: "用户名或密码不能为空" });                                             // 323
                return;                                                                                                // 324
            }                                                                                                          //
            _meteor.Meteor.loginWithPassword($username, $password, function (err) {                                    // 326
                if (err) {                                                                                             // 327
                    Session.set("info", { success: "", error: "登陆失败！用户名与密码不匹配。" });                                    // 328
                } else {                                                                                               //
                    Router.redirect("/");                                                                              // 330
                    SystemInfo.update({ "_id": "1" }, { $inc: { "totalLogin": 1 } });                                  // 331
                    Session.set("info", { success: "登陆成功", error: "" });                                               // 332
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 333
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 1, totalScore: 1 } }, false, true);   // 334
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.index.events({                                                                                                // 344
    'click #submit': function () {                                                                                     // 345
        function clickSubmit(event) {                                                                                  // 345
            event.preventDefault();                                                                                    // 346
            var $post = $("#post").val();                                                                              // 347
            if ($post.length === 0 || $post.length >= 300) {                                                           // 348
                Session.set("info", { success: "", error: "请将字数限制在1-300字以内" });                                        // 349
                return;                                                                                                // 350
            }                                                                                                          //
            Posts.insert({                                                                                             // 352
                user: _meteor.Meteor.user(),                                                                           // 353
                post: $post,                                                                                           // 354
                "super": 0,                                                                                            // 355
                to: false,                                                                                             // 356
                like: 0,                                                                                               // 357
                Likers: [],                                                                                            // 358
                object: 0,                                                                                             // 359
                Objecters: [],                                                                                         // 360
                totalCollection: 0,                                                                                    // 361
                collectioners: [],                                                                                     // 362
                top: false,                                                                                            // 363
                score: 0,                                                                                              // 364
                isGetImage: isGetImage,                                                                                // 365
                isGetAudio: isGetAudio,                                                                                // 366
                isGetVideo: isGetVideo,                                                                                // 367
                isGetLocalImage: isGetLocalImage,                                                                      // 368
                captureImageId: captureImageId,                                                                        // 369
                captureAudioId: captureAudioId,                                                                        // 370
                captureVideoId: captureVideoId,                                                                        // 371
                localimagesId: localimagesId,                                                                          // 372
                time: new Date() }, function (err) {                                                                   // 373
                if (err) {                                                                                             // 375
                    Session.set("info", { success: "", error: "发表失败" });                                               // 376
                } else {                                                                                               //
                    Session.set("info", { success: "发表成功", error: "" });                                               // 378
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 379
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 100, totalScore: 100 } }, false, true);
                    $("#post").val("");                                                                                // 385
                }                                                                                                      //
            });                                                                                                        //
            isGetImage = false;                                                                                        // 389
            isGetAudio = false;                                                                                        // 390
            isGetVideo = false;                                                                                        // 391
            isGetLocalImage = false;                                                                                   // 392
            captureImageId = false;                                                                                    // 393
            captureAudioId = false;                                                                                    // 394
            captureVideoId = false;                                                                                    // 395
            localimagesId = [];                                                                                        // 396
            UserInfo.update({ "_id": _meteor.Meteor.userId() }, { $inc: { "totalPost": 1 } }, false, true);            // 397
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 402
        }                                                                                                              //
                                                                                                                       //
        return clickSubmit;                                                                                            //
    }(),                                                                                                               //
    'click #commnetSubmit': function () {                                                                              // 404
        function clickCommnetSubmit(event) {                                                                           // 404
            event.preventDefault();                                                                                    // 405
            var thisId = "#" + this._id;                                                                               // 406
            var $comment = $("#" + this._id).val();                                                                    // 407
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 408
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 409
                scroll(0, 0);                                                                                          // 410
                return;                                                                                                // 411
            }                                                                                                          //
            Posts.insert({                                                                                             // 413
                user: _meteor.Meteor.user(),                                                                           // 414
                post: $comment,                                                                                        // 415
                "super": this._id,                                                                                     // 416
                to: false,                                                                                             // 417
                time: new Date() }, function (err) {                                                                   // 418
                if (err) {                                                                                             // 420
                    Session.set("info", { success: "", error: "评论失败" });                                               // 421
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 423
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 424
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 430
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 435
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 437
        function clickCommnetSubmitToCommnet(event) {                                                                  // 437
            event.preventDefault();                                                                                    // 438
            var thisId = "#" + this._id;                                                                               // 439
            var $commentTo = $("#" + this._id).val();                                                                  // 440
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 441
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 442
                scroll(0, 0);                                                                                          // 443
                return;                                                                                                // 444
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 446
            Posts.insert({                                                                                             // 447
                user: _meteor.Meteor.user(),                                                                           // 448
                post: $commentTo,                                                                                      // 449
                "super": this["super"],                                                                                // 450
                to: userName,                                                                                          // 451
                time: new Date() }, function (err) {                                                                   // 452
                if (err) {                                                                                             // 454
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 455
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 457
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 458
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 464
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 468
            $(".commnetP").css("display", "none");                                                                     // 469
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 471
        function clickDisplayCommnetButton(event) {                                                                    // 471
            event.preventDefault();                                                                                    // 472
            var thisId = "#" + "p" + this._id;                                                                         // 473
            $(".commnetP").css("display", "none");                                                                     // 474
            $(thisId).css("display", "block");                                                                         // 475
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 477
        function clickToViewOther(event) {                                                                             // 477
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 479
            console.log(_meteor.Meteor.userId());                                                                      // 480
            console.log(targetUserId);                                                                                 // 481
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 483
        function clickAddFriend(event) {                                                                               // 483
            event.preventDefault();                                                                                    // 484
            var $friendId = this.user._id;                                                                             // 485
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 486
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 487
                scroll(0, 0);                                                                                          // 488
                return;                                                                                                // 489
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 492
            UserInfo.update({                                                                                          // 493
                "_id": userInfoId                                                                                      // 494
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 496
                $inc: { "totalFriend": 1 }                                                                             // 497
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 501
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 502
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 504
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 505
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 515
        function clickAddCollection(event) {                                                                           // 515
            event.preventDefault();                                                                                    // 516
            var $PostId = this._id;                                                                                    // 517
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 518
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 519
                scroll(0, 0);                                                                                          // 520
                return;                                                                                                // 521
            }                                                                                                          //
            Posts.update({                                                                                             // 523
                "_id": this._id                                                                                        // 524
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 526
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 527
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 531
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 532
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 534
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 535
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 536
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 544
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 545
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 552
        function clickLikePost(event) {                                                                                // 552
            event.preventDefault();                                                                                    // 553
            var thisId = this._id;                                                                                     // 554
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 555
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 556
                scroll(0, 0);                                                                                          // 557
                return;                                                                                                // 558
            }                                                                                                          //
            Posts.update({                                                                                             // 560
                "_id": this._id                                                                                        // 561
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 563
                $inc: { "like": 1, "score": 10 }                                                                       // 564
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 568
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 569
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 571
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 572
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 573
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 581
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 582
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 588
        function clickObjectPost(event) {                                                                              // 588
            event.preventDefault();                                                                                    // 589
            var thisId = this._id;                                                                                     // 590
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 591
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 592
                scroll(0, 0);                                                                                          // 593
                return;                                                                                                // 594
            }                                                                                                          //
            Posts.update({                                                                                             // 596
                "_id": this._id                                                                                        // 597
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 599
                $inc: { "object": 1, "score": -8 }                                                                     // 600
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 604
                    Session.set("info", { success: "", error: "异议无效" });                                               // 605
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 607
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 608
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 609
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 617
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 618
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }(),                                                                                                               //
    'click #topPost': function () {                                                                                    // 624
        function clickTopPost(event) {                                                                                 // 624
            event.preventDefault();                                                                                    // 625
            if (_meteor.Meteor.user().username != "admin") {                                                           // 626
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 627
                scroll(0, 0);                                                                                          // 628
                return;                                                                                                // 629
            }                                                                                                          //
            Posts.update({                                                                                             // 631
                "_id": this._id                                                                                        // 632
            }, {                                                                                                       //
                $set: { "top": true }                                                                                  // 634
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 638
                    Session.set("info", { success: "", error: "置顶失败" });                                               // 639
                } else {                                                                                               //
                    Session.set("info", { success: "置顶成功", error: "" });                                               // 641
                    var userInfoId = Posts.findOne({ "_id": this._id }).user._id;                                      // 642
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 80, totalScore: 80 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickTopPost;                                                                                           //
    }(),                                                                                                               //
    'click #untopPost': function () {                                                                                  // 652
        function clickUntopPost(event) {                                                                               // 652
            event.preventDefault();                                                                                    // 653
            if (_meteor.Meteor.user().username != "admin") {                                                           // 654
                Session.set("info", { success: "", error: "错误：您并非管理员。" });                                             // 655
                scroll(0, 0);                                                                                          // 656
                return;                                                                                                // 657
            }                                                                                                          //
            Posts.update({                                                                                             // 659
                "_id": this._id                                                                                        // 660
            }, {                                                                                                       //
                $set: { "top": false }                                                                                 // 662
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 666
                    Session.set("info", { success: "", error: "取消置顶失败" });                                             // 667
                } else {                                                                                               //
                    Session.set("info", { success: "取消置顶成功", error: "" });                                             // 669
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickUntopPost;                                                                                         //
    }(),                                                                                                               //
    'click #getImage': function () {                                                                                   // 674
        function clickGetImage(event) {                                                                                // 674
            event.preventDefault();                                                                                    // 675
            navigator.device.capture.captureImage(captureImageSuccess, captureError, { limit: 1 });                    // 676
            Session.set("info", { success: "图片上传成功", error: "" });                                                     // 677
        }                                                                                                              //
                                                                                                                       //
        return clickGetImage;                                                                                          //
    }(),                                                                                                               //
    'click #getAudio': function () {                                                                                   // 679
        function clickGetAudio(event) {                                                                                // 679
            event.preventDefault();                                                                                    // 680
            navigator.device.capture.captureAudio(captureAudioSuccess, captureError, { limit: 1 });                    // 681
            Session.set("info", { success: "音频上传成功", error: "" });                                                     // 682
        }                                                                                                              //
                                                                                                                       //
        return clickGetAudio;                                                                                          //
    }(),                                                                                                               //
    'click #getVideo': function () {                                                                                   // 684
        function clickGetVideo(event) {                                                                                // 684
            event.preventDefault();                                                                                    // 685
            navigator.device.capture.captureVideo(captureVideoSuccess, captureError, { limit: 1 });                    // 686
            Session.set("info", { success: "视频上传成功", error: "" });                                                     // 687
        }                                                                                                              //
                                                                                                                       //
        return clickGetVideo;                                                                                          //
    }(),                                                                                                               //
    'change #myFileInput': function () {                                                                               // 689
        function changeMyFileInput(event, template) {                                                                  // 689
            var files = event.target.files;                                                                            // 690
            var ln = files.length;                                                                                     // 691
            if (ln > 9) {                                                                                              // 692
                ln = 9;                                                                                                // 692
            };                                                                                                         //
            for (var i = 0; i < ln; i++) {                                                                             // 693
                LocalImages.insert(files[i], function (err, fileObj) {                                                 // 694
                    isGetLocalImage = true;                                                                            // 695
                    localimagesId.push(fileObj._id);                                                                   // 696
                    console.log(fileObj._id);                                                                          // 697
                    console.log(localimagesId);                                                                        // 698
                    Session.set("info", { success: "插入本地" + i + "张图片成功", error: "" });                                 // 699
                    // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP                 //
                });                                                                                                    // 694
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return changeMyFileInput;                                                                                      //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.collections.events({                                                                                          // 706
    'click #commnetSubmit': function () {                                                                              // 707
        function clickCommnetSubmit(event) {                                                                           // 707
            event.preventDefault();                                                                                    // 708
            var thisId = "#" + this._id;                                                                               // 709
            var $comment = $("#" + this._id).val();                                                                    // 710
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 711
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 712
                scroll(0, 0);                                                                                          // 713
                return;                                                                                                // 714
            }                                                                                                          //
            Posts.insert({                                                                                             // 716
                user: _meteor.Meteor.user(),                                                                           // 717
                post: $comment,                                                                                        // 718
                "super": this._id,                                                                                     // 719
                to: false,                                                                                             // 720
                time: new Date() }, function (err) {                                                                   // 721
                if (err) {                                                                                             // 723
                    Session.set("info", { success: "", error: "评论失败" });                                               // 724
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 726
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 727
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 733
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 738
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 740
        function clickCommnetSubmitToCommnet(event) {                                                                  // 740
            event.preventDefault();                                                                                    // 741
            var thisId = "#" + this._id;                                                                               // 742
            var $commentTo = $("#" + this._id).val();                                                                  // 743
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 744
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 745
                scroll(0, 0);                                                                                          // 746
                return;                                                                                                // 747
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 749
            Posts.insert({                                                                                             // 750
                user: _meteor.Meteor.user(),                                                                           // 751
                post: $commentTo,                                                                                      // 752
                "super": this["super"],                                                                                // 753
                to: userName,                                                                                          // 754
                time: new Date() }, function (err) {                                                                   // 755
                if (err) {                                                                                             // 757
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 758
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 760
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 761
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 767
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 771
            $(".commnetP").css("display", "none");                                                                     // 772
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 774
        function clickDisplayCommnetButton(event) {                                                                    // 774
            event.preventDefault();                                                                                    // 775
            var thisId = "#" + "p" + this._id;                                                                         // 776
            $(".commnetP").css("display", "none");                                                                     // 777
            $(thisId).css("display", "block");                                                                         // 778
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 780
        function clickToViewOther(event) {                                                                             // 780
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 782
            console.log(_meteor.Meteor.userId());                                                                      // 783
            console.log(targetUserId);                                                                                 // 784
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 786
        function clickAddFriend(event) {                                                                               // 786
            event.preventDefault();                                                                                    // 787
            var $friendId = this.user._id;                                                                             // 788
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 789
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 790
                scroll(0, 0);                                                                                          // 791
                return;                                                                                                // 792
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 795
            UserInfo.update({                                                                                          // 796
                "_id": userInfoId                                                                                      // 797
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 799
                $inc: { "totalFriend": 1 }                                                                             // 800
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 804
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 805
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 807
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 808
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 818
        function clickAddCollection(event) {                                                                           // 818
            event.preventDefault();                                                                                    // 819
            var $PostId = this._id;                                                                                    // 820
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 821
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 822
                scroll(0, 0);                                                                                          // 823
                return;                                                                                                // 824
            }                                                                                                          //
            Posts.update({                                                                                             // 826
                "_id": this._id                                                                                        // 827
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 829
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 830
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 834
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 835
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 837
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 838
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 839
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 847
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 848
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 855
        function clickLikePost(event) {                                                                                // 855
            event.preventDefault();                                                                                    // 856
            var thisId = this._id;                                                                                     // 857
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 858
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 859
                scroll(0, 0);                                                                                          // 860
                return;                                                                                                // 861
            }                                                                                                          //
            Posts.update({                                                                                             // 863
                "_id": this._id                                                                                        // 864
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 866
                $inc: { "like": 1, "score": 10 }                                                                       // 867
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 871
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 872
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 874
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 875
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 876
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 884
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 885
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 891
        function clickObjectPost(event) {                                                                              // 891
            event.preventDefault();                                                                                    // 892
            var thisId = this._id;                                                                                     // 893
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 894
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 895
                scroll(0, 0);                                                                                          // 896
                return;                                                                                                // 897
            }                                                                                                          //
            Posts.update({                                                                                             // 899
                "_id": this._id                                                                                        // 900
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 902
                $inc: { "object": 1, "score": -8 }                                                                     // 903
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 907
                    Session.set("info", { success: "", error: "异议无效" });                                               // 908
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 910
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 911
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 912
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 920
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 921
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.self.events({                                                                                                 // 929
    'click #commnetSubmit': function () {                                                                              // 930
        function clickCommnetSubmit(event) {                                                                           // 930
            event.preventDefault();                                                                                    // 931
            var thisId = "#" + this._id;                                                                               // 932
            var $comment = $("#" + this._id).val();                                                                    // 933
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 934
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 935
                scroll(0, 0);                                                                                          // 936
                return;                                                                                                // 937
            }                                                                                                          //
            Posts.insert({                                                                                             // 939
                user: _meteor.Meteor.user(),                                                                           // 940
                post: $comment,                                                                                        // 941
                "super": this._id,                                                                                     // 942
                to: false,                                                                                             // 943
                time: new Date() }, function (err) {                                                                   // 944
                if (err) {                                                                                             // 946
                    Session.set("info", { success: "", error: "评论失败" });                                               // 947
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 949
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 950
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 956
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 961
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 963
        function clickCommnetSubmitToCommnet(event) {                                                                  // 963
            event.preventDefault();                                                                                    // 964
            var thisId = "#" + this._id;                                                                               // 965
            var $commentTo = $("#" + this._id).val();                                                                  // 966
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 967
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 968
                scroll(0, 0);                                                                                          // 969
                return;                                                                                                // 970
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 972
            Posts.insert({                                                                                             // 973
                user: _meteor.Meteor.user(),                                                                           // 974
                post: $commentTo,                                                                                      // 975
                "super": this["super"],                                                                                // 976
                to: userName,                                                                                          // 977
                time: new Date() }, function (err) {                                                                   // 978
                if (err) {                                                                                             // 980
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 981
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 983
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 984
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 990
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 994
            $(".commnetP").css("display", "none");                                                                     // 995
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 997
        function clickDisplayCommnetButton(event) {                                                                    // 997
            event.preventDefault();                                                                                    // 998
            var thisId = "#" + "p" + this._id;                                                                         // 999
            $(".commnetP").css("display", "none");                                                                     // 1000
            $(thisId).css("display", "block");                                                                         // 1001
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 1003
        function clickToViewOther(event) {                                                                             // 1003
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 1005
            console.log(_meteor.Meteor.userId());                                                                      // 1006
            console.log(targetUserId);                                                                                 // 1007
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 1009
        function clickAddFriend(event) {                                                                               // 1009
            event.preventDefault();                                                                                    // 1010
            var $friendId = this.user._id;                                                                             // 1011
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 1012
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 1013
                scroll(0, 0);                                                                                          // 1014
                return;                                                                                                // 1015
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 1018
            UserInfo.update({                                                                                          // 1019
                "_id": userInfoId                                                                                      // 1020
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 1022
                $inc: { "totalFriend": 1 }                                                                             // 1023
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 1027
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 1028
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 1030
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1031
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 1041
        function clickAddCollection(event) {                                                                           // 1041
            event.preventDefault();                                                                                    // 1042
            var $PostId = this._id;                                                                                    // 1043
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 1044
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 1045
                scroll(0, 0);                                                                                          // 1046
                return;                                                                                                // 1047
            }                                                                                                          //
            Posts.update({                                                                                             // 1049
                "_id": this._id                                                                                        // 1050
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 1052
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 1053
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1057
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 1058
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 1060
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1061
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1062
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 1070
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 1071
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 1078
        function clickLikePost(event) {                                                                                // 1078
            event.preventDefault();                                                                                    // 1079
            var thisId = this._id;                                                                                     // 1080
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 1081
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 1082
                scroll(0, 0);                                                                                          // 1083
                return;                                                                                                // 1084
            }                                                                                                          //
            Posts.update({                                                                                             // 1086
                "_id": this._id                                                                                        // 1087
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 1089
                $inc: { "like": 1, "score": 10 }                                                                       // 1090
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1094
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 1095
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 1097
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1098
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1099
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1107
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 1108
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 1114
        function clickObjectPost(event) {                                                                              // 1114
            event.preventDefault();                                                                                    // 1115
            var thisId = this._id;                                                                                     // 1116
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 1117
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 1118
                scroll(0, 0);                                                                                          // 1119
                return;                                                                                                // 1120
            }                                                                                                          //
            Posts.update({                                                                                             // 1122
                "_id": this._id                                                                                        // 1123
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 1125
                $inc: { "object": 1, "score": -8 }                                                                     // 1126
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1130
                    Session.set("info", { success: "", error: "异议无效" });                                               // 1131
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 1133
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1134
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1135
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1143
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 1144
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.lists.events({                                                                                                // 1152
    'click #commnetSubmit': function () {                                                                              // 1153
        function clickCommnetSubmit(event) {                                                                           // 1153
            event.preventDefault();                                                                                    // 1154
            var thisId = "#" + this._id;                                                                               // 1155
            var $comment = $("#" + this._id).val();                                                                    // 1156
            if ($comment.length === 0 || $comment.length >= 100) {                                                     // 1157
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 1158
                scroll(0, 0);                                                                                          // 1159
                return;                                                                                                // 1160
            }                                                                                                          //
            Posts.insert({                                                                                             // 1162
                user: _meteor.Meteor.user(),                                                                           // 1163
                post: $comment,                                                                                        // 1164
                "super": this._id,                                                                                     // 1165
                to: false,                                                                                             // 1166
                time: new Date() }, function (err) {                                                                   // 1167
                if (err) {                                                                                             // 1169
                    Session.set("info", { success: "", error: "评论失败" });                                               // 1170
                } else {                                                                                               //
                    Session.set("info", { success: "评论成功", error: "" });                                               // 1172
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1173
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 1179
                }                                                                                                      //
            });                                                                                                        //
                                                                                                                       //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 1184
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmit;                                                                                     //
    }(),                                                                                                               //
    'click #commnetSubmitToCommnet': function () {                                                                     // 1186
        function clickCommnetSubmitToCommnet(event) {                                                                  // 1186
            event.preventDefault();                                                                                    // 1187
            var thisId = "#" + this._id;                                                                               // 1188
            var $commentTo = $("#" + this._id).val();                                                                  // 1189
            if ($commentTo.length === 0 || $commentTo.length >= 100) {                                                 // 1190
                Session.set("info", { success: "", error: "请将字数限制在1-100字以内" });                                        // 1191
                scroll(0, 0);                                                                                          // 1192
                return;                                                                                                // 1193
            }                                                                                                          //
            var userName = Posts.findOne({ "_id": this._id }).user.username;                                           // 1195
            Posts.insert({                                                                                             // 1196
                user: _meteor.Meteor.user(),                                                                           // 1197
                post: $commentTo,                                                                                      // 1198
                "super": this["super"],                                                                                // 1199
                to: userName,                                                                                          // 1200
                time: new Date() }, function (err) {                                                                   // 1201
                if (err) {                                                                                             // 1203
                    Session.set("info", { success: "", error: "回复评论失败" });                                             // 1204
                } else {                                                                                               //
                    Session.set("info", { success: "回复评论成功", error: "" });                                             // 1206
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1207
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 20, totalScore: 20 } }, false, true);
                    $(thisId).val("");                                                                                 // 1213
                }                                                                                                      //
            });                                                                                                        //
            SystemInfo.update({ "_id": "1" }, { $inc: { "totalPost": 1 } });                                           // 1217
            $(".commnetP").css("display", "none");                                                                     // 1218
        }                                                                                                              //
                                                                                                                       //
        return clickCommnetSubmitToCommnet;                                                                            //
    }(),                                                                                                               //
    'click #displayCommnetButton': function () {                                                                       // 1220
        function clickDisplayCommnetButton(event) {                                                                    // 1220
            event.preventDefault();                                                                                    // 1221
            var thisId = "#" + "p" + this._id;                                                                         // 1222
            $(".commnetP").css("display", "none");                                                                     // 1223
            $(thisId).css("display", "block");                                                                         // 1224
        }                                                                                                              //
                                                                                                                       //
        return clickDisplayCommnetButton;                                                                              //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 1226
        function clickToViewOther(event) {                                                                             // 1226
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 1228
            console.log(_meteor.Meteor.userId());                                                                      // 1229
            console.log(targetUserId);                                                                                 // 1230
        }                                                                                                              //
                                                                                                                       //
        return clickToViewOther;                                                                                       //
    }(),                                                                                                               //
    'click #addFriend': function () {                                                                                  // 1232
        function clickAddFriend(event) {                                                                               // 1232
            event.preventDefault();                                                                                    // 1233
            var $friendId = this.user._id;                                                                             // 1234
            if (UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                     // 1235
                Session.set("info", { success: "", error: "错误：此好友已经存在" });                                             // 1236
                scroll(0, 0);                                                                                          // 1237
                return;                                                                                                // 1238
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 1241
            UserInfo.update({                                                                                          // 1242
                "_id": userInfoId                                                                                      // 1243
            }, {                                                                                                       //
                $addToSet: { "Friends": $friendId },                                                                   // 1245
                $inc: { "totalFriend": 1 }                                                                             // 1246
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 1250
                    Session.set("info", { success: "", error: "添加好友失败" });                                             // 1251
                } else {                                                                                               //
                    Session.set("info", { success: "添加成功", error: "" });                                               // 1253
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1254
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 50, totalScore: 50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickAddFriend;                                                                                         //
    }(),                                                                                                               //
    'click #addCollection': function () {                                                                              // 1264
        function clickAddCollection(event) {                                                                           // 1264
            event.preventDefault();                                                                                    // 1265
            var $PostId = this._id;                                                                                    // 1266
            if (Posts.findOne({ "_id": $PostId, "collectioners": _meteor.Meteor.userId() })) {                         // 1267
                Session.set("info", { success: "", error: "错误：你已经此收藏过此新闻" });                                          // 1268
                scroll(0, 0);                                                                                          // 1269
                return;                                                                                                // 1270
            }                                                                                                          //
            Posts.update({                                                                                             // 1272
                "_id": this._id                                                                                        // 1273
            }, {                                                                                                       //
                $addToSet: { "collectioners": _meteor.Meteor.userId() },                                               // 1275
                $inc: { "totalCollection": 1, "score": 15 }                                                            // 1276
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1280
                    Session.set("info", { success: "", error: "收藏失败" });                                               // 1281
                } else {                                                                                               //
                    Session.set("info", { success: "收藏成功", error: "" });                                               // 1283
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1284
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1285
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": $PostId }).user._id;                                               // 1293
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalCollection: 1 } }, false, true);                     // 1294
        }                                                                                                              //
                                                                                                                       //
        return clickAddCollection;                                                                                     //
    }(),                                                                                                               //
    'click #likePost': function () {                                                                                   // 1301
        function clickLikePost(event) {                                                                                // 1301
            event.preventDefault();                                                                                    // 1302
            var thisId = this._id;                                                                                     // 1303
            if (Posts.findOne({ "_id": this._id, "Likers": _meteor.Meteor.userId() })) {                               // 1304
                Session.set("info", { success: "", error: "错误：您已经点过赞" });                                              // 1305
                scroll(0, 0);                                                                                          // 1306
                return;                                                                                                // 1307
            }                                                                                                          //
            Posts.update({                                                                                             // 1309
                "_id": this._id                                                                                        // 1310
            }, {                                                                                                       //
                $addToSet: { "Likers": _meteor.Meteor.userId() },                                                      // 1312
                $inc: { "like": 1, "score": 10 }                                                                       // 1313
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1317
                    Session.set("info", { success: "", error: "点赞失败" });                                               // 1318
                } else {                                                                                               //
                    Session.set("info", { success: "点赞成功", error: "" });                                               // 1320
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1321
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1322
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1330
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalLike: 1 } }, false, true);                           // 1331
        }                                                                                                              //
                                                                                                                       //
        return clickLikePost;                                                                                          //
    }(),                                                                                                               //
    'click #objectPost': function () {                                                                                 // 1337
        function clickObjectPost(event) {                                                                              // 1337
            event.preventDefault();                                                                                    // 1338
            var thisId = this._id;                                                                                     // 1339
            if (Posts.findOne({ "_id": this._id, "Objecters": _meteor.Meteor.userId() })) {                            // 1340
                Session.set("info", { success: "", error: "错误：您已经点过异议" });                                             // 1341
                scroll(0, 0);                                                                                          // 1342
                return;                                                                                                // 1343
            }                                                                                                          //
            Posts.update({                                                                                             // 1345
                "_id": this._id                                                                                        // 1346
            }, {                                                                                                       //
                $addToSet: { "Objecters": _meteor.Meteor.userId() },                                                   // 1348
                $inc: { "object": 1, "score": -8 }                                                                     // 1349
            }, false, true, function (err) {                                                                           //
                if (err) {                                                                                             // 1353
                    Session.set("info", { success: "", error: "异议无效" });                                               // 1354
                } else {                                                                                               //
                    Session.set("info", { success: "反对有效", error: "" });                                               // 1356
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1357
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: 5, totalScore: 5 } }, false, true);   // 1358
                }                                                                                                      //
            });                                                                                                        //
            var userInfoId = Posts.findOne({ "_id": thisId }).user._id;                                                // 1366
            UserInfo.update({ "_id": userInfoId }, { $inc: { totalObject: 1 } }, false, true);                         // 1367
        }                                                                                                              //
                                                                                                                       //
        return clickObjectPost;                                                                                        //
    }()                                                                                                                //
});                                                                                                                    //
                                                                                                                       //
Template.friend.events({                                                                                               // 1375
    'click #deleteFriend': function () {                                                                               // 1376
        function clickDeleteFriend(event) {                                                                            // 1376
            event.preventDefault();                                                                                    // 1377
            var $friendId = this.user._id;                                                                             // 1378
            if (!UserInfo.findOne({ "user._id": _meteor.Meteor.userId(), "Friends": $friendId })) {                    // 1379
                Session.set("info", { success: "", error: "错误：此好友不存在" });                                              // 1380
                scroll(0, 0);                                                                                          // 1381
                return;                                                                                                // 1382
            }                                                                                                          //
            if ($friendId == _meteor.Meteor.userId()) {                                                                // 1384
                Session.set("info", { success: "", error: "错误：不能删除自己" });                                              // 1385
                scroll(0, 0);                                                                                          // 1386
                return;                                                                                                // 1387
            }                                                                                                          //
                                                                                                                       //
            var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                            // 1390
            UserInfo.update({                                                                                          // 1391
                "_id": userInfoId                                                                                      // 1392
            }, {                                                                                                       //
                $pull: { "Friends": $friendId },                                                                       // 1394
                $inc: { "totalFriend": -1 }                                                                            // 1395
            }, true, true, function (err) {                                                                            //
                if (err) {                                                                                             // 1399
                    Session.set("info", { success: "", error: "删除好友失败" });                                             // 1400
                } else {                                                                                               //
                    Session.set("info", { success: "删除成功", error: "" });                                               // 1402
                    var userInfoId = UserInfo.findOne({ "user._id": _meteor.Meteor.userId() })._id;                    // 1403
                    UserInfo.update({ "_id": userInfoId }, { $inc: { todayScore: -50, totalScore: -50 } }, false, true);
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return clickDeleteFriend;                                                                                      //
    }(),                                                                                                               //
    'click #toViewOther': function () {                                                                                // 1413
        function clickToViewOther(event) {                                                                             // 1413
            //event.preventDefault();                                                                                  //
            localStorage.setItem("targetUserId", this.user._id);                                                       // 1415
            console.log(_meteor.Meteor.userId());                                                                      // 1416
            console.log(targetUserId);                                                                                 // 1417
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