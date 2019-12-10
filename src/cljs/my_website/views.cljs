(ns my-website.views
  (:require
    [my-website.routes :refer [router-component]]
    ;; global styles
    [my-website.styles]))

;; good place to put a header and footer - before and after the router component, respectively
(defn main-panel []
  (router-component))
