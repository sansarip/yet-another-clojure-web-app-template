// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compression');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.selectors');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * The current compiler flags.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__4776__auto___40909 = (function (){
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_selector_context = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$with_selector_context(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40910 = arguments.length;
var i__4731__auto___40911 = (0);
while(true){
if((i__4731__auto___40911 < len__4730__auto___40910)){
args__4736__auto__.push((arguments[i__4731__auto___40911]));

var G__40912 = (i__4731__auto___40911 + (1));
i__4731__auto___40911 = G__40912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler","*selector-context*","day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler/*selector-context*",799505895,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq40905){
var G__40906 = cljs.core.first.call(null,seq40905);
var seq40905__$1 = cljs.core.next.call(null,seq40905);
var G__40907 = cljs.core.first.call(null,seq40905__$1);
var seq40905__$2 = cljs.core.next.call(null,seq40905__$1);
var G__40908 = cljs.core.first.call(null,seq40905__$2);
var seq40905__$3 = cljs.core.next.call(null,seq40905__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40906,G__40907,G__40908,seq40905__$3);
});

return null;
})()
;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__4776__auto___40917 = (function (){
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_media_query_context = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$with_media_query_context(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40918 = arguments.length;
var i__4731__auto___40919 = (0);
while(true){
if((i__4731__auto___40919 < len__4730__auto___40918)){
args__4736__auto__.push((arguments[i__4731__auto___40919]));

var G__40920 = (i__4731__auto___40919 + (1));
i__4731__auto___40919 = G__40920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler","*media-query-context*","day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler/*media-query-context*",-1528282623,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq40913){
var G__40914 = cljs.core.first.call(null,seq40913);
var seq40913__$1 = cljs.core.next.call(null,seq40913);
var G__40915 = cljs.core.first.call(null,seq40913__$1);
var seq40913__$2 = cljs.core.next.call(null,seq40913__$1);
var G__40916 = cljs.core.first.call(null,seq40913__$2);
var seq40913__$3 = cljs.core.next.call(null,seq40913__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40914,G__40915,G__40916,seq40913__$3);
});

return null;
})()
;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.vendors = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefixed_properties.call(null),property);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__4131__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_import_QMARK_.call(null,x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_.call(null,x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x)));
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.divide_vec = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,x);
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),coll);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_.call(null,declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__40921_SHARP_,p2__40922_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.call(null,p1__40921_SHARP_,"-",p2__40922_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__40923){
var vec__40924 = p__40923;
var k = cljs.core.nth.call(null,vec__40924,(0),null);
var v = cljs.core.nth.call(null,vec__40924,(1),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,v)){
return cljs.core.reduce.call(null,((function (vec__40924,k,v,prefix){
return (function (m1,p__40927){
var vec__40928 = p__40927;
var k1 = cljs.core.nth.call(null,vec__40928,(0),null);
var v1 = cljs.core.nth.call(null,vec__40928,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__40924,k,v,prefix))
,m,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.empty.call(null,declaration),declaration);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_.call(null,declaration)){
return declaration;
} else {
return cljs.core.with_meta.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,declaration),cljs.core.meta.call(null,declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.extract_reference = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__5735__auto__ = cljs.core.re_find.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.parent_selector_re,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__5735__auto__)){
var reference = temp__5735__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector_reference = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__5733__auto__)){
var reference = temp__5733__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),(new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference),null,(1),null)));
} else {
return selector;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__40931 = cljs.core.split_with.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__40931,(0),null);
var children = cljs.core.nth.call(null,vec__40931,(1),null);
var selector__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector.call(null,selector,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand.call(null,children);
var vec__40934 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.divide_vec.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__40934,(0),null);
var xs = cljs.core.nth.call(null,vec__40934,(1),null);
var ys = (function (){var _STAR_selector_context_STAR__orig_val__40937 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
var _STAR_selector_context_STAR__temp_val__40938 = ((cljs.core.seq.call(null,selector__$1))?selector__$1:day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__temp_val__40938;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,xs));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__orig_val__40937;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,declarations)));
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__40939){
var map__40940 = p__40939;
var map__40940__$1 = (((((!((map__40940 == null))))?(((((map__40940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40940):map__40940);
var value = cljs.core.get.call(null,map__40940__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__40942 = value;
var map__40942__$1 = (((((!((map__40942 == null))))?(((((map__40942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40942):map__40942);
var identifier = cljs.core.get.call(null,map__40942__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__40942__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,frames)], null),null,null,null)),null,(1),null));
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__5733__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return f.call(null,expression,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__40944){
var map__40945 = p__40944;
var map__40945__$1 = (((((!((map__40945 == null))))?(((((map__40945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40945):map__40945);
var value = cljs.core.get.call(null,map__40945__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__40947 = value;
var map__40947__$1 = (((((!((map__40947 == null))))?(((((map__40947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40947):map__40947);
var media_queries = cljs.core.get.call(null,map__40947__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__40947__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__40952 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__40953 = media_queries__$1;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__40953;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand.call(null,rules)));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__40952;
}})();
var vec__40948 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.divide_vec.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__40948,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__40948,(1),null);
return cljs.core.cons.call(null,(new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_stylesheet = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand.call(null,xs)));
});
goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.IExpandable,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,"null",(function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.IExpandable,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,"_",(function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_css(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma = ", ";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.colon = ": ";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.semicolon = ";";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace = " {\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace = "\n}";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__40955 = arguments.length;
switch (G__40955) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,xs);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__40958 = arguments.length;
switch (G__40958) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,xs);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4523__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$iter__40959(s__40960){
return (new cljs.core.LazySeq(null,(function (){
var s__40960__$1 = s__40960;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__40960__$1);
if(temp__5735__auto__){
var s__40960__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40960__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__40960__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__40962 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__40961 = (0);
while(true){
if((i__40961 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__40961);
cljs.core.chunk_append.call(null,b__40962,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__40964 = (i__40961 + (1));
i__40961 = G__40964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40962),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$iter__40959.call(null,cljs.core.chunk_rest.call(null,s__40960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40962),null);
}
} else {
var x = cljs.core.first.call(null,s__40960__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$iter__40959.call(null,cljs.core.rest.call(null,s__40960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,xs);
})();
return clojure.string.join.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma,ys);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_loc_re,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_value(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css.call(null,x);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_property_and_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_property_and_value(p__40965){
var vec__40966 = p__40965;
var prop = cljs.core.nth.call(null,vec__40966,(0),null);
var val = cljs.core.nth.call(null,vec__40966,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value,val):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value.call(null,val));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.call(null,prop,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.colon,val__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.add_blocks = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__40969_SHARP_){
return cljs.core.cons.call(null,p1__40969_SHARP_,f.call(null,p1__40969_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefixed_blocks = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__40970){
var vec__40971 = p__40970;
var p = cljs.core.nth.call(null,vec__40971,(0),null);
var v = cljs.core.nth.call(null,vec__40971,(1),null);
var iter__4523__auto__ = ((function (vec__40971,p,v){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__40974(s__40975){
return (new cljs.core.LazySeq(null,((function (vec__40971,p,v){
return (function (){
var s__40975__$1 = s__40975;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__40975__$1);
if(temp__5735__auto__){
var s__40975__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40975__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__40975__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__40977 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__40976 = (0);
while(true){
if((i__40976 < size__4522__auto__)){
var vendor = cljs.core._nth.call(null,c__4521__auto__,i__40976);
cljs.core.chunk_append.call(null,b__40977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__40978 = (i__40976 + (1));
i__40976 = G__40978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40977),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__40974.call(null,cljs.core.chunk_rest.call(null,s__40975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40977),null);
}
} else {
var vendor = cljs.core.first.call(null,s__40975__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__40974.call(null,cljs.core.rest.call(null,s__40975__$2)));
}
} else {
return null;
}
break;
}
});})(vec__40971,p,v))
,null,null));
});})(vec__40971,p,v))
;
return iter__4523__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_all_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.add_blocks.call(null,(function (block){
var vec__40979 = block;
var p = cljs.core.nth.call(null,vec__40979,(0),null);
var _ = cljs.core.nth.call(null,vec__40979,(1),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_all_properties:day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_property_and_value,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_declaration.call(null,declaration)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_selector = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_selector(selector){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_rule(p__40982){
var vec__40983 = p__40982;
var selector = cljs.core.nth.call(null,vec__40983,(0),null);
var declarations = cljs.core.nth.call(null,vec__40983,(1),null);
var rule = vec__40983;
if(((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_selector.call(null,selector)),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace,cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,declarations)))),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr_part = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_media_expr_part(p__40986){
var vec__40987 = p__40986;
var k = cljs.core.nth.call(null,vec__40987,(0),null);
var v = cljs.core.nth.call(null,vec__40987,(1),null);
var vec__40990 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__40990,(0),null);
var sv = cljs.core.nth.call(null,vec__40990,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__4120__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.colon,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_unit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__40993 = css_unit;
var map__40993__$1 = (((((!((map__40993 == null))))?(((((map__40993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40993):map__40993);
var magnitude = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__40993__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.name.call(null,unit)].join('');
});
/**
 * Render a CSS function.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_function = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__40995 = css_function;
var map__40995__$1 = (((((!((map__40995 == null))))?(((((map__40995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40995):map__40995);
var function$ = cljs.core.get.call(null,map__40995__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__40995__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,args):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,args));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.call(null,"%s(%s)",day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,function$),args__$1);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_color = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_color(c){
var temp__5733__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5733__auto__)){
var a = temp__5733__auto__;
var map__40997 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hsl.call(null,c);
var map__40997__$1 = (((((!((map__40997 == null))))?(((((map__40997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40997):map__40997);
var hue = cljs.core.get.call(null,map__40997__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__40997__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__40997__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__40998 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__40998,(0),null);
var l = cljs.core.nth.call(null,vec__40998,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.call(null,"hsla(%s)",day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hex.call(null,c);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__41002){
var map__41003 = p__41002;
var map__41003__$1 = (((((!((map__41003 == null))))?(((((map__41003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41003):map__41003);
var value = cljs.core.get.call(null,map__41003__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__41005 = value;
var map__41005__$1 = (((((!((map__41005 == null))))?(((((map__41005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41005):map__41005);
var url = cljs.core.get.call(null,map__41005__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__41005__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.wrap_quotes.call(null,url):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.semicolon].join('');
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__41008){
var map__41009 = p__41008;
var map__41009__$1 = (((((!((map__41009 == null))))?(((((map__41009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41009):map__41009);
var value = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__41011 = value;
var map__41011__$1 = (((((!((map__41011 == null))))?(((((map__41011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41011):map__41011);
var identifier = cljs.core.get.call(null,map__41011__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__41011__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,identifier)),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,frames)))),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace_1].join('');
var prefix = ((function (body,map__41011,map__41011__$1,identifier,frames,map__41009,map__41009__$1,value){
return (function (vendor){
return ["@",day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,"keyframes ")].join('');
});})(body,map__41011,map__41011__$1,identifier,frames,map__41009,map__41009__$1,value))
;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__41011,map__41011__$1,identifier,frames,map__41009,map__41009__$1,value){
return (function (p1__41007_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41007_SHARP_),body].join('');
});})(body,prefix,map__41011,map__41011__$1,identifier,frames,map__41009,map__41009__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__41013){
var map__41014 = p__41013;
var map__41014__$1 = (((((!((map__41014 == null))))?(((((map__41014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41014):map__41014);
var value = cljs.core.get.call(null,map__41014__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__41016 = value;
var map__41016__$1 = (((((!((map__41016 == null))))?(((((map__41016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41016):map__41016);
var media_queries = cljs.core.get.call(null,map__41016__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__41016__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries)),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace_1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,rules)))),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace_1].join('');
} else {
return null;
}
}));
goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,"null",(function (this$){
return "";
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer,"number",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compile = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR__orig_val__41018 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
var _STAR_flags_STAR__temp_val__41019 = flags;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__temp_val__41019;

try{return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__orig_val__41018;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_preamble = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_preamble(p__41020,stylesheet){
var map__41021 = p__41020;
var map__41021__$1 = (((((!((map__41021 == null))))?(((((map__41021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41021):map__41021);
var preamble = cljs.core.get.call(null,map__41021__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compression = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_compression(p__41023,stylesheet){
var map__41024 = p__41023;
var map__41024__$1 = (((((!((map__41024 == null))))?(((((map__41024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41024):map__41024);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__41024__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__41024__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__4131__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_output_to = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_output_to(p__41026,stylesheet){
var map__41027 = p__41026;
var map__41027__$1 = (((((!((map__41027 == null))))?(((((map__41027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41027):map__41027);
var output_to = cljs.core.get.call(null,map__41027__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41034 = arguments.length;
var i__4731__auto___41035 = (0);
while(true){
if((i__4731__auto___41035 < len__4730__auto___41034)){
args__4736__auto__.push((arguments[i__4731__auto___41035]));

var G__41036 = (i__4731__auto___41035 + (1));
i__4731__auto___41035 = G__41036;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__41031 = (cljs.core.truth_((function (){var and__4120__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,flags);
if(and__4120__auto__){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__41031,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__41031,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_output_to.call(null,flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compression.call(null,flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_preamble.call(null,flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq41029){
var G__41030 = cljs.core.first.call(null,seq41029);
var seq41029__$1 = cljs.core.next.call(null,seq41029);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41030,seq41029__$1);
});


//# sourceMappingURL=compiler.js.map
