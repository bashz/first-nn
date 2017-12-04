var fs = require("fs");
var path = require('path');
var easyimg = require('easyimage');

var args = process.argv.slice(2);
var folder = args[0];

var getAllFilesFromFolder = function(dir) {
  var results = [];
  fs.readdirSync(dir).forEach(function(file) {

    file = dir+'/'+file;
    var stat = fs.statSync(file);

    if (stat && !stat.isDirectory()) 
      results.push(file);

  });
  return results;
};

var files = getAllFilesFromFolder(path.resolve(__dirname, 'images/' + folder + '/original'));

files.forEach(function(file, index){
  easyimg.rescrop({
    src: file, dst:'images/' + folder + '/processed/' + index + '.png',
    width:54, height:54,
    cropwidth:48, cropheight:54,
    x:0, y:-8,
    flatten: true
  }).then(function(image) {
    console.log('created: images/' + folder + '/processed/' + index + '.png');
  },function (err) {
    console.log(err);
  });
})