// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.core');
goog.require('cljs.core');
goog.require('spec_tools.impl');
goog.require('spec_tools.parse');
goog.require('spec_tools.form');
goog.require('clojure.set');
goog.require('spec_tools.transform');
goog.require('cljs.spec.alpha');
goog.require('goog.date.UtcDateTime');
goog.require('cljs.reader');
goog.require('cljs.spec.gen.alpha');
spec_tools.core.registry = (function spec_tools$core$registry(var_args){
var G__27543 = arguments.length;
switch (G__27543) {
case 0:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.alpha.registry.call(null);
});

spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1 = (function (re){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__27541_SHARP_){
return cljs.core.re_matches.call(null,re,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__27541_SHARP_)),(1)));
}),cljs.spec.alpha.registry.call(null)));
});

spec_tools.core.registry.cljs$lang$maxFixedArity = 1;

/**
 * Finds recursively a spec implementation from the registry
 */
spec_tools.core.get_spec = (function spec_tools$core$get_spec(name){
var temp__5733__auto__ = cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),name);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
if((spec instanceof cljs.core.Keyword)){
return spec_tools.core.get_spec.call(null,spec);
} else {
return spec;
}
} else {
return null;
}
});
/**
 * Returns a spec from a spec name or spec. Throwns exception
 *   if no spec was found.
 */
spec_tools.core.coerce_spec = (function spec_tools$core$coerce_spec(name_or_spec){
var or__4131__auto__ = (function (){var and__4120__auto__ = spec_tools.core.spec_QMARK_.call(null,name_or_spec);
if(cljs.core.truth_(and__4120__auto__)){
return name_or_spec;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = spec_tools.core.get_spec.call(null,name_or_spec);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
throw cljs.core.ex_info.call(null,["can't coerce to spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_or_spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name-or-spec","name-or-spec",-1287260145),name_or_spec], null));
}
}
});
/**
 * Writes specs into a string that can be read by the reader.
 *   TODO: Should optionally write the realated Registry entries.
 */
spec_tools.core.serialize = (function spec_tools$core$serialize(spec){
return cljs.core.pr_str.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Reads specs from a string.
 *   TODO: Should optionally read the realated Registry entries.
 */
spec_tools.core.deserialize = (function spec_tools$core$deserialize(s){
return cljs.reader.read_string.call(null,s);
});
spec_tools.core._STAR_transformer_STAR_ = null;
spec_tools.core._STAR_encode_QMARK__STAR_ = null;

/**
 * @interface
 */
spec_tools.core.Coercion = function(){};

spec_tools.core._coerce = (function spec_tools$core$_coerce(this$,value,transformer,options){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Coercion$_coerce$arity$4 == null)))))){
return this$.spec_tools$core$Coercion$_coerce$arity$4(this$,value,transformer,options);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (spec_tools.core._coerce[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,value,transformer,options);
} else {
var m__4431__auto__ = (spec_tools.core._coerce["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,value,transformer,options);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-coerce",this$);
}
}
}
});


/**
 * @interface
 */
spec_tools.core.Transformer = function(){};

spec_tools.core._name = (function spec_tools$core$_name(this$){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_name$arity$1 == null)))))){
return this$.spec_tools$core$Transformer$_name$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (spec_tools.core._name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (spec_tools.core._name["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Transformer.-name",this$);
}
}
}
});

spec_tools.core._options = (function spec_tools$core$_options(this$){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_options$arity$1 == null)))))){
return this$.spec_tools$core$Transformer$_options$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (spec_tools.core._options[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (spec_tools.core._options["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Transformer.-options",this$);
}
}
}
});

spec_tools.core._encoder = (function spec_tools$core$_encoder(this$,spec,value){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_encoder$arity$3 == null)))))){
return this$.spec_tools$core$Transformer$_encoder$arity$3(this$,spec,value);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (spec_tools.core._encoder[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,spec,value);
} else {
var m__4431__auto__ = (spec_tools.core._encoder["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,spec,value);
} else {
throw cljs.core.missing_protocol.call(null,"Transformer.-encoder",this$);
}
}
}
});

spec_tools.core._decoder = (function spec_tools$core$_decoder(this$,spec,value){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_decoder$arity$3 == null)))))){
return this$.spec_tools$core$Transformer$_decoder$arity$3(this$,spec,value);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (spec_tools.core._decoder[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,spec,value);
} else {
var m__4431__auto__ = (spec_tools.core._decoder["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,spec,value);
} else {
throw cljs.core.missing_protocol.call(null,"Transformer.-decoder",this$);
}
}
}
});

/**
 * Returns a Transformer instance out of options map or Transformer instances.
 *   Available options:
 * 
 *   | Key                | Description
 *   |--------------------|-----------------
 *   | `:name`            | Name of the transformer
 *   | `:encoders`        | Map of type `type -> transform`
 *   | `:decoders`        | Map of type `type -> transform`
 *   | `:default-encoder` | Default `transform` for encoding
 *   | `:default-decoder` | Default `transform` for decoding
 * 
 *   Example of a JSON type-transformer:
 * 
 *   ```clojure
 *   (require '[spec-tools.core :as st])
 *   (require '[spec-tools.transform :as stt])
 * 
 *   (def json-transformer
 *  (type-transformer
 *    {:name :json
 *     :decoders stt/json-type-decoders
 *     :encoders stt/json-type-encoders
 *     :default-encoder stt/any->any}))
 *   ```
 * 
 *   Composed Strict JSON Transformer:
 * 
 *   ```clojure
 *   (def strict-json-transformer
 *  (st/type-transformer
 *    st/json-transformer
 *    st/strip-extra-keys-transformer
 *    st/strip-extra-values-transformer))
 *   ```
 */
