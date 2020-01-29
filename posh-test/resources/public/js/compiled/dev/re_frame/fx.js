// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__24052 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24053 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24053;

try{try{var seq__24054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24055 = null;
var count__24056 = (0);
var i__24057 = (0);
while(true){
if((i__24057 < count__24056)){
var vec__24064 = cljs.core._nth.call(null,chunk__24055,i__24057);
var effect_key = cljs.core.nth.call(null,vec__24064,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24064,(1),null);
var temp__5733__auto___24086 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___24086)){
var effect_fn_24087 = temp__5733__auto___24086;
effect_fn_24087.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24088 = seq__24054;
var G__24089 = chunk__24055;
var G__24090 = count__24056;
var G__24091 = (i__24057 + (1));
seq__24054 = G__24088;
chunk__24055 = G__24089;
count__24056 = G__24090;
i__24057 = G__24091;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24054);
if(temp__5735__auto__){
var seq__24054__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24054__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24054__$1);
var G__24092 = cljs.core.chunk_rest.call(null,seq__24054__$1);
var G__24093 = c__4550__auto__;
var G__24094 = cljs.core.count.call(null,c__4550__auto__);
var G__24095 = (0);
seq__24054 = G__24092;
chunk__24055 = G__24093;
count__24056 = G__24094;
i__24057 = G__24095;
continue;
} else {
var vec__24067 = cljs.core.first.call(null,seq__24054__$1);
var effect_key = cljs.core.nth.call(null,vec__24067,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24067,(1),null);
var temp__5733__auto___24096 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___24096)){
var effect_fn_24097 = temp__5733__auto___24096;
effect_fn_24097.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24098 = cljs.core.next.call(null,seq__24054__$1);
var G__24099 = null;
var G__24100 = (0);
var G__24101 = (0);
seq__24054 = G__24098;
chunk__24055 = G__24099;
count__24056 = G__24100;
i__24057 = G__24101;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__23874__auto___24102 = re_frame.interop.now.call(null);
var duration__23875__auto___24103 = (end__23874__auto___24102 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23875__auto___24103,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__23874__auto___24102);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24052;
}} else {
var seq__24070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24071 = null;
var count__24072 = (0);
var i__24073 = (0);
while(true){
if((i__24073 < count__24072)){
var vec__24080 = cljs.core._nth.call(null,chunk__24071,i__24073);
var effect_key = cljs.core.nth.call(null,vec__24080,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24080,(1),null);
var temp__5733__auto___24104 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___24104)){
var effect_fn_24105 = temp__5733__auto___24104;
effect_fn_24105.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24106 = seq__24070;
var G__24107 = chunk__24071;
var G__24108 = count__24072;
var G__24109 = (i__24073 + (1));
seq__24070 = G__24106;
chunk__24071 = G__24107;
count__24072 = G__24108;
i__24073 = G__24109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24070);
if(temp__5735__auto__){
var seq__24070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24070__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24070__$1);
var G__24110 = cljs.core.chunk_rest.call(null,seq__24070__$1);
var G__24111 = c__4550__auto__;
var G__24112 = cljs.core.count.call(null,c__4550__auto__);
var G__24113 = (0);
seq__24070 = G__24110;
chunk__24071 = G__24111;
count__24072 = G__24112;
i__24073 = G__24113;
continue;
} else {
var vec__24083 = cljs.core.first.call(null,seq__24070__$1);
var effect_key = cljs.core.nth.call(null,vec__24083,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24083,(1),null);
var temp__5733__auto___24114 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___24114)){
var effect_fn_24115 = temp__5733__auto___24114;
effect_fn_24115.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24116 = cljs.core.next.call(null,seq__24070__$1);
var G__24117 = null;
var G__24118 = (0);
var G__24119 = (0);
seq__24070 = G__24116;
chunk__24071 = G__24117;
count__24072 = G__24118;
i__24073 = G__24119;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24120 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24121 = null;
var count__24122 = (0);
var i__24123 = (0);
while(true){
if((i__24123 < count__24122)){
var map__24128 = cljs.core._nth.call(null,chunk__24121,i__24123);
var map__24128__$1 = (((((!((map__24128 == null))))?(((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);
var effect = map__24128__$1;
var ms = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24120,chunk__24121,count__24122,i__24123,map__24128,map__24128__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24120,chunk__24121,count__24122,i__24123,map__24128,map__24128__$1,effect,ms,dispatch))
,ms);
}


var G__24132 = seq__24120;
var G__24133 = chunk__24121;
var G__24134 = count__24122;
var G__24135 = (i__24123 + (1));
seq__24120 = G__24132;
chunk__24121 = G__24133;
count__24122 = G__24134;
i__24123 = G__24135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24120);
if(temp__5735__auto__){
var seq__24120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24120__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24120__$1);
var G__24136 = cljs.core.chunk_rest.call(null,seq__24120__$1);
var G__24137 = c__4550__auto__;
var G__24138 = cljs.core.count.call(null,c__4550__auto__);
var G__24139 = (0);
seq__24120 = G__24136;
chunk__24121 = G__24137;
count__24122 = G__24138;
i__24123 = G__24139;
continue;
} else {
var map__24130 = cljs.core.first.call(null,seq__24120__$1);
var map__24130__$1 = (((((!((map__24130 == null))))?(((((map__24130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24130):map__24130);
var effect = map__24130__$1;
var ms = cljs.core.get.call(null,map__24130__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24130__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24120,chunk__24121,count__24122,i__24123,map__24130,map__24130__$1,effect,ms,dispatch,seq__24120__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24120,chunk__24121,count__24122,i__24123,map__24130,map__24130__$1,effect,ms,dispatch,seq__24120__$1,temp__5735__auto__))
,ms);
}


var G__24140 = cljs.core.next.call(null,seq__24120__$1);
var G__24141 = null;
var G__24142 = (0);
var G__24143 = (0);
seq__24120 = G__24140;
chunk__24121 = G__24141;
count__24122 = G__24142;
i__24123 = G__24143;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__24144 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24145 = null;
var count__24146 = (0);
var i__24147 = (0);
while(true){
if((i__24147 < count__24146)){
var event = cljs.core._nth.call(null,chunk__24145,i__24147);
re_frame.router.dispatch.call(null,event);


var G__24148 = seq__24144;
var G__24149 = chunk__24145;
var G__24150 = count__24146;
var G__24151 = (i__24147 + (1));
seq__24144 = G__24148;
chunk__24145 = G__24149;
count__24146 = G__24150;
i__24147 = G__24151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24144);
if(temp__5735__auto__){
var seq__24144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24144__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24144__$1);
var G__24152 = cljs.core.chunk_rest.call(null,seq__24144__$1);
var G__24153 = c__4550__auto__;
var G__24154 = cljs.core.count.call(null,c__4550__auto__);
var G__24155 = (0);
seq__24144 = G__24152;
chunk__24145 = G__24153;
count__24146 = G__24154;
i__24147 = G__24155;
continue;
} else {
var event = cljs.core.first.call(null,seq__24144__$1);
re_frame.router.dispatch.call(null,event);


var G__24156 = cljs.core.next.call(null,seq__24144__$1);
var G__24157 = null;
var G__24158 = (0);
var G__24159 = (0);
seq__24144 = G__24156;
chunk__24145 = G__24157;
count__24146 = G__24158;
i__24147 = G__24159;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24160 = cljs.core.seq.call(null,value);
var chunk__24161 = null;
var count__24162 = (0);
var i__24163 = (0);
while(true){
if((i__24163 < count__24162)){
var event = cljs.core._nth.call(null,chunk__24161,i__24163);
clear_event.call(null,event);


var G__24164 = seq__24160;
var G__24165 = chunk__24161;
var G__24166 = count__24162;
var G__24167 = (i__24163 + (1));
seq__24160 = G__24164;
chunk__24161 = G__24165;
count__24162 = G__24166;
i__24163 = G__24167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__24160);
if(temp__5735__auto__){
var seq__24160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24160__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24160__$1);
var G__24168 = cljs.core.chunk_rest.call(null,seq__24160__$1);
var G__24169 = c__4550__auto__;
var G__24170 = cljs.core.count.call(null,c__4550__auto__);
var G__24171 = (0);
seq__24160 = G__24168;
chunk__24161 = G__24169;
count__24162 = G__24170;
i__24163 = G__24171;
continue;
} else {
var event = cljs.core.first.call(null,seq__24160__$1);
clear_event.call(null,event);


var G__24172 = cljs.core.next.call(null,seq__24160__$1);
var G__24173 = null;
var G__24174 = (0);
var G__24175 = (0);
seq__24160 = G__24172;
chunk__24161 = G__24173;
count__24162 = G__24174;
i__24163 = G__24175;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
