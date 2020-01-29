(ns posh-test.routes
  (:require [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [re-frame.core :as re-frame]
            [posh-test.events :as events]
            [posh-test.subs :as subs]
            [posh-test.views.home.panel :refer [home-panel]]
            [posh-test.views.about.panel :refer [about-panel]]))

(defn href
  "Return relative url for given route. Url can be used in HTML links."
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))

(def routes
  [["/" {:name :home-panel
         :view home-panel}]
   ["about" {:name :about-panel
             :view about-panel}]])

(defn on-navigate [new-match]
  (when new-match
    (re-frame/dispatch [::events/navigated new-match])))

(def router
  (rf/router
    routes
    {:data {:coercion rss/coercion}}))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start!
    router
    on-navigate
    {:use-fragment true}))

(defn router-component []
  (let [current-view-fn (-> @(re-frame/subscribe [::subs/current-route]) :data :view)]
    (when current-view-fn
      (current-view-fn))))
