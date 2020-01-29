// Compiled by ClojureScript 1.10.520 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28061_28065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28062_28066 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28063_28067 = true;
var _STAR_print_fn_STAR__temp_val__28064_28068 = ((function (_STAR_print_newline_STAR__orig_val__28061_28065,_STAR_print_fn_STAR__orig_val__28062_28066,_STAR_print_newline_STAR__temp_val__28063_28067,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28061_28065,_STAR_print_fn_STAR__orig_val__28062_28066,_STAR_print_newline_STAR__temp_val__28063_28067,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28063_28067;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28064_28068;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28062_28066;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28061_28065;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
}catch (e28059){if((e28059 instanceof Error)){
var e1 = e28059;
try{return obj.toString();
}catch (e28060){if((e28060 instanceof Error)){
var e2 = e28060;
return "<<Un-printable Type>>";
} else {
throw e28060;

}
}} else {
throw e28059;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__28069 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__28070 = cljs.pprint.code_dispatch;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__28070;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__28069;
}});

//# sourceMappingURL=utils.js.map
