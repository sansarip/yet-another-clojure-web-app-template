(ns my-website.views.home.panel
  (:require [re-frame.core :as re-frame]
            [my-website.views.home.styles :refer [container-class]]
            [my-website.subs :as root-subs]))

(defn home-panel []
      (let [name @(re-frame/subscribe [::root-subs/name])]
           [:div {:class (container-class)}
            [:h1 (str "Hello from " name ". This is the Home Page.")]
            [:p "Here's a paragraph that demonstrates local styling."]
            [:div
             [:a {:href "#/about"}
              "go to About Page"]]]))
