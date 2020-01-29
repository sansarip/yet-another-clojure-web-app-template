// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_posh.core');
goog.require('cljs.core');
goog.require('re_posh.subs');
goog.require('re_posh.events');
goog.require('re_posh.effects');
goog.require('re_posh.coeffects');
goog.require('re_posh.db');
goog.require('re_frame.core');
re_posh.core.reg_query_sub = re_posh.subs.reg_query_sub;
re_posh.core.reg_pull_sub = re_posh.subs.reg_pull_sub;
re_posh.core.reg_pull_many_sub = re_posh.subs.reg_pull_many_sub;
re_posh.core.reg_sub = re_posh.subs.reg_sub;
re_posh.core.reg_event_ds = re_posh.events.reg_event_ds;
re_posh.core.connect_BANG_ = re_posh.db.connect_BANG_;
re_posh.core.subscribe = re_frame.core.subscribe;
re_posh.core.dispatch = re_frame.core.dispatch;
re_posh.core.dispatch_sync = re_frame.core.dispatch_sync;
re_posh.core.reg_event_fx = re_frame.core.reg_event_fx;
re_posh.core.inject_cofx = re_frame.core.inject_cofx;

//# sourceMappingURL=core.js.map
