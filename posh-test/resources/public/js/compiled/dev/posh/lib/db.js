// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.lib.db');
goog.require('cljs.core');
goog.require('posh.lib.datom_matcher');
posh.lib.db.get_parent_db = (function posh$lib$db$get_parent_db(poshdb){
var G__16324 = cljs.core.first.call(null,poshdb);
var G__16324__$1 = (((G__16324 instanceof cljs.core.Keyword))?G__16324.fqn:null);
switch (G__16324__$1) {
case "db":
return null;

break;
case "filter-tx":
return cljs.core.second.call(null,poshdb);

break;
case "filter-pull":
return cljs.core.second.call(null,poshdb);

break;
case "filter-q":
return cljs.core.first.call(null,cljs.core.nth.call(null,poshdb,(2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16324__$1)].join('')));

}
});
posh.lib.db.get_db_path = (function posh$lib$db$get_db_path(poshdb){
var path = cljs.core.PersistentVector.EMPTY;
var pdb = poshdb;
while(true){
if(cljs.core.truth_(pdb)){
var G__16326 = cljs.core.cons.call(null,pdb,path);
var G__16327 = posh.lib.db.get_parent_db.call(null,pdb);
path = G__16326;
pdb = G__16327;
continue;
} else {
return path;
}
break;
}
});
posh.lib.db.db_id__GT_conn = (function posh$lib$db$db_id__GT_conn(posh_tree,db_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"conns","conns",-1475268193).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_schema = (function posh$lib$db$db_id__GT_schema(posh_tree,db_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_db = (function posh$lib$db$db_id__GT_db(posh_tree,db_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"dbs","dbs",1889628467).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.poshdb__GT_db_id = (function posh$lib$db$poshdb__GT_db_id(poshdb){
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return cljs.core.second.call(null,poshdb);
} else {
var G__16328 = posh.lib.db.get_parent_db.call(null,poshdb);
poshdb = G__16328;
continue;
}
break;
}
});
posh.lib.db.db_id__GT_attrs = (function posh$lib$db$db_id__GT_attrs(posh_tree,db_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.db_id__GT_db.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});
posh.lib.db.poshdb__GT_attrs = (function posh$lib$db$poshdb__GT_attrs(posh_tree,poshdb){
return posh.lib.db.db_id__GT_attrs.call(null,posh_tree,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
});
posh.lib.db.make_filter_pred = (function posh$lib$db$make_filter_pred(tx_patterns){
return (function (_,datom){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,tx_patterns,datom);
});
});
posh.lib.db.generate_initial_db = (function posh$lib$db$generate_initial_db(var_args){
var G__16330 = arguments.length;
switch (G__16330) {
case 3:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3 = (function (dcfg,conn,filters){
return posh.lib.db.generate_initial_db.call(null,dcfg,conn,filters,null);
});

posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,conn,filters,db){
var map__16331 = filters;
var map__16331__$1 = (((((!((map__16331 == null))))?(((((map__16331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16331):map__16331);
var filter = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var as_of = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var since = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"since","since",315379842));
var with$ = cljs.core.get.call(null,map__16331__$1,new cljs.core.Keyword(null,"with","with",-1536296876));
var db__$1 = (function (){var or__4131__auto__ = db;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn);
}
})();
var db__$2 = (cljs.core.truth_(since)?new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$1,since):db__$1);
var db__$3 = (cljs.core.truth_(as_of)?new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$2,as_of):db__$2);
var db__$4 = (cljs.core.truth_(with$)?new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$3,with$)):db__$3);
var db__$5 = (cljs.core.truth_(filter)?new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$4,(((filter instanceof cljs.core.Symbol))?null:filter)):db__$4);
return db__$5;
});

posh.lib.db.generate_initial_db.cljs$lang$maxFixedArity = 4;

posh.lib.db.poshdb__GT_db = (function posh$lib$db$poshdb__GT_db(p__16334,poshdb){
var map__16335 = p__16334;
var map__16335__$1 = (((((!((map__16335 == null))))?(((((map__16335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16335):map__16335);
var posh_tree = map__16335__$1;
var dcfg = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var cache = cljs.core.get.call(null,map__16335__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return posh.lib.db.db_id__GT_db.call(null,posh_tree,cljs.core.second.call(null,poshdb));
} else {
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,posh.lib.db.poshdb__GT_db.call(null,posh_tree,posh.lib.db.get_parent_db.call(null,poshdb)),posh.lib.db.make_filter_pred.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cache,poshdb))));
}
});
posh.lib.db.poshdb__GT_analyze_db = (function posh$lib$db$poshdb__GT_analyze_db(posh_tree,poshdb){
var db_id = posh.lib.db.poshdb__GT_db_id.call(null,poshdb);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.poshdb__GT_db.call(null,posh_tree,poshdb),new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});

//# sourceMappingURL=db.js.map
