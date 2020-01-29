// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_.call(null,pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first.call(null,pattern);
var or__4131__auto__ = cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"_","_",-1201019570,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var and__4120__auto__ = cljs.core.set_QMARK_.call(null,p);
if(and__4120__auto__){
return p.call(null,cljs.core.first.call(null,datom));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core._EQ_.call(null,p,cljs.core.first.call(null,datom));
}
}
})())){
var G__16301 = cljs.core.rest.call(null,pattern);
var G__16302 = cljs.core.rest.call(null,datom);
pattern = G__16301;
datom = G__16302;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some.call(null,(function (p1__16303_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_.call(null,p1__16303_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__16305 = patterns;
if(cljs.core._EQ_.call(null,null,G__16305)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,G__16305)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__16305)){
return true;
} else {
return cljs.core.some.call(null,((function (G__16305){
return (function (p1__16304_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,patterns,p1__16304_SHARP_);
});})(G__16305))
,datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__16307 = patterns;
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,G__16307)){
return datoms;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__16307)){
return datoms;
} else {
if(cljs.core._EQ_.call(null,null,G__16307)){
return null;
} else {
return cljs.core.filter.call(null,((function (G__16307){
return (function (p1__16306_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,patterns,p1__16306_SHARP_);
});})(G__16307))
,datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_.call(null,patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774),cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,entids,rest_datom)),new_patterns),new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963),leftover_patterns], null);
} else {
if(cljs.core._EQ_.call(null,rest_datom,cljs.core.rest.call(null,cljs.core.first.call(null,patterns)))){
var G__16308 = clojure.set.union.call(null,entids,((cljs.core.set_QMARK_.call(null,cljs.core.ffirst.call(null,patterns)))?cljs.core.ffirst.call(null,patterns):cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,patterns)], null))));
var G__16309 = rest_datom;
var G__16310 = cljs.core.rest.call(null,patterns);
var G__16311 = new_patterns;
var G__16312 = leftover_patterns;
entids = G__16308;
rest_datom = G__16309;
patterns = G__16310;
new_patterns = G__16311;
leftover_patterns = G__16312;
continue;
} else {
var G__16313 = entids;
var G__16314 = rest_datom;
var G__16315 = cljs.core.rest.call(null,patterns);
var G__16316 = new_patterns;
var G__16317 = cljs.core.cons.call(null,cljs.core.first.call(null,patterns),leftover_patterns);
entids = G__16313;
rest_datom = G__16314;
patterns = G__16315;
new_patterns = G__16316;
leftover_patterns = G__16317;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_.call(null,leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst.call(null,leftover_patterns);
return ((cljs.core.set_QMARK_.call(null,id)) || (typeof id === 'number'));
})()){
var r = posh.lib.datom_matcher.combine_entids.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,cljs.core.first.call(null,leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__16318 = new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774).cljs$core$IFn$_invoke$arity$1(r);
var G__16319 = new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963).cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__16318;
leftover_patterns = G__16319;
continue;
} else {
var G__16320 = cljs.core.cons.call(null,cljs.core.first.call(null,leftover_patterns),new_patterns);
var G__16321 = cljs.core.rest.call(null,leftover_patterns);
new_patterns = G__16320;
leftover_patterns = G__16321;
continue;
}
}
break;
}
});

//# sourceMappingURL=datom_matcher.js.map
