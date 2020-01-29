// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__33524__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33521 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33522 = cljs.core.seq.call(null,vec__33521);
var first__33523 = cljs.core.first.call(null,seq__33522);
var seq__33522__$1 = cljs.core.next.call(null,seq__33522);
var tag = first__33523;
var body = seq__33522__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33525__i = 0, G__33525__a = new Array(arguments.length -  0);
while (G__33525__i < G__33525__a.length) {G__33525__a[G__33525__i] = arguments[G__33525__i + 0]; ++G__33525__i;}
  args = new cljs.core.IndexedSeq(G__33525__a,0,null);
} 
return G__33524__delegate.call(this,args);};
G__33524.cljs$lang$maxFixedArity = 0;
G__33524.cljs$lang$applyTo = (function (arglist__33526){
var args = cljs.core.seq(arglist__33526);
return G__33524__delegate(args);
});
G__33524.cljs$core$IFn$_invoke$arity$variadic = G__33524__delegate;
return G__33524;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__33527(s__33528){
return (new cljs.core.LazySeq(null,(function (){
var s__33528__$1 = s__33528;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33528__$1);
if(temp__5735__auto__){
var s__33528__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33528__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33528__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33530 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33529 = (0);
while(true){
if((i__33529 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__33529);
cljs.core.chunk_append.call(null,b__33530,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33531 = (i__33529 + (1));
i__33529 = G__33531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33530),sablono$core$update_arglists_$_iter__33527.call(null,cljs.core.chunk_rest.call(null,s__33528__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33530),null);
}
} else {
var args = cljs.core.first.call(null,s__33528__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33527.call(null,cljs.core.rest.call(null,s__33528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33537 = arguments.length;
var i__4731__auto___33538 = (0);
while(true){
if((i__4731__auto___33538 < len__4730__auto___33537)){
args__4736__auto__.push((arguments[i__4731__auto___33538]));

var G__33539 = (i__4731__auto___33538 + (1));
i__4731__auto___33538 = G__33539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__33533(s__33534){
return (new cljs.core.LazySeq(null,(function (){
var s__33534__$1 = s__33534;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33534__$1);
if(temp__5735__auto__){
var s__33534__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33534__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33534__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33536 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33535 = (0);
while(true){
if((i__33535 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__33535);
cljs.core.chunk_append.call(null,b__33536,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33540 = (i__33535 + (1));
i__33535 = G__33540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33536),sablono$core$iter__33533.call(null,cljs.core.chunk_rest.call(null,s__33534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33536),null);
}
} else {
var style = cljs.core.first.call(null,s__33534__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33533.call(null,cljs.core.rest.call(null,s__33534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq33532){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33532));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to33541 = (function sablono$core$link_to33541(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33544 = arguments.length;
var i__4731__auto___33545 = (0);
while(true){
if((i__4731__auto___33545 < len__4730__auto___33544)){
args__4736__auto__.push((arguments[i__4731__auto___33545]));

var G__33546 = (i__4731__auto___33545 + (1));
i__4731__auto___33545 = G__33546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to33541.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to33541.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to33541.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to33541.cljs$lang$applyTo = (function (seq33542){
var G__33543 = cljs.core.first.call(null,seq33542);
var seq33542__$1 = cljs.core.next.call(null,seq33542);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33543,seq33542__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33541);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to33547 = (function sablono$core$mail_to33547(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33554 = arguments.length;
var i__4731__auto___33555 = (0);
while(true){
if((i__4731__auto___33555 < len__4730__auto___33554)){
args__4736__auto__.push((arguments[i__4731__auto___33555]));

var G__33556 = (i__4731__auto___33555 + (1));
i__4731__auto___33555 = G__33556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to33547.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to33547.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__33550){
var vec__33551 = p__33550;
var content = cljs.core.nth.call(null,vec__33551,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to33547.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to33547.cljs$lang$applyTo = (function (seq33548){
var G__33549 = cljs.core.first.call(null,seq33548);
var seq33548__$1 = cljs.core.next.call(null,seq33548);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33549,seq33548__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33547);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list33557 = (function sablono$core$unordered_list33557(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list33557_$_iter__33558(s__33559){
return (new cljs.core.LazySeq(null,(function (){
var s__33559__$1 = s__33559;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33559__$1);
if(temp__5735__auto__){
var s__33559__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33559__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33559__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33561 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33560 = (0);
while(true){
if((i__33560 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__33560);
cljs.core.chunk_append.call(null,b__33561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33562 = (i__33560 + (1));
i__33560 = G__33562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33561),sablono$core$unordered_list33557_$_iter__33558.call(null,cljs.core.chunk_rest.call(null,s__33559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33561),null);
}
} else {
var x = cljs.core.first.call(null,s__33559__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list33557_$_iter__33558.call(null,cljs.core.rest.call(null,s__33559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33557);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list33563 = (function sablono$core$ordered_list33563(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list33563_$_iter__33564(s__33565){
return (new cljs.core.LazySeq(null,(function (){
var s__33565__$1 = s__33565;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33565__$1);
if(temp__5735__auto__){
var s__33565__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33565__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33565__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33567 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33566 = (0);
while(true){
if((i__33566 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__33566);
cljs.core.chunk_append.call(null,b__33567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33568 = (i__33566 + (1));
i__33566 = G__33568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33567),sablono$core$ordered_list33563_$_iter__33564.call(null,cljs.core.chunk_rest.call(null,s__33565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33567),null);
}
} else {
var x = cljs.core.first.call(null,s__33565__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list33563_$_iter__33564.call(null,cljs.core.rest.call(null,s__33565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33563);
/**
 * Create an image element.
 */
sablono.core.image33569 = (function sablono$core$image33569(var_args){
var G__33571 = arguments.length;
switch (G__33571) {
case 1:
return sablono.core.image33569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image33569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image33569.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image33569.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image33569.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33569);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__33573_SHARP_,p2__33574_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33573_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33574_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__33575_SHARP_,p2__33576_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33575_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33576_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__33578 = arguments.length;
switch (G__33578) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field33580 = (function sablono$core$color_field33580(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 1:
return sablono.core.color_field33580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field33580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field33580.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__33511__auto__);
});

sablono.core.color_field33580.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.color_field33580.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33580);

/**
 * Creates a date input field.
 */
sablono.core.date_field33583 = (function sablono$core$date_field33583(var_args){
var G__33585 = arguments.length;
switch (G__33585) {
case 1:
return sablono.core.date_field33583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field33583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field33583.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__33511__auto__);
});

sablono.core.date_field33583.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.date_field33583.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33583);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field33586 = (function sablono$core$datetime_field33586(var_args){
var G__33588 = arguments.length;
switch (G__33588) {
case 1:
return sablono.core.datetime_field33586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field33586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field33586.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__33511__auto__);
});

sablono.core.datetime_field33586.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.datetime_field33586.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33586);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field33589 = (function sablono$core$datetime_local_field33589(var_args){
var G__33591 = arguments.length;
switch (G__33591) {
case 1:
return sablono.core.datetime_local_field33589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field33589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field33589.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__33511__auto__);
});

sablono.core.datetime_local_field33589.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.datetime_local_field33589.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33589);

/**
 * Creates a email input field.
 */
sablono.core.email_field33592 = (function sablono$core$email_field33592(var_args){
var G__33594 = arguments.length;
switch (G__33594) {
case 1:
return sablono.core.email_field33592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field33592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field33592.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__33511__auto__);
});

sablono.core.email_field33592.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.email_field33592.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33592);

/**
 * Creates a file input field.
 */
sablono.core.file_field33595 = (function sablono$core$file_field33595(var_args){
var G__33597 = arguments.length;
switch (G__33597) {
case 1:
return sablono.core.file_field33595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field33595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field33595.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__33511__auto__);
});

sablono.core.file_field33595.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.file_field33595.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33595);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field33598 = (function sablono$core$hidden_field33598(var_args){
var G__33600 = arguments.length;
switch (G__33600) {
case 1:
return sablono.core.hidden_field33598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field33598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field33598.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__33511__auto__);
});

sablono.core.hidden_field33598.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.hidden_field33598.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33598);

/**
 * Creates a month input field.
 */
sablono.core.month_field33601 = (function sablono$core$month_field33601(var_args){
var G__33603 = arguments.length;
switch (G__33603) {
case 1:
return sablono.core.month_field33601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field33601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field33601.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__33511__auto__);
});

sablono.core.month_field33601.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.month_field33601.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33601);

/**
 * Creates a number input field.
 */
sablono.core.number_field33604 = (function sablono$core$number_field33604(var_args){
var G__33606 = arguments.length;
switch (G__33606) {
case 1:
return sablono.core.number_field33604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field33604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field33604.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__33511__auto__);
});

sablono.core.number_field33604.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.number_field33604.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33604);

/**
 * Creates a password input field.
 */
sablono.core.password_field33607 = (function sablono$core$password_field33607(var_args){
var G__33609 = arguments.length;
switch (G__33609) {
case 1:
return sablono.core.password_field33607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field33607.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__33511__auto__);
});

sablono.core.password_field33607.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.password_field33607.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33607);

/**
 * Creates a range input field.
 */
sablono.core.range_field33610 = (function sablono$core$range_field33610(var_args){
var G__33612 = arguments.length;
switch (G__33612) {
case 1:
return sablono.core.range_field33610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field33610.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__33511__auto__);
});

sablono.core.range_field33610.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.range_field33610.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33610);

/**
 * Creates a search input field.
 */
sablono.core.search_field33613 = (function sablono$core$search_field33613(var_args){
var G__33615 = arguments.length;
switch (G__33615) {
case 1:
return sablono.core.search_field33613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field33613.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__33511__auto__);
});

sablono.core.search_field33613.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.search_field33613.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33613);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33616 = (function sablono$core$tel_field33616(var_args){
var G__33618 = arguments.length;
switch (G__33618) {
case 1:
return sablono.core.tel_field33616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field33616.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__33511__auto__);
});

sablono.core.tel_field33616.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.tel_field33616.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33616);

/**
 * Creates a text input field.
 */
sablono.core.text_field33619 = (function sablono$core$text_field33619(var_args){
var G__33621 = arguments.length;
switch (G__33621) {
case 1:
return sablono.core.text_field33619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field33619.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__33511__auto__);
});

sablono.core.text_field33619.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.text_field33619.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33619);

/**
 * Creates a time input field.
 */
sablono.core.time_field33622 = (function sablono$core$time_field33622(var_args){
var G__33624 = arguments.length;
switch (G__33624) {
case 1:
return sablono.core.time_field33622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field33622.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__33511__auto__);
});

sablono.core.time_field33622.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.time_field33622.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33622);

/**
 * Creates a url input field.
 */
sablono.core.url_field33625 = (function sablono$core$url_field33625(var_args){
var G__33627 = arguments.length;
switch (G__33627) {
case 1:
return sablono.core.url_field33625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field33625.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__33511__auto__);
});

sablono.core.url_field33625.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.url_field33625.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33625);

/**
 * Creates a week input field.
 */
sablono.core.week_field33628 = (function sablono$core$week_field33628(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
case 1:
return sablono.core.week_field33628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field33628.cljs$core$IFn$_invoke$arity$1 = (function (name__33511__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__33511__auto__);
});

sablono.core.week_field33628.cljs$core$IFn$_invoke$arity$2 = (function (name__33511__auto__,value__33512__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__33511__auto__,value__33512__auto__);
});

sablono.core.week_field33628.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33628);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box33648 = (function sablono$core$check_box33648(var_args){
var G__33650 = arguments.length;
switch (G__33650) {
case 1:
return sablono.core.check_box33648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box33648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box33648.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box33648.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box33648.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33648.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33648.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33648);
/**
 * Creates a radio button.
 */
sablono.core.radio_button33652 = (function sablono$core$radio_button33652(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 1:
return sablono.core.radio_button33652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button33652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button33652.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button33652.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button33652.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33652.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33652.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33652);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options33656 = (function sablono$core$select_options33656(coll){
var iter__4523__auto__ = (function sablono$core$select_options33656_$_iter__33657(s__33658){
return (new cljs.core.LazySeq(null,(function (){
var s__33658__$1 = s__33658;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33658__$1);
if(temp__5735__auto__){
var s__33658__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33658__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33658__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33660 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33659 = (0);
while(true){
if((i__33659 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__33659);
cljs.core.chunk_append.call(null,b__33660,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33661 = x;
var text = cljs.core.nth.call(null,vec__33661,(0),null);
var val = cljs.core.nth.call(null,vec__33661,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33661,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options33656.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__33667 = (i__33659 + (1));
i__33659 = G__33667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33660),sablono$core$select_options33656_$_iter__33657.call(null,cljs.core.chunk_rest.call(null,s__33658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33660),null);
}
} else {
var x = cljs.core.first.call(null,s__33658__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33664 = x;
var text = cljs.core.nth.call(null,vec__33664,(0),null);
var val = cljs.core.nth.call(null,vec__33664,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33664,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options33656.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options33656_$_iter__33657.call(null,cljs.core.rest.call(null,s__33658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33656);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down33668 = (function sablono$core$drop_down33668(var_args){
var G__33670 = arguments.length;
switch (G__33670) {
case 2:
return sablono.core.drop_down33668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down33668.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down33668.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down33668.call(null,name,options,null);
});

sablono.core.drop_down33668.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down33668.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33668);
/**
 * Creates a text area element.
 */
sablono.core.text_area33672 = (function sablono$core$text_area33672(var_args){
var G__33674 = arguments.length;
switch (G__33674) {
case 1:
return sablono.core.text_area33672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area33672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area33672.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area33672.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area33672.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33672);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label33676 = (function sablono$core$label33676(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33676);
/**
 * Creates a submit button.
 */
sablono.core.submit_button33677 = (function sablono$core$submit_button33677(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33677);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button33678 = (function sablono$core$reset_button33678(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33678);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to33679 = (function sablono$core$form_to33679(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33686 = arguments.length;
var i__4731__auto___33687 = (0);
while(true){
if((i__4731__auto___33687 < len__4730__auto___33686)){
args__4736__auto__.push((arguments[i__4731__auto___33687]));

var G__33688 = (i__4731__auto___33687 + (1));
i__4731__auto___33687 = G__33688;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to33679.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to33679.cljs$core$IFn$_invoke$arity$variadic = (function (p__33682,body){
var vec__33683 = p__33682;
var method = cljs.core.nth.call(null,vec__33683,(0),null);
var action = cljs.core.nth.call(null,vec__33683,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to33679.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to33679.cljs$lang$applyTo = (function (seq33680){
var G__33681 = cljs.core.first.call(null,seq33680);
var seq33680__$1 = cljs.core.next.call(null,seq33680);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33681,seq33680__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33679);

//# sourceMappingURL=core.js.map
