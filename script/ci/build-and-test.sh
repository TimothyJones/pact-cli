#!/bin/bash -eu
set -e # This needs to be here for windows bash, which doesn't read the #! line above
set -u

npm ci
npm test
npm run download-checksums
