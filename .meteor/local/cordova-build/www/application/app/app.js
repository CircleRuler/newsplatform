var require = meteorInstall({"client":{"template.client.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/template.client.js                                                   //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.body.addContent((function() {                                         // 2
  var view = this;                                                             // 3
  return [ Spacebars.include(view.lookupTemplate("nav")), "\n    ", Spacebars.include(view.lookupTemplate("container")), "\n    ", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                           // 5
Meteor.startup(Template.body.renderToDocument);                                // 6
                                                                               // 7
Template.__checkName("nav");                                                   // 8
Template["nav"] = new Template("Template.nav", (function() {                   // 9
  var view = this;                                                             // 10
  return HTML.Raw('<div class="navbar navbar-inverse navbar-fixed-top">\n        <div class="navbar-inner">\n            <div class="container">\n                <a href="" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </a>\n                <a href="/" class="brand">新闻爆料</a>\n                <div class="nav-collapse">\n                    <ul class="nav">\n                        <li class="active"><a href="/">首页</a></li>\n                        <li><a href="/login">登入</a></li>\n                        <li><a href="/reg">注册</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>');
}));                                                                           // 12
                                                                               // 13
Template.__checkName("container");                                             // 14
Template["container"] = new Template("Template.container", (function() {       // 15
  var view = this;                                                             // 16
  return HTML.DIV({                                                            // 17
    id: "container",                                                           // 18
    "class": "container"                                                       // 19
  }, "\n        ", Spacebars.include(view.lookupTemplate("index")), "\n    ");
}));                                                                           // 21
                                                                               // 22
Template.__checkName("footer");                                                // 23
Template["footer"] = new Template("Template.footer", (function() {             // 24
  var view = this;                                                             // 25
  return HTML.Raw('<p class="muted text-center">newsplatform 2016</p>');       // 26
}));                                                                           // 27
                                                                               // 28
/////////////////////////////////////////////////////////////////////////////////

},"template.index.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/template.index.js                                                    //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("index");                                                 // 2
Template["index"] = new Template("Template.index", (function() {               // 3
  var view = this;                                                             // 4
  return HTML.Raw('<div class="hero-unit">\n        <h1>欢迎来到 newsplatform 新闻爆料平台</h1>\n        <p>newsplatform 是一个基于meteor的毕业设计项目</p>\n        <p>\n            <a href="/login" class="btn btn-primary btn-large">登陆</a>\n            <a href="/reg" class="btn btn-large">立即注册</a>\n        </p>\n    </div>\n    <div class="row">\n        <div class="span4">\n            <h2>在很久很久以前</h2>\n            <p>有一个无故事王国，那里住着许多无故事的居民。</p>\n        </div>\n        <div class="span4">\n            <h2>语录</h2>\n            <p>毁灭人类的从来不是无知而是傲慢。<br>\n            毁灭你，与你何干？<br>\n            那天清晨落叶满地，树林里分出两条路，而我选择了人迹罕至的一条，从此决定了我一生的道路<br>\n            你们是虫子！<br>\n            一切终将逝去，只有死神永生！<br>\n            没有甲铁城看的大家不是只有去死了吗！<br>\n            出师未捷身先死，妮可妮可妮可妮！</p>\n        </div>\n        <div class="span4">\n            <h3>一段话</h3>\n            <p>“不论你是谁，不论你做什么，当你渴望得到某种东西时，最终一定能够得到，因为这愿望来自宇宙的灵魂。” “当你想要某种东西时，整个宇宙会合力助你实现愿望。” “人们很早就学会了生活的道理，也许正因为如此，他们才会早早就放弃了它们。世界就是如此。” 实际上，每天都一成不变，是因为人们已经失去了对美好事物的敏锐感觉。然而，只要有明媚的阳光，人们的生活中就会出现美好的事物。 “事情往往如此。...</p>\n        </div>\n    </div>');
}));                                                                           // 6
                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html"]});
require("./client/template.client.js");
require("./client/template.index.js");