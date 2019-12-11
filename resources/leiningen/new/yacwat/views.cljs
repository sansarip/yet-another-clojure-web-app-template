(ns {{name}}.views
  (:require
    [{{name}}.routes :refer [router-component]]
    ;; global styles
    [{{name}}.styles]))

;; good place to put a header and footer - before and after the router component, respectively
(defn main-panel []
  (router-component))
