(ns posh-test.effects
  (:require [re-frame.core :as re-frame]
            [reitit.frontend.easy :as rfe]))

(re-frame/reg-fx
  ::navigate!
  (fn [route]
    (apply rfe/push-state route)))
