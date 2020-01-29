// Compiled by ClojureScript 1.10.520 {}
goog.provide('spade.util');
goog.require('cljs.core');
goog.require('clojure.string');
spade.util.factory__GT_name = (function spade$util$factory__GT_name(factory){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,factory.name,"_factory$",""),/[_$]/,"-"),/^-/,"_");
});
spade.util.sanitize = (function spade$util$sanitize(s){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/[^A-Za-z0-9-_]/,"-");
});
spade.util.params__GT_key = (function spade$util$params__GT_key(p){
try{return cljs.core.hash.call(null,p);
}catch (e24588){var _ = e24588;
return null;
}});
spade.util.build_style_name = (function spade$util$build_style_name(base,style_key,params){
if(cljs.core.truth_(style_key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spade.util.sanitize.call(null,style_key))].join('');
} else {
if(cljs.core.seq.call(null,params)){
var temp__5733__auto__ = spade.util.params__GT_key.call(null,params);
if(cljs.core.truth_(temp__5733__auto__)){
var pkey = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkey)].join('');
} else {
var msg = ["WARNING: no key provided for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)].join('');
console.warn(msg);

return base;
}
} else {
return base;

}
}
});

//# sourceMappingURL=util.js.map
