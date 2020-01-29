// Compiled by ClojureScript 1.10.520 {}
goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.call(null,a,cljs.core.take.call(null,(cljs.core.count.call(null,b) - cljs.core.count.call(null,a)),cljs.core.repeat.call(null,null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__26797,match){
var map__26798 = p__26797;
var map__26798__$1 = (((((!((map__26798 == null))))?(((((map__26798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26798):map__26798);
var identity = cljs.core.get.call(null,map__26798__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.call(null,map__26798__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.call(null,map__26798__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not.call(null,(function (){var and__4120__auto__ = identity;
if(cljs.core.truth_(and__4120__auto__)){
return parameters;
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref.call(null,reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (map__26798,map__26798__$1,identity,parameters,params){
return (function reitit$frontend$controllers$get_identity_$_iter__26800(s__26801){
return (new cljs.core.LazySeq(null,((function (map__26798,map__26798__$1,identity,parameters,params){
return (function (){
var s__26801__$1 = s__26801;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__26801__$1);
if(temp__5735__auto__){
var s__26801__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26801__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26801__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26803 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26802 = (0);
while(true){
if((i__26802 < size__4522__auto__)){
var vec__26804 = cljs.core._nth.call(null,c__4521__auto__,i__26802);
var param_type = cljs.core.nth.call(null,vec__26804,(0),null);
var ks = cljs.core.nth.call(null,vec__26804,(1),null);
cljs.core.chunk_append.call(null,b__26803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__26810 = (i__26802 + (1));
i__26802 = G__26810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26803),reitit$frontend$controllers$get_identity_$_iter__26800.call(null,cljs.core.chunk_rest.call(null,s__26801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26803),null);
}
} else {
var vec__26807 = cljs.core.first.call(null,s__26801__$2);
var param_type = cljs.core.nth.call(null,vec__26807,(0),null);
var ks = cljs.core.nth.call(null,vec__26807,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__26800.call(null,cljs.core.rest.call(null,s__26801__$2)));
}
} else {
return null;
}
break;
}
});})(map__26798,map__26798__$1,identity,parameters,params))
,null,null));
});})(map__26798,map__26798__$1,identity,parameters,params))
;
return iter__4523__auto__.call(null,parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return identity.call(null,match);
} else {
if(cljs.core.truth_(params)){
return params.call(null,match);
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.call(null,controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return f.call(null,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.call(null,(function (controller){
return cljs.core.assoc.call(null,controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity.call(null,controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (new_controllers){
return (function (old,new$){
if(cljs.core.not_EQ_.call(null,old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
});})(new_controllers))
,reitit.frontend.controllers.pad_same_length.call(null,old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length.call(null,new_controllers,old_controllers))));
var seq__26811_26819 = cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__26812_26820 = null;
var count__26813_26821 = (0);
var i__26814_26822 = (0);
while(true){
if((i__26814_26822 < count__26813_26821)){
var controller_26823 = cljs.core._nth.call(null,chunk__26812_26820,i__26814_26822);
reitit.frontend.controllers.apply_controller.call(null,controller_26823,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__26824 = seq__26811_26819;
var G__26825 = chunk__26812_26820;
var G__26826 = count__26813_26821;
var G__26827 = (i__26814_26822 + (1));
seq__26811_26819 = G__26824;
chunk__26812_26820 = G__26825;
count__26813_26821 = G__26826;
i__26814_26822 = G__26827;
continue;
} else {
var temp__5735__auto___26828 = cljs.core.seq.call(null,seq__26811_26819);
if(temp__5735__auto___26828){
var seq__26811_26829__$1 = temp__5735__auto___26828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26811_26829__$1)){
var c__4550__auto___26830 = cljs.core.chunk_first.call(null,seq__26811_26829__$1);
var G__26831 = cljs.core.chunk_rest.call(null,seq__26811_26829__$1);
var G__26832 = c__4550__auto___26830;
var G__26833 = cljs.core.count.call(null,c__4550__auto___26830);
var G__26834 = (0);
seq__26811_26819 = G__26831;
chunk__26812_26820 = G__26832;
count__26813_26821 = G__26833;
i__26814_26822 = G__26834;
continue;
} else {
var controller_26835 = cljs.core.first.call(null,seq__26811_26829__$1);
reitit.frontend.controllers.apply_controller.call(null,controller_26835,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__26836 = cljs.core.next.call(null,seq__26811_26829__$1);
var G__26837 = null;
var G__26838 = (0);
var G__26839 = (0);
seq__26811_26819 = G__26836;
chunk__26812_26820 = G__26837;
count__26813_26821 = G__26838;
i__26814_26822 = G__26839;
continue;
}
} else {
}
}
break;
}

var seq__26815_26840 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__26816_26841 = null;
var count__26817_26842 = (0);
var i__26818_26843 = (0);
while(true){
if((i__26818_26843 < count__26817_26842)){
var controller_26844 = cljs.core._nth.call(null,chunk__26816_26841,i__26818_26843);
reitit.frontend.controllers.apply_controller.call(null,controller_26844,new cljs.core.Keyword(null,"start","start",-355208981));


var G__26845 = seq__26815_26840;
var G__26846 = chunk__26816_26841;
var G__26847 = count__26817_26842;
var G__26848 = (i__26818_26843 + (1));
seq__26815_26840 = G__26845;
chunk__26816_26841 = G__26846;
count__26817_26842 = G__26847;
i__26818_26843 = G__26848;
continue;
} else {
var temp__5735__auto___26849 = cljs.core.seq.call(null,seq__26815_26840);
if(temp__5735__auto___26849){
var seq__26815_26850__$1 = temp__5735__auto___26849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26815_26850__$1)){
var c__4550__auto___26851 = cljs.core.chunk_first.call(null,seq__26815_26850__$1);
var G__26852 = cljs.core.chunk_rest.call(null,seq__26815_26850__$1);
var G__26853 = c__4550__auto___26851;
var G__26854 = cljs.core.count.call(null,c__4550__auto___26851);
var G__26855 = (0);
seq__26815_26840 = G__26852;
chunk__26816_26841 = G__26853;
count__26817_26842 = G__26854;
i__26818_26843 = G__26855;
continue;
} else {
var controller_26856 = cljs.core.first.call(null,seq__26815_26850__$1);
reitit.frontend.controllers.apply_controller.call(null,controller_26856,new cljs.core.Keyword(null,"start","start",-355208981));


var G__26857 = cljs.core.next.call(null,seq__26815_26850__$1);
var G__26858 = null;
var G__26859 = (0);
var G__26860 = (0);
seq__26815_26840 = G__26857;
chunk__26816_26841 = G__26858;
count__26817_26842 = G__26859;
i__26818_26843 = G__26860;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=controllers.js.map
