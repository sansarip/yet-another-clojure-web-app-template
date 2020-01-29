// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.lib.pull_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
posh.lib.pull_analyze.reverse_lookup_QMARK_ = (function posh$lib$pull_analyze$reverse_lookup_QMARK_(attr){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,attr)),"_");
});
posh.lib.pull_analyze.reverse_lookup = (function posh$lib$pull_analyze$reverse_lookup(attr){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,attr)),"_")){
return cljs.core.keyword.call(null,[cljs.core.namespace.call(null,attr),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,cljs.core.rest.call(null,cljs.core.name.call(null,attr))))].join(''));
} else {
return null;
}
});
posh.lib.pull_analyze.dbid_into_vec = (function posh$lib$pull_analyze$dbid_into_vec(v){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),v))){
return cljs.core.cons.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),v);
} else {
return v;
}
});
posh.lib.pull_analyze.insert_dbid = (function posh$lib$pull_analyze$insert_dbid(pull_pattern){
if(cljs.core.map_QMARK_.call(null,pull_pattern)){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,pull_pattern),cljs.core.map.call(null,posh.lib.pull_analyze.insert_dbid,cljs.core.vals.call(null,pull_pattern)));
} else {
if(cljs.core.vector_QMARK_.call(null,pull_pattern)){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__16341_SHARP_){
if(cljs.core.coll_QMARK_.call(null,p1__16341_SHARP_)){
return posh.lib.pull_analyze.insert_dbid.call(null,p1__16341_SHARP_);
} else {
return p1__16341_SHARP_;
}
}),posh.lib.pull_analyze.dbid_into_vec.call(null,pull_pattern)));
} else {
return pull_pattern;

}
}
});
posh.lib.pull_analyze.pull_affected_datoms = (function posh$lib$pull_analyze$pull_affected_datoms(pull_fn,db,pull_pattern,eid){
return pull_fn.call(null,db,posh.lib.pull_analyze.insert_dbid.call(null,pull_pattern),eid);
});
posh.lib.pull_analyze.pull_ref_one_QMARK_ = (function posh$lib$pull_analyze$pull_ref_one_QMARK_(v){
var and__4120__auto__ = cljs.core.map_QMARK_.call(null,v);
if(and__4120__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__4120__auto__;
}
});
posh.lib.pull_analyze.pull_ref_many_QMARK_ = (function posh$lib$pull_analyze$pull_ref_many_QMARK_(v){
var and__4120__auto__ = cljs.core.vector_QMARK_.call(null,v);
if(and__4120__auto__){
return posh.lib.pull_analyze.pull_ref_one_QMARK_.call(null,cljs.core.first.call(null,v));
} else {
return and__4120__auto__;
}
});
posh.lib.pull_analyze.ref_QMARK_ = (function posh$lib$pull_analyze$ref_QMARK_(schema,attr){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.get.call(null,schema,attr),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
posh.lib.pull_analyze.cardinality_one_QMARK_ = (function posh$lib$pull_analyze$cardinality_one_QMARK_(schema,attr){
var temp__5735__auto__ = cljs.core.get.call(null,schema,attr);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return (!(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))));
} else {
return null;
}
});
posh.lib.pull_analyze.cardinality_many_QMARK_ = (function posh$lib$pull_analyze$cardinality_many_QMARK_(schema,attr){
var temp__5735__auto__ = cljs.core.get.call(null,schema,attr);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return cljs.core._EQ_.call(null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
} else {
return null;
}
});
posh.lib.pull_analyze.tx_datoms_for_pull_map = (function posh$lib$pull_analyze$tx_datoms_for_pull_map(schema,entity_id,pull_map){
if(cljs.core.empty_QMARK_.call(null,pull_map)){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__16345 = cljs.core.first.call(null,pull_map);
var k = cljs.core.nth.call(null,vec__16345,(0),null);
var v = cljs.core.nth.call(null,vec__16345,(1),null);
var r_QMARK_ = posh.lib.pull_analyze.reverse_lookup_QMARK_.call(null,k);
var k__$1 = ((r_QMARK_)?posh.lib.pull_analyze.reverse_lookup.call(null,k):k);
if(cljs.core._EQ_.call(null,k__$1,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,schema,entity_id,cljs.core.rest.call(null,pull_map));
} else {
if(posh.lib.pull_analyze.ref_QMARK_.call(null,schema,k__$1)){
return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = (!(r_QMARK_));
if(and__4120__auto__){
return posh.lib.pull_analyze.cardinality_one_QMARK_.call(null,schema,k__$1);
} else {
return and__4120__auto__;
}
})())?cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null)], null),posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,schema,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v),v)):(cljs.core.truth_((function (){var or__4131__auto__ = r_QMARK_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
return posh.lib.pull_analyze.cardinality_many_QMARK_.call(null,schema,k__$1);
}
})())?cljs.core.concat.call(null,(((!(r_QMARK_)))?cljs.core.mapcat.call(null,((function (vec__16345,k,v,r_QMARK_,k__$1){
return (function (p1__16342_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__16342_SHARP_)], null)],null));
});})(vec__16345,k,v,r_QMARK_,k__$1))
,v):null),cljs.core.mapcat.call(null,((function (vec__16345,k,v,r_QMARK_,k__$1){
return (function (p1__16343_SHARP_){
return posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,schema,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__16343_SHARP_),cljs.core.merge.call(null,((r_QMARK_)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),entity_id], null)]):null),p1__16343_SHARP_));
});})(vec__16345,k,v,r_QMARK_,k__$1))
,v)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,v], null)], null)
)),posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,schema,entity_id,cljs.core.rest.call(null,pull_map)));
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(posh.lib.pull_analyze.cardinality_many_QMARK_.call(null,schema,k__$1))?cljs.core.mapcat.call(null,((function (vec__16345,k,v,r_QMARK_,k__$1){
return (function (p1__16344_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,p1__16344_SHARP_], null)],null));
});})(vec__16345,k,v,r_QMARK_,k__$1))
,v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,k__$1,v], null)], null)),posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,schema,entity_id,cljs.core.rest.call(null,pull_map)));

}
}
}
});
posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull = (function posh$lib$pull_analyze$generate_affected_tx_datoms_for_pull(schema,affected_pull){
return posh.lib.pull_analyze.tx_datoms_for_pull_map.call(null,schema,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull),affected_pull);
});
posh.lib.pull_analyze.limit_spec_QMARK_ = (function posh$lib$pull_analyze$limit_spec_QMARK_(x){
var and__4120__auto__ = cljs.core.seq_QMARK_.call(null,x);
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,"limit",null], null), null).call(null,cljs.core.first.call(null,x));
} else {
return and__4120__auto__;
}
});
posh.lib.pull_analyze.limit_attr = (function posh$lib$pull_analyze$limit_attr(limit_spec){
return cljs.core.second.call(null,limit_spec);
});
posh.lib.pull_analyze.remove_limits = cljs.core.partial.call(null,clojure.walk.postwalk,(function (x){
if(cljs.core.truth_(posh.lib.pull_analyze.limit_spec_QMARK_.call(null,x))){
return posh.lib.pull_analyze.limit_attr.call(null,x);
} else {
return x;
}
}));
posh.lib.pull_analyze.recursive_val_QMARK_ = (function posh$lib$pull_analyze$recursive_val_QMARK_(v){
return ((typeof v === 'number') || (cljs.core._EQ_.call(null,v,new cljs.core.Symbol(null,"...","...",-1926939749,null))));
});
posh.lib.pull_analyze.tx_pattern_for_pull = (function posh$lib$pull_analyze$tx_pattern_for_pull(schema,pull_pattern,affected_pull,refs_only_QMARK_){
var entity_keys = cljs.core.remove.call(null,(function (p1__16348_SHARP_){
return ((cljs.core.map_QMARK_.call(null,p1__16348_SHARP_)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),p1__16348_SHARP_)));
}),pull_pattern);
var val_keys = cljs.core.remove.call(null,((function (entity_keys){
return (function (p1__16349_SHARP_){
return ((posh.lib.pull_analyze.reverse_lookup_QMARK_.call(null,p1__16349_SHARP_)) || (posh.lib.pull_analyze.ref_QMARK_.call(null,schema,p1__16349_SHARP_)));
});})(entity_keys))
,entity_keys);
var ref_keys = cljs.core.map.call(null,((function (entity_keys,val_keys){
return (function (k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null)]);
});})(entity_keys,val_keys))
,cljs.core.remove.call(null,cljs.core.set.call(null,val_keys),entity_keys));
var starred_QMARK_ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),val_keys);
var pull_maps = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.concat.call(null,ref_keys,cljs.core.filter.call(null,cljs.core.map_QMARK_,pull_pattern)));
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull))){
return cljs.core.concat.call(null,((cljs.core.not.call(null,(function (){var or__4131__auto__ = refs_only_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,val_keys);
}
})()))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull),(cljs.core.truth_(starred_QMARK_)?new cljs.core.Symbol(null,"_","_",-1201019570,null):cljs.core.set.call(null,val_keys)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null):null),cljs.core.mapcat.call(null,((function (entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps){
return (function (p__16352){
var vec__16353 = p__16352;
var ref_key = cljs.core.nth.call(null,vec__16353,(0),null);
var ref_pull = cljs.core.nth.call(null,vec__16353,(1),null);
var r_QMARK_ = posh.lib.pull_analyze.reverse_lookup_QMARK_.call(null,ref_key);
var unrev_key = ((r_QMARK_)?posh.lib.pull_analyze.reverse_lookup.call(null,ref_key):ref_key);
return cljs.core.concat.call(null,((r_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),unrev_key,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(affected_pull),ref_key,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null)),((posh.lib.pull_analyze.recursive_val_QMARK_.call(null,ref_pull))?(cljs.core.truth_(ref_key.call(null,affected_pull))?cljs.core.mapcat.call(null,((function (r_QMARK_,unrev_key,vec__16353,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps){
return (function (p1__16350_SHARP_){
return posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,pull_pattern,p1__16350_SHARP_,refs_only_QMARK_);
});})(r_QMARK_,unrev_key,vec__16353,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps))
,ref_key.call(null,affected_pull)):null):(cljs.core.truth_((function (){var or__4131__auto__ = r_QMARK_;
if(or__4131__auto__){
return or__4131__auto__;
} else {
return posh.lib.pull_analyze.cardinality_many_QMARK_.call(null,schema,unrev_key);
}
})())?cljs.core.mapcat.call(null,((function (r_QMARK_,unrev_key,vec__16353,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps){
return (function (p1__16351_SHARP_){
return posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,ref_pull,p1__16351_SHARP_,refs_only_QMARK_);
});})(r_QMARK_,unrev_key,vec__16353,ref_key,ref_pull,entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps))
,ref_key.call(null,affected_pull)):posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,ref_pull,ref_key.call(null,affected_pull,refs_only_QMARK_))
)));
});})(entity_keys,val_keys,ref_keys,starred_QMARK_,pull_maps))
,pull_maps));
} else {
return null;
}
});
posh.lib.pull_analyze.pull_analyze = (function posh$lib$pull_analyze$pull_analyze(dcfg,retrieve,p__16356,pull_pattern,ent_id){
var map__16357 = p__16356;
var map__16357__$1 = (((((!((map__16357 == null))))?(((((map__16357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16357):map__16357);
var db = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"db","db",993250759));
var db_id = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
var schema = cljs.core.get.call(null,map__16357__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_((function (){var and__4120__auto__ = ent_id;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq.call(null,retrieve);
} else {
return and__4120__auto__;
}
})())){
var affected_datoms = posh.lib.pull_analyze.pull_affected_datoms.call(null,new cljs.core.Keyword(null,"pull","pull",-860544805).cljs$core$IFn$_invoke$arity$1(dcfg),db,pull_pattern,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,ent_id));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),affected_datoms], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull.call(null,schema,affected_datoms);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,datoms])], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),db,datoms)])], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?(function (){var prepped_pull_pattern = posh.lib.pull_analyze.insert_dbid.call(null,posh.lib.pull_analyze.remove_limits.call(null,pull_pattern));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.datom_matcher.reduce_patterns.call(null,cljs.core.concat.call(null,((cljs.core.vector_QMARK_.call(null,ent_id))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.first.call(null,ent_id),cljs.core.second.call(null,ent_id)], null)], null):null),posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,prepped_pull_pattern,affected_datoms,false)))])], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.datom_matcher.reduce_patterns.call(null,posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,prepped_pull_pattern,affected_datoms,true))])], null):null));
})():null));
} else {
return null;
}
});
posh.lib.pull_analyze.pull_many_analyze = (function posh$lib$pull_analyze$pull_many_analyze(dcfg,retrieve,p__16362,pull_pattern,ent_ids){
var map__16363 = p__16362;
var map__16363__$1 = (((((!((map__16363 == null))))?(((((map__16363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16363):map__16363);
var db = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"db","db",993250759));
var schema = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var db_id = cljs.core.get.call(null,map__16363__$1,new cljs.core.Keyword(null,"db-id","db-id",747248515));
if(cljs.core.empty_QMARK_.call(null,retrieve)){
return null;
} else {
var resolved_ent_ids = cljs.core.map.call(null,((function (map__16363,map__16363__$1,db,schema,db_id){
return (function (p1__16359_SHARP_){
return new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db,p1__16359_SHARP_);
});})(map__16363,map__16363__$1,db,schema,db_id))
,ent_ids);
var affected_datoms = posh.lib.pull_analyze.pull_affected_datoms.call(null,new cljs.core.Keyword(null,"pull-many","pull-many",217148130).cljs$core$IFn$_invoke$arity$1(dcfg),db,pull_pattern,ent_ids);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),affected_datoms], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = cljs.core.mapcat.call(null,((function (resolved_ent_ids,affected_datoms,map__16363,map__16363__$1,db,schema,db_id){
return (function (p1__16360_SHARP_){
return posh.lib.pull_analyze.generate_affected_tx_datoms_for_pull.call(null,schema,p1__16360_SHARP_);
});})(resolved_ent_ids,affected_datoms,map__16363,map__16363__$1,db,schema,db_id))
,affected_datoms);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,datoms])], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),db,datoms)])], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,(function (){var patterns = cljs.core.map.call(null,((function (resolved_ent_ids,affected_datoms,map__16363,map__16363__$1,db,schema,db_id){
return (function (p1__16361_SHARP_){
return posh.lib.pull_analyze.tx_pattern_for_pull.call(null,schema,posh.lib.pull_analyze.insert_dbid.call(null,posh.lib.pull_analyze.remove_limits.call(null,pull_pattern)),p1__16361_SHARP_,false);
});})(resolved_ent_ids,affected_datoms,map__16363,map__16363__$1,db,schema,db_id))
,affected_datoms);
cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.set.call(null,resolved_ent_ids),cljs.core.rest.call(null,cljs.core.ffirst.call(null,patterns)))),cljs.core.mapcat.call(null,cljs.core.rest,patterns));

return posh.lib.datom_matcher.reduce_patterns.call(null,cljs.core.apply.call(null,cljs.core.concat,patterns));
})()])], null):null));
}
});

//# sourceMappingURL=pull_analyze.js.map
