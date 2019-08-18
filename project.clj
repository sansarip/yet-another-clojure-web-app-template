(defproject my-website "0.1.0-SNAPSHOT"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-tools-deps "0.4.5"]
            [lein-ring "0.12.5"]]
  :lein-tools-deps/config {:config-files [:install :user :project]}
  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :min-lein-version "2.5.3"
  :source-paths ["src/clj" "src/cljs"]
  :test-paths ["test/cljs"]
  :clean-targets ^{:protect false} ["resources/public/cljs-out" "resources/public/js/compiled" "target"]
  :aliases {"prod"      ["with-profile" "prod" "cljsbuild" "once" "min"]
            "fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}

  :profiles
  {:dev
            {:dependencies [[binaryage/devtools "0.9.10"]
                            [day8.re-frame/re-frame-10x "0.4.2"]
                            [day8.re-frame/tracing "0.5.3"]
                            [com.bhauman/figwheel-main "0.2.3"]
                            [com.bhauman/rebel-readline-cljs "0.1.4"]
                            [devcards "0.2.5"]
                            [javax.servlet/servlet-api "2.5"]
                            [ring/ring-mock "0.3.2"]]}
   :prod    {:dependencies [[day8.re-frame/tracing-stubs "0.5.3"]]}
   :uberjar {:source-paths ["env/prod/clj"]
             :dependencies [[day8.re-frame/tracing-stubs "0.5.3"]]
             :omit-source  true
             :main         my-website.server
             :aot          [my-website.server]
             :uberjar-name "my-website.jar"
             :prep-tasks   ["compile" ["prod"]]}}

  :ring {:handler my-website.handler/app}

  :cljsbuild
  {:builds
   {:min
    {:source-paths ["src/cljs"]
     :compiler     {:main            my_website.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :simple
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}}})

