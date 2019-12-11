(ns {{name}}.views.home.panel
  (:require [re-frame.core :as re-frame]
            [{{name}}.views.home.styles :refer [container-class]]
            [{{name}}.subs :as root-subs]
            [{{name}}.events :as root-events]))

(defn home-panel []
      (let [name @(re-frame/subscribe [::root-subs/name])]
           [:div {:class (container-class)}
            [:h1 (str "Hello from " name ". This is the Home Page.")]
            [:p "Here's a paragraph that demonstrates local styling."]
            [:div
             [:a {:on-click #(re-frame/dispatch [::root-events/navigate :about-panel])}
              "go to About Page"]]]))
