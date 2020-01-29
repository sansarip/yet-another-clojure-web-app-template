// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');
reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize.call(null,path,opts);
var path_parts = reitit.trie.split_path.call(null,path__$1,opts);
var path_params = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse.call(null,path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__11161){
var vec__11162 = p__11161;
var path = cljs.core.nth.call(null,vec__11162,(0),null);
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse.call(null,path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv.call(null,(function (coll__$1,k,v){
var temp__5737__auto__ = f.call(null,v);
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.call(null,coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__11167){
var map__11168 = p__11167;
var map__11168__$1 = (((((!((map__11168 == null))))?(((((map__11168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11168):map__11168);
var opts = map__11168__$1;
var path = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = ((function (map__11168,map__11168__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__11168,map__11168__$1,opts,path,data,routes,expand){
return (function (p1__11165_SHARP_,p2__11166_SHARP_){
return cljs.core.into.call(null,p1__11165_SHARP_,walk_one.call(null,p,m,p2__11166_SHARP_));
});})(map__11168,map__11168__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__11168,map__11168__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__11168,map__11168__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__11179 = routes__$1;
var seq__11180 = cljs.core.seq.call(null,vec__11179);
var first__11181 = cljs.core.first.call(null,seq__11180);
var seq__11180__$1 = cljs.core.next.call(null,seq__11180);
var path__$1 = first__11181;
var vec__11182 = seq__11180__$1;
var maybe_arg = cljs.core.nth.call(null,vec__11182,(0),null);
var args = vec__11182;
var vec__11185 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__11185,(0),null);
var childs = cljs.core.nth.call(null,vec__11185,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__11168,map__11168__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p__11188){
var vec__11189 = p__11188;
var p = cljs.core.nth.call(null,vec__11189,(0),null);
var ds = cljs.core.nth.call(null,vec__11189,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,f.call(null,p,ds)], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.call(null,(function (acc,p__11192){
var vec__11193 = p__11192;
var k = cljs.core.nth.call(null,vec__11193,(0),null);
var v = cljs.core.nth.call(null,vec__11193,(1),null);
try{return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e11196){if((e11196 instanceof Error)){
var e = e11196;
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e11196;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__11198){
var map__11199 = p__11198;
var map__11199__$1 = (((((!((map__11199 == null))))?(((((map__11199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11199):map__11199);
var opts = map__11199__$1;
var coerce = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__11201 = reitit.impl.map_data.call(null,reitit.impl.merge_data,reitit.impl.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__11201,map__11199,map__11199__$1,opts,coerce){
return (function (p1__11197_SHARP_){
return coerce.call(null,p1__11197_SHARP_,opts);
});})(G__11201,map__11199,map__11199__$1,opts,coerce))
),G__11201);
} else {
return G__11201;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map_indexed.call(null,(function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__11202_SHARP_){
return reitit.trie.conflicting_paths_QMARK_.call(null,cljs.core.first.call(null,route),cljs.core.first.call(null,p1__11202_SHARP_),opts);
})),cljs.core.subvec.call(null,routes,(index + (1))))], null);
})),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function reitit$impl$conflicting_paths_$_iter__11203(s__11204){
return (new cljs.core.LazySeq(null,(function (){
var s__11204__$1 = s__11204;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__11204__$1);
if(temp__5735__auto__){
var s__11204__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11204__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__11204__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__11206 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__11205 = (0);
while(true){
if((i__11205 < size__4522__auto__)){
var vec__11207 = cljs.core._nth.call(null,c__4521__auto__,i__11205);
var p = cljs.core.nth.call(null,vec__11207,(0),null);
var pc = cljs.core.nth.call(null,vec__11207,(1),null);
cljs.core.chunk_append.call(null,b__11206,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)));

var G__11213 = (i__11205 + (1));
i__11205 = G__11213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11206),reitit$impl$conflicting_paths_$_iter__11203.call(null,cljs.core.chunk_rest.call(null,s__11204__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11206),null);
}
} else {
var vec__11210 = cljs.core.first.call(null,s__11204__$2);
var p = cljs.core.nth.call(null,vec__11210,(0),null);
var pc = cljs.core.nth.call(null,vec__11210,(1),null);
return cljs.core.cons.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)),reitit$impl$conflicting_paths_$_iter__11203.call(null,cljs.core.rest.call(null,s__11204__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__11214 = routes;
var G__11214__$1 = (((G__11214 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__11214));
var G__11214__$2 = (((G__11214__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__11214__$1));
var G__11214__$3 = (((G__11214__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__11214__$2));
var G__11214__$4 = (((G__11214__$3 == null))?null:cljs.core.seq.call(null,G__11214__$3));
var G__11214__$5 = (((G__11214__$4 == null))?null:cljs.core.map.call(null,((function (G__11214,G__11214__$1,G__11214__$2,G__11214__$3,G__11214__$4){
return (function (p__11215){
var vec__11216 = p__11215;
var k = cljs.core.nth.call(null,vec__11216,(0),null);
var v = cljs.core.nth.call(null,vec__11216,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__11214,G__11214__$1,G__11214__$2,G__11214__$3,G__11214__$4))
,G__11214__$4));
if((G__11214__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11214__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__11219_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11219_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__11220,p__11221){
var vec__11222 = p__11220;
var p = cljs.core.nth.call(null,vec__11222,(0),null);
var m = cljs.core.nth.call(null,vec__11222,(1),null);
var route = vec__11222;
var map__11225 = p__11221;
var map__11225__$1 = (((((!((map__11225 == null))))?(((((map__11225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11225):map__11225);
var opts = map__11225__$1;
var compile = cljs.core.get.call(null,map__11225__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__11227_SHARP_){
return reitit.impl.compile_route.call(null,p1__11227_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.call(null,(function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.call(null,acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.call(null,path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.call(null,acc,p);
} else {
return cljs.core.reduced.call(null,null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.call(null,cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_.call(null,(function (p1__11228_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__11228_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,required,defined);
return reitit.exception.fail_BANG_.call(null,["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.call(null,a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return m.call(null,k);
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4131__auto__ = reitit.impl.maybe_url_decode.call(null,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values.call(null,reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (reitit.impl.into_string[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace.call(null,this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name.call(null,this$__$1)].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values.call(null,(function (p1__11230_SHARP_){
return reitit.impl.url_encode.call(null,reitit.impl.into_string.call(null,p1__11230_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__11231){
var vec__11232 = p__11231;
var k = cljs.core.nth.call(null,vec__11232,(0),null);
var v = cljs.core.nth.call(null,vec__11232,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,v)))].join('');
}),params));
});
var ret__4776__auto___11241 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11242 = arguments.length;
var i__4731__auto___11243 = (0);
while(true){
if((i__4731__auto___11243 < len__4730__auto___11242)){
args__4736__auto__.push((arguments[i__4731__auto___11243]));

var G__11244 = (i__4731__auto___11243 + (1));
i__4731__auto___11243 = G__11244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((5) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4737__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),ctor))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","inherits","goog/inherits",1191617838,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,base_type,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (method){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reitit.impl","-prototype","reitit.impl/-prototype",-650268084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,method))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest.call(null,method)))),null,(1),null)))));
}),methods$))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq11235){
var G__11236 = cljs.core.first.call(null,seq11235);
var seq11235__$1 = cljs.core.next.call(null,seq11235);
var G__11237 = cljs.core.first.call(null,seq11235__$1);
var seq11235__$2 = cljs.core.next.call(null,seq11235__$1);
var G__11238 = cljs.core.first.call(null,seq11235__$2);
var seq11235__$3 = cljs.core.next.call(null,seq11235__$2);
var G__11239 = cljs.core.first.call(null,seq11235__$3);
var seq11235__$4 = cljs.core.next.call(null,seq11235__$3);
var G__11240 = cljs.core.first.call(null,seq11235__$4);
var seq11235__$5 = cljs.core.next.call(null,seq11235__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11236,G__11237,G__11238,G__11239,G__11240,seq11235__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;


//# sourceMappingURL=impl.js.map
