(ns {{name}}.cards
  (:require [devcards.core :as dc]
            [{{name}}.cards.components]{{#semantic-ui?}}
            [{{name}}.cards.semantic-ui]{{/semantic-ui?}}))

(enable-console-print!)

(defn ^:export init []
  (dc/start-devcard-ui!))
