// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41544 = arguments.length;
var i__4731__auto___41545 = (0);
while(true){
if((i__4731__auto___41545 < len__4730__auto___41544)){
args__4736__auto__.push((arguments[i__4731__auto___41545]));

var G__41546 = (i__4731__auto___41545 + (1));
i__4731__auto___41545 = G__41546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__41547__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__41547 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__41548__i = 0, G__41548__a = new Array(arguments.length -  0);
while (G__41548__i < G__41548__a.length) {G__41548__a[G__41548__i] = arguments[G__41548__i + 0]; ++G__41548__i;}
  children = new cljs.core.IndexedSeq(G__41548__a,0,null);
} 
return G__41547__delegate.call(this,children);};
G__41547.cljs$lang$maxFixedArity = 0;
G__41547.cljs$lang$applyTo = (function (arglist__41549){
var children = cljs.core.seq(arglist__41549);
return G__41547__delegate(children);
});
G__41547.cljs$core$IFn$_invoke$arity$variadic = G__41547__delegate;
return G__41547;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq41542){
var G__41543 = cljs.core.first.call(null,seq41542);
var seq41542__$1 = cljs.core.next.call(null,seq41542);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41543,seq41542__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__41550__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__41550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41551__i = 0, G__41551__a = new Array(arguments.length -  0);
while (G__41551__i < G__41551__a.length) {G__41551__a[G__41551__i] = arguments[G__41551__i + 0]; ++G__41551__i;}
  args = new cljs.core.IndexedSeq(G__41551__a,0,null);
} 
return G__41550__delegate.call(this,args);};
G__41550.cljs$lang$maxFixedArity = 0;
G__41550.cljs$lang$applyTo = (function (arglist__41552){
var args = cljs.core.seq(arglist__41552);
return G__41550__delegate(args);
});
G__41550.cljs$core$IFn$_invoke$arity$variadic = G__41550__delegate;
return G__41550;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41554 = arguments.length;
var i__4731__auto___41555 = (0);
while(true){
if((i__4731__auto___41555 < len__4730__auto___41554)){
args__4736__auto__.push((arguments[i__4731__auto___41555]));

var G__41556 = (i__4731__auto___41555 + (1));
i__4731__auto___41555 = G__41556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq41553){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41553));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__41560 = arguments.length;
switch (G__41560) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___41562 = arguments.length;
var i__4731__auto___41563 = (0);
while(true){
if((i__4731__auto___41563 < len__4730__auto___41562)){
args_arr__4751__auto__.push((arguments[i__4731__auto___41563]));

var G__41564 = (i__4731__auto___41563 + (1));
i__4731__auto___41563 = G__41564;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq41558){
var G__41559 = cljs.core.first.call(null,seq41558);
var seq41558__$1 = cljs.core.next.call(null,seq41558);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41559,seq41558__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41567 = arguments.length;
var i__4731__auto___41568 = (0);
while(true){
if((i__4731__auto___41568 < len__4730__auto___41567)){
args__4736__auto__.push((arguments[i__4731__auto___41568]));

var G__41569 = (i__4731__auto___41568 + (1));
i__4731__auto___41568 = G__41569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq41565){
var G__41566 = cljs.core.first.call(null,seq41565);
var seq41565__$1 = cljs.core.next.call(null,seq41565);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41566,seq41565__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41572 = arguments.length;
var i__4731__auto___41573 = (0);
while(true){
if((i__4731__auto___41573 < len__4730__auto___41572)){
args__4736__auto__.push((arguments[i__4731__auto___41573]));

var G__41574 = (i__4731__auto___41573 + (1));
i__4731__auto___41573 = G__41574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq41570){
var G__41571 = cljs.core.first.call(null,seq41570);
var seq41570__$1 = cljs.core.next.call(null,seq41570);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41571,seq41570__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map
