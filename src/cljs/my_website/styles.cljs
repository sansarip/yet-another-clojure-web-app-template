(ns my-website.styles
  (:require [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle components
  [".container" {:background-color "blue"
                 :font-size 55}])
