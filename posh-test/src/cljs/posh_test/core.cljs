(ns ^:figwheel-hooks posh-test.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [re-posh.core :refer [connect!] :as re-posh]
   [datascript.core :refer [create-conn]]
   [posh-test.events :as events]
   [posh-test.routes :refer [init-routes!]]
   [posh-test.views :as views]
   [posh-test.config :as config]))

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
  (connect! (create-conn))
  (re-posh/dispatch-sync [::events/initialize-ds])
  (dev-setup)
  (mount-root))
