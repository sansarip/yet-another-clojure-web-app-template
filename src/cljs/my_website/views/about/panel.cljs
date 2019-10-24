(ns my-website.views.about.panel)

(defn about-panel []
      [:div
       [:h1 "This is the About Page."]
       [:div
        [:a {:href "#/"}
         "go to Home Page"]]])
