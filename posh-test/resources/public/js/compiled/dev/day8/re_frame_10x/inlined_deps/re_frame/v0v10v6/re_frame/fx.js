// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39130 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39131 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39131;

try{try{var seq__39132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39133 = null;
var count__39134 = (0);
var i__39135 = (0);
while(true){
if((i__39135 < count__39134)){
var vec__39142 = cljs.core._nth.call(null,chunk__39133,i__39135);
var effect_key = cljs.core.nth.call(null,vec__39142,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39142,(1),null);
var temp__5733__auto___39164 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39164)){
var effect_fn_39165 = temp__5733__auto___39164;
effect_fn_39165.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39166 = seq__39132;
var G__39167 = chunk__39133;
var G__39168 = count__39134;
var G__39169 = (i__39135 + (1));
seq__39132 = G__39166;
chunk__39133 = G__39167;
count__39134 = G__39168;
i__39135 = G__39169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39132);
if(temp__5735__auto__){
var seq__39132__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39132__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39132__$1);
var G__39170 = cljs.core.chunk_rest.call(null,seq__39132__$1);
var G__39171 = c__4550__auto__;
var G__39172 = cljs.core.count.call(null,c__4550__auto__);
var G__39173 = (0);
seq__39132 = G__39170;
chunk__39133 = G__39171;
count__39134 = G__39172;
i__39135 = G__39173;
continue;
} else {
var vec__39145 = cljs.core.first.call(null,seq__39132__$1);
var effect_key = cljs.core.nth.call(null,vec__39145,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39145,(1),null);
var temp__5733__auto___39174 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39174)){
var effect_fn_39175 = temp__5733__auto___39174;
effect_fn_39175.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39176 = cljs.core.next.call(null,seq__39132__$1);
var G__39177 = null;
var G__39178 = (0);
var G__39179 = (0);
seq__39132 = G__39176;
chunk__39133 = G__39177;
count__39134 = G__39178;
i__39135 = G__39179;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38922__auto___39180 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__38923__auto___39181 = (end__38922__auto___39180 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38923__auto___39181,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__38922__auto___39180);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39130;
}} else {
var seq__39148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39149 = null;
var count__39150 = (0);
var i__39151 = (0);
while(true){
if((i__39151 < count__39150)){
var vec__39158 = cljs.core._nth.call(null,chunk__39149,i__39151);
var effect_key = cljs.core.nth.call(null,vec__39158,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39158,(1),null);
var temp__5733__auto___39182 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39182)){
var effect_fn_39183 = temp__5733__auto___39182;
effect_fn_39183.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39184 = seq__39148;
var G__39185 = chunk__39149;
var G__39186 = count__39150;
var G__39187 = (i__39151 + (1));
seq__39148 = G__39184;
chunk__39149 = G__39185;
count__39150 = G__39186;
i__39151 = G__39187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39148);
if(temp__5735__auto__){
var seq__39148__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39148__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39148__$1);
var G__39188 = cljs.core.chunk_rest.call(null,seq__39148__$1);
var G__39189 = c__4550__auto__;
var G__39190 = cljs.core.count.call(null,c__4550__auto__);
var G__39191 = (0);
seq__39148 = G__39188;
chunk__39149 = G__39189;
count__39150 = G__39190;
i__39151 = G__39191;
continue;
} else {
var vec__39161 = cljs.core.first.call(null,seq__39148__$1);
var effect_key = cljs.core.nth.call(null,vec__39161,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39161,(1),null);
var temp__5733__auto___39192 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39192)){
var effect_fn_39193 = temp__5733__auto___39192;
effect_fn_39193.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39194 = cljs.core.next.call(null,seq__39148__$1);
var G__39195 = null;
var G__39196 = (0);
var G__39197 = (0);
seq__39148 = G__39194;
chunk__39149 = G__39195;
count__39150 = G__39196;
i__39151 = G__39197;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39198 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39199 = null;
var count__39200 = (0);
var i__39201 = (0);
while(true){
if((i__39201 < count__39200)){
var map__39206 = cljs.core._nth.call(null,chunk__39199,i__39201);
var map__39206__$1 = (((((!((map__39206 == null))))?(((((map__39206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39206):map__39206);
var effect = map__39206__$1;
var ms = cljs.core.get.call(null,map__39206__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39206__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39198,chunk__39199,count__39200,i__39201,map__39206,map__39206__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__39198,chunk__39199,count__39200,i__39201,map__39206,map__39206__$1,effect,ms,dispatch))
,ms);
}


var G__39210 = seq__39198;
var G__39211 = chunk__39199;
var G__39212 = count__39200;
var G__39213 = (i__39201 + (1));
seq__39198 = G__39210;
chunk__39199 = G__39211;
count__39200 = G__39212;
i__39201 = G__39213;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39198);
if(temp__5735__auto__){
var seq__39198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39198__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39198__$1);
var G__39214 = cljs.core.chunk_rest.call(null,seq__39198__$1);
var G__39215 = c__4550__auto__;
var G__39216 = cljs.core.count.call(null,c__4550__auto__);
var G__39217 = (0);
seq__39198 = G__39214;
chunk__39199 = G__39215;
count__39200 = G__39216;
i__39201 = G__39217;
continue;
} else {
var map__39208 = cljs.core.first.call(null,seq__39198__$1);
var map__39208__$1 = (((((!((map__39208 == null))))?(((((map__39208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39208):map__39208);
var effect = map__39208__$1;
var ms = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39198,chunk__39199,count__39200,i__39201,map__39208,map__39208__$1,effect,ms,dispatch,seq__39198__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__39198,chunk__39199,count__39200,i__39201,map__39208,map__39208__$1,effect,ms,dispatch,seq__39198__$1,temp__5735__auto__))
,ms);
}


var G__39218 = cljs.core.next.call(null,seq__39198__$1);
var G__39219 = null;
var G__39220 = (0);
var G__39221 = (0);
seq__39198 = G__39218;
chunk__39199 = G__39219;
count__39200 = G__39220;
i__39201 = G__39221;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__39222 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39223 = null;
var count__39224 = (0);
var i__39225 = (0);
while(true){
if((i__39225 < count__39224)){
var event = cljs.core._nth.call(null,chunk__39223,i__39225);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__39226 = seq__39222;
var G__39227 = chunk__39223;
var G__39228 = count__39224;
var G__39229 = (i__39225 + (1));
seq__39222 = G__39226;
chunk__39223 = G__39227;
count__39224 = G__39228;
i__39225 = G__39229;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39222);
if(temp__5735__auto__){
var seq__39222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39222__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39222__$1);
var G__39230 = cljs.core.chunk_rest.call(null,seq__39222__$1);
var G__39231 = c__4550__auto__;
var G__39232 = cljs.core.count.call(null,c__4550__auto__);
var G__39233 = (0);
seq__39222 = G__39230;
chunk__39223 = G__39231;
count__39224 = G__39232;
i__39225 = G__39233;
continue;
} else {
var event = cljs.core.first.call(null,seq__39222__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__39234 = cljs.core.next.call(null,seq__39222__$1);
var G__39235 = null;
var G__39236 = (0);
var G__39237 = (0);
seq__39222 = G__39234;
chunk__39223 = G__39235;
count__39224 = G__39236;
i__39225 = G__39237;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__39238 = cljs.core.seq.call(null,value);
var chunk__39239 = null;
var count__39240 = (0);
var i__39241 = (0);
while(true){
if((i__39241 < count__39240)){
var event = cljs.core._nth.call(null,chunk__39239,i__39241);
clear_event.call(null,event);


var G__39242 = seq__39238;
var G__39243 = chunk__39239;
var G__39244 = count__39240;
var G__39245 = (i__39241 + (1));
seq__39238 = G__39242;
chunk__39239 = G__39243;
count__39240 = G__39244;
i__39241 = G__39245;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39238);
if(temp__5735__auto__){
var seq__39238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39238__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39238__$1);
var G__39246 = cljs.core.chunk_rest.call(null,seq__39238__$1);
var G__39247 = c__4550__auto__;
var G__39248 = cljs.core.count.call(null,c__4550__auto__);
var G__39249 = (0);
seq__39238 = G__39246;
chunk__39239 = G__39247;
count__39240 = G__39248;
i__39241 = G__39249;
continue;
} else {
var event = cljs.core.first.call(null,seq__39238__$1);
clear_event.call(null,event);


var G__39250 = cljs.core.next.call(null,seq__39238__$1);
var G__39251 = null;
var G__39252 = (0);
var G__39253 = (0);
seq__39238 = G__39250;
chunk__39239 = G__39251;
count__39240 = G__39252;
i__39241 = G__39253;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
