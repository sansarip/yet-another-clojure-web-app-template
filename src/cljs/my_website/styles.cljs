(ns my-website.styles
  (:require [spade.core :refer [defglobal]]))

;; define global css styles here

(defglobal global-class []
           ["body" {:font-family "\"Work Sans\", sans-serif"
                    :color "#131F33"}]
           [".container" {:background-color "#CCDEFF"
                          :font-size        55}])
