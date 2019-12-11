(ns {{name}}.views.about.panel
      (:require [{{name}}.events :as root-events]
                [re-frame.core :as re-frame]))

(defn about-panel []
      [:div
       [:h1 "This is the About Page."]
       [:div
        [:a {:on-click #(re-frame/dispatch [::root-events/navigate :home-panel])}
         "go to Home Page"]]])