spec_tools.core.type_transformer = (function spec_tools$core$type_transformer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27555 = arguments.length;
var i__4731__auto___27556 = (0);
while(true){
if((i__4731__auto___27556 < len__4730__auto___27555)){
args__4736__auto__.push((arguments[i__4731__auto___27556]));

var G__27557 = (i__4731__auto___27556 + (1));
i__4731__auto___27556 = G__27557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic = (function (options_or_transformers){
var __GT_opts = (function (p1__27545_SHARP_){
if((((!((p1__27545_SHARP_ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__27545_SHARP_.spec_tools$core$Transformer$))))?true:(((!p1__27545_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,spec_tools.core.Transformer,p1__27545_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,spec_tools.core.Transformer,p1__27545_SHARP_))){
return spec_tools.core._options.call(null,p1__27545_SHARP_);
} else {
return p1__27545_SHARP_;
}
});
var map__27547 = cljs.core.reduce.call(null,spec_tools.impl.deep_merge,null,cljs.core.map.call(null,__GT_opts,options_or_transformers));
var map__27547__$1 = (((((!((map__27547 == null))))?(((((map__27547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27547):map__27547);
var options = map__27547__$1;
var transformer_name = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var encoders = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"encoders","encoders",-111722908));
var decoders = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"decoders","decoders",1132818244));
var default_encoder = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207));
var default_decoder = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161));
var encode_key = (function (){var G__27550 = transformer_name;
var G__27550__$1 = (((G__27550 == null))?null:cljs.core.name.call(null,G__27550));
var G__27550__$2 = (((G__27550__$1 == null))?null:["encode/",G__27550__$1].join(''));
if((G__27550__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__27550__$2);
}
})();
var decode_key = (function (){var G__27551 = transformer_name;
var G__27551__$1 = (((G__27551 == null))?null:cljs.core.name.call(null,G__27551));
var G__27551__$2 = (((G__27551__$1 == null))?null:["decode/",G__27551__$1].join(''));
if((G__27551__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__27551__$2);
}
})();
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core27552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core27552 = (function (options,encoders,decoders,default_decoder,transformer_name,map__27547,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,meta27553){
this.options = options;
this.encoders = encoders;
this.decoders = decoders;
this.default_decoder = default_decoder;
this.transformer_name = transformer_name;
this.map__27547 = map__27547;
this.encode_key = encode_key;
this.decode_key = decode_key;
this.__GT_opts = __GT_opts;
this.default_encoder = default_encoder;
this.options_or_transformers = options_or_transformers;
this.meta27553 = meta27553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
spec_tools.core.t_spec_tools$core27552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_27554,meta27553__$1){
var self__ = this;
var _27554__$1 = this;
return (new spec_tools.core.t_spec_tools$core27552(self__.options,self__.encoders,self__.decoders,self__.default_decoder,self__.transformer_name,self__.map__27547,self__.encode_key,self__.decode_key,self__.__GT_opts,self__.default_encoder,self__.options_or_transformers,meta27553__$1));
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_27554){
var self__ = this;
var _27554__$1 = this;
return self__.meta27553;
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.t_spec_tools$core27552.prototype.spec_tools$core$Transformer$_name$arity$1 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.transformer_name;
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.prototype.spec_tools$core$Transformer$_options$arity$1 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.prototype.spec_tools$core$Transformer$_encoder$arity$3 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__4131__auto__ = cljs.core.get.call(null,spec,self__.encode_key);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get.call(null,self__.encoders,spec_tools.parse.type_dispatch_value.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return self__.default_encoder;
}
}
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.prototype.spec_tools$core$Transformer$_decoder$arity$3 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__4131__auto__ = cljs.core.get.call(null,spec,self__.decode_key);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get.call(null,self__.decoders,spec_tools.parse.type_dispatch_value.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return self__.default_decoder;
}
}
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.getBasis = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"encoders","encoders",1528808619,null),new cljs.core.Symbol(null,"decoders","decoders",-1521617525,null),new cljs.core.Symbol(null,"default-decoder","default-decoder",-1846078608,null),new cljs.core.Symbol(null,"transformer-name","transformer-name",1500736595,null),new cljs.core.Symbol(null,"map__27547","map__27547",853599187,null),new cljs.core.Symbol(null,"encode-key","encode-key",61285653,null),new cljs.core.Symbol(null,"decode-key","decode-key",-1250072619,null),new cljs.core.Symbol(null,"->opts","->opts",-1799002948,null),new cljs.core.Symbol(null,"default-encoder","default-encoder",1758072734,null),new cljs.core.Symbol(null,"options-or-transformers","options-or-transformers",878001150,null),new cljs.core.Symbol(null,"meta27553","meta27553",-953359069,null)], null);
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core27552.cljs$lang$type = true;

spec_tools.core.t_spec_tools$core27552.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core27552";

spec_tools.core.t_spec_tools$core27552.cljs$lang$ctorPrWriter = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"spec-tools.core/t_spec_tools$core27552");
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core27552.
 */
spec_tools.core.__GT_t_spec_tools$core27552 = ((function (encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function spec_tools$core$__GT_t_spec_tools$core27552(options__$1,encoders__$1,decoders__$1,default_decoder__$1,transformer_name__$1,map__27547__$2,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta27553){
return (new spec_tools.core.t_spec_tools$core27552(options__$1,encoders__$1,decoders__$1,default_decoder__$1,transformer_name__$1,map__27547__$2,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta27553));
});})(encode_key,decode_key,__GT_opts,map__27547,map__27547__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

}

return (new spec_tools.core.t_spec_tools$core27552(options,encoders,decoders,default_decoder,transformer_name,map__27547__$1,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,cljs.core.PersistentArrayMap.EMPTY));
});

