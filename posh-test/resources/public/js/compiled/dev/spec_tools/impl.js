// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.impl');
goog.require('cljs.core');
goog.require('cljs.analyzer.api');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
goog.require('clojure.walk');
spec_tools.impl.cljs_sym = (function spec_tools$impl$cljs_sym(x){
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.impl.clj_sym = (function spec_tools$impl$clj_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
var v = x;
return cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.ns().name()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.sym()));
} else {
return x;
}
});
spec_tools.impl.__GT_sym = (function spec_tools$impl$__GT_sym(x){
return spec_tools.impl.cljs_sym.call(null,x);
});
spec_tools.impl.unfn = (function spec_tools$impl$unfn(cljs_QMARK_,expr){
if(((cljs.core.seq_QMARK_.call(null,expr)) && ((cljs.core.first.call(null,expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"fn*",cljs.core.name.call(null,cljs.core.first.call(null,expr)))))){
var vec__16224 = cljs.core.rest.call(null,expr);
var seq__16225 = cljs.core.seq.call(null,vec__16224);
var first__16226 = cljs.core.first.call(null,seq__16225);
var seq__16225__$1 = cljs.core.next.call(null,seq__16225);
var vec__16227 = first__16226;
var s = cljs.core.nth.call(null,vec__16227,(0),null);
var form = seq__16225__$1;
return cljs.core.conj.call(null,clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",-950237169,null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),(cljs.core.truth_(cljs_QMARK_)?new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null):new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null)));
} else {
return expr;
}
});
spec_tools.impl.polish = (function spec_tools$impl$polish(x){
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.flatten.call(null,cljs.core.keep.call(null,spec_tools.impl.polish,x));
} else {
if((x instanceof cljs.core.Symbol)){
return null;
} else {
return x;

}
}
});
spec_tools.impl.polish_un = (function spec_tools$impl$polish_un(x){
var G__16230 = x;
var G__16230__$1 = (((G__16230 == null))?null:spec_tools.impl.polish.call(null,G__16230));
var G__16230__$2 = (((G__16230__$1 == null))?null:cljs.core.name.call(null,G__16230__$1));
if((G__16230__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__16230__$2);
}
});
spec_tools.impl.un_key = (function spec_tools$impl$un_key(x){
var G__16231 = x;
var G__16231__$1 = (((G__16231 == null))?null:cljs.core.name.call(null,G__16231));
if((G__16231__$1 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__16231__$1);
}
});
spec_tools.impl.with_key__GT_spec = (function spec_tools$impl$with_key__GT_spec(p__16232){
var map__16233 = p__16232;
var map__16233__$1 = (((((!((map__16233 == null))))?(((((map__16233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16233):map__16233);
var data = map__16233__$1;
var req = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_un = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var opt_un = cljs.core.get.call(null,map__16233__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var key__GT_spec = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),cljs.core.concat.call(null,opt,req)));
var un_key__GT_spec = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,spec_tools.impl.un_key,cljs.core.identity),cljs.core.concat.call(null,opt_un,req_un)));
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"key->spec","key->spec",1088543019),cljs.core.merge.call(null,key__GT_spec,un_key__GT_spec));
});
spec_tools.impl.with_real_keys = (function spec_tools$impl$with_real_keys(p__16235){
var map__16236 = p__16235;
var map__16236__$1 = (((((!((map__16236 == null))))?(((((map__16236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16236):map__16236);
var data = map__16236__$1;
var req_un = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__16236__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var G__16238 = data;
var G__16238__$1 = (cljs.core.truth_(req_un)?cljs.core.update.call(null,G__16238,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.partial.call(null,cljs.core.mapv,spec_tools.impl.un_key)):G__16238);
if(cljs.core.truth_(opt_un)){
return cljs.core.update.call(null,G__16238__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.partial.call(null,cljs.core.mapv,spec_tools.impl.un_key));
} else {
return G__16238__$1;
}
});
spec_tools.impl.parse_keys = (function spec_tools$impl$parse_keys(form){
var m = (function (){var G__16242 = form;
var G__16242__$1 = (((G__16242 == null))?null:cljs.core.rest.call(null,G__16242));
if((G__16242__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__16242__$1);
}
})();
var G__16243 = m;
var G__16243__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"req","req",-326448303).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,G__16243,new cljs.core.Keyword(null,"req","req",-326448303),((function (G__16243,m){
return (function (p1__16239_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,spec_tools.impl.polish,cljs.core.flatten.call(null,p1__16239_SHARP_)));
});})(G__16243,m))
):G__16243);
var G__16243__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"req-un","req-un",1074571008).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,G__16243__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008),((function (G__16243,G__16243__$1,m){
return (function (p1__16240_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,spec_tools.impl.polish,cljs.core.flatten.call(null,p1__16240_SHARP_)));
});})(G__16243,G__16243__$1,m))
):G__16243__$1);
var G__16243__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"opt-un","opt-un",883442496).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.call(null,G__16243__$2,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),((function (G__16243,G__16243__$1,G__16243__$2,m){
return (function (p1__16241_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,spec_tools.impl.polish,p1__16241_SHARP_));
});})(G__16243,G__16243__$1,G__16243__$2,m))
):G__16243__$2);
return spec_tools.impl.with_real_keys.call(null,spec_tools.impl.with_key__GT_spec.call(null,G__16243__$3));

});
spec_tools.impl.extract_keys = (function spec_tools$impl$extract_keys(form){
var map__16244 = (function (){var G__16245 = form;
var G__16245__$1 = (((G__16245 == null))?null:cljs.core.rest.call(null,G__16245));
if((G__16245__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,G__16245__$1);
}
})();
var map__16244__$1 = (((((!((map__16244 == null))))?(((((map__16244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16244):map__16244);
var req = cljs.core.get.call(null,map__16244__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.call(null,map__16244__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__16244__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__16244__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
return cljs.core.flatten.call(null,cljs.core.map.call(null,spec_tools.impl.polish,cljs.core.concat.call(null,req,opt,req_un,opt_un)));
});
spec_tools.impl.extract_pred_and_info = (function spec_tools$impl$extract_pred_and_info(x){
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x),cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"spec","spec",347520401))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
spec_tools.impl.strip_fn_if_needed = (function spec_tools$impl$strip_fn_if_needed(form){
var head = cljs.core.first.call(null,form);
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(3))) && (cljs.core._EQ_.call(null,head,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null))))){
return cljs.core.nth.call(null,form,(2));
} else {
return form;
}
});
spec_tools.impl.normalize_symbol = (function spec_tools$impl$normalize_symbol(kw){
var G__16247 = (function (){var and__4120__auto__ = (kw instanceof cljs.core.Symbol);
if(and__4120__auto__){
return cljs.core.namespace.call(null,kw);
} else {
return and__4120__auto__;
}
})();
switch (G__16247) {
case "spec-tools.spec":
return cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,kw));

break;
case "cljs.core":
return cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,kw));

break;
case "cljs.spec.alpha":
return cljs.core.symbol.call(null,"clojure.spec.alpha",cljs.core.name.call(null,kw));

break;
default:
return kw;

}
});
spec_tools.impl.extract_form = (function spec_tools$impl$extract_form(spec){
if(cljs.core.seq_QMARK_.call(null,spec)){
return spec;
} else {
return cljs.spec.alpha.form.call(null,spec);
}
});
spec_tools.impl.qualified_name = (function spec_tools$impl$qualified_name(key){
if((key instanceof cljs.core.Keyword)){
var temp__5733__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5733__auto__)){
var nn = temp__5733__auto__;
return [nn,"/",cljs.core.name.call(null,key)].join('');
} else {
return cljs.core.name.call(null,key);
}
} else {
return key;
}
});
spec_tools.impl.nilable_spec_QMARK_ = (function spec_tools$impl$nilable_spec_QMARK_(spec){
var form = (function (){var and__4120__auto__ = spec;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.spec.alpha.form.call(null,spec);
} else {
return and__4120__auto__;
}
})();
return cljs.core.boolean$.call(null,((cljs.core.seq_QMARK_.call(null,form))?(function (){var G__16249 = form;
var G__16249__$1 = (((G__16249 == null))?null:cljs.core.seq.call(null,G__16249));
var G__16249__$2 = (((G__16249__$1 == null))?null:cljs.core.first.call(null,G__16249__$1));
if((G__16249__$2 == null)){
return null;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),null], null), null).call(null,G__16249__$2);
}
})():null));
});
/**
 * Unwrap [x] to x. Asserts that coll has exactly one element.
 */
