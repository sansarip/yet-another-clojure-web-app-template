# What's This?

A template for full-stack Clojure web apps that uses the [Leiningen](https://leiningen.org/) build tool, that's what! :bowtie:

**How's this Different?**

While this project *was* based on the template you get from running `lein new re-frame <project name> +10x +debug +handler +routes +test`, I've spiced it up by adding support for a bunch more things you'd expect in Clojure projects these days like [Figwheel Main](https://figwheel.org/), [Devcards](https://github.com/bhauman/devcards), [cljs-css-modules](https://github.com/matthieu-beteille/cljs-css-modules), and more! In addition, I've also configured the project so that you get a running app right out of the box - meaning that if you run this project as is, you'll get something (menially and virtually) tangible!

**What's Missing?**

While this project claims to be a full-stack Clojure web app template, it lacks basic database configuration/support. If applicable, you'd have to add those libraries yourself based on what databases you wish to incorporate.

Now on to the good stuff...

## Development Mode

### Front-end:

```
lein clean
lein fig:build
```

Our pal [Figwheel Main](https://figwheel.org/) or *Figgy Smalls* as I like to call it will spin your application right up for you with auto-refresh capabilties n' all!

Wait a bit, then browse to [http://localhost:9500](http://localhost:9500).

But wait, there's more! I dunno about you, but I love constructing small, reusuable components that then compose the entirety of the site like lego bricks. What helps with that? [Devcards](https://github.com/bhauman/devcards)!

You can view your devcards at [http://localhost:9500/devcards.html](http://localhost:9500/devcards.html).

### Back-end:

```
lein ring server
```

Ring, ring, ring! Your server is expecting you at [http://localhost:3000](http://localhost:3000)!

## Production Build

```
lein clean
lein with-profile uberjar uberjar
```

That should compile the ClojureScript code first, and then create the standalone jar.

*Good luck, and have fun, you rascal Clojurians!* :beers:
