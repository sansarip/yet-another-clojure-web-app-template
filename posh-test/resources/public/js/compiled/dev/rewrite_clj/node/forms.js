// Compiled by ClojureScript 1.10.520 {}
goog.provide('rewrite_clj.node.forms');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rewrite_clj.node.forms.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.forms.FormsNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.forms.FormsNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k36760,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36764 = k36760;
var G__36764__$1 = (((G__36764 instanceof cljs.core.Keyword))?G__36764.fqn:null);
switch (G__36764__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36760,else__4388__auto__);

}
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36765){
var vec__36766 = p__36765;
var k__4408__auto__ = cljs.core.nth.call(null,vec__36766,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__36766,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#rewrite-clj.node.forms.FormsNode{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36759){
var self__ = this;
var G__36759__$1 = this;
return (new cljs.core.RecordIter((0),G__36759__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (116885345 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36761,other36762){
var self__ = this;
var this36761__$1 = this;
return (((!((other36762 == null)))) && ((this36761__$1.constructor === other36762.constructor)) && (cljs.core._EQ_.call(null,this36761__$1.children,other36762.children)) && (cljs.core._EQ_.call(null,this36761__$1.__extmap,other36762.__extmap)));
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"forms","forms",2045992350);
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var es = rewrite_clj.node.protocols.sexprs.call(null,self__.children);
if(cljs.core.next.call(null,es)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),es);
} else {
return cljs.core.first.call(null,es);
}
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.protocols.sum_lengths.call(null,self__.children);
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.protocols.concat_strings.call(null,self__.children);
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__36759){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36769 = cljs.core.keyword_identical_QMARK_;
var expr__36770 = k__4393__auto__;
if(cljs.core.truth_(pred__36769.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__36770))){
return (new rewrite_clj.node.forms.FormsNode(G__36759,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.forms.FormsNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__36759),null));
}
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__36759){
var self__ = this;
var this__4384__auto____$1 = this;
return (new rewrite_clj.node.forms.FormsNode(self__.children,G__36759,self__.__extmap,self__.__hash));
});

rewrite_clj.node.forms.FormsNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

rewrite_clj.node.forms.FormsNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.forms.FormsNode.cljs$lang$type = true;

rewrite_clj.node.forms.FormsNode.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.forms/FormsNode",null,(1),null));
});

rewrite_clj.node.forms.FormsNode.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"rewrite-clj.node.forms/FormsNode");
});

/**
 * Positional factory function for rewrite-clj.node.forms/FormsNode.
 */
rewrite_clj.node.forms.__GT_FormsNode = (function rewrite_clj$node$forms$__GT_FormsNode(children){
return (new rewrite_clj.node.forms.FormsNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.forms/FormsNode, taking a map of keywords to field values.
 */
rewrite_clj.node.forms.map__GT_FormsNode = (function rewrite_clj$node$forms$map__GT_FormsNode(G__36763){
var extmap__4424__auto__ = (function (){var G__36772 = cljs.core.dissoc.call(null,G__36763,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__36763)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36772);
} else {
return G__36772;
}
})();
return (new rewrite_clj.node.forms.FormsNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__36763),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Create top-level node wrapping multiple children
 * (equals an implicit `do` on the top-level).
 */
rewrite_clj.node.forms.forms_node = (function rewrite_clj$node$forms$forms_node(children){
return rewrite_clj.node.forms.__GT_FormsNode.call(null,children);
});

//# sourceMappingURL=forms.js.map
