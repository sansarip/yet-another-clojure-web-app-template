(ns posh-test.views
  (:require
    [posh-test.routes :refer [router-component]]
    ;; global styles
    [posh-test.styles]))

;; good place to put a header and footer - before and after the router component, respectively
(defn main-panel []
  (router-component))