spec_tools.core.type_transformer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
spec_tools.core.type_transformer.cljs$lang$applyTo = (function (seq27546){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27546));
});

/**
 * Transformer that transforms data between JSON and EDN.
 */
spec_tools.core.json_transformer = spec_tools.core.type_transformer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.json_type_decoders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),spec_tools.transform.json_type_encoders,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),spec_tools.transform.any__GT_any], null));
/**
 * Transformer that transforms data between Strings and EDN.
 */
spec_tools.core.string_transformer = spec_tools.core.type_transformer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.string_type_decoders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),spec_tools.transform.string_type_encoders,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),spec_tools.transform.any__GT_any], null));
/**
 * Transformer that drop extra keys from `s/keys` specs.
 */
spec_tools.core.strip_extra_keys_transformer = spec_tools.core.type_transformer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","strip-extra-keys","spec-tools.core/strip-extra-keys",-1640458075),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.strip_extra_keys_type_decoders], null));
/**
 * Transformer that drop extra values from `s/tuple` specs.
 */
spec_tools.core.strip_extra_values_transformer = spec_tools.core.type_transformer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","strip-extra-values","spec-tools.core/strip-extra-values",368120531),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.strip_extra_values_type_decoders], null));
/**
 * Transformer that fails on extra keys in `s/keys` specs.
 */
spec_tools.core.fail_on_extra_keys_transformer = spec_tools.core.type_transformer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","fail-on-extra-keys","spec-tools.core/fail-on-extra-keys",-434971052),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.fail_on_extra_keys_type_decoders], null));
/**
 * Like `clojure.core.alpha/explain` but supports transformers
 */
spec_tools.core.explain = (function spec_tools$core$explain(var_args){
var G__27559 = arguments.length;
switch (G__27559) {
case 2:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain.call(null,spec,value,null);
});

spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__27560 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__27561 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__27562 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__27563 = false;
spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__27562;

spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__27563;

try{return cljs.spec.alpha.explain.call(null,spec_tools.core.into_spec.call(null,spec),value);
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__27561;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__27560;
}});

spec_tools.core.explain.cljs$lang$maxFixedArity = 3;

/**
 * Like `clojure.core.alpha/explain-data` but supports transformers
 */
spec_tools.core.explain_data = (function spec_tools$core$explain_data(var_args){
var G__27566 = arguments.length;
switch (G__27566) {
case 2:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain_data.call(null,spec,value,null);
});

spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__27567 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__27568 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__27569 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__27570 = false;
spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__27569;

spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__27570;

try{return cljs.spec.alpha.explain_data.call(null,spec_tools.core.into_spec.call(null,spec),value);
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__27568;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__27567;
}});

spec_tools.core.explain_data.cljs$lang$maxFixedArity = 3;

/**
 * Given a spec and a value, returns the possibly destructured value
 * or ::s/invalid
 */
spec_tools.core.conform = (function spec_tools$core$conform(var_args){
var G__27573 = arguments.length;
switch (G__27573) {
case 2:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform.call(null,spec,value,null);
});

spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__27574 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__27575 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__27576 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__27577 = false;
spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__27576;

spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__27577;

try{return cljs.spec.alpha.conform.call(null,spec_tools.core.into_spec.call(null,spec),value);
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__27575;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__27574;
}});

spec_tools.core.conform.cljs$lang$maxFixedArity = 3;

/**
 * Given a spec and a value, returns the possibly destructured value
 * or fails with ex-info with :type of ::conform. ex-data also contains
 * :problems, :spec and :value. call s/unform on the result to get the
 * actual conformed value.
 */
spec_tools.core.conform_BANG_ = (function spec_tools$core$conform_BANG_(var_args){
var G__27580 = arguments.length;
switch (G__27580) {
case 2:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform_BANG_.call(null,spec,value,null);
});

spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__27581 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__27582 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__27583 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__27584 = false;
spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__27583;

spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__27584;

try{var spec_SINGLEQUOTE_ = spec_tools.core.into_spec.call(null,spec);
var conformed = cljs.spec.alpha.conform.call(null,spec_SINGLEQUOTE_,value);
if((!(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)))){
return conformed;
} else {
var problems = cljs.spec.alpha.explain_data.call(null,spec_SINGLEQUOTE_,value);
var data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("spec-tools.core","conform","spec-tools.core/conform",-97557480),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(problems),new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"value","value",305978217),value], null);
throw cljs.core.ex_info.call(null,["Spec conform error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),data);
}
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__27582;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__27581;
}});

