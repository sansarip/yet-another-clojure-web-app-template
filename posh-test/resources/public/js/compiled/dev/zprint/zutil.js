// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__37106 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__37106,(0),null);
var zpath = cljs.core.nth.call(null,vec__37106,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__37109 = zprint.zutil.zfirst.call(null,zloc);
var G__37109__$1 = (((G__37109 == null))?null:zprint.zutil.right_STAR_.call(null,G__37109));
var G__37109__$2 = (((G__37109__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__37109__$1));
var G__37109__$3 = (((G__37109__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__37109__$2));
if((G__37109__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__37109__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__37110 = zprint.zutil.zfirst.call(null,zloc);
var G__37110__$1 = (((G__37110 == null))?null:zprint.zutil.right_STAR_.call(null,G__37110));
var G__37110__$2 = (((G__37110__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__37110__$1));
var G__37110__$3 = (((G__37110__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__37110__$2));
var G__37110__$4 = (((G__37110__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__37110__$3));
var G__37110__$5 = (((G__37110__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__37110__$4));
if((G__37110__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__37110__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__37111 = zprint.zutil.zrightnws.call(null,nloc);
var G__37112 = nloc;
nloc = G__37111;
ploc = G__37112;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__37113 = zprint.zutil.zleftnws.call(null,nloc);
var G__37114 = nloc;
nloc = G__37113;
ploc = G__37114;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__5733__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__37115 = zprint.zutil.zrightnws.call(null,nloc);
var G__37116 = (i - (1));
nloc = G__37115;
i = G__37116;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__37117 = zprint.zutil.zrightnws.call(null,nloc);
var G__37118 = (i + (1));
nloc = G__37117;
i = G__37118;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__37119 = zprint.zutil.right_STAR_.call(null,nloc);
var G__37120 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,(function (){var and__4120__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__37119;
out = G__37120;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__37121 = zprint.zutil.right_STAR_.call(null,nloc);
var G__37122 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__37121;
out = G__37122;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__37123 = zprint.zutil.right_STAR_.call(null,nloc);
var G__37124 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__37123;
out = G__37124;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__37125 = zprint.zutil.right_STAR_.call(null,nloc);
var G__37126 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__37125;
out = G__37126;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_(zprint.zutil.rightmost_QMARK_.call(null,nloc))){
return nloc;
} else {
var G__37127 = zprint.zutil.zremove.call(null,zprint.zutil.right_STAR_.call(null,nloc));
nloc = G__37127;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var index = (0);
while(true){
if((index >= n)){
return zprint.zutil.up_STAR_.call(null,zprint.zutil.zremove_right.call(null,zprint.zutil.zreplace.call(null,nloc,end_struct)));
} else {
var xloc = zprint.zutil.right_STAR_.call(null,nloc);
var G__37128 = xloc;
var G__37129 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__37128;
index = G__37129;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__37130 = zprint.zutil.up_STAR_.call(null,nloc);
var G__37131 = (0);
var G__37132 = cljs.core.cons.call(null,left,out);
nloc = G__37130;
left = G__37131;
out = G__37132;
continue;
}
} else {
var G__37133 = zprint.zutil.left_STAR_.call(null,nloc);
var G__37134 = (left + (1));
var G__37135 = out;
nloc = G__37133;
left = G__37134;
out = G__37135;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__37136 = zprint.zutil.up_STAR_.call(null,nloc);
var G__37137 = (0);
var G__37138 = cljs.core.cons.call(null,left,out);
nloc = G__37136;
left = G__37137;
out = G__37138;
continue;
}
} else {
var G__37139 = zprint.zutil.left_STAR_.call(null,nloc);
var G__37140 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__37141 = out;
nloc = G__37139;
left = G__37140;
out = G__37141;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__37142 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__37142;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__37143 = zprint.zutil.right_STAR_.call(null,nloc);
var G__37144 = (remaining_right - (1));
nloc = G__37143;
remaining_right = G__37144;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4120__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__37145 = zprint.zutil.left_STAR_.call(null,nloc);
var G__37146 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__37145;
spaces = G__37146;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__37147 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__37147;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
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
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__37148,pair_seq,ns){
var map__37149 = p__37148;
var map__37149__$1 = (((((!((map__37149 == null))))?(((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37149):map__37149);
var map_options = map__37149__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
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
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = ((function (map__37149,map__37149__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_){
return (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});})(map__37149,map__37149__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_))
;
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__37154 = cljs.core.first.call(null,pair_seq__$1);
var seq__37155 = cljs.core.seq.call(null,vec__37154);
var first__37156 = cljs.core.first.call(null,seq__37155);
var seq__37155__$1 = cljs.core.next.call(null,seq__37155);
var k = first__37156;
var rest_of_pair = seq__37155__$1;
var pair = vec__37154;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
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
var G__37163 = ns__$1;
var G__37164 = cljs.core.next.call(null,pair_seq__$1);
var G__37165 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns__$1 = G__37163;
pair_seq__$1 = G__37164;
out = G__37165;
continue;
} else {
return null;
}
} else {
var G__37166 = current_ns;
var G__37167 = cljs.core.next.call(null,pair_seq__$1);
var G__37168 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns__$1 = G__37166;
pair_seq__$1 = G__37167;
out = G__37168;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__37169 = ns__$1;
var G__37170 = cljs.core.next.call(null,pair_seq__$1);
var G__37171 = cljs.core.conj.call(null,out,pair);
ns__$1 = G__37169;
pair_seq__$1 = G__37170;
out = G__37171;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = ns;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not.call(null,lift_ns_QMARK_);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__37160 = cljs.core.first.call(null,pair_seq__$1);
var seq__37161 = cljs.core.seq.call(null,vec__37160);
var first__37162 = cljs.core.first.call(null,seq__37161);
var seq__37161__$1 = cljs.core.next.call(null,seq__37161);
var k = first__37162;
var rest_of_pair = seq__37161__$1;
var pair = vec__37160;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__37172 = cljs.core.next.call(null,pair_seq__$1);
var G__37173 = cljs.core.conj.call(null,out,pair);
pair_seq__$1 = G__37172;
out = G__37173;
continue;
} else {
var G__37174 = cljs.core.next.call(null,pair_seq__$1);
var G__37175 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.sexpr.call(null,k))].join('')))),rest_of_pair));
pair_seq__$1 = G__37174;
out = G__37175;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__37176 = zprint.zfns.zstring;
var znumstr_orig_val__37177 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__37178 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__37179 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__37180 = zprint.zfns.zsexpr;
var zseqnws_orig_val__37181 = zprint.zfns.zseqnws;
var zmap_right_orig_val__37182 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__37183 = zprint.zfns.zfocus_style;
var zfirst_orig_val__37184 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__37185 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__37186 = zprint.zfns.zsecond;
var zthird_orig_val__37187 = zprint.zfns.zthird;
var zfourth_orig_val__37188 = zprint.zfns.zfourth;
var znthnext_orig_val__37189 = zprint.zfns.znthnext;
var zcount_orig_val__37190 = zprint.zfns.zcount;
var zmap_orig_val__37191 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__37192 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__37193 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__37194 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__37195 = zprint.zfns.zfocus;
var zfind_path_orig_val__37196 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__37197 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__37198 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__37199 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__37200 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__37201 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__37202 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__37203 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__37204 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__37205 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__37206 = zprint.zfns.ztag;
var zlast_orig_val__37207 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__37208 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__37209 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__37210 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__37211 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__37212 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__37213 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__37214 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__37215 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__37216 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__37217 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__37218 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__37219 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__37220 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__37221 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__37222 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__37223 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__37224 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__37225 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__37226 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__37227 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__37228 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__37229 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__37230 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__37231 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__37232 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__37233 = zprint.zfns.zfind;
var ztake_append_orig_val__37234 = zprint.zfns.ztake_append;
var zstring_temp_val__37235 = rewrite_clj.zip.string;
var znumstr_temp_val__37236 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__37237 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__37238 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__37239 = zprint.zutil.sexpr;
var zseqnws_temp_val__37240 = zprint.zutil.zseqnws;
var zmap_right_temp_val__37241 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__37242 = zprint.zutil.zfocus_style;
var zfirst_temp_val__37243 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__37244 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__37245 = zprint.zutil.zsecond;
var zthird_temp_val__37246 = zprint.zutil.zthird;
var zfourth_temp_val__37247 = zprint.zutil.zfourth;
var znthnext_temp_val__37248 = zprint.zutil.znthnext;
var zcount_temp_val__37249 = zprint.zutil.zcount;
var zmap_temp_val__37250 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__37251 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__37252 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__37253 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__37254 = zprint.zutil.zfocus;
var zfind_path_temp_val__37255 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__37256 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__37257 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__37258 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__37259 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__37260 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__37261 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__37262 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__37263 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__37264 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__37265 = zprint.zutil.ztag;
var zlast_temp_val__37266 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__37267 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__37268 = cljs.core.constantly.call(null,false);
var zderef_temp_val__37269 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__37270 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__37271 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__37272 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__37273 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__37274 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__37275 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__37276 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__37277 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__37278 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__37279 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__37280 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__37281 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__37282 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__37283 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__37284 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__37285 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__37286 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__37287 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__37288 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__37289 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__37290 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__37291 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__37292 = zprint.zutil.zfind;
var ztake_append_temp_val__37293 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__37235;

zprint.zfns.znumstr = znumstr_temp_val__37236;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__37237;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__37238;

zprint.zfns.zsexpr = zsexpr_temp_val__37239;

zprint.zfns.zseqnws = zseqnws_temp_val__37240;

zprint.zfns.zmap_right = zmap_right_temp_val__37241;

zprint.zfns.zfocus_style = zfocus_style_temp_val__37242;

zprint.zfns.zfirst = zfirst_temp_val__37243;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__37244;

zprint.zfns.zsecond = zsecond_temp_val__37245;

zprint.zfns.zthird = zthird_temp_val__37246;

zprint.zfns.zfourth = zfourth_temp_val__37247;

zprint.zfns.znthnext = znthnext_temp_val__37248;

zprint.zfns.zcount = zcount_temp_val__37249;

zprint.zfns.zmap = zmap_temp_val__37250;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__37251;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__37252;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__37253;

zprint.zfns.zfocus = zfocus_temp_val__37254;

zprint.zfns.zfind_path = zfind_path_temp_val__37255;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__37256;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__37257;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__37258;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__37259;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__37260;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__37261;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__37262;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__37263;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__37264;

zprint.zfns.ztag = ztag_temp_val__37265;

zprint.zfns.zlast = zlast_temp_val__37266;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__37267;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__37268;

zprint.zfns.zderef = zderef_temp_val__37269;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__37270;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__37271;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__37272;

zprint.zfns.zexpandarray = zexpandarray_temp_val__37273;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__37274;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__37275;

zprint.zfns.zmap_all = zmap_all_temp_val__37276;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__37277;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__37278;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__37279;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__37280;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__37281;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__37282;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__37283;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__37284;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__37285;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__37286;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__37287;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__37288;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__37289;

zprint.zfns.zlift_ns = zlift_ns_temp_val__37290;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__37291;

zprint.zfns.zfind = zfind_temp_val__37292;

zprint.zfns.ztake_append = ztake_append_temp_val__37293;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__37234;

zprint.zfns.zfind = zfind_orig_val__37233;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__37232;

zprint.zfns.zlift_ns = zlift_ns_orig_val__37231;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__37230;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__37229;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__37228;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__37227;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__37226;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__37225;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__37224;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__37223;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__37222;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__37221;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__37220;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__37219;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__37218;

zprint.zfns.zmap_all = zmap_all_orig_val__37217;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__37216;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__37215;

zprint.zfns.zexpandarray = zexpandarray_orig_val__37214;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__37213;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__37212;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__37211;

zprint.zfns.zderef = zderef_orig_val__37210;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__37209;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__37208;

zprint.zfns.zlast = zlast_orig_val__37207;

zprint.zfns.ztag = ztag_orig_val__37206;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__37205;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__37204;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__37203;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__37202;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__37201;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__37200;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__37199;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__37198;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__37197;

zprint.zfns.zfind_path = zfind_path_orig_val__37196;

zprint.zfns.zfocus = zfocus_orig_val__37195;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__37194;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__37193;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__37192;

zprint.zfns.zmap = zmap_orig_val__37191;

zprint.zfns.zcount = zcount_orig_val__37190;

zprint.zfns.znthnext = znthnext_orig_val__37189;

zprint.zfns.zfourth = zfourth_orig_val__37188;

zprint.zfns.zthird = zthird_orig_val__37187;

zprint.zfns.zsecond = zsecond_orig_val__37186;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__37185;

zprint.zfns.zfirst = zfirst_orig_val__37184;

zprint.zfns.zfocus_style = zfocus_style_orig_val__37183;

zprint.zfns.zmap_right = zmap_right_orig_val__37182;

zprint.zfns.zseqnws = zseqnws_orig_val__37181;

zprint.zfns.zsexpr = zsexpr_orig_val__37180;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__37179;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__37178;

zprint.zfns.znumstr = znumstr_orig_val__37177;

zprint.zfns.zstring = zstring_orig_val__37176;
}});

//# sourceMappingURL=zutil.js.map
