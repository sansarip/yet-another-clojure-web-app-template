(ns posh-test.views.home.subs
  (:require
    [re-posh.core :as re-posh]))

;; define your home panel subscriptions here 
(re-posh/reg-sub
  ::item-input-id
  (fn [_ _]
      {:type  :query
       :query '[:find ?id .
                :where [?id :app/type :type/item-input]]}))

(re-posh/reg-sub
  ::item-input
  :<- [::item-input-id]
  (fn [id _]
      {:type    :pull
       :pattern '[*]
       :id      id}))

(re-posh/reg-sub
  ::item-ids
  (fn [_ _]
      {:type  :query
       :query '[:find ?id
                :where [?id :app/type :type/item]]}))

(re-posh/reg-sub
  ::items
  :<- [::item-ids]
  (fn [ids _]
      {:type    :pull-many
       :pattern '[:item/value]
       :ids     (reduce into [] ids)}))
