/*!
 * fs-readdir-promise | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/fs-readdir-promise
*/
'use strict';

var fs = require('graceful-fs');
var wrapPromise = require('wrap-promise');

module.exports = function fsReaddirPromise(filePath) {
  return wrapPromise(function(resolve, reject) {
    fs.readdir(filePath, function(err, filePaths) {
      if (err) {
        reject(err);
        return;
      }
      resolve(filePaths);
    });
  });
};
