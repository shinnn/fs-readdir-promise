'use strict';

var fs = require('graceful-fs');

var readDir = require('./');
var test = require('tape');

test('fsReadDirPromise()', function(t) {
  var specs = [
    'should get a file paths of a directory.',
    'should be rejected with an error when fs.readdir fails.',
    'should throw a type error when the path is not a string.',
    'should throw a type error when it takes no arguments.'
  ];

  t.plan(specs.length);

  fs.readdir('./', function(err, expected) {
    /* istanbul ignore if */
    if (err) {
      t.fail(err);
      return;
    }

    function onFulfilled(files) {
      t.deepEqual(files, expected, specs[0]);
    }

    /* istanbul ignore next */
    function onRejected(err) {
      t.fail(err);
    }

    readDir('./').then(onFulfilled, onRejected);
  });

  readDir('__this__directory__does__not__exist__')
  .catch(function(err) {
    t.equal(err.code, 'ENOENT', specs[1]);
  });

  t.throws(readDir.bind(null, true), /TypeError.*not a string/, specs[2]);

  t.throws(readDir.bind(null), /TypeError.*not a string/, specs[3]);
});
