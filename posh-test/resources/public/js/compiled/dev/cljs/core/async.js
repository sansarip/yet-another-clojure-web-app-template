// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29809 = arguments.length;
switch (G__29809) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29810 = (function (f,blockable,meta29811){
this.f = f;
this.blockable = blockable;
this.meta29811 = meta29811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29812,meta29811__$1){
var self__ = this;
var _29812__$1 = this;
return (new cljs.core.async.t_cljs$core$async29810(self__.f,self__.blockable,meta29811__$1));
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29812){
var self__ = this;
var _29812__$1 = this;
return self__.meta29811;
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29811","meta29811",1081539700,null)], null);
});

cljs.core.async.t_cljs$core$async29810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29810";

cljs.core.async.t_cljs$core$async29810.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29810");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29810.
 */
cljs.core.async.__GT_t_cljs$core$async29810 = (function cljs$core$async$__GT_t_cljs$core$async29810(f__$1,blockable__$1,meta29811){
return (new cljs.core.async.t_cljs$core$async29810(f__$1,blockable__$1,meta29811));
});

}

return (new cljs.core.async.t_cljs$core$async29810(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29816 = arguments.length;
switch (G__29816) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29819 = arguments.length;
switch (G__29819) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29822 = arguments.length;
switch (G__29822) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29824 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29824);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29824,ret){
return (function (){
return fn1.call(null,val_29824);
});})(val_29824,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29826 = arguments.length;
switch (G__29826) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___29828 = n;
var x_29829 = (0);
while(true){
if((x_29829 < n__4607__auto___29828)){
(a[x_29829] = (0));

var G__29830 = (x_29829 + (1));
x_29829 = G__29830;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29831 = (i + (1));
i = G__29831;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29832 = (function (flag,meta29833){
this.flag = flag;
this.meta29833 = meta29833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29834,meta29833__$1){
var self__ = this;
var _29834__$1 = this;
return (new cljs.core.async.t_cljs$core$async29832(self__.flag,meta29833__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29834){
var self__ = this;
var _29834__$1 = this;
return self__.meta29833;
});})(flag))
;

cljs.core.async.t_cljs$core$async29832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29832.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29833","meta29833",1809899696,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29832";

cljs.core.async.t_cljs$core$async29832.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29832");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29832.
 */
cljs.core.async.__GT_t_cljs$core$async29832 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29832(flag__$1,meta29833){
return (new cljs.core.async.t_cljs$core$async29832(flag__$1,meta29833));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29832(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29835 = (function (flag,cb,meta29836){
this.flag = flag;
this.cb = cb;
this.meta29836 = meta29836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29837,meta29836__$1){
var self__ = this;
var _29837__$1 = this;
return (new cljs.core.async.t_cljs$core$async29835(self__.flag,self__.cb,meta29836__$1));
});

cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29837){
var self__ = this;
var _29837__$1 = this;
return self__.meta29836;
});

cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29836","meta29836",1150207108,null)], null);
});

cljs.core.async.t_cljs$core$async29835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29835";

cljs.core.async.t_cljs$core$async29835.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29835");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29835.
 */
cljs.core.async.__GT_t_cljs$core$async29835 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29835(flag__$1,cb__$1,meta29836){
return (new cljs.core.async.t_cljs$core$async29835(flag__$1,cb__$1,meta29836));
});

}

