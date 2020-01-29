// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('cljs.core');
goog.require('react');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.global$module$react = goog.global["React"];
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper = (function (){
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.impl.template/NativeWrapper";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.impl.template/NativeWrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$__GT_NativeWrapper(){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cached_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,k)){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__5737__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$kv_conv(o,k,v){
var G__38629 = o;
(G__38629[day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_prop_name.call(null,k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,v));

return G__38629;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$convert_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__38630__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__38630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38631__i = 0, G__38631__a = new Array(arguments.length -  0);
while (G__38631__i < G__38631__a.length) {G__38631__a[G__38631__i] = arguments[G__38631__i + 0]; ++G__38631__i;}
  args = new cljs.core.IndexedSeq(G__38631__a,0,null);
} 
return G__38630__delegate.call(this,args);};
G__38630.cljs$lang$maxFixedArity = 0;
G__38630.cljs$lang$applyTo = (function (arglist__38632){
var args = cljs.core.seq(arglist__38632);
return G__38630__delegate(args);
});
G__38630.cljs$core$IFn$_invoke$arity$variadic = G__38630__delegate;
return G__38630;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cached_custom_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,k)){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k));
if((temp__5737__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__5737__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$custom_kv_conv(o,k,v){
var G__38633 = o;
(G__38633[day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name.call(null,k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,v));

return G__38633;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$convert_custom_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__38634__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__38634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38635__i = 0, G__38635__a = new Array(arguments.length -  0);
while (G__38635__i < G__38635__a.length) {G__38635__a[G__38635__i] = arguments[G__38635__i + 0]; ++G__38635__i;}
  args = new cljs.core.IndexedSeq(G__38635__a,0,null);
} 
return G__38634__delegate.call(this,args);};
G__38634.cljs$lang$maxFixedArity = 0;
G__38634.cljs$lang$applyTo = (function (arglist__38636){
var args = cljs.core.seq(arglist__38636);
return G__38634__delegate(args);
});
G__38634.cljs$core$IFn$_invoke$arity$variadic = G__38634__delegate;
return G__38634;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oset = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$oset(o,k,v){
var G__38637 = (((o == null))?({}):o);
(G__38637[k] = v);

return G__38637;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oget = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.set_id_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$set_id_class(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["class"]);
var G__38638 = props;
var G__38638__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__38638,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__38638);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__38638__$1,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var old_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if((old_class == null)){
return class$;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_class)].join('');
}
})());
} else {
return G__38638__$1;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.stringify_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$stringify_class(p__38639){
var map__38640 = p__38639;
var map__38640__$1 = (((((!((map__38640 == null))))?(((((map__38640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38640):map__38640);
var props = map__38640__$1;
var class$ = cljs.core.get.call(null,map__38640__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_.call(null,class$)){
return cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.identity,class$)));
} else {
return props;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$convert_props(props,id_class){
var props__$1 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.set_id_class.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.stringify_class.call(null,props),id_class);
if(cljs.core.truth_((id_class["custom"]))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value.call(null,props__$1);
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,props__$1);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_node_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__38642){
var map__38643 = p__38642;
var map__38643__$1 = (((((!((map__38643 == null))))?(((((map__38643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38643):map__38643);
var on_write = cljs.core.get.call(null,map__38643__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
return on_write.call(null,rendered_value);
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_after_render.call(null,((function (node_value,map__38643,map__38643__$1,on_write){
return (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value.call(null,component);
});})(node_value,map__38643,map__38643__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
on_write.call(null,rendered_value);
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node.call(null,this$);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_node_set_value.call(null,node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_handle_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_after_render.call(null,(function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_render_setup = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((jsprops == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4120__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__38646 = jsprops;
(G__38646["defaultValue"] = value);

(G__38646["onChange"] = ((function (G__38646,v,value,on_change){
return (function (p1__38645_SHARP_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__38645_SHARP_);
});})(G__38646,v,value,on_change))
);

return G__38646;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_unmount = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_component_QMARK_(x){
var G__38647 = x;
switch (G__38647) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$reagent_input(){
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class == null)){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.create_class.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_spec);
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.parse_tag = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__38649 = cljs.core.next.call(null,cljs.core.re_matches.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__38649,(0),null);
var id = cljs.core.nth.call(null,vec__38649,(1),null);
var class$ = cljs.core.nth.call(null,vec__38649,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)].join(''),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "class": class$__$1, "custom": cljs.core.not_EQ_.call(null,(-1),tag.indexOf("-"))});
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.try_get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e38652){var e = e38652;
return null;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$key_from_vec(v){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__5737__auto__;
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reag_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$reag_element(tag,v){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__5739__auto___38653 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec.call(null,v);
if((temp__5739__auto___38653 == null)){
} else {
var key_38654 = temp__5739__auto___38653;
(jsprops["key"] = key_38654);
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.call(null,c,jsprops);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.fragment_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,((hasprops)?props:null));
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5739__auto___38655 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec.call(null,argv);
if((temp__5739__auto___38655 == null)){
} else {
var key_38656 = temp__5739__auto___38655;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oset.call(null,jsprops,"key",key_38656);
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.global$module$react.Fragment,jsprops,first_child);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$adapt_react_class(c){
var G__38657 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper.call(null);
(G__38657["name"] = c);

(G__38657["id"] = null);

(G__38657["class"] = null);

return G__38657;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.tag_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_parse = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cached_parse(x){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.tag_name_cache,x);
if((temp__5737__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.tag_name_cache[x] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__5737__auto__;
return s;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_.call(null,comp)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oset.call(null,jsprops,"key",key));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.str_coll = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.fun_name.call(null,x);
var G__38659 = n;
switch (G__38659) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll));

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$hiccup_err(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38663 = arguments.length;
var i__4731__auto___38664 = (0);
while(true){
if((i__4731__auto___38664 < len__4730__auto___38663)){
args__4736__auto__.push((arguments[i__4731__auto___38664]));

var G__38665 = (i__4731__auto___38664 + (1));
i__4731__auto___38664 = G__38665;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.str_coll.call(null,v),"\n",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)].join('');
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq38661){
var G__38662 = cljs.core.first.call(null,seq38661);
var seq38661__$1 = cljs.core.next.call(null,seq38661);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38662,seq38661__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.vec_to_elem = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty"),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form"),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.fragment_element.call(null,v);
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__38666 = pos;
switch (G__38666) {
case (-1):
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag"),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp)))){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Expected React component in"),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__38668 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
v = G__38668;
continue;

}
} else {
if((tag instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reag_element.call(null,tag,v);

}
}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$as_element(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__4607__auto___38670 = a.length;
var i_38671 = (0);
while(true){
if((i_38671 < n__4607__auto___38670)){
(a[i_38671] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,(a[i_38671])));

var G__38672 = (i_38671 + (1));
i_38671 = G__38672;
continue;
} else {
}
break;
}

return a;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_dev = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__4607__auto___38673 = a.length;
var i_38674 = (0);
while(true){
if((i_38674 < n__4607__auto___38673)){
var val_38675 = (a[i_38674]);
if(((cljs.core.vector_QMARK_.call(null,val_38675)) && ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec.call(null,val_38675) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_38674] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,val_38675));

var G__38676 = (i_38674 + (1));
i_38674 = G__38676;
continue;
} else {
}
break;
}

return a;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_check = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__38677 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__38677,(0),null);
var derefed = cljs.core.nth.call(null,vec__38677,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console)){
(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall")].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console)){
(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key")].join(''));
} else {
}
} else {
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__38680 = (cljs.core.count.call(null,argv) - first_child);
switch (G__38680) {
case (0):
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.call(null,comp,jsprops);

break;
case (1):
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.call(null,comp,jsprops,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.apply(null,cljs.core.reduce_kv.call(null,((function (G__38680){
return (function (a,k,v){
if((k >= first_child)){
a.push(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__38680))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map
