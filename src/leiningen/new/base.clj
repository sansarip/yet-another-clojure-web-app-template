(ns leiningen.new.base)

(defn make-base [render data]
  [;root
   ["dev/user.clj" (render "dev/user.clj" data)]
   ["dev.cljs.edn" (render "dev.cljs.edn" data)]
   ["prod.cljs.edn" (render "prod.cljs.edn" data)]
   ["figwheel-main.edn" (render "figwheel-main.edn" data)]
   ["README.md" (render "README.md" data)]
   ["LICENSE" (render "LICENSE" data)]
   ["project.clj" (render "project.clj" data)]

   ; resources/public
   ["resources/public/devcards.html" (render "resources/public/devcards.html" data)]
   ["resources/public/favicon.ico" (render "resources/public/favicon.ico" data)]
   ["resources/public/index.html" (render "resources/public/index.html" data)]

   ; test/cljs
   ["test/cljs/{{sanitized}}/core_test.cljs" (render "core_test.cljs" data)]
   ["test/cljs/{{sanitized}}/test_runner.cljs" (render "test_runner.cljs" data)]

   ; src/clj
   ["src/clj/{{sanitized}}/core.clj" (render "core.clj" data)]
   ["src/clj/{{sanitized}}/handler.clj" (render "handler.clj" data)]
   ["src/clj/{{sanitized}}/server.clj" (render "server.clj" data)]

   ; src/cljs
   ["src/cljs/{{sanitized}}/cards.cljs" (render "cards.cljs" data)]
   ["src/cljs/{{sanitized}}/config.cljs" (render "config.cljs" data)]
   ["src/cljs/{{sanitized}}/core.cljs" (render "core.cljs" data)]
   ["src/cljs/{{sanitized}}/db.cljs" (render "db.cljs" data)]
   ["src/cljs/{{sanitized}}/effects.cljs" (render "effects.cljs" data)]
   ["src/cljs/{{sanitized}}/events.cljs" (render "events.cljs" data)]
   ["src/cljs/{{sanitized}}/routes.cljs" (render "routes.cljs" data)]
   ["src/cljs/{{sanitized}}/styles.cljs" (render "styles.cljs" data)]
   ["src/cljs/{{sanitized}}/subs.cljs" (render "subs.cljs" data)]
   ["src/cljs/{{sanitized}}/views.cljs" (render "views.cljs" data)]

   ; src/cards
   ["src/cljs/{{sanitized}}/cards/components.cljs" (render "components.cljs" data)]


   ; src/views/about
   ["src/cljs/{{sanitized}}/views/about/events.cljs" (render "views/about/events.cljs" data)]
   ["src/cljs/{{sanitized}}/views/about/panel.cljs" (render "views/about/panel.cljs" data)]
   ["src/cljs/{{sanitized}}/views/about/styles.cljs" (render "views/about/styles.cljs" data)]
   ["src/cljs/{{sanitized}}/views/about/subs.cljs" (render "views/about/subs.cljs" data)]

   ; src/views/home
   ["src/cljs/{{sanitized}}/views/home/events.cljs" (render "views/home/events.cljs" data)]
   ["src/cljs/{{sanitized}}/views/home/panel.cljs" (render "views/home/panel.cljs" data)]
   ["src/cljs/{{sanitized}}/views/home/styles.cljs" (render "views/home/styles.cljs" data)]
   ["src/cljs/{{sanitized}}/views/home/subs.cljs" (render "views/home/subs.cljs" data)]])
