// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25671){
var map__25672 = p__25671;
var map__25672__$1 = (((((!((map__25672 == null))))?(((((map__25672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25672):map__25672);
var m = map__25672__$1;
var n = cljs.core.get.call(null,map__25672__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25674_25706 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25675_25707 = null;
var count__25676_25708 = (0);
var i__25677_25709 = (0);
while(true){
if((i__25677_25709 < count__25676_25708)){
var f_25710 = cljs.core._nth.call(null,chunk__25675_25707,i__25677_25709);
cljs.core.println.call(null,"  ",f_25710);


var G__25711 = seq__25674_25706;
var G__25712 = chunk__25675_25707;
var G__25713 = count__25676_25708;
var G__25714 = (i__25677_25709 + (1));
seq__25674_25706 = G__25711;
chunk__25675_25707 = G__25712;
count__25676_25708 = G__25713;
i__25677_25709 = G__25714;
continue;
} else {
var temp__5735__auto___25715 = cljs.core.seq.call(null,seq__25674_25706);
if(temp__5735__auto___25715){
var seq__25674_25716__$1 = temp__5735__auto___25715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25674_25716__$1)){
var c__4550__auto___25717 = cljs.core.chunk_first.call(null,seq__25674_25716__$1);
var G__25718 = cljs.core.chunk_rest.call(null,seq__25674_25716__$1);
var G__25719 = c__4550__auto___25717;
var G__25720 = cljs.core.count.call(null,c__4550__auto___25717);
var G__25721 = (0);
seq__25674_25706 = G__25718;
chunk__25675_25707 = G__25719;
count__25676_25708 = G__25720;
i__25677_25709 = G__25721;
continue;
} else {
var f_25722 = cljs.core.first.call(null,seq__25674_25716__$1);
cljs.core.println.call(null,"  ",f_25722);


var G__25723 = cljs.core.next.call(null,seq__25674_25716__$1);
var G__25724 = null;
var G__25725 = (0);
var G__25726 = (0);
seq__25674_25706 = G__25723;
chunk__25675_25707 = G__25724;
count__25676_25708 = G__25725;
i__25677_25709 = G__25726;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25727 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25727);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25727)))?cljs.core.second.call(null,arglists_25727):arglists_25727));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25678_25728 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25679_25729 = null;
var count__25680_25730 = (0);
var i__25681_25731 = (0);
while(true){
if((i__25681_25731 < count__25680_25730)){
var vec__25692_25732 = cljs.core._nth.call(null,chunk__25679_25729,i__25681_25731);
var name_25733 = cljs.core.nth.call(null,vec__25692_25732,(0),null);
var map__25695_25734 = cljs.core.nth.call(null,vec__25692_25732,(1),null);
var map__25695_25735__$1 = (((((!((map__25695_25734 == null))))?(((((map__25695_25734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25695_25734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25695_25734):map__25695_25734);
var doc_25736 = cljs.core.get.call(null,map__25695_25735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25737 = cljs.core.get.call(null,map__25695_25735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25733);

cljs.core.println.call(null," ",arglists_25737);

if(cljs.core.truth_(doc_25736)){
cljs.core.println.call(null," ",doc_25736);
} else {
}


var G__25738 = seq__25678_25728;
var G__25739 = chunk__25679_25729;
var G__25740 = count__25680_25730;
var G__25741 = (i__25681_25731 + (1));
seq__25678_25728 = G__25738;
chunk__25679_25729 = G__25739;
count__25680_25730 = G__25740;
i__25681_25731 = G__25741;
continue;
} else {
var temp__5735__auto___25742 = cljs.core.seq.call(null,seq__25678_25728);
if(temp__5735__auto___25742){
var seq__25678_25743__$1 = temp__5735__auto___25742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25678_25743__$1)){
var c__4550__auto___25744 = cljs.core.chunk_first.call(null,seq__25678_25743__$1);
var G__25745 = cljs.core.chunk_rest.call(null,seq__25678_25743__$1);
var G__25746 = c__4550__auto___25744;
var G__25747 = cljs.core.count.call(null,c__4550__auto___25744);
var G__25748 = (0);
seq__25678_25728 = G__25745;
chunk__25679_25729 = G__25746;
count__25680_25730 = G__25747;
i__25681_25731 = G__25748;
continue;
} else {
var vec__25697_25749 = cljs.core.first.call(null,seq__25678_25743__$1);
var name_25750 = cljs.core.nth.call(null,vec__25697_25749,(0),null);
var map__25700_25751 = cljs.core.nth.call(null,vec__25697_25749,(1),null);
var map__25700_25752__$1 = (((((!((map__25700_25751 == null))))?(((((map__25700_25751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25700_25751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25700_25751):map__25700_25751);
var doc_25753 = cljs.core.get.call(null,map__25700_25752__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25754 = cljs.core.get.call(null,map__25700_25752__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25750);

cljs.core.println.call(null," ",arglists_25754);

if(cljs.core.truth_(doc_25753)){
cljs.core.println.call(null," ",doc_25753);
} else {
}


var G__25755 = cljs.core.next.call(null,seq__25678_25743__$1);
var G__25756 = null;
var G__25757 = (0);
var G__25758 = (0);
seq__25678_25728 = G__25755;
chunk__25679_25729 = G__25756;
count__25680_25730 = G__25757;
i__25681_25731 = G__25758;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__25702 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25703 = null;
var count__25704 = (0);
var i__25705 = (0);
while(true){
if((i__25705 < count__25704)){
var role = cljs.core._nth.call(null,chunk__25703,i__25705);
var temp__5735__auto___25759__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___25759__$1)){
var spec_25760 = temp__5735__auto___25759__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25760));
} else {
}


var G__25761 = seq__25702;
var G__25762 = chunk__25703;
var G__25763 = count__25704;
var G__25764 = (i__25705 + (1));
seq__25702 = G__25761;
chunk__25703 = G__25762;
count__25704 = G__25763;
i__25705 = G__25764;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__25702);
if(temp__5735__auto____$1){
var seq__25702__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25702__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25702__$1);
var G__25765 = cljs.core.chunk_rest.call(null,seq__25702__$1);
var G__25766 = c__4550__auto__;
var G__25767 = cljs.core.count.call(null,c__4550__auto__);
var G__25768 = (0);
seq__25702 = G__25765;
chunk__25703 = G__25766;
count__25704 = G__25767;
i__25705 = G__25768;
continue;
} else {
var role = cljs.core.first.call(null,seq__25702__$1);
var temp__5735__auto___25769__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___25769__$2)){
var spec_25770 = temp__5735__auto___25769__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25770));
} else {
}


var G__25771 = cljs.core.next.call(null,seq__25702__$1);
var G__25772 = null;
var G__25773 = (0);
var G__25774 = (0);
seq__25702 = G__25771;
chunk__25703 = G__25772;
count__25704 = G__25773;
i__25705 = G__25774;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__25775 = cljs.core.conj.call(null,via,t);
var G__25776 = cljs.core.ex_cause.call(null,t);
via = G__25775;
t = G__25776;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25779 = datafied_throwable;
var map__25779__$1 = (((((!((map__25779 == null))))?(((((map__25779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25779):map__25779);
var via = cljs.core.get.call(null,map__25779__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__25779__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__25779__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25780 = cljs.core.last.call(null,via);
var map__25780__$1 = (((((!((map__25780 == null))))?(((((map__25780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25780):map__25780);
var type = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25781 = data;
var map__25781__$1 = (((((!((map__25781 == null))))?(((((map__25781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25781):map__25781);
var problems = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25782 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__25782__$1 = (((((!((map__25782 == null))))?(((((map__25782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25782):map__25782);
var top_data = map__25782__$1;
var source = cljs.core.get.call(null,map__25782__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__25787 = phase;
var G__25787__$1 = (((G__25787 instanceof cljs.core.Keyword))?G__25787.fqn:null);
switch (G__25787__$1) {
case "read-source":
var map__25788 = data;
var map__25788__$1 = (((((!((map__25788 == null))))?(((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25788):map__25788);
var line = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25790 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__25790__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25790,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25790);
var G__25790__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25790__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25790__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25790__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25790__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25791 = top_data;
var G__25791__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25791,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25791);
var G__25791__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25791__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25791__$1);
var G__25791__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25791__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25791__$2);
var G__25791__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25791__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25791__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25791__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25791__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25792 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25792,(0),null);
var method = cljs.core.nth.call(null,vec__25792,(1),null);
var file = cljs.core.nth.call(null,vec__25792,(2),null);
var line = cljs.core.nth.call(null,vec__25792,(3),null);
var G__25795 = top_data;
var G__25795__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__25795,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25795);
var G__25795__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__25795__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25795__$1);
var G__25795__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__25795__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25795__$2);
var G__25795__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25795__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25795__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25795__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25795__$4;
}

break;
case "execution":
var vec__25796 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25796,(0),null);
var method = cljs.core.nth.call(null,vec__25796,(1),null);
var file = cljs.core.nth.call(null,vec__25796,(2),null);
var line = cljs.core.nth.call(null,vec__25796,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__25796,source__$1,method,file,line,G__25787,G__25787__$1,map__25779,map__25779__$1,via,trace,phase,map__25780,map__25780__$1,type,message,data,map__25781,map__25781__$1,problems,fn,caller,map__25782,map__25782__$1,top_data,source){
return (function (p1__25778_SHARP_){
var or__4131__auto__ = (p1__25778_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__25778_SHARP_);
}
});})(vec__25796,source__$1,method,file,line,G__25787,G__25787__$1,map__25779,map__25779__$1,via,trace,phase,map__25780,map__25780__$1,type,message,data,map__25781,map__25781__$1,problems,fn,caller,map__25782,map__25782__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__25799 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25799__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__25799,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25799);
var G__25799__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25799__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25799__$1);
var G__25799__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__25799__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25799__$2);
var G__25799__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__25799__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25799__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25799__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25799__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25787__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25803){
var map__25804 = p__25803;
var map__25804__$1 = (((((!((map__25804 == null))))?(((((map__25804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);
var triage_data = map__25804__$1;
var phase = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25806 = phase;
var G__25806__$1 = (((G__25806 instanceof cljs.core.Keyword))?G__25806.fqn:null);
switch (G__25806__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25807_25816 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25808_25817 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25809_25818 = true;
var _STAR_print_fn_STAR__temp_val__25810_25819 = ((function (_STAR_print_newline_STAR__orig_val__25807_25816,_STAR_print_fn_STAR__orig_val__25808_25817,_STAR_print_newline_STAR__temp_val__25809_25818,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25807_25816,_STAR_print_fn_STAR__orig_val__25808_25817,_STAR_print_newline_STAR__temp_val__25809_25818,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25809_25818;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25810_25819;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__25807_25816,_STAR_print_fn_STAR__orig_val__25808_25817,_STAR_print_newline_STAR__temp_val__25809_25818,_STAR_print_fn_STAR__temp_val__25810_25819,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__25807_25816,_STAR_print_fn_STAR__orig_val__25808_25817,_STAR_print_newline_STAR__temp_val__25809_25818,_STAR_print_fn_STAR__temp_val__25810_25819,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__25801_SHARP_){
return cljs.core.dissoc.call(null,p1__25801_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__25807_25816,_STAR_print_fn_STAR__orig_val__25808_25817,_STAR_print_newline_STAR__temp_val__25809_25818,_STAR_print_fn_STAR__temp_val__25810_25819,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__25807_25816,_STAR_print_fn_STAR__orig_val__25808_25817,_STAR_print_newline_STAR__temp_val__25809_25818,_STAR_print_fn_STAR__temp_val__25810_25819,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25808_25817;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25807_25816;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25811_25820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25812_25821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25813_25822 = true;
var _STAR_print_fn_STAR__temp_val__25814_25823 = ((function (_STAR_print_newline_STAR__orig_val__25811_25820,_STAR_print_fn_STAR__orig_val__25812_25821,_STAR_print_newline_STAR__temp_val__25813_25822,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25811_25820,_STAR_print_fn_STAR__orig_val__25812_25821,_STAR_print_newline_STAR__temp_val__25813_25822,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25813_25822;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25814_25823;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__25811_25820,_STAR_print_fn_STAR__orig_val__25812_25821,_STAR_print_newline_STAR__temp_val__25813_25822,_STAR_print_fn_STAR__temp_val__25814_25823,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__25811_25820,_STAR_print_fn_STAR__orig_val__25812_25821,_STAR_print_newline_STAR__temp_val__25813_25822,_STAR_print_fn_STAR__temp_val__25814_25823,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__25802_SHARP_){
return cljs.core.dissoc.call(null,p1__25802_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__25811_25820,_STAR_print_fn_STAR__orig_val__25812_25821,_STAR_print_newline_STAR__temp_val__25813_25822,_STAR_print_fn_STAR__temp_val__25814_25823,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__25811_25820,_STAR_print_fn_STAR__orig_val__25812_25821,_STAR_print_newline_STAR__temp_val__25813_25822,_STAR_print_fn_STAR__temp_val__25814_25823,sb__4661__auto__,G__25806,G__25806__$1,loc,class_name,simple_class,cause_type,format,map__25804,map__25804__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25812_25821;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25811_25820;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25806__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
