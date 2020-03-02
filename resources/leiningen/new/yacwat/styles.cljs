(ns {{name}}.styles
  (:require [spade.core :refer [defglobal defkeyframes]]))

;; define global css styles here

(defkeyframes gradient []
              [:0% {:background-position "0% 50%"}]
              [:50% {:background-position "100% 50%"}]
              [:100% {:background-position "0% 50%"}])

(defglobal global-class []
           [:body {:font-family     "\"Work Sans\", sans-serif"
                   :background      "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
                   :background-size "400% 400%"
                   :animation       [[(gradient) :12s :ease :infinite]]
                   :height          :100vh
                   :margin          0
                   :color           "#131F33"}]
           [:#app {:height :100%}]
           [:.com-rigsomelight-devcards-list-group-item>span {:color :white}]
           [:.com-rigsomelight-devcards-list-group-item>span:hover {:color :#CCCCCC}]
           [:.com-rigsomelight-devcards-card-base.com-rigsomelight-devcards-breadcrumbs.com-rigsomelight-devcards-typog {:background :none}]
           [:.com-rigsomelight-devcards_set-current-path {:color "white !important"}]
           [:.com-rigsomelight-devcards_set-current-path:hover {:color "#CCCCCC !important"}])