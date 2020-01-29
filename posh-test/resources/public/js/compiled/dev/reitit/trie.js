// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_.call(null,x)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.core.set.call(null,x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,x);

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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10942,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10946 = k10942;
var G__10946__$1 = (((G__10946 instanceof cljs.core.Keyword))?G__10946.fqn:null);
switch (G__10946__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10942,else__4388__auto__);

}
});

reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__10947){
var vec__10948 = p__10947;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10948,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10948,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Wild{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10941){
var self__ = this;
var G__10941__$1 = this;
return (new cljs.core.RecordIter((0),G__10941__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10943,other10944){
var self__ = this;
var this10943__$1 = this;
return (((!((other10944 == null)))) && ((this10943__$1.constructor === other10944.constructor)) && (cljs.core._EQ_.call(null,this10943__$1.value,other10944.value)) && (cljs.core._EQ_.call(null,this10943__$1.__extmap,other10944.__extmap)));
});

reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10941){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10951 = cljs.core.keyword_identical_QMARK_;
var expr__10952 = k__4393__auto__;
if(cljs.core.truth_(pred__10951.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__10952))){
return (new reitit.trie.Wild(G__10941,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10941),null));
}
});

reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10941){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__10941,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

reitit.trie.Wild.cljs$lang$type = true;

reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
});

reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.trie/Wild");
});

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__10945){
var extmap__4424__auto__ = (function (){var G__10954 = cljs.core.dissoc.call(null,G__10945,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__10945)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10954);
} else {
return G__10954;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__10945),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10957,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10961 = k10957;
var G__10961__$1 = (((G__10961 instanceof cljs.core.Keyword))?G__10961.fqn:null);
switch (G__10961__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10957,else__4388__auto__);

}
});

reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__10962){
var vec__10963 = p__10962;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10963,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10963,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10956){
var self__ = this;
var G__10956__$1 = this;
return (new cljs.core.RecordIter((0),G__10956__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10958,other10959){
var self__ = this;
var this10958__$1 = this;
return (((!((other10959 == null)))) && ((this10958__$1.constructor === other10959.constructor)) && (cljs.core._EQ_.call(null,this10958__$1.value,other10959.value)) && (cljs.core._EQ_.call(null,this10958__$1.__extmap,other10959.__extmap)));
});

reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10956){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10966 = cljs.core.keyword_identical_QMARK_;
var expr__10967 = k__4393__auto__;
if(cljs.core.truth_(pred__10966.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__10967))){
return (new reitit.trie.CatchAll(G__10956,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10956),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10956){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__10956,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

reitit.trie.CatchAll.cljs$lang$type = true;

reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
});

reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.trie/CatchAll");
});

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__10960){
var extmap__4424__auto__ = (function (){var G__10969 = cljs.core.dissoc.call(null,G__10960,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__10960)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10969);
} else {
return G__10969;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__10960),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10972,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10976 = k10972;
var G__10976__$1 = (((G__10976 instanceof cljs.core.Keyword))?G__10976.fqn:null);
switch (G__10976__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10972,else__4388__auto__);

}
});

reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__10977){
var vec__10978 = p__10977;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10978,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10978,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Match{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10971){
var self__ = this;
var G__10971__$1 = this;
return (new cljs.core.RecordIter((0),G__10971__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10973,other10974){
var self__ = this;
var this10973__$1 = this;
return (((!((other10974 == null)))) && ((this10973__$1.constructor === other10974.constructor)) && (cljs.core._EQ_.call(null,this10973__$1.params,other10974.params)) && (cljs.core._EQ_.call(null,this10973__$1.data,other10974.data)) && (cljs.core._EQ_.call(null,this10973__$1.__extmap,other10974.__extmap)));
});

reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10971){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10981 = cljs.core.keyword_identical_QMARK_;
var expr__10982 = k__4393__auto__;
if(cljs.core.truth_(pred__10981.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10982))){
return (new reitit.trie.Match(G__10971,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10981.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__10982))){
return (new reitit.trie.Match(self__.params,G__10971,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10971),null));
}
}
});

reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10971){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__10971,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

reitit.trie.Match.cljs$lang$type = true;

reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
});

reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.trie/Match");
});

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__10975){
var extmap__4424__auto__ = (function (){var G__10984 = cljs.core.dissoc.call(null,G__10975,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__10975)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10984);
} else {
return G__10984;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10975),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__10975),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k10987,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__10991 = k10987;
var G__10991__$1 = (((G__10991 instanceof cljs.core.Keyword))?G__10991.fqn:null);
switch (G__10991__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10987,else__4388__auto__);

}
});

reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__10992){
var vec__10993 = p__10992;
var k__4408__auto__ = cljs.core.nth.call(null,vec__10993,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__10993,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Node{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10986){
var self__ = this;
var G__10986__$1 = this;
return (new cljs.core.RecordIter((0),G__10986__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10988,other10989){
var self__ = this;
var this10988__$1 = this;
return (((!((other10989 == null)))) && ((this10988__$1.constructor === other10989.constructor)) && (cljs.core._EQ_.call(null,this10988__$1.children,other10989.children)) && (cljs.core._EQ_.call(null,this10988__$1.wilds,other10989.wilds)) && (cljs.core._EQ_.call(null,this10988__$1.catch_all,other10989.catch_all)) && (cljs.core._EQ_.call(null,this10988__$1.params,other10989.params)) && (cljs.core._EQ_.call(null,this10988__$1.data,other10989.data)) && (cljs.core._EQ_.call(null,this10988__$1.__extmap,other10989.__extmap)));
});

reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__10986){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__10996 = cljs.core.keyword_identical_QMARK_;
var expr__10997 = k__4393__auto__;
if(cljs.core.truth_(pred__10996.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__10997))){
return (new reitit.trie.Node(G__10986,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10996.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__10997))){
return (new reitit.trie.Node(self__.children,G__10986,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10996.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__10997))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__10986,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10996.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10997))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__10986,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10996.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__10997))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__10986,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__10986),null));
}
}
}
}
}
});

reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__10986){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__10986,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

reitit.trie.Node.cljs$lang$type = true;

reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
});

reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.trie/Node");
});

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__10990){
var extmap__4424__auto__ = (function (){var G__10999 = cljs.core.dissoc.call(null,G__10990,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_.call(null,G__10990)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10999);
} else {
return G__10999;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__10990),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__10990),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__10990),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10990),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__10990),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.match[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,i,max,path);
} else {
var m__4431__auto__ = (reitit.trie.match["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,i,max,path);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.match",this$);
}
}
}
});

reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.view[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.trie.view["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.view",this$);
}
}
}
});

reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.depth[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.trie.depth["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.depth",this$);
}
}
}
});

reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.length[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.trie.length["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Matcher.length",this$);
}
}
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,params,data);
} else {
var m__4431__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.data-matcher",this$);
}
}
}
});

reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,path,matcher);
} else {
var m__4431__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,path,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.static-matcher",this$);
}
}
}
});

reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,key,end,matcher);
} else {
var m__4431__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,key,end,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.wild-matcher",this$);
}
}
}
});

reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,key,params,data);
} else {
var m__4431__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,key,params,data);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.catch-all-matcher",this$);
}
}
}
});

reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
var m__4431__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,matchers,ordered_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.linear-matcher",this$);
}
}
}
});

reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie._pretty[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,matcher);
} else {
var m__4431__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-pretty",this$);
}
}
}
});

reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,matcher);
} else {
var m__4431__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,matcher);
} else {
throw cljs.core.missing_protocol.call(null,"TrieCompiler.-path-matcher",this$);
}
}
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.call(null,match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4222__auto__ = cljs.core.count.call(null,s1);
var y__4223__auto__ = cljs.core.count.call(null,s2);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.call(null,s1,(0),max);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,s1,i),cljs.core.get.call(null,s2,i))){
if((!((i === (0))))){
return cljs.core.subs.call(null,s1,(0),i);
} else {
return null;
}
} else {
var G__11001 = (i + (1));
i = G__11001;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5733__auto__ = clojure.string.index_of.call(null,s,"/");
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(0),i),cljs.core.subs.call(null,s,(i + (1))));
} else {
return cljs.core.keyword.call(null,s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__11002){
var map__11003 = p__11002;
var map__11003__$1 = (((((!((map__11003 == null))))?(((((map__11003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11003):map__11003);
var syntax = cljs.core.get.call(null,map__11003__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set.call(null,syntax));
var _static = ((function (bracket_QMARK_,colon_QMARK_,map__11003,map__11003__$1,syntax){
return (function (from,to){
if((!(cljs.core._EQ_.call(null,from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,from,to)], null);
} else {
return null;
}
});})(bracket_QMARK_,colon_QMARK_,map__11003,map__11003__$1,syntax))
;
var _wild = ((function (bracket_QMARK_,colon_QMARK_,_static,map__11003,map__11003__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild.call(null,reitit.trie._keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,map__11003,map__11003__$1,syntax))
;
var _catch_all = ((function (bracket_QMARK_,colon_QMARK_,_static,_wild,map__11003,map__11003__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll.call(null,cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,_wild,map__11003,map__11003__$1,syntax))
;
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.call(null,to,cljs.core.count.call(null,s))){
return cljs.core.concat.call(null,ss,_static.call(null,from,to));
} else {
var c = cljs.core.get.call(null,s,to);
if(cljs.core.truth_((function (){var and__4120__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"{",c);
} else {
return and__4120__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4131__auto__ = clojure.string.index_of.call(null,s,"}",to);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.call(null,"*",cljs.core.get.call(null,s,(to + (1))))){
var G__11005 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,(to + (1)),to_SINGLEQUOTE_));
var G__11006 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__11007 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__11005;
from = G__11006;
to = G__11007;
continue;
} else {
var G__11008 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__11009 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
var G__11010 = cljs.core.long$.call(null,(to_SINGLEQUOTE_ + (1)));
ss = G__11008;
from = G__11009;
to = G__11010;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,":",c);
} else {
return and__4120__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4131__auto__ = clojure.string.index_of.call(null,s,"/",to);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.count.call(null,s);
}
})();
if(cljs.core._EQ_.call(null,(1),(to_SINGLEQUOTE_ - to))){
var G__11011 = ss;
var G__11012 = from;
var G__11013 = (to + (1));
ss = G__11011;
from = G__11012;
to = G__11013;
continue;
} else {
var G__11014 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_wild.call(null,to,to_SINGLEQUOTE_));
var G__11015 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__11016 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__11014;
from = G__11015;
to = G__11016;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,"*",c);
} else {
return and__4120__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count.call(null,s);
var G__11017 = cljs.core.concat.call(null,ss,_static.call(null,from,to),_catch_all.call(null,to,to_SINGLEQUOTE_));
var G__11018 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
var G__11019 = cljs.core.long$.call(null,to_SINGLEQUOTE_);
ss = G__11017;
from = G__11018;
to = G__11019;
continue;
} else {
var G__11020 = ss;
var G__11021 = from;
var G__11022 = (to + (1));
ss = G__11020;
from = G__11021;
to = G__11022;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.call(null,(function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)),(1))),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)),(1))),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path.call(null,reitit.trie.split_path.call(null,s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__11023,p__11024){
var vec__11025 = p__11023;
var p1 = cljs.core.nth.call(null,vec__11025,(0),null);
var p1s = vec__11025;
var vec__11028 = p__11024;
var p2 = cljs.core.nth.call(null,vec__11028,(0),null);
var p2s = vec__11028;
var _split = ((function (vec__11025,p1,p1s,vec__11028,p2,p2s){
return (function (p){
var temp__5733__auto__ = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});})(vec__11025,p1,p1s,vec__11028,p2,p2s))
;
var _slash = ((function (_split,vec__11025,p1,p1s,vec__11028,p2,p2s){
return (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.call(null,cljs.core.count.call(null,cp),cljs.core.count.call(null,p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,cljs.core.count.call(null,cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not.call(null,cp)))){
return _split.call(null,p);
} else {
return null;
}
}
}
});})(_split,vec__11025,p1,p1s,vec__11028,p2,p2s))
;
var _postcut = ((function (_split,_slash,vec__11025,p1,p1s,vec__11028,p2,p2s){
return (function (p__11031){
var vec__11032 = p__11031;
var p = cljs.core.nth.call(null,vec__11032,(0),null);
var pps = vec__11032;
var i = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.call(null,p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = i;
if(cljs.core.truth_(and__4120__auto__)){
return (i > (0));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,p,(0),i),cljs.core.subs.call(null,p,i)], null),cljs.core.rest.call(null,pps));
} else {
return pps;
}
});})(_split,_slash,vec__11025,p1,p1s,vec__11028,p2,p2s))
;
var _tailcut = ((function (_split,_slash,_postcut,vec__11025,p1,p1s,vec__11028,p2,p2s){
return (function (cp,p__11035){
var vec__11036 = p__11035;
var p = cljs.core.nth.call(null,vec__11036,(0),null);
var ps = vec__11036;
return cljs.core.concat.call(null,_slash.call(null,cp,p),cljs.core.rest.call(null,ps));
});})(_split,_slash,_postcut,vec__11025,p1,p1s,vec__11028,p2,p2s))
;
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut.call(null,p1s),_postcut.call(null,p2s)], null);
} else {
var temp__5733__auto__ = (function (){var and__4120__auto__ = typeof p1 === 'string';
if(and__4120__auto__){
var and__4120__auto____$1 = typeof p2 === 'string';
if(and__4120__auto____$1){
return reitit.trie.common_prefix.call(null,p1,p2);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut.call(null,cp,p1s),_tailcut.call(null,cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.call(null,x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
var parts1 = reitit.trie.split_path.call(null,path1,opts);
var parts2 = reitit.trie.split_path.call(null,path2,opts);
while(true){
var vec__11048 = reitit.trie._slice_start.call(null,parts1,parts2);
var vec__11051 = cljs.core.nth.call(null,vec__11048,(0),null);
var seq__11052 = cljs.core.seq.call(null,vec__11051);
var first__11053 = cljs.core.first.call(null,seq__11052);
var seq__11052__$1 = cljs.core.next.call(null,seq__11052);
var s1 = first__11053;
var ss1 = seq__11052__$1;
var vec__11054 = cljs.core.nth.call(null,vec__11048,(1),null);
var seq__11055 = cljs.core.seq.call(null,vec__11054);
var first__11056 = cljs.core.first.call(null,seq__11055);
var seq__11055__$1 = cljs.core.next.call(null,seq__11055);
var s2 = first__11056;
var ss2 = seq__11055__$1;
if(cljs.core._EQ_.call(null,s1,s2,null)){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_.call(null,s1)) || (reitit.trie.catch_all_QMARK_.call(null,s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_.call(null,s1)) || (reitit.trie.wild_QMARK_.call(null,s2)))){
var G__11057 = reitit.trie._slice_end.call(null,s1,ss1);
var G__11058 = reitit.trie._slice_end.call(null,s2,ss2);
parts1 = G__11057;
parts2 = G__11058;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1,s2)){
return false;
} else {
var G__11059 = ss1;
var G__11060 = ss2;
parts1 = G__11059;
parts2 = G__11060;
continue;

}
}
}
}
}
break;
}
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__11061,fp,params,data){
var vec__11062 = p__11061;
var seq__11063 = cljs.core.seq.call(null,vec__11062);
var first__11064 = cljs.core.first.call(null,seq__11063);
var seq__11063__$1 = cljs.core.next.call(null,seq__11063);
var path = first__11064;
var ps = seq__11063__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"params","params",710516235),params):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first.call(null,ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),((function (next,vec__11062,seq__11063,first__11064,seq__11063__$1,path,ps){
return (function (n){
return reitit.trie._insert.call(null,(function (){var or__4131__auto__ = n;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),ps,fp,params,data);
});})(next,vec__11062,seq__11063,first__11064,seq__11063__$1,path,ps))
);
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_.call(null,path))?reitit.trie._insert.call(null,node,ps,fp,params,data):(function (){var or__4131__auto__ = cljs.core.reduce.call(null,((function (vec__11062,seq__11063,first__11064,seq__11063__$1,path,ps){
return (function (_,p__11069){
var vec__11070 = p__11069;
var p = cljs.core.nth.call(null,vec__11070,(0),null);
var n = cljs.core.nth.call(null,vec__11070,(1),null);
var temp__5733__auto__ = reitit.trie.common_prefix.call(null,p,path);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
if(cljs.core._EQ_.call(null,cp,p)){
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,n,cljs.core.conj.call(null,ps,cljs.core.subs.call(null,path,cljs.core.count.call(null,p))),fp,params,data);
return cljs.core.reduced.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.call(null,p,cljs.core.count.call(null,cp));
var rp_SINGLEQUOTE_ = cljs.core.subs.call(null,path,cljs.core.count.call(null,cp));
var n_SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data);
var n_SINGLEQUOTE__SINGLEQUOTE_ = reitit.trie._insert.call(null,reitit.trie._node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null)),null,null,null,null);
return cljs.core.reduced.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982),((function (rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5733__auto__,vec__11070,p,n,vec__11062,seq__11063,first__11064,seq__11063__$1,path,ps){
return (function (children){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
});})(rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5733__auto__,vec__11070,p,n,vec__11062,seq__11063,first__11064,seq__11063__$1,path,ps))
));
}
} else {
return null;
}
});})(vec__11062,seq__11063,first__11064,seq__11063__$1,path,ps))
,null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),reitit.trie._insert.call(null,reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY),ps,fp,params,data));
}
})()
))));
var temp__5733__auto__ = cljs.core.get_in.call(null,node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return cljs.core.update.call(null,cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.dissoc.call(null,node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.call(null,path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie11073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie11073 = (function (meta11074){
this.meta11074 = meta11074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie11073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11075,meta11074__$1){
var self__ = this;
var _11075__$1 = this;
return (new reitit.trie.t_reitit$trie11073(meta11074__$1));
});

reitit.trie.t_reitit$trie11073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11075){
var self__ = this;
var _11075__$1 = this;
return self__.meta11074;
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie11076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie11076 = (function (meta11074,_,params,data,match,meta11077){
this.meta11074 = meta11074;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta11077 = meta11077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie11076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_11078,meta11077__$1){
var self__ = this;
var _11078__$1 = this;
return (new reitit.trie.t_reitit$trie11076(self__.meta11074,self__._,self__.params,self__.data,self__.match,meta11077__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_11078){
var self__ = this;
var _11078__$1 = this;
return self__.meta11077;
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie11076.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.call(null,i,max)){
return self__.match;
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11074","meta11074",-158712777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie11073","reitit.trie/t_reitit$trie11073",-854467679,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta11077","meta11077",-322112284,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie11076.cljs$lang$type = true;

reitit.trie.t_reitit$trie11076.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie11076";

reitit.trie.t_reitit$trie11076.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.trie/t_reitit$trie11076");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie11076.
 */
reitit.trie.__GT_t_reitit$trie11076 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie11076(meta11074__$1,___$2,params__$1,data__$1,match__$1,meta11077){
return (new reitit.trie.t_reitit$trie11076(meta11074__$1,___$2,params__$1,data__$1,match__$1,meta11077));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie11076(self__.meta11074,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count.call(null,path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie11079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie11079 = (function (meta11074,_,path,matcher,size,meta11080){
this.meta11074 = meta11074;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta11080 = meta11080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie11079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (size,___$1){
return (function (_11081,meta11080__$1){
var self__ = this;
var _11081__$1 = this;
return (new reitit.trie.t_reitit$trie11079(self__.meta11074,self__._,self__.path,self__.matcher,self__.size,meta11080__$1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (size,___$1){
return (function (_11081){
var self__ = this;
var _11081__$1 = this;
return self__.meta11080;
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie11079.prototype.reitit$trie$Matcher$match$arity$4 = ((function (size,___$1){
return (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.call(null,j,self__.size)){
return reitit.trie.match.call(null,self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,p,(i + j)),cljs.core.get.call(null,self__.path,j))){
var G__11094 = (j + (1));
j = G__11094;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.prototype.reitit$trie$Matcher$view$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view.call(null,self__.matcher)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.prototype.reitit$trie$Matcher$length$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count.call(null,self__.path);
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.getBasis = ((function (size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11074","meta11074",-158712777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie11073","reitit.trie/t_reitit$trie11073",-854467679,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta11080","meta11080",1579882360,null)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie11079.cljs$lang$type = true;

reitit.trie.t_reitit$trie11079.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie11079";

reitit.trie.t_reitit$trie11079.cljs$lang$ctorPrWriter = ((function (size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.trie/t_reitit$trie11079");
});})(size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie11079.
 */
reitit.trie.__GT_t_reitit$trie11079 = ((function (size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie11079(meta11074__$1,___$2,path__$1,matcher__$1,size__$1,meta11080){
return (new reitit.trie.t_reitit$trie11079(meta11074__$1,___$2,path__$1,matcher__$1,size__$1,meta11080));
});})(size,___$1))
;

}

return (new reitit.trie.t_reitit$trie11079(self__.meta11074,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie11082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie11082 = (function (meta11074,_,key,end,matcher,meta11083){
this.meta11074 = meta11074;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta11083 = meta11083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie11082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11084,meta11083__$1){
var self__ = this;
var _11084__$1 = this;
return (new reitit.trie.t_reitit$trie11082(self__.meta11074,self__._,self__.key,self__.end,self__.matcher,meta11083__$1));
});})(___$1))
;

reitit.trie.t_reitit$trie11082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11084){
var self__ = this;
var _11084__$1 = this;
return self__.meta11083;
});})(___$1))
;

reitit.trie.t_reitit$trie11082.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie11082.prototype.reitit$trie$Matcher$match$arity$4 = ((function (___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.call(null,max,j)){
var temp__5733__auto__ = reitit.trie.match.call(null,self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.call(null,path,j);
var pred__11085 = cljs.core._EQ_;
var expr__11086 = c;
if(cljs.core.truth_(pred__11085.call(null,self__.end,expr__11086))){
var temp__5733__auto__ = reitit.trie.match.call(null,self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param.call(null,match,self__.key,reitit.trie.decode.call(null,path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__11085.call(null,"%",expr__11086))){
var G__11095 = true;
var G__11096 = (j + (1));
percent_QMARK_ = G__11095;
j = G__11096;
continue;
} else {
var G__11097 = percent_QMARK_;
var G__11098 = (j + (1));
percent_QMARK_ = G__11097;
j = G__11098;
continue;
}
}
}
break;
}
} else {
return null;
}
});})(___$1))
;

reitit.trie.t_reitit$trie11082.prototype.reitit$trie$Matcher$view$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view.call(null,self__.matcher)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie11082.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth.call(null,self__.matcher) + (1));
});})(___$1))
;

reitit.trie.t_reitit$trie11082.prototype.reitit$trie$Matcher$length$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(___$1))
;

reitit.trie.t_reitit$trie11082.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11074","meta11074",-158712777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie11073","reitit.trie/t_reitit$trie11073",-854467679,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta11083","meta11083",379750179,null)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie11082.cljs$lang$type = true;

reitit.trie.t_reitit$trie11082.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie11082";

reitit.trie.t_reitit$trie11082.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.trie/t_reitit$trie11082");
});})(___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie11082.
 */
reitit.trie.__GT_t_reitit$trie11082 = ((function (___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie11082(meta11074__$1,___$2,key__$1,end__$1,matcher__$1,meta11083){
return (new reitit.trie.t_reitit$trie11082(meta11074__$1,___$2,key__$1,end__$1,matcher__$1,meta11083));
});})(___$1))
;

}

return (new reitit.trie.t_reitit$trie11082(self__.meta11074,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match.call(null,params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie11088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie11088 = (function (meta11074,_,key,params,data,match,meta11089){
this.meta11074 = meta11074;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta11089 = meta11089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie11088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_11090,meta11089__$1){
var self__ = this;
var _11090__$1 = this;
return (new reitit.trie.t_reitit$trie11088(self__.meta11074,self__._,self__.key,self__.params,self__.data,self__.match,meta11089__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_11090){
var self__ = this;
var _11090__$1 = this;
return self__.meta11089;
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie11088.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param.call(null,self__.match,self__.key,reitit.trie.decode.call(null,path,i,max,true));
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11074","meta11074",-158712777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie11073","reitit.trie/t_reitit$trie11073",-854467679,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta11089","meta11089",1080804279,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie11088.cljs$lang$type = true;

reitit.trie.t_reitit$trie11088.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie11088";

reitit.trie.t_reitit$trie11088.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.trie/t_reitit$trie11088");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie11088.
 */
reitit.trie.__GT_t_reitit$trie11088 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie11088(meta11074__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta11089){
return (new reitit.trie.t_reitit$trie11088(meta11074__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta11089));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie11088(self__.meta11074,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec.call(null,(cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count.call(null,matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie11091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie11091 = (function (meta11074,_,matchers,ordered_QMARK_,size,meta11092){
this.meta11074 = meta11074;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta11092 = meta11092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie11091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matchers__$1,size,___$1){
return (function (_11093,meta11092__$1){
var self__ = this;
var _11093__$1 = this;
return (new reitit.trie.t_reitit$trie11091(self__.meta11074,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta11092__$1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matchers__$1,size,___$1){
return (function (_11093){
var self__ = this;
var _11093__$1 = this;
return self__.meta11092;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie11091.prototype.reitit$trie$Matcher$match$arity$4 = ((function (matchers__$1,size,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4131__auto__ = reitit.trie.match.call(null,cljs.core.get.call(null,self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__11099 = (j + (1));
j = G__11099;
continue;
}
} else {
return null;
}
break;
}
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.prototype.reitit$trie$Matcher$view$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.call(null,reitit.trie.view,self__.matchers);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.call(null,cljs.core.max,(0),cljs.core.map.call(null,reitit.trie.depth,self__.matchers)) + (1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.prototype.reitit$trie$Matcher$length$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.getBasis = ((function (matchers__$1,size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11074","meta11074",-158712777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie11073","reitit.trie/t_reitit$trie11073",-854467679,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta11092","meta11092",811597194,null)], null);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie11091.cljs$lang$type = true;

reitit.trie.t_reitit$trie11091.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie11091";

reitit.trie.t_reitit$trie11091.cljs$lang$ctorPrWriter = ((function (matchers__$1,size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.trie/t_reitit$trie11091");
});})(matchers__$1,size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie11091.
 */
reitit.trie.__GT_t_reitit$trie11091 = ((function (matchers__$1,size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie11091(meta11074__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta11092){
return (new reitit.trie.t_reitit$trie11091(meta11074__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta11092));
});})(matchers__$1,size,___$1))
;

}

return (new reitit.trie.t_reitit$trie11091(self__.meta11074,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view.call(null,matcher);
});

reitit.trie.t_reitit$trie11073.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (path){
var temp__5733__auto__ = reitit.trie.match.call(null,matcher,(0),cljs.core.count.call(null,path),path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.__GT_Match.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
;})(___$1))
});

reitit.trie.t_reitit$trie11073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11074","meta11074",-158712777,null)], null);
});

reitit.trie.t_reitit$trie11073.cljs$lang$type = true;

reitit.trie.t_reitit$trie11073.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie11073";

reitit.trie.t_reitit$trie11073.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.trie/t_reitit$trie11073");
});

/**
 * Positional factory function for reitit.trie/t_reitit$trie11073.
 */
reitit.trie.__GT_t_reitit$trie11073 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie11073(meta11074){
return (new reitit.trie.t_reitit$trie11073(meta11074));
});

}

return (new reitit.trie.t_reitit$trie11073(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap.call(null,keys,cljs.core.repeat.call(null,null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__11101 = arguments.length;
switch (G__11101) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.call(null,null,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.call(null,(function (acc,p__11102){
var vec__11103 = p__11102;
var p = cljs.core.nth.call(null,vec__11103,(0),null);
var d = cljs.core.nth.call(null,vec__11103,(1),null);
return reitit.trie.insert.call(null,acc,p,d);
}),node,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.call(null,node,path,data,null);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__11106){
var map__11107 = p__11106;
var map__11107__$1 = (((((!((map__11107 == null))))?(((((map__11107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11107):map__11107);
var opts = map__11107__$1;
var parameters = cljs.core.get.call(null,map__11107__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path.call(null,path,opts);
var params = parameters.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,parts)));
return reitit.trie._insert.call(null,(function (){var or__4131__auto__ = node;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path.call(null,path,opts),path,params,data);
});

reitit.trie.insert.cljs$lang$maxFixedArity = 4;

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler.call(null);
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__11111 = arguments.length;
switch (G__11111) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.call(null,options,reitit.trie.compiler.call(null));
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.call(null,options,compiler,cljs.core.PersistentVector.EMPTY);
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__11112,compiler,cp){
var map__11113 = p__11112;
var map__11113__$1 = (((((!((map__11113 == null))))?(((((map__11113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11113):map__11113);
var data = cljs.core.get.call(null,map__11113__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.call(null,map__11113__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.call(null,map__11113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.call(null,map__11113__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.call(null,map__11113__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = ((function (map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function (p__11115){
var map__11116 = p__11115;
var map__11116__$1 = (((((!((map__11116 == null))))?(((((map__11116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11116):map__11116);
var children__$1 = cljs.core.get.call(null,map__11116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4131__auto__ = cljs.core.keys.call(null,children__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});})(map__11113,map__11113__$1,data,params,children,wilds,catch_all))
;
var matchers = cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.into.call(null,(function (){var G__11118 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.call(null,G__11118,reitit.trie.data_matcher.call(null,compiler,params,data));
} else {
return G__11118;
}
})(),(function (){var iter__4523__auto__ = ((function (ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__11119(s__11120){
return (new cljs.core.LazySeq(null,((function (ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function (){
var s__11120__$1 = s__11120;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__11120__$1);
if(temp__5735__auto__){
var s__11120__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11120__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__11120__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__11122 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__11121 = (0);
while(true){
if((i__11121 < size__4522__auto__)){
var vec__11123 = cljs.core._nth.call(null,c__4521__auto__,i__11121);
var p = cljs.core.nth.call(null,vec__11123,(0),null);
var c = cljs.core.nth.call(null,vec__11123,(1),null);
cljs.core.chunk_append.call(null,b__11122,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))));

var G__11150 = (i__11121 + (1));
i__11121 = G__11150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11122),reitit$trie$iter__11119.call(null,cljs.core.chunk_rest.call(null,s__11120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11122),null);
}
} else {
var vec__11126 = cljs.core.first.call(null,s__11120__$2);
var p = cljs.core.nth.call(null,vec__11126,(0),null);
var c = cljs.core.nth.call(null,vec__11126,(1),null);
return cljs.core.cons.call(null,reitit.trie.static_matcher.call(null,compiler,p,reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,p))),reitit$trie$iter__11119.call(null,cljs.core.rest.call(null,s__11120__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__.call(null,children);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__11129(s__11130){
return (new cljs.core.LazySeq(null,((function (ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function (){
var s__11130__$1 = s__11130;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__11130__$1);
if(temp__5735__auto__){
var s__11130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11130__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__11130__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__11132 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__11131 = (0);
while(true){
if((i__11131 < size__4522__auto__)){
var vec__11133 = cljs.core._nth.call(null,c__4521__auto__,i__11131);
var p = cljs.core.nth.call(null,vec__11133,(0),null);
var c = cljs.core.nth.call(null,vec__11133,(1),null);
cljs.core.chunk_append.call(null,b__11132,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})());

var G__11151 = (i__11131 + (1));
i__11131 = G__11151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11132),reitit$trie$iter__11129.call(null,cljs.core.chunk_rest.call(null,s__11130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11132),null);
}
} else {
var vec__11136 = cljs.core.first.call(null,s__11130__$2);
var p = cljs.core.nth.call(null,vec__11136,(0),null);
var c = cljs.core.nth.call(null,vec__11136,(1),null);
return cljs.core.cons.call(null,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends.call(null,c);
if(cljs.core.next.call(null,ends__$1)){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path.call(null,cljs.core.conj.call(null,cp,p))], null));
} else {
return reitit.trie.wild_matcher.call(null,compiler,pv,cljs.core.ffirst.call(null,ends__$1),reitit.trie.compile.call(null,c,compiler,cljs.core.conj.call(null,cp,pv)));
}
})(),reitit$trie$iter__11129.call(null,cljs.core.rest.call(null,s__11130__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__.call(null,wilds);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__11139(s__11140){
return (new cljs.core.LazySeq(null,((function (ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all){
return (function (){
var s__11140__$1 = s__11140;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__11140__$1);
if(temp__5735__auto__){
var s__11140__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11140__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__11140__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__11142 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__11141 = (0);
while(true){
if((i__11141 < size__4522__auto__)){
var vec__11143 = cljs.core._nth.call(null,c__4521__auto__,i__11141);
var p = cljs.core.nth.call(null,vec__11143,(0),null);
var c = cljs.core.nth.call(null,vec__11143,(1),null);
cljs.core.chunk_append.call(null,b__11142,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__11152 = (i__11141 + (1));
i__11141 = G__11152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11142),reitit$trie$iter__11139.call(null,cljs.core.chunk_rest.call(null,s__11140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11142),null);
}
} else {
var vec__11146 = cljs.core.first.call(null,s__11140__$2);
var p = cljs.core.nth.call(null,vec__11146,(0),null);
var c = cljs.core.nth.call(null,vec__11146,(1),null);
return cljs.core.cons.call(null,reitit.trie.catch_all_matcher.call(null,compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__11139.call(null,cljs.core.rest.call(null,s__11140__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__11113,map__11113__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__.call(null,catch_all);
})());
if((cljs.core.count.call(null,matchers) > (1))){
return reitit.trie.linear_matcher.call(null,compiler,matchers,false);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matchers),(1))){
return cljs.core.first.call(null,matchers);
} else {
return reitit.trie.data_matcher.call(null,compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
});

reitit.trie.compile.cljs$lang$maxFixedArity = 3;

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__11154 = arguments.length;
switch (G__11154) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.call(null,compiled_trie,reitit.trie.compiler.call(null));
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty.call(null,compiler,compiled_trie);
});

reitit.trie.pretty.cljs$lang$maxFixedArity = 2;

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__11157 = arguments.length;
switch (G__11157) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.call(null,compiled_trie,reitit.trie.compiler.call(null));
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher.call(null,compiler,compiled_trie);
});

reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=trie.js.map
