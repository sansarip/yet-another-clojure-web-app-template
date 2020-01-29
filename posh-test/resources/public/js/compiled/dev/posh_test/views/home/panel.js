// Compiled by ClojureScript 1.10.520 {}
goog.provide('posh_test.views.home.panel');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('posh_test.views.home.styles');
goog.require('posh_test.subs');
goog.require('posh_test.events');
goog.require('posh_test.views.home.subs');
goog.require('posh_test.views.home.events');
posh_test.views.home.panel.make_item_list = (function posh_test$views$home$panel$make_item_list(items){
return cljs.core.reduce.call(null,(function (c,item){
return cljs.core.conj.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.second.call(null,item)], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051)], null),items);
});
posh_test.views.home.panel.home_panel = (function posh_test$views$home$panel$home_panel(){
var name = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.subs","name","posh-test.subs/name",-1875338157)], null)));
var map__26886 = cljs.core.deref.call(null,re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.views.home.subs","item-input","posh-test.views.home.subs/item-input",-1087606028)], null)));
var map__26886__$1 = (((((!((map__26886 == null))))?(((((map__26886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var item_input_id = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var item_input_val = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword("item-input","value","item-input/value",688907769));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),posh_test.views.home.styles.container_class.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Hello from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),". This is the Home Page."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here's a paragraph that demonstrates local styling."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,map__26886,map__26886__$1,item_input_id,item_input_val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.events","navigate","posh-test.events/navigate",817878841),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
});})(name,map__26886,map__26886__$1,item_input_id,item_input_val))
], null),"go to About Page"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Datascript Demo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter item name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (name,map__26886,map__26886__$1,item_input_id,item_input_val){
return (function (p1__26885_SHARP_){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.views.home.events","change-item-input","posh-test.views.home.events/change-item-input",-845839862),item_input_id,p1__26885_SHARP_.target.value], null));
});})(name,map__26886,map__26886__$1,item_input_id,item_input_val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,map__26886,map__26886__$1,item_input_id,item_input_val){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.views.home.events","add-item","posh-test.views.home.events/add-item",-1121117824),item_input_val], null));
});})(name,map__26886,map__26886__$1,item_input_id,item_input_val))
], null),"add item"], null),posh_test.views.home.panel.make_item_list.call(null,cljs.core.deref.call(null,re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("posh-test.views.home.subs","items","posh-test.views.home.subs/items",-437063009)], null))))], null);
});

//# sourceMappingURL=panel.js.map
