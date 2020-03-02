(ns {{name}}.views.home.styles
  (:require [spade.core :refer [defclass defkeyframes]]))

;; define your home panel style here

(defkeyframes fade-in []
              [:0% {:opacity 0}]
              [:100% {:opacity 1}])

(defkeyframes fade-in-after []
              [:0% {:opacity 0}]
              [:50% {:opacity 0}]
              [:100% {:opacity 1}])

(defclass container-class []
          {:display               :grid
           :height                :100%
           :grid-template-columns "1fr 3fr 1fr"
           :grit-template-rows    "1fr auto 1fr"
           :grid-template-areas   (str "\". . .\""
                                       "\". content .\""
                                       "\". . .\"")}
          [:.content {:grid-area    :content
                      :justify-self :center
                      :align-self   :center}]
          [:h1 {:color      :white
                :text-align :center
                :animation  [[(fade-in) "2250ms" 'ease-in-out]]}]
          [:h2 {:color      :white
                :text-align :center
                :animation  [[(fade-in-after) "4500ms" 'ease-in-out]]}]{{#re-posh?}}
          [:h3 {:color      :white
                :text-align :center}]
          [:.list {:display        :flex
                   :flex-direction :column
                   :align-items    :center}]
          [:ol {:color         :white
                :padding-right :45%}]
          {{/re-posh?}})
