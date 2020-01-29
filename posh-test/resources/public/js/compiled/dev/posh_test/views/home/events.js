// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh_test.views.home.events');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('re_posh.core');
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("posh-test.views.home.events","add-item","posh-test.views.home.events/add-item",-1121117824),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__26457){
var vec__26458 = p__26457;
var ___$1 = cljs.core.nth.call(null,vec__26458,(0),null);
var val = cljs.core.nth.call(null,vec__26458,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("item","value","item/value",310604926),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","item","type/item",253990324)], null)], null));

var opts__26333__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__26333__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("item","value","item/value",310604926),val,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","item","type/item",253990324)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("item","value","item/value",310604926),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","item","type/item",253990324)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26334__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("item","value","item/value",310604926),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","item","type/item",253990324)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26334__auto__;
}catch (e26461){var e = e26461;
throw e;
}}):(function (_,p__26462){
var vec__26463 = p__26462;
var ___$1 = cljs.core.nth.call(null,vec__26463,(0),null);
var val = cljs.core.nth.call(null,vec__26463,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("item","value","item/value",310604926),val,new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","item","type/item",253990324)], null)], null);
})));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("posh-test.views.home.events","change-item-input","posh-test.views.home.events/change-item-input",-845839862),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__26466){
var vec__26467 = p__26466;
var ___$1 = cljs.core.nth.call(null,vec__26467,(0),null);
var id = cljs.core.nth.call(null,vec__26467,(1),null);
var val = cljs.core.nth.call(null,vec__26467,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("item-input","value","item-input/value",688907769),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)], null));

var opts__26333__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__26333__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__26333__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = id;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26334__auto__;
})(),new cljs.core.Keyword("item-input","value","item-input/value",688907769),(function (){var opts__26333__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__26334__auto__ = val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__26334__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("item-input","value","item-input/value",688907769),new cljs.core.Symbol(null,"val","val",1769233139,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__26334__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__26334__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword("item-input","value","item-input/value",688907769),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__26334__auto__;
}catch (e26470){var e = e26470;
throw e;
}}):(function (_,p__26471){
var vec__26472 = p__26471;
var ___$1 = cljs.core.nth.call(null,vec__26472,(0),null);
var id = cljs.core.nth.call(null,vec__26472,(1),null);
var val = cljs.core.nth.call(null,vec__26472,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("item-input","value","item-input/value",688907769),val], null)], null);
})));

//# sourceMappingURL=events.js.map
