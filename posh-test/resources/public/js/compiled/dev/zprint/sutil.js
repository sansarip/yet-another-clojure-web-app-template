// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.call(null,sexpr);
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.call(null,zloc);
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_.call(null,sexpr)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,sexpr));
} else {
return cljs.core.seq.call(null,sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.mapv.call(null,zfn,cljs.core.next.call(null,sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.call(null,cljs.core.take.call(null,n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.nthnext.call(null,sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,sloc)))){
return i;
} else {
var G__38034 = cljs.core.next.call(null,sloc);
var G__38035 = (i + (1));
sloc = G__38034;
i = G__38035;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.count.call(null,sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_.call(null,sexpr))?cljs.core.mapv.call(null,zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_.call(null,sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first.call(null,sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second.call(null,sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.call(null,sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.call(null,sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_.call(null,sexpr)) || (cljs.core.seq_QMARK_.call(null,sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.last.call(null,sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_.call(null,x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref.call(null,x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.call(null,cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns.call(null,x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__38037 = arguments.length;
switch (G__38037) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),val], null);
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),cljs.reader.read_string.call(null,cljs.core.nth.call(null,obj_term,(2)))], null);
});

zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2;

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__38039,pair_seq,ns){
var map__38040 = p__38039;
var map__38040__$1 = (((((!((map__38040 == null))))?(((((map__38040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38040):map__38040);
var map_options = map__38040__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4120__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())){
var strip_ns = ((function (map__38040,map__38040__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_){
return (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});})(map__38040,map__38040__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_))
;
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__38045 = cljs.core.first.call(null,pair_seq__$1);
var seq__38046 = cljs.core.seq.call(null,vec__38045);
var first__38047 = cljs.core.first.call(null,seq__38046);
var seq__38046__$1 = cljs.core.next.call(null,seq__38046);
var k = first__38047;
var rest_of_pair = seq__38046__$1;
var pair = vec__38045;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace.call(null,k):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",ns__$1].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.call(null,ns__$1,current_ns)){
var G__38048 = ns__$1;
var G__38049 = cljs.core.next.call(null,pair_seq__$1);
var G__38050 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns__$1 = G__38048;
pair_seq__$1 = G__38049;
out = G__38050;
continue;
} else {
return null;
}
} else {
var G__38051 = current_ns;
var G__38052 = cljs.core.next.call(null,pair_seq__$1);
var G__38053 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns__$1 = G__38051;
pair_seq__$1 = G__38052;
out = G__38053;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__38054 = ns__$1;
var G__38055 = cljs.core.next.call(null,pair_seq__$1);
var G__38056 = cljs.core.conj.call(null,out,pair);
ns__$1 = G__38054;
pair_seq__$1 = G__38055;
out = G__38056;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__38057 = zprint.zfns.zstring;
var znumstr_orig_val__38058 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__38059 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__38060 = zprint.zfns.zsexpr;
var zseqnws_orig_val__38061 = zprint.zfns.zseqnws;
var zmap_right_orig_val__38062 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__38063 = zprint.zfns.zfocus_style;
var zfirst_orig_val__38064 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__38065 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__38066 = zprint.zfns.zsecond;
var zthird_orig_val__38067 = zprint.zfns.zthird;
var zfourth_orig_val__38068 = zprint.zfns.zfourth;
var znthnext_orig_val__38069 = zprint.zfns.znthnext;
var zcount_orig_val__38070 = zprint.zfns.zcount;
var zmap_orig_val__38071 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__38072 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__38073 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__38074 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__38075 = zprint.zfns.zfocus;
var zfind_path_orig_val__38076 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__38077 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__38078 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__38079 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__38080 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__38081 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__38082 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__38083 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__38084 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__38085 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__38086 = zprint.zfns.ztag;
var zlast_orig_val__38087 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__38088 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__38089 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__38090 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__38091 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__38092 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__38093 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__38094 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__38095 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__38096 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__38097 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__38098 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__38099 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__38100 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__38101 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__38102 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__38103 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__38104 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__38105 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__38106 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__38107 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__38108 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__38109 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__38110 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__38111 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__38112 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__38113 = zprint.zfns.zfind;
var ztake_append_orig_val__38114 = zprint.zfns.ztake_append;
var zstring_temp_val__38115 = zprint.sutil.sstring;
var znumstr_temp_val__38116 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__38117 = cljs.core.constantly.call(null,false);
var zsexpr_temp_val__38118 = cljs.core.identity;
var zseqnws_temp_val__38119 = zprint.sutil.sseqnws;
var zmap_right_temp_val__38120 = zprint.sutil.smap_right;
var zfocus_style_temp_val__38121 = zprint.sutil.sfocus_style;
var zfirst_temp_val__38122 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__38123 = zprint.sutil.sfirst;
var zsecond_temp_val__38124 = zprint.sutil.ssecond;
var zthird_temp_val__38125 = zprint.sutil.sthird;
var zfourth_temp_val__38126 = zprint.sutil.sfourth;
var znthnext_temp_val__38127 = zprint.sutil.snthnext;
var zcount_temp_val__38128 = zprint.sutil.scount;
var zmap_temp_val__38129 = zprint.sutil.smap;
var zmap_w_nl_temp_val__38130 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__38131 = cljs.core.constantly.call(null,false);
var zfn_obj_QMARK__temp_val__38132 = cljs.core.fn_QMARK_;
var zfocus_temp_val__38133 = zprint.sutil.sfocus;
var zfind_path_temp_val__38134 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__38135 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__38136 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__38137 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__38138 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__38139 = cljs.core.constantly.call(null,false);
var zset_QMARK__temp_val__38140 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__38141 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__38142 = cljs.core.constantly.call(null,false);
var zuneval_QMARK__temp_val__38143 = cljs.core.constantly.call(null,false);
var ztag_temp_val__38144 = cljs.core.constantly.call(null,null);
var zlast_temp_val__38145 = zprint.sutil.slast;
var zarray_QMARK__temp_val__38146 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__38147 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__38148 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__38149 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__38150 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__38151 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__38152 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__38153 = cljs.core.constantly.call(null,false);
var zwhitespaceorcomment_QMARK__temp_val__38154 = cljs.core.constantly.call(null,false);
var zmap_all_temp_val__38155 = cljs.core.map;
var zfuture_QMARK__temp_val__38156 = cljs.core.constantly.call(null,false);
var zpromise_QMARK__temp_val__38157 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__38158 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__38159 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__38160 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__38161 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__38162 = cljs.core.constantly.call(null,false);
var zarray_to_shift_seq_temp_val__38163 = null;
var zdotdotdot_temp_val__38164 = cljs.core.constantly.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__38165 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__38166 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__38167 = cljs.core.constantly.call(null,false);
var zreader_cond_w_coll_QMARK__temp_val__38168 = cljs.core.constantly.call(null,false);
var zlift_ns_temp_val__38169 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__38170 = cljs.core.constantly.call(null,false);
var zfind_temp_val__38171 = zprint.sutil.sfind;
var ztake_append_temp_val__38172 = zprint.sutil.stake_append;
zprint.zfns.zstring = zstring_temp_val__38115;

zprint.zfns.znumstr = znumstr_temp_val__38116;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__38117;

zprint.zfns.zsexpr = zsexpr_temp_val__38118;

zprint.zfns.zseqnws = zseqnws_temp_val__38119;

zprint.zfns.zmap_right = zmap_right_temp_val__38120;

zprint.zfns.zfocus_style = zfocus_style_temp_val__38121;

zprint.zfns.zfirst = zfirst_temp_val__38122;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__38123;

zprint.zfns.zsecond = zsecond_temp_val__38124;

zprint.zfns.zthird = zthird_temp_val__38125;

zprint.zfns.zfourth = zfourth_temp_val__38126;

zprint.zfns.znthnext = znthnext_temp_val__38127;

zprint.zfns.zcount = zcount_temp_val__38128;

zprint.zfns.zmap = zmap_temp_val__38129;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__38130;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__38131;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__38132;

zprint.zfns.zfocus = zfocus_temp_val__38133;

zprint.zfns.zfind_path = zfind_path_temp_val__38134;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__38135;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__38136;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__38137;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__38138;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__38139;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__38140;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__38141;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__38142;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__38143;

zprint.zfns.ztag = ztag_temp_val__38144;

zprint.zfns.zlast = zlast_temp_val__38145;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__38146;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__38147;

zprint.zfns.zderef = zderef_temp_val__38148;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__38149;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__38150;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__38151;

zprint.zfns.zexpandarray = zexpandarray_temp_val__38152;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__38153;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__38154;

zprint.zfns.zmap_all = zmap_all_temp_val__38155;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__38156;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__38157;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__38158;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__38159;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__38160;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__38161;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__38162;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__38163;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__38164;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__38165;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__38166;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__38167;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__38168;

zprint.zfns.zlift_ns = zlift_ns_temp_val__38169;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__38170;

zprint.zfns.zfind = zfind_temp_val__38171;

zprint.zfns.ztake_append = ztake_append_temp_val__38172;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__38114;

zprint.zfns.zfind = zfind_orig_val__38113;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__38112;

zprint.zfns.zlift_ns = zlift_ns_orig_val__38111;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__38110;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__38109;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__38108;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__38107;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__38106;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__38105;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__38104;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__38103;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__38102;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__38101;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__38100;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__38099;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__38098;

zprint.zfns.zmap_all = zmap_all_orig_val__38097;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__38096;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__38095;

zprint.zfns.zexpandarray = zexpandarray_orig_val__38094;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__38093;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__38092;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__38091;

zprint.zfns.zderef = zderef_orig_val__38090;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__38089;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__38088;

zprint.zfns.zlast = zlast_orig_val__38087;

zprint.zfns.ztag = ztag_orig_val__38086;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__38085;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__38084;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__38083;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__38082;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__38081;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__38080;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__38079;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__38078;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__38077;

zprint.zfns.zfind_path = zfind_path_orig_val__38076;

zprint.zfns.zfocus = zfocus_orig_val__38075;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__38074;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__38073;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__38072;

zprint.zfns.zmap = zmap_orig_val__38071;

zprint.zfns.zcount = zcount_orig_val__38070;

zprint.zfns.znthnext = znthnext_orig_val__38069;

zprint.zfns.zfourth = zfourth_orig_val__38068;

zprint.zfns.zthird = zthird_orig_val__38067;

zprint.zfns.zsecond = zsecond_orig_val__38066;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__38065;

zprint.zfns.zfirst = zfirst_orig_val__38064;

zprint.zfns.zfocus_style = zfocus_style_orig_val__38063;

zprint.zfns.zmap_right = zmap_right_orig_val__38062;

zprint.zfns.zseqnws = zseqnws_orig_val__38061;

zprint.zfns.zsexpr = zsexpr_orig_val__38060;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__38059;

zprint.zfns.znumstr = znumstr_orig_val__38058;

zprint.zfns.zstring = zstring_orig_val__38057;
}});

//# sourceMappingURL=sutil.js.map
