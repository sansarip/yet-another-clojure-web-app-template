// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh_test.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('datascript.core');
goog.require('posh_test.events');
goog.require('posh_test.routes');
goog.require('posh_test.views');
goog.require('posh_test.config');
posh_test.core.dev_setup = (function posh_test$core$dev_setup(){
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
posh_test.core.mount_root = (function posh_test$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

posh_test.routes.init_routes_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh_test.views.main_panel], null),document.getElementById("app"));
});
posh_test.core.re_render = (function posh_test$core$re_render(){
return posh_test.core.mount_root.call(null);
});
posh_test.core.init = (function posh_test$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.events","initialize-db","posh-test.events/initialize-db",-1299547244)], null));

re_posh.core.connect_BANG_.call(null,datascript.core.create_conn.call(null));

re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.events","initialize-ds","posh-test.events/initialize-ds",1805659082)], null));

posh_test.core.dev_setup.call(null);

return posh_test.core.mount_root.call(null);
});
goog.exportSymbol('posh_test.core.init', posh_test.core.init);

//# sourceMappingURL=core.js.map
