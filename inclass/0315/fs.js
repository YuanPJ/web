const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  console.log(data); // Buffer
  const output = data + '我又被寫出去了～';
  fs.writeFile('./output.txt', output, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});