return (new cljs.core.async.t_cljs$core$async29835(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29838_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29838_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29839_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29839_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29840 = (i + (1));
i = G__29840;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29846 = arguments.length;
var i__4731__auto___29847 = (0);
while(true){
if((i__4731__auto___29847 < len__4730__auto___29846)){
args__4736__auto__.push((arguments[i__4731__auto___29847]));

var G__29848 = (i__4731__auto___29847 + (1));
i__4731__auto___29847 = G__29848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29843){
var map__29844 = p__29843;
var map__29844__$1 = (((((!((map__29844 == null))))?(((((map__29844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29844):map__29844);
var opts = map__29844__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29841){
var G__29842 = cljs.core.first.call(null,seq29841);
var seq29841__$1 = cljs.core.next.call(null,seq29841);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29842,seq29841__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29850 = arguments.length;
switch (G__29850) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29749__auto___29896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___29896){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___29896){
return (function (state_29874){
var state_val_29875 = (state_29874[(1)]);
if((state_val_29875 === (7))){
var inst_29870 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29876_29897 = state_29874__$1;
(statearr_29876_29897[(2)] = inst_29870);

(statearr_29876_29897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (1))){
var state_29874__$1 = state_29874;
var statearr_29877_29898 = state_29874__$1;
(statearr_29877_29898[(2)] = null);

(statearr_29877_29898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (4))){
var inst_29853 = (state_29874[(7)]);
var inst_29853__$1 = (state_29874[(2)]);
var inst_29854 = (inst_29853__$1 == null);
var state_29874__$1 = (function (){var statearr_29878 = state_29874;
(statearr_29878[(7)] = inst_29853__$1);

return statearr_29878;
})();
if(cljs.core.truth_(inst_29854)){
var statearr_29879_29899 = state_29874__$1;
(statearr_29879_29899[(1)] = (5));

} else {
var statearr_29880_29900 = state_29874__$1;
(statearr_29880_29900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (13))){
var state_29874__$1 = state_29874;
var statearr_29881_29901 = state_29874__$1;
(statearr_29881_29901[(2)] = null);

(statearr_29881_29901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (6))){
var inst_29853 = (state_29874[(7)]);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29874__$1,(11),to,inst_29853);
} else {
if((state_val_29875 === (3))){
var inst_29872 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29874__$1,inst_29872);
} else {
if((state_val_29875 === (12))){
var state_29874__$1 = state_29874;
var statearr_29882_29902 = state_29874__$1;
(statearr_29882_29902[(2)] = null);

(statearr_29882_29902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (2))){
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29874__$1,(4),from);
} else {
if((state_val_29875 === (11))){
var inst_29863 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
if(cljs.core.truth_(inst_29863)){
var statearr_29883_29903 = state_29874__$1;
(statearr_29883_29903[(1)] = (12));

} else {
var statearr_29884_29904 = state_29874__$1;
(statearr_29884_29904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (9))){
var state_29874__$1 = state_29874;
var statearr_29885_29905 = state_29874__$1;
(statearr_29885_29905[(2)] = null);

(statearr_29885_29905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (5))){
var state_29874__$1 = state_29874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29886_29906 = state_29874__$1;
(statearr_29886_29906[(1)] = (8));

} else {
var statearr_29887_29907 = state_29874__$1;
(statearr_29887_29907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (14))){
var inst_29868 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29888_29908 = state_29874__$1;
(statearr_29888_29908[(2)] = inst_29868);

(statearr_29888_29908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (10))){
var inst_29860 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29889_29909 = state_29874__$1;
(statearr_29889_29909[(2)] = inst_29860);

(statearr_29889_29909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (8))){
var inst_29857 = cljs.core.async.close_BANG_.call(null,to);
var state_29874__$1 = state_29874;
var statearr_29890_29910 = state_29874__$1;
(statearr_29890_29910[(2)] = inst_29857);

(statearr_29890_29910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__29749__auto___29896))
;
return ((function (switch__29654__auto__,c__29749__auto___29896){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_29891 = [null,null,null,null,null,null,null,null];
(statearr_29891[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_29891[(1)] = (1));

return statearr_29891;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_29874){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_29874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e29892){if((e29892 instanceof Object)){
var ex__29658__auto__ = e29892;
var statearr_29893_29911 = state_29874;
(statearr_29893_29911[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29912 = state_29874;
state_29874 = G__29912;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_29874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_29874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___29896))
})();
var state__29751__auto__ = (function (){var statearr_29894 = f__29750__auto__.call(null);
(statearr_29894[(6)] = c__29749__auto___29896);

return statearr_29894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___29896))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29913){
var vec__29914 = p__29913;
var v = cljs.core.nth.call(null,vec__29914,(0),null);
var p = cljs.core.nth.call(null,vec__29914,(1),null);
var job = vec__29914;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29749__auto___30085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___30085,res,vec__29914,v,p,job,jobs,results){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___30085,res,vec__29914,v,p,job,jobs,results){
return (function (state_29921){
var state_val_29922 = (state_29921[(1)]);
if((state_val_29922 === (1))){
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29921__$1,(2),res,v);
} else {
if((state_val_29922 === (2))){
var inst_29918 = (state_29921[(2)]);
var inst_29919 = cljs.core.async.close_BANG_.call(null,res);
var state_29921__$1 = (function (){var statearr_29923 = state_29921;
(statearr_29923[(7)] = inst_29918);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29921__$1,inst_29919);
} else {
return null;
}
}
});})(c__29749__auto___30085,res,vec__29914,v,p,job,jobs,results))
;
return ((function (switch__29654__auto__,c__29749__auto___30085,res,vec__29914,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0 = (function (){
var statearr_29924 = [null,null,null,null,null,null,null,null];
(statearr_29924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__);

(statearr_29924[(1)] = (1));

return statearr_29924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1 = (function (state_29921){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_29921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e29925){if((e29925 instanceof Object)){
var ex__29658__auto__ = e29925;
var statearr_29926_30086 = state_29921;
(statearr_29926_30086[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30087 = state_29921;
state_29921 = G__30087;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = function(state_29921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1.call(this,state_29921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___30085,res,vec__29914,v,p,job,jobs,results))
})();
var state__29751__auto__ = (function (){var statearr_29927 = f__29750__auto__.call(null);
(statearr_29927[(6)] = c__29749__auto___30085);

return statearr_29927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___30085,res,vec__29914,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29928){
var vec__29929 = p__29928;
var v = cljs.core.nth.call(null,vec__29929,(0),null);
var p = cljs.core.nth.call(null,vec__29929,(1),null);
var job = vec__29929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___30088 = n;
var __30089 = (0);
while(true){
if((__30089 < n__4607__auto___30088)){
var G__29932_30090 = type;
var G__29932_30091__$1 = (((G__29932_30090 instanceof cljs.core.Keyword))?G__29932_30090.fqn:null);
switch (G__29932_30091__$1) {
case "compute":
var c__29749__auto___30093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30089,c__29749__auto___30093,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (__30089,c__29749__auto___30093,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async){
return (function (state_29945){
var state_val_29946 = (state_29945[(1)]);
if((state_val_29946 === (1))){
var state_29945__$1 = state_29945;
var statearr_29947_30094 = state_29945__$1;
(statearr_29947_30094[(2)] = null);

(statearr_29947_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (2))){
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29945__$1,(4),jobs);
} else {
if((state_val_29946 === (3))){
var inst_29943 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29945__$1,inst_29943);
} else {
if((state_val_29946 === (4))){
var inst_29935 = (state_29945[(2)]);
var inst_29936 = process.call(null,inst_29935);
var state_29945__$1 = state_29945;
if(cljs.core.truth_(inst_29936)){
var statearr_29948_30095 = state_29945__$1;
(statearr_29948_30095[(1)] = (5));

} else {
var statearr_29949_30096 = state_29945__$1;
(statearr_29949_30096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (5))){
var state_29945__$1 = state_29945;
var statearr_29950_30097 = state_29945__$1;
(statearr_29950_30097[(2)] = null);

(statearr_29950_30097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (6))){
var state_29945__$1 = state_29945;
var statearr_29951_30098 = state_29945__$1;
(statearr_29951_30098[(2)] = null);

(statearr_29951_30098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29946 === (7))){
var inst_29941 = (state_29945[(2)]);
var state_29945__$1 = state_29945;
var statearr_29952_30099 = state_29945__$1;
(statearr_29952_30099[(2)] = inst_29941);

(statearr_29952_30099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30089,c__29749__auto___30093,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async))
;
return ((function (__30089,switch__29654__auto__,c__29749__auto___30093,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0 = (function (){
var statearr_29953 = [null,null,null,null,null,null,null];
(statearr_29953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__);

(statearr_29953[(1)] = (1));

return statearr_29953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1 = (function (state_29945){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_29945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e29954){if((e29954 instanceof Object)){
var ex__29658__auto__ = e29954;
var statearr_29955_30100 = state_29945;
(statearr_29955_30100[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30101 = state_29945;
state_29945 = G__30101;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = function(state_29945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1.call(this,state_29945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__;
})()
;})(__30089,switch__29654__auto__,c__29749__auto___30093,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async))
})();
var state__29751__auto__ = (function (){var statearr_29956 = f__29750__auto__.call(null);
(statearr_29956[(6)] = c__29749__auto___30093);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(__30089,c__29749__auto___30093,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async))
);


break;
case "async":
var c__29749__auto___30102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30089,c__29749__auto___30102,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (__30089,c__29749__auto___30102,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async){
return (function (state_29969){
var state_val_29970 = (state_29969[(1)]);
if((state_val_29970 === (1))){
var state_29969__$1 = state_29969;
var statearr_29971_30103 = state_29969__$1;
(statearr_29971_30103[(2)] = null);

(statearr_29971_30103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (2))){
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29969__$1,(4),jobs);
} else {
if((state_val_29970 === (3))){
var inst_29967 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29969__$1,inst_29967);
} else {
if((state_val_29970 === (4))){
var inst_29959 = (state_29969[(2)]);
var inst_29960 = async.call(null,inst_29959);
var state_29969__$1 = state_29969;
if(cljs.core.truth_(inst_29960)){
var statearr_29972_30104 = state_29969__$1;
(statearr_29972_30104[(1)] = (5));

} else {
var statearr_29973_30105 = state_29969__$1;
(statearr_29973_30105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (5))){
var state_29969__$1 = state_29969;
var statearr_29974_30106 = state_29969__$1;
(statearr_29974_30106[(2)] = null);

(statearr_29974_30106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (6))){
var state_29969__$1 = state_29969;
var statearr_29975_30107 = state_29969__$1;
(statearr_29975_30107[(2)] = null);

(statearr_29975_30107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (7))){
var inst_29965 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
var statearr_29976_30108 = state_29969__$1;
(statearr_29976_30108[(2)] = inst_29965);

(statearr_29976_30108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30089,c__29749__auto___30102,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async))
;
return ((function (__30089,switch__29654__auto__,c__29749__auto___30102,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0 = (function (){
var statearr_29977 = [null,null,null,null,null,null,null];
(statearr_29977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__);

(statearr_29977[(1)] = (1));

return statearr_29977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1 = (function (state_29969){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_29969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e29978){if((e29978 instanceof Object)){
var ex__29658__auto__ = e29978;
var statearr_29979_30109 = state_29969;
(statearr_29979_30109[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30110 = state_29969;
state_29969 = G__30110;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = function(state_29969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1.call(this,state_29969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__;
})()
;})(__30089,switch__29654__auto__,c__29749__auto___30102,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async))
})();
var state__29751__auto__ = (function (){var statearr_29980 = f__29750__auto__.call(null);
(statearr_29980[(6)] = c__29749__auto___30102);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(__30089,c__29749__auto___30102,G__29932_30090,G__29932_30091__$1,n__4607__auto___30088,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29932_30091__$1)].join('')));

}

var G__30111 = (__30089 + (1));
__30089 = G__30111;
continue;
} else {
}
break;
}

var c__29749__auto___30112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___30112,jobs,results,process,async){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___30112,jobs,results,process,async){
return (function (state_30002){
var state_val_30003 = (state_30002[(1)]);
if((state_val_30003 === (7))){
var inst_29998 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30004_30113 = state_30002__$1;
(statearr_30004_30113[(2)] = inst_29998);

(statearr_30004_30113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (1))){
var state_30002__$1 = state_30002;
var statearr_30005_30114 = state_30002__$1;
(statearr_30005_30114[(2)] = null);

(statearr_30005_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (4))){
var inst_29983 = (state_30002[(7)]);
var inst_29983__$1 = (state_30002[(2)]);
var inst_29984 = (inst_29983__$1 == null);
var state_30002__$1 = (function (){var statearr_30006 = state_30002;
(statearr_30006[(7)] = inst_29983__$1);

return statearr_30006;
})();
if(cljs.core.truth_(inst_29984)){
var statearr_30007_30115 = state_30002__$1;
(statearr_30007_30115[(1)] = (5));

} else {
var statearr_30008_30116 = state_30002__$1;
(statearr_30008_30116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (6))){
var inst_29988 = (state_30002[(8)]);
var inst_29983 = (state_30002[(7)]);
var inst_29988__$1 = cljs.core.async.chan.call(null,(1));
var inst_29989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29990 = [inst_29983,inst_29988__$1];
var inst_29991 = (new cljs.core.PersistentVector(null,2,(5),inst_29989,inst_29990,null));
var state_30002__$1 = (function (){var statearr_30009 = state_30002;
(statearr_30009[(8)] = inst_29988__$1);

return statearr_30009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30002__$1,(8),jobs,inst_29991);
} else {
if((state_val_30003 === (3))){
var inst_30000 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30002__$1,inst_30000);
} else {
if((state_val_30003 === (2))){
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30002__$1,(4),from);
} else {
if((state_val_30003 === (9))){
var inst_29995 = (state_30002[(2)]);
var state_30002__$1 = (function (){var statearr_30010 = state_30002;
(statearr_30010[(9)] = inst_29995);

return statearr_30010;
})();
var statearr_30011_30117 = state_30002__$1;
(statearr_30011_30117[(2)] = null);

(statearr_30011_30117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (5))){
var inst_29986 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30002__$1 = state_30002;
var statearr_30012_30118 = state_30002__$1;
(statearr_30012_30118[(2)] = inst_29986);

(statearr_30012_30118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (8))){
var inst_29988 = (state_30002[(8)]);
var inst_29993 = (state_30002[(2)]);
var state_30002__$1 = (function (){var statearr_30013 = state_30002;
(statearr_30013[(10)] = inst_29993);

return statearr_30013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30002__$1,(9),results,inst_29988);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29749__auto___30112,jobs,results,process,async))
;
return ((function (switch__29654__auto__,c__29749__auto___30112,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0 = (function (){
var statearr_30014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__);

(statearr_30014[(1)] = (1));

return statearr_30014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1 = (function (state_30002){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30015){if((e30015 instanceof Object)){
var ex__29658__auto__ = e30015;
var statearr_30016_30119 = state_30002;
(statearr_30016_30119[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30120 = state_30002;
state_30002 = G__30120;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = function(state_30002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1.call(this,state_30002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___30112,jobs,results,process,async))
})();
var state__29751__auto__ = (function (){var statearr_30017 = f__29750__auto__.call(null);
(statearr_30017[(6)] = c__29749__auto___30112);

return statearr_30017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___30112,jobs,results,process,async))
);


var c__29749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto__,jobs,results,process,async){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto__,jobs,results,process,async){
return (function (state_30055){
var state_val_30056 = (state_30055[(1)]);
if((state_val_30056 === (7))){
var inst_30051 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30057_30121 = state_30055__$1;
(statearr_30057_30121[(2)] = inst_30051);

(statearr_30057_30121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (20))){
var state_30055__$1 = state_30055;
var statearr_30058_30122 = state_30055__$1;
(statearr_30058_30122[(2)] = null);

(statearr_30058_30122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (1))){
var state_30055__$1 = state_30055;
var statearr_30059_30123 = state_30055__$1;
(statearr_30059_30123[(2)] = null);

(statearr_30059_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (4))){
var inst_30020 = (state_30055[(7)]);
var inst_30020__$1 = (state_30055[(2)]);
var inst_30021 = (inst_30020__$1 == null);
var state_30055__$1 = (function (){var statearr_30060 = state_30055;
(statearr_30060[(7)] = inst_30020__$1);

return statearr_30060;
})();
if(cljs.core.truth_(inst_30021)){
var statearr_30061_30124 = state_30055__$1;
(statearr_30061_30124[(1)] = (5));

} else {
var statearr_30062_30125 = state_30055__$1;
(statearr_30062_30125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (15))){
var inst_30033 = (state_30055[(8)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30055__$1,(18),to,inst_30033);
} else {
if((state_val_30056 === (21))){
var inst_30046 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30063_30126 = state_30055__$1;
(statearr_30063_30126[(2)] = inst_30046);

(statearr_30063_30126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (13))){
var inst_30048 = (state_30055[(2)]);
var state_30055__$1 = (function (){var statearr_30064 = state_30055;
(statearr_30064[(9)] = inst_30048);

return statearr_30064;
})();
var statearr_30065_30127 = state_30055__$1;
(statearr_30065_30127[(2)] = null);

(statearr_30065_30127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (6))){
var inst_30020 = (state_30055[(7)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30055__$1,(11),inst_30020);
} else {
if((state_val_30056 === (17))){
var inst_30041 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
if(cljs.core.truth_(inst_30041)){
var statearr_30066_30128 = state_30055__$1;
(statearr_30066_30128[(1)] = (19));

} else {
var statearr_30067_30129 = state_30055__$1;
(statearr_30067_30129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (3))){
var inst_30053 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30055__$1,inst_30053);
} else {
if((state_val_30056 === (12))){
var inst_30030 = (state_30055[(10)]);
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30055__$1,(14),inst_30030);
} else {
if((state_val_30056 === (2))){
var state_30055__$1 = state_30055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30055__$1,(4),results);
} else {
if((state_val_30056 === (19))){
var state_30055__$1 = state_30055;
var statearr_30068_30130 = state_30055__$1;
(statearr_30068_30130[(2)] = null);

(statearr_30068_30130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (11))){
var inst_30030 = (state_30055[(2)]);
var state_30055__$1 = (function (){var statearr_30069 = state_30055;
(statearr_30069[(10)] = inst_30030);

return statearr_30069;
})();
var statearr_30070_30131 = state_30055__$1;
(statearr_30070_30131[(2)] = null);

(statearr_30070_30131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (9))){
var state_30055__$1 = state_30055;
var statearr_30071_30132 = state_30055__$1;
(statearr_30071_30132[(2)] = null);

(statearr_30071_30132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (5))){
var state_30055__$1 = state_30055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30072_30133 = state_30055__$1;
(statearr_30072_30133[(1)] = (8));

} else {
var statearr_30073_30134 = state_30055__$1;
(statearr_30073_30134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (14))){
var inst_30033 = (state_30055[(8)]);
var inst_30035 = (state_30055[(11)]);
var inst_30033__$1 = (state_30055[(2)]);
var inst_30034 = (inst_30033__$1 == null);
var inst_30035__$1 = cljs.core.not.call(null,inst_30034);
var state_30055__$1 = (function (){var statearr_30074 = state_30055;
(statearr_30074[(8)] = inst_30033__$1);

(statearr_30074[(11)] = inst_30035__$1);

return statearr_30074;
})();
if(inst_30035__$1){
var statearr_30075_30135 = state_30055__$1;
(statearr_30075_30135[(1)] = (15));

} else {
var statearr_30076_30136 = state_30055__$1;
(statearr_30076_30136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (16))){
var inst_30035 = (state_30055[(11)]);
var state_30055__$1 = state_30055;
var statearr_30077_30137 = state_30055__$1;
(statearr_30077_30137[(2)] = inst_30035);

(statearr_30077_30137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (10))){
var inst_30027 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30078_30138 = state_30055__$1;
(statearr_30078_30138[(2)] = inst_30027);

(statearr_30078_30138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (18))){
var inst_30038 = (state_30055[(2)]);
var state_30055__$1 = state_30055;
var statearr_30079_30139 = state_30055__$1;
(statearr_30079_30139[(2)] = inst_30038);

(statearr_30079_30139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30056 === (8))){
var inst_30024 = cljs.core.async.close_BANG_.call(null,to);
var state_30055__$1 = state_30055;
var statearr_30080_30140 = state_30055__$1;
(statearr_30080_30140[(2)] = inst_30024);

(statearr_30080_30140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__29749__auto__,jobs,results,process,async))
;
return ((function (switch__29654__auto__,c__29749__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0 = (function (){
var statearr_30081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__);

(statearr_30081[(1)] = (1));

return statearr_30081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1 = (function (state_30055){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30082){if((e30082 instanceof Object)){
var ex__29658__auto__ = e30082;
var statearr_30083_30141 = state_30055;
(statearr_30083_30141[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30142 = state_30055;
state_30055 = G__30142;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__ = function(state_30055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1.call(this,state_30055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto__,jobs,results,process,async))
})();
var state__29751__auto__ = (function (){var statearr_30084 = f__29750__auto__.call(null);
(statearr_30084[(6)] = c__29749__auto__);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto__,jobs,results,process,async))
);

return c__29749__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30144 = arguments.length;
switch (G__30144) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30147 = arguments.length;
switch (G__30147) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30150 = arguments.length;
switch (G__30150) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29749__auto___30199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___30199,tc,fc){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___30199,tc,fc){
return (function (state_30176){
var state_val_30177 = (state_30176[(1)]);
if((state_val_30177 === (7))){
var inst_30172 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30178_30200 = state_30176__$1;
(statearr_30178_30200[(2)] = inst_30172);

(statearr_30178_30200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (1))){
var state_30176__$1 = state_30176;
var statearr_30179_30201 = state_30176__$1;
(statearr_30179_30201[(2)] = null);

(statearr_30179_30201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (4))){
var inst_30153 = (state_30176[(7)]);
var inst_30153__$1 = (state_30176[(2)]);
var inst_30154 = (inst_30153__$1 == null);
var state_30176__$1 = (function (){var statearr_30180 = state_30176;
(statearr_30180[(7)] = inst_30153__$1);

return statearr_30180;
})();
if(cljs.core.truth_(inst_30154)){
var statearr_30181_30202 = state_30176__$1;
(statearr_30181_30202[(1)] = (5));

} else {
var statearr_30182_30203 = state_30176__$1;
(statearr_30182_30203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (13))){
var state_30176__$1 = state_30176;
var statearr_30183_30204 = state_30176__$1;
(statearr_30183_30204[(2)] = null);

(statearr_30183_30204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (6))){
var inst_30153 = (state_30176[(7)]);
var inst_30159 = p.call(null,inst_30153);
var state_30176__$1 = state_30176;
if(cljs.core.truth_(inst_30159)){
var statearr_30184_30205 = state_30176__$1;
(statearr_30184_30205[(1)] = (9));

} else {
var statearr_30185_30206 = state_30176__$1;
(statearr_30185_30206[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (3))){
var inst_30174 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30176__$1,inst_30174);
} else {
if((state_val_30177 === (12))){
var state_30176__$1 = state_30176;
var statearr_30186_30207 = state_30176__$1;
(statearr_30186_30207[(2)] = null);

(statearr_30186_30207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (2))){
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30176__$1,(4),ch);
} else {
if((state_val_30177 === (11))){
var inst_30153 = (state_30176[(7)]);
var inst_30163 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30176__$1,(8),inst_30163,inst_30153);
} else {
if((state_val_30177 === (9))){
var state_30176__$1 = state_30176;
var statearr_30187_30208 = state_30176__$1;
(statearr_30187_30208[(2)] = tc);

(statearr_30187_30208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (5))){
var inst_30156 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30157 = cljs.core.async.close_BANG_.call(null,fc);
var state_30176__$1 = (function (){var statearr_30188 = state_30176;
(statearr_30188[(8)] = inst_30156);

return statearr_30188;
})();
var statearr_30189_30209 = state_30176__$1;
(statearr_30189_30209[(2)] = inst_30157);

(statearr_30189_30209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (14))){
var inst_30170 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30190_30210 = state_30176__$1;
(statearr_30190_30210[(2)] = inst_30170);

(statearr_30190_30210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (10))){
var state_30176__$1 = state_30176;
var statearr_30191_30211 = state_30176__$1;
(statearr_30191_30211[(2)] = fc);

(statearr_30191_30211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (8))){
var inst_30165 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
if(cljs.core.truth_(inst_30165)){
var statearr_30192_30212 = state_30176__$1;
(statearr_30192_30212[(1)] = (12));

} else {
var statearr_30193_30213 = state_30176__$1;
(statearr_30193_30213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__29749__auto___30199,tc,fc))
;
return ((function (switch__29654__auto__,c__29749__auto___30199,tc,fc){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_30194 = [null,null,null,null,null,null,null,null,null];
(statearr_30194[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_30194[(1)] = (1));

return statearr_30194;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_30176){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30195){if((e30195 instanceof Object)){
var ex__29658__auto__ = e30195;
var statearr_30196_30214 = state_30176;
(statearr_30196_30214[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30215 = state_30176;
state_30176 = G__30215;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_30176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_30176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___30199,tc,fc))
})();
var state__29751__auto__ = (function (){var statearr_30197 = f__29750__auto__.call(null);
(statearr_30197[(6)] = c__29749__auto___30199);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___30199,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto__){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto__){
return (function (state_30236){
var state_val_30237 = (state_30236[(1)]);
if((state_val_30237 === (7))){
var inst_30232 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
var statearr_30238_30256 = state_30236__$1;
(statearr_30238_30256[(2)] = inst_30232);

(statearr_30238_30256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (1))){
var inst_30216 = init;
var state_30236__$1 = (function (){var statearr_30239 = state_30236;
(statearr_30239[(7)] = inst_30216);

return statearr_30239;
})();
var statearr_30240_30257 = state_30236__$1;
(statearr_30240_30257[(2)] = null);

(statearr_30240_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (4))){
var inst_30219 = (state_30236[(8)]);
var inst_30219__$1 = (state_30236[(2)]);
var inst_30220 = (inst_30219__$1 == null);
var state_30236__$1 = (function (){var statearr_30241 = state_30236;
(statearr_30241[(8)] = inst_30219__$1);

return statearr_30241;
})();
if(cljs.core.truth_(inst_30220)){
var statearr_30242_30258 = state_30236__$1;
(statearr_30242_30258[(1)] = (5));

} else {
var statearr_30243_30259 = state_30236__$1;
(statearr_30243_30259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (6))){
var inst_30219 = (state_30236[(8)]);
var inst_30223 = (state_30236[(9)]);
var inst_30216 = (state_30236[(7)]);
var inst_30223__$1 = f.call(null,inst_30216,inst_30219);
var inst_30224 = cljs.core.reduced_QMARK_.call(null,inst_30223__$1);
var state_30236__$1 = (function (){var statearr_30244 = state_30236;
(statearr_30244[(9)] = inst_30223__$1);

return statearr_30244;
})();
if(inst_30224){
var statearr_30245_30260 = state_30236__$1;
(statearr_30245_30260[(1)] = (8));

} else {
var statearr_30246_30261 = state_30236__$1;
(statearr_30246_30261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (3))){
var inst_30234 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30236__$1,inst_30234);
} else {
if((state_val_30237 === (2))){
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30236__$1,(4),ch);
} else {
if((state_val_30237 === (9))){
var inst_30223 = (state_30236[(9)]);
var inst_30216 = inst_30223;
var state_30236__$1 = (function (){var statearr_30247 = state_30236;
(statearr_30247[(7)] = inst_30216);

return statearr_30247;
})();
var statearr_30248_30262 = state_30236__$1;
(statearr_30248_30262[(2)] = null);

(statearr_30248_30262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (5))){
var inst_30216 = (state_30236[(7)]);
var state_30236__$1 = state_30236;
var statearr_30249_30263 = state_30236__$1;
(statearr_30249_30263[(2)] = inst_30216);

(statearr_30249_30263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (10))){
var inst_30230 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
var statearr_30250_30264 = state_30236__$1;
(statearr_30250_30264[(2)] = inst_30230);

(statearr_30250_30264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (8))){
var inst_30223 = (state_30236[(9)]);
var inst_30226 = cljs.core.deref.call(null,inst_30223);
var state_30236__$1 = state_30236;
var statearr_30251_30265 = state_30236__$1;
(statearr_30251_30265[(2)] = inst_30226);

(statearr_30251_30265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__29749__auto__))
;
return ((function (switch__29654__auto__,c__29749__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29655__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29655__auto____0 = (function (){
var statearr_30252 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30252[(0)] = cljs$core$async$reduce_$_state_machine__29655__auto__);

(statearr_30252[(1)] = (1));

return statearr_30252;
});
var cljs$core$async$reduce_$_state_machine__29655__auto____1 = (function (state_30236){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object)){
var ex__29658__auto__ = e30253;
var statearr_30254_30266 = state_30236;
(statearr_30254_30266[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30267 = state_30236;
state_30236 = G__30267;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29655__auto__ = function(state_30236){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29655__auto____1.call(this,state_30236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29655__auto____0;
cljs$core$async$reduce_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29655__auto____1;
return cljs$core$async$reduce_$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto__))
})();
var state__29751__auto__ = (function (){var statearr_30255 = f__29750__auto__.call(null);
(statearr_30255[(6)] = c__29749__auto__);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto__))
);

return c__29749__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto__,f__$1){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto__,f__$1){
return (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (1))){
var inst_30268 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30273__$1,(2),inst_30268);
} else {
if((state_val_30274 === (2))){
var inst_30270 = (state_30273[(2)]);
var inst_30271 = f__$1.call(null,inst_30270);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else {
return null;
}
}
});})(c__29749__auto__,f__$1))
;
return ((function (switch__29654__auto__,c__29749__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29655__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29655__auto____0 = (function (){
var statearr_30275 = [null,null,null,null,null,null,null];
(statearr_30275[(0)] = cljs$core$async$transduce_$_state_machine__29655__auto__);

(statearr_30275[(1)] = (1));

return statearr_30275;
});
var cljs$core$async$transduce_$_state_machine__29655__auto____1 = (function (state_30273){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30276){if((e30276 instanceof Object)){
var ex__29658__auto__ = e30276;
var statearr_30277_30279 = state_30273;
(statearr_30277_30279[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_30273;
state_30273 = G__30280;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29655__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29655__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29655__auto____0;
cljs$core$async$transduce_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29655__auto____1;
return cljs$core$async$transduce_$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto__,f__$1))
})();
var state__29751__auto__ = (function (){var statearr_30278 = f__29750__auto__.call(null);
(statearr_30278[(6)] = c__29749__auto__);

return statearr_30278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto__,f__$1))
);

return c__29749__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30282 = arguments.length;
switch (G__30282) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto__){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto__){
return (function (state_30307){
var state_val_30308 = (state_30307[(1)]);
if((state_val_30308 === (7))){
var inst_30289 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
var statearr_30309_30330 = state_30307__$1;
(statearr_30309_30330[(2)] = inst_30289);

(statearr_30309_30330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (1))){
var inst_30283 = cljs.core.seq.call(null,coll);
var inst_30284 = inst_30283;
var state_30307__$1 = (function (){var statearr_30310 = state_30307;
(statearr_30310[(7)] = inst_30284);

return statearr_30310;
})();
var statearr_30311_30331 = state_30307__$1;
(statearr_30311_30331[(2)] = null);

(statearr_30311_30331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (4))){
var inst_30284 = (state_30307[(7)]);
var inst_30287 = cljs.core.first.call(null,inst_30284);
var state_30307__$1 = state_30307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30307__$1,(7),ch,inst_30287);
} else {
if((state_val_30308 === (13))){
var inst_30301 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
var statearr_30312_30332 = state_30307__$1;
(statearr_30312_30332[(2)] = inst_30301);

(statearr_30312_30332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (6))){
var inst_30292 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
if(cljs.core.truth_(inst_30292)){
var statearr_30313_30333 = state_30307__$1;
(statearr_30313_30333[(1)] = (8));

} else {
var statearr_30314_30334 = state_30307__$1;
(statearr_30314_30334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (3))){
var inst_30305 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30307__$1,inst_30305);
} else {
if((state_val_30308 === (12))){
var state_30307__$1 = state_30307;
var statearr_30315_30335 = state_30307__$1;
(statearr_30315_30335[(2)] = null);

(statearr_30315_30335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (2))){
var inst_30284 = (state_30307[(7)]);
var state_30307__$1 = state_30307;
if(cljs.core.truth_(inst_30284)){
var statearr_30316_30336 = state_30307__$1;
(statearr_30316_30336[(1)] = (4));

} else {
var statearr_30317_30337 = state_30307__$1;
(statearr_30317_30337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (11))){
var inst_30298 = cljs.core.async.close_BANG_.call(null,ch);
var state_30307__$1 = state_30307;
var statearr_30318_30338 = state_30307__$1;
(statearr_30318_30338[(2)] = inst_30298);

(statearr_30318_30338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (9))){
var state_30307__$1 = state_30307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30319_30339 = state_30307__$1;
(statearr_30319_30339[(1)] = (11));

} else {
var statearr_30320_30340 = state_30307__$1;
(statearr_30320_30340[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (5))){
var inst_30284 = (state_30307[(7)]);
var state_30307__$1 = state_30307;
var statearr_30321_30341 = state_30307__$1;
(statearr_30321_30341[(2)] = inst_30284);

(statearr_30321_30341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (10))){
var inst_30303 = (state_30307[(2)]);
var state_30307__$1 = state_30307;
var statearr_30322_30342 = state_30307__$1;
(statearr_30322_30342[(2)] = inst_30303);

(statearr_30322_30342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30308 === (8))){
var inst_30284 = (state_30307[(7)]);
var inst_30294 = cljs.core.next.call(null,inst_30284);
var inst_30284__$1 = inst_30294;
var state_30307__$1 = (function (){var statearr_30323 = state_30307;
(statearr_30323[(7)] = inst_30284__$1);

return statearr_30323;
})();
var statearr_30324_30343 = state_30307__$1;
(statearr_30324_30343[(2)] = null);

(statearr_30324_30343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__29749__auto__))
;
return ((function (switch__29654__auto__,c__29749__auto__){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_30325 = [null,null,null,null,null,null,null,null];
(statearr_30325[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_30325[(1)] = (1));

return statearr_30325;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_30307){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30326){if((e30326 instanceof Object)){
var ex__29658__auto__ = e30326;
var statearr_30327_30344 = state_30307;
(statearr_30327_30344[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30345 = state_30307;
state_30307 = G__30345;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_30307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_30307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto__))
})();
var state__29751__auto__ = (function (){var statearr_30328 = f__29750__auto__.call(null);
(statearr_30328[(6)] = c__29749__auto__);

return statearr_30328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto__))
);

return c__29749__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30346 = (function (ch,cs,meta30347){
this.ch = ch;
this.cs = cs;
this.meta30347 = meta30347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30348,meta30347__$1){
var self__ = this;
var _30348__$1 = this;
return (new cljs.core.async.t_cljs$core$async30346(self__.ch,self__.cs,meta30347__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30348){
var self__ = this;
var _30348__$1 = this;
return self__.meta30347;
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30347","meta30347",2126280888,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30346";

cljs.core.async.t_cljs$core$async30346.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30346");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30346.
 */
cljs.core.async.__GT_t_cljs$core$async30346 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30346(ch__$1,cs__$1,meta30347){
return (new cljs.core.async.t_cljs$core$async30346(ch__$1,cs__$1,meta30347));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30346(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29749__auto___30568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___30568,cs,m,dchan,dctr,done){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___30568,cs,m,dchan,dctr,done){
return (function (state_30483){
var state_val_30484 = (state_30483[(1)]);
if((state_val_30484 === (7))){
var inst_30479 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30485_30569 = state_30483__$1;
(statearr_30485_30569[(2)] = inst_30479);

(statearr_30485_30569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (20))){
var inst_30382 = (state_30483[(7)]);
var inst_30394 = cljs.core.first.call(null,inst_30382);
var inst_30395 = cljs.core.nth.call(null,inst_30394,(0),null);
var inst_30396 = cljs.core.nth.call(null,inst_30394,(1),null);
var state_30483__$1 = (function (){var statearr_30486 = state_30483;
(statearr_30486[(8)] = inst_30395);

return statearr_30486;
})();
if(cljs.core.truth_(inst_30396)){
var statearr_30487_30570 = state_30483__$1;
(statearr_30487_30570[(1)] = (22));

} else {
var statearr_30488_30571 = state_30483__$1;
(statearr_30488_30571[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (27))){
var inst_30351 = (state_30483[(9)]);
var inst_30426 = (state_30483[(10)]);
var inst_30424 = (state_30483[(11)]);
var inst_30431 = (state_30483[(12)]);
var inst_30431__$1 = cljs.core._nth.call(null,inst_30424,inst_30426);
var inst_30432 = cljs.core.async.put_BANG_.call(null,inst_30431__$1,inst_30351,done);
var state_30483__$1 = (function (){var statearr_30489 = state_30483;
(statearr_30489[(12)] = inst_30431__$1);

return statearr_30489;
})();
if(cljs.core.truth_(inst_30432)){
var statearr_30490_30572 = state_30483__$1;
(statearr_30490_30572[(1)] = (30));

} else {
var statearr_30491_30573 = state_30483__$1;
(statearr_30491_30573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (1))){
var state_30483__$1 = state_30483;
var statearr_30492_30574 = state_30483__$1;
(statearr_30492_30574[(2)] = null);

(statearr_30492_30574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (24))){
var inst_30382 = (state_30483[(7)]);
var inst_30401 = (state_30483[(2)]);
var inst_30402 = cljs.core.next.call(null,inst_30382);
var inst_30360 = inst_30402;
var inst_30361 = null;
var inst_30362 = (0);
var inst_30363 = (0);
var state_30483__$1 = (function (){var statearr_30493 = state_30483;
(statearr_30493[(13)] = inst_30362);

(statearr_30493[(14)] = inst_30401);

(statearr_30493[(15)] = inst_30363);

(statearr_30493[(16)] = inst_30361);

(statearr_30493[(17)] = inst_30360);

return statearr_30493;
})();
var statearr_30494_30575 = state_30483__$1;
(statearr_30494_30575[(2)] = null);

(statearr_30494_30575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (39))){
var state_30483__$1 = state_30483;
var statearr_30498_30576 = state_30483__$1;
(statearr_30498_30576[(2)] = null);

(statearr_30498_30576[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (4))){
var inst_30351 = (state_30483[(9)]);
var inst_30351__$1 = (state_30483[(2)]);
var inst_30352 = (inst_30351__$1 == null);
var state_30483__$1 = (function (){var statearr_30499 = state_30483;
(statearr_30499[(9)] = inst_30351__$1);

return statearr_30499;
})();
if(cljs.core.truth_(inst_30352)){
var statearr_30500_30577 = state_30483__$1;
(statearr_30500_30577[(1)] = (5));

} else {
var statearr_30501_30578 = state_30483__$1;
(statearr_30501_30578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (15))){
var inst_30362 = (state_30483[(13)]);
var inst_30363 = (state_30483[(15)]);
var inst_30361 = (state_30483[(16)]);
var inst_30360 = (state_30483[(17)]);
var inst_30378 = (state_30483[(2)]);
var inst_30379 = (inst_30363 + (1));
var tmp30495 = inst_30362;
var tmp30496 = inst_30361;
var tmp30497 = inst_30360;
var inst_30360__$1 = tmp30497;
var inst_30361__$1 = tmp30496;
var inst_30362__$1 = tmp30495;
var inst_30363__$1 = inst_30379;
var state_30483__$1 = (function (){var statearr_30502 = state_30483;
(statearr_30502[(13)] = inst_30362__$1);

(statearr_30502[(18)] = inst_30378);

(statearr_30502[(15)] = inst_30363__$1);

(statearr_30502[(16)] = inst_30361__$1);

(statearr_30502[(17)] = inst_30360__$1);

return statearr_30502;
})();
var statearr_30503_30579 = state_30483__$1;
(statearr_30503_30579[(2)] = null);

(statearr_30503_30579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (21))){
var inst_30405 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30507_30580 = state_30483__$1;
(statearr_30507_30580[(2)] = inst_30405);

(statearr_30507_30580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (31))){
var inst_30431 = (state_30483[(12)]);
var inst_30435 = done.call(null,null);
var inst_30436 = cljs.core.async.untap_STAR_.call(null,m,inst_30431);
var state_30483__$1 = (function (){var statearr_30508 = state_30483;
(statearr_30508[(19)] = inst_30435);

return statearr_30508;
})();
var statearr_30509_30581 = state_30483__$1;
(statearr_30509_30581[(2)] = inst_30436);

(statearr_30509_30581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (32))){
var inst_30423 = (state_30483[(20)]);
var inst_30426 = (state_30483[(10)]);
var inst_30424 = (state_30483[(11)]);
var inst_30425 = (state_30483[(21)]);
var inst_30438 = (state_30483[(2)]);
var inst_30439 = (inst_30426 + (1));
var tmp30504 = inst_30423;
var tmp30505 = inst_30424;
var tmp30506 = inst_30425;
var inst_30423__$1 = tmp30504;
var inst_30424__$1 = tmp30505;
var inst_30425__$1 = tmp30506;
var inst_30426__$1 = inst_30439;
var state_30483__$1 = (function (){var statearr_30510 = state_30483;
(statearr_30510[(20)] = inst_30423__$1);

(statearr_30510[(10)] = inst_30426__$1);

(statearr_30510[(11)] = inst_30424__$1);

(statearr_30510[(22)] = inst_30438);

(statearr_30510[(21)] = inst_30425__$1);

return statearr_30510;
})();
var statearr_30511_30582 = state_30483__$1;
(statearr_30511_30582[(2)] = null);

(statearr_30511_30582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (40))){
var inst_30451 = (state_30483[(23)]);
var inst_30455 = done.call(null,null);
var inst_30456 = cljs.core.async.untap_STAR_.call(null,m,inst_30451);
var state_30483__$1 = (function (){var statearr_30512 = state_30483;
(statearr_30512[(24)] = inst_30455);

return statearr_30512;
})();
var statearr_30513_30583 = state_30483__$1;
(statearr_30513_30583[(2)] = inst_30456);

(statearr_30513_30583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (33))){
var inst_30442 = (state_30483[(25)]);
var inst_30444 = cljs.core.chunked_seq_QMARK_.call(null,inst_30442);
var state_30483__$1 = state_30483;
if(inst_30444){
var statearr_30514_30584 = state_30483__$1;
(statearr_30514_30584[(1)] = (36));

} else {
var statearr_30515_30585 = state_30483__$1;
(statearr_30515_30585[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (13))){
var inst_30372 = (state_30483[(26)]);
var inst_30375 = cljs.core.async.close_BANG_.call(null,inst_30372);
var state_30483__$1 = state_30483;
var statearr_30516_30586 = state_30483__$1;
(statearr_30516_30586[(2)] = inst_30375);

(statearr_30516_30586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (22))){
var inst_30395 = (state_30483[(8)]);
var inst_30398 = cljs.core.async.close_BANG_.call(null,inst_30395);
var state_30483__$1 = state_30483;
var statearr_30517_30587 = state_30483__$1;
(statearr_30517_30587[(2)] = inst_30398);

(statearr_30517_30587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (36))){
var inst_30442 = (state_30483[(25)]);
var inst_30446 = cljs.core.chunk_first.call(null,inst_30442);
var inst_30447 = cljs.core.chunk_rest.call(null,inst_30442);
var inst_30448 = cljs.core.count.call(null,inst_30446);
var inst_30423 = inst_30447;
var inst_30424 = inst_30446;
var inst_30425 = inst_30448;
var inst_30426 = (0);
var state_30483__$1 = (function (){var statearr_30518 = state_30483;
(statearr_30518[(20)] = inst_30423);

(statearr_30518[(10)] = inst_30426);

(statearr_30518[(11)] = inst_30424);

(statearr_30518[(21)] = inst_30425);

return statearr_30518;
})();
var statearr_30519_30588 = state_30483__$1;
(statearr_30519_30588[(2)] = null);

(statearr_30519_30588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (41))){
var inst_30442 = (state_30483[(25)]);
var inst_30458 = (state_30483[(2)]);
var inst_30459 = cljs.core.next.call(null,inst_30442);
var inst_30423 = inst_30459;
var inst_30424 = null;
var inst_30425 = (0);
var inst_30426 = (0);
var state_30483__$1 = (function (){var statearr_30520 = state_30483;
(statearr_30520[(27)] = inst_30458);

(statearr_30520[(20)] = inst_30423);

(statearr_30520[(10)] = inst_30426);

(statearr_30520[(11)] = inst_30424);

(statearr_30520[(21)] = inst_30425);

return statearr_30520;
})();
var statearr_30521_30589 = state_30483__$1;
(statearr_30521_30589[(2)] = null);

(statearr_30521_30589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (43))){
var state_30483__$1 = state_30483;
var statearr_30522_30590 = state_30483__$1;
(statearr_30522_30590[(2)] = null);

(statearr_30522_30590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (29))){
var inst_30467 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30523_30591 = state_30483__$1;
(statearr_30523_30591[(2)] = inst_30467);

(statearr_30523_30591[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (44))){
var inst_30476 = (state_30483[(2)]);
var state_30483__$1 = (function (){var statearr_30524 = state_30483;
(statearr_30524[(28)] = inst_30476);

return statearr_30524;
})();
var statearr_30525_30592 = state_30483__$1;
(statearr_30525_30592[(2)] = null);

(statearr_30525_30592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (6))){
var inst_30415 = (state_30483[(29)]);
var inst_30414 = cljs.core.deref.call(null,cs);
var inst_30415__$1 = cljs.core.keys.call(null,inst_30414);
var inst_30416 = cljs.core.count.call(null,inst_30415__$1);
var inst_30417 = cljs.core.reset_BANG_.call(null,dctr,inst_30416);
var inst_30422 = cljs.core.seq.call(null,inst_30415__$1);
var inst_30423 = inst_30422;
var inst_30424 = null;
var inst_30425 = (0);
var inst_30426 = (0);
var state_30483__$1 = (function (){var statearr_30526 = state_30483;
(statearr_30526[(20)] = inst_30423);

(statearr_30526[(10)] = inst_30426);

(statearr_30526[(11)] = inst_30424);

(statearr_30526[(29)] = inst_30415__$1);

(statearr_30526[(30)] = inst_30417);

(statearr_30526[(21)] = inst_30425);

return statearr_30526;
})();
var statearr_30527_30593 = state_30483__$1;
(statearr_30527_30593[(2)] = null);

(statearr_30527_30593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (28))){
var inst_30423 = (state_30483[(20)]);
var inst_30442 = (state_30483[(25)]);
var inst_30442__$1 = cljs.core.seq.call(null,inst_30423);
var state_30483__$1 = (function (){var statearr_30528 = state_30483;
(statearr_30528[(25)] = inst_30442__$1);

return statearr_30528;
})();
if(inst_30442__$1){
var statearr_30529_30594 = state_30483__$1;
(statearr_30529_30594[(1)] = (33));

} else {
var statearr_30530_30595 = state_30483__$1;
(statearr_30530_30595[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (25))){
var inst_30426 = (state_30483[(10)]);
var inst_30425 = (state_30483[(21)]);
var inst_30428 = (inst_30426 < inst_30425);
var inst_30429 = inst_30428;
var state_30483__$1 = state_30483;
if(cljs.core.truth_(inst_30429)){
var statearr_30531_30596 = state_30483__$1;
(statearr_30531_30596[(1)] = (27));

} else {
var statearr_30532_30597 = state_30483__$1;
(statearr_30532_30597[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (34))){
var state_30483__$1 = state_30483;
var statearr_30533_30598 = state_30483__$1;
(statearr_30533_30598[(2)] = null);

(statearr_30533_30598[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (17))){
var state_30483__$1 = state_30483;
var statearr_30534_30599 = state_30483__$1;
(statearr_30534_30599[(2)] = null);

(statearr_30534_30599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (3))){
var inst_30481 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30483__$1,inst_30481);
} else {
if((state_val_30484 === (12))){
var inst_30410 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30535_30600 = state_30483__$1;
(statearr_30535_30600[(2)] = inst_30410);

(statearr_30535_30600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (2))){
var state_30483__$1 = state_30483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30483__$1,(4),ch);
} else {
if((state_val_30484 === (23))){
var state_30483__$1 = state_30483;
var statearr_30536_30601 = state_30483__$1;
(statearr_30536_30601[(2)] = null);

(statearr_30536_30601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (35))){
var inst_30465 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30537_30602 = state_30483__$1;
(statearr_30537_30602[(2)] = inst_30465);

(statearr_30537_30602[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (19))){
var inst_30382 = (state_30483[(7)]);
var inst_30386 = cljs.core.chunk_first.call(null,inst_30382);
var inst_30387 = cljs.core.chunk_rest.call(null,inst_30382);
var inst_30388 = cljs.core.count.call(null,inst_30386);
var inst_30360 = inst_30387;
var inst_30361 = inst_30386;
var inst_30362 = inst_30388;
var inst_30363 = (0);
var state_30483__$1 = (function (){var statearr_30538 = state_30483;
(statearr_30538[(13)] = inst_30362);

(statearr_30538[(15)] = inst_30363);

(statearr_30538[(16)] = inst_30361);

(statearr_30538[(17)] = inst_30360);

return statearr_30538;
})();
var statearr_30539_30603 = state_30483__$1;
(statearr_30539_30603[(2)] = null);

(statearr_30539_30603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (11))){
var inst_30382 = (state_30483[(7)]);
var inst_30360 = (state_30483[(17)]);
var inst_30382__$1 = cljs.core.seq.call(null,inst_30360);
var state_30483__$1 = (function (){var statearr_30540 = state_30483;
(statearr_30540[(7)] = inst_30382__$1);

return statearr_30540;
})();
if(inst_30382__$1){
var statearr_30541_30604 = state_30483__$1;
(statearr_30541_30604[(1)] = (16));

} else {
var statearr_30542_30605 = state_30483__$1;
(statearr_30542_30605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (9))){
var inst_30412 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30543_30606 = state_30483__$1;
(statearr_30543_30606[(2)] = inst_30412);

(statearr_30543_30606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (5))){
var inst_30358 = cljs.core.deref.call(null,cs);
var inst_30359 = cljs.core.seq.call(null,inst_30358);
var inst_30360 = inst_30359;
var inst_30361 = null;
var inst_30362 = (0);
var inst_30363 = (0);
var state_30483__$1 = (function (){var statearr_30544 = state_30483;
(statearr_30544[(13)] = inst_30362);

(statearr_30544[(15)] = inst_30363);

(statearr_30544[(16)] = inst_30361);

(statearr_30544[(17)] = inst_30360);

return statearr_30544;
})();
var statearr_30545_30607 = state_30483__$1;
(statearr_30545_30607[(2)] = null);

(statearr_30545_30607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (14))){
var state_30483__$1 = state_30483;
var statearr_30546_30608 = state_30483__$1;
(statearr_30546_30608[(2)] = null);

(statearr_30546_30608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (45))){
var inst_30473 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30547_30609 = state_30483__$1;
(statearr_30547_30609[(2)] = inst_30473);

(statearr_30547_30609[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (26))){
var inst_30415 = (state_30483[(29)]);
var inst_30469 = (state_30483[(2)]);
var inst_30470 = cljs.core.seq.call(null,inst_30415);
var state_30483__$1 = (function (){var statearr_30548 = state_30483;
(statearr_30548[(31)] = inst_30469);

return statearr_30548;
})();
if(inst_30470){
var statearr_30549_30610 = state_30483__$1;
(statearr_30549_30610[(1)] = (42));

} else {
var statearr_30550_30611 = state_30483__$1;
(statearr_30550_30611[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (16))){
var inst_30382 = (state_30483[(7)]);
var inst_30384 = cljs.core.chunked_seq_QMARK_.call(null,inst_30382);
var state_30483__$1 = state_30483;
if(inst_30384){
var statearr_30551_30612 = state_30483__$1;
(statearr_30551_30612[(1)] = (19));

} else {
var statearr_30552_30613 = state_30483__$1;
(statearr_30552_30613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (38))){
var inst_30462 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30553_30614 = state_30483__$1;
(statearr_30553_30614[(2)] = inst_30462);

(statearr_30553_30614[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (30))){
var state_30483__$1 = state_30483;
var statearr_30554_30615 = state_30483__$1;
(statearr_30554_30615[(2)] = null);

(statearr_30554_30615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (10))){
var inst_30363 = (state_30483[(15)]);
var inst_30361 = (state_30483[(16)]);
var inst_30371 = cljs.core._nth.call(null,inst_30361,inst_30363);
var inst_30372 = cljs.core.nth.call(null,inst_30371,(0),null);
var inst_30373 = cljs.core.nth.call(null,inst_30371,(1),null);
var state_30483__$1 = (function (){var statearr_30555 = state_30483;
(statearr_30555[(26)] = inst_30372);

return statearr_30555;
})();
if(cljs.core.truth_(inst_30373)){
var statearr_30556_30616 = state_30483__$1;
(statearr_30556_30616[(1)] = (13));

} else {
var statearr_30557_30617 = state_30483__$1;
(statearr_30557_30617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (18))){
var inst_30408 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30558_30618 = state_30483__$1;
(statearr_30558_30618[(2)] = inst_30408);

(statearr_30558_30618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (42))){
var state_30483__$1 = state_30483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30483__$1,(45),dchan);
} else {
if((state_val_30484 === (37))){
var inst_30351 = (state_30483[(9)]);
var inst_30451 = (state_30483[(23)]);
var inst_30442 = (state_30483[(25)]);
var inst_30451__$1 = cljs.core.first.call(null,inst_30442);
var inst_30452 = cljs.core.async.put_BANG_.call(null,inst_30451__$1,inst_30351,done);
var state_30483__$1 = (function (){var statearr_30559 = state_30483;
(statearr_30559[(23)] = inst_30451__$1);

return statearr_30559;
})();
if(cljs.core.truth_(inst_30452)){
var statearr_30560_30619 = state_30483__$1;
(statearr_30560_30619[(1)] = (39));

} else {
var statearr_30561_30620 = state_30483__$1;
(statearr_30561_30620[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (8))){
var inst_30362 = (state_30483[(13)]);
var inst_30363 = (state_30483[(15)]);
var inst_30365 = (inst_30363 < inst_30362);
var inst_30366 = inst_30365;
var state_30483__$1 = state_30483;
if(cljs.core.truth_(inst_30366)){
var statearr_30562_30621 = state_30483__$1;
(statearr_30562_30621[(1)] = (10));

} else {
var statearr_30563_30622 = state_30483__$1;
(statearr_30563_30622[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__29749__auto___30568,cs,m,dchan,dctr,done))
;
return ((function (switch__29654__auto__,c__29749__auto___30568,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29655__auto__ = null;
var cljs$core$async$mult_$_state_machine__29655__auto____0 = (function (){
var statearr_30564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30564[(0)] = cljs$core$async$mult_$_state_machine__29655__auto__);

(statearr_30564[(1)] = (1));

return statearr_30564;
});
var cljs$core$async$mult_$_state_machine__29655__auto____1 = (function (state_30483){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30565){if((e30565 instanceof Object)){
var ex__29658__auto__ = e30565;
var statearr_30566_30623 = state_30483;
(statearr_30566_30623[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30624 = state_30483;
state_30483 = G__30624;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29655__auto__ = function(state_30483){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29655__auto____1.call(this,state_30483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29655__auto____0;
cljs$core$async$mult_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29655__auto____1;
return cljs$core$async$mult_$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___30568,cs,m,dchan,dctr,done))
})();
var state__29751__auto__ = (function (){var statearr_30567 = f__29750__auto__.call(null);
(statearr_30567[(6)] = c__29749__auto___30568);

return statearr_30567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___30568,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30626 = arguments.length;
switch (G__30626) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30638 = arguments.length;
var i__4731__auto___30639 = (0);
while(true){
if((i__4731__auto___30639 < len__4730__auto___30638)){
args__4736__auto__.push((arguments[i__4731__auto___30639]));

var G__30640 = (i__4731__auto___30639 + (1));
i__4731__auto___30639 = G__30640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30632){
var map__30633 = p__30632;
var map__30633__$1 = (((((!((map__30633 == null))))?(((((map__30633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30633):map__30633);
var opts = map__30633__$1;
var statearr_30635_30641 = state;
(statearr_30635_30641[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__30633,map__30633__$1,opts){
return (function (val){
var statearr_30636_30642 = state;
(statearr_30636_30642[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30633,map__30633__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30637_30643 = state;
(statearr_30637_30643[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30628){
var G__30629 = cljs.core.first.call(null,seq30628);
var seq30628__$1 = cljs.core.next.call(null,seq30628);
var G__30630 = cljs.core.first.call(null,seq30628__$1);
var seq30628__$2 = cljs.core.next.call(null,seq30628__$1);
var G__30631 = cljs.core.first.call(null,seq30628__$2);
var seq30628__$3 = cljs.core.next.call(null,seq30628__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30629,G__30630,G__30631,seq30628__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30644 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30645){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30645 = meta30645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30646,meta30645__$1){
var self__ = this;
var _30646__$1 = this;
return (new cljs.core.async.t_cljs$core$async30644(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30645__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30646){
var self__ = this;
var _30646__$1 = this;
return self__.meta30645;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30645","meta30645",490756499,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30644";

cljs.core.async.t_cljs$core$async30644.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30644");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30644.
 */
cljs.core.async.__GT_t_cljs$core$async30644 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30644(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30645){
return (new cljs.core.async.t_cljs$core$async30644(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30645));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30644(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29749__auto___30808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___30808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___30808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30748){
var state_val_30749 = (state_30748[(1)]);
if((state_val_30749 === (7))){
var inst_30663 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30750_30809 = state_30748__$1;
(statearr_30750_30809[(2)] = inst_30663);

(statearr_30750_30809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (20))){
var inst_30675 = (state_30748[(7)]);
var state_30748__$1 = state_30748;
var statearr_30751_30810 = state_30748__$1;
(statearr_30751_30810[(2)] = inst_30675);

(statearr_30751_30810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (27))){
var state_30748__$1 = state_30748;
var statearr_30752_30811 = state_30748__$1;
(statearr_30752_30811[(2)] = null);

(statearr_30752_30811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (1))){
var inst_30650 = (state_30748[(8)]);
var inst_30650__$1 = calc_state.call(null);
var inst_30652 = (inst_30650__$1 == null);
var inst_30653 = cljs.core.not.call(null,inst_30652);
var state_30748__$1 = (function (){var statearr_30753 = state_30748;
(statearr_30753[(8)] = inst_30650__$1);

return statearr_30753;
})();
if(inst_30653){
var statearr_30754_30812 = state_30748__$1;
(statearr_30754_30812[(1)] = (2));

} else {
var statearr_30755_30813 = state_30748__$1;
(statearr_30755_30813[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (24))){
var inst_30699 = (state_30748[(9)]);
var inst_30722 = (state_30748[(10)]);
var inst_30708 = (state_30748[(11)]);
var inst_30722__$1 = inst_30699.call(null,inst_30708);
var state_30748__$1 = (function (){var statearr_30756 = state_30748;
(statearr_30756[(10)] = inst_30722__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30722__$1)){
var statearr_30757_30814 = state_30748__$1;
(statearr_30757_30814[(1)] = (29));

} else {
var statearr_30758_30815 = state_30748__$1;
(statearr_30758_30815[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (4))){
var inst_30666 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30666)){
var statearr_30759_30816 = state_30748__$1;
(statearr_30759_30816[(1)] = (8));

} else {
var statearr_30760_30817 = state_30748__$1;
(statearr_30760_30817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (15))){
var inst_30693 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30693)){
var statearr_30761_30818 = state_30748__$1;
(statearr_30761_30818[(1)] = (19));

} else {
var statearr_30762_30819 = state_30748__$1;
(statearr_30762_30819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (21))){
var inst_30698 = (state_30748[(12)]);
var inst_30698__$1 = (state_30748[(2)]);
var inst_30699 = cljs.core.get.call(null,inst_30698__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30700 = cljs.core.get.call(null,inst_30698__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30701 = cljs.core.get.call(null,inst_30698__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30748__$1 = (function (){var statearr_30763 = state_30748;
(statearr_30763[(12)] = inst_30698__$1);

(statearr_30763[(9)] = inst_30699);

(statearr_30763[(13)] = inst_30700);

return statearr_30763;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30748__$1,(22),inst_30701);
} else {
if((state_val_30749 === (31))){
var inst_30730 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30730)){
var statearr_30764_30820 = state_30748__$1;
(statearr_30764_30820[(1)] = (32));

} else {
var statearr_30765_30821 = state_30748__$1;
(statearr_30765_30821[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (32))){
var inst_30707 = (state_30748[(14)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30748__$1,(35),out,inst_30707);
} else {
if((state_val_30749 === (33))){
var inst_30698 = (state_30748[(12)]);
var inst_30675 = inst_30698;
var state_30748__$1 = (function (){var statearr_30766 = state_30748;
(statearr_30766[(7)] = inst_30675);

return statearr_30766;
})();
var statearr_30767_30822 = state_30748__$1;
(statearr_30767_30822[(2)] = null);

(statearr_30767_30822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (13))){
var inst_30675 = (state_30748[(7)]);
var inst_30682 = inst_30675.cljs$lang$protocol_mask$partition0$;
var inst_30683 = (inst_30682 & (64));
var inst_30684 = inst_30675.cljs$core$ISeq$;
var inst_30685 = (cljs.core.PROTOCOL_SENTINEL === inst_30684);
var inst_30686 = ((inst_30683) || (inst_30685));
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30686)){
var statearr_30768_30823 = state_30748__$1;
(statearr_30768_30823[(1)] = (16));

} else {
var statearr_30769_30824 = state_30748__$1;
(statearr_30769_30824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (22))){
var inst_30707 = (state_30748[(14)]);
var inst_30708 = (state_30748[(11)]);
var inst_30706 = (state_30748[(2)]);
var inst_30707__$1 = cljs.core.nth.call(null,inst_30706,(0),null);
var inst_30708__$1 = cljs.core.nth.call(null,inst_30706,(1),null);
var inst_30709 = (inst_30707__$1 == null);
var inst_30710 = cljs.core._EQ_.call(null,inst_30708__$1,change);
var inst_30711 = ((inst_30709) || (inst_30710));
var state_30748__$1 = (function (){var statearr_30770 = state_30748;
(statearr_30770[(14)] = inst_30707__$1);

(statearr_30770[(11)] = inst_30708__$1);

return statearr_30770;
})();
if(cljs.core.truth_(inst_30711)){
var statearr_30771_30825 = state_30748__$1;
(statearr_30771_30825[(1)] = (23));

} else {
var statearr_30772_30826 = state_30748__$1;
(statearr_30772_30826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (36))){
var inst_30698 = (state_30748[(12)]);
var inst_30675 = inst_30698;
var state_30748__$1 = (function (){var statearr_30773 = state_30748;
(statearr_30773[(7)] = inst_30675);

return statearr_30773;
})();
var statearr_30774_30827 = state_30748__$1;
(statearr_30774_30827[(2)] = null);

(statearr_30774_30827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (29))){
var inst_30722 = (state_30748[(10)]);
var state_30748__$1 = state_30748;
var statearr_30775_30828 = state_30748__$1;
(statearr_30775_30828[(2)] = inst_30722);

(statearr_30775_30828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (6))){
var state_30748__$1 = state_30748;
var statearr_30776_30829 = state_30748__$1;
(statearr_30776_30829[(2)] = false);

(statearr_30776_30829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (28))){
var inst_30718 = (state_30748[(2)]);
var inst_30719 = calc_state.call(null);
var inst_30675 = inst_30719;
var state_30748__$1 = (function (){var statearr_30777 = state_30748;
(statearr_30777[(15)] = inst_30718);

(statearr_30777[(7)] = inst_30675);

return statearr_30777;
})();
var statearr_30778_30830 = state_30748__$1;
(statearr_30778_30830[(2)] = null);

(statearr_30778_30830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (25))){
var inst_30744 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30779_30831 = state_30748__$1;
(statearr_30779_30831[(2)] = inst_30744);

(statearr_30779_30831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (34))){
var inst_30742 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30780_30832 = state_30748__$1;
(statearr_30780_30832[(2)] = inst_30742);

(statearr_30780_30832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (17))){
var state_30748__$1 = state_30748;
var statearr_30781_30833 = state_30748__$1;
(statearr_30781_30833[(2)] = false);

(statearr_30781_30833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (3))){
var state_30748__$1 = state_30748;
var statearr_30782_30834 = state_30748__$1;
(statearr_30782_30834[(2)] = false);

(statearr_30782_30834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (12))){
var inst_30746 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30748__$1,inst_30746);
} else {
if((state_val_30749 === (2))){
var inst_30650 = (state_30748[(8)]);
var inst_30655 = inst_30650.cljs$lang$protocol_mask$partition0$;
var inst_30656 = (inst_30655 & (64));
var inst_30657 = inst_30650.cljs$core$ISeq$;
var inst_30658 = (cljs.core.PROTOCOL_SENTINEL === inst_30657);
var inst_30659 = ((inst_30656) || (inst_30658));
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30659)){
var statearr_30783_30835 = state_30748__$1;
(statearr_30783_30835[(1)] = (5));

} else {
var statearr_30784_30836 = state_30748__$1;
(statearr_30784_30836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (23))){
var inst_30707 = (state_30748[(14)]);
var inst_30713 = (inst_30707 == null);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30713)){
var statearr_30785_30837 = state_30748__$1;
(statearr_30785_30837[(1)] = (26));

} else {
var statearr_30786_30838 = state_30748__$1;
(statearr_30786_30838[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (35))){
var inst_30733 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30733)){
var statearr_30787_30839 = state_30748__$1;
(statearr_30787_30839[(1)] = (36));

} else {
var statearr_30788_30840 = state_30748__$1;
(statearr_30788_30840[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (19))){
var inst_30675 = (state_30748[(7)]);
var inst_30695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30675);
var state_30748__$1 = state_30748;
var statearr_30789_30841 = state_30748__$1;
(statearr_30789_30841[(2)] = inst_30695);

(statearr_30789_30841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (11))){
var inst_30675 = (state_30748[(7)]);
var inst_30679 = (inst_30675 == null);
var inst_30680 = cljs.core.not.call(null,inst_30679);
var state_30748__$1 = state_30748;
if(inst_30680){
var statearr_30790_30842 = state_30748__$1;
(statearr_30790_30842[(1)] = (13));

} else {
var statearr_30791_30843 = state_30748__$1;
(statearr_30791_30843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (9))){
var inst_30650 = (state_30748[(8)]);
var state_30748__$1 = state_30748;
var statearr_30792_30844 = state_30748__$1;
(statearr_30792_30844[(2)] = inst_30650);

(statearr_30792_30844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (5))){
var state_30748__$1 = state_30748;
var statearr_30793_30845 = state_30748__$1;
(statearr_30793_30845[(2)] = true);

(statearr_30793_30845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (14))){
var state_30748__$1 = state_30748;
var statearr_30794_30846 = state_30748__$1;
(statearr_30794_30846[(2)] = false);

(statearr_30794_30846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (26))){
var inst_30708 = (state_30748[(11)]);
var inst_30715 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30708);
var state_30748__$1 = state_30748;
var statearr_30795_30847 = state_30748__$1;
(statearr_30795_30847[(2)] = inst_30715);

(statearr_30795_30847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (16))){
var state_30748__$1 = state_30748;
var statearr_30796_30848 = state_30748__$1;
(statearr_30796_30848[(2)] = true);

(statearr_30796_30848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (38))){
var inst_30738 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30797_30849 = state_30748__$1;
(statearr_30797_30849[(2)] = inst_30738);

(statearr_30797_30849[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (30))){
var inst_30699 = (state_30748[(9)]);
var inst_30700 = (state_30748[(13)]);
var inst_30708 = (state_30748[(11)]);
var inst_30725 = cljs.core.empty_QMARK_.call(null,inst_30699);
var inst_30726 = inst_30700.call(null,inst_30708);
var inst_30727 = cljs.core.not.call(null,inst_30726);
var inst_30728 = ((inst_30725) && (inst_30727));
var state_30748__$1 = state_30748;
var statearr_30798_30850 = state_30748__$1;
(statearr_30798_30850[(2)] = inst_30728);

(statearr_30798_30850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (10))){
var inst_30650 = (state_30748[(8)]);
var inst_30671 = (state_30748[(2)]);
var inst_30672 = cljs.core.get.call(null,inst_30671,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30673 = cljs.core.get.call(null,inst_30671,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30674 = cljs.core.get.call(null,inst_30671,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30675 = inst_30650;
var state_30748__$1 = (function (){var statearr_30799 = state_30748;
(statearr_30799[(7)] = inst_30675);

(statearr_30799[(16)] = inst_30674);

(statearr_30799[(17)] = inst_30672);

(statearr_30799[(18)] = inst_30673);

return statearr_30799;
})();
var statearr_30800_30851 = state_30748__$1;
(statearr_30800_30851[(2)] = null);

(statearr_30800_30851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (18))){
var inst_30690 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30801_30852 = state_30748__$1;
(statearr_30801_30852[(2)] = inst_30690);

(statearr_30801_30852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (37))){
var state_30748__$1 = state_30748;
var statearr_30802_30853 = state_30748__$1;
(statearr_30802_30853[(2)] = null);

(statearr_30802_30853[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (8))){
var inst_30650 = (state_30748[(8)]);
var inst_30668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30650);
var state_30748__$1 = state_30748;
var statearr_30803_30854 = state_30748__$1;
(statearr_30803_30854[(2)] = inst_30668);

(statearr_30803_30854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__29749__auto___30808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29654__auto__,c__29749__auto___30808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29655__auto__ = null;
var cljs$core$async$mix_$_state_machine__29655__auto____0 = (function (){
var statearr_30804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30804[(0)] = cljs$core$async$mix_$_state_machine__29655__auto__);

(statearr_30804[(1)] = (1));

return statearr_30804;
});
var cljs$core$async$mix_$_state_machine__29655__auto____1 = (function (state_30748){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30805){if((e30805 instanceof Object)){
var ex__29658__auto__ = e30805;
var statearr_30806_30855 = state_30748;
(statearr_30806_30855[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30856 = state_30748;
state_30748 = G__30856;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29655__auto__ = function(state_30748){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29655__auto____1.call(this,state_30748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29655__auto____0;
cljs$core$async$mix_$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29655__auto____1;
return cljs$core$async$mix_$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___30808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29751__auto__ = (function (){var statearr_30807 = f__29750__auto__.call(null);
(statearr_30807[(6)] = c__29749__auto___30808);

return statearr_30807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___30808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30858 = arguments.length;
switch (G__30858) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30862 = arguments.length;
switch (G__30862) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__30860_SHARP_){
if(cljs.core.truth_(p1__30860_SHARP_.call(null,topic))){
return p1__30860_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30863 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30864){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30864 = meta30864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30865,meta30864__$1){
var self__ = this;
var _30865__$1 = this;
return (new cljs.core.async.t_cljs$core$async30863(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30864__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30865){
var self__ = this;
var _30865__$1 = this;
return self__.meta30864;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30864","meta30864",561982794,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30863";

cljs.core.async.t_cljs$core$async30863.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30863");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30863.
 */
cljs.core.async.__GT_t_cljs$core$async30863 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30863(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30864){
return (new cljs.core.async.t_cljs$core$async30863(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30864));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30863(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29749__auto___30983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___30983,mults,ensure_mult,p){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___30983,mults,ensure_mult,p){
return (function (state_30937){
var state_val_30938 = (state_30937[(1)]);
if((state_val_30938 === (7))){
var inst_30933 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30939_30984 = state_30937__$1;
(statearr_30939_30984[(2)] = inst_30933);

(statearr_30939_30984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (20))){
var state_30937__$1 = state_30937;
var statearr_30940_30985 = state_30937__$1;
(statearr_30940_30985[(2)] = null);

(statearr_30940_30985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (1))){
var state_30937__$1 = state_30937;
var statearr_30941_30986 = state_30937__$1;
(statearr_30941_30986[(2)] = null);

(statearr_30941_30986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (24))){
var inst_30916 = (state_30937[(7)]);
var inst_30925 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30916);
var state_30937__$1 = state_30937;
var statearr_30942_30987 = state_30937__$1;
(statearr_30942_30987[(2)] = inst_30925);

(statearr_30942_30987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (4))){
var inst_30868 = (state_30937[(8)]);
var inst_30868__$1 = (state_30937[(2)]);
var inst_30869 = (inst_30868__$1 == null);
var state_30937__$1 = (function (){var statearr_30943 = state_30937;
(statearr_30943[(8)] = inst_30868__$1);

return statearr_30943;
})();
if(cljs.core.truth_(inst_30869)){
var statearr_30944_30988 = state_30937__$1;
(statearr_30944_30988[(1)] = (5));

} else {
var statearr_30945_30989 = state_30937__$1;
(statearr_30945_30989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (15))){
var inst_30910 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30946_30990 = state_30937__$1;
(statearr_30946_30990[(2)] = inst_30910);

(statearr_30946_30990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (21))){
var inst_30930 = (state_30937[(2)]);
var state_30937__$1 = (function (){var statearr_30947 = state_30937;
(statearr_30947[(9)] = inst_30930);

return statearr_30947;
})();
var statearr_30948_30991 = state_30937__$1;
(statearr_30948_30991[(2)] = null);

(statearr_30948_30991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (13))){
var inst_30892 = (state_30937[(10)]);
var inst_30894 = cljs.core.chunked_seq_QMARK_.call(null,inst_30892);
var state_30937__$1 = state_30937;
if(inst_30894){
var statearr_30949_30992 = state_30937__$1;
(statearr_30949_30992[(1)] = (16));

} else {
var statearr_30950_30993 = state_30937__$1;
(statearr_30950_30993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (22))){
var inst_30922 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
if(cljs.core.truth_(inst_30922)){
var statearr_30951_30994 = state_30937__$1;
(statearr_30951_30994[(1)] = (23));

} else {
var statearr_30952_30995 = state_30937__$1;
(statearr_30952_30995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (6))){
var inst_30918 = (state_30937[(11)]);
var inst_30868 = (state_30937[(8)]);
var inst_30916 = (state_30937[(7)]);
var inst_30916__$1 = topic_fn.call(null,inst_30868);
var inst_30917 = cljs.core.deref.call(null,mults);
var inst_30918__$1 = cljs.core.get.call(null,inst_30917,inst_30916__$1);
var state_30937__$1 = (function (){var statearr_30953 = state_30937;
(statearr_30953[(11)] = inst_30918__$1);

(statearr_30953[(7)] = inst_30916__$1);

return statearr_30953;
})();
if(cljs.core.truth_(inst_30918__$1)){
var statearr_30954_30996 = state_30937__$1;
(statearr_30954_30996[(1)] = (19));

} else {
var statearr_30955_30997 = state_30937__$1;
(statearr_30955_30997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (25))){
var inst_30927 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30956_30998 = state_30937__$1;
(statearr_30956_30998[(2)] = inst_30927);

(statearr_30956_30998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (17))){
var inst_30892 = (state_30937[(10)]);
var inst_30901 = cljs.core.first.call(null,inst_30892);
var inst_30902 = cljs.core.async.muxch_STAR_.call(null,inst_30901);
var inst_30903 = cljs.core.async.close_BANG_.call(null,inst_30902);
var inst_30904 = cljs.core.next.call(null,inst_30892);
var inst_30878 = inst_30904;
var inst_30879 = null;
var inst_30880 = (0);
var inst_30881 = (0);
var state_30937__$1 = (function (){var statearr_30957 = state_30937;
(statearr_30957[(12)] = inst_30879);

(statearr_30957[(13)] = inst_30880);

(statearr_30957[(14)] = inst_30881);

(statearr_30957[(15)] = inst_30878);

(statearr_30957[(16)] = inst_30903);

return statearr_30957;
})();
var statearr_30958_30999 = state_30937__$1;
(statearr_30958_30999[(2)] = null);

(statearr_30958_30999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (3))){
var inst_30935 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30937__$1,inst_30935);
} else {
if((state_val_30938 === (12))){
var inst_30912 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30959_31000 = state_30937__$1;
(statearr_30959_31000[(2)] = inst_30912);

(statearr_30959_31000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (2))){
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30937__$1,(4),ch);
} else {
if((state_val_30938 === (23))){
var state_30937__$1 = state_30937;
var statearr_30960_31001 = state_30937__$1;
(statearr_30960_31001[(2)] = null);

(statearr_30960_31001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (19))){
var inst_30918 = (state_30937[(11)]);
var inst_30868 = (state_30937[(8)]);
var inst_30920 = cljs.core.async.muxch_STAR_.call(null,inst_30918);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30937__$1,(22),inst_30920,inst_30868);
} else {
if((state_val_30938 === (11))){
var inst_30892 = (state_30937[(10)]);
var inst_30878 = (state_30937[(15)]);
var inst_30892__$1 = cljs.core.seq.call(null,inst_30878);
var state_30937__$1 = (function (){var statearr_30961 = state_30937;
(statearr_30961[(10)] = inst_30892__$1);

return statearr_30961;
})();
if(inst_30892__$1){
var statearr_30962_31002 = state_30937__$1;
(statearr_30962_31002[(1)] = (13));

} else {
var statearr_30963_31003 = state_30937__$1;
(statearr_30963_31003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (9))){
var inst_30914 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30964_31004 = state_30937__$1;
(statearr_30964_31004[(2)] = inst_30914);

(statearr_30964_31004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (5))){
var inst_30875 = cljs.core.deref.call(null,mults);
var inst_30876 = cljs.core.vals.call(null,inst_30875);
var inst_30877 = cljs.core.seq.call(null,inst_30876);
var inst_30878 = inst_30877;
var inst_30879 = null;
var inst_30880 = (0);
var inst_30881 = (0);
var state_30937__$1 = (function (){var statearr_30965 = state_30937;
(statearr_30965[(12)] = inst_30879);

(statearr_30965[(13)] = inst_30880);

(statearr_30965[(14)] = inst_30881);

(statearr_30965[(15)] = inst_30878);

return statearr_30965;
})();
var statearr_30966_31005 = state_30937__$1;
(statearr_30966_31005[(2)] = null);

(statearr_30966_31005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (14))){
var state_30937__$1 = state_30937;
var statearr_30970_31006 = state_30937__$1;
(statearr_30970_31006[(2)] = null);

(statearr_30970_31006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (16))){
var inst_30892 = (state_30937[(10)]);
var inst_30896 = cljs.core.chunk_first.call(null,inst_30892);
var inst_30897 = cljs.core.chunk_rest.call(null,inst_30892);
var inst_30898 = cljs.core.count.call(null,inst_30896);
var inst_30878 = inst_30897;
var inst_30879 = inst_30896;
var inst_30880 = inst_30898;
var inst_30881 = (0);
var state_30937__$1 = (function (){var statearr_30971 = state_30937;
(statearr_30971[(12)] = inst_30879);

(statearr_30971[(13)] = inst_30880);

(statearr_30971[(14)] = inst_30881);

(statearr_30971[(15)] = inst_30878);

return statearr_30971;
})();
var statearr_30972_31007 = state_30937__$1;
(statearr_30972_31007[(2)] = null);

(statearr_30972_31007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (10))){
var inst_30879 = (state_30937[(12)]);
var inst_30880 = (state_30937[(13)]);
var inst_30881 = (state_30937[(14)]);
var inst_30878 = (state_30937[(15)]);
var inst_30886 = cljs.core._nth.call(null,inst_30879,inst_30881);
var inst_30887 = cljs.core.async.muxch_STAR_.call(null,inst_30886);
var inst_30888 = cljs.core.async.close_BANG_.call(null,inst_30887);
var inst_30889 = (inst_30881 + (1));
var tmp30967 = inst_30879;
var tmp30968 = inst_30880;
var tmp30969 = inst_30878;
var inst_30878__$1 = tmp30969;
var inst_30879__$1 = tmp30967;
var inst_30880__$1 = tmp30968;
var inst_30881__$1 = inst_30889;
var state_30937__$1 = (function (){var statearr_30973 = state_30937;
(statearr_30973[(12)] = inst_30879__$1);

(statearr_30973[(17)] = inst_30888);

(statearr_30973[(13)] = inst_30880__$1);

(statearr_30973[(14)] = inst_30881__$1);

(statearr_30973[(15)] = inst_30878__$1);

return statearr_30973;
})();
var statearr_30974_31008 = state_30937__$1;
(statearr_30974_31008[(2)] = null);

(statearr_30974_31008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (18))){
var inst_30907 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30975_31009 = state_30937__$1;
(statearr_30975_31009[(2)] = inst_30907);

(statearr_30975_31009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30938 === (8))){
var inst_30880 = (state_30937[(13)]);
var inst_30881 = (state_30937[(14)]);
var inst_30883 = (inst_30881 < inst_30880);
var inst_30884 = inst_30883;
var state_30937__$1 = state_30937;
if(cljs.core.truth_(inst_30884)){
var statearr_30976_31010 = state_30937__$1;
(statearr_30976_31010[(1)] = (10));

} else {
var statearr_30977_31011 = state_30937__$1;
(statearr_30977_31011[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__29749__auto___30983,mults,ensure_mult,p))
;
return ((function (switch__29654__auto__,c__29749__auto___30983,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_30978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30978[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_30978[(1)] = (1));

return statearr_30978;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_30937){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_30937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e30979){if((e30979 instanceof Object)){
var ex__29658__auto__ = e30979;
var statearr_30980_31012 = state_30937;
(statearr_30980_31012[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31013 = state_30937;
state_30937 = G__31013;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_30937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_30937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___30983,mults,ensure_mult,p))
})();
var state__29751__auto__ = (function (){var statearr_30981 = f__29750__auto__.call(null);
(statearr_30981[(6)] = c__29749__auto___30983);

return statearr_30981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___30983,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31015 = arguments.length;
switch (G__31015) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31018 = arguments.length;
switch (G__31018) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31021 = arguments.length;
switch (G__31021) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29749__auto___31088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var state_31060__$1 = state_31060;
var statearr_31062_31089 = state_31060__$1;
(statearr_31062_31089[(2)] = null);

(statearr_31062_31089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (1))){
var state_31060__$1 = state_31060;
var statearr_31063_31090 = state_31060__$1;
(statearr_31063_31090[(2)] = null);

(statearr_31063_31090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var inst_31024 = (state_31060[(7)]);
var inst_31026 = (inst_31024 < cnt);
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_31026)){
var statearr_31064_31091 = state_31060__$1;
(statearr_31064_31091[(1)] = (6));

} else {
var statearr_31065_31092 = state_31060__$1;
(statearr_31065_31092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (15))){
var inst_31056 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31066_31093 = state_31060__$1;
(statearr_31066_31093[(2)] = inst_31056);

(statearr_31066_31093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (13))){
var inst_31049 = cljs.core.async.close_BANG_.call(null,out);
var state_31060__$1 = state_31060;
var statearr_31067_31094 = state_31060__$1;
(statearr_31067_31094[(2)] = inst_31049);

(statearr_31067_31094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (6))){
var state_31060__$1 = state_31060;
var statearr_31068_31095 = state_31060__$1;
(statearr_31068_31095[(2)] = null);

(statearr_31068_31095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_31058 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (12))){
var inst_31046 = (state_31060[(8)]);
var inst_31046__$1 = (state_31060[(2)]);
var inst_31047 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31046__$1);
var state_31060__$1 = (function (){var statearr_31069 = state_31060;
(statearr_31069[(8)] = inst_31046__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_31047)){
var statearr_31070_31096 = state_31060__$1;
(statearr_31070_31096[(1)] = (13));

} else {
var statearr_31071_31097 = state_31060__$1;
(statearr_31071_31097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (2))){
var inst_31023 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31024 = (0);
var state_31060__$1 = (function (){var statearr_31072 = state_31060;
(statearr_31072[(9)] = inst_31023);

(statearr_31072[(7)] = inst_31024);

return statearr_31072;
})();
var statearr_31073_31098 = state_31060__$1;
(statearr_31073_31098[(2)] = null);

(statearr_31073_31098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (11))){
var inst_31024 = (state_31060[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31060,(10),Object,null,(9));
var inst_31033 = chs__$1.call(null,inst_31024);
var inst_31034 = done.call(null,inst_31024);
var inst_31035 = cljs.core.async.take_BANG_.call(null,inst_31033,inst_31034);
var state_31060__$1 = state_31060;
var statearr_31074_31099 = state_31060__$1;
(statearr_31074_31099[(2)] = inst_31035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (9))){
var inst_31024 = (state_31060[(7)]);
var inst_31037 = (state_31060[(2)]);
var inst_31038 = (inst_31024 + (1));
var inst_31024__$1 = inst_31038;
var state_31060__$1 = (function (){var statearr_31075 = state_31060;
(statearr_31075[(7)] = inst_31024__$1);

(statearr_31075[(10)] = inst_31037);

return statearr_31075;
})();
var statearr_31076_31100 = state_31060__$1;
(statearr_31076_31100[(2)] = null);

(statearr_31076_31100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (5))){
var inst_31044 = (state_31060[(2)]);
var state_31060__$1 = (function (){var statearr_31077 = state_31060;
(statearr_31077[(11)] = inst_31044);

return statearr_31077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(12),dchan);
} else {
if((state_val_31061 === (14))){
var inst_31046 = (state_31060[(8)]);
var inst_31051 = cljs.core.apply.call(null,f,inst_31046);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31060__$1,(16),out,inst_31051);
} else {
if((state_val_31061 === (16))){
var inst_31053 = (state_31060[(2)]);
var state_31060__$1 = (function (){var statearr_31078 = state_31060;
(statearr_31078[(12)] = inst_31053);

return statearr_31078;
})();
var statearr_31079_31101 = state_31060__$1;
(statearr_31079_31101[(2)] = null);

(statearr_31079_31101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (10))){
var inst_31028 = (state_31060[(2)]);
var inst_31029 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31060__$1 = (function (){var statearr_31080 = state_31060;
(statearr_31080[(13)] = inst_31028);

return statearr_31080;
})();
var statearr_31081_31102 = state_31060__$1;
(statearr_31081_31102[(2)] = inst_31029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (8))){
var inst_31042 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31082_31103 = state_31060__$1;
(statearr_31082_31103[(2)] = inst_31042);

(statearr_31082_31103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__29749__auto___31088,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29654__auto__,c__29749__auto___31088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31083[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31083[(1)] = (1));

return statearr_31083;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31060){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31084){if((e31084 instanceof Object)){
var ex__29658__auto__ = e31084;
var statearr_31085_31104 = state_31060;
(statearr_31085_31104[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31105 = state_31060;
state_31060 = G__31105;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31088,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29751__auto__ = (function (){var statearr_31086 = f__29750__auto__.call(null);
(statearr_31086[(6)] = c__29749__auto___31088);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31088,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31108 = arguments.length;
switch (G__31108) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29749__auto___31162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31162,out){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31162,out){
return (function (state_31140){
var state_val_31141 = (state_31140[(1)]);
if((state_val_31141 === (7))){
var inst_31119 = (state_31140[(7)]);
var inst_31120 = (state_31140[(8)]);
var inst_31119__$1 = (state_31140[(2)]);
var inst_31120__$1 = cljs.core.nth.call(null,inst_31119__$1,(0),null);
var inst_31121 = cljs.core.nth.call(null,inst_31119__$1,(1),null);
var inst_31122 = (inst_31120__$1 == null);
var state_31140__$1 = (function (){var statearr_31142 = state_31140;
(statearr_31142[(7)] = inst_31119__$1);

(statearr_31142[(9)] = inst_31121);

(statearr_31142[(8)] = inst_31120__$1);

return statearr_31142;
})();
if(cljs.core.truth_(inst_31122)){
var statearr_31143_31163 = state_31140__$1;
(statearr_31143_31163[(1)] = (8));

} else {
var statearr_31144_31164 = state_31140__$1;
(statearr_31144_31164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (1))){
var inst_31109 = cljs.core.vec.call(null,chs);
var inst_31110 = inst_31109;
var state_31140__$1 = (function (){var statearr_31145 = state_31140;
(statearr_31145[(10)] = inst_31110);

return statearr_31145;
})();
var statearr_31146_31165 = state_31140__$1;
(statearr_31146_31165[(2)] = null);

(statearr_31146_31165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (4))){
var inst_31110 = (state_31140[(10)]);
var state_31140__$1 = state_31140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31140__$1,(7),inst_31110);
} else {
if((state_val_31141 === (6))){
var inst_31136 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31147_31166 = state_31140__$1;
(statearr_31147_31166[(2)] = inst_31136);

(statearr_31147_31166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (3))){
var inst_31138 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31140__$1,inst_31138);
} else {
if((state_val_31141 === (2))){
var inst_31110 = (state_31140[(10)]);
var inst_31112 = cljs.core.count.call(null,inst_31110);
var inst_31113 = (inst_31112 > (0));
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31113)){
var statearr_31149_31167 = state_31140__$1;
(statearr_31149_31167[(1)] = (4));

} else {
var statearr_31150_31168 = state_31140__$1;
(statearr_31150_31168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (11))){
var inst_31110 = (state_31140[(10)]);
var inst_31129 = (state_31140[(2)]);
var tmp31148 = inst_31110;
var inst_31110__$1 = tmp31148;
var state_31140__$1 = (function (){var statearr_31151 = state_31140;
(statearr_31151[(11)] = inst_31129);

(statearr_31151[(10)] = inst_31110__$1);

return statearr_31151;
})();
var statearr_31152_31169 = state_31140__$1;
(statearr_31152_31169[(2)] = null);

(statearr_31152_31169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (9))){
var inst_31120 = (state_31140[(8)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31140__$1,(11),out,inst_31120);
} else {
if((state_val_31141 === (5))){
var inst_31134 = cljs.core.async.close_BANG_.call(null,out);
var state_31140__$1 = state_31140;
var statearr_31153_31170 = state_31140__$1;
(statearr_31153_31170[(2)] = inst_31134);

(statearr_31153_31170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (10))){
var inst_31132 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31154_31171 = state_31140__$1;
(statearr_31154_31171[(2)] = inst_31132);

(statearr_31154_31171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (8))){
var inst_31119 = (state_31140[(7)]);
var inst_31121 = (state_31140[(9)]);
var inst_31110 = (state_31140[(10)]);
var inst_31120 = (state_31140[(8)]);
var inst_31124 = (function (){var cs = inst_31110;
var vec__31115 = inst_31119;
var v = inst_31120;
var c = inst_31121;
return ((function (cs,vec__31115,v,c,inst_31119,inst_31121,inst_31110,inst_31120,state_val_31141,c__29749__auto___31162,out){
return (function (p1__31106_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31106_SHARP_);
});
;})(cs,vec__31115,v,c,inst_31119,inst_31121,inst_31110,inst_31120,state_val_31141,c__29749__auto___31162,out))
})();
var inst_31125 = cljs.core.filterv.call(null,inst_31124,inst_31110);
var inst_31110__$1 = inst_31125;
var state_31140__$1 = (function (){var statearr_31155 = state_31140;
(statearr_31155[(10)] = inst_31110__$1);

return statearr_31155;
})();
var statearr_31156_31172 = state_31140__$1;
(statearr_31156_31172[(2)] = null);

(statearr_31156_31172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__29749__auto___31162,out))
;
return ((function (switch__29654__auto__,c__29749__auto___31162,out){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31157[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31157[(1)] = (1));

return statearr_31157;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31140){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31158){if((e31158 instanceof Object)){
var ex__29658__auto__ = e31158;
var statearr_31159_31173 = state_31140;
(statearr_31159_31173[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31174 = state_31140;
state_31140 = G__31174;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31162,out))
})();
var state__29751__auto__ = (function (){var statearr_31160 = f__29750__auto__.call(null);
(statearr_31160[(6)] = c__29749__auto___31162);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31162,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31176 = arguments.length;
switch (G__31176) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29749__auto___31221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31221,out){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31221,out){
return (function (state_31200){
var state_val_31201 = (state_31200[(1)]);
if((state_val_31201 === (7))){
var inst_31182 = (state_31200[(7)]);
var inst_31182__$1 = (state_31200[(2)]);
var inst_31183 = (inst_31182__$1 == null);
var inst_31184 = cljs.core.not.call(null,inst_31183);
var state_31200__$1 = (function (){var statearr_31202 = state_31200;
(statearr_31202[(7)] = inst_31182__$1);

return statearr_31202;
})();
if(inst_31184){
var statearr_31203_31222 = state_31200__$1;
(statearr_31203_31222[(1)] = (8));

} else {
var statearr_31204_31223 = state_31200__$1;
(statearr_31204_31223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (1))){
var inst_31177 = (0);
var state_31200__$1 = (function (){var statearr_31205 = state_31200;
(statearr_31205[(8)] = inst_31177);

return statearr_31205;
})();
var statearr_31206_31224 = state_31200__$1;
(statearr_31206_31224[(2)] = null);

(statearr_31206_31224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (4))){
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31200__$1,(7),ch);
} else {
if((state_val_31201 === (6))){
var inst_31195 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
var statearr_31207_31225 = state_31200__$1;
(statearr_31207_31225[(2)] = inst_31195);

(statearr_31207_31225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (3))){
var inst_31197 = (state_31200[(2)]);
var inst_31198 = cljs.core.async.close_BANG_.call(null,out);
var state_31200__$1 = (function (){var statearr_31208 = state_31200;
(statearr_31208[(9)] = inst_31197);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31200__$1,inst_31198);
} else {
if((state_val_31201 === (2))){
var inst_31177 = (state_31200[(8)]);
var inst_31179 = (inst_31177 < n);
var state_31200__$1 = state_31200;
if(cljs.core.truth_(inst_31179)){
var statearr_31209_31226 = state_31200__$1;
(statearr_31209_31226[(1)] = (4));

} else {
var statearr_31210_31227 = state_31200__$1;
(statearr_31210_31227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (11))){
var inst_31177 = (state_31200[(8)]);
var inst_31187 = (state_31200[(2)]);
var inst_31188 = (inst_31177 + (1));
var inst_31177__$1 = inst_31188;
var state_31200__$1 = (function (){var statearr_31211 = state_31200;
(statearr_31211[(10)] = inst_31187);

(statearr_31211[(8)] = inst_31177__$1);

return statearr_31211;
})();
var statearr_31212_31228 = state_31200__$1;
(statearr_31212_31228[(2)] = null);

(statearr_31212_31228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (9))){
var state_31200__$1 = state_31200;
var statearr_31213_31229 = state_31200__$1;
(statearr_31213_31229[(2)] = null);

(statearr_31213_31229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (5))){
var state_31200__$1 = state_31200;
var statearr_31214_31230 = state_31200__$1;
(statearr_31214_31230[(2)] = null);

(statearr_31214_31230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (10))){
var inst_31192 = (state_31200[(2)]);
var state_31200__$1 = state_31200;
var statearr_31215_31231 = state_31200__$1;
(statearr_31215_31231[(2)] = inst_31192);

(statearr_31215_31231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31201 === (8))){
var inst_31182 = (state_31200[(7)]);
var state_31200__$1 = state_31200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31200__$1,(11),out,inst_31182);
} else {
return null;
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
}
});})(c__29749__auto___31221,out))
;
return ((function (switch__29654__auto__,c__29749__auto___31221,out){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31216[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31216[(1)] = (1));

return statearr_31216;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31200){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31217){if((e31217 instanceof Object)){
var ex__29658__auto__ = e31217;
var statearr_31218_31232 = state_31200;
(statearr_31218_31232[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31233 = state_31200;
state_31200 = G__31233;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31221,out))
})();
var state__29751__auto__ = (function (){var statearr_31219 = f__29750__auto__.call(null);
(statearr_31219[(6)] = c__29749__auto___31221);

return statearr_31219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31221,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31235 = (function (f,ch,meta31236){
this.f = f;
this.ch = ch;
this.meta31236 = meta31236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31237,meta31236__$1){
var self__ = this;
var _31237__$1 = this;
return (new cljs.core.async.t_cljs$core$async31235(self__.f,self__.ch,meta31236__$1));
});

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31237){
var self__ = this;
var _31237__$1 = this;
return self__.meta31236;
});

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31238 = (function (f,ch,meta31236,_,fn1,meta31239){
this.f = f;
this.ch = ch;
this.meta31236 = meta31236;
this._ = _;
this.fn1 = fn1;
this.meta31239 = meta31239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31240,meta31239__$1){
var self__ = this;
var _31240__$1 = this;
return (new cljs.core.async.t_cljs$core$async31238(self__.f,self__.ch,self__.meta31236,self__._,self__.fn1,meta31239__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31240){
var self__ = this;
var _31240__$1 = this;
return self__.meta31239;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31234_SHARP_){
return f1.call(null,(((p1__31234_SHARP_ == null))?null:self__.f.call(null,p1__31234_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31238.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31236","meta31236",624951942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31235","cljs.core.async/t_cljs$core$async31235",1068445103,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31239","meta31239",1756285194,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31238";

cljs.core.async.t_cljs$core$async31238.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31238");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31238.
 */
cljs.core.async.__GT_t_cljs$core$async31238 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31238(f__$1,ch__$1,meta31236__$1,___$2,fn1__$1,meta31239){
return (new cljs.core.async.t_cljs$core$async31238(f__$1,ch__$1,meta31236__$1,___$2,fn1__$1,meta31239));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31238(self__.f,self__.ch,self__.meta31236,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31236","meta31236",624951942,null)], null);
});

cljs.core.async.t_cljs$core$async31235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31235";

cljs.core.async.t_cljs$core$async31235.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31235");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31235.
 */
cljs.core.async.__GT_t_cljs$core$async31235 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31235(f__$1,ch__$1,meta31236){
return (new cljs.core.async.t_cljs$core$async31235(f__$1,ch__$1,meta31236));
});

}

return (new cljs.core.async.t_cljs$core$async31235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31241 = (function (f,ch,meta31242){
this.f = f;
this.ch = ch;
this.meta31242 = meta31242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31243,meta31242__$1){
var self__ = this;
var _31243__$1 = this;
return (new cljs.core.async.t_cljs$core$async31241(self__.f,self__.ch,meta31242__$1));
});

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31243){
var self__ = this;
var _31243__$1 = this;
return self__.meta31242;
});

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31242","meta31242",-357277053,null)], null);
});

cljs.core.async.t_cljs$core$async31241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31241";

cljs.core.async.t_cljs$core$async31241.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31241");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31241.
 */
cljs.core.async.__GT_t_cljs$core$async31241 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31241(f__$1,ch__$1,meta31242){
return (new cljs.core.async.t_cljs$core$async31241(f__$1,ch__$1,meta31242));
});

}

return (new cljs.core.async.t_cljs$core$async31241(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31244 = (function (p,ch,meta31245){
this.p = p;
this.ch = ch;
this.meta31245 = meta31245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31246,meta31245__$1){
var self__ = this;
var _31246__$1 = this;
return (new cljs.core.async.t_cljs$core$async31244(self__.p,self__.ch,meta31245__$1));
});

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31246){
var self__ = this;
var _31246__$1 = this;
return self__.meta31245;
});

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31245","meta31245",1955013694,null)], null);
});

cljs.core.async.t_cljs$core$async31244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31244";

cljs.core.async.t_cljs$core$async31244.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31244");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31244.
 */
cljs.core.async.__GT_t_cljs$core$async31244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31244(p__$1,ch__$1,meta31245){
return (new cljs.core.async.t_cljs$core$async31244(p__$1,ch__$1,meta31245));
});

}

return (new cljs.core.async.t_cljs$core$async31244(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31248 = arguments.length;
switch (G__31248) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29749__auto___31288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31288,out){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31288,out){
return (function (state_31269){
var state_val_31270 = (state_31269[(1)]);
if((state_val_31270 === (7))){
var inst_31265 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
var statearr_31271_31289 = state_31269__$1;
(statearr_31271_31289[(2)] = inst_31265);

(statearr_31271_31289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (1))){
var state_31269__$1 = state_31269;
var statearr_31272_31290 = state_31269__$1;
(statearr_31272_31290[(2)] = null);

(statearr_31272_31290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (4))){
var inst_31251 = (state_31269[(7)]);
var inst_31251__$1 = (state_31269[(2)]);
var inst_31252 = (inst_31251__$1 == null);
var state_31269__$1 = (function (){var statearr_31273 = state_31269;
(statearr_31273[(7)] = inst_31251__$1);

return statearr_31273;
})();
if(cljs.core.truth_(inst_31252)){
var statearr_31274_31291 = state_31269__$1;
(statearr_31274_31291[(1)] = (5));

} else {
var statearr_31275_31292 = state_31269__$1;
(statearr_31275_31292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (6))){
var inst_31251 = (state_31269[(7)]);
var inst_31256 = p.call(null,inst_31251);
var state_31269__$1 = state_31269;
if(cljs.core.truth_(inst_31256)){
var statearr_31276_31293 = state_31269__$1;
(statearr_31276_31293[(1)] = (8));

} else {
var statearr_31277_31294 = state_31269__$1;
(statearr_31277_31294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (3))){
var inst_31267 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31269__$1,inst_31267);
} else {
if((state_val_31270 === (2))){
var state_31269__$1 = state_31269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31269__$1,(4),ch);
} else {
if((state_val_31270 === (11))){
var inst_31259 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
var statearr_31278_31295 = state_31269__$1;
(statearr_31278_31295[(2)] = inst_31259);

(statearr_31278_31295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (9))){
var state_31269__$1 = state_31269;
var statearr_31279_31296 = state_31269__$1;
(statearr_31279_31296[(2)] = null);

(statearr_31279_31296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (5))){
var inst_31254 = cljs.core.async.close_BANG_.call(null,out);
var state_31269__$1 = state_31269;
var statearr_31280_31297 = state_31269__$1;
(statearr_31280_31297[(2)] = inst_31254);

(statearr_31280_31297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (10))){
var inst_31262 = (state_31269[(2)]);
var state_31269__$1 = (function (){var statearr_31281 = state_31269;
(statearr_31281[(8)] = inst_31262);

return statearr_31281;
})();
var statearr_31282_31298 = state_31269__$1;
(statearr_31282_31298[(2)] = null);

(statearr_31282_31298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (8))){
var inst_31251 = (state_31269[(7)]);
var state_31269__$1 = state_31269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31269__$1,(11),out,inst_31251);
} else {
return null;
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
}
});})(c__29749__auto___31288,out))
;
return ((function (switch__29654__auto__,c__29749__auto___31288,out){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31283 = [null,null,null,null,null,null,null,null,null];
(statearr_31283[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31283[(1)] = (1));

return statearr_31283;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31269){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31284){if((e31284 instanceof Object)){
var ex__29658__auto__ = e31284;
var statearr_31285_31299 = state_31269;
(statearr_31285_31299[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31300 = state_31269;
state_31269 = G__31300;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31288,out))
})();
var state__29751__auto__ = (function (){var statearr_31286 = f__29750__auto__.call(null);
(statearr_31286[(6)] = c__29749__auto___31288);

return statearr_31286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31288,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31302 = arguments.length;
switch (G__31302) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto__){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto__){
return (function (state_31365){
var state_val_31366 = (state_31365[(1)]);
if((state_val_31366 === (7))){
var inst_31361 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
var statearr_31367_31405 = state_31365__$1;
(statearr_31367_31405[(2)] = inst_31361);

(statearr_31367_31405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (20))){
var inst_31331 = (state_31365[(7)]);
var inst_31342 = (state_31365[(2)]);
var inst_31343 = cljs.core.next.call(null,inst_31331);
var inst_31317 = inst_31343;
var inst_31318 = null;
var inst_31319 = (0);
var inst_31320 = (0);
var state_31365__$1 = (function (){var statearr_31368 = state_31365;
(statearr_31368[(8)] = inst_31318);

(statearr_31368[(9)] = inst_31319);

(statearr_31368[(10)] = inst_31320);

(statearr_31368[(11)] = inst_31342);

(statearr_31368[(12)] = inst_31317);

return statearr_31368;
})();
var statearr_31369_31406 = state_31365__$1;
(statearr_31369_31406[(2)] = null);

(statearr_31369_31406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (1))){
var state_31365__$1 = state_31365;
var statearr_31370_31407 = state_31365__$1;
(statearr_31370_31407[(2)] = null);

(statearr_31370_31407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (4))){
var inst_31306 = (state_31365[(13)]);
var inst_31306__$1 = (state_31365[(2)]);
var inst_31307 = (inst_31306__$1 == null);
var state_31365__$1 = (function (){var statearr_31371 = state_31365;
(statearr_31371[(13)] = inst_31306__$1);

return statearr_31371;
})();
if(cljs.core.truth_(inst_31307)){
var statearr_31372_31408 = state_31365__$1;
(statearr_31372_31408[(1)] = (5));

} else {
var statearr_31373_31409 = state_31365__$1;
(statearr_31373_31409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (15))){
var state_31365__$1 = state_31365;
var statearr_31377_31410 = state_31365__$1;
(statearr_31377_31410[(2)] = null);

(statearr_31377_31410[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (21))){
var state_31365__$1 = state_31365;
var statearr_31378_31411 = state_31365__$1;
(statearr_31378_31411[(2)] = null);

(statearr_31378_31411[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (13))){
var inst_31318 = (state_31365[(8)]);
var inst_31319 = (state_31365[(9)]);
var inst_31320 = (state_31365[(10)]);
var inst_31317 = (state_31365[(12)]);
var inst_31327 = (state_31365[(2)]);
var inst_31328 = (inst_31320 + (1));
var tmp31374 = inst_31318;
var tmp31375 = inst_31319;
var tmp31376 = inst_31317;
var inst_31317__$1 = tmp31376;
var inst_31318__$1 = tmp31374;
var inst_31319__$1 = tmp31375;
var inst_31320__$1 = inst_31328;
var state_31365__$1 = (function (){var statearr_31379 = state_31365;
(statearr_31379[(8)] = inst_31318__$1);

(statearr_31379[(9)] = inst_31319__$1);

(statearr_31379[(10)] = inst_31320__$1);

(statearr_31379[(12)] = inst_31317__$1);

(statearr_31379[(14)] = inst_31327);

return statearr_31379;
})();
var statearr_31380_31412 = state_31365__$1;
(statearr_31380_31412[(2)] = null);

(statearr_31380_31412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (22))){
var state_31365__$1 = state_31365;
var statearr_31381_31413 = state_31365__$1;
(statearr_31381_31413[(2)] = null);

(statearr_31381_31413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (6))){
var inst_31306 = (state_31365[(13)]);
var inst_31315 = f.call(null,inst_31306);
var inst_31316 = cljs.core.seq.call(null,inst_31315);
var inst_31317 = inst_31316;
var inst_31318 = null;
var inst_31319 = (0);
var inst_31320 = (0);
var state_31365__$1 = (function (){var statearr_31382 = state_31365;
(statearr_31382[(8)] = inst_31318);

(statearr_31382[(9)] = inst_31319);

(statearr_31382[(10)] = inst_31320);

(statearr_31382[(12)] = inst_31317);

return statearr_31382;
})();
var statearr_31383_31414 = state_31365__$1;
(statearr_31383_31414[(2)] = null);

(statearr_31383_31414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (17))){
var inst_31331 = (state_31365[(7)]);
var inst_31335 = cljs.core.chunk_first.call(null,inst_31331);
var inst_31336 = cljs.core.chunk_rest.call(null,inst_31331);
var inst_31337 = cljs.core.count.call(null,inst_31335);
var inst_31317 = inst_31336;
var inst_31318 = inst_31335;
var inst_31319 = inst_31337;
var inst_31320 = (0);
var state_31365__$1 = (function (){var statearr_31384 = state_31365;
(statearr_31384[(8)] = inst_31318);

(statearr_31384[(9)] = inst_31319);

(statearr_31384[(10)] = inst_31320);

(statearr_31384[(12)] = inst_31317);

return statearr_31384;
})();
var statearr_31385_31415 = state_31365__$1;
(statearr_31385_31415[(2)] = null);

(statearr_31385_31415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (3))){
var inst_31363 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31365__$1,inst_31363);
} else {
if((state_val_31366 === (12))){
var inst_31351 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
var statearr_31386_31416 = state_31365__$1;
(statearr_31386_31416[(2)] = inst_31351);

(statearr_31386_31416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (2))){
var state_31365__$1 = state_31365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31365__$1,(4),in$);
} else {
if((state_val_31366 === (23))){
var inst_31359 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
var statearr_31387_31417 = state_31365__$1;
(statearr_31387_31417[(2)] = inst_31359);

(statearr_31387_31417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (19))){
var inst_31346 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
var statearr_31388_31418 = state_31365__$1;
(statearr_31388_31418[(2)] = inst_31346);

(statearr_31388_31418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (11))){
var inst_31331 = (state_31365[(7)]);
var inst_31317 = (state_31365[(12)]);
var inst_31331__$1 = cljs.core.seq.call(null,inst_31317);
var state_31365__$1 = (function (){var statearr_31389 = state_31365;
(statearr_31389[(7)] = inst_31331__$1);

return statearr_31389;
})();
if(inst_31331__$1){
var statearr_31390_31419 = state_31365__$1;
(statearr_31390_31419[(1)] = (14));

} else {
var statearr_31391_31420 = state_31365__$1;
(statearr_31391_31420[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (9))){
var inst_31353 = (state_31365[(2)]);
var inst_31354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31365__$1 = (function (){var statearr_31392 = state_31365;
(statearr_31392[(15)] = inst_31353);

return statearr_31392;
})();
if(cljs.core.truth_(inst_31354)){
var statearr_31393_31421 = state_31365__$1;
(statearr_31393_31421[(1)] = (21));

} else {
var statearr_31394_31422 = state_31365__$1;
(statearr_31394_31422[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (5))){
var inst_31309 = cljs.core.async.close_BANG_.call(null,out);
var state_31365__$1 = state_31365;
var statearr_31395_31423 = state_31365__$1;
(statearr_31395_31423[(2)] = inst_31309);

(statearr_31395_31423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (14))){
var inst_31331 = (state_31365[(7)]);
var inst_31333 = cljs.core.chunked_seq_QMARK_.call(null,inst_31331);
var state_31365__$1 = state_31365;
if(inst_31333){
var statearr_31396_31424 = state_31365__$1;
(statearr_31396_31424[(1)] = (17));

} else {
var statearr_31397_31425 = state_31365__$1;
(statearr_31397_31425[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (16))){
var inst_31349 = (state_31365[(2)]);
var state_31365__$1 = state_31365;
var statearr_31398_31426 = state_31365__$1;
(statearr_31398_31426[(2)] = inst_31349);

(statearr_31398_31426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31366 === (10))){
var inst_31318 = (state_31365[(8)]);
var inst_31320 = (state_31365[(10)]);
var inst_31325 = cljs.core._nth.call(null,inst_31318,inst_31320);
var state_31365__$1 = state_31365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31365__$1,(13),out,inst_31325);
} else {
if((state_val_31366 === (18))){
var inst_31331 = (state_31365[(7)]);
var inst_31340 = cljs.core.first.call(null,inst_31331);
var state_31365__$1 = state_31365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31365__$1,(20),out,inst_31340);
} else {
if((state_val_31366 === (8))){
var inst_31319 = (state_31365[(9)]);
var inst_31320 = (state_31365[(10)]);
var inst_31322 = (inst_31320 < inst_31319);
var inst_31323 = inst_31322;
var state_31365__$1 = state_31365;
if(cljs.core.truth_(inst_31323)){
var statearr_31399_31427 = state_31365__$1;
(statearr_31399_31427[(1)] = (10));

} else {
var statearr_31400_31428 = state_31365__$1;
(statearr_31400_31428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__29749__auto__))
;
return ((function (switch__29654__auto__,c__29749__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29655__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29655__auto____0 = (function (){
var statearr_31401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31401[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29655__auto__);

(statearr_31401[(1)] = (1));

return statearr_31401;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29655__auto____1 = (function (state_31365){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31402){if((e31402 instanceof Object)){
var ex__29658__auto__ = e31402;
var statearr_31403_31429 = state_31365;
(statearr_31403_31429[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31430 = state_31365;
state_31365 = G__31430;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29655__auto__ = function(state_31365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29655__auto____1.call(this,state_31365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29655__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29655__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto__))
})();
var state__29751__auto__ = (function (){var statearr_31404 = f__29750__auto__.call(null);
(statearr_31404[(6)] = c__29749__auto__);

return statearr_31404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto__))
);

return c__29749__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31432 = arguments.length;
switch (G__31432) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31435 = arguments.length;
switch (G__31435) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31438 = arguments.length;
switch (G__31438) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29749__auto___31485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31485,out){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31485,out){
return (function (state_31462){
var state_val_31463 = (state_31462[(1)]);
if((state_val_31463 === (7))){
var inst_31457 = (state_31462[(2)]);
var state_31462__$1 = state_31462;
var statearr_31464_31486 = state_31462__$1;
(statearr_31464_31486[(2)] = inst_31457);

(statearr_31464_31486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (1))){
var inst_31439 = null;
var state_31462__$1 = (function (){var statearr_31465 = state_31462;
(statearr_31465[(7)] = inst_31439);

return statearr_31465;
})();
var statearr_31466_31487 = state_31462__$1;
(statearr_31466_31487[(2)] = null);

(statearr_31466_31487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (4))){
var inst_31442 = (state_31462[(8)]);
var inst_31442__$1 = (state_31462[(2)]);
var inst_31443 = (inst_31442__$1 == null);
var inst_31444 = cljs.core.not.call(null,inst_31443);
var state_31462__$1 = (function (){var statearr_31467 = state_31462;
(statearr_31467[(8)] = inst_31442__$1);

return statearr_31467;
})();
if(inst_31444){
var statearr_31468_31488 = state_31462__$1;
(statearr_31468_31488[(1)] = (5));

} else {
var statearr_31469_31489 = state_31462__$1;
(statearr_31469_31489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (6))){
var state_31462__$1 = state_31462;
var statearr_31470_31490 = state_31462__$1;
(statearr_31470_31490[(2)] = null);

(statearr_31470_31490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (3))){
var inst_31459 = (state_31462[(2)]);
var inst_31460 = cljs.core.async.close_BANG_.call(null,out);
var state_31462__$1 = (function (){var statearr_31471 = state_31462;
(statearr_31471[(9)] = inst_31459);

return statearr_31471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31462__$1,inst_31460);
} else {
if((state_val_31463 === (2))){
var state_31462__$1 = state_31462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31462__$1,(4),ch);
} else {
if((state_val_31463 === (11))){
var inst_31442 = (state_31462[(8)]);
var inst_31451 = (state_31462[(2)]);
var inst_31439 = inst_31442;
var state_31462__$1 = (function (){var statearr_31472 = state_31462;
(statearr_31472[(7)] = inst_31439);

(statearr_31472[(10)] = inst_31451);

return statearr_31472;
})();
var statearr_31473_31491 = state_31462__$1;
(statearr_31473_31491[(2)] = null);

(statearr_31473_31491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (9))){
var inst_31442 = (state_31462[(8)]);
var state_31462__$1 = state_31462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31462__$1,(11),out,inst_31442);
} else {
if((state_val_31463 === (5))){
var inst_31439 = (state_31462[(7)]);
var inst_31442 = (state_31462[(8)]);
var inst_31446 = cljs.core._EQ_.call(null,inst_31442,inst_31439);
var state_31462__$1 = state_31462;
if(inst_31446){
var statearr_31475_31492 = state_31462__$1;
(statearr_31475_31492[(1)] = (8));

} else {
var statearr_31476_31493 = state_31462__$1;
(statearr_31476_31493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (10))){
var inst_31454 = (state_31462[(2)]);
var state_31462__$1 = state_31462;
var statearr_31477_31494 = state_31462__$1;
(statearr_31477_31494[(2)] = inst_31454);

(statearr_31477_31494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31463 === (8))){
var inst_31439 = (state_31462[(7)]);
var tmp31474 = inst_31439;
var inst_31439__$1 = tmp31474;
var state_31462__$1 = (function (){var statearr_31478 = state_31462;
(statearr_31478[(7)] = inst_31439__$1);

return statearr_31478;
})();
var statearr_31479_31495 = state_31462__$1;
(statearr_31479_31495[(2)] = null);

(statearr_31479_31495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__29749__auto___31485,out))
;
return ((function (switch__29654__auto__,c__29749__auto___31485,out){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31480[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31480[(1)] = (1));

return statearr_31480;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31462){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31481){if((e31481 instanceof Object)){
var ex__29658__auto__ = e31481;
var statearr_31482_31496 = state_31462;
(statearr_31482_31496[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31497 = state_31462;
state_31462 = G__31497;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31485,out))
})();
var state__29751__auto__ = (function (){var statearr_31483 = f__29750__auto__.call(null);
(statearr_31483[(6)] = c__29749__auto___31485);

return statearr_31483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31485,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31499 = arguments.length;
switch (G__31499) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29749__auto___31565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31565,out){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31565,out){
return (function (state_31537){
var state_val_31538 = (state_31537[(1)]);
if((state_val_31538 === (7))){
var inst_31533 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31539_31566 = state_31537__$1;
(statearr_31539_31566[(2)] = inst_31533);

(statearr_31539_31566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (1))){
var inst_31500 = (new Array(n));
var inst_31501 = inst_31500;
var inst_31502 = (0);
var state_31537__$1 = (function (){var statearr_31540 = state_31537;
(statearr_31540[(7)] = inst_31502);

(statearr_31540[(8)] = inst_31501);

return statearr_31540;
})();
var statearr_31541_31567 = state_31537__$1;
(statearr_31541_31567[(2)] = null);

(statearr_31541_31567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (4))){
var inst_31505 = (state_31537[(9)]);
var inst_31505__$1 = (state_31537[(2)]);
var inst_31506 = (inst_31505__$1 == null);
var inst_31507 = cljs.core.not.call(null,inst_31506);
var state_31537__$1 = (function (){var statearr_31542 = state_31537;
(statearr_31542[(9)] = inst_31505__$1);

return statearr_31542;
})();
if(inst_31507){
var statearr_31543_31568 = state_31537__$1;
(statearr_31543_31568[(1)] = (5));

} else {
var statearr_31544_31569 = state_31537__$1;
(statearr_31544_31569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (15))){
var inst_31527 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31545_31570 = state_31537__$1;
(statearr_31545_31570[(2)] = inst_31527);

(statearr_31545_31570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (13))){
var state_31537__$1 = state_31537;
var statearr_31546_31571 = state_31537__$1;
(statearr_31546_31571[(2)] = null);

(statearr_31546_31571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (6))){
var inst_31502 = (state_31537[(7)]);
var inst_31523 = (inst_31502 > (0));
var state_31537__$1 = state_31537;
if(cljs.core.truth_(inst_31523)){
var statearr_31547_31572 = state_31537__$1;
(statearr_31547_31572[(1)] = (12));

} else {
var statearr_31548_31573 = state_31537__$1;
(statearr_31548_31573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (3))){
var inst_31535 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31537__$1,inst_31535);
} else {
if((state_val_31538 === (12))){
var inst_31501 = (state_31537[(8)]);
var inst_31525 = cljs.core.vec.call(null,inst_31501);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31537__$1,(15),out,inst_31525);
} else {
if((state_val_31538 === (2))){
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31537__$1,(4),ch);
} else {
if((state_val_31538 === (11))){
var inst_31517 = (state_31537[(2)]);
var inst_31518 = (new Array(n));
var inst_31501 = inst_31518;
var inst_31502 = (0);
var state_31537__$1 = (function (){var statearr_31549 = state_31537;
(statearr_31549[(7)] = inst_31502);

(statearr_31549[(8)] = inst_31501);

(statearr_31549[(10)] = inst_31517);

return statearr_31549;
})();
var statearr_31550_31574 = state_31537__$1;
(statearr_31550_31574[(2)] = null);

(statearr_31550_31574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (9))){
var inst_31501 = (state_31537[(8)]);
var inst_31515 = cljs.core.vec.call(null,inst_31501);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31537__$1,(11),out,inst_31515);
} else {
if((state_val_31538 === (5))){
var inst_31502 = (state_31537[(7)]);
var inst_31505 = (state_31537[(9)]);
var inst_31501 = (state_31537[(8)]);
var inst_31510 = (state_31537[(11)]);
var inst_31509 = (inst_31501[inst_31502] = inst_31505);
var inst_31510__$1 = (inst_31502 + (1));
var inst_31511 = (inst_31510__$1 < n);
var state_31537__$1 = (function (){var statearr_31551 = state_31537;
(statearr_31551[(11)] = inst_31510__$1);

(statearr_31551[(12)] = inst_31509);

return statearr_31551;
})();
if(cljs.core.truth_(inst_31511)){
var statearr_31552_31575 = state_31537__$1;
(statearr_31552_31575[(1)] = (8));

} else {
var statearr_31553_31576 = state_31537__$1;
(statearr_31553_31576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (14))){
var inst_31530 = (state_31537[(2)]);
var inst_31531 = cljs.core.async.close_BANG_.call(null,out);
var state_31537__$1 = (function (){var statearr_31555 = state_31537;
(statearr_31555[(13)] = inst_31530);

return statearr_31555;
})();
var statearr_31556_31577 = state_31537__$1;
(statearr_31556_31577[(2)] = inst_31531);

(statearr_31556_31577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (10))){
var inst_31521 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31557_31578 = state_31537__$1;
(statearr_31557_31578[(2)] = inst_31521);

(statearr_31557_31578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (8))){
var inst_31501 = (state_31537[(8)]);
var inst_31510 = (state_31537[(11)]);
var tmp31554 = inst_31501;
var inst_31501__$1 = tmp31554;
var inst_31502 = inst_31510;
var state_31537__$1 = (function (){var statearr_31558 = state_31537;
(statearr_31558[(7)] = inst_31502);

(statearr_31558[(8)] = inst_31501__$1);

return statearr_31558;
})();
var statearr_31559_31579 = state_31537__$1;
(statearr_31559_31579[(2)] = null);

(statearr_31559_31579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__29749__auto___31565,out))
;
return ((function (switch__29654__auto__,c__29749__auto___31565,out){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31537){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31561){if((e31561 instanceof Object)){
var ex__29658__auto__ = e31561;
var statearr_31562_31580 = state_31537;
(statearr_31562_31580[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31581 = state_31537;
state_31537 = G__31581;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31565,out))
})();
var state__29751__auto__ = (function (){var statearr_31563 = f__29750__auto__.call(null);
(statearr_31563[(6)] = c__29749__auto___31565);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31565,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31583 = arguments.length;
switch (G__31583) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29749__auto___31653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29749__auto___31653,out){
return (function (){
var f__29750__auto__ = (function (){var switch__29654__auto__ = ((function (c__29749__auto___31653,out){
return (function (state_31625){
var state_val_31626 = (state_31625[(1)]);
if((state_val_31626 === (7))){
var inst_31621 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31627_31654 = state_31625__$1;
(statearr_31627_31654[(2)] = inst_31621);

(statearr_31627_31654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (1))){
var inst_31584 = [];
var inst_31585 = inst_31584;
var inst_31586 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31625__$1 = (function (){var statearr_31628 = state_31625;
(statearr_31628[(7)] = inst_31586);

(statearr_31628[(8)] = inst_31585);

return statearr_31628;
})();
var statearr_31629_31655 = state_31625__$1;
(statearr_31629_31655[(2)] = null);

(statearr_31629_31655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (4))){
var inst_31589 = (state_31625[(9)]);
var inst_31589__$1 = (state_31625[(2)]);
var inst_31590 = (inst_31589__$1 == null);
var inst_31591 = cljs.core.not.call(null,inst_31590);
var state_31625__$1 = (function (){var statearr_31630 = state_31625;
(statearr_31630[(9)] = inst_31589__$1);

return statearr_31630;
})();
if(inst_31591){
var statearr_31631_31656 = state_31625__$1;
(statearr_31631_31656[(1)] = (5));

} else {
var statearr_31632_31657 = state_31625__$1;
(statearr_31632_31657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (15))){
var inst_31615 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31633_31658 = state_31625__$1;
(statearr_31633_31658[(2)] = inst_31615);

(statearr_31633_31658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (13))){
var state_31625__$1 = state_31625;
var statearr_31634_31659 = state_31625__$1;
(statearr_31634_31659[(2)] = null);

(statearr_31634_31659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (6))){
var inst_31585 = (state_31625[(8)]);
var inst_31610 = inst_31585.length;
var inst_31611 = (inst_31610 > (0));
var state_31625__$1 = state_31625;
if(cljs.core.truth_(inst_31611)){
var statearr_31635_31660 = state_31625__$1;
(statearr_31635_31660[(1)] = (12));

} else {
var statearr_31636_31661 = state_31625__$1;
(statearr_31636_31661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (3))){
var inst_31623 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31625__$1,inst_31623);
} else {
if((state_val_31626 === (12))){
var inst_31585 = (state_31625[(8)]);
var inst_31613 = cljs.core.vec.call(null,inst_31585);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(15),out,inst_31613);
} else {
if((state_val_31626 === (2))){
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31625__$1,(4),ch);
} else {
if((state_val_31626 === (11))){
var inst_31593 = (state_31625[(10)]);
var inst_31589 = (state_31625[(9)]);
var inst_31603 = (state_31625[(2)]);
var inst_31604 = [];
var inst_31605 = inst_31604.push(inst_31589);
var inst_31585 = inst_31604;
var inst_31586 = inst_31593;
var state_31625__$1 = (function (){var statearr_31637 = state_31625;
(statearr_31637[(7)] = inst_31586);

(statearr_31637[(11)] = inst_31605);

(statearr_31637[(8)] = inst_31585);

(statearr_31637[(12)] = inst_31603);

return statearr_31637;
})();
var statearr_31638_31662 = state_31625__$1;
(statearr_31638_31662[(2)] = null);

(statearr_31638_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (9))){
var inst_31585 = (state_31625[(8)]);
var inst_31601 = cljs.core.vec.call(null,inst_31585);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(11),out,inst_31601);
} else {
if((state_val_31626 === (5))){
var inst_31586 = (state_31625[(7)]);
var inst_31593 = (state_31625[(10)]);
var inst_31589 = (state_31625[(9)]);
var inst_31593__$1 = f.call(null,inst_31589);
var inst_31594 = cljs.core._EQ_.call(null,inst_31593__$1,inst_31586);
var inst_31595 = cljs.core.keyword_identical_QMARK_.call(null,inst_31586,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31596 = ((inst_31594) || (inst_31595));
var state_31625__$1 = (function (){var statearr_31639 = state_31625;
(statearr_31639[(10)] = inst_31593__$1);

return statearr_31639;
})();
if(cljs.core.truth_(inst_31596)){
var statearr_31640_31663 = state_31625__$1;
(statearr_31640_31663[(1)] = (8));

} else {
var statearr_31641_31664 = state_31625__$1;
(statearr_31641_31664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (14))){
var inst_31618 = (state_31625[(2)]);
var inst_31619 = cljs.core.async.close_BANG_.call(null,out);
var state_31625__$1 = (function (){var statearr_31643 = state_31625;
(statearr_31643[(13)] = inst_31618);

return statearr_31643;
})();
var statearr_31644_31665 = state_31625__$1;
(statearr_31644_31665[(2)] = inst_31619);

(statearr_31644_31665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (10))){
var inst_31608 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31645_31666 = state_31625__$1;
(statearr_31645_31666[(2)] = inst_31608);

(statearr_31645_31666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (8))){
var inst_31593 = (state_31625[(10)]);
var inst_31585 = (state_31625[(8)]);
var inst_31589 = (state_31625[(9)]);
var inst_31598 = inst_31585.push(inst_31589);
var tmp31642 = inst_31585;
var inst_31585__$1 = tmp31642;
var inst_31586 = inst_31593;
var state_31625__$1 = (function (){var statearr_31646 = state_31625;
(statearr_31646[(7)] = inst_31586);

(statearr_31646[(14)] = inst_31598);

(statearr_31646[(8)] = inst_31585__$1);

return statearr_31646;
})();
var statearr_31647_31667 = state_31625__$1;
(statearr_31647_31667[(2)] = null);

(statearr_31647_31667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__29749__auto___31653,out))
;
return ((function (switch__29654__auto__,c__29749__auto___31653,out){
return (function() {
var cljs$core$async$state_machine__29655__auto__ = null;
var cljs$core$async$state_machine__29655__auto____0 = (function (){
var statearr_31648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31648[(0)] = cljs$core$async$state_machine__29655__auto__);

(statearr_31648[(1)] = (1));

return statearr_31648;
});
var cljs$core$async$state_machine__29655__auto____1 = (function (state_31625){
while(true){
var ret_value__29656__auto__ = (function (){try{while(true){
var result__29657__auto__ = switch__29654__auto__.call(null,state_31625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29657__auto__;
}
break;
}
}catch (e31649){if((e31649 instanceof Object)){
var ex__29658__auto__ = e31649;
var statearr_31650_31668 = state_31625;
(statearr_31650_31668[(5)] = ex__29658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31669 = state_31625;
state_31625 = G__31669;
continue;
} else {
return ret_value__29656__auto__;
}
break;
}
});
cljs$core$async$state_machine__29655__auto__ = function(state_31625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29655__auto____1.call(this,state_31625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29655__auto____0;
cljs$core$async$state_machine__29655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29655__auto____1;
return cljs$core$async$state_machine__29655__auto__;
})()
;})(switch__29654__auto__,c__29749__auto___31653,out))
})();
var state__29751__auto__ = (function (){var statearr_31651 = f__29750__auto__.call(null);
(statearr_31651[(6)] = c__29749__auto___31653);

return statearr_31651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29751__auto__);
});})(c__29749__auto___31653,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
