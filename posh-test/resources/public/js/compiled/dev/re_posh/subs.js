// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_posh.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
goog.require('re_posh.db');
goog.require('reagent.ratom');
goog.require('posh.reagent');
if((typeof re_posh !== 'undefined') && (typeof re_posh.subs !== 'undefined') && (typeof re_posh.subs.execute_sub !== 'undefined')){
} else {
re_posh.subs.execute_sub = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"re-posh.subs","execute-sub"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,re_posh.subs.execute_sub,new cljs.core.Keyword(null,"query","query",-1288509510),(function (p__24382){
var map__24383 = p__24382;
var map__24383__$1 = (((((!((map__24383 == null))))?(((((map__24383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24383):map__24383);
var query = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var pre_q = cljs.core.partial.call(null,posh.reagent.q,query,cljs.core.deref.call(null,re_posh.db.store));
return cljs.core.apply.call(null,pre_q,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,variables));
}));
cljs.core._add_method.call(null,re_posh.subs.execute_sub,new cljs.core.Keyword(null,"pull","pull",-860544805),(function (p__24385){
var map__24386 = p__24385;
var map__24386__$1 = (((((!((map__24386 == null))))?(((((map__24386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);
var pattern = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var id = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return posh.reagent.pull.call(null,cljs.core.deref.call(null,re_posh.db.store),pattern,id);
}));
cljs.core._add_method.call(null,re_posh.subs.execute_sub,new cljs.core.Keyword(null,"pull-many","pull-many",217148130),(function (p__24388){
var map__24389 = p__24388;
var map__24389__$1 = (((((!((map__24389 == null))))?(((((map__24389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24389):map__24389);
var pattern = cljs.core.get.call(null,map__24389__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var ids = cljs.core.get.call(null,map__24389__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
return posh.reagent.pull_many.call(null,cljs.core.deref.call(null,re_posh.db.store),pattern,ids);
}));
/**
 * For a given `query-id` register a `config` function and input `signals`
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a function that generates config for query or pull for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A config function is always the last argument and it has this general form:
 *   `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the config functions gets as a first argument.
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-config-fn)   ;; (fn [db v]  ... a-value)
 *   The node's input signal defaults to datascript database, and the value within `ds` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here, the form is (fn [db v] ... signal | [signal])
 *     config-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many.
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   config function - either a singleton or sequence, paralleling
 *   the structure returned by the signal function.
 *   Here, is an example signal-fn, which returns a vector of input signals.
 *     (fn [query-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 *   For that signal function, the config function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 *   then the config function must be written to expect a single value
 *   as the 1st argument:
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 *   
 */
re_posh.subs.reg_sub = (function re_posh$subs$reg_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24397 = arguments.length;
var i__4731__auto___24398 = (0);
while(true){
if((i__4731__auto___24398 < len__4730__auto___24397)){
args__4736__auto__.push((arguments[i__4731__auto___24398]));

var G__24399 = (i__4731__auto___24398 + (1));
i__4731__auto___24398 = G__24399;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

re_posh.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var config_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-posh: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__24393 = cljs.core.count.call(null,input_args);
switch (G__24393) {
case (0):
return ((function (G__24393,config_fn,input_args,err_header){
return (function() {
var G__24401 = null;
var G__24401__1 = (function (_){
return null;
});
var G__24401__2 = (function (_,___$1){
return null;
});
G__24401 = function(_,___$1){
switch(arguments.length){
case 1:
return G__24401__1.call(this,_);
case 2:
return G__24401__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24401.cljs$core$IFn$_invoke$arity$1 = G__24401__1;
G__24401.cljs$core$IFn$_invoke$arity$2 = G__24401__2;
return G__24401;
})()
;})(G__24393,config_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to ba an inputs function, got: ",f);
}

return f;

break;
case (2):
var vec__24394 = input_args;
var marker = cljs.core.nth.call(null,vec__24394,(0),null);
var vec = cljs.core.nth.call(null,vec__24394,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got: ",marker);
}

return ((function (vec__24394,marker,vec,G__24393,config_fn,input_args,err_header){
return (function() {
var re_posh$subs$inp_fn = null;
var re_posh$subs$inp_fn__1 = (function (_){
return re_frame.core.subscribe.call(null,vec);
});
var re_posh$subs$inp_fn__2 = (function (_,___$1){
return re_frame.core.subscribe.call(null,vec);
});
re_posh$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_posh$subs$inp_fn__1.call(this,_);
case 2:
return re_posh$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_posh$subs$inp_fn__1;
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_posh$subs$inp_fn__2;
return re_posh$subs$inp_fn;
})()
;})(vec__24394,marker,vec,G__24393,config_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__24393,config_fn,input_args,err_header){
return (function() {
var re_posh$subs$inp_fn = null;
var re_posh$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.core.subscribe,vecs);
});
var re_posh$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.core.subscribe,vecs);
});
re_posh$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_posh$subs$inp_fn__1.call(this,_);
case 2:
return re_posh$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_posh$subs$inp_fn__1;
re_posh$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_posh$subs$inp_fn__2;
return re_posh$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__24393,config_fn,input_args,err_header))

}
})();
return re_frame.core.reg_sub_raw.call(null,query_id,((function (config_fn,input_args,err_header,inputs_fn){
return (function (_,params){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,input_args),(0))){
return re_posh.subs.execute_sub.call(null,config_fn.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,re_posh.db.store)),params));
} else {
return reagent.ratom.make_reaction.call(null,((function (config_fn,input_args,err_header,inputs_fn){
return (function (){
var inputs = inputs_fn.call(null,params);
var signals = ((cljs.core.list_QMARK_.call(null,inputs))?cljs.core.map.call(null,cljs.core.deref,inputs):cljs.core.deref.call(null,inputs));
return cljs.core.deref.call(null,re_posh.subs.execute_sub.call(null,config_fn.call(null,signals,params)));
});})(config_fn,input_args,err_header,inputs_fn))
);
}
});})(config_fn,input_args,err_header,inputs_fn))
);
});

re_posh.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
re_posh.subs.reg_sub.cljs$lang$applyTo = (function (seq24391){
var G__24392 = cljs.core.first.call(null,seq24391);
var seq24391__$1 = cljs.core.next.call(null,seq24391);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24392,seq24391__$1);
});

/**
 * Syntax sugar for writing queries. It allows writing query subscription
 * in a very simple way:
 * 
 *   (re-posh/reg-query-sub
 * :query-id
 * '[:find ...
 *   :in $ $1 $2  ;; <- all variables go here
 *   :where ...])
 * 
 *   It's possible to subscibe to this query with
 * 
 *   (re-posh/subscribe [:query-id var-1 var-2])
 * 
 *   so that variables `var-1` and `var-2` will be automatically sent to `:in` form
 *   
 */
re_posh.subs.reg_query_sub = (function re_posh$subs$reg_query_sub(sub_name,query){
return re_posh.subs.reg_sub.call(null,sub_name,(function (_,p__24402){
var vec__24403 = p__24402;
var seq__24404 = cljs.core.seq.call(null,vec__24403);
var first__24405 = cljs.core.first.call(null,seq__24404);
var seq__24404__$1 = cljs.core.next.call(null,seq__24404);
var ___$1 = first__24405;
var params = seq__24404__$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),params], null);
}));
});
/**
 * Syntax sugar for writing pull queries. It allows writing pull subscription
 *   in a very simple way:
 * 
 *   (re-posh/reg-pull-sub
 * :pull-id
 * '[*]) ;;<- pull pattern
 * 
 *   It's possible to subscribe to this pull query with
 * 
 *   (re-posh/subscibe [:pull-id id])
 * 
 *   Where id is an entity id
 */
re_posh.subs.reg_pull_sub = (function re_posh$subs$reg_pull_sub(sub_name,pattern){
return re_posh.subs.reg_sub.call(null,sub_name,(function (_,p__24406){
var vec__24407 = p__24406;
var ___$1 = cljs.core.nth.call(null,vec__24407,(0),null);
var id = cljs.core.nth.call(null,vec__24407,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
}));
});
/**
 * Syntax sugar for writing pull-many queries.
 *   Same as reg-pull-sub but takes vector of eids under key :ids
 * 
 *   (reg-pull-many-sub
 * :things
 * '[*])
 * 
 *   It's possible to subscribe to this pull-many query with
 * 
 *   (re-posh/subscribe [:things ids])
 * 
 *   Where ids is a sequence of entity ids
 */
re_posh.subs.reg_pull_many_sub = (function re_posh$subs$reg_pull_many_sub(sub_name,pattern){
return re_posh.subs.reg_sub.call(null,sub_name,(function (_,p__24410){
var vec__24411 = p__24410;
var ___$1 = cljs.core.nth.call(null,vec__24411,(0),null);
var ids = cljs.core.nth.call(null,vec__24411,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null);
}));
});

//# sourceMappingURL=subs.js.map
