var fs = require("fs");
var path = require('path');
var img2lcd = require('img2lcd');
var synaptic = require('synaptic');

var args = process.argv.slice(2);
var generation = parseInt(args[0]);

var learningRate = .3;

var file = './generations/dummy';
if(generation)
  var file = './generations/gen_' + generation + '.json';

fs.readFile(path.resolve(__dirname, file), 'utf8', function (err, json) {
  if (err) {
    return console.log(err);
  }
  if(generation) {
    var perceptron = synaptic.Network.fromJSON(JSON.parse(json));
  } else {
    var perceptron = new synaptic.Architect.Perceptron(276, 2, 1);
  }
  fs.readFile(path.resolve(__dirname, './images/bin.json'), 'utf8', function (err, json) {
    var inputs = JSON.parse(json);
    var right = 0;
    var wrong = 0;
    for(var i = 0; i < 10000; i++) {
      var index = Math.floor(Math.random() * 48);
      var output = perceptron.activate(inputs[index]);
      perceptron.propagate(learningRate, [1&(index < 24)]);
      if(!(i%1000))
        console.log(output[0] , 1&(index < 24))
      if(Math.round(output[0]) === (1&(index < 24)))
        right++;
      else
        wrong++;
    }
    console.log(inputs.length)
    console.log(right + ' right answers & ' + wrong + ' wrong answers');
    console.log('accurency: ' + right/10000);
  
    if(!generation)
      generation = 0;
    fs.writeFile('./generations/gen_' + (generation + 1) + '.json', JSON.stringify(perceptron.toJSON()), function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("Generation " + (generation + 1) + ". was created!");
      process.exit();
    });
  })
});
