## react-parcel-ssr

Server-side rendering with [react-snap](https://github.com/geelen/react-snap) and [parcel](https://github.com/parcel-bundler/parcel). 

## Perks

There's (almost) nothing to configure.

- [Parcel](https://github.com/parcel-bundler/parcel) bundles source into `dist`
- [react-snap](https://github.com/geelen/react-snap) creates a snapshot in dist/snapshot
- deploy the snapshot to heroku/aws/etc
- the snapshot initially behaves like a static site so that spiders don't just see an empty html file with `<div id="root></div>`.

