//var buttons = require('sdk/ui/button/action');
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var tmr = require('sdk/timers');
var interval = null;

function clean(tabs){

   var attach = tabs.activeTab.attach({
      contentScriptFile: [self.data.url("jquery-2.1.3.min.js"), self.data.url("script_lemonde_fr.js") ]
   });
   attach.port.emit("clean", tabs.activeTab.url); 		

}

function regularClean(tabs){

   clean(tabs);
   interval = tmr.setInterval( function(){
  	clean(tabs);
   } , 500);

}

regularClean(tabs);

