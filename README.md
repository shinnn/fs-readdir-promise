# fs-readdir-promise 

[![Build Status](https://travis-ci.org/shinnn/fs-readdir-promise.svg?branch=master)](https://travis-ci.org/shinnn/fs-readdir-promise)
[![Build status](https://ci.appveyor.com/api/projects/status/401attqixqs2jofe?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/fs-readdir-promise)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/fs-readdir-promise.svg)](https://coveralls.io/r/shinnn/fs-readdir-promise)
[![Dependency Status](https://david-dm.org/shinnn/fs-readdir-promise.svg)](https://david-dm.org/shinnn/fs-readdir-promise)
[![devDependency Status](https://david-dm.org/shinnn/fs-readdir-promise/dev-status.svg)](https://david-dm.org/shinnn/fs-readdir-promise#info=devDependencies)

[Promise] version of [`fs.readdir`](http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback)

```javascript
var readdir = require('fs-readdir-promise');

readdir('path/to/dir')
.then(function(files) {
  console.log(files);
})
.catch(function(err) {
  console.log(err.message);
});
```

## Installation

[![NPM version](https://badge.fury.io/js/fs-readdir-promise.svg)](http://badge.fury.io/js/fs-readdir-promise)

[Use npm.](https://www.npmjs.org/doc/cli/npm-install.html)

```
npm install fs-readdir-promise
```

## API

```javascript
var readdir = require('fs-readdir-promise');
```

### readdir(*path*)

*path*: `String`  
Return: `Object` ([Promise])

When it finish reading the directory, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with an `Array` of file names in the directory as its first argument.

When it fails to read the directory, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as its first argument.

```javascript
var readdir = require('fs-readdir-promise');

var onFulfilled = function(files) {
  console.log(files);
};

var onRejected = function(err) {
  console.log('Cannot read the file.');
};

readdir('path/to/file').then(onFulfilled, onRejected);
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[fsreaddir]: http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
[Promise]: http://promisesaplus.com/
