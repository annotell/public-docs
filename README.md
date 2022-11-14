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

## Deployment

To deploy your changes you need to generate the static content into the `docs` folder. A shell script is provided for
that, which can be used in the following way

```console
git pull 
./build_docs.sh
git add .
git commit
git push
```

Now wait a minute or two and check the documentations page, it should be updated with all your changes.