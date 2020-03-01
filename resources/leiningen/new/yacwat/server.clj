(ns {{name}}.server
  (:require [{{name}}.handler :refer [app]]
            [config.core :refer [env]]{{^pedestal?}}
            [ring.adapter.jetty :refer [run-jetty]]{{/pedestal?}}{{#pedestal?}}
            [io.pedestal.http :as server]
            [reitit.pedestal :as pedestal]{{/pedestal?}})
  (:gen-class))

(defn -main [& _args]
  (let [env-port (str (env :port))
        port (-> (if (not-empty env-port) env-port)
                 (or "3000")
                 Integer/parseInt)]{{^pedestal?}}
    (run-jetty app {:port port :join? false}){{/pedestal?}}{{#pedestal?}}
    (-> {::server/type            :jetty
         ::server/port            port
         ::server/allowed-origins {:creds true :allowed-origins (constantly true)}
         ::server/secure-headers  {:content-security-policy-settings {:object-src "'none'"}}
         ::server/join?           false
         ::server/routes          []}
        (server/default-interceptors)
        (pedestal/replace-last-interceptor app)
        (server/dev-interceptors)
        (server/create-server)
        (server/start)){{/pedestal?}}))
