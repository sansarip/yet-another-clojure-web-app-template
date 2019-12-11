(ns {{name}}.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]))

;; define tests

(deftest fake-test
  (testing "fake description"
    (is (= 1 1))))

;; necessary boilerplate

(enable-console-print!)

(cljs.test/run-tests)
