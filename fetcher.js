const request = require('request');
const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);
const url = args[0];
const filetoSave = args[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(url, (error, response, body) => {
  fs.writeFile(filetoSave, body, function(error) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filetoSave}`);
    }
  });
});
