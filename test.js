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

  readDir('./')
  .then(function(files) {
    t.deepEqual(files, fs.readdirSync('./'), specs[0]);
  })
  .then(function(err) {
    t.fails(err);
  });

  readDir('__this__directory__does__not__exist__')
  .catch(function(err) {
    t.equal(err.code, 'ENOENT', specs[1]);
  });

  t.throws(readDir.bind(null, true), /TypeError.*not a string/, specs[2]);

  t.throws(readDir.bind(null), /TypeError.*not a string/, specs[3]);
});
