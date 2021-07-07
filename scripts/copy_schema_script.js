
const fs = require('fs');

if (!fs.existsSync('./dist/schemas')){
    fs.mkdirSync('./dist/schemas');
}

fs.readdir('./src/schemas', (err, files) => {
    if (err) throw  err;
    else {
      files.forEach(file => {
        console.log('Copiando ',file, '....');
        fs.copyFile('./src/schemas/'+file, './dist/schemas/'+file, (err) => {
            if (err) throw err;
            console.log(file, ' pronto!');
          });
      })
    }
  })