// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh_test.routes');
goog.require('cljs.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('reitit.coercion.spec');
goog.require('re_frame.core');
goog.require('posh_test.events');
goog.require('posh_test.subs');
goog.require('posh_test.views.home.panel');
goog.require('posh_test.views.about.panel');
/**
 * Return relative url for given route. Url can be used in HTML links.
 */
posh_test.routes.href = (function posh_test$routes$href(var_args){
var G__28010 = arguments.length;
switch (G__28010) {
case 1:
return posh_test.routes.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return posh_test.routes.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return posh_test.routes.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh_test.routes.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return posh_test.routes.href.call(null,k,null,null);
});

posh_test.routes.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return posh_test.routes.href.call(null,k,params,null);
});

posh_test.routes.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.easy.href.call(null,k,params,query);
});

posh_test.routes.href.cljs$lang$maxFixedArity = 3;

posh_test.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),new cljs.core.Keyword(null,"view","view",1247994814),posh_test.views.home.panel.home_panel], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about-panel","about-panel",334628515),new cljs.core.Keyword(null,"view","view",1247994814),posh_test.views.about.panel.about_panel], null)], null)], null);
posh_test.routes.on_navigate = (function posh_test$routes$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.events","navigated","posh-test.events/navigated",917452912),new_match], null));
} else {
return null;
}
});
posh_test.routes.router = reitit.frontend.router.call(null,posh_test.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
posh_test.routes.init_routes_BANG_ = (function posh_test$routes$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_.call(null,posh_test.routes.router,posh_test.routes.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
posh_test.routes.router_component = (function posh_test$routes$router_component(){
var current_view_fn = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.subs","current-route","posh-test.subs/current-route",-1781456134)], null)))));
if(cljs.core.truth_(current_view_fn)){
return current_view_fn.call(null);
} else {
return null;
}
});

//# sourceMappingURL=routes.js.map
