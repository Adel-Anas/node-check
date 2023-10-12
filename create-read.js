const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', function(err){
    if (err){
        console.error(err);
    }
    console.log("File created !")
})

fs.readFile('welcome.txt', function(err, data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
})