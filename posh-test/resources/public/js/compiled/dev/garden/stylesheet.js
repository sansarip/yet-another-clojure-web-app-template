// Compiled by ClojureScript 1.10.520 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
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
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24550 = arguments.length;
var i__4731__auto___24551 = (0);
while(true){
if((i__4731__auto___24551 < len__4730__auto___24550)){
args__4736__auto__.push((arguments[i__4731__auto___24551]));

var G__24552 = (i__4731__auto___24551 + (1));
i__4731__auto___24551 = G__24552;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__24553__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__24553 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__24554__i = 0, G__24554__a = new Array(arguments.length -  0);
while (G__24554__i < G__24554__a.length) {G__24554__a[G__24554__i] = arguments[G__24554__i + 0]; ++G__24554__i;}
  children = new cljs.core.IndexedSeq(G__24554__a,0,null);
} 
return G__24553__delegate.call(this,children);};
G__24553.cljs$lang$maxFixedArity = 0;
G__24553.cljs$lang$applyTo = (function (arglist__24555){
var children = cljs.core.seq(arglist__24555);
return G__24553__delegate(children);
});
G__24553.cljs$core$IFn$_invoke$arity$variadic = G__24553__delegate;
return G__24553;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq24548){
var G__24549 = cljs.core.first.call(null,seq24548);
var seq24548__$1 = cljs.core.next.call(null,seq24548);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24549,seq24548__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__24556__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__24556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24557__i = 0, G__24557__a = new Array(arguments.length -  0);
while (G__24557__i < G__24557__a.length) {G__24557__a[G__24557__i] = arguments[G__24557__i + 0]; ++G__24557__i;}
  args = new cljs.core.IndexedSeq(G__24557__a,0,null);
} 
return G__24556__delegate.call(this,args);};
G__24556.cljs$lang$maxFixedArity = 0;
G__24556.cljs$lang$applyTo = (function (arglist__24558){
var args = cljs.core.seq(arglist__24558);
return G__24556__delegate(args);
});
G__24556.cljs$core$IFn$_invoke$arity$variadic = G__24556__delegate;
return G__24556;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24560 = arguments.length;
var i__4731__auto___24561 = (0);
while(true){
if((i__4731__auto___24561 < len__4730__auto___24560)){
args__4736__auto__.push((arguments[i__4731__auto___24561]));

var G__24562 = (i__4731__auto___24561 + (1));
i__4731__auto___24561 = G__24562;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq24559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24559));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__24566 = arguments.length;
switch (G__24566) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___24568 = arguments.length;
var i__4731__auto___24569 = (0);
while(true){
if((i__4731__auto___24569 < len__4730__auto___24568)){
args_arr__4751__auto__.push((arguments[i__4731__auto___24569]));

var G__24570 = (i__4731__auto___24569 + (1));
i__4731__auto___24569 = G__24570;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq24564){
var G__24565 = cljs.core.first.call(null,seq24564);
var seq24564__$1 = cljs.core.next.call(null,seq24564);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24565,seq24564__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24573 = arguments.length;
var i__4731__auto___24574 = (0);
while(true){
if((i__4731__auto___24574 < len__4730__auto___24573)){
args__4736__auto__.push((arguments[i__4731__auto___24574]));

var G__24575 = (i__4731__auto___24574 + (1));
i__4731__auto___24574 = G__24575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq24571){
var G__24572 = cljs.core.first.call(null,seq24571);
var seq24571__$1 = cljs.core.next.call(null,seq24571);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24572,seq24571__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24578 = arguments.length;
var i__4731__auto___24579 = (0);
while(true){
if((i__4731__auto___24579 < len__4730__auto___24578)){
args__4736__auto__.push((arguments[i__4731__auto___24579]));

var G__24580 = (i__4731__auto___24579 + (1));
i__4731__auto___24579 = G__24580;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq24576){
var G__24577 = cljs.core.first.call(null,seq24576);
var seq24576__$1 = cljs.core.next.call(null,seq24576);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24577,seq24576__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24583 = arguments.length;
var i__4731__auto___24584 = (0);
while(true){
if((i__4731__auto___24584 < len__4730__auto___24583)){
args__4736__auto__.push((arguments[i__4731__auto___24584]));

var G__24585 = (i__4731__auto___24584 + (1));
i__4731__auto___24584 = G__24585;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq24581){
var G__24582 = cljs.core.first.call(null,seq24581);
var seq24581__$1 = cljs.core.next.call(null,seq24581);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24582,seq24581__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map
