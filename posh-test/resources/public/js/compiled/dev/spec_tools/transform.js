// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.transform');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Date');
goog.require('clojure.set');
goog.require('spec_tools.parse');
goog.require('clojure.string');
goog.require('spec_tools.impl');
spec_tools.transform.keyword__GT_string = (function spec_tools$transform$keyword__GT_string(_,x){
if((x instanceof cljs.core.Keyword)){
return spec_tools.impl.qualified_name.call(null,x);
} else {
return x;
}
});
spec_tools.transform.keyword_or_string__GT_ = (function spec_tools$transform$keyword_or_string__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
return f.call(null,spec,spec_tools.transform.keyword__GT_string.call(null,spec,x));
} else {
if(typeof x === 'string'){
return f.call(null,spec,x);
} else {
return x;

}
}
});
});
spec_tools.transform.keyword__GT_ = (function spec_tools$transform$keyword__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
return f.call(null,spec,spec_tools.transform.keyword__GT_string.call(null,spec,x));
} else {
return x;

}
});
});
spec_tools.transform.string__GT_long = (function spec_tools$transform$string__GT_long(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e16285){if((e16285 instanceof Error)){
var ___$1 = e16285;
return x;
} else {
throw e16285;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_double = (function spec_tools$transform$string__GT_double(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e16286){if((e16286 instanceof Error)){
var ___$1 = e16286;
return x;
} else {
throw e16286;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_keyword = (function spec_tools$transform$string__GT_keyword(_,x){
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return x;
}
});
spec_tools.transform.string__GT_boolean = (function spec_tools$transform$string__GT_boolean(_,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,"true",x)){
return true;
} else {
if(cljs.core._EQ_.call(null,"false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
spec_tools.transform.string__GT_uuid = (function spec_tools$transform$string__GT_uuid(_,x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find.call(null,/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid.call(null,x);
} else {
return x;
}
}catch (e16287){if((e16287 instanceof Error)){
var ___$1 = e16287;
return x;
} else {
throw e16287;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_date = (function spec_tools$transform$string__GT_date(_,x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString.call(null,x).getTime()));
}catch (e16288){if((e16288 instanceof Error)){
var ___$1 = e16288;
return x;
} else {
throw e16288;

}
}} else {
return x;
}
});
spec_tools.transform.date__GT_string = (function spec_tools$transform$date__GT_string(_,x){
if(cljs.core.inst_QMARK_.call(null,x)){
try{return x.toISOString();
}catch (e16289){if((e16289 instanceof Error)){
var ___$1 = e16289;
return x;
} else {
throw e16289;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_symbol = (function spec_tools$transform$string__GT_symbol(_,x){
if(typeof x === 'string'){
return cljs.core.symbol.call(null,x);
} else {
return x;
}
});
spec_tools.transform.string__GT_nil = (function spec_tools$transform$string__GT_nil(_,x){
if(cljs.core._EQ_.call(null,"",x)){
return null;
} else {
return x;
}
});
spec_tools.transform.any__GT_string = (function spec_tools$transform$any__GT_string(_,x){
if((!((x == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
spec_tools.transform.number__GT_double = (function spec_tools$transform$number__GT_double(_,x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
spec_tools.transform.any__GT_any = (function spec_tools$transform$any__GT_any(_,x){
return x;
});
spec_tools.transform.strip_extra_keys = (function spec_tools$transform$strip_extra_keys(p__16290,x){
var map__16291 = p__16290;
var map__16291__$1 = (((((!((map__16291 == null))))?(((((map__16291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16291):map__16291);
var keys = cljs.core.get.call(null,map__16291__$1,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460));
if(cljs.core.truth_((function (){var and__4120__auto__ = keys;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_.call(null,x);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.select_keys.call(null,x,keys);
} else {
return x;
}
});
spec_tools.transform.fail_on_extra_keys = (function spec_tools$transform$fail_on_extra_keys(p__16293,x){
var map__16294 = p__16293;
var map__16294__$1 = (((((!((map__16294 == null))))?(((((map__16294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16294):map__16294);
var keys = cljs.core.get.call(null,map__16294__$1,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460));
if(((cljs.core.map_QMARK_.call(null,x)) && ((!(clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,x)),keys)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});
spec_tools.transform.strip_extra_values = (function spec_tools$transform$strip_extra_values(p__16296,x){
var map__16297 = p__16296;
var map__16297__$1 = (((((!((map__16297 == null))))?(((((map__16297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16297):map__16297);
var items = cljs.core.get.call(null,map__16297__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
var size = cljs.core.count.call(null,items);
if(((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.count.call(null,x) > size)))){
return cljs.core.subvec.call(null,x,(0),size);
} else {
return x;
}
});
spec_tools.transform.json_type_decoders = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"keyword","keyword",811389747),spec_tools.transform.string__GT_keyword,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),spec_tools.transform.keyword_or_string__GT_.call(null,spec_tools.transform.string__GT_uuid),new cljs.core.Keyword(null,"date","date",-1463434462),spec_tools.transform.keyword_or_string__GT_.call(null,spec_tools.transform.string__GT_date),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),spec_tools.transform.keyword_or_string__GT_.call(null,spec_tools.transform.string__GT_symbol),new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.keyword__GT_.call(null,spec_tools.transform.string__GT_long),new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.keyword__GT_.call(null,spec_tools.transform.string__GT_double),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),spec_tools.transform.keyword__GT_.call(null,spec_tools.transform.string__GT_boolean),new cljs.core.Keyword(null,"string","string",-1989541586),spec_tools.transform.keyword__GT_string], null));
spec_tools.transform.string_type_decoders = cljs.core.merge.call(null,spec_tools.transform.json_type_decoders,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.keyword_or_string__GT_.call(null,spec_tools.transform.string__GT_long),new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.keyword_or_string__GT_.call(null,spec_tools.transform.string__GT_double),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),spec_tools.transform.keyword_or_string__GT_.call(null,spec_tools.transform.string__GT_boolean)], null));
spec_tools.transform.strip_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),spec_tools.transform.strip_extra_keys], null);
spec_tools.transform.fail_on_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),spec_tools.transform.fail_on_extra_keys], null);
spec_tools.transform.strip_extra_values_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),spec_tools.transform.strip_extra_values], null);
spec_tools.transform.json_type_encoders = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461)],[spec_tools.transform.date__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.keyword__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.any__GT_any]);
spec_tools.transform.string_type_encoders = cljs.core.merge.call(null,spec_tools.transform.json_type_encoders,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.any__GT_string,new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.any__GT_string], null));

//# sourceMappingURL=transform.js.map
