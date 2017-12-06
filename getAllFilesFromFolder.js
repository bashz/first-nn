var fs = require("fs");

module.exports = function (dir) {
  var results = [];
  fs.readdirSync(dir).forEach(function (file) {

    file = dir + '/' + file;
    var stat = fs.statSync(file);

    if (stat && !stat.isDirectory())
      results.push(file);

  });
  return results;
};