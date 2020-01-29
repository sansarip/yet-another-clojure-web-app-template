// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__17787 = rest_at_QMARK_;
var G__17788 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__17787;
ls = G__17788;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_.call(null,query)))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_.call(null,v)) && ((!(((cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,v))) || (cljs.core.coll_QMARK_.call(null,cljs.core.second.call(null,v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__4120__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav))));
} else {
return and__4120__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(posh.lib.q_analyze.eav_QMARK_.call(null,where)){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if(((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where))))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(posh.lib.q_analyze.eav_QMARK_.call(null,item)){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if(((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item))))){
var ocr_17789 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17789)) && ((cljs.core.count.call(null,ocr_17789) === 2)))){
try{var ocr_17789_0__17792 = cljs.core.nth.call(null,ocr_17789,(0));
if(((cljs.core.vector_QMARK_.call(null,ocr_17789_0__17792)) && ((cljs.core.count.call(null,ocr_17789_0__17792) === 5)))){
try{var ocr_17789_0__17792_0__17794 = cljs.core.nth.call(null,ocr_17789_0__17792,(0));
if(cljs.core._EQ_.call(null,ocr_17789_0__17792_0__17794,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_17789_0__17792,(1));
var e = cljs.core.nth.call(null,ocr_17789_0__17792,(2));
var a = cljs.core.nth.call(null,ocr_17789_0__17792,(3));
var v = cljs.core.nth.call(null,ocr_17789,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e17801){if((e17801 instanceof Error)){
var e__16881__auto__ = e17801;
if((e__16881__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto__;
}
} else {
throw e17801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17800){if((e17800 instanceof Error)){
var e__16881__auto__ = e17800;
if((e__16881__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto__;
}
} else {
throw e17800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17799){if((e17799 instanceof Error)){
var e__16881__auto__ = e17799;
if((e__16881__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__16881__auto__;
}
} else {
throw e17799;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__17802){
var vec__17803 = p__17802;
var k = cljs.core.nth.call(null,vec__17803,(0),null);
var v = cljs.core.nth.call(null,vec__17803,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__17806_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__17806_SHARP_)){
return cljs.core.get.call(null,vs,p1__17806_SHARP_);
} else {
return p1__17806_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,((posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4523__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__17807(s__17808){
return (new cljs.core.LazySeq(null,(function (){
var s__17808__$1 = s__17808;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17808__$1);
if(temp__5735__auto__){
var s__17808__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17808__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17808__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17810 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17809 = (0);
while(true){
if((i__17809 < size__4522__auto__)){
var r = cljs.core._nth.call(null,c__4521__auto__,i__17809);
cljs.core.chunk_append.call(null,b__17810,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__17811 = (i__17809 + (1));
i__17809 = G__17811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17810),posh$lib$q_analyze$fill_qvar_set_$_iter__17807.call(null,cljs.core.chunk_rest.call(null,s__17808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17810),null);
}
} else {
var r = cljs.core.first.call(null,s__17808__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__17807.call(null,cljs.core.rest.call(null,s__17808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__17814){
var vec__17815 = p__17814;
var e = cljs.core.nth.call(null,vec__17815,(0),null);
var a = cljs.core.nth.call(null,vec__17815,(1),null);
var v = cljs.core.nth.call(null,vec__17815,(2),null);
var eav = vec__17815;
var vec__17818 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__17818,(0),null);
var qa = cljs.core.nth.call(null,vec__17818,(1),null);
var qv = cljs.core.nth.call(null,vec__17818,(2),null);
var iter__4523__auto__ = ((function (vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821(s__17822){
return (new cljs.core.LazySeq(null,((function (vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (){
var s__17822__$1 = s__17822;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17822__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__17822__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821_$_iter__17823(s__17824){
return (new cljs.core.LazySeq(null,((function (s__17822__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (){
var s__17824__$1 = s__17824;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__17824__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first.call(null,xs__6292__auto____$1);
var iterys__4519__auto__ = ((function (s__17824__$1,s__17822__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821_$_iter__17823_$_iter__17825(s__17826){
return (new cljs.core.LazySeq(null,((function (s__17824__$1,s__17822__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (){
var s__17826__$1 = s__17826;
while(true){
var temp__5735__auto____$2 = cljs.core.seq.call(null,s__17826__$1);
if(temp__5735__auto____$2){
var s__17826__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17826__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17826__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17828 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17827 = (0);
while(true){
if((i__17827 < size__4522__auto__)){
var vv = cljs.core._nth.call(null,c__4521__auto__,i__17827);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__17827,s__17826__$1,s__17824__$1,s__17822__$1,vv,c__4521__auto__,size__4522__auto__,b__17828,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (p1__17812_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__17812_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__17827,s__17826__$1,s__17824__$1,s__17822__$1,vv,c__4521__auto__,size__4522__auto__,b__17828,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__17827,s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,vv,c__4521__auto__,size__4522__auto__,b__17828,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (p__17829){
var vec__17830 = p__17829;
var var_QMARK_ = cljs.core.nth.call(null,vec__17830,(0),null);
var val = cljs.core.nth.call(null,vec__17830,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4120__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__17827,s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,vv,c__4521__auto__,size__4522__auto__,b__17828,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__17827,s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,exposed_qvars,vv,c__4521__auto__,size__4522__auto__,b__17828,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (p1__17813_SHARP_){
if(cljs.core.truth_(p1__17813_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__17827,s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,exposed_qvars,vv,c__4521__auto__,size__4522__auto__,b__17828,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append.call(null,b__17828,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__17837 = (i__17827 + (1));
i__17827 = G__17837;
continue;
} else {
var G__17838 = (i__17827 + (1));
i__17827 = G__17838;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17828),posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821_$_iter__17823_$_iter__17825.call(null,cljs.core.chunk_rest.call(null,s__17826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17828),null);
}
} else {
var vv = cljs.core.first.call(null,s__17826__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__17826__$1,s__17824__$1,s__17822__$1,vv,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (p1__17812_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__17812_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__17826__$1,s__17824__$1,s__17822__$1,vv,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,vv,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (p__17833){
var vec__17834 = p__17833;
var var_QMARK_ = cljs.core.nth.call(null,vec__17834,(0),null);
var val = cljs.core.nth.call(null,vec__17834,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4120__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,vv,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,exposed_qvars,vv,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav){
return (function (p1__17813_SHARP_){
if(cljs.core.truth_(p1__17813_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__17826__$1,s__17824__$1,s__17822__$1,wildcard_count,exposed_qvars,vv,s__17826__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821_$_iter__17823_$_iter__17825.call(null,cljs.core.rest.call(null,s__17826__$2)));
} else {
var G__17839 = cljs.core.rest.call(null,s__17826__$2);
s__17826__$1 = G__17839;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__17824__$1,s__17822__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,null,null));
});})(s__17824__$1,s__17822__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821_$_iter__17823.call(null,cljs.core.rest.call(null,s__17824__$1)));
} else {
var G__17840 = cljs.core.rest.call(null,s__17824__$1);
s__17824__$1 = G__17840;
continue;
}
} else {
return null;
}
break;
}
});})(s__17822__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,null,null));
});})(s__17822__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__17821.call(null,cljs.core.rest.call(null,s__17822__$1)));
} else {
var G__17841 = cljs.core.rest.call(null,s__17822__$1);
s__17822__$1 = G__17841;
continue;
}
} else {
return null;
}
break;
}
});})(vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
,null,null));
});})(vec__17818,qe,qa,qv,vec__17815,e,a,v,eav))
;
return iter__4523__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4131__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_17842 = cljs.core.vec.call(null,eav);
var ocr_17843 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17842)) && ((cljs.core.count.call(null,ocr_17842) === 3)))){
try{var ocr_17842_0__17871 = cljs.core.nth.call(null,ocr_17842,(0));
if(cljs.core._EQ_.call(null,ocr_17842_0__17871,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17842_2__17873 = cljs.core.nth.call(null,ocr_17842,(2));
if(cljs.core._EQ_.call(null,ocr_17842_2__17873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17947){if((e17947 instanceof Error)){
var e__16881__auto__ = e17947;
if((e__16881__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17843)) && ((cljs.core.count.call(null,ocr_17843) === 3)))){
try{var ocr_17843_2__17876 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17876 === false)){
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17949){if((e17949 instanceof Error)){
var e__16881__auto____$1 = e17949;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17876 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17876 === true)){
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17950){if((e17950 instanceof Error)){
var e__16881__auto____$2 = e17950;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$2;
}
} else {
throw e17950;

}
}} else {
throw e__16881__auto____$1;
}
} else {
throw e17949;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17948){if((e17948 instanceof Error)){
var e__16881__auto____$1 = e17948;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17948;

}
}} else {
throw e__16881__auto__;
}
} else {
throw e17947;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17942){if((e17942 instanceof Error)){
var e__16881__auto__ = e17942;
if((e__16881__auto__ === cljs.core.match.backtrack)){
try{var ocr_17842_2__17873 = cljs.core.nth.call(null,ocr_17842,(2));
if(cljs.core._EQ_.call(null,ocr_17842_2__17873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17843)) && ((cljs.core.count.call(null,ocr_17843) === 3)))){
try{var ocr_17843_1__17878 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17878 === false)){
var a = cljs.core.nth.call(null,ocr_17842,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17945){if((e17945 instanceof Error)){
var e__16881__auto____$1 = e17945;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17843_1__17878 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17878 === true)){
var a = cljs.core.nth.call(null,ocr_17842,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17946){if((e17946 instanceof Error)){
var e__16881__auto____$2 = e17946;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$2;
}
} else {
throw e17946;

}
}} else {
throw e__16881__auto____$1;
}
} else {
throw e17945;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17944){if((e17944 instanceof Error)){
var e__16881__auto____$1 = e17944;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17944;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17943){if((e17943 instanceof Error)){
var e__16881__auto____$1 = e17943;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17943;

}
}} else {
throw e__16881__auto__;
}
} else {
throw e17942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17884){if((e17884 instanceof Error)){
var e__16881__auto__ = e17884;
if((e__16881__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17843)) && ((cljs.core.count.call(null,ocr_17843) === 3)))){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17842_2__17873 = cljs.core.nth.call(null,ocr_17842,(2));
if(cljs.core._EQ_.call(null,ocr_17842_2__17873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17941){if((e17941 instanceof Error)){
var e__16881__auto____$1 = e17941;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17940){if((e17940 instanceof Error)){
var e__16881__auto____$1 = e17940;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17940;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17886){if((e17886 instanceof Error)){
var e__16881__auto____$1 = e17886;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17842_2__17873 = cljs.core.nth.call(null,ocr_17842,(2));
if(cljs.core._EQ_.call(null,ocr_17842_2__17873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17937){if((e17937 instanceof Error)){
var e__16881__auto____$2 = e17937;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
var a = cljs.core.nth.call(null,ocr_17842,(1));
var e = cljs.core.nth.call(null,ocr_17842,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17938){if((e17938 instanceof Error)){
var e__16881__auto____$3 = e17938;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
var a = cljs.core.nth.call(null,ocr_17842,(1));
var e = cljs.core.nth.call(null,ocr_17842,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17939){if((e17939 instanceof Error)){
var e__16881__auto____$4 = e17939;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e17939;

}
}} else {
throw e__16881__auto____$3;
}
} else {
throw e17938;

}
}} else {
throw e__16881__auto____$2;
}
} else {
throw e17937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17936){if((e17936 instanceof Error)){
var e__16881__auto____$2 = e17936;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$2;
}
} else {
throw e17936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17887){if((e17887 instanceof Error)){
var e__16881__auto____$2 = e17887;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
try{var ocr_17842_2__17873 = cljs.core.nth.call(null,ocr_17842,(2));
if(cljs.core._EQ_.call(null,ocr_17842_2__17873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17935){if((e17935 instanceof Error)){
var e__16881__auto____$3 = e17935;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$3;
}
} else {
throw e17935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17932){if((e17932 instanceof Error)){
var e__16881__auto____$3 = e17932;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
try{var ocr_17842_2__17873 = cljs.core.nth.call(null,ocr_17842,(2));
if(cljs.core._EQ_.call(null,ocr_17842_2__17873,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17934){if((e17934 instanceof Error)){
var e__16881__auto____$4 = e17934;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e17934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17933){if((e17933 instanceof Error)){
var e__16881__auto____$4 = e17933;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e17933;

}
}} else {
throw e__16881__auto____$3;
}
} else {
throw e17932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17888){if((e17888 instanceof Error)){
var e__16881__auto____$3 = e17888;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === true)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17931){if((e17931 instanceof Error)){
var e__16881__auto____$4 = e17931;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e17931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17930){if((e17930 instanceof Error)){
var e__16881__auto____$4 = e17930;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e17930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17889){if((e17889 instanceof Error)){
var e__16881__auto____$4 = e17889;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === false)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17929){if((e17929 instanceof Error)){
var e__16881__auto____$5 = e17929;
if((e__16881__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$5;
}
} else {
throw e17929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17928){if((e17928 instanceof Error)){
var e__16881__auto____$5 = e17928;
if((e__16881__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$5;
}
} else {
throw e17928;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17890){if((e17890 instanceof Error)){
var e__16881__auto____$5 = e17890;
if((e__16881__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === true)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17927){if((e17927 instanceof Error)){
var e__16881__auto____$6 = e17927;
if((e__16881__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$6;
}
} else {
throw e17927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17926){if((e17926 instanceof Error)){
var e__16881__auto____$6 = e17926;
if((e__16881__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$6;
}
} else {
throw e17926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17891){if((e17891 instanceof Error)){
var e__16881__auto____$6 = e17891;
if((e__16881__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === false)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17842_1__17872 = cljs.core.nth.call(null,ocr_17842,(1));
if(cljs.core._EQ_.call(null,ocr_17842_1__17872,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17925){if((e17925 instanceof Error)){
var e__16881__auto____$7 = e17925;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$7;
}
} else {
throw e17925;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17924){if((e17924 instanceof Error)){
var e__16881__auto____$7 = e17924;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$7;
}
} else {
throw e17924;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17892){if((e17892 instanceof Error)){
var e__16881__auto____$7 = e17892;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === true)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
try{var ocr_17842_0__17871 = cljs.core.nth.call(null,ocr_17842,(0));
if(cljs.core._EQ_.call(null,ocr_17842_0__17871,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17923){if((e17923 instanceof Error)){
var e__16881__auto____$8 = e17923;
if((e__16881__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$8;
}
} else {
throw e17923;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17922){if((e17922 instanceof Error)){
var e__16881__auto____$8 = e17922;
if((e__16881__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$8;
}
} else {
throw e17922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17893){if((e17893 instanceof Error)){
var e__16881__auto____$8 = e17893;
if((e__16881__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === false)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
try{var ocr_17842_0__17871 = cljs.core.nth.call(null,ocr_17842,(0));
if(cljs.core._EQ_.call(null,ocr_17842_0__17871,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17921){if((e17921 instanceof Error)){
var e__16881__auto____$9 = e17921;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$9;
}
} else {
throw e17921;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17920){if((e17920 instanceof Error)){
var e__16881__auto____$9 = e17920;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$9;
}
} else {
throw e17920;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17894){if((e17894 instanceof Error)){
var e__16881__auto____$9 = e17894;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === true)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
try{var ocr_17842_0__17871 = cljs.core.nth.call(null,ocr_17842,(0));
if(cljs.core._EQ_.call(null,ocr_17842_0__17871,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17919){if((e17919 instanceof Error)){
var e__16881__auto____$10 = e17919;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e17919;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17918){if((e17918 instanceof Error)){
var e__16881__auto____$10 = e17918;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e17918;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17895){if((e17895 instanceof Error)){
var e__16881__auto____$10 = e17895;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === false)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
try{var ocr_17842_0__17871 = cljs.core.nth.call(null,ocr_17842,(0));
if(cljs.core._EQ_.call(null,ocr_17842_0__17871,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17917){if((e17917 instanceof Error)){
var e__16881__auto____$11 = e17917;
if((e__16881__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$11;
}
} else {
throw e17917;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17916){if((e17916 instanceof Error)){
var e__16881__auto____$11 = e17916;
if((e__16881__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$11;
}
} else {
throw e17916;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17896){if((e17896 instanceof Error)){
var e__16881__auto____$11 = e17896;
if((e__16881__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === true)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17915){if((e17915 instanceof Error)){
var e__16881__auto____$12 = e17915;
if((e__16881__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$12;
}
} else {
throw e17915;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17910){if((e17910 instanceof Error)){
var e__16881__auto____$12 = e17910;
if((e__16881__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17914){if((e17914 instanceof Error)){
var e__16881__auto____$13 = e17914;
if((e__16881__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$13;
}
} else {
throw e17914;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17911){if((e17911 instanceof Error)){
var e__16881__auto____$13 = e17911;
if((e__16881__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17913){if((e17913 instanceof Error)){
var e__16881__auto____$14 = e17913;
if((e__16881__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$14;
}
} else {
throw e17913;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17912){if((e17912 instanceof Error)){
var e__16881__auto____$14 = e17912;
if((e__16881__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$14;
}
} else {
throw e17912;

}
}} else {
throw e__16881__auto____$13;
}
} else {
throw e17911;

}
}} else {
throw e__16881__auto____$12;
}
} else {
throw e17910;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17897){if((e17897 instanceof Error)){
var e__16881__auto____$12 = e17897;
if((e__16881__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === false)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17909){if((e17909 instanceof Error)){
var e__16881__auto____$13 = e17909;
if((e__16881__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$13;
}
} else {
throw e17909;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17908){if((e17908 instanceof Error)){
var e__16881__auto____$13 = e17908;
if((e__16881__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$13;
}
} else {
throw e17908;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17898){if((e17898 instanceof Error)){
var e__16881__auto____$13 = e17898;
if((e__16881__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === true)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17907){if((e17907 instanceof Error)){
var e__16881__auto____$14 = e17907;
if((e__16881__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$14;
}
} else {
throw e17907;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17906){if((e17906 instanceof Error)){
var e__16881__auto____$14 = e17906;
if((e__16881__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$14;
}
} else {
throw e17906;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17899){if((e17899 instanceof Error)){
var e__16881__auto____$14 = e17899;
if((e__16881__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_17843_2__17882 = cljs.core.nth.call(null,ocr_17843,(2));
if((ocr_17843_2__17882 === false)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === true)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17905){if((e17905 instanceof Error)){
var e__16881__auto____$15 = e17905;
if((e__16881__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$15;
}
} else {
throw e17905;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17901){if((e17901 instanceof Error)){
var e__16881__auto____$15 = e17901;
if((e__16881__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_17843_0__17880 = cljs.core.nth.call(null,ocr_17843,(0));
if((ocr_17843_0__17880 === false)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === true)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17903){if((e17903 instanceof Error)){
var e__16881__auto____$16 = e17903;
if((e__16881__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_17843_1__17881 = cljs.core.nth.call(null,ocr_17843,(1));
if((ocr_17843_1__17881 === false)){
var e = cljs.core.nth.call(null,ocr_17842,(0));
var a = cljs.core.nth.call(null,ocr_17842,(1));
var v = cljs.core.nth.call(null,ocr_17842,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e17904){if((e17904 instanceof Error)){
var e__16881__auto____$17 = e17904;
if((e__16881__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$17;
}
} else {
throw e17904;

}
}} else {
throw e__16881__auto____$16;
}
} else {
throw e17903;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17902){if((e17902 instanceof Error)){
var e__16881__auto____$16 = e17902;
if((e__16881__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$16;
}
} else {
throw e17902;

}
}} else {
throw e__16881__auto____$15;
}
} else {
throw e17901;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17900){if((e17900 instanceof Error)){
var e__16881__auto____$15 = e17900;
if((e__16881__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$15;
}
} else {
throw e17900;

}
}} else {
throw e__16881__auto____$14;
}
} else {
throw e17899;

}
}} else {
throw e__16881__auto____$13;
}
} else {
throw e17898;

}
}} else {
throw e__16881__auto____$12;
}
} else {
throw e17897;

}
}} else {
throw e__16881__auto____$11;
}
} else {
throw e17896;

}
}} else {
throw e__16881__auto____$10;
}
} else {
throw e17895;

}
}} else {
throw e__16881__auto____$9;
}
} else {
throw e17894;

}
}} else {
throw e__16881__auto____$8;
}
} else {
throw e17893;

}
}} else {
throw e__16881__auto____$7;
}
} else {
throw e17892;

}
}} else {
throw e__16881__auto____$6;
}
} else {
throw e17891;

}
}} else {
throw e__16881__auto____$5;
}
} else {
throw e17890;

}
}} else {
throw e__16881__auto____$4;
}
} else {
throw e17889;

}
}} else {
throw e__16881__auto____$3;
}
} else {
throw e17888;

}
}} else {
throw e__16881__auto____$2;
}
} else {
throw e17887;

}
}} else {
throw e__16881__auto____$1;
}
} else {
throw e17886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17885){if((e17885 instanceof Error)){
var e__16881__auto____$1 = e17885;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17885;

}
}} else {
throw e__16881__auto__;
}
} else {
throw e17884;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17883){if((e17883 instanceof Error)){
var e__16881__auto__ = e17883;
if((e__16881__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__16881__auto__;
}
} else {
throw e17883;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_17951 = cljs.core.vec.call(null,eav);
var ocr_17952 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17951)) && ((cljs.core.count.call(null,ocr_17951) === 3)))){
try{var ocr_17951_0__17977 = cljs.core.nth.call(null,ocr_17951,(0));
if(cljs.core._EQ_.call(null,ocr_17951_0__17977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17951_1__17978 = cljs.core.nth.call(null,ocr_17951,(1));
if(cljs.core._EQ_.call(null,ocr_17951_1__17978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17951_2__17979 = cljs.core.nth.call(null,ocr_17951,(2));
if(cljs.core._EQ_.call(null,ocr_17951_2__17979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e18041){if((e18041 instanceof Error)){
var e__16881__auto__ = e18041;
if((e__16881__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17952)) && ((cljs.core.count.call(null,ocr_17952) === 3)))){
try{var ocr_17952_2__17982 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17982 === false)){
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18043){if((e18043 instanceof Error)){
var e__16881__auto____$1 = e18043;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17982 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17982 === true)){
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18044){if((e18044 instanceof Error)){
var e__16881__auto____$2 = e18044;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$2;
}
} else {
throw e18044;

}
}} else {
throw e__16881__auto____$1;
}
} else {
throw e18043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18042){if((e18042 instanceof Error)){
var e__16881__auto____$1 = e18042;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e18042;

}
}} else {
throw e__16881__auto__;
}
} else {
throw e18041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18036){if((e18036 instanceof Error)){
var e__16881__auto__ = e18036;
if((e__16881__auto__ === cljs.core.match.backtrack)){
try{var ocr_17951_2__17979 = cljs.core.nth.call(null,ocr_17951,(2));
if(cljs.core._EQ_.call(null,ocr_17951_2__17979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17952)) && ((cljs.core.count.call(null,ocr_17952) === 3)))){
try{var ocr_17952_1__17984 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17984 === false)){
var a = cljs.core.nth.call(null,ocr_17951,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18039){if((e18039 instanceof Error)){
var e__16881__auto____$1 = e18039;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17952_1__17984 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17984 === true)){
var a = cljs.core.nth.call(null,ocr_17951,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18040){if((e18040 instanceof Error)){
var e__16881__auto____$2 = e18040;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$2;
}
} else {
throw e18040;

}
}} else {
throw e__16881__auto____$1;
}
} else {
throw e18039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18038){if((e18038 instanceof Error)){
var e__16881__auto____$1 = e18038;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e18038;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18037){if((e18037 instanceof Error)){
var e__16881__auto____$1 = e18037;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e18037;

}
}} else {
throw e__16881__auto__;
}
} else {
throw e18036;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17990){if((e17990 instanceof Error)){
var e__16881__auto__ = e17990;
if((e__16881__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_17952)) && ((cljs.core.count.call(null,ocr_17952) === 3)))){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === false)){
try{var ocr_17951_1__17978 = cljs.core.nth.call(null,ocr_17951,(1));
if(cljs.core._EQ_.call(null,ocr_17951_1__17978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17951_2__17979 = cljs.core.nth.call(null,ocr_17951,(2));
if(cljs.core._EQ_.call(null,ocr_17951_2__17979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17951,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18035){if((e18035 instanceof Error)){
var e__16881__auto____$1 = e18035;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e18035;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18034){if((e18034 instanceof Error)){
var e__16881__auto____$1 = e18034;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e18034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17992){if((e17992 instanceof Error)){
var e__16881__auto____$1 = e17992;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
try{var ocr_17951_2__17979 = cljs.core.nth.call(null,ocr_17951,(2));
if(cljs.core._EQ_.call(null,ocr_17951_2__17979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_17951_1__17978 = cljs.core.nth.call(null,ocr_17951,(1));
if(cljs.core._EQ_.call(null,ocr_17951_1__17978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17951,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18031){if((e18031 instanceof Error)){
var e__16881__auto____$2 = e18031;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
var a = cljs.core.nth.call(null,ocr_17951,(1));
var e = cljs.core.nth.call(null,ocr_17951,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18032){if((e18032 instanceof Error)){
var e__16881__auto____$3 = e18032;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === false)){
var a = cljs.core.nth.call(null,ocr_17951,(1));
var e = cljs.core.nth.call(null,ocr_17951,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18033){if((e18033 instanceof Error)){
var e__16881__auto____$4 = e18033;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e18033;

}
}} else {
throw e__16881__auto____$3;
}
} else {
throw e18032;

}
}} else {
throw e__16881__auto____$2;
}
} else {
throw e18031;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18030){if((e18030 instanceof Error)){
var e__16881__auto____$2 = e18030;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$2;
}
} else {
throw e18030;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17993){if((e17993 instanceof Error)){
var e__16881__auto____$2 = e17993;
if((e__16881__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === false)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
try{var ocr_17951_2__17979 = cljs.core.nth.call(null,ocr_17951,(2));
if(cljs.core._EQ_.call(null,ocr_17951_2__17979,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18029){if((e18029 instanceof Error)){
var e__16881__auto____$3 = e18029;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$3;
}
} else {
throw e18029;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18028){if((e18028 instanceof Error)){
var e__16881__auto____$3 = e18028;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$3;
}
} else {
throw e18028;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17994){if((e17994 instanceof Error)){
var e__16881__auto____$3 = e17994;
if((e__16881__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === true)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
try{var ocr_17951_1__17978 = cljs.core.nth.call(null,ocr_17951,(1));
if(cljs.core._EQ_.call(null,ocr_17951_1__17978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18027){if((e18027 instanceof Error)){
var e__16881__auto____$4 = e18027;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e18027;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18026){if((e18026 instanceof Error)){
var e__16881__auto____$4 = e18026;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$4;
}
} else {
throw e18026;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17995){if((e17995 instanceof Error)){
var e__16881__auto____$4 = e17995;
if((e__16881__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === false)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
try{var ocr_17951_1__17978 = cljs.core.nth.call(null,ocr_17951,(1));
if(cljs.core._EQ_.call(null,ocr_17951_1__17978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18025){if((e18025 instanceof Error)){
var e__16881__auto____$5 = e18025;
if((e__16881__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$5;
}
} else {
throw e18025;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18024){if((e18024 instanceof Error)){
var e__16881__auto____$5 = e18024;
if((e__16881__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$5;
}
} else {
throw e18024;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17996){if((e17996 instanceof Error)){
var e__16881__auto____$5 = e17996;
if((e__16881__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === true)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === false)){
try{var ocr_17951_1__17978 = cljs.core.nth.call(null,ocr_17951,(1));
if(cljs.core._EQ_.call(null,ocr_17951_1__17978,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18023){if((e18023 instanceof Error)){
var e__16881__auto____$6 = e18023;
if((e__16881__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$6;
}
} else {
throw e18023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18020){if((e18020 instanceof Error)){
var e__16881__auto____$6 = e18020;
if((e__16881__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
try{var ocr_17951_0__17977 = cljs.core.nth.call(null,ocr_17951,(0));
if(cljs.core._EQ_.call(null,ocr_17951_0__17977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18022){if((e18022 instanceof Error)){
var e__16881__auto____$7 = e18022;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$7;
}
} else {
throw e18022;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18021){if((e18021 instanceof Error)){
var e__16881__auto____$7 = e18021;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$7;
}
} else {
throw e18021;

}
}} else {
throw e__16881__auto____$6;
}
} else {
throw e18020;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17997){if((e17997 instanceof Error)){
var e__16881__auto____$6 = e17997;
if((e__16881__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === false)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
try{var ocr_17951_0__17977 = cljs.core.nth.call(null,ocr_17951,(0));
if(cljs.core._EQ_.call(null,ocr_17951_0__17977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18019){if((e18019 instanceof Error)){
var e__16881__auto____$7 = e18019;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$7;
}
} else {
throw e18019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18018){if((e18018 instanceof Error)){
var e__16881__auto____$7 = e18018;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$7;
}
} else {
throw e18018;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17998){if((e17998 instanceof Error)){
var e__16881__auto____$7 = e17998;
if((e__16881__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === true)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === false)){
try{var ocr_17951_0__17977 = cljs.core.nth.call(null,ocr_17951,(0));
if(cljs.core._EQ_.call(null,ocr_17951_0__17977,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18017){if((e18017 instanceof Error)){
var e__16881__auto____$8 = e18017;
if((e__16881__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$8;
}
} else {
throw e18017;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18011){if((e18011 instanceof Error)){
var e__16881__auto____$8 = e18011;
if((e__16881__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18015){if((e18015 instanceof Error)){
var e__16881__auto____$9 = e18015;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === false)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18016){if((e18016 instanceof Error)){
var e__16881__auto____$10 = e18016;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e18016;

}
}} else {
throw e__16881__auto____$9;
}
} else {
throw e18015;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18012){if((e18012 instanceof Error)){
var e__16881__auto____$9 = e18012;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === false)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18014){if((e18014 instanceof Error)){
var e__16881__auto____$10 = e18014;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e18014;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18013){if((e18013 instanceof Error)){
var e__16881__auto____$10 = e18013;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e18013;

}
}} else {
throw e__16881__auto____$9;
}
} else {
throw e18012;

}
}} else {
throw e__16881__auto____$8;
}
} else {
throw e18011;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17999){if((e17999 instanceof Error)){
var e__16881__auto____$8 = e17999;
if((e__16881__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === false)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18010){if((e18010 instanceof Error)){
var e__16881__auto____$9 = e18010;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$9;
}
} else {
throw e18010;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18009){if((e18009 instanceof Error)){
var e__16881__auto____$9 = e18009;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$9;
}
} else {
throw e18009;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18000){if((e18000 instanceof Error)){
var e__16881__auto____$9 = e18000;
if((e__16881__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === true)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === false)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === false)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18008){if((e18008 instanceof Error)){
var e__16881__auto____$10 = e18008;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e18008;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18007){if((e18007 instanceof Error)){
var e__16881__auto____$10 = e18007;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$10;
}
} else {
throw e18007;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18001){if((e18001 instanceof Error)){
var e__16881__auto____$10 = e18001;
if((e__16881__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_17952_2__17988 = cljs.core.nth.call(null,ocr_17952,(2));
if((ocr_17952_2__17988 === false)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === true)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === false)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18006){if((e18006 instanceof Error)){
var e__16881__auto____$11 = e18006;
if((e__16881__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$11;
}
} else {
throw e18006;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18003){if((e18003 instanceof Error)){
var e__16881__auto____$11 = e18003;
if((e__16881__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_17952_0__17986 = cljs.core.nth.call(null,ocr_17952,(0));
if((ocr_17952_0__17986 === false)){
try{var ocr_17952_1__17987 = cljs.core.nth.call(null,ocr_17952,(1));
if((ocr_17952_1__17987 === true)){
var e = cljs.core.nth.call(null,ocr_17951,(0));
var a = cljs.core.nth.call(null,ocr_17951,(1));
var v = cljs.core.nth.call(null,ocr_17951,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18005){if((e18005 instanceof Error)){
var e__16881__auto____$12 = e18005;
if((e__16881__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$12;
}
} else {
throw e18005;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18004){if((e18004 instanceof Error)){
var e__16881__auto____$12 = e18004;
if((e__16881__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$12;
}
} else {
throw e18004;

}
}} else {
throw e__16881__auto____$11;
}
} else {
throw e18003;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e18002){if((e18002 instanceof Error)){
var e__16881__auto____$11 = e18002;
if((e__16881__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$11;
}
} else {
throw e18002;

}
}} else {
throw e__16881__auto____$10;
}
} else {
throw e18001;

}
}} else {
throw e__16881__auto____$9;
}
} else {
throw e18000;

}
}} else {
throw e__16881__auto____$8;
}
} else {
throw e17999;

}
}} else {
throw e__16881__auto____$7;
}
} else {
throw e17998;

}
}} else {
throw e__16881__auto____$6;
}
} else {
throw e17997;

}
}} else {
throw e__16881__auto____$5;
}
} else {
throw e17996;

}
}} else {
throw e__16881__auto____$4;
}
} else {
throw e17995;

}
}} else {
throw e__16881__auto____$3;
}
} else {
throw e17994;

}
}} else {
throw e__16881__auto____$2;
}
} else {
throw e17993;

}
}} else {
throw e__16881__auto____$1;
}
} else {
throw e17992;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17991){if((e17991 instanceof Error)){
var e__16881__auto____$1 = e17991;
if((e__16881__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__16881__auto____$1;
}
} else {
throw e17991;

}
}} else {
throw e__16881__auto__;
}
} else {
throw e17990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e17989){if((e17989 instanceof Error)){
var e__16881__auto__ = e17989;
if((e__16881__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__16881__auto__;
}
} else {
throw e17989;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__18046){
var vec__18047 = p__18046;
var k = cljs.core.nth.call(null,vec__18047,(0),null);
var v = cljs.core.nth.call(null,vec__18047,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__18047,k,v){
return (function (p1__18045_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__18045_SHARP_));
});})(vec__18047,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__18051){
var vec__18052 = p__18051;
var k = cljs.core.nth.call(null,vec__18052,(0),null);
var v = cljs.core.nth.call(null,vec__18052,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__18052,k,v){
return (function (p1__18050_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__18050_SHARP_));
});})(vec__18052,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if((!(cljs.core.empty_QMARK_.call(null,varmap)))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__18055_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__18055_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x)){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__18056 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__18056,(0),null);
var e = cljs.core.nth.call(null,vec__18056,(1),null);
var a = cljs.core.nth.call(null,vec__18056,(2),null);
var v = cljs.core.nth.call(null,vec__18056,(3),null);
if(((cljs.core._EQ_.call(null,var$,e)) || (((cljs.core._EQ_.call(null,var$,v)) && (posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a)))))){
return dbvarmap.call(null,db);
} else {
var G__18059 = var$;
var G__18060 = dbvarmap;
var G__18061 = cljs.core.rest.call(null,dbeavs);
var$ = G__18059;
dbvarmap = G__18060;
dbeavs = G__18061;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__18062 = (n + (1));
var G__18063 = cljs.core.rest.call(null,xs__$1);
n = G__18062;
xs__$1 = G__18063;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__4120__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__18064_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__18064_SHARP_))){
return type.call(null,p1__18064_SHARP_);
} else {
return p1__18064_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__18065){
var vec__18066 = p__18065;
var db_sym = cljs.core.nth.call(null,vec__18066,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__18066,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.call(null,(function (p1__18070_SHARP_,p2__18069_SHARP_){
if(cljs.core._EQ_.call(null,e,p2__18069_SHARP_)){
return p1__18070_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_.call(null,var_value)))){
return false;
} else {
var clause = cljs.core.first.call(null,where);
var remaining = cljs.core.rest.call(null,where);
while(true){
var pred__18074 = cljs.core._EQ_;
var expr__18075 = cljs.core.first.call(null,posh.lib.q_analyze.indexes_of.call(null,var_name,clause));
if(cljs.core.truth_(pred__18074.call(null,(1),expr__18075))){
return true;
} else {
if(cljs.core.truth_(pred__18074.call(null,(3),expr__18075))){
if(posh.lib.q_analyze.schema_ref_QMARK_.call(null,schema,cljs.core.nth.call(null,clause,(2)))){
return true;
} else {
if(cljs.core.seq.call(null,remaining)){
var G__18077 = cljs.core.first.call(null,remaining);
var G__18078 = cljs.core.rest.call(null,remaining);
clause = G__18077;
remaining = G__18078;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq.call(null,remaining)){
var G__18079 = cljs.core.first.call(null,remaining);
var G__18080 = cljs.core.rest.call(null,remaining);
clause = G__18079;
remaining = G__18080;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set.call(null,(function (){var iter__4523__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__18081(s__18082){
return (new cljs.core.LazySeq(null,(function (){
var s__18082__$1 = s__18082;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18082__$1);
if(temp__5735__auto__){
var s__18082__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18082__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18082__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18084 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18083 = (0);
while(true){
if((i__18083 < size__4522__auto__)){
var var_value = cljs.core._nth.call(null,c__4521__auto__,i__18083);
cljs.core.chunk_append.call(null,b__18084,((posh.lib.q_analyze.lookup_ref_QMARK_.call(null,schema,where,var_name,var_value))?entid_fn.call(null,db,var_value):var_value));

var G__18085 = (i__18083 + (1));
i__18083 = G__18085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18084),posh$lib$q_analyze$resolve_any_idents_$_iter__18081.call(null,cljs.core.chunk_rest.call(null,s__18082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18084),null);
}
} else {
var var_value = cljs.core.first.call(null,s__18082__$2);
return cljs.core.cons.call(null,((posh.lib.q_analyze.lookup_ref_QMARK_.call(null,schema,where,var_name,var_value))?entid_fn.call(null,db,var_value):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__18081.call(null,cljs.core.rest.call(null,s__18082__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__18090){
var vec__18091 = p__18090;
var sym = cljs.core.nth.call(null,vec__18091,(0),null);
var arg = cljs.core.nth.call(null,vec__18091,(1),null);
var or__4131__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__18094){
var vec__18095 = p__18094;
var a = cljs.core.nth.call(null,vec__18095,(0),null);
var v = cljs.core.nth.call(null,vec__18095,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__18098){
var vec__18099 = p__18098;
var db_sym = cljs.core.nth.call(null,vec__18099,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__18099,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__18102){
var vec__18103 = p__18102;
var db_sym = cljs.core.nth.call(null,vec__18103,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__18103,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__18106){
var vec__18107 = p__18106;
var seq__18108 = cljs.core.seq.call(null,vec__18107);
var first__18109 = cljs.core.first.call(null,seq__18108);
var seq__18108__$1 = cljs.core.next.call(null,seq__18108);
var db = first__18109;
var eav = seq__18108__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__18107,seq__18108,first__18109,seq__18108__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (var_name){
var temp__5733__auto__ = in_vars.call(null,var_name);
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
});})(vec__18107,seq__18108,first__18109,seq__18108__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__18110){
var vec__18111 = p__18110;
var k = cljs.core.nth.call(null,vec__18111,(0),null);
var v = cljs.core.nth.call(null,vec__18111,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__18088_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_.call(null,p1__18088_SHARP_)) && (cljs.core.not.call(null,linked_qvars.call(null,p1__18088_SHARP_))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__18088_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__18089_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__18089_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__18089_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map
