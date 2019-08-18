(ns my-website.cards.components
  (:require [devcards.core :refer-macros (defcard)]
            [sablono.core :as sab]
            [my-website.styles :refer [components]]))

(defcard
  hello-world
  "Title description component"
  (fn [] (sab/html [:div {:class-name (:container components)}
                    [:h1 "Hello, World!"]
                    [:h2 "Second heading"]])))

