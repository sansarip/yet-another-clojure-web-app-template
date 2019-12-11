(ns {{name}}.cards.components
  (:require [devcards.core :refer-macros (defcard)]
            [sablono.core :as sab]
            [{{name}}.styles]))

(defcard
  sample-component
  "Here's a sample component that incorporates global styling"
  (fn [] (sab/html [:div {:class "container"}
                    [:h1 "Hello, World!"]])))

