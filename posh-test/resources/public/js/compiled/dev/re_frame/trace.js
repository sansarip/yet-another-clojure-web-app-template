// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23896){
var map__23897 = p__23896;
var map__23897__$1 = (((((!((map__23897 == null))))?(((((map__23897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23897):map__23897);
var operation = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__23899_23919 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__23900_23920 = null;
var count__23901_23921 = (0);
var i__23902_23922 = (0);
while(true){
if((i__23902_23922 < count__23901_23921)){
var vec__23911_23923 = cljs.core._nth.call(null,chunk__23900_23920,i__23902_23922);
var k_23924 = cljs.core.nth.call(null,vec__23911_23923,(0),null);
var cb_23925 = cljs.core.nth.call(null,vec__23911_23923,(1),null);
try{cb_23925.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e23914){var e_23926 = e23914;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_23924,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_23926);
}

var G__23927 = seq__23899_23919;
var G__23928 = chunk__23900_23920;
var G__23929 = count__23901_23921;
var G__23930 = (i__23902_23922 + (1));
seq__23899_23919 = G__23927;
chunk__23900_23920 = G__23928;
count__23901_23921 = G__23929;
i__23902_23922 = G__23930;
continue;
} else {
var temp__5735__auto___23931 = cljs.core.seq.call(null,seq__23899_23919);
if(temp__5735__auto___23931){
var seq__23899_23932__$1 = temp__5735__auto___23931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23899_23932__$1)){
var c__4550__auto___23933 = cljs.core.chunk_first.call(null,seq__23899_23932__$1);
var G__23934 = cljs.core.chunk_rest.call(null,seq__23899_23932__$1);
var G__23935 = c__4550__auto___23933;
var G__23936 = cljs.core.count.call(null,c__4550__auto___23933);
var G__23937 = (0);
seq__23899_23919 = G__23934;
chunk__23900_23920 = G__23935;
count__23901_23921 = G__23936;
i__23902_23922 = G__23937;
continue;
} else {
var vec__23915_23938 = cljs.core.first.call(null,seq__23899_23932__$1);
var k_23939 = cljs.core.nth.call(null,vec__23915_23938,(0),null);
var cb_23940 = cljs.core.nth.call(null,vec__23915_23938,(1),null);
try{cb_23940.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e23918){var e_23941 = e23918;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_23939,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_23941);
}

var G__23942 = cljs.core.next.call(null,seq__23899_23932__$1);
var G__23943 = null;
var G__23944 = (0);
var G__23945 = (0);
seq__23899_23919 = G__23942;
chunk__23900_23920 = G__23943;
count__23901_23921 = G__23944;
i__23902_23922 = G__23945;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
