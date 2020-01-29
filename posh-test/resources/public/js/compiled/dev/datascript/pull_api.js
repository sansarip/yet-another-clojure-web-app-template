// Compiled by ClojureScript 1.10.520 {}
goog.provide('datascript.pull_api');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_parser');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"multi?","multi?",-749311069),new cljs.core.Keyword(null,"eids","eids",1546550700),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"kvps","kvps",65308317),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"results","results",-1134170113)],[multi_QMARK_,eids,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.call(null,datascript.pull_api.initial_frame.call(null,pattern,eids,multi_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__21646 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq.call(null,kvps)){
return cljs.core.conj_BANG_.call(null,G__21646,kvps);
} else {
return G__21646;
}
})());
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__21647 = rec;
var map__21647__$1 = (((((!((map__21647 == null))))?(((((map__21647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21647):map__21647);
var depth = cljs.core.get.call(null,map__21647__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var seen = cljs.core.get.call(null,map__21647__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return cljs.core.assoc.call(null,rec,new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.update.call(null,depth,attr,cljs.core.fnil.call(null,cljs.core.inc,(0))),new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,eid));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"seen","seen",-518999789)], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(datascript.pull_api.seen_eid_QMARK_.call(null,frame,eid)){
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__21649 = new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame);
var G__21649__$1 = (((G__21649 == null))?null:cljs.core.persistent_BANG_.call(null,G__21649));
if((G__21649__$1 == null)){
return null;
} else {
return cljs.core.get.call(null,G__21649__$1,key);
}
});
datascript.pull_api.recursion_result = (function datascript$pull_api$recursion_result(frame){
return datascript.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534),frame);
});
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.call(null,datascript.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534)),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__21650){
var vec__21651 = p__21650;
var seq__21652 = cljs.core.seq.call(null,vec__21651);
var first__21653 = cljs.core.first.call(null,seq__21652);
var seq__21652__$1 = cljs.core.next.call(null,seq__21652);
var frame = first__21653;
var frames = seq__21652__$1;
var temp__5733__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto__){
var eids = temp__5733__auto__;
var frame__$1 = datascript.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),datascript.pull_api.recursion_result.call(null,frame));
var eid = cljs.core.first.call(null,eids);
var or__4131__auto__ = datascript.pull_api.pull_seen_eid.call(null,frame__$1,frames,eid);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.conj.call(null,frames,frame__$1,datascript.pull_api.recursion_frame.call(null,frame__$1,eid));
}
} else {
var kvps = datascript.pull_api.recursion_result.call(null,frame);
var results = (function (){var G__21654 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq.call(null,kvps)){
return cljs.core.conj_BANG_.call(null,G__21654,kvps);
} else {
return G__21654;
}
})();
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"results","results",-1134170113),results));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__21655 = parent;
var map__21655__$1 = (((((!((map__21655 == null))))?(((((map__21655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21655):map__21655);
var recursion = cljs.core.get.call(null,map__21655__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var pattern = cljs.core.get.call(null,map__21655__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var depth = cljs.core.get.call(null,cljs.core.get.call(null,recursion,new cljs.core.Keyword(null,"depth","depth",1768663640)),attr,(0));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.call(null,frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame.call(null,db,cljs.core.conj.call(null,frames,parent,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"multi?","multi?",-749311069),multi_QMARK_,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"recursion","recursion",-749738765),recursion,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null)));
}
});
var pattern_21657 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = ((function (pattern_21657){
return (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.call(null,datascript.pull_api.subpattern_frame.call(null,pattern_21657,eids,multi_QMARK_,attr_key),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});})(pattern_21657))
;
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__21659){
var vec__21660 = p__21659;
var seq__21661 = cljs.core.seq.call(null,vec__21660);
var first__21662 = cljs.core.first.call(null,seq__21661);
var seq__21661__$1 = cljs.core.next.call(null,seq__21661);
var parent = first__21662;
var frames = seq__21661__$1;
var limit = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"limit","limit",-1355822363),(1000));
var attr_key__$1 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return attr_key;
}
})();
var found = cljs.core.not_empty.call(null,(function (){var G__21663 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,limit),G__21663);
} else {
return G__21663;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_.call(null,db,attr);
var component_QMARK_ = ((ref_QMARK_) && (datascript.db.component_QMARK_.call(null,db,attr)));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_.call(null,db,attr):(!(component_QMARK_)));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,attr_key__$1,found,vec__21660,seq__21661,first__21662,seq__21661__$1,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,attr_key__$1,found,vec__21660,seq__21661,first__21662,seq__21661__$1,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,attr_key__$1,found,vec__21660,seq__21661,first__21662,seq__21661__$1,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,attr_key__$1,found,vec__21660,seq__21661,first__21662,seq__21661__$1,parent,frames))
);
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"subpattern","subpattern",45002743))){
return cljs.core.conj.call(null,frames,parent,datascript.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"subpattern","subpattern",45002743).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.call(null,datom_val,found),multi_QMARK_,attr_key__$1));
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return datascript.pull_api.recurse_attr.call(null,db,attr_key__$1,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = component_QMARK_;
if(and__4120__auto__){
return forward_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.conj.call(null,frames,parent,datascript.pull_api.expand_frame.call(null,parent,eid,attr_key__$1,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found)));
} else {
var as_value = (function (){var G__21664 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.call(null,((function (G__21664,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,attr_key__$1,found,vec__21660,seq__21661,first__21662,seq__21661__$1,parent,frames){
return (function (p1__21658_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[p1__21658_SHARP_]);
});})(G__21664,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,attr_key__$1,found,vec__21660,seq__21661,first__21662,seq__21661__$1,parent,frames))
,G__21664);
} else {
return G__21664;
}
})();
var single_QMARK_ = (!(multi_QMARK_));
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,parent,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key__$1,(function (){var G__21665 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,as_value),found);
if(single_QMARK_){
return cljs.core.first.call(null,G__21665);
} else {
return G__21665;
}
})()));

}
}
}
} else {
return cljs.core.conj.call(null,frames,(function (){var G__21666 = parent;
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
return cljs.core.update.call(null,G__21666,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key__$1,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__21666;
}
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__21667 = spec;
var attr_key = cljs.core.nth.call(null,vec__21667,(0),null);
var opts = cljs.core.nth.call(null,vec__21667,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),attr_key)){
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword("db","id","db/id",-1388397098),eid));
} else {
return frames;
}
} else {
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.call(null,attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms.call(null,db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.call(null,(function (p__21670){
var vec__21671 = p__21670;
var k = cljs.core.nth.call(null,vec__21671,(0),null);
var v = cljs.core.nth.call(null,vec__21671,(1),null);
return cljs.core.not_EQ_.call(null,k,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),rattrs,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459));
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_.call(null,kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__21674){
var vec__21675 = p__21674;
var seq__21676 = cljs.core.seq.call(null,vec__21675);
var first__21677 = cljs.core.first.call(null,seq__21676);
var seq__21676__$1 = cljs.core.next.call(null,seq__21676);
var frame = first__21677;
var frames = seq__21676__$1;
return datascript.pull_api.expand_result.call(null,frames,datascript.pull_api.into_BANG_.call(null,new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154).cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__4131__auto__ = datascript.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459),frame);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__21678){
var vec__21679 = p__21678;
var seq__21680 = cljs.core.seq.call(null,vec__21679);
var first__21681 = cljs.core.first.call(null,seq__21680);
var seq__21680__$1 = cljs.core.next.call(null,seq__21680);
var frame = first__21681;
var frames = seq__21680__$1;
var temp__5733__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto__){
var datoms_by_attr = temp__5733__auto__;
var vec__21682 = cljs.core.first.call(null,datoms_by_attr);
var attr = cljs.core.nth.call(null,vec__21682,(0),null);
var datoms = cljs.core.nth.call(null,vec__21682,(1),null);
var opts = cljs.core.get.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms.call(null,db,attr,attr,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.rest)));
} else {
var temp__5733__auto____$1 = cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
if(cljs.core.truth_(temp__5733__auto____$1)){
var rattrs = temp__5733__auto____$1;
var frame__$1 = cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand-rev","expand-rev",1249112650),new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154),new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.conj.call(null,frames,frame__$1,datascript.pull_api.expand_reverse_subpattern_frame.call(null,frame__$1,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs));
} else {
return datascript.pull_api.expand_result.call(null,frames,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by.call(null,(function (d){
return d.a;
}),datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__21685 = frame;
var map__21685__$1 = (((((!((map__21685 == null))))?(((((map__21685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21685):map__21685);
var attr = cljs.core.get.call(null,map__21685__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var recursion = cljs.core.get.call(null,map__21685__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var rec = (function (){var G__21687 = recursion;
if((!((attr == null)))){
return datascript.pull_api.push_recursion.call(null,G__21687,attr,eid);
} else {
return G__21687;
}
})();
return datascript.pull_api.pull_expand_frame.call(null,db,cljs.core.conj.call(null,frames,frame,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)),new cljs.core.Keyword(null,"eid","eid",559519930),eid,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.seq.call(null,datoms),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec], null)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__21688 = frame;
var map__21688__$1 = (((((!((map__21688 == null))))?(((((map__21688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21688):map__21688);
var eid = cljs.core.get.call(null,map__21688__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var pattern = cljs.core.get.call(null,map__21688__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var or__4131__auto__ = datascript.pull_api.pull_seen_eid.call(null,frame,frames,eid);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand.call(null,db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__21690){
while(true){
var vec__21691 = p__21690;
var seq__21692 = cljs.core.seq.call(null,vec__21691);
var first__21693 = cljs.core.first.call(null,seq__21692);
var seq__21692__$1 = cljs.core.next.call(null,seq__21692);
var frame = first__21693;
var frames = seq__21692__$1;
var temp__5733__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto__){
var eids = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard.call(null,db,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"eid","eid",559519930),cljs.core.first.call(null,eids),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),frames);
} else {
var temp__5733__auto____$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__5733__auto____$1){
var specs = temp__5733__auto____$1;
var spec = cljs.core.first.call(null,specs);
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.rest.call(null,specs)));
return datascript.pull_api.pull_attr.call(null,db,spec,cljs.core.first.call(null,eids),new_frames);
} else {
var G__21694 = db;
var G__21695 = cljs.core.conj.call(null,frames,datascript.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),cljs.core.not_empty.call(null,cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__21694;
p__21690 = G__21695;
continue;
}
}
} else {
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__21696 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames));
var G__21696__$1 = (((G__21696 instanceof cljs.core.Keyword))?G__21696.fqn:null);
switch (G__21696__$1) {
case "expand":
var G__21703 = db;
var G__21704 = datascript.pull_api.pull_expand_frame.call(null,db,frames);
db = G__21703;
frames = G__21704;
continue;

break;
case "expand-rev":
var G__21705 = db;
var G__21706 = datascript.pull_api.pull_expand_reverse_frame.call(null,db,frames);
db = G__21705;
frames = G__21706;
continue;

break;
case "pattern":
var G__21707 = db;
var G__21708 = datascript.pull_api.pull_pattern_frame.call(null,db,frames);
db = G__21707;
frames = G__21708;
continue;

break;
case "recursion":
var G__21709 = db;
var G__21710 = datascript.pull_api.pull_recursion_frame.call(null,db,frames);
db = G__21709;
frames = G__21710;
continue;

break;
case "done":
var vec__21697 = frames;
var seq__21698 = cljs.core.seq.call(null,vec__21697);
var first__21699 = cljs.core.first.call(null,seq__21698);
var seq__21698__$1 = cljs.core.next.call(null,seq__21698);
var f = first__21699;
var remaining = seq__21698__$1;
var result = (function (){var G__21700 = cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"multi?","multi?",-749311069).cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first.call(null,G__21700);
} else {
return G__21700;
}
})();
if(cljs.core.seq.call(null,remaining)){
var G__21711 = db;
var G__21712 = cljs.core.conj.call(null,cljs.core.rest.call(null,remaining),(function (){var G__21701 = cljs.core.first.call(null,remaining);
if(cljs.core.truth_(result)){
return cljs.core.update.call(null,G__21701,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__21701;
}
})());
db = G__21711;
frames = G__21712;
continue;
} else {
return result;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21696__$1)].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__21713_SHARP_){
return datascript.db.entid_strict.call(null,db,p1__21713_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern.call(null,db,(new cljs.core.List(null,datascript.pull_api.initial_frame.call(null,pattern,eids__$1,multi_QMARK_),null,(1),null)));
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(datascript.db.db_QMARK_.call(null,db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec.call(null,db,datascript.pull_parser.parse_pull.call(null,selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(datascript.db.db_QMARK_.call(null,db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.pull_api.pull_spec.call(null,db,datascript.pull_parser.parse_pull.call(null,selector),eids,true);
});

//# sourceMappingURL=pull_api.js.map
