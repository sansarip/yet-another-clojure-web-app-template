// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('react_highlight.js');
goog.require('highlight.js.lib.languages.clojure');
day8.re_frame_10x.view.components.global$module$react_highlight$js = goog.global["Highlight"];
day8.re_frame_10x.view.components.search_input = (function day8$re_frame_10x$view$components$search_input(p__41224){
var map__41225 = p__41224;
var map__41225__$1 = (((((!((map__41225 == null))))?(((((map__41225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41225):map__41225);
var title = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.call(null,title);
var save = ((function (val,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)));
if((cljs.core.count.call(null,v) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});})(val,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)))))?(25):cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__41222_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__41222_SHARP_.target.value);

return on_change.call(null,p1__41222_SHARP_);
});})(val,save,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__41223_SHARP_){
var G__41227 = p1__41223_SHARP_.which;
switch (G__41227) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__41225,map__41225__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame_10x.view.components.scroll_BANG_ = (function day8$re_frame_10x$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame_10x.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame_10x$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame_10x.view.components.autoscroll_list = (function day8$re_frame_10x$view$components$autoscroll_list(p__41229,child){
var map__41230 = p__41229;
var map__41230__$1 = (((((!((map__41230 == null))))?(((((map__41230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41230):map__41230);
var class$ = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.call(null,null);
var should_scroll = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.call(null,true);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame_10x.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(0));
});})(node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_.call(null,should_scroll,day8.re_frame_10x.view.components.scrolled_to_end_QMARK_.call(null,cljs.core.deref.call(null,node),(100)));
});})(node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__4120__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,should_scroll);
} else {
return and__4120__auto__;
}
})())){
return day8.re_frame_10x.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(500));
} else {
return null;
}
});})(node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_){
return (function (p__41232,child__$1){
var map__41233 = p__41232;
var map__41233__$1 = (((((!((map__41233 == null))))?(((((map__41233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41233):map__41233);
var class$__$1 = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__41233,map__41233__$1,class$__$1,node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_.call(null,node,dom_node);
});})(map__41233,map__41233__$1,class$__$1,node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__41230,map__41230__$1,class$,scroll_QMARK_))
], null));
});
day8.re_frame_10x.view.components.string__GT_css = (function day8$re_frame_10x$view$components$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__41236){
var vec__41237 = p__41236;
var property = cljs.core.nth.call(null,vec__41237,(0),null);
var value = cljs.core.nth.call(null,vec__41237,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__41235_SHARP_){
return clojure.string.split.call(null,p1__41235_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame_10x.view.components.default_cljs_devtools_prefs = cljs.core.deref.call(null,devtools.prefs.default_config);
day8.re_frame_10x.view.components.reset_wrapping = (function day8$re_frame_10x$view$components$reset_wrapping(css_string){
return clojure.string.replace.call(null,css_string,/white-space:nowrap;/,"");
});
day8.re_frame_10x.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame_10x.view.components.effective_cljs_devtools_prefs = cljs.core.merge.call(null,day8.re_frame_10x.view.components.default_cljs_devtools_prefs,day8.re_frame_10x.view.components.customized_cljs_devtools_prefs);
day8.re_frame_10x.view.components.make_devtools_api_call = (function day8$re_frame_10x$view$components$make_devtools_api_call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41242 = arguments.length;
var i__4731__auto___41243 = (0);
while(true){
if((i__4731__auto___41243 < len__4730__auto___41242)){
args__4736__auto__.push((arguments[i__4731__auto___41243]));

var G__41244 = (i__4731__auto___41243 + (1));
i__4731__auto___41243 = G__41244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__41213__auto__ = devtools.prefs.get_prefs.call(null);
var prefs__41214__auto__ = day8.re_frame_10x.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_.call(null,prefs__41214__auto__);

return cljs.core.apply.call(null,api_fn,args);
}finally {if(cljs.core._EQ_.call(null,devtools.prefs.get_prefs.call(null),prefs__41214__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__41214__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_.call(null,previous_config__41213__auto__);
}});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq41240){
var G__41241 = cljs.core.first.call(null,seq41240);
var seq41240__$1 = cljs.core.next.call(null,seq41240);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41241,seq41240__$1);
});

day8.re_frame_10x.view.components.cljs_devtools_header = (function day8$re_frame_10x$view$components$cljs_devtools_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41246 = arguments.length;
var i__4731__auto___41247 = (0);
while(true){
if((i__4731__auto___41247 < len__4730__auto___41246)){
args__4736__auto__.push((arguments[i__4731__auto___41247]));

var G__41248 = (i__4731__auto___41247 + (1));
i__4731__auto___41247 = G__41248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq41245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41245));
});

day8.re_frame_10x.view.components.cljs_devtools_body = (function day8$re_frame_10x$view$components$cljs_devtools_body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41250 = arguments.length;
var i__4731__auto___41251 = (0);
while(true){
if((i__4731__auto___41251 < len__4730__auto___41250)){
args__4736__auto__.push((arguments[i__4731__auto___41251]));

var G__41252 = (i__4731__auto___41251 + (1));
i__4731__auto___41251 = G__41252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq41249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41249));
});

