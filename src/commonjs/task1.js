const { stdin, stdout } = require('process');
stdin.setEncoding('utf8');
stdin.on('data', input => {
  const reverse = input.split('').reverse().join('');
  stdout.write(reverse);
  stdout.write('\n\n');
});
