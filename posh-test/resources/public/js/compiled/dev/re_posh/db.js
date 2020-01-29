// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_posh.db');
goog.require('cljs.core');
goog.require('posh.reagent');
re_posh.db.store = cljs.core.atom.call(null,null);
re_posh.db.connect_BANG_ = (function re_posh$db$connect_BANG_(conn){

posh.reagent.posh_BANG_.call(null,conn);

return cljs.core.reset_BANG_.call(null,re_posh.db.store,conn);
});

//# sourceMappingURL=db.js.map
