'use strict';
const fs = require('fs');
const fileName = './test.txt';

//appendFileSyncを活用した出力
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}

fs.appendFileSync(fileName, '↓は別出力\n', 'utf8', () => {});

//async/awaitを活用した出力
function appendFilePromise(fileName,str){
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8' , () => resolve());
  })
}

async function test(){
  for(let count = 0; count <30; count++){
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
  }
}

test();
