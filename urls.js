const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];

function printTxtFiles(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      printTxtFiles(filePath);
    } else if (path.extname(filePath) === '.txt') {
      console.log(filePath);
    }
  });
}

printTxtFiles(dirPath);
