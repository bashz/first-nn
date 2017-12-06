var fs = require("fs");
var path = require('path');
var img2lcd = require('img2lcd');

var getAllFilesFromFolder = require('./getAllFilesFromFolder');

var files = getAllFilesFromFolder(path.resolve(__dirname, 'images/suns/processed'));
files = files.concat(getAllFilesFromFolder(path.resolve(__dirname, 'images/moons/processed')));

var inputs = [];
files.forEach(function(file, index) {
  img2lcd.convert(file, function(err, hex){
    if(err) {
      console.log("Bad image path");
      return err;
    }
    var hexArray = hex.split(',');
    for(var j = 0; j < hexArray.length; j++) {
      hexArray[j] = hexArray[j]/0xff;
    }
    inputs[index] = hexArray;
    fs.writeFile('./images/bin.json', JSON.stringify(inputs), function(err) {
      if(err) {
        return console.log(err);
      }
      console.log('updated ' + index);
    });
  })
})
