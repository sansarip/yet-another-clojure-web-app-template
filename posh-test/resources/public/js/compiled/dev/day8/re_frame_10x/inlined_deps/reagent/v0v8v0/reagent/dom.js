// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38684 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38685 = true;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38685;

try{return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__38684,_STAR_always_update_STAR__temp_val__38685){
return (function (){
var _STAR_always_update_STAR__orig_val__38686 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38687 = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38687;

try{cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38686;
}});})(_STAR_always_update_STAR__orig_val__38684,_STAR_always_update_STAR__temp_val__38685))
);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38684;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$render(var_args){
var G__38689 = arguments.length;
switch (G__38689) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.call(null,comp,container,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render_comp.call(null,f,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var seq__38691_38695 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.roots)));
var chunk__38692_38696 = null;
var count__38693_38697 = (0);
var i__38694_38698 = (0);
while(true){
if((i__38694_38698 < count__38693_38697)){
var v_38699 = cljs.core._nth.call(null,chunk__38692_38696,i__38694_38698);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component,v_38699);


var G__38700 = seq__38691_38695;
var G__38701 = chunk__38692_38696;
var G__38702 = count__38693_38697;
var G__38703 = (i__38694_38698 + (1));
seq__38691_38695 = G__38700;
chunk__38692_38696 = G__38701;
count__38693_38697 = G__38702;
i__38694_38698 = G__38703;
continue;
} else {
var temp__5735__auto___38704 = cljs.core.seq.call(null,seq__38691_38695);
if(temp__5735__auto___38704){
var seq__38691_38705__$1 = temp__5735__auto___38704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38691_38705__$1)){
var c__4550__auto___38706 = cljs.core.chunk_first.call(null,seq__38691_38705__$1);
var G__38707 = cljs.core.chunk_rest.call(null,seq__38691_38705__$1);
var G__38708 = c__4550__auto___38706;
var G__38709 = cljs.core.count.call(null,c__4550__auto___38706);
var G__38710 = (0);
seq__38691_38695 = G__38707;
chunk__38692_38696 = G__38708;
count__38693_38697 = G__38709;
i__38694_38698 = G__38710;
continue;
} else {
var v_38711 = cljs.core.first.call(null,seq__38691_38705__$1);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.re_render_component,v_38711);


var G__38712 = cljs.core.next.call(null,seq__38691_38705__$1);
var G__38713 = null;
var G__38714 = (0);
var G__38715 = (0);
seq__38691_38695 = G__38712;
chunk__38692_38696 = G__38713;
count__38693_38697 = G__38714;
i__38694_38698 = G__38715;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
