(ns leiningen.new.yacwat
  (:require [leiningen.new.templates :refer [renderer name-to-path ->files]]
            [leiningen.core.main :as main]
            [leiningen.new.base :refer [make-base]]
            [leiningen.new.semantic-ui :refer [make-semantic-ui]]))

(def render (renderer "yacwat"))

(defn is-in? [s c]
  (some (partial = s) c))

(defn yacwat
  [name & options]
  (let [data {:name         name
              :sanitized    (name-to-path name)
              :semantic-ui? (is-in? "+semantic-ui" options)
              :re-posh?     (is-in? "+re-posh" options)
              :pedestal?    (is-in? "+pedestal" options)}]
    (main/info "Generating fresh 'lein new' yacwat project.")
    (apply ->files
           (cond-> [data]
                   '-> (into (make-base render data))
                   (:semantic-ui? data) (into (make-semantic-ui render data))))))
