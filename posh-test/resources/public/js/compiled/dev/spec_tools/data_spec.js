// Compiled by ClojureScript 1.10.520 {}
goog.provide('spec_tools.data_spec');
goog.require('cljs.core');
goog.require('spec_tools.impl');
goog.require('spec_tools.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.parse');

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
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27814,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27818 = k27814;
var G__27818__$1 = (((G__27818 instanceof cljs.core.Keyword))?G__27818.fqn:null);
switch (G__27818__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27814,else__4388__auto__);

}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27819){
var vec__27820 = p__27819;
var k__4408__auto__ = cljs.core.nth.call(null,vec__27820,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__27820,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27813){
var self__ = this;
var G__27813__$1 = this;
return (new cljs.core.RecordIter((0),G__27813__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27815,other27816){
var self__ = this;
var this27815__$1 = this;
return (((!((other27816 == null)))) && ((this27815__$1.constructor === other27816.constructor)) && (cljs.core._EQ_.call(null,this27815__$1.k,other27816.k)) && (cljs.core._EQ_.call(null,this27815__$1.__extmap,other27816.__extmap)));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27813){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27823 = cljs.core.keyword_identical_QMARK_;
var expr__27824 = k__4393__auto__;
if(cljs.core.truth_(pred__27823.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__27824))){
return (new spec_tools.data_spec.OptionalKey(G__27813,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__27813),null));
}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27813){
var self__ = this;
var this__4384__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__27813,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

spec_tools.data_spec.OptionalKey.cljs$lang$type = true;

spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
});

spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"spec-tools.data-spec/OptionalKey");
});

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__27817){
var extmap__4424__auto__ = (function (){var G__27826 = cljs.core.dissoc.call(null,G__27817,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_.call(null,G__27817)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27826);
} else {
return G__27826;
}
})();
return (new spec_tools.data_spec.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__27817),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27829,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27833 = k27829;
var G__27833__$1 = (((G__27833 instanceof cljs.core.Keyword))?G__27833.fqn:null);
switch (G__27833__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27829,else__4388__auto__);

}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27834){
var vec__27835 = p__27834;
var k__4408__auto__ = cljs.core.nth.call(null,vec__27835,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__27835,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27828){
var self__ = this;
var G__27828__$1 = this;
return (new cljs.core.RecordIter((0),G__27828__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27830,other27831){
var self__ = this;
var this27830__$1 = this;
return (((!((other27831 == null)))) && ((this27830__$1.constructor === other27831.constructor)) && (cljs.core._EQ_.call(null,this27830__$1.k,other27831.k)) && (cljs.core._EQ_.call(null,this27830__$1.__extmap,other27831.__extmap)));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27828){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27838 = cljs.core.keyword_identical_QMARK_;
var expr__27839 = k__4393__auto__;
if(cljs.core.truth_(pred__27838.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__27839))){
return (new spec_tools.data_spec.RequiredKey(G__27828,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__27828),null));
}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27828){
var self__ = this;
var this__4384__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__27828,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

spec_tools.data_spec.RequiredKey.cljs$lang$type = true;

spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
});

spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"spec-tools.data-spec/RequiredKey");
});

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__27832){
var extmap__4424__auto__ = (function (){var G__27841 = cljs.core.dissoc.call(null,G__27832,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_.call(null,G__27832)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27841);
} else {
return G__27841;
}
})();
return (new spec_tools.data_spec.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__27832),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27844,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27848 = k27844;
var G__27848__$1 = (((G__27848 instanceof cljs.core.Keyword))?G__27848.fqn:null);
switch (G__27848__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27844,else__4388__auto__);

}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27849){
var vec__27850 = p__27849;
var k__4408__auto__ = cljs.core.nth.call(null,vec__27850,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__27850,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27843){
var self__ = this;
var G__27843__$1 = this;
return (new cljs.core.RecordIter((0),G__27843__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27845,other27846){
var self__ = this;
var this27845__$1 = this;
return (((!((other27846 == null)))) && ((this27845__$1.constructor === other27846.constructor)) && (cljs.core._EQ_.call(null,this27845__$1.v,other27846.v)) && (cljs.core._EQ_.call(null,this27845__$1.__extmap,other27846.__extmap)));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27843){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27853 = cljs.core.keyword_identical_QMARK_;
var expr__27854 = k__4393__auto__;
if(cljs.core.truth_(pred__27853.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__27854))){
return (new spec_tools.data_spec.Maybe(G__27843,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__27843),null));
}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27843){
var self__ = this;
var this__4384__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__27843,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

spec_tools.data_spec.Maybe.cljs$lang$type = true;

spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
});

spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"spec-tools.data-spec/Maybe");
});

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__27847){
var extmap__4424__auto__ = (function (){var G__27856 = cljs.core.dissoc.call(null,G__27847,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_.call(null,G__27847)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27856);
} else {
return G__27856;
}
})();
return (new spec_tools.data_spec.Maybe(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__27847),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27859,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27863 = k27859;
var G__27863__$1 = (((G__27863 instanceof cljs.core.Keyword))?G__27863.fqn:null);
switch (G__27863__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27859,else__4388__auto__);

}
});

spec_tools.data_spec.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27864){
var vec__27865 = p__27864;
var k__4408__auto__ = cljs.core.nth.call(null,vec__27865,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__27865,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27858){
var self__ = this;
var G__27858__$1 = this;
return (new cljs.core.RecordIter((0),G__27858__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27860,other27861){
var self__ = this;
var this27860__$1 = this;
return (((!((other27861 == null)))) && ((this27860__$1.constructor === other27861.constructor)) && (cljs.core._EQ_.call(null,this27860__$1.v,other27861.v)) && (cljs.core._EQ_.call(null,this27860__$1.__extmap,other27861.__extmap)));
});

spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27858){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27868 = cljs.core.keyword_identical_QMARK_;
var expr__27869 = k__4393__auto__;
if(cljs.core.truth_(pred__27868.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__27869))){
return (new spec_tools.data_spec.Or(G__27858,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__27858),null));
}
});

spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
});

spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27858){
var self__ = this;
var this__4384__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__27858,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

spec_tools.data_spec.Or.cljs$lang$type = true;

spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
});

spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"spec-tools.data-spec/Or");
});

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__27862){
var extmap__4424__auto__ = (function (){var G__27871 = cljs.core.dissoc.call(null,G__27862,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_.call(null,G__27862)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27871);
} else {
return G__27871;
}
})();
return (new spec_tools.data_spec.Or(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__27862),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey.call(null,k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey.call(null,k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return (!(spec_tools.data_spec.opt_QMARK_.call(null,x)));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe.call(null,v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or.call(null,v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
return ((spec_tools.data_spec.opt_QMARK_.call(null,x)) || ((x instanceof spec_tools.data_spec.RequiredKey)));
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(spec_tools.data_spec.wrapped_key_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_.call(null,n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.call(null,[cljs.core.namespace.call(null,n),"$",cljs.core.name.call(null,n),(function (){var temp__5733__auto__ = cljs.core.namespace.call(null,k);
if(cljs.core.truth_(temp__5733__auto__)){
var kns = temp__5733__auto__;
return ["$",kns].join('');
} else {
return null;
}
})(),"/",cljs.core.name.call(null,k)].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__27874){
var map__27875 = p__27874;
var map__27875__$1 = (((((!((map__27875 == null))))?(((((map__27875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27875):map__27875);
var opts = map__27875__$1;
var n = cljs.core.get.call(null,map__27875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var keys_spec = cljs.core.get.call(null,map__27875__$1,new cljs.core.Keyword(null,"keys-spec","keys-spec",920288948),spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.call(null,map__27875__$1,new cljs.core.Keyword(null,"keys-default","keys-default",-1790373239));
var temp__5733__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,data));
if(and__4120__auto__){
var vec__27880 = cljs.core.first.call(null,data);
var k = cljs.core.nth.call(null,vec__27880,(0),null);
var v = cljs.core.nth.call(null,vec__27880,(1),null);
var and__4120__auto____$1 = (!((((k instanceof cljs.core.Keyword)) || (spec_tools.data_spec.wrapped_key_QMARK_.call(null,k)))));
if(and__4120__auto____$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var vec__27883 = temp__5733__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27883,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27883,(1),null);
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.map_of_spec.call(null,spec_tools.data_spec.spec.call(null,n,k_SINGLEQUOTE_),spec_tools.data_spec.spec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"spec","spec",347520401),v_SINGLEQUOTE_], null)))], null));
} else {
var m = cljs.core.reduce_kv.call(null,((function (temp__5733__auto__,map__27875,map__27875__$1,opts,n,keys_spec,keys_default){
return (function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = keys_default;
if(cljs.core.truth_(and__4120__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())?keys_default.call(null,k):k);
var kv = spec_tools.data_spec.unwrap_key.call(null,k__$1);
var rk = cljs.core.keyword.call(null,[((spec_tools.data_spec.req_QMARK_.call(null,k__$1))?"req":"opt"),(((!(cljs.core.qualified_keyword_QMARK_.call(null,kv))))?"-un":null)].join(''));
var vec__27886 = ((spec_tools.data_spec.maybe_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.call(null,((function (k__$1,kv,rk,temp__5733__auto__,map__27875,map__27875__$1,opts,n,keys_spec,keys_default){
return (function (p1__27873_SHARP_){
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),p1__27873_SHARP_], null));
});})(k__$1,kv,rk,temp__5733__auto__,map__27875,map__27875__$1,opts,n,keys_spec,keys_default))
,spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.call(null,vec__27886,(0),null);
var wrap = cljs.core.nth.call(null,vec__27886,(1),null);
var vec__27889 = ((cljs.core.qualified_keyword_QMARK_.call(null,kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.call(null,kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key.call(null,n,spec_tools.data_spec.unwrap_key.call(null,kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27889,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27889,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?wrap.call(null,spec_tools.data_spec.spec.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"name","name",1843675177),n_SINGLEQUOTE_),new cljs.core.Keyword(null,"spec","spec",347520401),v__$1))):null);
var G__27892 = cljs.core.update.call(null,acc,rk,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.call(null,G__27892,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__27892;
}
});})(temp__5733__auto__,map__27875,map__27875__$1,opts,n,keys_spec,keys_default))
,cljs.core.PersistentArrayMap.EMPTY,data);
var defs = new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298).cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.dissoc.call(null,m,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298))));
var seq__27893_27913 = cljs.core.seq.call(null,defs);
var chunk__27894_27914 = null;
var count__27895_27915 = (0);
var i__27896_27916 = (0);
while(true){
if((i__27896_27916 < count__27895_27915)){
var vec__27905_27917 = cljs.core._nth.call(null,chunk__27894_27914,i__27896_27916);
var k_27918 = cljs.core.nth.call(null,vec__27905_27917,(0),null);
var s_27919 = cljs.core.nth.call(null,vec__27905_27917,(1),null);
var synthetic_QMARK__27920 = (function (){var and__4120__auto__ = spec_tools.core.spec_QMARK_.call(null,s_27919);
if(cljs.core.truth_(and__4120__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_.call(null,s_27919)));
} else {
return and__4120__auto__;
}
})();
spec_tools.impl.register_spec_BANG_.call(null,k_27918,(function (){var G__27908 = s_27919;
if(cljs.core.truth_(synthetic_QMARK__27920)){
return cljs.core.assoc.call(null,G__27908,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__27908;
}
})());


var G__27921 = seq__27893_27913;
var G__27922 = chunk__27894_27914;
var G__27923 = count__27895_27915;
var G__27924 = (i__27896_27916 + (1));
seq__27893_27913 = G__27921;
chunk__27894_27914 = G__27922;
count__27895_27915 = G__27923;
i__27896_27916 = G__27924;
continue;
} else {
var temp__5735__auto___27925 = cljs.core.seq.call(null,seq__27893_27913);
if(temp__5735__auto___27925){
var seq__27893_27926__$1 = temp__5735__auto___27925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27893_27926__$1)){
var c__4550__auto___27927 = cljs.core.chunk_first.call(null,seq__27893_27926__$1);
var G__27928 = cljs.core.chunk_rest.call(null,seq__27893_27926__$1);
var G__27929 = c__4550__auto___27927;
var G__27930 = cljs.core.count.call(null,c__4550__auto___27927);
var G__27931 = (0);
seq__27893_27913 = G__27928;
chunk__27894_27914 = G__27929;
count__27895_27915 = G__27930;
i__27896_27916 = G__27931;
continue;
} else {
var vec__27909_27932 = cljs.core.first.call(null,seq__27893_27926__$1);
var k_27933 = cljs.core.nth.call(null,vec__27909_27932,(0),null);
var s_27934 = cljs.core.nth.call(null,vec__27909_27932,(1),null);
var synthetic_QMARK__27935 = (function (){var and__4120__auto__ = spec_tools.core.spec_QMARK_.call(null,s_27934);
if(cljs.core.truth_(and__4120__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_.call(null,s_27934)));
} else {
return and__4120__auto__;
}
})();
spec_tools.impl.register_spec_BANG_.call(null,k_27933,(function (){var G__27912 = s_27934;
if(cljs.core.truth_(synthetic_QMARK__27935)){
return cljs.core.assoc.call(null,G__27912,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__27912;
}
})());


var G__27936 = cljs.core.next.call(null,seq__27893_27926__$1);
var G__27937 = null;
var G__27938 = (0);
var G__27939 = (0);
seq__27893_27913 = G__27936;
chunk__27894_27914 = G__27937;
count__27895_27915 = G__27938;
i__27896_27916 = G__27939;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),keys_spec.call(null,data__$1)], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__27940){
var map__27941 = p__27940;
var map__27941__$1 = (((((!((map__27941 == null))))?(((((map__27941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941):map__27941);
var n = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kind = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"values","values",372645556),data], null));
}

var spec = spec_tools.data_spec.spec.call(null,n,cljs.core.first.call(null,data));
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.coll_of_spec.call(null,spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_.call(null,v)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,v))))){
} else {
throw cljs.core.ex_info.call(null,["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}

return spec_tools.impl.or_spec.call(null,cljs.core.into.call(null,(function (){var iter__4523__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__27943(s__27944){
return (new cljs.core.LazySeq(null,(function (){
var s__27944__$1 = s__27944;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__27944__$1);
if(temp__5735__auto__){
var s__27944__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27944__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__27944__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__27946 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__27945 = (0);
while(true){
if((i__27945 < size__4522__auto__)){
var vec__27947 = cljs.core._nth.call(null,c__4521__auto__,i__27945);
var k = cljs.core.nth.call(null,vec__27947,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__27947,(1),null);
cljs.core.chunk_append.call(null,b__27946,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,spec_tools.data_spec.spec.call(null,spec_tools.data_spec._nested_key.call(null,n,k),v__$1)], null));

var G__27953 = (i__27945 + (1));
i__27945 = G__27953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27946),spec_tools$data_spec$_or_spec_$_iter__27943.call(null,cljs.core.chunk_rest.call(null,s__27944__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27946),null);
}
} else {
var vec__27950 = cljs.core.first.call(null,s__27944__$2);
var k = cljs.core.nth.call(null,vec__27950,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__27950,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,spec_tools.data_spec.spec.call(null,spec_tools.data_spec._nested_key.call(null,n,k),v__$1)], null),spec_tools$data_spec$_or_spec_$_iter__27943.call(null,cljs.core.rest.call(null,s__27944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 *   | `:keys-default`  | Function to generate the keys-specs, default [[keys-specs]].
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__27957 = arguments.length;
switch (G__27957) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__27958){
var map__27959 = p__27958;
var map__27959__$1 = (((((!((map__27959 == null))))?(((((map__27959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27959):map__27959);
var opts = map__27959__$1;
var data = cljs.core.get.call(null,map__27959__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var name = cljs.core.get.call(null,map__27959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var nested_QMARK_ = cljs.core.get.call(null,map__27959__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973));
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"spec","spec",347520401));
var named_spec = ((function (opts__$1,map__27959,map__27959__$1,opts,data,name,nested_QMARK_){
return (function (p1__27954_SHARP_){
return cljs.core.assoc.call(null,p1__27954_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name);
});})(opts__$1,map__27959,map__27959__$1,opts,data,name,nested_QMARK_))
;
var maybe_named_spec = ((function (opts__$1,named_spec,map__27959,map__27959__$1,opts,data,name,nested_QMARK_){
return (function (p1__27955_SHARP_){
var G__27961 = p1__27955_SHARP_;
if(cljs.core.not.call(null,nested_QMARK_)){
return named_spec.call(null,G__27961);
} else {
return G__27961;
}
});})(opts__$1,named_spec,map__27959,map__27959__$1,opts,data,name,nested_QMARK_))
;
var nested_opts = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973),true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_.call(null,data))){
return maybe_named_spec.call(null,data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,data))){
return data;
} else {
if(spec_tools.data_spec.or_QMARK_.call(null,data)){
return spec_tools.data_spec._or_spec.call(null,name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(spec_tools.data_spec.maybe_QMARK_.call(null,data)){
return spec_tools.impl.nilable_spec.call(null,spec_tools.data_spec.spec.call(null,name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_.call(null,data)){
return named_spec.call(null,spec_tools.data_spec._map_spec.call(null,data,nested_opts));
} else {
if(cljs.core.set_QMARK_.call(null,data)){
return maybe_named_spec.call(null,spec_tools.data_spec._coll_spec.call(null,data,cljs.core.assoc.call(null,nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return maybe_named_spec.call(null,spec_tools.data_spec._coll_spec.call(null,data,cljs.core.assoc.call(null,nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec.call(null,spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),data], null)));

}
}
}
}
}
}
}
});

spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"spec","spec",347520401),data], null));
});

spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=data_spec.js.map
