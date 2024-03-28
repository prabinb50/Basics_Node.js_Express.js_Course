const {writeFileSync} = require('fs')

for (i = 0; i < 100000; i++){
    writeFileSync('./content/bigFile.txt', `hello word ${i}\n`, {flag: 'a'})
}