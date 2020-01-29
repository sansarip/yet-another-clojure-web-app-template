(ns {{name}}.db)

(def default-db
  {:name "re-frame"
   :current-route :home})
{{#re-posh?}}
(def default-ds
  [{:db/id -1
    :app/type :type/item-input
    :item-input/value ""}
   {:db/id -2
    :item/value "Item A"
    :app/type  :type/item}]){{/re-posh?}}