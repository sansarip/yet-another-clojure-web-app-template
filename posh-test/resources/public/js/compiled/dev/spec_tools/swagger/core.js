// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.swagger.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('spec_tools.json_schema');
goog.require('spec_tools.visitor');
goog.require('spec_tools.impl');
goog.require('spec_tools.core');
spec_tools.swagger.core.spec_dispatch = (function spec_tools$swagger$core$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.accept_spec !== 'undefined')){
} else {
spec_tools.swagger.core.accept_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.swagger.core","default","spec-tools.swagger.core/default",1361779456)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.swagger.core","accept-spec"),spec_tools.swagger.core.spec_dispatch,new cljs.core.Keyword("spec-tools.swagger.core","default","spec-tools.swagger.core/default",1361779456),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (_,___$1,children,___$2){
return cljs.core.assoc.call(null,cljs.core.first.call(null,children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (_,___$1,children,___$2){
return cljs.core.assoc.call(null,cljs.core.first.call(null,children),new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children);
}));
spec_tools.swagger.core.accept_merge = (function spec_tools$swagger$core$accept_merge(children){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.concat.call(null,children,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children)))),new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.into,cljs.core.sorted_set.call(null),cljs.core.map.call(null,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.concat.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children)))))], null);
});
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (_,___$1,children,___$2){
return spec_tools.swagger.core.accept_merge.call(null,children);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (_,___$1,children,___$2){
return spec_tools.swagger.core.accept_merge.call(null,children);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (_,___$1,children,___$2){
return cljs.core.assoc.call(null,cljs.core.first.call(null,children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.assoc.call(null,cljs.core.first.call(null,children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children)], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x-items","x-items",-710213657),children], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enum","enum",1679018432),children,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (_,___$1,children,p__27772){
var map__27773 = p__27772;
var map__27773__$1 = (((((!((map__27773 == null))))?(((((map__27773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27773):map__27773);
var type = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var in$ = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var k = ((((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"parameter","parameter",1978789597))) && (cljs.core.not_EQ_.call(null,in$,new cljs.core.Keyword(null,"body","body",-2049205669)))))?new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890):new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247));
return cljs.core.assoc.call(null,spec_tools.impl.unwrap.call(null,children),k,true);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),(function (dispatch,spec,children,options){
var vec__27775 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27775,(0),null);
var data = cljs.core.nth.call(null,vec__27775,(1),null);
var swagger_meta = spec_tools.impl.unlift_keys.call(null,data,"swagger");
return cljs.core.merge.call(null,spec_tools.json_schema.accept_spec.call(null,dispatch,spec,children,options),swagger_meta);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.accept_spec,new cljs.core.Keyword("spec-tools.swagger.core","default","spec-tools.swagger.core/default",1361779456),(function (dispatch,spec,children,options){
return spec_tools.json_schema.accept_spec.call(null,dispatch,spec,children,options);
}));
/**
 * Generate Swagger schema matching the given clojure.spec spec.
 * 
 *   Since clojure.spec is more expressive than Swagger schemas, everything that
 *   satisfies the spec should satisfy the resulting schema, but the converse is
 *   not true.
 */
spec_tools.swagger.core.transform = (function spec_tools$swagger$core$transform(var_args){
var G__27779 = arguments.length;
switch (G__27779) {
case 1:
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.swagger.core.transform.call(null,spec,null);
});

spec_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.call(null,spec,spec_tools.swagger.core.accept_spec,options);
});

spec_tools.swagger.core.transform.cljs$lang$maxFixedArity = 2;

if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.extract_parameter !== 'undefined')){
} else {
spec_tools.swagger.core.extract_parameter = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.swagger.core","extract-parameter"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (in$,_){
return in$;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,spec_tools.swagger.core.extract_parameter,new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,spec){
var schema = spec_tools.swagger.core.transform.call(null,spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__4131__auto__ = spec_tools.impl.qualified_name.call(null,spec_tools.core.spec_name.call(null,spec));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__4131__auto__ = spec_tools.core.spec_description.call(null,spec);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(!(spec_tools.impl.nilable_spec_QMARK_.call(null,spec))),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null)], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.extract_parameter,new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,spec){
var map__27781 = spec_tools.swagger.core.transform.call(null,spec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
var map__27781__$1 = (((((!((map__27781 == null))))?(((((map__27781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27781):map__27781);
var properties = cljs.core.get.call(null,map__27781__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.call(null,map__27781__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.call(null,((function (map__27781,map__27781__$1,properties,required){
return (function (p__27783){
var vec__27784 = p__27783;
var k = cljs.core.nth.call(null,vec__27784,(0),null);
var map__27787 = cljs.core.nth.call(null,vec__27784,(1),null);
var map__27787__$1 = (((((!((map__27787 == null))))?(((((map__27787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27787):map__27787);
var schema = map__27787__$1;
var type = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name.call(null,in$),new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__4131__auto__ = spec_tools.core.spec_description.call(null,spec);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,required),k)], null),schema);
});})(map__27781,map__27781__$1,properties,required))
,properties);
}));
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.swagger !== 'undefined') && (typeof spec_tools.swagger.core !== 'undefined') && (typeof spec_tools.swagger.core.expand !== 'undefined')){
} else {
spec_tools.swagger.core.expand = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.swagger.core","expand"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (k,_,___$1,___$2){
return k;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,spec_tools.swagger.core.expand,new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4523__auto__ = (function spec_tools$swagger$core$iter__27789(s__27790){
return (new cljs.core.LazySeq(null,(function (){
var s__27790__$1 = s__27790;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27790__$1);
if(temp__5735__auto__){
var s__27790__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27790__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27790__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27792 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27791 = (0);
while(true){
if((i__27791 < size__4522__auto__)){
var vec__27793 = cljs.core._nth.call(null,c__4521__auto__,i__27791);
var status = cljs.core.nth.call(null,vec__27793,(0),null);
var response = cljs.core.nth.call(null,vec__27793,(1),null);
cljs.core.chunk_append.call(null,b__27792,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($))?cljs.core.update.call(null,$,new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)):$);
return cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.call(null,cljs.core.identity,""));
})()], null));

var G__27799 = (i__27791 + (1));
i__27791 = G__27799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27792),spec_tools$swagger$core$iter__27789.call(null,cljs.core.chunk_rest.call(null,s__27790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27792),null);
}
} else {
var vec__27796 = cljs.core.first.call(null,s__27790__$2);
var status = cljs.core.nth.call(null,vec__27796,(0),null);
var response = cljs.core.nth.call(null,vec__27796,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($))?cljs.core.update.call(null,$,new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)):$);
return cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.call(null,cljs.core.identity,""));
})()], null),spec_tools$swagger$core$iter__27789.call(null,cljs.core.rest.call(null,s__27790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,v);
})())], null);
}));
cljs.core._add_method.call(null,spec_tools.swagger.core.expand,new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),(function (_,v,acc,___$1){
var old = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.call(null,((function (old){
return (function (p__27800){
var vec__27801 = p__27800;
var in$ = cljs.core.nth.call(null,vec__27801,(0),null);
var spec = cljs.core.nth.call(null,vec__27801,(1),null);
return spec_tools.swagger.core.extract_parameter.call(null,in$,spec);
});})(old))
,v);
var merged = cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.core.reduce.call(null,((function (old,new$){
return (function (p__27804,p){
var vec__27805 = p__27804;
var ps = cljs.core.nth.call(null,vec__27805,(0),null);
var cache = cljs.core.nth.call(null,vec__27805,(1),null);
var acc__$1 = vec__27805;
var c = cljs.core.select_keys.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not.call(null,cache.call(null,c))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ps,p),cljs.core.conj.call(null,cache,c)], null);
} else {
return acc__$1;
}
});})(old,new$))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse.call(null,cljs.core.into.call(null,old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
spec_tools.swagger.core.expand_qualified_keywords = (function spec_tools$swagger$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,spec_tools.swagger.core.expand)));
return clojure.walk.postwalk.call(null,((function (accept_QMARK_){
return (function (x__$1){
if(cljs.core.map_QMARK_.call(null,x__$1)){
return cljs.core.reduce_kv.call(null,((function (accept_QMARK_){
return (function (acc,k,v){
if(cljs.core.truth_(accept_QMARK_.call(null,k))){
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,acc,k),spec_tools.swagger.core.expand.call(null,k,v,acc,options));
} else {
return acc;
}
});})(accept_QMARK_))
,x__$1,x__$1);
} else {
return x__$1;
}
});})(accept_QMARK_))
,x);
});
/**
 * Transforms data into a swagger2 spec. Input data must conform
 *   to the Swagger2 Spec (http://swagger.io/specification/) with a
 *   exception that it can have any qualified keywords that are expanded
 *   with the `spec-tools.swagger.core/expand` multimethod.
 */
spec_tools.swagger.core.swagger_spec = (function spec_tools$swagger$core$swagger_spec(var_args){
var G__27809 = arguments.length;
switch (G__27809) {
case 1:
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return spec_tools.swagger.core.swagger_spec.call(null,x,null);
});

spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return spec_tools.swagger.core.expand_qualified_keywords.call(null,x,options);
});

spec_tools.swagger.core.swagger_spec.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map
