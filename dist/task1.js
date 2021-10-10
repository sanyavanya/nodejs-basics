"use strict";

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _process = require("process");

_process.stdin.setEncoding('utf8');

_process.stdin.on('data', input => {
  const reverse = input.split('').reverse().join('');

  _process.stdout.write(reverse);

  _process.stdout.write('\n\n');
});