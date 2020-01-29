// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__18157,retrieve){
var map__18158 = p__18157;
var map__18158__$1 = (((((!((map__18158 == null))))?(((((map__18158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18158):map__18158);
var dcfg = map__18158__$1;
var q = cljs.core.get.call(null,map__18158__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.call(null,map__18158__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.call(null,map__18158__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.call(null,map__18158__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.call(null,map__18158__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__18161 = arguments.length;
switch (G__18161) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.call(null,posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__18162,db_id,conn,schema,base_filters){
var map__18163 = p__18162;
var map__18163__$1 = (((((!((map__18163 == null))))?(((((map__18163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18163):map__18163);
var posh_tree = map__18163__$1;
var dcfg = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.call(null,conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.call(null,schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var G__18167 = arguments.length;
switch (G__18167) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.call(null,posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__18168,db_id,db,filter_pred){
var map__18169 = p__18168;
var map__18169__$1 = (((((!((map__18169 == null))))?(((((map__18169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18169):map__18169);
var posh_tree = map__18169__$1;
var dbs = cljs.core.get.call(null,map__18169__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.call(null,map__18169__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__18169__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__18172,poshdb,tx_patterns){
var map__18173 = p__18172;
var map__18173__$1 = (((((!((map__18173 == null))))?(((((map__18173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18173):map__18173);
var posh_tree = map__18173__$1;
var cache = cljs.core.get.call(null,map__18173__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__18173__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__18175,poshdb,pull_pattern,eid){
var map__18176 = p__18175;
var map__18176__$1 = (((((!((map__18176 == null))))?(((((map__18176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18176):map__18176);
var posh_tree = map__18176__$1;
var cache = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.update_filter_pull.call(null,posh_tree,storage_key))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18186 = arguments.length;
var i__4731__auto___18187 = (0);
while(true){
if((i__4731__auto___18187 < len__4730__auto___18186)){
args__4736__auto__.push((arguments[i__4731__auto___18187]));

var G__18188 = (i__4731__auto___18187 + (1));
i__4731__auto___18187 = G__18188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__18181,query,args){
var map__18182 = p__18181;
var map__18182__$1 = (((((!((map__18182 == null))))?(((((map__18182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18182):map__18182);
var posh_tree = map__18182__$1;
var graph = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var map__18184 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__18184__$1 = (((((!((map__18184 == null))))?(((((map__18184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18184):map__18184);
var analysis = cljs.core.get.call(null,map__18184__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__18184__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.filter_q_transform_analysis.call(null,analysis))], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.core.add_filter_q.cljs$lang$applyTo = (function (seq18178){
var G__18179 = cljs.core.first.call(null,seq18178);
var seq18178__$1 = cljs.core.next.call(null,seq18178);
var G__18180 = cljs.core.first.call(null,seq18178__$1);
var seq18178__$2 = cljs.core.next.call(null,seq18178__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18179,G__18180,seq18178__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__18189,poshdb,pull_pattern,eid){
var map__18190 = p__18189;
var map__18190__$1 = (((((!((map__18190 == null))))?(((((map__18190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18190):map__18190);
var posh_tree = map__18190__$1;
var graph = cljs.core.get.call(null,map__18190__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__18190__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__18190__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__18190__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__18190__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__18190__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__18192,poshdb,pull_pattern,eids){
var map__18193 = p__18192;
var map__18193__$1 = (((((!((map__18193 == null))))?(((((map__18193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18193):map__18193);
var posh_tree = map__18193__$1;
var graph = cljs.core.get.call(null,map__18193__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__18193__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__18193__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__18193__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__18193__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__18193__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18203 = arguments.length;
var i__4731__auto___18204 = (0);
while(true){
if((i__4731__auto___18204 < len__4730__auto___18203)){
args__4736__auto__.push((arguments[i__4731__auto___18204]));

var G__18205 = (i__4731__auto___18204 + (1));
i__4731__auto___18204 = G__18205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__18198,query,args){
var map__18199 = p__18198;
var map__18199__$1 = (((((!((map__18199 == null))))?(((((map__18199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18199):map__18199);
var posh_tree = map__18199__$1;
var cache = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = cached;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var map__18201 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__18201__$1 = (((((!((map__18201 == null))))?(((((map__18201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18201):map__18201);
var analysis = cljs.core.get.call(null,map__18201__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__18201__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.core.add_q.cljs$lang$applyTo = (function (seq18195){
var G__18196 = cljs.core.first.call(null,seq18195);
var seq18195__$1 = cljs.core.next.call(null,seq18195);
var G__18197 = cljs.core.first.call(null,seq18195__$1);
var seq18195__$2 = cljs.core.next.call(null,seq18195__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18196,G__18197,seq18195__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__18206,storage_key){
var map__18207 = p__18206;
var map__18207__$1 = (((((!((map__18207 == null))))?(((((map__18207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18207):map__18207);
var posh_tree = map__18207__$1;
var graph = cljs.core.get.call(null,map__18207__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__18207__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item.call(null,graph,storage_key),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.call(null,cache,storage_key));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__18209,db_id,tx,new_cache,storage_key){
var map__18210 = p__18209;
var map__18210__$1 = (((((!((map__18210 == null))))?(((((map__18210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18210):map__18210);
var posh_tree = map__18210__$1;
var graph = cljs.core.get.call(null,map__18210__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__18210__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.call(null,new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.call(null,cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__4131__auto__ = reloaded;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return current_analysis;
}
})();
var map__18212 = cljs.core.get.call(null,graph,storage_key);
var map__18212__$1 = (((((!((map__18212 == null))))?(((((map__18212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18212):map__18212);
var outputs = cljs.core.get.call(null,map__18212__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5735__auto__ = (function (){var and__4120__auto__ = (!(cljs.core.empty_QMARK_.call(null,outputs)));
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4120__auto____$1)){
return posh.lib.datom_matcher.matching_datoms.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var pass_tx = temp__5735__auto__;
return cljs.core.reduce.call(null,((function (pass_tx,temp__5735__auto__,current_analysis,reloaded,analysis,map__18212,map__18212__$1,outputs,map__18210,map__18210__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.call(null,acc,posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k));
});})(pass_tx,temp__5735__auto__,current_analysis,reloaded,analysis,map__18212,map__18212__$1,outputs,map__18210,map__18210__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.call(null,children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY);
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.call(null,newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__18214,poshdb,tx){
var map__18215 = p__18214;
var map__18215__$1 = (((((!((map__18215 == null))))?(((((map__18215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18215):map__18215);
var posh_tree = map__18215__$1;
var txs = cljs.core.get.call(null,map__18215__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.call(null,map__18215__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.call(null,conns,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.call(null,txs,conn,posh.core.merge_txs.call(null,cljs.core.get.call(null,txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.map.call(null,cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__18217,conns_results){
var map__18218 = p__18217;
var map__18218__$1 = (((((!((map__18218 == null))))?(((((map__18218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18218):map__18218);
var posh_tree = map__18218__$1;
var conns = cljs.core.get.call(null,map__18218__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.call(null,map__18218__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.call(null,map__18218__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.call(null,map__18218__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.call(null,map__18218__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4523__auto__ = ((function (map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__18220(s__18221){
return (new cljs.core.LazySeq(null,((function (map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__18221__$1 = s__18221;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__18221__$1);
if(temp__5735__auto__){
var s__18221__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18221__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18221__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18223 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18222 = (0);
while(true){
if((i__18222 < size__4522__auto__)){
var vec__18224 = cljs.core._nth.call(null,c__4521__auto__,i__18222);
var db_id = cljs.core.nth.call(null,vec__18224,(0),null);
var conn = cljs.core.nth.call(null,vec__18224,(1),null);
cljs.core.chunk_append.call(null,b__18223,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])));

var G__18234 = (i__18222 + (1));
i__18222 = G__18234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18223),posh$core$after_transact_$_iter__18220.call(null,cljs.core.chunk_rest.call(null,s__18221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18223),null);
}
} else {
var vec__18227 = cljs.core.first.call(null,s__18221__$2);
var db_id = cljs.core.nth.call(null,vec__18227,(0),null);
var conn = cljs.core.nth.call(null,vec__18227,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])),posh$core$after_transact_$_iter__18220.call(null,cljs.core.rest.call(null,s__18221__$2)));
}
} else {
return null;
}
break;
}
});})(map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__4523__auto__.call(null,conns);
})());
var new_posh_tree = cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.call(null,((function (new_dbs,new_posh_tree,map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__18230){
var vec__18231 = p__18230;
var db_id = cljs.core.nth.call(null,vec__18231,(0),null);
var conn = cljs.core.nth.call(null,vec__18231,(1),null);
return cljs.core.merge.call(null,changed,posh.core.cache_changes.call(null,new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null)));
});})(new_dbs,new_posh_tree,map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv.call(null,((function (new_dbs,new_posh_tree,changed_cache,map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.call(null,v,cljs.core.get.call(null,cache,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__18218,map__18218__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.call(null,new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,really_changed),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__18235){
var map__18236 = p__18235;
var map__18236__$1 = (((((!((map__18236 == null))))?(((((map__18236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18236):map__18236);
var posh_tree = map__18236__$1;
var dcfg = cljs.core.get.call(null,map__18236__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.call(null,map__18236__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv.call(null,((function (map__18236,map__18236__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.call(null,m,conn,new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__18236,map__18236__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact.call(null,cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=core.js.map
