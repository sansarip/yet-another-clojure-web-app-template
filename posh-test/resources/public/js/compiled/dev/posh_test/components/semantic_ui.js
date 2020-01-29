// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh_test.components.semantic_ui');
goog.require('cljs.core');
goog.require('cljsjs.semantic_ui_react');
goog.require('goog.object');
posh_test.components.semantic_ui.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
posh_test.components.semantic_ui.semantic_ui = semanticUIReact;
/**
 * Get a component from sematic-ui-react:
 *  (component "Button")
 *  (component "Menu" "Item")
 */
posh_test.components.semantic_ui.component = (function posh_test$components$semantic_ui$component(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34867 = arguments.length;
var i__4731__auto___34868 = (0);
while(true){
if((i__4731__auto___34868 < len__4730__auto___34867)){
args__4736__auto__.push((arguments[i__4731__auto___34868]));

var G__34869 = (i__4731__auto___34868 + (1));
i__4731__auto___34868 = G__34869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return posh_test.components.semantic_ui.component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

posh_test.components.semantic_ui.component.cljs$core$IFn$_invoke$arity$variadic = (function (k,ks){
if(cljs.core.seq.call(null,ks)){
return cljs.core.apply.call(null,goog.object.getValueByKeys,posh_test.components.semantic_ui.semantic_ui,k,ks);
} else {
return goog.object.get(posh_test.components.semantic_ui.semantic_ui,k);
}
});

posh_test.components.semantic_ui.component.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
posh_test.components.semantic_ui.component.cljs$lang$applyTo = (function (seq34865){
var G__34866 = cljs.core.first.call(null,seq34865);
var seq34865__$1 = cljs.core.next.call(null,seq34865);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34866,seq34865__$1);
});


//# sourceMappingURL=semantic_ui.js.map
