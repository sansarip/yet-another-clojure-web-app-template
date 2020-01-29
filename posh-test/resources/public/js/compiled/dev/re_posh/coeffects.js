// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_posh.coeffects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859),(function (coeffects,_){
return cljs.core.assoc.call(null,coeffects,new cljs.core.Keyword(null,"ds","ds",-257415859),cljs.core.deref.call(null,cljs.core.deref.call(null,re_posh.db.store)));
}));

//# sourceMappingURL=coeffects.js.map
