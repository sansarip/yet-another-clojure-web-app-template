// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh.stateful');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
posh.stateful.get_posh_atom = (function posh$stateful$get_posh_atom(posh_item){
return new cljs.core.Keyword(null,"posh","posh",-1205664462).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,posh_item));
});
posh.stateful.poshdb__GT_conn = (function posh$stateful$poshdb__GT_conn(poshdb){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(posh.lib.db.poshdb__GT_attrs.call(null,cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,poshdb)),poshdb));
});
posh.stateful.new_posh = (function posh$stateful$new_posh(dcfg,retrieve){
return cljs.core.atom.call(null,posh.core.empty_tree.call(null,dcfg,retrieve));
});
posh.stateful.add_db = (function posh$stateful$add_db(posh_atom,db_id,conn,schema,opts){
return cljs.core.with_meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_.call(null,posh_atom,posh.core.add_db.call(null,cljs.core.deref.call(null,posh_atom),db_id,conn,schema,opts))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_pull = (function posh$stateful$add_pull(poshdb,pull_pattern,eid){
var posh_atom = posh.stateful.get_posh_atom.call(null,poshdb);
return cljs.core.with_meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_.call(null,posh_atom,posh.core.add_pull.call(null,cljs.core.deref.call(null,posh_atom),poshdb,pull_pattern,eid))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_q = (function posh$stateful$add_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18242 = arguments.length;
var i__4731__auto___18243 = (0);
while(true){
if((i__4731__auto___18243 < len__4730__auto___18242)){
args__4736__auto__.push((arguments[i__4731__auto___18243]));

var G__18244 = (i__4731__auto___18243 + (1));
i__4731__auto___18243 = G__18244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

posh.stateful.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.stateful.get_posh_atom,args)));
return cljs.core.with_meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.reset_BANG_.call(null,posh_atom,cljs.core.apply.call(null,cljs.core.partial.call(null,posh.core.add_q,cljs.core.deref.call(null,posh_atom),query),args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});

posh.stateful.add_q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
posh.stateful.add_q.cljs$lang$applyTo = (function (seq18240){
var G__18241 = cljs.core.first.call(null,seq18240);
var seq18240__$1 = cljs.core.next.call(null,seq18240);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18241,seq18240__$1);
});

posh.stateful.add_filter_tx = (function posh$stateful$add_filter_tx(poshdb,tx_patterns){
var posh_atom = posh.stateful.get_posh_atom.call(null,poshdb);
return cljs.core.with_meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom){
return (function (p1__18245_SHARP_){
return posh.core.add_filter_tx.call(null,p1__18245_SHARP_,poshdb,tx_patterns);
});})(posh_atom))
)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_filter_pull = (function posh$stateful$add_filter_pull(poshdb,pull_pattern,eid){
var posh_atom = posh.stateful.get_posh_atom.call(null,poshdb);
return cljs.core.with_meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom){
return (function (p1__18246_SHARP_){
return posh.core.add_filter_pull.call(null,p1__18246_SHARP_,poshdb,pull_pattern,eid);
});})(posh_atom))
)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});
posh.stateful.add_filter_q = (function posh$stateful$add_filter_q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18250 = arguments.length;
var i__4731__auto___18251 = (0);
while(true){
if((i__4731__auto___18251 < len__4730__auto___18250)){
args__4736__auto__.push((arguments[i__4731__auto___18251]));

var G__18252 = (i__4731__auto___18251 + (1));
i__4731__auto___18251 = G__18252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

posh.stateful.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.stateful.get_posh_atom,args)));
return cljs.core.with_meta.call(null,new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom){
return (function (p1__18247_SHARP_){
return cljs.core.apply.call(null,posh.core.add_filter_q,p1__18247_SHARP_,query,args);
});})(posh_atom))
)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh_atom], null));
});

posh.stateful.add_filter_q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
posh.stateful.add_filter_q.cljs$lang$applyTo = (function (seq18248){
var G__18249 = cljs.core.first.call(null,seq18248);
var seq18248__$1 = cljs.core.next.call(null,seq18248);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18249,seq18248__$1);
});

posh.stateful.rm = (function posh$stateful$rm(posh_item){
var posh_atom = posh.stateful.get_posh_atom.call(null,posh_item);
return cljs.core.reset_BANG_.call(null,posh_atom,posh.core.remove_item.call(null,cljs.core.deref.call(null,posh_atom),posh_item));
});
posh.stateful.transact = (function posh$stateful$transact(posh_item,tx){
var posh_atom = posh.stateful.get_posh_atom.call(null,posh_item);
cljs.core.reset_BANG_.call(null,posh_atom,posh.core.add_tx.call(null,cljs.core.deref.call(null,posh_atom),posh_item,tx));

return true;
});
posh.stateful.transact_all_BANG_ = (function posh$stateful$transact_all_BANG_(posh_atom){
return cljs.core.reset_BANG_.call(null,posh_atom,posh.core.process_tx_BANG_.call(null,cljs.core.deref.call(null,posh_atom)));
});
posh.stateful.cache = (function posh$stateful$cache(posh_query){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,posh_query))),posh_query);
});
posh.stateful.results = (function posh$stateful$results(posh_query){
return new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,posh_query))),posh_query));
});
posh.stateful.reload_patterns = (function posh$stateful$reload_patterns(posh_query){
return new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,posh_query))),posh_query));
});
posh.stateful.pass_patterns = (function posh$stateful$pass_patterns(posh_query){
return new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,posh_query))),posh_query));
});
posh.stateful.datoms = (function posh$stateful$datoms(posh_query){
return new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,posh_query))),posh_query));
});
posh.stateful.datoms_t = (function posh$stateful$datoms_t(posh_query){
return new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.stateful.get_posh_atom.call(null,posh_query))),posh_query));
});

//# sourceMappingURL=stateful.js.map
