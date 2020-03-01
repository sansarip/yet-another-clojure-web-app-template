(ns {{name}}.handler
  (:require [reitit.ring :as ring]{{#pedestal?}}
            [reitit.http :as http]
            [reitit.pedestal :as pedestal]
            [cheshire.core :as json]{{/pedestal?}}))
{{#pedestal?}}
(def json-interceptor {:name  ::content-length-json-body
                       :leave (fn [ctx]
                                (let [response (:response ctx)
                                      body (:body response)
                                      json-response-body (if body (json/generate-string body) "")
                                      content-length (count (.getBytes ^String json-response-body))
                                      headers (:headers response {})]
                                   (assoc ctx :response {:status  (:status response)
                                                         :body    json-response-body
                                                         :headers (merge headers
                                                                         {"Content-Type"   "application/json;charset=UTF-8"
                                                                          "Content-Length" (str content-length)})})))}){{/pedestal?}}
(def app{{^pedestal?}}
  (ring/ring-handler
    (ring/router
      [["/ping" (constantly {:status 200, :body "pong"})]])
    (ring/routes
      (ring/create-resource-handler {:path "/"})
      (ring/create-default-handler))){{/pedestal?}}{{#pedestal?}}
  (pedestal/routing-interceptor
    (http/router
      ["/api"
       ["/ping"
        {:get {:interceptors [json-interceptor]
               :handler      (constantly {:status 200
                                          :body   "pong"})}}]])
    (ring/routes
      (ring/create-resource-handler {:path "/"})
      (ring/create-default-handler))){{/pedestal?}})
