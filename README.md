# What's This?

A template for full stack Clojure web apps, that's what!

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
lein with-profile prod uberjar
```

That should compile the ClojureScript code first, and then create the standalone jar.

*Good luck, and have fun, you rascal Clojurians!*
