const {readFileSync , writeFileSync} = require('fs')

//Read from a file
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second)

writeFileSync('./content/resylt.txt',`here is the result text : ${first},${second}`)
