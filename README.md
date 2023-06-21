# public-docs
Developer documentation for interacting with the Kognic Platform

Kognic IO docs is built using [Docusaurus 2](https://v2.docusaurus.io/).

## Local development

```console
cd docs-src
yarn install
yarn start
```
This command starts a local development server and open up a browser window. Most changes are reflected live without 
having to restart the server.

You can also generate static content into the `build` directory using the `build` command. This can then be served using
any static contents hosting service.

```console
cd docs-src
yarn install
yarn build
```

Note that the search bar does not work in development mode, so you need to run the build content if you want to test
this out locally. This can be done with `yarn serve`.



## Deployment

Build and deployment are done automatically by GitHub Actions on push to `master`.

