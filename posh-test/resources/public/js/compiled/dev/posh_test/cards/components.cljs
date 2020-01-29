(ns posh-test.cards.components
  (:require [devcards.core :refer-macros (defcard)]
            [sablono.core :as sab]
            [posh-test.styles]))

(defcard
  sample-component
  "Here's a sample component that incorporates global styling"
  (fn [] (sab/html [:div {:class "container"}
                    [:h1 "Hello, World!"]])))

