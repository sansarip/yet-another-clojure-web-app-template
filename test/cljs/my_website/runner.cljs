(ns my-website.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [my-website.core-test]))

(doo-tests 'my-website.core-test)
