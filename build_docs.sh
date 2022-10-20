#!/usr/bin/env bash

# Prerequisites:
#
# Need to use bash 4 (or newer)
# Need to be run from a tmux instance
Help()
{
# Display Help
  echo "Add description of the script functions here."
    echo
    echo "Syntax: build_docs [--build-only]"
    echo "options:"
    echo "--help           Shows this helpful text"
    echo "--build-only     Only the build part of the script will be run, the"
    echo "                 old docs folder will not be updated"
    echo
}

BUILD_ONLY=0
while (( "$#" )); do
  case "$1" in
    --build-only)
      BUILD_ONLY=1
      shift
      ;;
    --help)
      Help
      exit 0
      ;;
    -*|--*) # unsupported flags
      echo "Error: Unsupported flag $1" >&2
      echo "Try running with --help to see help text" >&2
      exit 1
      ;;
    *) # we don't take any arguments
      echo "Error: Unsupported argument $1" >&2
      echo "Try running with --help to see help text" >&2
      exit 1
      ;;
  esac
done

cd ./docs-src

yarn
yarn build

if [ $BUILD_ONLY -eq 1 ]; then
  exit 0
fi

echo "Updating annotell-python/docs"
rm -r ../docs
mv ./build ../docs

exit 0
