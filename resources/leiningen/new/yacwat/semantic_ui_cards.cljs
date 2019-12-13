(ns {{name}}.cards.semantic_ui
  (:require [devcards.core :refer-macros (defcard)]
            [{{name}}.components.semantic-ui :refer [component]]
            [sablono.core :as sab]
            [reagent.core :as r]))

(defcard
  simple-segment-group
  "Simple demonstration of semantic-ui button"
  (sab/html
    (r/as-element
      (r/with-let [button (component "Button")]
                  [:> button "Hello!"]))))