spec_tools.core.conform_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Coerces the value using a [[Transformer]]. Returns original value for
 *   those parts of the value that can't be trasformed.
 */
spec_tools.core.coerce = (function spec_tools$core$coerce(var_args){
var G__27587 = arguments.length;
switch (G__27587) {
case 3:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
return spec_tools.core.coerce.call(null,spec,value,transformer,null);
});

spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4 = (function (spec,value,transformer,options){
return spec_tools.core._coerce.call(null,spec_tools.core.into_spec.call(null,spec),value,transformer,options);
});

spec_tools.core.coerce.cljs$lang$maxFixedArity = 4;

/**
 * Decodes a value using a [[Transformer]] from external format to a value
 *   defined by the spec. First, calls [[coerce]] and returns the value if it's
 *   valid - otherwise, calls [[conform]] & [[unform]]. Returns `::s/invalid`
 *   if the value can't be decoded to conform the spec.
 */
spec_tools.core.decode = (function spec_tools$core$decode(var_args){
var G__27590 = arguments.length;
switch (G__27590) {
case 2:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.decode.call(null,spec,value,null);
});

spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var spec__$1 = spec_tools.core.into_spec.call(null,spec);
var coerced = spec_tools.core.coerce.call(null,spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,coerced)){
return coerced;
} else {
var _STAR_transformer_STAR__orig_val__27591 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__27592 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__27593 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__27594 = false;
spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__27593;

spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__27594;

try{var conformed = cljs.spec.alpha.conform.call(null,spec__$1,value);
if(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)){
return conformed;
} else {
return cljs.spec.alpha.unform.call(null,spec__$1,conformed);
}
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__27592;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__27591;
}}
});

spec_tools.core.decode.cljs$lang$maxFixedArity = 3;

/**
 * Transforms a value (using a [[Transformer]]) from external
 *   format into a value defined by the spec. On error, returns `::s/invalid`.
 */
spec_tools.core.encode = (function spec_tools$core$encode(spec,value,transformer){
var _STAR_transformer_STAR__orig_val__27596 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__27597 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__27598 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__27599 = true;
spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__27598;

spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__27599;

try{var spec__$1 = spec_tools.core.into_spec.call(null,spec);
var conformed = cljs.spec.alpha.conform.call(null,spec__$1,value);
if(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)){
return conformed;
} else {
return cljs.spec.alpha.unform.call(null,spec__$1,conformed);
}
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__27597;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__27596;
}});
/**
 * Best effort to drop recursively all extra keys out of a keys spec value.
 */
