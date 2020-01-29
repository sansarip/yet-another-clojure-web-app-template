(ns posh-test.cards
  (:require [devcards.core :as dc]
            [posh-test.cards.components]
            [posh-test.cards.semantic-ui]))

(enable-console-print!)

(defn ^:export init []
  (dc/start-devcard-ui!))
