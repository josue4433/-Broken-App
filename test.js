const fs = require('fs');
const https = require('https');
const path = require('path');

const fileToRead = process.argv[2];

if (!fs.existsSync(fileToRead)) {
  console.error(`Cannot read file ${fileToRead}`);
  process.exit(1);
}

const fileData = fs.readFileSync(fileToRead, 'utf8');

const urls = fileData.split('\n').filter(url => url.length);

Promise.all(urls.map(url => new Promise((resolve, reject) => {
  const options = {
    hostname: new URL(url).hostname,
    port: 443,
    path: new URL(url).pathname,
    method: 'GET'
  };
  
  const fileName = options.hostname;
  
  https.get(options, res => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    if (statusCode !== 200) {
      error = new Error(`Request failed with status code ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      error = new Error(`Invalid content-type: ${contentType}`);
    }
  
    if (error) {
      console.error(`Couldn't download ${url} - ${error.message}`);
      resolve();
      return;
    }
  
    const outputPath = path.join(__dirname, fileName);
  
    const file = fs.createWriteStream(outputPath);
    res.pipe(file);
  
    file.on('finish', () => {
      console.log(`Wrote to ${fileName}`);
      resolve();
    });
  
    file.on('error', err => {
      console.error(`Couldn't write to ${fileName} - ${err.message}`);
      resolve();
    });
  }).on('error', err => {
    console.error(`Couldn't download ${url} - ${err.message}`);
    resolve();
  });
}))).then(() => {
  console.log('All done!');
});
