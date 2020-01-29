// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._get_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-name",this$);
}
}
}
});

/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._get_options[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-options",this$);
}
}
}
});

/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,specification,data);
} else {
var m__4431__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,specification,data);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-apidocs",this$);
}
}
}
});

/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,model,name);
} else {
var m__4431__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,model,name);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-compile-model",this$);
}
}
}
});

/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._open_model[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,model);
} else {
var m__4431__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-open-model",this$);
}
}
}
});

/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,error);
} else {
var m__4431__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,error);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-encode-error",this$);
}
}
}
});

/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,type,model);
} else {
var m__4431__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,type,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-request-coercer",this$);
}
}
}
});

/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,model);
} else {
var m__4431__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-response-coercer",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26642,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26646 = k26642;
switch (G__26646) {
default:
return cljs.core.get.call(null,self__.__extmap,k26642,else__4388__auto__);

}
});

reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26647){
var vec__26648 = p__26647;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26648,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26648,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26641){
var self__ = this;
var G__26641__$1 = this;
return (new cljs.core.RecordIter((0),G__26641__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26643,other26644){
var self__ = this;
var this26643__$1 = this;
return (((!((other26644 == null)))) && ((this26643__$1.constructor === other26644.constructor)) && (cljs.core._EQ_.call(null,this26643__$1.__extmap,other26644.__extmap)));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26641){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26651 = cljs.core.keyword_identical_QMARK_;
var expr__26652 = k__4393__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26641),null));
});

reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26641){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__26641,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reitit.coercion.CoercionError.cljs$lang$type = true;

reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
});

reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.coercion/CoercionError");
});

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__26645){
var extmap__4424__auto__ = (function (){var G__26654 = cljs.core.dissoc.call(null,G__26645);
if(cljs.core.record_QMARK_.call(null,G__26645)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26654);
} else {
return G__26654;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26657,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26661 = k26657;
var G__26661__$1 = (((G__26661 instanceof cljs.core.Keyword))?G__26661.fqn:null);
switch (G__26661__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26657,else__4388__auto__);

}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26662){
var vec__26663 = p__26662;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26663,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26663,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26656){
var self__ = this;
var G__26656__$1 = this;
return (new cljs.core.RecordIter((0),G__26656__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26658,other26659){
var self__ = this;
var this26658__$1 = this;
return (((!((other26659 == null)))) && ((this26658__$1.constructor === other26659.constructor)) && (cljs.core._EQ_.call(null,this26658__$1.in,other26659.in)) && (cljs.core._EQ_.call(null,this26658__$1.style,other26659.style)) && (cljs.core._EQ_.call(null,this26658__$1.keywordize_QMARK_,other26659.keywordize_QMARK_)) && (cljs.core._EQ_.call(null,this26658__$1.open_QMARK_,other26659.open_QMARK_)) && (cljs.core._EQ_.call(null,this26658__$1.__extmap,other26659.__extmap)));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26656){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26666 = cljs.core.keyword_identical_QMARK_;
var expr__26667 = k__4393__auto__;
if(cljs.core.truth_(pred__26666.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__26667))){
return (new reitit.coercion.ParameterCoercion(G__26656,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26666.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__26667))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__26656,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26666.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__26667))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__26656,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26666.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__26667))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__26656,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26656),null));
}
}
}
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26656){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__26656,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
});

