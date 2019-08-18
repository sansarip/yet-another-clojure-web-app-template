(ns my-website.cards.components
  (:require [devcards.core :refer-macros (defcard)]
            [sablono.core :as sab]
            [my-website.styles :refer [components]]))

(defcard
  sample-component
  "Here's a sample component that incorporates cljs-css-modules"
  (fn [] (sab/html [:div {:class-name (:container components)}
                    [:h1 "Hello, World!"]])))

