Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=c.helperMissing,l=this.escapeExpression;return e.buffer.push('<div class="">\n    <h1 class="">Welcome to Ember-JSONEditor</h1>\n\n    <h2>Editor</h2>\n\n    '),g={json:b,mode:b,name:b},h={json:"ID",mode:"ID",name:"ID"},i={hash:{json:"model",mode:"controller.mode",name:"controller.name"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["json-editor"]||b["json-editor"],f?f.call(b,i):k.call(b,"json-editor",i)))),e.buffer.push("\n\n    <hr/>\n\n    <h2>Options</h2>\n\n    Name: "),g={value:b},h={value:"ID"},i={hash:{value:"controller.name"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c.input||b.input,f?f.call(b,i):k.call(b,"input",i)))),e.buffer.push("\n\n    <br/>\n\n    Mode: "),g={content:b,value:b},h={content:"ID",value:"ID"},e.buffer.push(l(c.view.call(b,"Ember.Select",{hash:{content:"controller.modes",value:"controller.mode"},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push("\n\n    <h2>Raw JSON</h2>\n\n    <pre>"),h={},g={},i={hash:{},contexts:[b,b,b],types:["ID","ID","INTEGER"],hashContexts:g,hashTypes:h,data:e},e.buffer.push(l((f=c["pretty-print"]||b["pretty-print"],f?f.call(b,"model","undefined",4,i):k.call(b,"pretty-print","model","undefined",4,i)))),e.buffer.push("</pre>\n\n</div>\n"),j});