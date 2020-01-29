// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39549 = arguments.length;
var i__4731__auto___39550 = (0);
while(true){
if((i__4731__auto___39550 < len__4730__auto___39549)){
args__4736__auto__.push((arguments[i__4731__auto___39550]));

var G__39551 = (i__4731__auto___39550 + (1));
i__4731__auto___39550 = G__39551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq39547){
var G__39548 = cljs.core.first.call(null,seq39547);
var seq39547__$1 = cljs.core.next.call(null,seq39547);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39548,seq39547__$1);
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39553 = arguments.length;
var i__4731__auto___39554 = (0);
while(true){
if((i__4731__auto___39554 < len__4730__auto___39553)){
args__4736__auto__.push((arguments[i__4731__auto___39554]));

var G__39555 = (i__4731__auto___39554 + (1));
i__4731__auto___39554 = G__39555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,args));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq39552){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39552));
});

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39562 = arguments.length;
var i__4731__auto___39563 = (0);
while(true){
if((i__4731__auto___39563 < len__4730__auto___39562)){
args__4736__auto__.push((arguments[i__4731__auto___39563]));

var G__39564 = (i__4731__auto___39563 + (1));
i__4731__auto___39563 = G__39564;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__39558){
var vec__39559 = p__39558;
var radix = cljs.core.nth.call(null,vec__39559,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq39556){
var G__39557 = cljs.core.first.call(null,seq39556);
var seq39556__$1 = cljs.core.next.call(null,seq39556);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39557,seq39556__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39571 = arguments.length;
var i__4731__auto___39572 = (0);
while(true){
if((i__4731__auto___39572 < len__4730__auto___39571)){
args__4736__auto__.push((arguments[i__4731__auto___39572]));

var G__39573 = (i__4731__auto___39572 + (1));
i__4731__auto___39572 = G__39573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__39567){
var vec__39568 = p__39567;
var radix = cljs.core.nth.call(null,vec__39568,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq39565){
var G__39566 = cljs.core.first.call(null,seq39565);
var seq39565__$1 = cljs.core.next.call(null,seq39565);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39566,seq39565__$1);
});

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__39574(s__39575){
return (new cljs.core.LazySeq(null,(function (){
var s__39575__$1 = s__39575;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__39575__$1);
if(temp__5735__auto__){
var s__39575__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39575__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39575__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39577 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39576 = (0);
while(true){
if((i__39576 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__39576);
cljs.core.chunk_append.call(null,b__39577,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join.call(null,x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,x)));

var G__39578 = (i__39576 + (1));
i__39576 = G__39578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39577),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__39574.call(null,cljs.core.chunk_rest.call(null,s__39575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39577),null);
}
} else {
var x = cljs.core.first.call(null,s__39575__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join.call(null,x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,x)),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__39574.call(null,cljs.core.rest.call(null,s__39575__$2)));
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
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.record_QMARK_.call(null,x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix.call(null,p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__39579 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__39579,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__39579,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39585 = arguments.length;
var i__4731__auto___39586 = (0);
while(true){
if((i__4731__auto___39586 < len__4730__auto___39585)){
args__4736__auto__.push((arguments[i__4731__auto___39586]));

var G__39587 = (i__4731__auto___39586 + (1));
i__4731__auto___39586 = G__39587;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq39582){
var G__39583 = cljs.core.first.call(null,seq39582);
var seq39582__$1 = cljs.core.next.call(null,seq39582);
var G__39584 = cljs.core.first.call(null,seq39582__$1);
var seq39582__$2 = cljs.core.next.call(null,seq39582__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39583,G__39584,seq39582__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39589 = arguments.length;
var i__4731__auto___39590 = (0);
while(true){
if((i__4731__auto___39590 < len__4730__auto___39589)){
args__4736__auto__.push((arguments[i__4731__auto___39590]));

var G__39591 = (i__4731__auto___39590 + (1));
i__4731__auto___39590 = G__39591;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__39592 = (i - (1));
var G__39593 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__39592;
v_seqs__$2 = G__39593;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq39588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39588));
});


//# sourceMappingURL=util.js.map
