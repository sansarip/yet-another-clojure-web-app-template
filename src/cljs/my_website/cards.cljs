(ns my-website.cards
  (:require [devcards.core :as dc]
            [my-website.cards.components]))

(enable-console-print!)

(defn ^:export init []
  (dc/start-devcard-ui!))
