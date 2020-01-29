// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.form');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.form !== 'undefined') && (typeof spec_tools.form.resolve_form !== 'undefined')){
} else {
spec_tools.form.resolve_form = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.form","default","spec-tools.form/default",501647025)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.form","resolve-form"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (x){
if(((cljs.core.qualified_keyword_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x)))){
return new cljs.core.Keyword("spec-tools.form","identity","spec-tools.form/identity",-179136630);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_.call(null,x);
}
})())){
return new cljs.core.Keyword("spec-tools.form","spec","spec-tools.form/spec",-2137946288);
} else {
return x;

}
}
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword("spec-tools.form","default","spec-tools.form/default",501647025),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,spec_tools.form.resolve_form,new cljs.core.Keyword("spec-tools.form","spec","spec-tools.form/spec",-2137946288),(function (x){
return cljs.spec.alpha.form.call(null,x);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,new cljs.core.Keyword("spec-tools.form","identity","spec-tools.form/identity",-179136630),(function (x){
return x;
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,new cljs.core.Keyword("spec-tools.form","default","spec-tools.form/default",501647025),(function (_){
return new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.any_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.some_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.number_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.integer_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.pos_int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.neg_int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","neg-int?","cljs.core/neg-int?",-933447883,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.nat_int_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.float_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","float?","cljs.core/float?",-941017745,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.double_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.boolean_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.string_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.ident_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","ident?","cljs.core/ident?",1567441535,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.simple_ident_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","simple-ident?","cljs.core/simple-ident?",1674885558,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.qualified_ident_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","qualified-ident?","cljs.core/qualified-ident?",-1863492566,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.keyword_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.simple_keyword_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","simple-keyword?","cljs.core/simple-keyword?",39474330,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.qualified_keyword_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.symbol_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.simple_symbol_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.qualified_symbol_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.uuid_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","uuid?","cljs.core/uuid?",-15131116,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.inst_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.seqable_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.indexed_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","indexed?","cljs.core/indexed?",-1311257161,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.map_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.vector_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.list_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.seq_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.char_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","char?","cljs.core/char?",416405281,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.set_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.nil_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.false_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.true_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","true?","cljs.core/true?",-77973136,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.zero_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.coll_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.empty_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.associative_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","associative?","cljs.core/associative?",-540020088,null);
}));
cljs.core._add_method.call(null,spec_tools.form.resolve_form,cljs.core.sequential_QMARK_,(function (_){
return new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null);
}));

//# sourceMappingURL=form.js.map
