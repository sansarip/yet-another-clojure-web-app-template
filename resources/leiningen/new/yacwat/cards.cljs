(ns {{name}}.cards
  (:require [devcards.core :as dc]
            [{{name}}.cards.components]))

(enable-console-print!)

(defn ^:export init []
  (dc/start-devcard-ui!))
