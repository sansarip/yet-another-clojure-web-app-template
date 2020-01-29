// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.coercion.spec');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.data_spec');
goog.require('spec_tools.swagger.core');
goog.require('reitit.coercion');
goog.require('clojure.set');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.call(null,spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer);
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.call(null,spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer);
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec27965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec27965 = (function (meta27966){
this.meta27966 = meta27966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.coercion.spec.t_reitit$coercion$spec27965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27967,meta27966__$1){
var self__ = this;
var _27967__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec27965(meta27966__$1));
});

reitit.coercion.spec.t_reitit$coercion$spec27965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27967){
var self__ = this;
var _27967__$1 = this;
return self__.meta27966;
});

reitit.coercion.spec.t_reitit$coercion$spec27965.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL;

reitit.coercion.spec.t_reitit$coercion$spec27965.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
});

reitit.coercion.spec.t_reitit$coercion$spec27965.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
});

reitit.coercion.spec.t_reitit$coercion$spec27965.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
});

reitit.coercion.spec.t_reitit$coercion$spec27965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27966","meta27966",176282454,null)], null);
});

reitit.coercion.spec.t_reitit$coercion$spec27965.cljs$lang$type = true;

reitit.coercion.spec.t_reitit$coercion$spec27965.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec27965";

reitit.coercion.spec.t_reitit$coercion$spec27965.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.coercion.spec/t_reitit$coercion$spec27965");
});

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec27965.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec27965 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec27965(meta27966){
return (new reitit.coercion.spec.t_reitit$coercion$spec27965(meta27966));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec27965(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,name);
} else {
var m__4431__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSpec.into-spec",this$);
}
}
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__4131__auto__ = _QMARK_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.keyword.call(null,"spec",cljs.core.name.call(null,cljs.core.gensym.call(null,"")));
}
});
cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.call(null,spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
});

cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.call(null,spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
});

cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.call(null,spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
});

spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1);
});

spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