spec_tools.core.select_spec = (function spec_tools$core$select_spec(spec,value){
return spec_tools.core.coerce.call(null,spec,value,spec_tools.core.strip_extra_keys_transformer);
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.walk !== 'undefined')){
} else {
spec_tools.core.walk = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.core","walk"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__27600,_,___$1,___$2){
var map__27601 = p__27600;
var map__27601__$1 = (((((!((map__27601 == null))))?(((((map__27601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27601):map__27601);
var type = cljs.core.get.call(null,map__27601__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return spec_tools.parse.type_dispatch_value.call(null,type);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940),(function (spec,value,accept,options){
if(cljs.core.truth_((function (){var and__4120__auto__ = spec_tools.core.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4120__auto__;
}
})())){
return accept.call(null,spec,value,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"skip?","skip?",1467795012),true));
} else {
return value;
}
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"or","or",235744169),(function (p__27603,value,accept,options){
var map__27604 = p__27603;
var map__27604__$1 = (((((!((map__27604 == null))))?(((((map__27604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27604):map__27604);
var items = cljs.core.get.call(null,map__27604__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
return cljs.core.reduce.call(null,((function (map__27604,map__27604__$1,items){
return (function (v,item){
var transformed = accept.call(null,item,v,options);
if(cljs.core._EQ_.call(null,transformed,v)){
return v;
} else {
return cljs.core.reduced.call(null,transformed);
}
});})(map__27604,map__27604__$1,items))
,value,items);
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"and","and",-971899817),(function (p__27606,value,accept,options){
var map__27607 = p__27606;
var map__27607__$1 = (((((!((map__27607 == null))))?(((((map__27607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27607):map__27607);
var items = cljs.core.get.call(null,map__27607__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
return cljs.core.reduce.call(null,((function (map__27607,map__27607__$1,items){
return (function (v,item){
var transformed = accept.call(null,item,v,options);
return transformed;
});})(map__27607,map__27607__$1,items))
,value,items);
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"nilable","nilable",1842307102),(function (p__27609,value,accept,options){
var map__27610 = p__27609;
var map__27610__$1 = (((((!((map__27610 == null))))?(((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27610):map__27610);
var item = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
return accept.call(null,item,value,options);
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27612,value,accept,options){
var map__27613 = p__27612;
var map__27613__$1 = (((((!((map__27613 == null))))?(((((map__27613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27613):map__27613);
var item = cljs.core.get.call(null,map__27613__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
if(cljs.core.sequential_QMARK_.call(null,value)){
var f = ((cljs.core.seq_QMARK_.call(null,value))?cljs.core.reverse:cljs.core.identity);
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,value),cljs.core.map.call(null,((function (f,map__27613,map__27613__$1,item){
return (function (v){
return accept.call(null,item,v,options);
});})(f,map__27613,map__27613__$1,item))
,value)));
} else {
return value;
}
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (p__27615,value,accept,options){
var map__27616 = p__27615;
var map__27616__$1 = (((((!((map__27616 == null))))?(((((map__27616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27616):map__27616);
var items = cljs.core.get.call(null,map__27616__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.into.call(null,cljs.core.empty.call(null,value),cljs.core.comp.call(null,cljs.core.map_indexed.call(null,cljs.core.vector),cljs.core.map.call(null,((function (map__27616,map__27616__$1,items){
return (function (p__27618){
var vec__27619 = p__27618;
var i = cljs.core.nth.call(null,vec__27619,(0),null);
var v = cljs.core.nth.call(null,vec__27619,(1),null);
if((i < cljs.core.count.call(null,items))){
var G__27622 = cljs.core.nth.call(null,items,i);
if((G__27622 == null)){
return null;
} else {
return accept.call(null,G__27622,v,options);
}
} else {
return v;
}
});})(map__27616,map__27616__$1,items))
)),value);
} else {
return value;
}
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27623,value,accept,options){
var map__27624 = p__27623;
var map__27624__$1 = (((((!((map__27624 == null))))?(((((map__27624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27624):map__27624);
var item = cljs.core.get.call(null,map__27624__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
if(((cljs.core.set_QMARK_.call(null,value)) || (cljs.core.sequential_QMARK_.call(null,value)))){
return cljs.core.set.call(null,cljs.core.map.call(null,((function (map__27624,map__27624__$1,item){
return (function (v){
return accept.call(null,item,v,options);
});})(map__27624,map__27624__$1,item))
,value));
} else {
return value;
}
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27626,value,accept,options){
var map__27627 = p__27626;
var map__27627__$1 = (((((!((map__27627 == null))))?(((((map__27627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27627):map__27627);
var key__GT_spec = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword("spec-tools.parse","key->spec","spec-tools.parse/key->spec",1347735257));
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.reduce_kv.call(null,((function (map__27627,map__27627__$1,key__GT_spec){
return (function (acc,k,v){
var spec = ((cljs.core.qualified_keyword_QMARK_.call(null,k))?cljs.spec.alpha.get_spec.call(null,k):cljs.spec.alpha.get_spec.call(null,cljs.core.get.call(null,key__GT_spec,k)));
var value__$1 = (cljs.core.truth_(spec)?accept.call(null,spec,v,options):v);
return cljs.core.assoc.call(null,acc,k,value__$1);
});})(map__27627,map__27627__$1,key__GT_spec))
,value,value);
} else {
return value;
}
}));
cljs.core._add_method.call(null,spec_tools.core.walk,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (p__27629,data,accept,options){
var map__27630 = p__27629;
var map__27630__$1 = (((((!((map__27630 == null))))?(((((map__27630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27630):map__27630);
var key = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253));
var value = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword("spec-tools.parse","value","spec-tools.parse/value",-492706501));
if(cljs.core.map_QMARK_.call(null,data)){
return cljs.core.reduce_kv.call(null,((function (map__27630,map__27630__$1,key,value){
return (function (acc,k,v){
var k_SINGLEQUOTE_ = accept.call(null,key,k,options);
var v_SINGLEQUOTE_ = accept.call(null,value,v,options);
return cljs.core.assoc.call(null,acc,k_SINGLEQUOTE_,v_SINGLEQUOTE_);
});})(map__27630,map__27630__$1,key,value))
,cljs.core.empty.call(null,data),data);
} else {
return data;
}
}));
spec_tools.core.extra_spec_map = (function spec_tools$core$extra_spec_map(data){
return cljs.core.reduce.call(null,(function (acc,p__27632){
var vec__27633 = p__27632;
var k = cljs.core.nth.call(null,vec__27633,(0),null);
var v = cljs.core.nth.call(null,vec__27633,(1),null);
if(cljs.core._EQ_.call(null,"spec-tools.parse",cljs.core.namespace.call(null,k))){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"spec","spec",347520401)));
});
spec_tools.core.fail_on_invoke = (function spec_tools$core$fail_on_invoke(spec){
throw cljs.core.ex_info.call(null,["Can't invoke spec with a non-function predicate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
});
spec_tools.core.leaf_QMARK_ = (function spec_tools$core$leaf_QMARK_(spec){
return new cljs.core.Keyword(null,"leaf?","leaf?",445442965).cljs$core$IFn$_invoke$arity$1(spec_tools.core.into_spec.call(null,spec));
});
/**
 * Dynamic conforming can't walk over composite specs like s/and & s/or.
 *   So, we'll use the first type. Examples:
 * 
 *   `[:and [:int :string]]` -> `:int`
 *   `[:or [:string :keyword]]` -> `:string`
 */
spec_tools.core.decompose_spec_type = (function spec_tools$core$decompose_spec_type(spec){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.sequential_QMARK_.call(null,type)){
return cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.comp.call(null,cljs.core.first,cljs.core.second));
} else {
return spec;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {spec_tools.core.Coercion}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.core.Spec = (function (spec,form,type,__meta,__extmap,__hash){
this.spec = spec;
this.form = form;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27640,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27645 = k27640;
var G__27645__$1 = (((G__27645 instanceof cljs.core.Keyword))?G__27645.fqn:null);
switch (G__27645__$1) {
case "spec":
return self__.spec;

break;
case "form":
return self__.form;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27640,else__4388__auto__);

}
});

spec_tools.core.Spec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27646){
var vec__27647 = p__27646;
var k__4408__auto__ = cljs.core.nth.call(null,vec__27647,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__27647,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

spec_tools.core.Spec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#spec-tools.core.Spec{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
});

spec_tools.core.Spec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27639){
var self__ = this;
var G__27639__$1 = this;
return (new cljs.core.RecordIter((0),G__27639__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spec_tools.core.Spec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

spec_tools.core.Spec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.core.Spec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

spec_tools.core.Spec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (344961240 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

spec_tools.core.Spec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27641,other27642){
var self__ = this;
var this27641__$1 = this;
return (((!((other27642 == null)))) && ((this27641__$1.constructor === other27642.constructor)) && (cljs.core._EQ_.call(null,this27641__$1.spec,other27642.spec)) && (cljs.core._EQ_.call(null,this27641__$1.form,other27642.form)) && (cljs.core._EQ_.call(null,this27641__$1.type,other27642.type)) && (cljs.core._EQ_.call(null,this27641__$1.__extmap,other27642.__extmap)));
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var transformer = spec_tools.core._STAR_transformer_STAR_;
var encode_QMARK_ = spec_tools.core._STAR_encode_QMARK__STAR_;
var temp__5733__auto__ = (cljs.core.truth_(transformer)?(cljs.core.truth_(encode_QMARK_)?spec_tools.core._encoder:spec_tools.core._decoder).call(null,transformer,spec_tools.core.decompose_spec_type.call(null,this$__$1),x):null);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
var transformed = transform.call(null,this$__$1,x);
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.spec.alpha.invalid_QMARK_.call(null,transformed);
if(and__4120__auto__){
return transformed;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var conformed = cljs.spec.alpha.conform.call(null,self__.spec,transformed);
var or__4131__auto____$1 = (function (){var and__4120__auto__ = encode_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.spec.alpha.invalid_QMARK_.call(null,conformed);
if(and__4120__auto____$1){
var and__4120__auto____$2 = spec_tools.core.leaf_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__4120__auto____$2)){
return transformed;
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return conformed;
}
}
} else {
return cljs.spec.alpha.conform.call(null,self__.spec,x);
}
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.spec,x);
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
var problems = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,self__.spec);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_.call(null,self__.spec);
}
})())?(function (){var conformed = this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x);
var vec__27650 = ((cljs.spec.alpha.invalid_QMARK_.call(null,conformed))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.invalid_QMARK_.call(null,spec_tools.core.conform.call(null,this$__$1,x)),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.spec.alpha.unform.call(null,self__.spec,conformed)], null));
var explain_QMARK_ = cljs.core.nth.call(null,vec__27650,(0),null);
var val = cljs.core.nth.call(null,vec__27650,(1),null);
if(cljs.core.truth_(explain_QMARK_)){
return cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize_STAR_.call(null,self__.spec),path,via,in$,val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
})():((cljs.spec.alpha.invalid_QMARK_.call(null,this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null):null));
var spec_reason = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(this$__$1);
var with_reason = ((function (problems,spec_reason,this$__$1){
return (function (problem){
var G__27653 = problem;
if(cljs.core.truth_(spec_reason)){
return cljs.core.assoc.call(null,G__27653,new cljs.core.Keyword(null,"reason","reason",-2070751759),spec_reason);
} else {
return G__27653;
}
});})(problems,spec_reason,this$__$1))
;
if(cljs.core.truth_(problems)){
return cljs.core.map.call(null,with_reason,problems);
} else {
return null;
}
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (this$,overrides,path,rmap){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var gen = temp__5733__auto__;
return gen.call(null);
} else {
var or__4131__auto__ = cljs.spec.gen.alpha.gen_for_pred.call(null,self__.spec);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,(function (){var or__4131__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,self__.spec);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,self__.spec);
}
})(),overrides,path,rmap);
}
}
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (this$,gfn){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"gen","gen",142575302),gfn);
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var data = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),self__.form], null),spec_tools.core.extra_spec_map.call(null,this$__$1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)))));
});

spec_tools.core.Spec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"spec","spec",347520401),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

spec_tools.core.Spec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27639){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27654 = cljs.core.keyword_identical_QMARK_;
var expr__27655 = k__4393__auto__;
if(cljs.core.truth_(pred__27654.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__27655))){
return (new spec_tools.core.Spec(G__27639,self__.form,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27654.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__27655))){
return (new spec_tools.core.Spec(self__.spec,G__27639,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27654.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__27655))){
return (new spec_tools.core.Spec(self__.spec,self__.form,G__27639,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__27639),null));
}
}
}
});

spec_tools.core.Spec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null))], null),self__.__extmap));
});

spec_tools.core.Spec.prototype.spec_tools$core$Coercion$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.Spec.prototype.spec_tools$core$Coercion$_coerce$arity$4 = (function (this$,value,transformer,options){
var self__ = this;
var this$__$1 = this;
var specify = ((function (this$__$1){
return (function (x){
while(true){
if((x instanceof cljs.core.Keyword)){
var G__27659 = cljs.spec.alpha.get_spec.call(null,x);
x = G__27659;
continue;
} else {
if(cljs.core.truth_(spec_tools.core.spec_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,x))){
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
if(cljs.core.qualified_keyword_QMARK_.call(null,new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x))){
var G__27660 = cljs.spec.alpha.get_spec.call(null,new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x));
x = G__27660;
continue;
} else {
return spec_tools.core.create_spec.call(null,cljs.core.update.call(null,x,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.any_QMARK_)));
}
} else {
return null;
}
}
}
}
break;
}
});})(this$__$1))
;
var transformed = (function (){var temp__5733__auto__ = (cljs.core.truth_((function (){var and__4120__auto__ = transformer;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4120__auto__;
}
})())?spec_tools.core._decoder.call(null,transformer,this$__$1,value):null);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
return transform.call(null,this$__$1,value);
} else {
return value;
}
})();
return spec_tools.core.walk.call(null,this$__$1,transformed,((function (specify,transformed,this$__$1){
return (function (p1__27636_SHARP_,p2__27637_SHARP_,p3__27638_SHARP_){
return spec_tools.core.coerce.call(null,specify.call(null,p1__27636_SHARP_),p2__27637_SHARP_,transformer,p3__27638_SHARP_);
});})(specify,transformed,this$__$1))
,options);
});

spec_tools.core.Spec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27639){
var self__ = this;
var this__4384__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,G__27639,self__.__extmap,self__.__hash));
});

spec_tools.core.Spec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

spec_tools.core.Spec.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
if(cljs.core.ifn_QMARK_.call(null,self__.spec)){
return self__.spec.call(null,x);
} else {
return spec_tools.core.fail_on_invoke.call(null,this$);
}
});

spec_tools.core.Spec.prototype.apply = (function (self__,args27644){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27644)));
});