spec_tools.impl.unwrap = (function spec_tools$impl$unwrap(coll){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,coll))){
} else {
throw (new Error("Assert failed: (= 1 (count coll))"));
}

return cljs.core.first.call(null,coll);
});
spec_tools.impl.deep_merge = (function spec_tools$impl$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16251 = arguments.length;
var i__4731__auto___16252 = (0);
while(true){
if((i__4731__auto___16252 < len__4730__auto___16251)){
args__4736__auto__.push((arguments[i__4731__auto___16252]));

var G__16253 = (i__4731__auto___16252 + (1));
i__4731__auto___16252 = G__16253;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (values){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,values)){
return cljs.core.apply.call(null,cljs.core.merge_with,spec_tools.impl.deep_merge,values);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.coll_QMARK_,values)){
return cljs.core.reduce.call(null,cljs.core.into,values);
} else {
return cljs.core.last.call(null,values);

}
}
});

spec_tools.impl.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
spec_tools.impl.deep_merge.cljs$lang$applyTo = (function (seq16250){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16250));
});

spec_tools.impl.unlift_keys = (function spec_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.call(null,(function (acc,p__16254){
var vec__16255 = p__16254;
var k = cljs.core.nth.call(null,vec__16255,(0),null);
var v = cljs.core.nth.call(null,vec__16255,(1),null);
if(cljs.core._EQ_.call(null,ns_name,cljs.core.namespace.call(null,k))){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,cljs.core.name.call(null,k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
spec_tools.impl.register_spec_BANG_ = (function spec_tools$impl$register_spec_BANG_(k,s){
return cljs.spec.alpha.def_impl.call(null,k,cljs.spec.alpha.form.call(null,s),s);
});
spec_tools.impl.coll_of_spec = (function spec_tools$impl$coll_of_spec(pred,type){
var form = spec_tools.form.resolve_form.call(null,pred);
return cljs.spec.alpha.every_impl.call(null,form,pred,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"into","into",-150836029),type,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",-150836029),null,(1),null)),(new cljs.core.List(null,type,null,(1),null))))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.coll_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null], null),null);
});
spec_tools.impl.map_of_spec = (function spec_tools$impl$map_of_spec(kpred,vpred){
var forms = cljs.core.map.call(null,spec_tools.form.resolve_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
var tuple = cljs.spec.alpha.tuple_impl.call(null,forms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
return cljs.spec.alpha.every_impl.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),forms))),tuple,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),((function (forms,tuple){
return (function (_,v){
return cljs.core.nth.call(null,v,(0));
});})(forms,tuple))
,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),null,(1),null)),forms,(new cljs.core.List(null,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.coll_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null], null),null);
});
spec_tools.impl.keys_spec = (function spec_tools$impl$keys_spec(p__16260){
var map__16261 = p__16260;
var map__16261__$1 = (((((!((map__16261 == null))))?(((((map__16261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16261):map__16261);
var req = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var req_specs = cljs.core.flatten.call(null,cljs.core.map.call(null,spec_tools.impl.polish,cljs.core.concat.call(null,req,req_un)));
var opt_specs = cljs.core.flatten.call(null,cljs.core.map.call(null,spec_tools.impl.polish,cljs.core.concat.call(null,opt,opt_un)));
var req_keys = cljs.core.flatten.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,spec_tools.impl.polish,req),cljs.core.map.call(null,spec_tools.impl.polish_un,req_un)));
var opt_keys = cljs.core.flatten.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,spec_tools.impl.polish,opt),cljs.core.map.call(null,spec_tools.impl.polish_un,opt_un)));
var pred_exprs = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (req_specs,opt_specs,req_keys,opt_keys,map__16261,map__16261__$1,req,opt,req_un,opt_un){
return (function (p1__16258_SHARP_){
return cljs.core.map_QMARK_.call(null,p1__16258_SHARP_);
});})(req_specs,opt_specs,req_keys,opt_keys,map__16261,map__16261__$1,req,opt,req_un,opt_un))
], null),cljs.core.map.call(null,((function (req_specs,opt_specs,req_keys,opt_keys,map__16261,map__16261__$1,req,opt,req_un,opt_un){
return (function (x){
return ((function (req_specs,opt_specs,req_keys,opt_keys,map__16261,map__16261__$1,req,opt,req_un,opt_un){
return (function (p1__16259_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__16259_SHARP_,x);
});
;})(req_specs,opt_specs,req_keys,opt_keys,map__16261,map__16261__$1,req,opt,req_un,opt_un))
});})(req_specs,opt_specs,req_keys,opt_keys,map__16261,map__16261__$1,req,opt,req_un,opt_un))
,req_keys));
var pred_forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)))))], null),cljs.core.map.call(null,((function (req_specs,opt_specs,req_keys,opt_keys,pred_exprs,map__16261,map__16261__$1,req,opt,req_un,opt_un){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)))));
});})(req_specs,opt_specs,req_keys,opt_keys,pred_exprs,map__16261,map__16261__$1,req,opt,req_un,opt_un))
,req_keys));
var keys_pred = ((function (req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__16261,map__16261__$1,req,opt,req_un,opt_un){
return (function (x){
return cljs.core.reduce.call(null,((function (req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__16261,map__16261__$1,req,opt,req_un,opt_un){
return (function (_,p){
var or__4131__auto__ = p.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.reduced.call(null,false);
}
});})(req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__16261,map__16261__$1,req,opt,req_un,opt_un))
,true,pred_exprs);
});})(req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__16261,map__16261__$1,req,opt,req_un,opt_un))
;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[req_un,opt_un,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms,opt]));
});
spec_tools.impl.nilable_spec = (function spec_tools$impl$nilable_spec(pred){
var form = spec_tools.form.resolve_form.call(null,pred);
return cljs.spec.alpha.nilable_impl.call(null,form,pred,null);
});
spec_tools.impl.or_spec = (function spec_tools$impl$or_spec(v){
var ks = cljs.core.mapv.call(null,cljs.core.first,v);
var preds = cljs.core.mapv.call(null,cljs.core.second,v);
var forms = cljs.core.mapv.call(null,spec_tools.form.resolve_form,preds);
return cljs.spec.alpha.or_spec_impl.call(null,ks,forms,preds,null);
});

//# sourceMappingURL=impl.js.map
