(ns my-website.handler
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require
    [compojure.route :refer [resources]]
    [compojure.handler :as handler]
    [ring.util.response :refer [resource-response]]
    [ring.middleware.reload :refer [wrap-reload]]))

(defroutes main-routes
           (GET "/" [] (resource-response "index.html" {:root "public"}))
           (resources "/"))

(def app
  (-> (handler/site main-routes)
      (wrap-base-url)))

(def handler routes)
