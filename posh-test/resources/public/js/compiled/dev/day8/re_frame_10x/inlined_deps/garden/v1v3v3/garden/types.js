// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('cljs.core');

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
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39501,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39505 = k39501;
var G__39505__$1 = (((G__39505 instanceof cljs.core.Keyword))?G__39505.fqn:null);
switch (G__39505__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39501,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39506){
var vec__39507 = p__39506;
var k__4408__auto__ = cljs.core.nth.call(null,vec__39507,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__39507,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39500){
var self__ = this;
var G__39500__$1 = this;
return (new cljs.core.RecordIter((0),G__39500__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (927319699 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39502,other39503){
var self__ = this;
var this39502__$1 = this;
return (((!((other39503 == null)))) && ((this39502__$1.constructor === other39503.constructor)) && (cljs.core._EQ_.call(null,this39502__$1.unit,other39503.unit)) && (cljs.core._EQ_.call(null,this39502__$1.magnitude,other39503.magnitude)) && (cljs.core._EQ_.call(null,this39502__$1.__extmap,other39503.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39500){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39510 = cljs.core.keyword_identical_QMARK_;
var expr__39511 = k__4393__auto__;
if(cljs.core.truth_(pred__39510.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__39511))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(G__39500,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39510.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__39511))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__39500,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__39500),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39500){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__39500,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__39504){
var extmap__4424__auto__ = (function (){var G__39513 = cljs.core.dissoc.call(null,G__39504,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
if(cljs.core.record_QMARK_.call(null,G__39504)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39513);
} else {
return G__39513;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__39504),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__39504),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39516,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39520 = k39516;
var G__39520__$1 = (((G__39520 instanceof cljs.core.Keyword))?G__39520.fqn:null);
switch (G__39520__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39516,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39521){
var vec__39522 = p__39521;
var k__4408__auto__ = cljs.core.nth.call(null,vec__39522,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__39522,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39515){
var self__ = this;
var G__39515__$1 = this;
return (new cljs.core.RecordIter((0),G__39515__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1249425430 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39517,other39518){
var self__ = this;
var this39517__$1 = this;
return (((!((other39518 == null)))) && ((this39517__$1.constructor === other39518.constructor)) && (cljs.core._EQ_.call(null,this39517__$1.function,other39518.function)) && (cljs.core._EQ_.call(null,this39517__$1.args,other39518.args)) && (cljs.core._EQ_.call(null,this39517__$1.__extmap,other39518.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39515){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39525 = cljs.core.keyword_identical_QMARK_;
var expr__39526 = k__4393__auto__;
if(cljs.core.truth_(pred__39525.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__39526))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(G__39515,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39525.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__39526))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__39515,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__39515),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39515){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__39515,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__39519){
var extmap__4424__auto__ = (function (){var G__39528 = cljs.core.dissoc.call(null,G__39519,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__39519)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39528);
} else {
return G__39528;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__39519),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__39519),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39531,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39535 = k39531;
var G__39535__$1 = (((G__39535 instanceof cljs.core.Keyword))?G__39535.fqn:null);
switch (G__39535__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39531,else__4388__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39536){
var vec__39537 = p__39536;
var k__4408__auto__ = cljs.core.nth.call(null,vec__39537,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__39537,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39530){
var self__ = this;
var G__39530__$1 = this;
return (new cljs.core.RecordIter((0),G__39530__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-980840912 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39532,other39533){
var self__ = this;
var this39532__$1 = this;
return (((!((other39533 == null)))) && ((this39532__$1.constructor === other39533.constructor)) && (cljs.core._EQ_.call(null,this39532__$1.identifier,other39533.identifier)) && (cljs.core._EQ_.call(null,this39532__$1.value,other39533.value)) && (cljs.core._EQ_.call(null,this39532__$1.__extmap,other39533.__extmap)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39530){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39540 = cljs.core.keyword_identical_QMARK_;
var expr__39541 = k__4393__auto__;
if(cljs.core.truth_(pred__39540.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__39541))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(G__39530,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39540.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__39541))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__39530,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__39530),null));
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39530){
var self__ = this;
var this__4384__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__39530,self__.__extmap,self__.__hash));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__39534){
var extmap__4424__auto__ = (function (){var G__39543 = cljs.core.dissoc.call(null,G__39534,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__39534)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39543);
} else {
return G__39543;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__39534),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__39534),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


//# sourceMappingURL=types.js.map
