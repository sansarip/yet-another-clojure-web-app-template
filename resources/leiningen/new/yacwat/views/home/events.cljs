(ns {{name}}.views.home.events{{#re-posh?}}
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-posh.core :as re-posh]){{/re-posh?}})

;; define your home panel events here {{#re-posh?}}
(re-posh/reg-event-ds
  ::add-item
  (fn-traced [_ [_ val]]
             [{:db/id      -1
               :item/value val
               :app/type   :type/item}]))

(re-posh/reg-event-ds
  ::change-item-input
  (fn-traced [_ [_ id val]]
             [[:db/add id :item-input/value val]])){{/re-posh?}}