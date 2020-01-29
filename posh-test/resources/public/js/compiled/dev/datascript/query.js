// Compiled by ClojureScript 1.10.520 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21801,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21805 = k21801;
var G__21805__$1 = (((G__21805 instanceof cljs.core.Keyword))?G__21805.fqn:null);
switch (G__21805__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21801,else__4388__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21806){
var vec__21807 = p__21806;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21807,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21807,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.query.Context{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21800){
var self__ = this;
var G__21800__$1 = this;
return (new cljs.core.RecordIter((0),G__21800__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21802,other21803){
var self__ = this;
var this21802__$1 = this;
return (((!((other21803 == null)))) && ((this21802__$1.constructor === other21803.constructor)) && (cljs.core._EQ_.call(null,this21802__$1.rels,other21803.rels)) && (cljs.core._EQ_.call(null,this21802__$1.sources,other21803.sources)) && (cljs.core._EQ_.call(null,this21802__$1.rules,other21803.rules)) && (cljs.core._EQ_.call(null,this21802__$1.__extmap,other21803.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21800){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21810 = cljs.core.keyword_identical_QMARK_;
var expr__21811 = k__4393__auto__;
if(cljs.core.truth_(pred__21810.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__21811))){
return (new datascript.query.Context(G__21800,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21810.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__21811))){
return (new datascript.query.Context(self__.rels,G__21800,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21810.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__21811))){
return (new datascript.query.Context(self__.rels,self__.sources,G__21800,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21800),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21800){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__21800,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.query/Context");
});

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__21804){
var extmap__4424__auto__ = (function (){var G__21813 = cljs.core.dissoc.call(null,G__21804,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.record_QMARK_.call(null,G__21804)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21813);
} else {
return G__21813;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__21804),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__21804),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__21804),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k21816,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__21820 = k21816;
var G__21820__$1 = (((G__21820 instanceof cljs.core.Keyword))?G__21820.fqn:null);
switch (G__21820__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21816,else__4388__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__21821){
var vec__21822 = p__21821;
var k__4408__auto__ = cljs.core.nth.call(null,vec__21822,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__21822,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#datascript.query.Relation{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21815){
var self__ = this;
var G__21815__$1 = this;
return (new cljs.core.RecordIter((0),G__21815__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21817,other21818){
var self__ = this;
var this21817__$1 = this;
return (((!((other21818 == null)))) && ((this21817__$1.constructor === other21818.constructor)) && (cljs.core._EQ_.call(null,this21817__$1.attrs,other21818.attrs)) && (cljs.core._EQ_.call(null,this21817__$1.tuples,other21818.tuples)) && (cljs.core._EQ_.call(null,this21817__$1.__extmap,other21818.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__21815){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__21825 = cljs.core.keyword_identical_QMARK_;
var expr__21826 = k__4393__auto__;
if(cljs.core.truth_(pred__21825.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__21826))){
return (new datascript.query.Relation(G__21815,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21825.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__21826))){
return (new datascript.query.Relation(self__.attrs,G__21815,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__21815),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__21815){
var self__ = this;
var this__4384__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__21815,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"datascript.query/Relation");
});

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__21819){
var extmap__4424__auto__ = (function (){var G__21828 = cljs.core.dissoc.call(null,G__21819,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core.record_QMARK_.call(null,G__21819)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21828);
} else {
return G__21828;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__21819),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__21819),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next.call(null,coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first.call(null,coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21831 = arguments.length;
var i__4731__auto___21832 = (0);
while(true){
if((i__4731__auto___21832 < len__4730__auto___21831)){
args__4736__auto__.push((arguments[i__4731__auto___21832]));

var G__21833 = (i__4731__auto___21832 + (1));
i__4731__auto___21832 = G__21833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.concatv.cljs$lang$applyTo = (function (seq21830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21830));
});

datascript.query.zip = (function datascript$query$zip(var_args){
var G__21838 = arguments.length;
switch (G__21838) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___21840 = arguments.length;
var i__4731__auto___21841 = (0);
while(true){
if((i__4731__auto___21841 < len__4730__auto___21840)){
args_arr__4751__auto__.push((arguments[i__4731__auto___21841]));

var G__21842 = (i__4731__auto___21841 + (1));
i__4731__auto___21841 = G__21842;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.call(null,cljs.core.vector,a,b);
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,a,b,rest);
});

/** @this {Function} */
datascript.query.zip.cljs$lang$applyTo = (function (seq21835){
var G__21836 = cljs.core.first.call(null,seq21835);
var seq21835__$1 = cljs.core.next.call(null,seq21835);
var G__21837 = cljs.core.first.call(null,seq21835__$1);
var seq21835__$2 = cljs.core.next.call(null,seq21835__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21836,G__21837,seq21835__$2);
});

datascript.query.zip.cljs$lang$maxFixedArity = (2);

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,a),cljs.core.count.call(null,b))) && (cljs.core.every_QMARK_.call(null,(function (p1__21843_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__21843_SHARP_);
}),cljs.core.keys.call(null,a))) && (cljs.core.every_QMARK_.call(null,(function (p1__21844_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__21844_SHARP_);
}),cljs.core.keys.call(null,a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__21849){
var vec__21850 = p__21849;
var pattern_el = cljs.core.nth.call(null,vec__21850,(0),null);
var form_el = cljs.core.nth.call(null,vec__21850,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__21857){
var vec__21858 = p__21857;
var pattern_el = cljs.core.nth.call(null,vec__21858,(0),null);
var form_el = cljs.core.nth.call(null,vec__21858,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form))));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(l1 + l2));
var n__4607__auto___21861 = l1;
var i_21862 = (0);
while(true){
if((i_21862 < n__4607__auto___21861)){
(res[i_21862] = (t1[(idxs1[i_21862])]));

var G__21863 = (i_21862 + (1));
i_21862 = G__21863;
continue;
} else {
}
break;
}

var n__4607__auto___21864 = l2;
var i_21865 = (0);
while(true){
if((i_21865 < n__4607__auto___21864)){
(res[(l1 + i_21865)] = (t2[(idxs2[i_21865])]));

var G__21866 = (i_21865 + (1));
i_21865 = G__21866;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__21867 = a;
var map__21867__$1 = (((((!((map__21867 == null))))?(((((map__21867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21867):map__21867);
var attrs_a = cljs.core.get.call(null,map__21867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__21867__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__21868 = b;
var map__21868__$1 = (((((!((map__21868 == null))))?(((((map__21868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21868):map__21868);
var attrs_b = cljs.core.get.call(null,map__21868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__21868__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.call(null,attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.call(null,cljs.core.vec.call(null,tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_.call(null,attrs_a,attrs_b)))){
throw cljs.core.ex_info.call(null,["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.call(null,attrs_a)," and ",cljs.core.pr_str.call(null,attrs_b)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,cljs.core.vals.call(null,attrs_a))){
var idxb__GT_idxa = cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (map__21867,map__21867__$1,attrs_a,tuples_a,map__21868,map__21868__$1,attrs_b,tuples_b){
return (function datascript$query$sum_rel_$_iter__21871(s__21872){
return (new cljs.core.LazySeq(null,((function (map__21867,map__21867__$1,attrs_a,tuples_a,map__21868,map__21868__$1,attrs_b,tuples_b){
return (function (){
var s__21872__$1 = s__21872;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21872__$1);
if(temp__5735__auto__){
var s__21872__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21872__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21872__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21874 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21873 = (0);
while(true){
if((i__21873 < size__4522__auto__)){
var vec__21875 = cljs.core._nth.call(null,c__4521__auto__,i__21873);
var sym = cljs.core.nth.call(null,vec__21875,(0),null);
var idx_b = cljs.core.nth.call(null,vec__21875,(1),null);
cljs.core.chunk_append.call(null,b__21874,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null));

var G__21897 = (i__21873 + (1));
i__21873 = G__21897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21874),datascript$query$sum_rel_$_iter__21871.call(null,cljs.core.chunk_rest.call(null,s__21872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21874),null);
}
} else {
var vec__21878 = cljs.core.first.call(null,s__21872__$2);
var sym = cljs.core.nth.call(null,vec__21878,(0),null);
var idx_b = cljs.core.nth.call(null,vec__21878,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null),datascript$query$sum_rel_$_iter__21871.call(null,cljs.core.rest.call(null,s__21872__$2)));
}
} else {
return null;
}
break;
}
});})(map__21867,map__21867__$1,attrs_a,tuples_a,map__21868,map__21868__$1,attrs_b,tuples_b))
,null,null));
});})(map__21867,map__21867__$1,attrs_a,tuples_a,map__21868,map__21868__$1,attrs_b,tuples_b))
;
return iter__4523__auto__.call(null,attrs_b);
})());
var tlen = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (idxb__GT_idxa,tlen,map__21867,map__21867__$1,attrs_a,tuples_a,map__21868,map__21868__$1,attrs_b,tuples_b){
return (function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,tlen);
var seq__21881_21898 = cljs.core.seq.call(null,idxb__GT_idxa);
var chunk__21882_21899 = null;
var count__21883_21900 = (0);
var i__21884_21901 = (0);
while(true){
if((i__21884_21901 < count__21883_21900)){
var vec__21891_21902 = cljs.core._nth.call(null,chunk__21882_21899,i__21884_21901);
var idx_b_21903 = cljs.core.nth.call(null,vec__21891_21902,(0),null);
var idx_a_21904 = cljs.core.nth.call(null,vec__21891_21902,(1),null);
(tuple_SINGLEQUOTE_[idx_a_21904] = (tuple_b[idx_b_21903]));


var G__21905 = seq__21881_21898;
var G__21906 = chunk__21882_21899;
var G__21907 = count__21883_21900;
var G__21908 = (i__21884_21901 + (1));
seq__21881_21898 = G__21905;
chunk__21882_21899 = G__21906;
count__21883_21900 = G__21907;
i__21884_21901 = G__21908;
continue;
} else {
var temp__5735__auto___21909 = cljs.core.seq.call(null,seq__21881_21898);
if(temp__5735__auto___21909){
var seq__21881_21910__$1 = temp__5735__auto___21909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21881_21910__$1)){
var c__4550__auto___21911 = cljs.core.chunk_first.call(null,seq__21881_21910__$1);
var G__21912 = cljs.core.chunk_rest.call(null,seq__21881_21910__$1);
var G__21913 = c__4550__auto___21911;
var G__21914 = cljs.core.count.call(null,c__4550__auto___21911);
var G__21915 = (0);
seq__21881_21898 = G__21912;
chunk__21882_21899 = G__21913;
count__21883_21900 = G__21914;
i__21884_21901 = G__21915;
continue;
} else {
var vec__21894_21916 = cljs.core.first.call(null,seq__21881_21910__$1);
var idx_b_21917 = cljs.core.nth.call(null,vec__21894_21916,(0),null);
var idx_a_21918 = cljs.core.nth.call(null,vec__21894_21916,(1),null);
(tuple_SINGLEQUOTE_[idx_a_21918] = (tuple_b[idx_b_21917]));


var G__21919 = cljs.core.next.call(null,seq__21881_21910__$1);
var G__21920 = null;
var G__21921 = (0);
var G__21922 = (0);
seq__21881_21898 = G__21919;
chunk__21882_21899 = G__21920;
count__21883_21900 = G__21921;
i__21884_21901 = G__21922;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.call(null,acc,tuple_SINGLEQUOTE_);
});})(idxb__GT_idxa,tlen,map__21867,map__21867__$1,attrs_a,tuples_a,map__21868,map__21868__$1,attrs_b,tuples_b))
,cljs.core.transient$.call(null,cljs.core.vec.call(null,tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.core.merge.call(null,attrs_a,attrs_b)),cljs.core.range.call(null));
return datascript.query.sum_rel.call(null,datascript.query.sum_rel.call(null,(new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null)),a),b);

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__21924 = arguments.length;
switch (G__21924) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21927 = arguments.length;
var i__4731__auto___21928 = (0);
while(true){
if((i__4731__auto___21928 < len__4730__auto___21927)){
args__4736__auto__.push((arguments[i__4731__auto___21928]));

var G__21929 = (i__4731__auto___21928 + (1));
i__4731__auto___21928 = G__21929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq21926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21926));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.call(null,"get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5737__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5737__auto__ == null)){
return else_val;
} else {
var datom = temp__5737__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21933 = arguments.length;
var i__4731__auto___21934 = (0);
while(true){
if((i__4731__auto___21934 < len__4730__auto___21933)){
args__4736__auto__.push((arguments[i__4731__auto___21934]));

var G__21935 = (i__4731__auto___21934 + (1));
i__4731__auto___21934 = G__21935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__5739__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var datom = temp__5739__auto__;
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
datascript.query._get_some.cljs$lang$applyTo = (function (seq21930){
var G__21931 = cljs.core.first.call(null,seq21930);
var seq21930__$1 = cljs.core.next.call(null,seq21930);
var G__21932 = cljs.core.first.call(null,seq21930__$1);
var seq21930__$2 = cljs.core.next.call(null,seq21930__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21931,G__21932,seq21930__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21937 = arguments.length;
var i__4731__auto___21938 = (0);
while(true){
if((i__4731__auto___21938 < len__4730__auto___21937)){
args__4736__auto__.push((arguments[i__4731__auto___21938]));

var G__21939 = (i__4731__auto___21938 + (1));
i__4731__auto___21938 = G__21939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced.call(null,b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.and_fn.cljs$lang$applyTo = (function (seq21936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21936));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21941 = arguments.length;
var i__4731__auto___21942 = (0);
while(true){
if((i__4731__auto___21942 < len__4730__auto___21941)){
args__4736__auto__.push((arguments[i__4731__auto___21942]));

var G__21943 = (i__4731__auto___21942 + (1));
i__4731__auto___21942 = G__21943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced.call(null,b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.or_fn.cljs$lang$applyTo = (function (seq21940){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21940));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__21949 = cljs.core.nth.call(null,terms,med);
if(cljs.core.even_QMARK_.call(null,size)){
return ((G__21949 + cljs.core.nth.call(null,terms,(med - (1)))) / (2));
} else {
return G__21949;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__4523__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__21950(s__21951){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__21951__$1 = s__21951;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21951__$1);
if(temp__5735__auto__){
var s__21951__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21951__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21951__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21953 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21952 = (0);
while(true){
if((i__21952 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__21952);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__21953,(delta * delta));

var G__21954 = (i__21952 + (1));
i__21952 = G__21954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21953),datascript$query$variance_$_iter__21950.call(null,cljs.core.chunk_rest.call(null,s__21951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21953),null);
}
} else {
var x = cljs.core.first.call(null,s__21951__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__21950.call(null,cljs.core.rest.call(null,s__21951__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__4523__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__21955 = null;
var G__21955__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__21955__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__21955 = function(n,coll){
switch(arguments.length){
case 1:
return G__21955__1.call(this,n);
case 2:
return G__21955__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21955.cljs$core$IFn$_invoke$arity$1 = G__21955__1;
G__21955.cljs$core$IFn$_invoke$arity$2 = G__21955__2;
return G__21955;
})()
,(function() {
var G__21956 = null;
var G__21956__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__21956__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__21956 = function(n,coll){
switch(arguments.length){
case 1:
return G__21956__1.call(this,n);
case 2:
return G__21956__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21956.cljs$core$IFn$_invoke$arity$1 = G__21956__1;
G__21956.cljs$core$IFn$_invoke$arity$2 = G__21956__2;
return G__21956;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.set,avg,stddev,(function() {
var G__21957 = null;
var G__21957__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__21957__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__21957 = function(n,coll){
switch(arguments.length){
case 1:
return G__21957__1.call(this,n);
case 2:
return G__21957__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21957.cljs$core$IFn$_invoke$arity$1 = G__21957__1;
G__21957.cljs$core$IFn$_invoke$arity$2 = G__21957__2;
return G__21957;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct.call(null,binding));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4433__auto__ = (((binding == null))?null:binding);
var m__4434__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,binding,value);
} else {
var m__4431__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,binding,value);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.call(null);
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.call(null,binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.pr_str.call(null,coll)," to collection ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datascript.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__21958_SHARP_){
return datascript.query.in__GT_rel.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(binding__$1),p1__21958_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_.call(null,coll)))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.pr_str.call(null,coll)," to tuple ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.call(null,["Not enough elements in a collection ",cljs.core.pr_str.call(null,coll)," to bind tuple ",cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__21959_SHARP_,p2__21960_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__21959_SHARP_,p2__21960_SHARP_);
});})(binding__$1))
,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__21961){
var vec__21962 = p__21961;
var binding = cljs.core.nth.call(null,vec__21962,(0),null);
var value = cljs.core.nth.call(null,vec__21962,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.call(null,binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel.call(null,binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.call(null,datascript.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if(cljs.core.contains_QMARK_.call(null,datascript.query._STAR_lookup_attrs_STAR_,attr)){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map(((function (getters__$1){
return (function (p1__21965_SHARP_){
return p1__21965_SHARP_.call(null,tuple);
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5737__auto__ = cljs.core.first.call(null,tuples__$1);
if((temp__5737__auto__ == null)){
return cljs.core.persistent_BANG_.call(null,hash_table);
} else {
var tuple = temp__5737__auto__;
var key = key_fn.call(null,tuple);
var G__21967 = cljs.core.next.call(null,tuples__$1);
var G__21968 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__21967;
hash_table = G__21968;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__21969_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__21969_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__21970_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__21970_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datascript.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__5737__auto__ = cljs.core.get.call(null,hash,key);
if((temp__5737__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5737__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__5737__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__5737__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__21974 = a;
var map__21974__$1 = (((((!((map__21974 == null))))?(((((map__21974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21974):map__21974);
var attrs_a = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__21974__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__21975 = b;
var map__21975__$1 = (((((!((map__21975 == null))))?(((((map__21975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21975):map__21975);
var attrs_b = cljs.core.get.call(null,map__21975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__21975__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys.call(null,attrs_a,attrs_b);
var getters_b = cljs.core.map.call(null,((function (map__21974,map__21974__$1,attrs_a,tuples_a,map__21975,map__21975__$1,attrs_b,tuples_b,attrs){
return (function (p1__21971_SHARP_){
return datascript.query.getter_fn.call(null,attrs_b,p1__21971_SHARP_);
});})(map__21974,map__21974__$1,attrs_a,tuples_a,map__21975,map__21975__$1,attrs_b,tuples_b,attrs))
,attrs);
var key_fn_b = datascript.query.tuple_key_fn.call(null,getters_b);
var hash = datascript.query.hash_attrs.call(null,key_fn_b,tuples_b);
var getters_a = cljs.core.map.call(null,((function (map__21974,map__21974__$1,attrs_a,tuples_a,map__21975,map__21975__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash){
return (function (p1__21972_SHARP_){
return datascript.query.getter_fn.call(null,attrs_a,p1__21972_SHARP_);
});})(map__21974,map__21974__$1,attrs_a,tuples_a,map__21975,map__21975__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash))
,attrs);
var key_fn_a = datascript.query.tuple_key_fn.call(null,getters_a);
return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv.call(null,((function (map__21974,map__21974__$1,attrs_a,tuples_a,map__21975,map__21975__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a){
return (function (p1__21973_SHARP_){
return (hash.call(null,key_fn_a.call(null,p1__21973_SHARP_)) == null);
});})(map__21974,map__21974__$1,attrs_a,tuples_a,map__21975,map__21975__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a))
,tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__21978_SHARP_){
if((p1__21978_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__21978_SHARP_;
}
}),pattern);
var datoms = datascript.db._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__21979){
var vec__21980 = p__21979;
var s = cljs.core.nth.call(null,vec__21980,(0),null);
var _ = cljs.core.nth.call(null,vec__21980,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = tuple__$1;
if(cljs.core.truth_(and__4120__auto__)){
return pattern__$1;
} else {
return and__4120__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p)))){
var G__21983 = cljs.core.next.call(null,tuple__$1);
var G__21984 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__21983;
pattern__$1 = G__21984;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__21985_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__21985_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__21986){
var vec__21987 = p__21986;
var s = cljs.core.nth.call(null,vec__21987,(0),null);
var _ = cljs.core.nth.call(null,vec__21987,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5737__auto__ = cljs.core.first.call(null,rels__$1);
if((temp__5737__auto__ == null)){
return cljs.core.conj.call(null,acc,new_rel__$1);
} else {
var rel = temp__5737__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__21991 = cljs.core.next.call(null,rels__$1);
var G__21992 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__21993 = acc;
rels__$1 = G__21991;
new_rel__$1 = G__21992;
acc = G__21993;
continue;
} else {
var G__21994 = cljs.core.next.call(null,rels__$1);
var G__21995 = new_rel__$1;
var G__21996 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__21994;
new_rel__$1 = G__21995;
acc = G__21996;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some.call(null,(function (p1__21997_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__21997_SHARP_),sym)){
return p1__21997_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5739__auto__ = datascript.query.rel_with_attr.call(null,context,sym);
if((temp__5739__auto__ == null)){
return null;
} else {
var rel = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5739__auto____$1 == null)){
return null;
} else {
var tuple = temp__5739__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some.call(null,(function (p1__21998_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__21998_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__21999_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__21999_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (rels,production){
return (function (p1__22000_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__22000_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count.call(null,args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var n__4607__auto___22001 = len;
var i_22002 = (0);
while(true){
if((i_22002 < n__4607__auto___22001)){
var arg_22003 = cljs.core.nth.call(null,args,i_22002);
if((arg_22003 instanceof cljs.core.Symbol)){
var temp__5737__auto___22004 = cljs.core.get.call(null,sources,arg_22003);
if((temp__5737__auto___22004 == null)){
(tuples_args[i_22002] = cljs.core.get.call(null,attrs,arg_22003));
} else {
var source_22005 = temp__5737__auto___22004;
(static_args[i_22002] = source_22005);
}
} else {
(static_args[i_22002] = arg_22003);
}

var G__22006 = (i_22002 + (1));
i_22002 = G__22006;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone.call(null,static_args);
var n__4607__auto___22007 = len;
var i_22008 = (0);
while(true){
if((i_22008 < n__4607__auto___22007)){
var temp__5739__auto___22009 = (tuples_args[i_22008]);
if((temp__5739__auto___22009 == null)){
} else {
var tuple_idx_22010 = temp__5739__auto___22009;
var v_22011 = (tuple[tuple_idx_22010]);
(args__$1[i_22008] = v_22011);
}

var G__22012 = (i_22008 + (1));
i_22008 = G__22012;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,args__$1);
});
;})(sources,attrs,len,static_args,tuples_args))
} else {
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__4607__auto___22013 = len;
var i_22014 = (0);
while(true){
if((i_22014 < n__4607__auto___22013)){
var temp__5739__auto___22015 = (tuples_args[i_22014]);
if((temp__5739__auto___22015 == null)){
} else {
var tuple_idx_22016 = temp__5739__auto___22015;
var v_22017 = (tuple[tuple_idx_22016]);
(static_args[i_22014] = v_22017);
}

var G__22018 = (i_22014 + (1));
i_22014 = G__22018;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__22020 = clause;
var vec__22023 = cljs.core.nth.call(null,vec__22020,(0),null);
var seq__22024 = cljs.core.seq.call(null,vec__22023);
var first__22025 = cljs.core.first.call(null,seq__22024);
var seq__22024__$1 = cljs.core.next.call(null,seq__22024);
var f = first__22025;
var args = seq__22024__$1;
var pred = (function (){var or__4131__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown predicate '",cljs.core.pr_str.call(null,f)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__22026 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__22026,(0),null);
var production = cljs.core.nth.call(null,vec__22026,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),((function (tuple_pred,vec__22020,vec__22023,seq__22024,first__22025,seq__22024__$1,f,args,pred,vec__22026,context__$1,production){
return (function (p1__22019_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__22019_SHARP_);
});})(tuple_pred,vec__22020,vec__22023,seq__22024,first__22025,seq__22024__$1,f,args,pred,vec__22026,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__22029 = clause;
var vec__22032 = cljs.core.nth.call(null,vec__22029,(0),null);
var seq__22033 = cljs.core.seq.call(null,vec__22032);
var first__22034 = cljs.core.first.call(null,seq__22033);
var seq__22033__$1 = cljs.core.next.call(null,seq__22033);
var f = first__22034;
var args = seq__22033__$1;
var out = cljs.core.nth.call(null,vec__22029,(1),null);
var binding = datascript.parser.parse_binding.call(null,out);
var fun = (function (){var or__4131__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown function '",cljs.core.pr_str.call(null,f)," in ",cljs.core.pr_str.call(null,clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__22035 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__22035,(0),null);
var production = cljs.core.nth.call(null,vec__22035,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var rels = (function (){var iter__4523__auto__ = ((function (tuple_fn,vec__22029,vec__22032,seq__22033,first__22034,seq__22033__$1,f,args,out,binding,fun,vec__22035,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__22038(s__22039){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__22029,vec__22032,seq__22033,first__22034,seq__22033__$1,f,args,out,binding,fun,vec__22035,context__$1,production){
return (function (){
var s__22039__$1 = s__22039;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22039__$1);
if(temp__5735__auto__){
var s__22039__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22039__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22039__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22041 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22040 = (0);
while(true){
if((i__22040 < size__4522__auto__)){
var tuple = cljs.core._nth.call(null,c__4521__auto__,i__22040);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
cljs.core.chunk_append.call(null,b__22041,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)));

var G__22042 = (i__22040 + (1));
i__22040 = G__22042;
continue;
} else {
var G__22043 = (i__22040 + (1));
i__22040 = G__22043;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22041),datascript$query$bind_by_fn_$_iter__22038.call(null,cljs.core.chunk_rest.call(null,s__22039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22041),null);
}
} else {
var tuple = cljs.core.first.call(null,s__22039__$2);
var val = tuple_fn.call(null,tuple);
if((!((val == null)))){
return cljs.core.cons.call(null,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)),datascript$query$bind_by_fn_$_iter__22038.call(null,cljs.core.rest.call(null,s__22039__$2)));
} else {
var G__22044 = cljs.core.rest.call(null,s__22039__$2);
s__22039__$1 = G__22044;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__22029,vec__22032,seq__22033,first__22034,seq__22033__$1,f,args,out,binding,fun,vec__22035,context__$1,production))
,null,null));
});})(tuple_fn,vec__22029,vec__22032,seq__22033,first__22034,seq__22033__$1,f,args,out,binding,fun,vec__22035,context__$1,production))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_.call(null,rels)){
return datascript.query.prod_rel.call(null,production,datascript.query.empty_rel.call(null,binding));
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel.call(null,binding)));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__22046 = clause;
var seq__22047 = cljs.core.seq.call(null,vec__22046);
var first__22048 = cljs.core.first.call(null,seq__22047);
var seq__22047__$1 = cljs.core.next.call(null,seq__22047);
var rule = first__22048;
var call_args = seq__22047__$1;
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4523__auto__ = ((function (vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__22049(s__22050){
return (new cljs.core.LazySeq(null,((function (vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches){
return (function (){
var s__22050__$1 = s__22050;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22050__$1);
if(temp__5735__auto__){
var s__22050__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22050__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22050__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22052 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22051 = (0);
while(true){
if((i__22051 < size__4522__auto__)){
var branch = cljs.core._nth.call(null,c__4521__auto__,i__22051);
var vec__22053 = branch;
var seq__22054 = cljs.core.seq.call(null,vec__22053);
var first__22055 = cljs.core.first.call(null,seq__22054);
var seq__22054__$1 = cljs.core.next.call(null,seq__22054);
var vec__22056 = first__22055;
var seq__22057 = cljs.core.seq.call(null,vec__22056);
var first__22058 = cljs.core.first.call(null,seq__22057);
var seq__22057__$1 = cljs.core.next.call(null,seq__22057);
var _ = first__22058;
var rule_args = seq__22057__$1;
var clauses = seq__22054__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__22052,clojure.walk.postwalk.call(null,((function (i__22051,vec__22053,seq__22054,first__22055,seq__22054__$1,vec__22056,seq__22057,first__22058,seq__22057__$1,_,rule_args,clauses,replacements,branch,c__4521__auto__,size__4522__auto__,b__22052,s__22050__$2,temp__5735__auto__,vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches){
return (function (p1__22045_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__22045_SHARP_)){
var x__18622__auto__ = replacements.call(null,p1__22045_SHARP_);
if((x__18622__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__22045_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__18622__auto__;
}
} else {
return p1__22045_SHARP_;
}
});})(i__22051,vec__22053,seq__22054,first__22055,seq__22054__$1,vec__22056,seq__22057,first__22058,seq__22057__$1,_,rule_args,clauses,replacements,branch,c__4521__auto__,size__4522__auto__,b__22052,s__22050__$2,temp__5735__auto__,vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches))
,clauses));

var G__22065 = (i__22051 + (1));
i__22051 = G__22065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22052),datascript$query$expand_rule_$_iter__22049.call(null,cljs.core.chunk_rest.call(null,s__22050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22052),null);
}
} else {
var branch = cljs.core.first.call(null,s__22050__$2);
var vec__22059 = branch;
var seq__22060 = cljs.core.seq.call(null,vec__22059);
var first__22061 = cljs.core.first.call(null,seq__22060);
var seq__22060__$1 = cljs.core.next.call(null,seq__22060);
var vec__22062 = first__22061;
var seq__22063 = cljs.core.seq.call(null,vec__22062);
var first__22064 = cljs.core.first.call(null,seq__22063);
var seq__22063__$1 = cljs.core.next.call(null,seq__22063);
var _ = first__22064;
var rule_args = seq__22063__$1;
var clauses = seq__22060__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__22059,seq__22060,first__22061,seq__22060__$1,vec__22062,seq__22063,first__22064,seq__22063__$1,_,rule_args,clauses,replacements,branch,s__22050__$2,temp__5735__auto__,vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches){
return (function (p1__22045_SHARP_){
if(datascript.query.free_var_QMARK_.call(null,p1__22045_SHARP_)){
var x__18622__auto__ = replacements.call(null,p1__22045_SHARP_);
if((x__18622__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,p1__22045_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__18622__auto__;
}
} else {
return p1__22045_SHARP_;
}
});})(vec__22059,seq__22060,first__22061,seq__22060__$1,vec__22062,seq__22063,first__22064,seq__22063__$1,_,rule_args,clauses,replacements,branch,s__22050__$2,temp__5735__auto__,vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__22049.call(null,cljs.core.rest.call(null,s__22050__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__22046,seq__22047,first__22048,seq__22047__$1,rule,call_args,seqid,branches))
;
return iter__4523__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__22066){
var vec__22067 = p__22066;
var x = cljs.core.nth.call(null,vec__22067,(0),null);
var y = cljs.core.nth.call(null,vec__22067,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__22070 = rule_clause;
var seq__22071 = cljs.core.seq.call(null,vec__22070);
var first__22072 = cljs.core.first.call(null,seq__22071);
var seq__22071__$1 = cljs.core.next.call(null,seq__22071);
var rule = first__22072;
var call_args = seq__22071__$1;
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__4523__auto__ = ((function (vec__22070,seq__22071,first__22072,seq__22071__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__22073(s__22074){
return (new cljs.core.LazySeq(null,((function (vec__22070,seq__22071,first__22072,seq__22071__$1,rule,call_args,prev_call_args){
return (function (){
var s__22074__$1 = s__22074;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22074__$1);
if(temp__5735__auto__){
var s__22074__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22074__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22074__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22076 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22075 = (0);
while(true){
if((i__22075 < size__4522__auto__)){
var prev_args = cljs.core._nth.call(null,c__4521__auto__,i__22075);
var vec__22077 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__22077,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__22077,(1),null);
cljs.core.chunk_append.call(null,b__22076,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__22083 = (i__22075 + (1));
i__22075 = G__22083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22076),datascript$query$rule_gen_guards_$_iter__22073.call(null,cljs.core.chunk_rest.call(null,s__22074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22076),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__22074__$2);
var vec__22080 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__22080,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__22080,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__22073.call(null,cljs.core.rest.call(null,s__22074__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22070,seq__22071,first__22072,seq__22071__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__22070,seq__22071,first__22072,seq__22071__$1,rule,call_args,prev_call_args))
;
return iter__4523__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__22084_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__22084_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__22084_SHARP_);
} else {
}

return p1__22084_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set.call(null,datascript.query.walk_collect.call(null,clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars.call(null,clauses);
var pred = ((function (bound_vars){
return (function (p__22085){
var vec__22086 = p__22085;
var vec__22089 = cljs.core.nth.call(null,vec__22086,(0),null);
var seq__22090 = cljs.core.seq.call(null,vec__22089);
var first__22091 = cljs.core.first.call(null,seq__22090);
var seq__22090__$1 = cljs.core.next.call(null,seq__22090);
var _ = first__22091;
var vars = seq__22090__$1;
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__22092_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__22092_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5737__auto__ = cljs.core.first.call(null,stack);
if((temp__5737__auto__ == null)){
return rel;
} else {
var frame = temp__5737__auto__;
var vec__22111 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__22093_SHARP_){
return (!(datascript.query.rule_QMARK_.call(null,context,p1__22093_SHARP_)));
});})(stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__22111,(0),null);
var vec__22114 = cljs.core.nth.call(null,vec__22111,(1),null);
var seq__22115 = cljs.core.seq.call(null,vec__22114);
var first__22116 = cljs.core.first.call(null,seq__22115);
var seq__22115__$1 = cljs.core.next.call(null,seq__22115);
var rule_clause = first__22116;
var next_clauses = seq__22115__$1;
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__22127 = cljs.core.next.call(null,stack);
var G__22128 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__22127;
rel = G__22128;
continue;
} else {
var vec__22117 = rule_clause;
var seq__22118 = cljs.core.seq.call(null,vec__22117);
var first__22119 = cljs.core.first.call(null,seq__22118);
var seq__22118__$1 = cljs.core.next.call(null,seq__22118);
var rule = first__22119;
var call_args = seq__22118__$1;
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__22120 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__22120,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__22120,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__22117,seq__22118,first__22119,seq__22118__$1,rule,call_args,guards,vec__22120,active_gs,pending_gs,vec__22111,clauses,vec__22114,seq__22115,first__22116,seq__22115__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__22094_SHARP_){
return cljs.core._EQ_.call(null,p1__22094_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__22117,seq__22118,first__22119,seq__22118__$1,rule,call_args,guards,vec__22120,active_gs,pending_gs,vec__22111,clauses,vec__22114,seq__22115,first__22116,seq__22115__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__22129 = cljs.core.next.call(null,stack);
var G__22130 = rel;
stack = G__22129;
rel = G__22130;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__22131 = cljs.core.next.call(null,stack);
var G__22132 = rel;
stack = G__22131;
rel = G__22132;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__22133 = cljs.core.concat.call(null,(function (){var iter__4523__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22117,seq__22118,first__22119,seq__22118__$1,rule,call_args,guards,vec__22120,active_gs,pending_gs,vec__22111,clauses,vec__22114,seq__22115,first__22116,seq__22115__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__22123(s__22124){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22117,seq__22118,first__22119,seq__22118__$1,rule,call_args,guards,vec__22120,active_gs,pending_gs,vec__22111,clauses,vec__22114,seq__22115,first__22116,seq__22115__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__22124__$1 = s__22124;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22124__$1);
if(temp__5735__auto__){
var s__22124__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22124__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22124__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22126 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22125 = (0);
while(true){
if((i__22125 < size__4522__auto__)){
var branch = cljs.core._nth.call(null,c__4521__auto__,i__22125);
cljs.core.chunk_append.call(null,b__22126,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__22135 = (i__22125 + (1));
i__22125 = G__22135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22126),datascript$query$solve_rule_$_iter__22123.call(null,cljs.core.chunk_rest.call(null,s__22124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22126),null);
}
} else {
var branch = cljs.core.first.call(null,s__22124__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__22123.call(null,cljs.core.rest.call(null,s__22124__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22117,seq__22118,first__22119,seq__22118__$1,rule,call_args,guards,vec__22120,active_gs,pending_gs,vec__22111,clauses,vec__22114,seq__22115,first__22116,seq__22115__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22117,seq__22118,first__22119,seq__22118__$1,rule,call_args,guards,vec__22120,active_gs,pending_gs,vec__22111,clauses,vec__22114,seq__22115,first__22116,seq__22115__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4523__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__22134 = rel;
stack = G__22133;
rel = G__22134;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source))){
var vec__22137 = pattern;
var e = cljs.core.nth.call(null,vec__22137,(0),null);
var a = cljs.core.nth.call(null,vec__22137,(1),null);
var v = cljs.core.nth.call(null,vec__22137,(2),null);
var tx = cljs.core.nth.call(null,vec__22137,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4131__auto__ = datascript.query.lookup_ref_QMARK_.call(null,e);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,e);
}
})())?datascript.db.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = datascript.query.attr_QMARK_.call(null,a);
if(and__4120__auto____$1){
var and__4120__auto____$2 = datascript.db.ref_QMARK_.call(null,source,a);
if(and__4120__auto____$2){
var or__4131__auto__ = datascript.query.lookup_ref_QMARK_.call(null,v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,v);
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?datascript.db.entid_strict.call(null,source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,tx))?datascript.db.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__22140 = pattern;
var e = cljs.core.nth.call(null,vec__22140,(0),null);
var a = cljs.core.nth.call(null,vec__22140,(1),null);
var v = cljs.core.nth.call(null,vec__22140,(2),null);
var tx = cljs.core.nth.call(null,vec__22140,(3),null);
var G__22143 = cljs.core.PersistentHashSet.EMPTY;
var G__22143__$1 = ((datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__22143,e):G__22143);
var G__22143__$2 = ((datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__22143__$1,tx):G__22143__$1);
if(((datascript.query.free_var_QMARK_.call(null,v)) && ((!(datascript.query.free_var_QMARK_.call(null,a)))) && (datascript.db.ref_QMARK_.call(null,source,a)))){
return cljs.core.conj.call(null,G__22143__$2,v);
} else {
return G__22143__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5739__auto__ = cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5739__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5739__auto__;
return cljs.core.assoc.call(null,rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.call(null,(function (p1__22144_SHARP_){
return datascript.query.limit_rel.call(null,p1__22144_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__22145_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__22145_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
if(clojure.set.subset_QMARK_.call(null,vars,bound)){
return null;
} else {
var missing = clojure.set.difference.call(null,cljs.core.set.call(null,vars),bound);
throw cljs.core.ex_info.call(null,["Insufficient bindings: ",cljs.core.pr_str.call(null,missing)," not bound in ",cljs.core.pr_str.call(null,form)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__22152 = arguments.length;
switch (G__22152) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.call(null,context,clause,clause);
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__22153 = datascript.query.looks_like_QMARK_;
var expr__22154 = clause;
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__22154))){
return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__22154))){
return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22156 = clause;
var seq__22157 = cljs.core.seq.call(null,vec__22156);
var first__22158 = cljs.core.first.call(null,seq__22157);
var seq__22157__$1 = cljs.core.next.call(null,seq__22157);
var source_sym = first__22158;
var rest = seq__22157__$1;
var _STAR_implicit_source_STAR__orig_val__22159 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__22160 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__22160;

try{return datascript.query._resolve_clause.call(null,context,rest,clause);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__22159;
}} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22161 = clause;
var seq__22162 = cljs.core.seq.call(null,vec__22161);
var first__22163 = cljs.core.first.call(null,seq__22162);
var seq__22162__$1 = cljs.core.next.call(null,seq__22162);
var _ = first__22163;
var branches = seq__22162__$1;
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__22161,seq__22162,first__22163,seq__22162__$1,_,branches,pred__22153,expr__22154){
return (function (p1__22146_SHARP_){
return datascript.query.resolve_clause.call(null,context,p1__22146_SHARP_);
});})(context,clause,orig_clause,vec__22161,seq__22162,first__22163,seq__22162__$1,_,branches,pred__22153,expr__22154))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__22161,seq__22162,first__22163,seq__22162__$1,_,branches,contexts,pred__22153,expr__22154){
return (function (p1__22147_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__22147_SHARP_));
});})(context,clause,orig_clause,vec__22161,seq__22162,first__22163,seq__22162__$1,_,branches,contexts,pred__22153,expr__22154))
,contexts);
return cljs.core.assoc.call(null,cljs.core.first.call(null,contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22164 = clause;
var seq__22165 = cljs.core.seq.call(null,vec__22164);
var first__22166 = cljs.core.first.call(null,seq__22165);
var seq__22165__$1 = cljs.core.next.call(null,seq__22165);
var _ = first__22166;
var first__22166__$1 = cljs.core.first.call(null,seq__22165__$1);
var seq__22165__$2 = cljs.core.next.call(null,seq__22165__$1);
var vec__22167 = first__22166__$1;
var seq__22168 = cljs.core.seq.call(null,vec__22167);
var first__22169 = cljs.core.first.call(null,seq__22168);
var seq__22168__$1 = cljs.core.next.call(null,seq__22168);
var req_vars = first__22169;
var vars = seq__22168__$1;
var branches = seq__22165__$2;
datascript.query.check_bound.call(null,context,req_vars,orig_clause);

var G__22186 = context;
var G__22187 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.call(null,req_vars,vars),branches);
var G__22188 = clause;
context = G__22186;
clause = G__22187;
orig_clause = G__22188;
continue;
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22170 = clause;
var seq__22171 = cljs.core.seq.call(null,vec__22170);
var first__22172 = cljs.core.first.call(null,seq__22171);
var seq__22171__$1 = cljs.core.next.call(null,seq__22171);
var _ = first__22172;
var first__22172__$1 = cljs.core.first.call(null,seq__22171__$1);
var seq__22171__$2 = cljs.core.next.call(null,seq__22171__$1);
var vars = first__22172__$1;
var branches = seq__22171__$2;
var vars__$1 = cljs.core.set.call(null,vars);
var join_context = datascript.query.limit_context.call(null,context,vars__$1);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__22170,seq__22171,first__22172,seq__22171__$1,_,first__22172__$1,seq__22171__$2,vars,branches,vars__$1,join_context,pred__22153,expr__22154){
return (function (p1__22148_SHARP_){
return datascript.query.limit_context.call(null,datascript.query.resolve_clause.call(null,join_context,p1__22148_SHARP_),vars__$1);
});})(context,clause,orig_clause,vec__22170,seq__22171,first__22172,seq__22171__$1,_,first__22172__$1,seq__22171__$2,vars,branches,vars__$1,join_context,pred__22153,expr__22154))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__22170,seq__22171,first__22172,seq__22171__$1,_,first__22172__$1,seq__22171__$2,vars,branches,vars__$1,join_context,contexts,pred__22153,expr__22154){
return (function (p1__22149_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__22149_SHARP_));
});})(context,clause,orig_clause,vec__22170,seq__22171,first__22172,seq__22171__$1,_,first__22172__$1,seq__22171__$2,vars,branches,vars__$1,join_context,contexts,pred__22153,expr__22154))
,contexts);
var sum_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22173 = clause;
var seq__22174 = cljs.core.seq.call(null,vec__22173);
var first__22175 = cljs.core.first.call(null,seq__22174);
var seq__22174__$1 = cljs.core.next.call(null,seq__22174);
var _ = first__22175;
var clauses = seq__22174__$1;
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22176 = clause;
var seq__22177 = cljs.core.seq.call(null,vec__22176);
var first__22178 = cljs.core.first.call(null,seq__22177);
var seq__22177__$1 = cljs.core.next.call(null,seq__22177);
var _ = first__22178;
var clauses = seq__22177__$1;
var bound_vars = cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (context,clause,orig_clause,vec__22176,seq__22177,first__22178,seq__22177__$1,_,clauses,pred__22153,expr__22154){
return (function (p1__22150_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__22150_SHARP_));
});})(context,clause,orig_clause,vec__22176,seq__22177,first__22178,seq__22177__$1,_,clauses,pred__22153,expr__22154))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
var negation_vars = datascript.query.collect_vars.call(null,clauses);
var ___$1 = ((cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.call(null,["Insufficient bindings: none of ",cljs.core.pr_str.call(null,negation_vars)," is bound in ",cljs.core.pr_str.call(null,orig_clause)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.call(null,datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var vec__22179 = clause;
var seq__22180 = cljs.core.seq.call(null,vec__22179);
var first__22181 = cljs.core.first.call(null,seq__22180);
var seq__22180__$1 = cljs.core.next.call(null,seq__22180);
var _ = first__22181;
var first__22181__$1 = cljs.core.first.call(null,seq__22180__$1);
var seq__22180__$2 = cljs.core.next.call(null,seq__22180__$1);
var vars = first__22181__$1;
var clauses = seq__22180__$2;
var ___$1 = datascript.query.check_bound.call(null,context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context.call(null,context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context.call(null,cljs.core.reduce.call(null,datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__22153.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__22154))){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs.call(null,source,clause);
var relation = datascript.query.lookup_pattern.call(null,source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__22182 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__22183 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs.call(null,source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__22183;

try{return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__22182;
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22154)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
});

datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3;

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_.call(null,context,clause)){
if(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause))){
var _STAR_implicit_source_STAR__orig_val__22189 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__22190 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first.call(null,clause));
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__22190;

try{return datascript.query.resolve_clause.call(null,context,cljs.core.next.call(null,clause));
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__22189;
}} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule.call(null,context,clause));
}
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__22191 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__22192 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__22192;

try{return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__22191;
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__22195 = arguments.length;
switch (G__22195) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5737__auto__ = cljs.core.first.call(null,rels);
if((temp__5737__auto__ == null)){
return acc;
} else {
var rel = temp__5737__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__22203 = acc;
var G__22204 = cljs.core.next.call(null,rels);
var G__22205 = symbols;
acc = G__22203;
rels = G__22204;
symbols = G__22205;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__5737__auto__){
return (function (p1__22193_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__22193_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5737__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__22206 = (function (){var iter__4523__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__22196(s__22197){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__22197__$1 = s__22197;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22197__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var t1 = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__22197__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__22196_$_iter__22198(s__22199){
return (new cljs.core.LazySeq(null,((function (s__22197__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__22199__$1 = s__22199;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__22199__$1);
if(temp__5735__auto____$1){
var s__22199__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22199__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22199__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22201 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22200 = (0);
while(true){
if((i__22200 < size__4522__auto__)){
var t2 = cljs.core._nth.call(null,c__4521__auto__,i__22200);
cljs.core.chunk_append.call(null,b__22201,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4607__auto___22209 = len;
var i_22210 = (0);
while(true){
if((i_22210 < n__4607__auto___22209)){
var temp__5739__auto___22211 = (copy_map[i_22210]);
if((temp__5739__auto___22211 == null)){
} else {
var idx_22212 = temp__5739__auto___22211;
(res[i_22210] = (t2[idx_22212]));
}

var G__22213 = (i_22210 + (1));
i_22210 = G__22213;
continue;
} else {
}
break;
}

return res;
})());

var G__22214 = (i__22200 + (1));
i__22200 = G__22214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22201),datascript$query$iter__22196_$_iter__22198.call(null,cljs.core.chunk_rest.call(null,s__22199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22201),null);
}
} else {
var t2 = cljs.core.first.call(null,s__22199__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4607__auto___22215 = len;
var i_22216 = (0);
while(true){
if((i_22216 < n__4607__auto___22215)){
var temp__5739__auto___22217 = (copy_map[i_22216]);
if((temp__5739__auto___22217 == null)){
} else {
var idx_22218 = temp__5739__auto___22217;
(res[i_22216] = (t2[idx_22218]));
}

var G__22219 = (i_22216 + (1));
i_22216 = G__22219;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__22196_$_iter__22198.call(null,cljs.core.rest.call(null,s__22199__$2)));
}
} else {
return null;
}
break;
}
});})(s__22197__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(s__22197__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,datascript$query$iter__22196.call(null,cljs.core.rest.call(null,s__22197__$1)));
} else {
var G__22220 = cljs.core.rest.call(null,s__22197__$1);
s__22197__$1 = G__22220;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
return iter__4523__auto__.call(null,acc);
})();
var G__22207 = cljs.core.next.call(null,rels);
var G__22208 = symbols;
acc = G__22206;
rels = G__22207;
symbols = G__22208;
continue;
}
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4433__auto__ = (((var$ == null))?null:var$);
var m__4434__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,var$,context);
} else {
var m__4431__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,var$,context);
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val.call(null,context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4131__auto__ = cljs.core.get.call(null,datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return datascript.query.resolve_sym.call(null,var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_.call(null,element)){
var f = datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,((function (f){
return (function (p1__22221_SHARP_){
return datascript.query._context_resolve.call(null,p1__22221_SHARP_,context);
});})(f))
,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,((function (f,args){
return (function (p1__22222_SHARP_){
return cljs.core.nth.call(null,p1__22222_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__22223_SHARP_,p2__22224_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__22223_SHARP_))){
return p2__22224_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__22225_SHARP_){
return cljs.core.nth.call(null,tuple,p1__22225_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__4523__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__22226(s__22227){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__22227__$1 = s__22227;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22227__$1);
if(temp__5735__auto__){
var s__22227__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22227__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22227__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22229 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22228 = (0);
while(true){
if((i__22228 < size__4522__auto__)){
var vec__22230 = cljs.core._nth.call(null,c__4521__auto__,i__22228);
var _ = cljs.core.nth.call(null,vec__22230,(0),null);
var tuples = cljs.core.nth.call(null,vec__22230,(1),null);
cljs.core.chunk_append.call(null,b__22229,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__22236 = (i__22228 + (1));
i__22228 = G__22236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22229),datascript$query$aggregate_$_iter__22226.call(null,cljs.core.chunk_rest.call(null,s__22227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22229),null);
}
} else {
var vec__22233 = cljs.core.first.call(null,s__22227__$2);
var _ = cljs.core.nth.call(null,vec__22233,(0),null);
var tuples = cljs.core.nth.call(null,vec__22233,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__22226.call(null,cljs.core.rest.call(null,s__22227__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__4523__auto__.call(null,grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4433__auto__ = (((find == null))?null:find);
var m__4434__auto__ = (datascript.query._post_process[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,find,tuples);
} else {
var m__4431__auto__ = (datascript.query._post_process["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,find,tuples);
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first.call(null,tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4523__auto__ = (function datascript$query$pull_$_iter__22237(s__22238){
return (new cljs.core.LazySeq(null,(function (){
var s__22238__$1 = s__22238;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22238__$1);
if(temp__5735__auto__){
var s__22238__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22238__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22238__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22240 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22239 = (0);
while(true){
if((i__22239 < size__4522__auto__)){
var find = cljs.core._nth.call(null,c__4521__auto__,i__22239);
cljs.core.chunk_append.call(null,b__22240,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__22251 = (i__22239 + (1));
i__22239 = G__22251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22240),datascript$query$pull_$_iter__22237.call(null,cljs.core.chunk_rest.call(null,s__22238__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22240),null);
}
} else {
var find = cljs.core.first.call(null,s__22238__$2);
return cljs.core.cons.call(null,((datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__22237.call(null,cljs.core.rest.call(null,s__22238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,find_elements);
})();
var iter__4523__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__22241(s__22242){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__22242__$1 = s__22242;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__22242__$1);
if(temp__5735__auto__){
var s__22242__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22242__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22242__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22244 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22243 = (0);
while(true){
if((i__22243 < size__4522__auto__)){
var tuple = cljs.core._nth.call(null,c__4521__auto__,i__22243);
cljs.core.chunk_append.call(null,b__22244,cljs.core.mapv.call(null,((function (i__22243,tuple,c__4521__auto__,size__4522__auto__,b__22244,s__22242__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__22245 = env;
var src = cljs.core.nth.call(null,vec__22245,(0),null);
var spec = cljs.core.nth.call(null,vec__22245,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__22243,tuple,c__4521__auto__,size__4522__auto__,b__22244,s__22242__$2,temp__5735__auto__,resolved))
,resolved,tuple));

var G__22252 = (i__22243 + (1));
i__22243 = G__22252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22244),datascript$query$pull_$_iter__22241.call(null,cljs.core.chunk_rest.call(null,s__22242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22244),null);
}
} else {
var tuple = cljs.core.first.call(null,s__22242__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__22242__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__22248 = env;
var src = cljs.core.nth.call(null,vec__22248,(0),null);
var spec = cljs.core.nth.call(null,vec__22248,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__22242__$2,temp__5735__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__22241.call(null,cljs.core.rest.call(null,s__22242__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__4523__auto__.call(null,resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_.call(null,datascript.lru.lru.call(null,(100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5737__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datascript.query.query_cache),q,null);
if((temp__5737__auto__ == null)){
var qp = datascript.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datascript.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datascript.query.query_cache),q,qp));

return qp;
} else {
var cached = temp__5737__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22258 = arguments.length;
var i__4731__auto___22259 = (0);
while(true){
if((i__4731__auto___22259 < len__4730__auto___22258)){
args__4736__auto__.push((arguments[i__4731__auto___22259]));

var G__22260 = (i__4731__auto___22259 + (1));
i__4731__auto___22259 = G__22260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements.call(null,find);
var find_vars = datascript.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__22256 = q;
if(cljs.core.sequential_QMARK_.call(null,q)){
return datascript.parser.query__GT_map.call(null,G__22256);
} else {
return G__22256;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__22257 = resultset;
var G__22257__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,((function (G__22257,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__22253_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__22253_SHARP_,(0),result_arity));
});})(G__22257,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__22257):G__22257);
var G__22257__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__22257__$1):G__22257__$1);
var G__22257__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__22257__$2):G__22257__$2);
return datascript.query._post_process.call(null,find,G__22257__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
datascript.query.q.cljs$lang$applyTo = (function (seq22254){
var G__22255 = cljs.core.first.call(null,seq22254);
var seq22254__$1 = cljs.core.next.call(null,seq22254);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22255,seq22254__$1);
});


//# sourceMappingURL=query.js.map
