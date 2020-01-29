// Compiled by ClojureScript 1.10.520 {}
goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
goog.require('goog.string');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.string.flush_into = (function rewrite_clj$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.set("");

return cljs.core.conj.call(null,lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore.call(null,reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5733__auto__ = rewrite_clj.reader.read_char.call(null,reader);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
if((((!(escape_QMARK_))) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into.call(null,lines,buf);
} else {
if((c === "\n")){
var G__36794 = escape_QMARK_;
var G__36795 = rewrite_clj.parser.string.flush_into.call(null,lines,buf);
escape_QMARK_ = G__36794;
lines = G__36795;
continue;
} else {
buf.append(c);

var G__36796 = (((!(escape_QMARK_))) && ((c === "\\")));
var G__36797 = lines;
escape_QMARK_ = G__36796;
lines = G__36797;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
return rewrite_clj.node.string_node.call(null,rewrite_clj.parser.string.read_string_data.call(null,reader));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var lines = rewrite_clj.parser.string.read_string_data.call(null,reader);
var regex = clojure.string.join.call(null,"\n",lines);
return rewrite_clj.node.token_node.call(null,cljs.core.re_pattern.call(null,regex),["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex),"\""].join(''));
});

//# sourceMappingURL=string.js.map
