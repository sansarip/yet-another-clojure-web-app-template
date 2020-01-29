(ns ^:figwheel-hooks {{name}}.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   {{#re-posh?}}[re-posh.core :refer [connect!] :as re-posh]
   [datascript.core :refer [create-conn]]{{/re-posh?}}
   [{{name}}.events :as events]
   [{{name}}.routes :refer [init-routes!]]
   [{{name}}.views :as views]
   [{{name}}.config :as config])){{#/re-posh?}}

(def ds (create-conn)){{/re-posh?}}

(defn dev-setup []
  (when config/dbug?
    (enable-console-print!)
    (println "dev mode"){{#re-posh?}}
    (re-frame/dispatch-sync [::events/set-ds]){{/re-posh?}})){{#/re-posh?}}

(defn init-ds []
  (connect! ds)
  (re-posh/dispatch-sync [::events/initialize-ds])
  ds){{/re-posh?}}

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (init-routes!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount-root))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db]){{#re-posh?}}
  (init-ds){{/re-posh?}}
  (dev-setup)
  (mount-root))
