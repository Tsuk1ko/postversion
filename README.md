# postversion

Self-use npm postversion script

## Installation

### npm

```bash
npm i -D @tsuk1ko/postversion
```

### yarn

```bash
yarn add -D @tsuk1ko/postversion
```

## Usage

Add a `postversion` script to your `package.json`

```json
{
  "scripts": {
    "postversion": "tpv"
  }
}
```

When you run [`npm version`](https://docs.npmjs.com/cli/version/) and confirm, commits and the new tag will be pushed to the remote.

### Notice

This script won't run `npm publish`. It is designed for publish package with GitHub Actions.
