[![Build Status](https://travis-ci.org/sansarip/yet-another-clojure-web-app-template.svg?branch=master)](https://travis-ci.org/sansarip/yet-another-clojure-web-app-template)

# What's This?

A template for full-stack Clojure web apps that uses the [Leiningen](https://leiningen.org/) build tool, that's what! :bowtie:

**How's this Different?**

While this project *was* based on the template you get from running `lein new re-frame <project name> +10x +debug +handler +routes +test`, I've spiced it up by adding support for a bunch more things you'd expect in Clojure projects these days like [Figwheel Main](https://figwheel.org/), [Devcards](https://github.com/bhauman/devcards), [spade](https://github.com/dhleong/spade), and more! In addition, I've also configured the project so that you get a running app right out of the box - meaning that if you run this project as is, you'll get something (menially and virtually) tangible!

**What's Missing?**

While this project claims to be a full-stack Clojure web app template, it lacks basic database configuration/support. If applicable, you'd have to add those libraries yourself based on what databases you wish to incorporate.

Now on to the good stuff...

## Development Mode

```
lein clean
lein fig:dev
```

Our pal [Figwheel Main](https://figwheel.org/) or *Figgy Smalls* as I like to call it will spin your application right up for you with auto-refresh capabilties n' all!

Wait a bit, then browse to [http://localhost:9500](http://localhost:9500).

#### Devcards

But wait, there's more! I dunno about you, but I love constructing small, reusuable components that then compose the entirety of the site like lego bricks. What helps with that? [Devcards](https://github.com/bhauman/devcards)!

You can view your devcards at [http://localhost:9500/devcards.html](http://localhost:9500/devcards.html).

#### Testing

Want to test your cljs? Visit [http://localhost:9500/figwheel-extra-main/auto-testing](http://localhost:9500/figwheel-extra-main/auto-testing) and see your test turn from red to green!

## Production Build

```
lein clean
lein prod
```

That should compile the ClojureScript code first, and then create the standalone jar which you can then run with `java -jar target/my-website.jar`

## Example Projects
* [gh-repo-list](https://github.com/sansarip/gh-repo-list)
* [my-website](https://github.com/sansarip/my-website)

*Good luck, and have fun, you rascal Clojurians!* :beers:
