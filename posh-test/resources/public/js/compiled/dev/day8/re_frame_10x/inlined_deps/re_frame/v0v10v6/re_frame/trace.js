// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.call(null,(0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$start_trace(p__38944){
var map__38945 = p__38944;
var map__38945__$1 = (((((!((map__38945 == null))))?(((((map__38945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38945):map__38945);
var operation = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce.call(null,(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__38947_38967 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__38948_38968 = null;
var count__38949_38969 = (0);
var i__38950_38970 = (0);
while(true){
if((i__38950_38970 < count__38949_38969)){
var vec__38959_38971 = cljs.core._nth.call(null,chunk__38948_38968,i__38950_38970);
var k_38972 = cljs.core.nth.call(null,vec__38959_38971,(0),null);
var cb_38973 = cljs.core.nth.call(null,vec__38959_38971,(1),null);
try{cb_38973.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e38962){var e_38974 = e38962;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_38972,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_38974);
}

var G__38975 = seq__38947_38967;
var G__38976 = chunk__38948_38968;
var G__38977 = count__38949_38969;
var G__38978 = (i__38950_38970 + (1));
seq__38947_38967 = G__38975;
chunk__38948_38968 = G__38976;
count__38949_38969 = G__38977;
i__38950_38970 = G__38978;
continue;
} else {
var temp__5735__auto___38979 = cljs.core.seq.call(null,seq__38947_38967);
if(temp__5735__auto___38979){
var seq__38947_38980__$1 = temp__5735__auto___38979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38947_38980__$1)){
var c__4550__auto___38981 = cljs.core.chunk_first.call(null,seq__38947_38980__$1);
var G__38982 = cljs.core.chunk_rest.call(null,seq__38947_38980__$1);
var G__38983 = c__4550__auto___38981;
var G__38984 = cljs.core.count.call(null,c__4550__auto___38981);
var G__38985 = (0);
seq__38947_38967 = G__38982;
chunk__38948_38968 = G__38983;
count__38949_38969 = G__38984;
i__38950_38970 = G__38985;
continue;
} else {
var vec__38963_38986 = cljs.core.first.call(null,seq__38947_38980__$1);
var k_38987 = cljs.core.nth.call(null,vec__38963_38986,(0),null);
var cb_38988 = cljs.core.nth.call(null,vec__38963_38986,(1),null);
try{cb_38988.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e38966){var e_38989 = e38966;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_38987,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces),e_38989);
}

var G__38990 = cljs.core.next.call(null,seq__38947_38980__$1);
var G__38991 = null;
var G__38992 = (0);
var G__38993 = (0);
seq__38947_38967 = G__38990;
chunk__38948_38968 = G__38991;
count__38949_38969 = G__38992;
i__38950_38970 = G__38993;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
