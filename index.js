var fs = require("fs");
var path = require('path');
var easyimg = require('easyimage');
var img2lcd = require('img2lcd');
var synaptic = require('synaptic');

var args = process.argv.slice(2);
var generation = parseInt(args[0]);
if(!generation)
  process.exit();
var file = './generations/gen_' + generation + '.json';

fs.readFile(path.resolve(__dirname, file), 'utf8', function (err, json) {
  if (err)
    return console.log(err);

  var perceptron = synaptic.Network.fromJSON(JSON.parse(json));
  easyimg.rescrop({
    src: 'images/sun.png', dst:'images/psun.png',
    width:54, height:54,
    cropwidth:48, cropheight:54,
    x:0, y:-8,
    flatten: true
  }).then(function(image) {
    img2lcd.convert('images/psun.png', function(err, hex){
      if(err) {
        console.log("Bad image path");
        return err;
      }
      var hexArray = hex.split(',');
      for(var j = 0; j < hexArray.length; j++) {
        hexArray[j] = hexArray[j]/0xff;
      }
      console.log('sun', perceptron.activate(hexArray));
    })
  },function (err) {
    console.log(err);
  });

  easyimg.rescrop({
    src: 'images/moon.png', dst:'images/pmoon.png',
    width:54, height:54,
    cropwidth:48, cropheight:54,
    x:0, y:-8,
    flatten: true
  }).then(function(image) {
    img2lcd.convert('images/pmoon.png', function(err, hex){
      if(err) {
        console.log("Bad image path");
        return err;
      }
      var hexArray = hex.split(',');
      for(var j = 0; j < hexArray.length; j++) {
        hexArray[j] = hexArray[j]/0xff;
      }
      console.log('moon', perceptron.activate(hexArray));
    })
  },function (err) {
    console.log(err);
  });

  easyimg.rescrop({
    src: 'images/hand.png', dst:'images/phand.png',
    width:54, height:54,
    cropwidth:48, cropheight:54,
    x:0, y:-8,
    flatten: true
  }).then(function(image) {
    img2lcd.convert('images/phand.png', function(err, hex){
      if(err) {
        console.log("Bad image path");
        return err;
      }
      var hexArray = hex.split(',');
      for(var j = 0; j < hexArray.length; j++) {
        hexArray[j] = hexArray[j]/0xff;
      }
      console.log('sun', perceptron.activate(hexArray));
    })
  },function (err) {
    console.log(err);
  });

  easyimg.rescrop({
    src: 'images/chams.png', dst:'images/pchams.png',
    width:54, height:54,
    cropwidth:48, cropheight:54,
    x:0, y:-8,
    flatten: true
  }).then(function(image) {
    img2lcd.convert('images/pchams.png', function(err, hex){
      if(err) {
        console.log("Bad image path");
        return err;
      }
      var hexArray = hex.split(',');
      for(var j = 0; j < hexArray.length; j++) {
        hexArray[j] = hexArray[j]/0xff;
      }
      console.log('chams', perceptron.activate(hexArray));
    })
  },function (err) {
    console.log(err);
  });

});