spec_tools.core.Spec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
if(cljs.core.ifn_QMARK_.call(null,self__.spec)){
return self__.spec.call(null,x);
} else {
return spec_tools.core.fail_on_invoke.call(null,this$);
}
});

spec_tools.core.Spec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null);
});

spec_tools.core.Spec.cljs$lang$type = true;

spec_tools.core.Spec.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"spec-tools.core/Spec",null,(1),null));
});

spec_tools.core.Spec.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"spec-tools.core/Spec");
});

/**
 * Positional factory function for spec-tools.core/Spec.
 */
spec_tools.core.__GT_Spec = (function spec_tools$core$__GT_Spec(spec,form,type){
return (new spec_tools.core.Spec(spec,form,type,null,null,null));
});

/**
 * Factory function for spec-tools.core/Spec, taking a map of keywords to field values.
 */
spec_tools.core.map__GT_Spec = (function spec_tools$core$map__GT_Spec(G__27643){
var extmap__4424__auto__ = (function (){var G__27657 = cljs.core.dissoc.call(null,G__27643,new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.record_QMARK_.call(null,G__27643)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27657);
} else {
return G__27657;
}
})();
return (new spec_tools.core.Spec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__27643),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__27643),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27643),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

spec_tools.core.spec_QMARK_ = (function spec_tools$core$spec_QMARK_(x){
if((x instanceof spec_tools.core.Spec)){
return x;
} else {
return null;
}
});
/**
 * Returns a spec name. Like the private clojure.spec.alpha/spec-name
 */
