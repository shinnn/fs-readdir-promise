'use strict';

var fs = require('graceful-fs');

var readdir = require('./');
var test = require('tape');

test('fsReaddirPromise()', function(t) {
  t.plan(5);

  t.equal(readdir.name, 'fsReaddirPromise', 'should have a function name.');

  fs.readdir('./', function(err, expected) {
    /* istanbul ignore if */
    if (err) {
      t.fail(err);
      return;
    }

    readdir('./').then(function(files) {
      t.deepEqual(files, expected, 'should get a file paths of a directory.');
    }, t.fail);
  });

  readdir('__this__directory__does__not__exist__').catch(function(err) {
    t.equal(err.code, 'ENOENT', 'should be rejected with an error when fs.readdir fails.');
  });

  t.throws(
    readdir.bind(null, true),
    /TypeError.*path/,
    'should throw a type error when the path is not a string.'
  );

  t.throws(
    readdir.bind(null),
    /TypeError.*path/,
    'should throw a type error when it takes no arguments.'
  );
});
