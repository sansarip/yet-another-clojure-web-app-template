// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.parse');
goog.require('cljs.core');
goog.require('spec_tools.impl');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
spec_tools.parse.type_dispatch_value = (function spec_tools$parse$type_dispatch_value(type){
return ((cljs.core.sequential_QMARK_.call(null,type))?cljs.core.first:cljs.core.identity).call(null,type);
});
spec_tools.parse.collection_type_QMARK_ = (function spec_tools$parse$collection_type_QMARK_(type){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),type);
});
spec_tools.parse.leaf_type_QMARK_ = (function spec_tools$parse$leaf_type_QMARK_(type){
return (!(cljs.core.contains_QMARK_.call(null,spec_tools.parse.non_leaf_types.call(null),type)));
});
/**
 * Parses info out of a spec. Spec can be passed as a name, Spec or a form.
 *   Returns either `nil` or a map, with keys `:type` and other extra keys
 *   (like `:keys` for s/keys specs).
 */
spec_tools.parse.parse_spec = (function spec_tools$parse$parse_spec(x){
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),x)){
return null;
} else {
if(cljs.core.qualified_keyword_QMARK_.call(null,x)){
var G__16265 = cljs.spec.alpha.form.call(null,cljs.spec.alpha.get_spec.call(null,x));
x = G__16265;
continue;
} else {
if((x instanceof cljs.core.Symbol)){
return spec_tools.parse.parse_form.call(null,spec_tools.impl.normalize_symbol.call(null,x),null);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return spec_tools.parse.parse_form.call(null,spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,x)),x);
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,x))){
var G__16266 = cljs.spec.alpha.form.call(null,x);
x = G__16266;
continue;
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return spec_tools.parse.parse_form.call(null,spec_tools.form.resolve_form.call(null,x),null);
} else {
return spec_tools.parse.parse_form.call(null,x,null);

}
}
}
}
}
}
break;
}
});
spec_tools.parse.parse_spec_with_spec_ref = (function spec_tools$parse$parse_spec_with_spec_ref(x){
return cljs.core.merge.call(null,spec_tools.parse.parse_spec.call(null,x),((cljs.core.qualified_keyword_QMARK_.call(null,x))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null):null));
});
spec_tools.parse.get_keys = (function spec_tools$parse$get_keys(parse_data){
var or__4131__auto__ = new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460).cljs$core$IFn$_invoke$arity$1(parse_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__16267 = parse_data;
var G__16267__$1 = (((G__16267 == null))?null:new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600).cljs$core$IFn$_invoke$arity$1(G__16267));
var G__16267__$2 = (((G__16267__$1 == null))?null:cljs.core.keep.call(null,spec_tools.parse.get_keys,G__16267__$1));
var G__16267__$3 = (((G__16267__$2 == null))?null:cljs.core.apply.call(null,cljs.core.concat,G__16267__$2));
var G__16267__$4 = (((G__16267__$3 == null))?null:cljs.core.seq.call(null,G__16267__$3));
if((G__16267__$4 == null)){
return null;
} else {
return cljs.core.set.call(null,G__16267__$4);
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.parse !== 'undefined') && (typeof spec_tools.parse.parse_form !== 'undefined')){
} else {
spec_tools.parse.parse_form = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.parse","default","spec-tools.parse/default",-1184283850)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.parse","parse-form"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (dispatch,_){
return dispatch;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword("spec-tools.parse","default","spec-tools.parse/default",-1184283850),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Keyword("spec-tools.parse","default","spec-tools.parse/default",-1184283850),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}));
spec_tools.parse.non_leaf_types = (function spec_tools$parse$non_leaf_types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"nilable","nilable",1842307102),null], null), null);
});
spec_tools.parse.types = (function spec_tools$parse$types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"long","long",-171452093),null,new cljs.core.Keyword(null,"double","double",884886883),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"spec","spec",347520401),null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),null,new cljs.core.Keyword(null,"keyword","keyword",811389747),null,new cljs.core.Keyword(null,"ratio","ratio",-926560044),null,new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"uri","uri",-774711847),null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"nilable","nilable",1842307102),null], null), null);
});
spec_tools.parse.type_symbols = (function spec_tools$parse$type_symbols(){
return cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,cljs.core.methods$.call(null,spec_tools.parse.parse_form))));
});
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","any?","clojure.core/any?",-1093069272,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.any_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","some?","clojure.core/some?",-543337038,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.some_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","number?","clojure.core/number?",-1044499897,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","integer?","clojure.core/integer?",-1617881728,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","int?","clojure.core/int?",1026034806,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","pos-int?","clojure.core/pos-int?",-1946393424,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.pos_int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","neg-int?","clojure.core/neg-int?",-830554117,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.neg_int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","nat-int?","clojure.core/nat-int?",-65390525,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.nat_int_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.float_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.double_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","boolean?","clojure.core/boolean?",1566259823,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","string?","clojure.core/string?",-1902673477,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","ident?","clojure.core/ident?",1397717549,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.ident_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","simple-ident?","clojure.core/simple-ident?",1706467712,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.simple_ident_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","qualified-ident?","clojure.core/qualified-ident?",-1630579588,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.qualified_ident_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","keyword?","clojure.core/keyword?",543424180,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","simple-keyword?","clojure.core/simple-keyword?",406342760,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.simple_keyword_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","qualified-keyword?","clojure.core/qualified-keyword?",-398139912,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","symbol?","clojure.core/symbol?",1587987784,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.symbol_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","simple-symbol?","clojure.core/simple-symbol?",-1919094963,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.simple_symbol_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","qualified-symbol?","clojure.core/qualified-symbol?",1469032566,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.qualified_symbol_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","uuid?","clojure.core/uuid?",-100722718,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","inst?","clojure.core/inst?",-1302678916,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.inst_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","seqable?","clojure.core/seqable?",-696461980,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.seqable_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","indexed?","clojure.core/indexed?",-1145703303,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.indexed_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","map?","clojure.core/map?",-1425864013,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.map_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","vector?","clojure.core/vector?",-1380385430,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.vector_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","list?","clojure.core/list?",-775099136,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.list_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","seq?","clojure.core/seq?",-1182659926,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.seq_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","char?","clojure.core/char?",372498287,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.char_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","set?","clojure.core/set?",-1275117977,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.set_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","nil?","clojure.core/nil?",842444475,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.nil_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","false?","clojure.core/false?",-1754275840,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.false_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","true?","clojure.core/true?",-21483202,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.true_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","zero?","clojure.core/zero?",-313584680,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.zero_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"long","long",-171452093)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","coll?","clojure.core/coll?",1311547908,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.coll_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","empty?","clojure.core/empty?",1788889970,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.empty_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","associative?","clojure.core/associative?",634514106,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.core","sequential?","clojure.core/sequential?",1943138316,null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.sequential_QMARK_], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Keyword("clojure.spec.alpha","unknown","clojure.spec.alpha/unknown",-246507596),(function (_,___$1){
return null;
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (_,form){
var map__16268 = spec_tools.impl.parse_keys.call(null,form);
var map__16268__$1 = (((((!((map__16268 == null))))?(((((map__16268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16268):map__16268);
var req = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var key__GT_spec = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"key->spec","key->spec",1088543019));
var G__16270 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("spec-tools.parse","key->spec","spec-tools.parse/key->spec",1347735257),key__GT_spec,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),cljs.core.set.call(null,cljs.core.concat.call(null,req,opt,req_un,opt_un))], null);
var G__16270__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = req;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return req_un;
}
})())?cljs.core.assoc.call(null,G__16270,new cljs.core.Keyword("spec-tools.parse","keys-req","spec-tools.parse/keys-req",-1559250753),cljs.core.set.call(null,cljs.core.concat.call(null,req,req_un))):G__16270);
if(cljs.core.truth_((function (){var or__4131__auto__ = opt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return opt_un;
}
})())){
return cljs.core.assoc.call(null,G__16270__$1,new cljs.core.Keyword("spec-tools.parse","keys-opt","spec-tools.parse/keys-opt",-1090203455),cljs.core.set.call(null,cljs.core.concat.call(null,opt,opt_un)));
} else {
return G__16270__$1;
}
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (_,form){
var specs = cljs.core.mapv.call(null,cljs.core.comp.call(null,spec_tools.parse.parse_spec_with_spec_ref,cljs.core.second),cljs.core.partition.call(null,(2),cljs.core.rest.call(null,form)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.vec.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),specs))))], null),new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600),specs], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (_,form){
var specs = cljs.core.mapv.call(null,spec_tools.parse.parse_spec_with_spec_ref,cljs.core.rest.call(null,form));
var types = cljs.core.vec.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),specs))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),types], null),new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600),specs], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (_,form){
return cljs.core.apply.call(null,spec_tools.impl.deep_merge,cljs.core.map.call(null,spec_tools.parse.parse_spec,cljs.core.rest.call(null,form)));
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (_,form){
var map__16271 = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.drop.call(null,(2),form));
var map__16271__$1 = (((((!((map__16271 == null))))?(((((map__16271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16271):map__16271);
var into = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"into","into",-150836029));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128),spec_tools.parse.parse_spec.call(null,cljs.core.second.call(null,form)),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.map_QMARK_.call(null,into))?new cljs.core.Keyword(null,"map-of","map-of",1189682355):((cljs.core.set_QMARK_.call(null,into))?new cljs.core.Keyword(null,"set","set",304602554):new cljs.core.Keyword(null,"vector","vector",1902966158)
))], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (_,form){
var map__16273 = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.drop.call(null,(2),form));
var map__16273__$1 = (((((!((map__16273 == null))))?(((((map__16273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16273):map__16273);
var into = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"into","into",-150836029));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128),spec_tools.parse.parse_spec_with_spec_ref.call(null,cljs.core.second.call(null,form)),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.map_QMARK_.call(null,into))?new cljs.core.Keyword(null,"map-of","map-of",1189682355):((cljs.core.set_QMARK_.call(null,into))?new cljs.core.Keyword(null,"set","set",304602554):new cljs.core.Keyword(null,"vector","vector",1902966158)
))], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (_,p__16275){
var vec__16276 = p__16275;
var ___$1 = cljs.core.nth.call(null,vec__16276,(0),null);
var k = cljs.core.nth.call(null,vec__16276,(1),null);
var v = cljs.core.nth.call(null,vec__16276,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253),spec_tools.parse.parse_spec_with_spec_ref.call(null,k),new cljs.core.Keyword("spec-tools.parse","value","spec-tools.parse/value",-492706501),spec_tools.parse.parse_spec_with_spec_ref.call(null,v)], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (_,form){
var parsed = spec_tools.parse.parse_spec.call(null,new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,form)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parsed))){
return parsed;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spec","spec",347520401)], null);
}
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,p__16279){
var vec__16280 = p__16279;
var seq__16281 = cljs.core.seq.call(null,vec__16280);
var first__16282 = cljs.core.first.call(null,seq__16281);
var seq__16281__$1 = cljs.core.next.call(null,seq__16281);
var ___$1 = first__16282;
var values = seq__16281__$1;
var specs = cljs.core.mapv.call(null,spec_tools.parse.parse_spec_with_spec_ref,values);
var types = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"type","type",1174270348),specs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),types], null),new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600),specs], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (_,form){
var spec = spec_tools.parse.parse_spec_with_spec_ref.call(null,cljs.core.second.call(null,form));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nilable","nilable",1842307102),new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128),spec], null);
}));
cljs.core._add_method.call(null,spec_tools.parse.parse_form,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (_,form){
return cljs.core.apply.call(null,spec_tools.impl.deep_merge,cljs.core.map.call(null,spec_tools.parse.parse_spec,cljs.core.rest.call(null,form)));
}));

//# sourceMappingURL=parse.js.map