reitit.coercion.ParameterCoercion.cljs$lang$type = true;

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
});

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.coercion/ParameterCoercion");
});

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__26660){
var extmap__4424__auto__ = (function (){var G__26669 = cljs.core.dissoc.call(null,G__26660,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.record_QMARK_.call(null,G__26660)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26669);
} else {
return G__26669;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__26660),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__26660),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__26660),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__26660),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.call(null,["Request coercion failed: ",cljs.core.pr_str.call(null,result)].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null),new cljs.core.Keyword(null,"request","request",1772954723),request], null)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.call(null,["Response coercion failed: ",cljs.core.pr_str.call(null,result)].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"response","response",-1068424192),response], null)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__26671){
var map__26672 = p__26671;
var map__26672__$1 = (((((!((map__26672 == null))))?(((((map__26672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672):map__26672);
var extract_request_format = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5733__auto__ = parameter_coercion.call(null,type);
if(cljs.core.truth_(temp__5733__auto__)){
var map__26674 = temp__5733__auto__;
var map__26674__$1 = (((((!((map__26674 == null))))?(((((map__26674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26674):map__26674);
var keywordize_QMARK_ = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.call(null,map__26674__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var transform = cljs.core.comp.call(null,(cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model.call(null,coercion,model):model);
var coercer = reitit.coercion._request_coercer.call(null,coercion,style,model__$1);
return ((function (transform,model__$1,coercer,map__26674,map__26674__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5733__auto__,map__26672,map__26672__$1,extract_request_format,parameter_coercion){
return (function (request){
var value = transform.call(null,request);
var format = extract_request_format.call(null,request);
var result = coercer.call(null,value,format);
if(reitit.coercion.error_QMARK_.call(null,result)){
return reitit.coercion.request_coercion_failed_BANG_.call(null,result,coercion,value,in$,request);
} else {
return result;
}
});
;})(transform,model__$1,coercer,map__26674,map__26674__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5733__auto__,map__26672,map__26672__$1,extract_request_format,parameter_coercion))
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__26676){
var map__26677 = p__26676;
var map__26677__$1 = (((((!((map__26677 == null))))?(((((map__26677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26677):map__26677);
var extract_response_format = cljs.core.get.call(null,map__26677__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var coercer = reitit.coercion._response_coercer.call(null,coercion,body);
return ((function (coercer,map__26677,map__26677__$1,extract_response_format){
return (function (request,response){
var format = extract_response_format.call(null,request,response);
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var result = coercer.call(null,value,format);
if(reitit.coercion.error_QMARK_.call(null,result)){
return reitit.coercion.response_coercion_failed_BANG_.call(null,result,coercion,value,request,response);
} else {
return result;
}
});
;})(coercer,map__26677,map__26677__$1,extract_response_format))
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error.call(null,new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv.call(null,(function (acc,k,coercer){
return reitit.impl.fast_assoc.call(null,acc,k,coercer.call(null,request));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5733__auto__ = (function (){var or__4131__auto__ = coercers.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return coercers.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
return reitit.impl.fast_assoc.call(null,response,new cljs.core.Keyword(null,"body","body",-2049205669),coercer.call(null,request,response));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,(function (){var iter__4523__auto__ = (function reitit$coercion$request_coercers_$_iter__26679(s__26680){
return (new cljs.core.LazySeq(null,(function (){
var s__26680__$1 = s__26680;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__26680__$1);
if(temp__5735__auto__){
var s__26680__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26680__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26680__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26682 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26681 = (0);
while(true){
if((i__26681 < size__4522__auto__)){
var vec__26683 = cljs.core._nth.call(null,c__4521__auto__,i__26681);
var k = cljs.core.nth.call(null,vec__26683,(0),null);
var v = cljs.core.nth.call(null,vec__26683,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__26682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null));

var G__26689 = (i__26681 + (1));
i__26681 = G__26689;
continue;
} else {
var G__26690 = (i__26681 + (1));
i__26681 = G__26690;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26682),reitit$coercion$request_coercers_$_iter__26679.call(null,cljs.core.chunk_rest.call(null,s__26680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26682),null);
}
} else {
var vec__26686 = cljs.core.first.call(null,s__26680__$2);
var k = cljs.core.nth.call(null,vec__26686,(0),null);
var v = cljs.core.nth.call(null,vec__26686,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__26679.call(null,cljs.core.rest.call(null,s__26680__$2)));
} else {
var G__26691 = cljs.core.rest.call(null,s__26680__$2);
s__26680__$1 = G__26691;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,parameters);
})()));
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function reitit$coercion$response_coercers_$_iter__26692(s__26693){
return (new cljs.core.LazySeq(null,(function (){
var s__26693__$1 = s__26693;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__26693__$1);
if(temp__5735__auto__){
var s__26693__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26693__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26693__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26695 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26694 = (0);
while(true){
if((i__26694 < size__4522__auto__)){
var vec__26696 = cljs.core._nth.call(null,c__4521__auto__,i__26694);
var status = cljs.core.nth.call(null,vec__26696,(0),null);
var map__26699 = cljs.core.nth.call(null,vec__26696,(1),null);
var map__26699__$1 = (((((!((map__26699 == null))))?(((((map__26699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26699):map__26699);
var body = cljs.core.get.call(null,map__26699__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
cljs.core.chunk_append.call(null,b__26695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null));

var G__26706 = (i__26694 + (1));
i__26694 = G__26706;
continue;
} else {
var G__26707 = (i__26694 + (1));
i__26694 = G__26707;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26695),reitit$coercion$response_coercers_$_iter__26692.call(null,cljs.core.chunk_rest.call(null,s__26693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26695),null);
}
} else {
var vec__26701 = cljs.core.first.call(null,s__26693__$2);
var status = cljs.core.nth.call(null,vec__26701,(0),null);
var map__26704 = cljs.core.nth.call(null,vec__26701,(1),null);
var map__26704__$1 = (((((!((map__26704 == null))))?(((((map__26704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26704):map__26704);
var body = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__26692.call(null,cljs.core.rest.call(null,s__26693__$2)));
} else {
var G__26708 = cljs.core.rest.call(null,s__26693__$2);
s__26693__$1 = G__26708;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,responses);
})());
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(this$,specification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"formData","formData",-1155796695),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"multipart","multipart",1158197946),new cljs.core.Keyword(null,"formData","formData",-1155796695)], null);
var G__26709 = specification;
var G__26709__$1 = (((G__26709 instanceof cljs.core.Keyword))?G__26709.fqn:null);
switch (G__26709__$1) {
case "swagger":
return reitit.coercion._get_apidocs.call(null,this$,specification,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),((function (G__26709,G__26709__$1,swagger_parameter){
return (function (parameters){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (G__26709,G__26709__$1,swagger_parameter){
return (function (p__26710){
var vec__26711 = p__26710;
var k = cljs.core.nth.call(null,vec__26711,(0),null);
var v = cljs.core.nth.call(null,vec__26711,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swagger_parameter.call(null,k),v], null);
});})(G__26709,G__26709__$1,swagger_parameter))
,parameters)));
});})(G__26709,G__26709__$1,swagger_parameter))
));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26709__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__26715,opts){
var vec__26716 = p__26715;
var _ = cljs.core.nth.call(null,vec__26716,(0),null);
var map__26719 = cljs.core.nth.call(null,vec__26716,(1),null);
var map__26719__$1 = (((((!((map__26719 == null))))?(((((map__26719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26719):map__26719);
var parameters = cljs.core.get.call(null,map__26719__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.call(null,map__26719__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__4120__auto__ = parameters;
if(cljs.core.truth_(and__4120__auto__)){
return coercion;
} else {
return and__4120__auto__;
}
})())){
return reitit.coercion.request_coercers.call(null,coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5733__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5733__auto__)){
var coercers = temp__5733__auto__;
return reitit.coercion.coerce_request.call(null,coercers,match);
} else {
return null;
}
});

//# sourceMappingURL=coercion.js.map
