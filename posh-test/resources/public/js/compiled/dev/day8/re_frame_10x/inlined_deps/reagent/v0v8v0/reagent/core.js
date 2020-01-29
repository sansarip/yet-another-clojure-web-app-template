// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
goog.require('cljs.core');
goog.require('react');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.global$module$react = goog.global["React"];
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$create_element(var_args){
var G__38740 = arguments.length;
switch (G__38740) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38742 = arguments.length;
var i__4731__auto___38743 = (0);
while(true){
if((i__4731__auto___38743 < len__4730__auto___38742)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38743]));

var G__38744 = (i__4731__auto___38743 + (1));
i__4731__auto___38743 = G__38744;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.call(null,type,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.global$module$react.createElement.call(null,type,props);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.global$module$react.createElement.call(null,type,props,child);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.global$module$react.createElement,type,props,child,children);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq38736){
var G__38737 = cljs.core.first.call(null,seq38736);
var seq38736__$1 = cljs.core.next.call(null,seq38736);
var G__38738 = cljs.core.first.call(null,seq38736__$1);
var seq38736__$2 = cljs.core.next.call(null,seq38736__$1);
var G__38739 = cljs.core.first.call(null,seq38736__$2);
var seq38736__$3 = cljs.core.next.call(null,seq38736__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38737,G__38738,G__38739,seq38736__$3);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$as_element(form){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$render(var_args){
var G__38746 = arguments.length;
switch (G__38746) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.call(null,comp,container);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.call(null,comp,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_component_at_node.call(null,container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.as_component = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.as_element;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render_component = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render;
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
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.force_update_all.call(null);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render.call(null);
});
goog.exportSymbol('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update_all', day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$create_class(spec){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$force_update(var_args){
var G__38749 = arguments.length;
switch (G__38749) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.call(null,this$,false);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.force_update.call(null,this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render.call(null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node.call(null,this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$merge_props(defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$atom(var_args){
var G__38754 = arguments.length;
switch (G__38754) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38756 = arguments.length;
var i__4731__auto___38757 = (0);
while(true){
if((i__4731__auto___38757 < len__4730__auto___38756)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38757]));

var G__38758 = (i__4731__auto___38757 + (1));
i__4731__auto___38757 = G__38758;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.call(null,x);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom,x,rest);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$lang$applyTo = (function (seq38752){
var G__38753 = cljs.core.first.call(null,seq38752);
var seq38752__$1 = cljs.core.next.call(null,seq38752);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38753,seq38752__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38761 = arguments.length;
var i__4731__auto___38762 = (0);
while(true){
if((i__4731__auto___38762 < len__4730__auto___38761)){
args__4736__auto__.push((arguments[i__4731__auto___38762]));

var G__38763 = (i__4731__auto___38762 + (1));
i__4731__auto___38762 = G__38763;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track.call(null,f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$lang$applyTo = (function (seq38759){
var G__38760 = cljs.core.first.call(null,seq38759);
var seq38759__$1 = cljs.core.next.call(null,seq38759);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38760,seq38759__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38766 = arguments.length;
var i__4731__auto___38767 = (0);
while(true){
if((i__4731__auto___38767 < len__4730__auto___38766)){
args__4736__auto__.push((arguments[i__4731__auto___38767]));

var G__38768 = (i__4731__auto___38767 + (1));
i__4731__auto___38767 = G__38768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track_BANG_.call(null,f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq38764){
var G__38765 = cljs.core.first.call(null,seq38764);
var seq38764__$1 = cljs.core.next.call(null,seq38764);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38765,seq38764__$1);
});

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$wrap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38772 = arguments.length;
var i__4731__auto___38773 = (0);
while(true){
if((i__4731__auto___38773 < len__4730__auto___38772)){
args__4736__auto__.push((arguments[i__4731__auto___38773]));

var G__38774 = (i__4731__auto___38773 + (1));
i__4731__auto___38773 = G__38774;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,reset_fn)].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq38769){
var G__38770 = cljs.core.first.call(null,seq38769);
var seq38769__$1 = cljs.core.next.call(null,seq38769);
var G__38771 = cljs.core.first.call(null,seq38769__$1);
var seq38769__$2 = cljs.core.next.call(null,seq38769__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38770,G__38771,seq38769__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$rswap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38781 = arguments.length;
var i__4731__auto___38782 = (0);
while(true){
if((i__4731__auto___38782 < len__4730__auto___38781)){
args__4736__auto__.push((arguments[i__4731__auto___38782]));

var G__38783 = (i__4731__auto___38782 + (1));
i__4731__auto___38782 = G__38783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4131__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__38775_SHARP_){
return cljs.core.apply.call(null,f,p1__38775_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__5737__auto__ = (function (){var G__38780 = a.rswapfs;
if((G__38780 == null)){
return null;
} else {
return G__38780.shift();
}
})();
if((temp__5737__auto__ == null)){
return s;
} else {
var sf = temp__5737__auto__;
var G__38784 = sf.call(null,s);
s = G__38784;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq38776){
var G__38777 = cljs.core.first.call(null,seq38776);
var seq38776__$1 = cljs.core.next.call(null,seq38776);
var G__38778 = cljs.core.first.call(null,seq38776__$1);
var seq38776__$2 = cljs.core.next.call(null,seq38776__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38777,G__38778,seq38776__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$partial(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38787 = arguments.length;
var i__4731__auto___38788 = (0);
while(true){
if((i__4731__auto___38788 < len__4730__auto___38787)){
args__4736__auto__.push((arguments[i__4731__auto___38788]));

var G__38789 = (i__4731__auto___38788 + (1));
i__4731__auto___38788 = G__38789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.make_partial_fn.call(null,f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$lang$applyTo = (function (seq38785){
var G__38786 = cljs.core.first.call(null,seq38785);
var seq38785__$1 = cljs.core.next.call(null,seq38785);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38786,seq38785__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$component_path(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map