spec_tools.core.spec_name = (function spec_tools$core$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = spec_tools.core.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(spec);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;

}
}
}
}
});
/**
 * Returns a spec description.
 */
spec_tools.core.spec_description = (function spec_tools$core$spec_description(spec){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_.call(null,spec))){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(spec);
} else {
return null;
}
});
/**
 * Creates a Spec intance from a map containing the following keys:
 * 
 *         :spec  the wrapped spec predicate (default to `any?`)
 *         :form  source code of the spec predicate, if :spec is a spec,
 *                :form is read with `s/form` out of it. For non-spec
 *                preds, spec-tools.form/resolve-form is called, if still
 *                not available, spec-creation will fail.
 *         :type  optional type for the spec. if not set, will be auto-
 *                resolved via spec-tools.parse/parse-spec (optional)
 *       :reason  reason to be added to problems with s/explain (optional)
 *          :gen  generator function for the spec (optional)
 *         :name  name of the spec (optional)
 *  :description  description of the spec (optional)
 *        :xx/yy  any qualified keys can be added (optional)
 */
spec_tools.core.create_spec = (function spec_tools$core$create_spec(p__27662){
var map__27663 = p__27662;
var map__27663__$1 = (((((!((map__27663 == null))))?(((((map__27663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27663):map__27663);
var m = map__27663__$1;
var spec = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var type = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var form = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
if(cljs.core.qualified_keyword_QMARK_.call(null,spec)){
if(cljs.core.truth_(spec_tools.core.get_spec.call(null,spec))){
} else {
throw (new Error(["Assert failed: ",[" Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),"\n","(get-spec spec)"].join('')));
}
} else {
}

var spec__$1 = (function (){var or__4131__auto__ = spec;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.any_QMARK_;
}
})();
var spec__$2 = ((cljs.core.qualified_keyword_QMARK_.call(null,spec__$1))?spec_tools.core.get_spec.call(null,spec__$1):(((spec__$1 instanceof cljs.core.Symbol))?spec_tools.form.resolve_form.call(null,spec__$1):spec__$1
));
var form__$1 = (function (){var or__4131__auto__ = ((cljs.core.qualified_keyword_QMARK_.call(null,form))?cljs.spec.alpha.form.call(null,form):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = form;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var form__$1 = cljs.spec.alpha.form.call(null,spec__$2);
if((!(cljs.core._EQ_.call(null,form__$1,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))))){
return form__$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = spec_tools.form.resolve_form.call(null,spec__$2);
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
}
}
}
}
})();
var info = spec_tools.parse.parse_spec.call(null,form__$1);
var type__$1 = ((cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348)))?type:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info));
var name = new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec__$2));
var record = spec_tools.core.map__GT_Spec.call(null,cljs.core.merge.call(null,m,info,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$2,new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965),spec_tools.parse.leaf_type_QMARK_.call(null,type__$1)], null)));
var G__27665 = record;
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,G__27665,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name], null));
} else {
return G__27665;
}
});
spec_tools.core.into_spec = (function spec_tools$core$into_spec(x){
while(true){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_.call(null,x))){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
var G__27668 = cljs.spec.alpha.get_spec.call(null,x);
x = G__27668;
continue;
} else {
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null));

}
}
break;
}
});
spec_tools.core.map_spec_keys = (function spec_tools$core$map_spec_keys(spec){
var spec__$1 = (function (){var or__4131__auto__ = ((cljs.core.qualified_keyword_QMARK_.call(null,spec))?cljs.spec.alpha.form.call(null,spec):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return spec;
}
})();
var info = spec_tools.parse.parse_spec.call(null,spec__$1);
return cljs.core.select_keys.call(null,info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),new cljs.core.Keyword("spec-tools.parse","keys-req","spec-tools.parse/keys-req",-1559250753),new cljs.core.Keyword("spec-tools.parse","keys-opt","spec-tools.parse/keys-opt",-1090203455)], null));
});
spec_tools.core.merge_impl = (function spec_tools$core$merge_impl(forms,spec_form,merge_spec){
var form_keys = cljs.core.map.call(null,spec_tools.core.map_spec_keys,forms);
var spec = (function (){
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core27672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core27672 = (function (forms,spec_form,merge_spec,form_keys,meta27673){
this.forms = forms;
this.spec_form = spec_form;
this.merge_spec = merge_spec;
this.form_keys = form_keys;
this.meta27673 = meta27673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
spec_tools.core.t_spec_tools$core27672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (form_keys){
return (function (_27674,meta27673__$1){
var self__ = this;
var _27674__$1 = this;
return (new spec_tools.core.t_spec_tools$core27672(self__.forms,self__.spec_form,self__.merge_spec,self__.form_keys,meta27673__$1));
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (form_keys){
return (function (_27674){
var self__ = this;
var _27674__$1 = this;
return self__.meta27673;
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.t_spec_tools$core27672.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (form_keys){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var conformed_vals = cljs.core.map.call(null,((function (___$1,form_keys){
return (function (p1__27669_SHARP_){
return cljs.spec.alpha.conform.call(null,p1__27669_SHARP_,x);
});})(___$1,form_keys))
,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),null], null), null),conformed_vals))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,x,cljs.core.map.call(null,((function (conformed_vals,___$1,form_keys){
return (function (p1__27670_SHARP_,p2__27671_SHARP_){
return cljs.core.select_keys.call(null,p1__27670_SHARP_,p2__27671_SHARP_);
});})(conformed_vals,___$1,form_keys))
,conformed_vals,cljs.core.map.call(null,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),self__.form_keys)));
}
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (form_keys){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,self__.merge_spec,x);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (form_keys){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,self__.merge_spec,path,via,in$,x);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (form_keys){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,self__.merge_spec,overrides,path,rmap);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.getBasis = ((function (form_keys){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"spec-form","spec-form",-871386429,null),new cljs.core.Symbol(null,"merge-spec","merge-spec",-1220518501,null),new cljs.core.Symbol(null,"form-keys","form-keys",1839414472,null),new cljs.core.Symbol(null,"meta27673","meta27673",1145609651,null)], null);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core27672.cljs$lang$type = true;

spec_tools.core.t_spec_tools$core27672.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core27672";

spec_tools.core.t_spec_tools$core27672.cljs$lang$ctorPrWriter = ((function (form_keys){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"spec-tools.core/t_spec_tools$core27672");
});})(form_keys))
;

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core27672.
 */
spec_tools.core.__GT_t_spec_tools$core27672 = ((function (form_keys){
return (function spec_tools$core$merge_impl_$___GT_t_spec_tools$core27672(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta27673){
return (new spec_tools.core.t_spec_tools$core27672(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta27673));
});})(form_keys))
;

}

return (new spec_tools.core.t_spec_tools$core27672(forms,spec_form,merge_spec,form_keys,cljs.core.PersistentArrayMap.EMPTY));
})()
;
return spec_tools.core.create_spec.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"form","form",-1624062471),spec_form,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.apply.call(null,cljs.core.merge_with,clojure.set.union,form_keys)));
});

//# sourceMappingURL=core.js.map
