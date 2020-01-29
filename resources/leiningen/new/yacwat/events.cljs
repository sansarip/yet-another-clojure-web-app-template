(ns {{name}}.events
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [{{name}}.db :as db]
    [{{name}}.effects :as effects]
    [re-frame.core :as re-frame]{{#re-posh?}}
    [re-posh.core :as re-posh]{{/re-posh?}}
    [reitit.frontend.controllers :as rfc]))

(re-frame/reg-event-db
  ::initialize-db
  (fn-traced [_ _]
             db/default-db)){{#re-posh?}}

(re-posh/reg-event-ds
  ::initialize-ds
  (fn-traced [_ _]
             db/default-ds)){{/re-posh?}}

(re-frame/reg-event-fx
  ::navigate
  (fn [db [_ & route]]
    ;; See `navigate` effect in routes.cljs
    {::effects/navigate! route}))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          controllers (rfc/apply-controllers (:controllers old-match) new-match)]
      (assoc db :current-route (assoc new-match :controllers controllers)))))
