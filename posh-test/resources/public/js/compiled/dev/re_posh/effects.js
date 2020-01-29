// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"transact","transact",-267998670),(function (datoms){
return posh.reagent.transact_BANG_.call(null,cljs.core.deref.call(null,re_posh.db.store),datoms);
}));

//# sourceMappingURL=effects.js.map
