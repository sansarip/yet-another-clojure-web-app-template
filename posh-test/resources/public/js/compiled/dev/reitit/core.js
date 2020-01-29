// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.expand[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,opts);
} else {
var m__4431__auto__ = (reitit.core.expand["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.router_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.core.router_name["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.core.routes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.options[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.core.options["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.route_names[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (reitit.core.route_names["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,path);
} else {
var m__4431__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__26478 = arguments.length;
switch (G__26478) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,name);
} else {
var m__4431__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,name,path_params);
} else {
var m__4431__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26482,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26486 = k26482;
var G__26486__$1 = (((G__26486 instanceof cljs.core.Keyword))?G__26486.fqn:null);
switch (G__26486__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26482,else__4388__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26487){
var vec__26488 = p__26487;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26488,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26488,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.core.Match{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26481){
var self__ = this;
var G__26481__$1 = this;
return (new cljs.core.RecordIter((0),G__26481__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26483,other26484){
var self__ = this;
var this26483__$1 = this;
return (((!((other26484 == null)))) && ((this26483__$1.constructor === other26484.constructor)) && (cljs.core._EQ_.call(null,this26483__$1.template,other26484.template)) && (cljs.core._EQ_.call(null,this26483__$1.data,other26484.data)) && (cljs.core._EQ_.call(null,this26483__$1.result,other26484.result)) && (cljs.core._EQ_.call(null,this26483__$1.path_params,other26484.path_params)) && (cljs.core._EQ_.call(null,this26483__$1.path,other26484.path)) && (cljs.core._EQ_.call(null,this26483__$1.__extmap,other26484.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26481){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26491 = cljs.core.keyword_identical_QMARK_;
var expr__26492 = k__4393__auto__;
if(cljs.core.truth_(pred__26491.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__26492))){
return (new reitit.core.Match(G__26481,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26491.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__26492))){
return (new reitit.core.Match(self__.template,G__26481,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26491.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__26492))){
return (new reitit.core.Match(self__.template,self__.data,G__26481,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26491.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__26492))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__26481,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26491.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__26492))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__26481,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26481),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26481){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__26481,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__26485){
var extmap__4424__auto__ = (function (){var G__26494 = cljs.core.dissoc.call(null,G__26485,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__26485)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26494);
} else {
return G__26494;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__26485),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__26485),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__26485),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__26485),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__26485),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26497,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26501 = k26497;
var G__26501__$1 = (((G__26501 instanceof cljs.core.Keyword))?G__26501.fqn:null);
switch (G__26501__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26497,else__4388__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26502){
var vec__26503 = p__26502;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26503,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26503,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26496){
var self__ = this;
var G__26496__$1 = this;
return (new cljs.core.RecordIter((0),G__26496__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26498,other26499){
var self__ = this;
var this26498__$1 = this;
return (((!((other26499 == null)))) && ((this26498__$1.constructor === other26499.constructor)) && (cljs.core._EQ_.call(null,this26498__$1.template,other26499.template)) && (cljs.core._EQ_.call(null,this26498__$1.data,other26499.data)) && (cljs.core._EQ_.call(null,this26498__$1.result,other26499.result)) && (cljs.core._EQ_.call(null,this26498__$1.path_params,other26499.path_params)) && (cljs.core._EQ_.call(null,this26498__$1.required,other26499.required)) && (cljs.core._EQ_.call(null,this26498__$1.__extmap,other26499.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26496){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26506 = cljs.core.keyword_identical_QMARK_;
var expr__26507 = k__4393__auto__;
if(cljs.core.truth_(pred__26506.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__26507))){
return (new reitit.core.PartialMatch(G__26496,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26506.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__26507))){
return (new reitit.core.PartialMatch(self__.template,G__26496,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26506.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__26507))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__26496,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26506.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__26507))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__26496,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26506.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__26507))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__26496,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26496),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26496){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__26496,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__26500){
var extmap__4424__auto__ = (function (){var G__26509 = cljs.core.dissoc.call(null,G__26500,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__26500)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26509);
} else {
return G__26509;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__26500),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__26500),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__26500),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__26500),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__26500),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__26512 = arguments.length;
switch (G__26512) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5733__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
if((!(reitit.core.partial_match_QMARK_.call(null,match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__26515 = arguments.length;
switch (G__26515) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.call(null,match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__26516 = match;
var G__26516__$1 = (((G__26516 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__26516));
if((G__26516__$1 == null)){
return null;
} else {
var G__26517 = G__26516__$1;
if(cljs.core.seq.call(null,query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26517),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string.call(null,query_params))].join('');
} else {
return G__26517;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__26521 = arguments.length;
switch (G__26521) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler.call(null));
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__26522 = cljs.core.reduce.call(null,((function (compiler,names){
return (function (p__26525,p__26526){
var vec__26527 = p__26525;
var pl = cljs.core.nth.call(null,vec__26527,(0),null);
var nl = cljs.core.nth.call(null,vec__26527,(1),null);
var vec__26530 = p__26526;
var p = cljs.core.nth.call(null,vec__26530,(0),null);
var map__26533 = cljs.core.nth.call(null,vec__26530,(1),null);
var map__26533__$1 = (((((!((map__26533 == null))))?(((((map__26533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26533):map__26533);
var data = map__26533__$1;
var name = cljs.core.get.call(null,map__26533__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__26530,(2),null);
var map__26535 = reitit.impl.parse.call(null,p,opts);
var map__26535__$1 = (((((!((map__26535 == null))))?(((((map__26535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26535):map__26535);
var route = map__26535__$1;
var path_params = cljs.core.get.call(null,map__26535__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__26535,map__26535__$1,route,path_params,vec__26527,pl,nl,vec__26530,p,map__26533,map__26533__$1,data,name,result,compiler,names){
return (function (p1__26519_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for.call(null,route,p1__26519_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__26519_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__26519_SHARP_),path_params);
}
});})(map__26535,map__26535__$1,route,path_params,vec__26527,pl,nl,vec__26530,p,map__26533,map__26533__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,reitit.trie.compile.call(null,reitit.trie.insert.call(null,null,p,reitit.core.__GT_Match.call(null,p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__26522,(0),null);
var nl = cljs.core.nth.call(null,vec__26522,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var matcher = reitit.trie.linear_matcher.call(null,compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.call(null,matcher,compiler);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core26537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core26537 = (function (matcher,names,compiled_routes,vec__26522,routes,lookup,pl,nl,match_by_path,compiler,opts,meta26538){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.vec__26522 = vec__26522;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta26538 = meta26538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core26537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_26539,meta26538__$1){
var self__ = this;
var _26539__$1 = this;
return (new reitit.core.t_reitit$core26537(self__.matcher,self__.names,self__.compiled_routes,self__.vec__26522,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta26538__$1));
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_26539){
var self__ = this;
var _26539__$1 = this;
return self__.meta26538;
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.match_by_path.call(null,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,null);
} else {
return null;
}
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.getBasis = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"vec__26522","vec__26522",-1453392599,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta26538","meta26538",823321289,null)], null);
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core26537.cljs$lang$type = true;

reitit.core.t_reitit$core26537.cljs$lang$ctorStr = "reitit.core/t_reitit$core26537";

reitit.core.t_reitit$core26537.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.core/t_reitit$core26537");
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core26537.
 */
reitit.core.__GT_t_reitit$core26537 = ((function (compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes){
return (function reitit$core$__GT_t_reitit$core26537(matcher__$1,names__$1,compiled_routes__$1,vec__26522__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta26538){
return (new reitit.core.t_reitit$core26537(matcher__$1,names__$1,compiled_routes__$1,vec__26522__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta26538));
});})(compiler,names,vec__26522,pl,nl,lookup,matcher,match_by_path,routes))
;

}

return (new reitit.core.t_reitit$core26537(matcher,names,compiled_routes,vec__26522,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__26543 = arguments.length;
switch (G__26543) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5735__auto___26561 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes));
if(temp__5735__auto___26561){
var wilds_26562 = temp__5735__auto___26561;
reitit.exception.fail_BANG_.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_26562)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_26562,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__26544 = cljs.core.reduce.call(null,((function (names){
return (function (p__26547,p__26548){
var vec__26549 = p__26547;
var pl = cljs.core.nth.call(null,vec__26549,(0),null);
var nl = cljs.core.nth.call(null,vec__26549,(1),null);
var vec__26552 = p__26548;
var p = cljs.core.nth.call(null,vec__26552,(0),null);
var map__26555 = cljs.core.nth.call(null,vec__26552,(1),null);
var map__26555__$1 = (((((!((map__26555 == null))))?(((((map__26555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26555):map__26555);
var data = map__26555__$1;
var name = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__26552,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,((function (vec__26549,pl,nl,vec__26552,p,map__26555,map__26555__$1,data,name,result,names){
return (function (p1__26541_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__26541_SHARP_,p);
});})(vec__26549,pl,nl,vec__26552,p,map__26555,map__26555__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__26544,(0),null);
var nl = cljs.core.nth.call(null,vec__26544,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core26557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core26557 = (function (names,data,compiled_routes,routes,lookup,vec__26544,pl,nl,opts,meta26558){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__26544 = vec__26544;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta26558 = meta26558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core26557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_26559,meta26558__$1){
var self__ = this;
var _26559__$1 = this;
return (new reitit.core.t_reitit$core26557(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__26544,self__.pl,self__.nl,self__.opts,meta26558__$1));
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_26559){
var self__ = this;
var _26559__$1 = this;
return self__.meta26558;
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.getBasis = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__26544","vec__26544",1812255886,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta26558","meta26558",1213774372,null)], null);
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core26557.cljs$lang$type = true;

reitit.core.t_reitit$core26557.cljs$lang$ctorStr = "reitit.core/t_reitit$core26557";

reitit.core.t_reitit$core26557.cljs$lang$ctorPrWriter = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.core/t_reitit$core26557");
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core26557.
 */
reitit.core.__GT_t_reitit$core26557 = ((function (names,vec__26544,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core26557(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__26544__$1,pl__$1,nl__$1,opts__$1,meta26558){
return (new reitit.core.t_reitit$core26557(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__26544__$1,pl__$1,nl__$1,opts__$1,meta26558));
});})(names,vec__26544,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core26557(names,data,compiled_routes,routes,lookup,vec__26544,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__26565 = arguments.length;
switch (G__26565) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler.call(null));
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__26566 = cljs.core.reduce.call(null,((function (compiler,names){
return (function (p__26569,p__26570){
var vec__26571 = p__26569;
var pl = cljs.core.nth.call(null,vec__26571,(0),null);
var nl = cljs.core.nth.call(null,vec__26571,(1),null);
var vec__26574 = p__26570;
var p = cljs.core.nth.call(null,vec__26574,(0),null);
var map__26577 = cljs.core.nth.call(null,vec__26574,(1),null);
var map__26577__$1 = (((((!((map__26577 == null))))?(((((map__26577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26577):map__26577);
var data = map__26577__$1;
var name = cljs.core.get.call(null,map__26577__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__26574,(2),null);
var map__26579 = reitit.impl.parse.call(null,p,opts);
var map__26579__$1 = (((((!((map__26579 == null))))?(((((map__26579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);
var route = map__26579__$1;
var path_params = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__26579,map__26579__$1,route,path_params,vec__26571,pl,nl,vec__26574,p,map__26577,map__26577__$1,data,name,result,compiler,names){
return (function (p1__26563_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for.call(null,route,p1__26563_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__26563_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__26563_SHARP_),path_params);
}
});})(map__26579,map__26579__$1,route,path_params,vec__26571,pl,nl,vec__26574,p,map__26577,map__26577__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__26566,(0),null);
var nl = cljs.core.nth.call(null,vec__26566,(1),null);
var matcher = reitit.trie.compile.call(null,pl,compiler);
var match_by_path = reitit.trie.path_matcher.call(null,matcher,compiler);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core26581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core26581 = (function (vec__26566,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta26582){
this.vec__26566 = vec__26566;
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta26582 = meta26582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core26581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_26583,meta26582__$1){
var self__ = this;
var _26583__$1 = this;
return (new reitit.core.t_reitit$core26581(self__.vec__26566,self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta26582__$1));
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_26583){
var self__ = this;
var _26583__$1 = this;
return self__.meta26582;
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.match_by_path.call(null,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,null);
} else {
return null;
}
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.getBasis = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__26566","vec__26566",100091904,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta26582","meta26582",1485202605,null)], null);
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core26581.cljs$lang$type = true;

reitit.core.t_reitit$core26581.cljs$lang$ctorStr = "reitit.core/t_reitit$core26581";

reitit.core.t_reitit$core26581.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.core/t_reitit$core26581");
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core26581.
 */
reitit.core.__GT_t_reitit$core26581 = ((function (compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes){
return (function reitit$core$__GT_t_reitit$core26581(vec__26566__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta26582){
return (new reitit.core.t_reitit$core26581(vec__26566__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta26582));
});})(compiler,names,vec__26566,pl,nl,matcher,match_by_path,lookup,routes))
;

}

return (new reitit.core.t_reitit$core26581(vec__26566,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.trie_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__26586 = arguments.length;
switch (G__26586) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__26587 = reitit.impl.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__26587,(0),null);
var names = vec__26587;
var vec__26590 = compiled_routes;
var vec__26593 = cljs.core.nth.call(null,vec__26590,(0),null);
var p = cljs.core.nth.call(null,vec__26593,(0),null);
var data = cljs.core.nth.call(null,vec__26593,(1),null);
var result = cljs.core.nth.call(null,vec__26593,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core26596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core26596 = (function (p,names,match,data,compiled_routes,routes,n,vec__26587,result,vec__26593,opts,vec__26590,meta26597){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__26587 = vec__26587;
this.result = result;
this.vec__26593 = vec__26593;
this.opts = opts;
this.vec__26590 = vec__26590;
this.meta26597 = meta26597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core26596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_26598,meta26597__$1){
var self__ = this;
var _26598__$1 = this;
return (new reitit.core.t_reitit$core26596(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__26587,self__.result,self__.vec__26593,self__.opts,self__.vec__26590,meta26597__$1));
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_26598){
var self__ = this;
var _26598__$1 = this;
return self__.meta26597;
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$options$arity$1 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.getBasis = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__26587","vec__26587",-781262985,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"vec__26593","vec__26593",816093979,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__26590","vec__26590",108859517,null),new cljs.core.Symbol(null,"meta26597","meta26597",453491971,null)], null);
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core26596.cljs$lang$type = true;

reitit.core.t_reitit$core26596.cljs$lang$ctorStr = "reitit.core/t_reitit$core26596";

reitit.core.t_reitit$core26596.cljs$lang$ctorPrWriter = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.core/t_reitit$core26596");
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core26596.
 */
reitit.core.__GT_t_reitit$core26596 = ((function (vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core26596(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__26587__$1,result__$1,vec__26593__$1,opts__$1,vec__26590__$1,meta26597){
return (new reitit.core.t_reitit$core26596(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__26587__$1,result__$1,vec__26593__$1,opts__$1,vec__26590__$1,meta26597));
});})(vec__26587,n,names,vec__26590,vec__26593,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core26596(p__$1,names,match,data,compiled_routes,routes,n,vec__26587,result,vec__26593,opts,vec__26590,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__26601 = arguments.length;
switch (G__26601) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__26602 = cljs.core.group_by.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes);
var map__26602__$1 = (((((!((map__26602 == null))))?(((((map__26602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26602):map__26602);
var wild = cljs.core.get.call(null,map__26602__$1,true);
var lookup = cljs.core.get.call(null,map__26602__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core26604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core26604 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__26602,opts,wildcard_router,meta26605){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.map__26602 = map__26602;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta26605 = meta26605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core26604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_26606,meta26605__$1){
var self__ = this;
var _26606__$1 = this;
return (new reitit.core.t_reitit$core26604(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.map__26602,self__.opts,self__.wildcard_router,meta26605__$1));
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_26606){
var self__ = this;
var _26606__$1 = this;
return self__.meta26605;
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$routes$arity$1 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$options$arity$1 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.getBasis = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"map__26602","map__26602",1784164499,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta26605","meta26605",-1255289836,null)], null);
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core26604.cljs$lang$type = true;

reitit.core.t_reitit$core26604.cljs$lang$ctorStr = "reitit.core/t_reitit$core26604";

reitit.core.t_reitit$core26604.cljs$lang$ctorPrWriter = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.core/t_reitit$core26604");
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core26604.
 */
reitit.core.__GT_t_reitit$core26604 = ((function (map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core26604(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__26602__$2,opts__$1,wildcard_router__$1,meta26605){
return (new reitit.core.t_reitit$core26604(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__26602__$2,opts__$1,wildcard_router__$1,meta26605));
});})(map__26602,map__26602__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core26604(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__26602__$1,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__26610 = arguments.length;
switch (G__26610) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths.call(null,reitit.impl.path_conflicting_routes.call(null,compiled_routes,opts));
var conflicting_QMARK_ = ((function (conflicting_paths){
return (function (p1__26608_SHARP_){
return cljs.core.contains_QMARK_.call(null,conflicting_paths,cljs.core.first.call(null,p1__26608_SHARP_));
});})(conflicting_paths))
;
var map__26611 = cljs.core.group_by.call(null,conflicting_QMARK_,compiled_routes);
var map__26611__$1 = (((((!((map__26611 == null))))?(((((map__26611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26611):map__26611);
var conflicting = cljs.core.get.call(null,map__26611__$1,true);
var non_conflicting = cljs.core.get.call(null,map__26611__$1,false);
var linear_router = reitit.core.linear_router.call(null,conflicting,opts);
var mixed_router = reitit.core.mixed_router.call(null,non_conflicting,opts);
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core26613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core26613 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__26611,mixed_router,linear_router,opts,meta26614){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.map__26611 = map__26611;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta26614 = meta26614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core26613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_26615,meta26614__$1){
var self__ = this;
var _26615__$1 = this;
return (new reitit.core.t_reitit$core26613(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.map__26611,self__.mixed_router,self__.linear_router,self__.opts,meta26614__$1));
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_26615){
var self__ = this;
var _26615__$1 = this;
return self__.meta26614;
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_path.call(null,self__.mixed_router,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"map__26611","map__26611",-1527106130,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta26614","meta26614",-214028677,null)], null);
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core26613.cljs$lang$type = true;

reitit.core.t_reitit$core26613.cljs$lang$ctorStr = "reitit.core/t_reitit$core26613";

reitit.core.t_reitit$core26613.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"reitit.core/t_reitit$core26613");
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core26613.
 */
reitit.core.__GT_t_reitit$core26613 = ((function (conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core26613(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__26611__$2,mixed_router__$1,linear_router__$1,opts__$1,meta26614){
return (new reitit.core.t_reitit$core26613(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__26611__$2,mixed_router__$1,linear_router__$1,opts__$1,meta26614));
});})(conflicting_paths,conflicting_QMARK_,map__26611,map__26611__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core26613(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__26611__$1,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__26617,_){
var vec__26618 = p__26617;
var ___$1 = cljs.core.nth.call(null,vec__26618,(0),null);
var map__26621 = cljs.core.nth.call(null,vec__26618,(1),null);
var map__26621__$1 = (((((!((map__26621 == null))))?(((((map__26621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26621):map__26621);
var name = cljs.core.get.call(null,map__26621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__26623,_){
var vec__26624 = p__26623;
var ___$1 = cljs.core.nth.call(null,vec__26624,(0),null);
var map__26627 = cljs.core.nth.call(null,vec__26624,(1),null);
var map__26627__$1 = (((((!((map__26627 == null))))?(((((map__26627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26627):map__26627);
var handler = cljs.core.get.call(null,map__26627__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__26630 = arguments.length;
switch (G__26630) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__26631 = cljs.core.merge.call(null,reitit.core.default_router_options.call(null),opts);
var map__26631__$1 = (((((!((map__26631 == null))))?(((((map__26631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26631):map__26631);
var opts__$1 = map__26631__$1;
var router = cljs.core.get.call(null,map__26631__$1,new cljs.core.Keyword(null,"router","router",1091916230));
try{var routes = reitit.impl.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes.call(null,routes,opts__$1);
var name_conflicting = reitit.impl.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.impl.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5735__auto___26635 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___26635)){
var conflicts_26636 = temp__5735__auto___26635;
if(cljs.core.truth_(path_conflicting)){
conflicts_26636.call(null,path_conflicting);
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5735__auto___26637 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___26637)){
var validate_26638 = temp__5735__auto___26637;
validate_26638.call(null,compiled_routes,opts__$1);
} else {
}

return router__$1.call(null,compiled_routes,opts__$1);
}catch (e26633){if((e26633 instanceof Error)){
var e = e26633;
throw cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity).call(null,e);
} else {
throw e26633;

}
}});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map
