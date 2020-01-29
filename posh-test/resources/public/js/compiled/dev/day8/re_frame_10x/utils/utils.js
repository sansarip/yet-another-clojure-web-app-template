// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.utils.utils');
goog.require('cljs.core');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector. Returns nil if v is empty
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
var num = cljs.core.count.call(null,v);
if((num === (0))){
return null;
} else {
return cljs.core.nth.call(null,v,(num - (1)));
}
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.call(null,(function (p1__34892_SHARP_,p2__34891_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__34891_SHARP_))){
return p1__34892_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first.call(null,day8.re_frame_10x.utils.utils.find_all_indexes_in_vec.call(null,pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__34893_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34893_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34893_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__34895 = arguments.length;
switch (G__34895) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34904 = arguments.length;
var i__4731__auto___34905 = (0);
while(true){
if((i__4731__auto___34905 < len__4730__auto___34904)){
args__4736__auto__.push((arguments[i__4731__auto___34905]));

var G__34906 = (i__4731__auto___34905 + (1));
i__4731__auto___34905 = G__34906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__34900){
var vec__34901 = p__34900;
var plural = cljs.core.nth.call(null,vec__34901,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__4131__auto__ = plural;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq34897){
var G__34898 = cljs.core.first.call(null,seq34897);
var seq34897__$1 = cljs.core.next.call(null,seq34897);
var G__34899 = cljs.core.first.call(null,seq34897__$1);
var seq34897__$2 = cljs.core.next.call(null,seq34897__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34898,G__34899,seq34897__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34914 = arguments.length;
var i__4731__auto___34915 = (0);
while(true){
if((i__4731__auto___34915 < len__4730__auto___34914)){
args__4736__auto__.push((arguments[i__4731__auto___34915]));

var G__34916 = (i__4731__auto___34915 + (1));
i__4731__auto___34915 = G__34916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__34910){
var vec__34911 = p__34910;
var plural = cljs.core.nth.call(null,vec__34911,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__4131__auto__ = plural;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq34907){
var G__34908 = cljs.core.first.call(null,seq34907);
var seq34907__$1 = cljs.core.next.call(null,seq34907);
var G__34909 = cljs.core.first.call(null,seq34907__$1);
var seq34907__$2 = cljs.core.next.call(null,seq34907__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34908,G__34909,seq34907__$2);
});

day8.re_frame_10x.utils.utils.copy_to_clipboard = (function day8$re_frame_10x$utils$utils$copy_to_clipboard(text){
var el = document.createElement("textarea");
el.value = text;

el.style.position = "absolute";

el.style.left = "-9999px";

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});
day8.re_frame_10x.utils.utils.default_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),(function day8$re_frame_10x$utils$utils$default_uuid_reader(form){
if(typeof form === 'string'){
} else {
throw (new Error("Assert failed: (string? form)"));
}

return cljs.core.uuid.call(null,form);
})], null);

//# sourceMappingURL=utils.js.map
