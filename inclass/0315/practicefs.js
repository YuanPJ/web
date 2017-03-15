const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    const output = data + '\nMission complete';
    fs.writeFile('./output.txt', { encoding: 'utf-8' }, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});