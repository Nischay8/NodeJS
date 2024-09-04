const fs = require('fs');

fs.writeFile('./nischay.txt', 'Hello Nischay', (err, result) => {
  if (err) {
    console.log('Error Found', err);
  } else {
    console.log(result);
  }
});

fs.readFile('./nischay.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log('Error While Reading Files', err);
  } else {
    console.log(result);
  }
});
