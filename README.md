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

Deployment is done automatically by GitHub Actions on push to `master`. The steps are as follows:
```console
./build_docs.sh
git add docs
git commit
git push
```
Note that it may take a few minutes for the changes to be reflected in the documentation.


## Merging

If you are merging PRs and get conflicts in the `docs/` (generated output) dir, the easiest thing to do is drop all 
those changes from the merge/rebase you're doing (i.e. revert them so they don't feature in the merge at all), 
and then run the `build-docs.sh` script again to regenerate them anew. Then commit that. It's up to you if you do this 
during the merge or after as a separate commit.