(ns my-website.views
  (:require
    [re-frame.core :as re-frame]
    [my-website.subs :as subs]
    ;; global styles
    [my-website.styles]
    [my-website.views.about.panel :refer [about-panel]]
    [my-website.views.home.panel :refer [home-panel]]))

(defn- panels [panel-name]
       (case panel-name
             :home-panel [home-panel]
             :about-panel [about-panel]
             [:div]))

(defn show-panel [panel-name]
      [panels panel-name])

;; good place to put a header and footer - before and after the active panel, respectively

(defn main-panel []
      (let [active-panel @(re-frame/subscribe [::subs/active-panel])]
           [show-panel active-panel]))
