# Website

Kognic IO docs is built using [Docusaurus 2](https://v2.docusaurus.io/).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Favicon

For the Kognic rebrand the `favicon.ico` was regenerated from one of the assets/collaterals in GDrive using ImageMagick:

```
convert kognic-icon-dark-green.png -scale 32x32 favicon.ico
```

