// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__42194_SHARP_){
var k = f.call(null,p1__42194_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__42195){
var vec__42196 = p__42195;
var k = cljs.core.nth.call(null,vec__42196,(0),null);
var v = cljs.core.nth.call(null,vec__42196,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42200 = arguments.length;
var i__4731__auto___42201 = (0);
while(true){
if((i__4731__auto___42201 < len__4730__auto___42200)){
args__4736__auto__.push((arguments[i__4731__auto___42201]));

var G__42202 = (i__4731__auto___42201 + (1));
i__4731__auto___42201 = G__42202;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq42199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42199));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__42205){
var map__42206 = p__42205;
var map__42206__$1 = (((((!((map__42206 == null))))?(((((map__42206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42206):map__42206);
var message = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__42206,map__42206__$1,message,column){
return (function (p1__42204_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42204_SHARP_], null)));
});})(map__42206,map__42206__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__42206,map__42206__$1,message,column){
return (function (p1__42203_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__42203_SHARP_);
});})(map__42206,map__42206__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__42209){
var map__42210 = p__42209;
var map__42210__$1 = (((((!((map__42210 == null))))?(((((map__42210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42210):map__42210);
var message_data = map__42210__$1;
var message = cljs.core.get.call(null,map__42210__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__42210__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42210__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__42210__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__42212 = file_excerpt;
var map__42212__$1 = (((((!((map__42212 == null))))?(((((map__42212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42212):map__42212);
var start_line = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__42212,map__42212__$1,start_line,path,excerpt,map__42210,map__42210__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__42212,map__42212__$1,start_line,path,excerpt,map__42210,map__42210__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__42213 = cljs.core.split_with.call(null,((function (map__42212,map__42212__$1,start_line,path,excerpt,lines,map__42210,map__42210__$1,message_data,message,line,column,file_excerpt){
return (function (p1__42208_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__42208_SHARP_));
});})(map__42212,map__42212__$1,start_line,path,excerpt,lines,map__42210,map__42210__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__42213,(0),null);
var end = cljs.core.nth.call(null,vec__42213,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__42217){
var map__42218 = p__42217;
var map__42218__$1 = (((((!((map__42218 == null))))?(((((map__42218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42218):map__42218);
var file = cljs.core.get.call(null,map__42218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42218__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42218__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42220 = "";
var G__42220__$1 = (cljs.core.truth_(file)?[G__42220,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42220);
var G__42220__$2 = (cljs.core.truth_(line)?[G__42220__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42220__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__42220__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42220__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_42275 = (new goog.debug.Console());
var G__42227_42276 = c_42275.getFormatter();
goog.object.set(G__42227_42276,"showAbsoluteTime",false);

goog.object.set(G__42227_42276,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_42275);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__42228 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__42228,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__42228;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_42277 = cljs.core.atom.call(null,(0));
var promise_chain_42278 = (new goog.Promise(((function (last_reload_timestamp_42277){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_42277))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_42277,promise_chain_42278){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_42277) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_42277,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_42278.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__42229 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__42230 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__42230;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__42229,_STAR_inline_code_message_max_column_STAR__temp_val__42230,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278){
return (function (){
var seq__42231 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__42232 = null;
var count__42233 = (0);
var i__42234 = (0);
while(true){
if((i__42234 < count__42233)){
var w = cljs.core._nth.call(null,chunk__42232,i__42234);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__42279 = seq__42231;
var G__42280 = chunk__42232;
var G__42281 = count__42233;
var G__42282 = (i__42234 + (1));
seq__42231 = G__42279;
chunk__42232 = G__42280;
count__42233 = G__42281;
i__42234 = G__42282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42231);
if(temp__5735__auto__){
var seq__42231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42231__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42231__$1);
var G__42283 = cljs.core.chunk_rest.call(null,seq__42231__$1);
var G__42284 = c__4550__auto__;
var G__42285 = cljs.core.count.call(null,c__4550__auto__);
var G__42286 = (0);
seq__42231 = G__42283;
chunk__42232 = G__42284;
count__42233 = G__42285;
i__42234 = G__42286;
continue;
} else {
var w = cljs.core.first.call(null,seq__42231__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__42287 = cljs.core.next.call(null,seq__42231__$1);
var G__42288 = null;
var G__42289 = (0);
var G__42290 = (0);
seq__42231 = G__42287;
chunk__42232 = G__42288;
count__42233 = G__42289;
i__42234 = G__42290;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__42229,_STAR_inline_code_message_max_column_STAR__temp_val__42230,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__42229;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_42278.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__42235 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__42236 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__42236;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__42235;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278))
);
} else {
return promise_chain_42278.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_42277,promise_chain_42278))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_42277,promise_chain_42278))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42291 = arguments.length;
var i__4731__auto___42292 = (0);
while(true){
if((i__4731__auto___42292 < len__4730__auto___42291)){
args__4736__auto__.push((arguments[i__4731__auto___42292]));

var G__42293 = (i__4731__auto___42292 + (1));
i__4731__auto___42292 = G__42293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__42239){
var vec__42240 = p__42239;
var n = cljs.core.nth.call(null,vec__42240,(0),null);
var mdata = cljs.core.nth.call(null,vec__42240,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__42243 = cljs.core.seq.call(null,hooks);
var chunk__42244 = null;
var count__42245 = (0);
var i__42246 = (0);
while(true){
if((i__42246 < count__42245)){
var vec__42253 = cljs.core._nth.call(null,chunk__42244,i__42246);
var n = cljs.core.nth.call(null,vec__42253,(0),null);
var f = cljs.core.nth.call(null,vec__42253,(1),null);
var temp__5733__auto___42294 = cljs.core.reduce.call(null,((function (seq__42243,chunk__42244,count__42245,i__42246,vec__42253,n,f,hooks){
return (function (p1__42221_SHARP_,p2__42222_SHARP_){
if(cljs.core.truth_(p1__42221_SHARP_)){
return goog.object.get(p1__42221_SHARP_,p2__42222_SHARP_);
} else {
return null;
}
});})(seq__42243,chunk__42244,count__42245,i__42246,vec__42253,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___42294)){
var hook_42295 = temp__5733__auto___42294;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_42295,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__42296 = seq__42243;
var G__42297 = chunk__42244;
var G__42298 = count__42245;
var G__42299 = (i__42246 + (1));
seq__42243 = G__42296;
chunk__42244 = G__42297;
count__42245 = G__42298;
i__42246 = G__42299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42243);
if(temp__5735__auto__){
var seq__42243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42243__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42243__$1);
var G__42300 = cljs.core.chunk_rest.call(null,seq__42243__$1);
var G__42301 = c__4550__auto__;
var G__42302 = cljs.core.count.call(null,c__4550__auto__);
var G__42303 = (0);
seq__42243 = G__42300;
chunk__42244 = G__42301;
count__42245 = G__42302;
i__42246 = G__42303;
continue;
} else {
var vec__42256 = cljs.core.first.call(null,seq__42243__$1);
var n = cljs.core.nth.call(null,vec__42256,(0),null);
var f = cljs.core.nth.call(null,vec__42256,(1),null);
var temp__5733__auto___42304 = cljs.core.reduce.call(null,((function (seq__42243,chunk__42244,count__42245,i__42246,vec__42256,n,f,seq__42243__$1,temp__5735__auto__,hooks){
return (function (p1__42221_SHARP_,p2__42222_SHARP_){
if(cljs.core.truth_(p1__42221_SHARP_)){
return goog.object.get(p1__42221_SHARP_,p2__42222_SHARP_);
} else {
return null;
}
});})(seq__42243,chunk__42244,count__42245,i__42246,vec__42256,n,f,seq__42243__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___42304)){
var hook_42305 = temp__5733__auto___42304;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_42305,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__42306 = cljs.core.next.call(null,seq__42243__$1);
var G__42307 = null;
var G__42308 = (0);
var G__42309 = (0);
seq__42243 = G__42306;
chunk__42244 = G__42307;
count__42245 = G__42308;
i__42246 = G__42309;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq42237){
var G__42238 = cljs.core.first.call(null,seq42237);
var seq42237__$1 = cljs.core.next.call(null,seq42237);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42238,seq42237__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__42259){
var vec__42260 = p__42259;
var k = cljs.core.nth.call(null,vec__42260,(0),null);
var v = cljs.core.nth.call(null,vec__42260,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__42223_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__42223_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__42223_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__42224_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__42224_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__42225_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__42225_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__42263_42310 = cljs.core.seq.call(null,to_reload);
var chunk__42264_42311 = null;
var count__42265_42312 = (0);
var i__42266_42313 = (0);
while(true){
if((i__42266_42313 < count__42265_42312)){
var ns_42314 = cljs.core._nth.call(null,chunk__42264_42311,i__42266_42313);
goog.require(cljs.core.name.call(null,ns_42314),true);


var G__42315 = seq__42263_42310;
var G__42316 = chunk__42264_42311;
var G__42317 = count__42265_42312;
var G__42318 = (i__42266_42313 + (1));
seq__42263_42310 = G__42315;
chunk__42264_42311 = G__42316;
count__42265_42312 = G__42317;
i__42266_42313 = G__42318;
continue;
} else {
var temp__5735__auto___42319 = cljs.core.seq.call(null,seq__42263_42310);
if(temp__5735__auto___42319){
var seq__42263_42320__$1 = temp__5735__auto___42319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42263_42320__$1)){
var c__4550__auto___42321 = cljs.core.chunk_first.call(null,seq__42263_42320__$1);
var G__42322 = cljs.core.chunk_rest.call(null,seq__42263_42320__$1);
var G__42323 = c__4550__auto___42321;
var G__42324 = cljs.core.count.call(null,c__4550__auto___42321);
var G__42325 = (0);
seq__42263_42310 = G__42322;
chunk__42264_42311 = G__42323;
count__42265_42312 = G__42324;
i__42266_42313 = G__42325;
continue;
} else {
var ns_42326 = cljs.core.first.call(null,seq__42263_42320__$1);
goog.require(cljs.core.name.call(null,ns_42326),true);


var G__42327 = cljs.core.next.call(null,seq__42263_42320__$1);
var G__42328 = null;
var G__42329 = (0);
var G__42330 = (0);
seq__42263_42310 = G__42327;
chunk__42264_42311 = G__42328;
count__42265_42312 = G__42329;
i__42266_42313 = G__42330;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_42331 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_42331);
} else {
setTimeout(after_reload_fn_42331,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__42267 = cljs.core.seq.call(null,warnings);
var chunk__42268 = null;
var count__42269 = (0);
var i__42270 = (0);
while(true){
if((i__42270 < count__42269)){
var warning = cljs.core._nth.call(null,chunk__42268,i__42270);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__42332 = seq__42267;
var G__42333 = chunk__42268;
var G__42334 = count__42269;
var G__42335 = (i__42270 + (1));
seq__42267 = G__42332;
chunk__42268 = G__42333;
count__42269 = G__42334;
i__42270 = G__42335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42267);
if(temp__5735__auto__){
var seq__42267__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42267__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42267__$1);
var G__42336 = cljs.core.chunk_rest.call(null,seq__42267__$1);
var G__42337 = c__4550__auto__;
var G__42338 = cljs.core.count.call(null,c__4550__auto__);
var G__42339 = (0);
seq__42267 = G__42336;
chunk__42268 = G__42337;
count__42269 = G__42338;
i__42270 = G__42339;
continue;
} else {
var warning = cljs.core.first.call(null,seq__42267__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__42340 = cljs.core.next.call(null,seq__42267__$1);
var G__42341 = null;
var G__42342 = (0);
var G__42343 = (0);
seq__42267 = G__42340;
chunk__42268 = G__42341;
count__42269 = G__42342;
i__42270 = G__42343;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__42271){
var map__42272 = p__42271;
var map__42272__$1 = (((((!((map__42272 == null))))?(((((map__42272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42272):map__42272);
var exception_data = map__42272__$1;
var file = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__42272,map__42272__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__42272,map__42272__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__42272,map__42272__$1,exception_data,file,type,message){
return (function (p1__42226_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__42226_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__42272,map__42272__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__42274 = "Compile Exception - ";
var G__42274__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__42274,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__42274);
if(cljs.core.truth_(file)){
return [G__42274__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__42274__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
