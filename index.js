/*!
 * fs-readdir-promise | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/fs-readdir-promise
*/

'use strict';

var path = require('path');

var ES6Promise = global.Promise || require('es6-promise').Promise;
var fs = require('graceful-fs');

module.exports = function fsReadDirPromise(filePath) {
  // to validate the first argument immediately
  filePath = path.normalize(filePath);

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
