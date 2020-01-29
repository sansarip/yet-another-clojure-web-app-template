// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.dissoc_in = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$utils$dissoc_in(m,p__39033){
var vec__39034 = p__39033;
var seq__39035 = cljs.core.seq.call(null,vec__39034);
var first__39036 = cljs.core.first.call(null,seq__39035);
var seq__39035__$1 = cljs.core.next.call(null,seq__39035);
var k = first__39036;
var ks = seq__39035__$1;
var keys = vec__39034;
if(ks){
var temp__5733__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.utils.first_in_vector = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});

//# sourceMappingURL=utils.js.map
