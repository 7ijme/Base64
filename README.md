# @tijme/base64

@tijme/base64 is an npm package that allows you to encode and decode base64.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install @tijme/base64.

```bash
npm install @tijme/base64
```

## Usage

```javascript
const base64 = require("@tijme/base64");

// returns 'SGVsbG8gV29ybGQh'
base64.encode("Hello World!");

// returns 'Hello World!'
base64.decode('SGVsbG8gV29ybGQh');

// returns an array with all base64 characters
base64.characters;
```