day8.re_frame_10x.view.components.cljs_devtools_has_body = (function day8$re_frame_10x$view$components$cljs_devtools_has_body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41254 = arguments.length;
var i__4731__auto___41255 = (0);
while(true){
if((i__4731__auto___41255 < len__4730__auto___41254)){
args__4736__auto__.push((arguments[i__4731__auto___41255]));

var G__41256 = (i__4731__auto___41255 + (1));
i__4731__auto___41255 = G__41256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq41253){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41253));
});

day8.re_frame_10x.view.components.get_object = (function day8$re_frame_10x$view$components$get_object(jsonml){
return cljs.core.get.call(null,jsonml,(1)).object;
});
day8.re_frame_10x.view.components.get_config = (function day8$re_frame_10x$view$components$get_config(jsonml){
return cljs.core.get.call(null,jsonml,(1)).config;
});
day8.re_frame_10x.view.components.data_structure = (function day8$re_frame_10x$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?" expanded":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1));
} else {
return and__4120__auto__;
}
})())?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"body","body",-2049205669))):day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"header","header",119441134))))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.view.components.jsonml__GT_hiccup = (function day8$re_frame_10x$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__41257 = jsonml;
var seq__41258 = cljs.core.seq.call(null,vec__41257);
var first__41259 = cljs.core.first.call(null,seq__41258);
var seq__41258__$1 = cljs.core.next.call(null,seq__41258);
var tag_name = first__41259;
var first__41259__$1 = cljs.core.first.call(null,seq__41258__$1);
var seq__41258__$2 = cljs.core.next.call(null,seq__41258__$1);
var attributes = first__41259__$1;
var children = seq__41258__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,tag_name)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.view.components.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,attributes),"style"))], null)], null),cljs.core.map_indexed.call(null,((function (vec__41257,seq__41258,first__41259,seq__41258__$1,tag_name,first__41259__$1,seq__41258__$2,attributes,children,tagnames){
return (function (i,child){
return day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,child,cljs.core.conj.call(null,path,i));
});})(vec__41257,seq__41258,first__41259,seq__41258__$1,tag_name,first__41259__$1,seq__41258__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.call(null,tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame_10x.view.components.subtree = (function day8$re_frame_10x$view$components$subtree(data,title,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.subscription_render = (function day8$re_frame_10x$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.simple_render = (function day8$re_frame_10x$view$components$simple_render(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41267 = arguments.length;
var i__4731__auto___41268 = (0);
while(true){
if((i__4731__auto___41268 < len__4730__auto___41267)){
args__4736__auto__.push((arguments[i__4731__auto___41268]));

var G__41269 = (i__4731__auto___41268 + (1));
i__4731__auto___41268 = G__41269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__41263){
var vec__41264 = p__41263;
var class$ = cljs.core.nth.call(null,vec__41264,(0),null);
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_,vec__41264,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof data__$1 === 'string') || ((data__$1 instanceof RegExp)) || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__41264,class$))
});

day8.re_frame_10x.view.components.simple_render.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.view.components.simple_render.cljs$lang$applyTo = (function (seq41260){
var G__41261 = cljs.core.first.call(null,seq41260);
var seq41260__$1 = cljs.core.next.call(null,seq41260);
var G__41262 = cljs.core.first.call(null,seq41260__$1);
var seq41260__$2 = cljs.core.next.call(null,seq41260__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41261,G__41262,seq41260__$2);
});

day8.re_frame_10x.view.components.tag = (function day8$re_frame_10x$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});
day8.re_frame_10x.view.components.highlight = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.adapt_react_class.call(null,(function (){var or__4131__auto__ = day8.re_frame_10x.view.components.global$module$react_highlight$js.default$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.view.components.global$module$react_highlight$js;
}
})());

//# sourceMappingURL=components.js.map
