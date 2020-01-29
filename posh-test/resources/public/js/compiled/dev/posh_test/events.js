// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh_test.events');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('posh_test.db');
goog.require('posh_test.effects');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('reitit.frontend.controllers');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("posh-test.events","initialize-db","posh-test.events/initialize-db",-1299547244),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__26333__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = posh_test.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26334__auto__;
}catch (e26865){var e = e26865;
throw e;
}}):(function (_,___$1){
return posh_test.db.default_db;
})));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("posh-test.events","initialize-ds","posh-test.events/initialize-ds",1805659082),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-ds","db/default-ds",-1895881681,null));

var opts__26333__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = posh_test.db.default_ds;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-ds","db/default-ds",-1895881681,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26334__auto__;
}catch (e26866){var e = e26866;
throw e;
}}):(function (_,___$1){
return posh_test.db.default_ds;
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("posh-test.events","navigate","posh-test.events/navigate",817878841),(function (db,p__26867){
var vec__26868 = p__26867;
var seq__26869 = cljs.core.seq.call(null,vec__26868);
var first__26870 = cljs.core.first.call(null,seq__26869);
var seq__26869__$1 = cljs.core.next.call(null,seq__26869);
var _ = first__26870;
var route = seq__26869__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("posh-test.effects","navigate!","posh-test.effects/navigate!",1040835915),route], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("posh-test.events","navigated","posh-test.events/navigated",917452912),(function (db,p__26871){
var vec__26872 = p__26871;
var _ = cljs.core.nth.call(null,vec__26872,(0),null);
var new_match = cljs.core.nth.call(null,vec__26872,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.call(null,new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));

//# sourceMappingURL=events.js.map
