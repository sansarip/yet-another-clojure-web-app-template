(ns leiningen.new.semantic-ui)

(defn make-semantic-ui [render data]
  [["src/cljs/{{sanitized}}/components/semantic_ui.cljs" (render "semantic_ui.cljs" data)]
   ["src/cljs/{{sanitized}}/cards/semantic_ui.cljs" (render "semantic_ui_cards.cljs" data)]])