goog.object.set(reitit.coercion.spec.into_spec,"_",(function (this$,_){
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

goog.object.set(reitit.coercion.spec.into_spec,"null",(function (this$,_){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_.call(null,pred))?cljs.core.seq.call(null,pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__27970){
var map__27971 = p__27970;
var map__27971__$1 = (((((!((map__27971 == null))))?(((((map__27971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971):map__27971);
var opts = map__27971__$1;
var transformers = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec27973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec27973 = (function (p__27970,map__27971,opts,transformers,coerce_response_QMARK_,meta27974){
this.p__27970 = p__27970;
this.map__27971 = map__27971;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta27974 = meta27974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_27975,meta27974__$1){
var self__ = this;
var _27975__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec27973(self__.p__27970,self__.map__27971,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta27974__$1));
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_27975){
var self__ = this;
var _27975__$1 = this;
return self__.meta27974;
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_get_name$arity$1 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_get_options$arity$1 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (this$,specification,p__27976){
var self__ = this;
var map__27977 = p__27976;
var map__27977__$1 = (((((!((map__27977 == null))))?(((((map__27977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977):map__27977);
var parameters = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__27979 = specification;
var G__27979__$1 = (((G__27979 instanceof cljs.core.Keyword))?G__27979.fqn:null);
switch (G__27979__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.call(null,cljs.core.merge.call(null,(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),cljs.core.into.call(null,cljs.core.empty.call(null,parameters),(function (){var iter__4523__auto__ = ((function (G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function reitit$coercion$spec$create_$_iter__27980(s__27981){
return (new cljs.core.LazySeq(null,((function (G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (){
var s__27981__$1 = s__27981;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27981__$1);
if(temp__5735__auto__){
var s__27981__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27981__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27981__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27983 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27982 = (0);
while(true){
if((i__27982 < size__4522__auto__)){
var vec__27984 = cljs.core._nth.call(null,c__4521__auto__,i__27982);
var k = cljs.core.nth.call(null,vec__27984,(0),null);
var v = cljs.core.nth.call(null,vec__27984,(1),null);
cljs.core.chunk_append.call(null,b__27983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion._compile_model.call(null,this$__$1,v,null)], null));

var G__28003 = (i__27982 + (1));
i__27982 = G__28003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27983),reitit$coercion$spec$create_$_iter__27980.call(null,cljs.core.chunk_rest.call(null,s__27981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27983),null);
}
} else {
var vec__27987 = cljs.core.first.call(null,s__27981__$2);
var k = cljs.core.nth.call(null,vec__27987,(0),null);
var v = cljs.core.nth.call(null,vec__27987,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion._compile_model.call(null,this$__$1,v,null)], null),reitit$coercion$spec$create_$_iter__27980.call(null,cljs.core.rest.call(null,s__27981__$2)));
}
} else {
return null;
}
break;
}
});})(G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
,null,null));
});})(G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;
return iter__4523__auto__.call(null,parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.call(null,cljs.core.empty.call(null,responses),(function (){var iter__4523__auto__ = ((function (G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function reitit$coercion$spec$create_$_iter__27990(s__27991){
return (new cljs.core.LazySeq(null,((function (G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (){
var s__27991__$1 = s__27991;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27991__$1);
if(temp__5735__auto__){
var s__27991__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27991__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27991__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27993 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27992 = (0);
while(true){
if((i__27992 < size__4522__auto__)){
var vec__27994 = cljs.core._nth.call(null,c__4521__auto__,i__27992);
var k = cljs.core.nth.call(null,vec__27994,(0),null);
var response = cljs.core.nth.call(null,vec__27994,(1),null);
cljs.core.chunk_append.call(null,b__27993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys.call(null,$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__27992,$,$__$1,vec__27994,k,response,c__4521__auto__,size__4522__auto__,b__27993,s__27991__$2,temp__5735__auto__,G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__27968_SHARP_){
return reitit.coercion._compile_model.call(null,this$__$1,p1__27968_SHARP_,null);
});})(i__27992,$,$__$1,vec__27994,k,response,c__4521__auto__,size__4522__auto__,b__27993,s__27991__$2,temp__5735__auto__,G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__28004 = (i__27992 + (1));
i__27992 = G__28004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27993),reitit$coercion$spec$create_$_iter__27990.call(null,cljs.core.chunk_rest.call(null,s__27991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27993),null);
}
} else {
var vec__27997 = cljs.core.first.call(null,s__27991__$2);
var k = cljs.core.nth.call(null,vec__27997,(0),null);
var response = cljs.core.nth.call(null,vec__27997,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys.call(null,$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__27997,k,response,s__27991__$2,temp__5735__auto__,G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__27968_SHARP_){
return reitit.coercion._compile_model.call(null,this$__$1,p1__27968_SHARP_,null);
});})($,$__$1,vec__27997,k,response,s__27991__$2,temp__5735__auto__,G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__27990.call(null,cljs.core.rest.call(null,s__27991__$2)));
}
} else {
return null;
}
break;
}
});})(G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
,null,null));
});})(G__27979,G__27979__$1,this$__$1,map__27977,map__27977__$1,parameters,responses,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;
return iter__4523__auto__.call(null,responses);
})())], null):null)));

break;
default:
throw cljs.core.ex_info.call(null,["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec.call(null,model,name);
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_open_model$arity$2 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.call(null,cljs.core.update.call(null,error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.call(null,cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.call(null,((function (problems,___$1,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__27969_SHARP_){
return cljs.core.update.call(null,p1__27969_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
});})(problems,___$1,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
,problems));
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = reitit.coercion._compile_model.call(null,this$__$1,spec,null);
var map__28000 = self__.transformers.call(null,type);
var map__28000__$1 = (((((!((map__28000 == null))))?(((((map__28000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000):map__28000);
var formats = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return ((function (spec__$1,map__28000,map__28000__$1,formats,default$,this$__$1,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (value,format){
var temp__5733__auto__ = (function (){var or__4131__auto__ = cljs.core.get.call(null,formats,format);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var transformer = temp__5733__auto__;
var coerced = spec_tools.core.coerce.call(null,spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.call(null,spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_.call(null,transformed)){
var problems = spec_tools.core.explain_data.call(null,spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$1,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform.call(null,spec__$1,transformed);
}
}
} else {
return value;
}
});
;})(spec__$1,map__28000,map__28000__$1,formats,default$,this$__$1,map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.coerce_response_QMARK_.call(null,spec))){
return reitit.coercion._request_coercer.call(null,this$__$1,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.getBasis = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__27970","p__27970",-1332095063,null),new cljs.core.Symbol(null,"map__27971","map__27971",284606022,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta27974","meta27974",199587224,null)], null);
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec27973.cljs$lang$type = true;

reitit.coercion.spec.t_reitit$coercion$spec27973.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec27973";

reitit.coercion.spec.t_reitit$coercion$spec27973.cljs$lang$ctorPrWriter = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.coercion.spec/t_reitit$coercion$spec27973");
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec27973.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec27973 = ((function (map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_){
return (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec27973(p__27970__$1,map__27971__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta27974){
return (new reitit.coercion.spec.t_reitit$coercion$spec27973(p__27970__$1,map__27971__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta27974));
});})(map__27971,map__27971__$1,opts,transformers,coerce_response_QMARK_))
;

}

return (new reitit.coercion.spec.t_reitit$coercion$spec27973(p__27970,map__27971__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create.call(null,reitit.coercion.spec.default_options);

//# sourceMappingURL=spec.js.map
