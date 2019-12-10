(ns ^:figwheel-hooks my-website.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [my-website.events :as events]
   [my-website.routes :refer [init-routes!]]
   [my-website.views :as views]
   [my-website.config :as config]))

(defn dev-setup []
  (when js/goog.DEBUG
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount-root))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
