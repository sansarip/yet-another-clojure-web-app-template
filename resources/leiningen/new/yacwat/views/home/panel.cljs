(ns {{name}}.views.home.panel
  (:require [re-frame.core :as re-frame]{{#re-posh?}}
            [re-posh.core :as re-posh]{{/re-posh?}}
            [{{name}}.views.home.styles :refer [container-class]]
            [{{name}}.subs :as root-subs]
            [{{name}}.events :as root-events]
            [{{name}}.views.home.subs :as subs]
            [{{name}}.views.home.events :as events])){{#re-posh?}}

(defn make-item-list [items]
      (reduce (fn [c item]
                  (conj c [:li (second item)]))
              [:ol]
              items)){{/re-posh?}}

(defn home-panel []
      (let [name @(re-frame/subscribe [::root-subs/name]){{#re-posh?}}
            {item-input-id :db/id
             item-input-val :item-input/value} @(re-posh/subscribe [::subs/item-input]){{/re-posh?}}]
           [:div {:class (container-class)}
            [:h1 (str "Hello from " name ". This is the Home Page.")]
            [:p "Here's a paragraph that demonstrates local styling."]
            [:div
             [:a {:on-click #(re-frame/dispatch [::root-events/navigate :about-panel])}
              "go to About Page"]]{{#re-posh?}}
            [:br]
            [:h2 "Datascript Demo"]
            [:input {:type "text"
                     :placeholder "enter item name"
                     :on-change #(re-posh/dispatch
                                   [::events/change-item-input item-input-id (.. % -target -value)])}]
            [:button {:on-click #(re-posh/dispatch [::events/add-item item-input-val])}
             "add item"]
            (make-item-list @(re-posh/subscribe [::subs/items])){{/re-posh?}}]))
