/*!
 * fs-readdir-promise | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/fs-readdir-promise
*/

'use strict';

var ES6Promise = global.Promise || require('es6-promise').Promise;
var fs = require('graceful-fs');

module.exports = function fsReadDirPromise(filePath) {
  if (typeof filePath !== 'string') {
    throw new TypeError(filePath + ' is not a string. Argument must be a path.');
  }

  return new ES6Promise(function(resolve, reject) {
    fs.readdir(filePath, function(err, filePaths) {
      if (err) {
        reject(err);
        return;
      }

      resolve(filePaths);
    });
  });
};
