(ns {{name}}.handler
  (:require [reitit.ring :as ring]))

(def app
  (ring/ring-handler
    (ring/router
      [["/ping" (constantly {:status 200, :body "pong"})]])
    (ring/routes
      (ring/create-resource-handler {:path "/"})
      (ring/create-default-handler))))
