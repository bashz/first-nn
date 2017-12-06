var synaptic = require('synaptic');

var perceptron = new synaptic.Architect.Perceptron(2, 3, 1);

var trainingSet = [
  { input: [0, 0], output: [0] },
  { input: [1, 0], output: [1] },
  { input: [0, 1], output: [1] },
  { input: [1, 1], output: [0] }
]
var right = 0;
var wrong = 0;
for (var i = 0; i < 1000000; i++) {
  var index = Math.floor(Math.random() * 4);
  var output = perceptron.activate(trainingSet[index].input);
  perceptron.propagate(.3, trainingSet[index].output);
  if (!(i % 1000))
    console.log(output[0], trainingSet[index].output[0])
  if (Math.round(output[0]) === (trainingSet[index].output[0]))
    right++;
  else
    wrong++;
}

console.log(right + ' right answers & ' + wrong + ' wrong answers');
console.log('accurency: ' + right/1000000);

var tolerance = 0;
for (var i = 0; i < 4; i++) {
  var output = perceptron.activate(trainingSet[i].input);
  console.log(output[0], trainingSet[i].output[0])
  tolerance += Math.abs(output[0] - trainingSet[i].output[0]);
}
console.log('tolerance: ' + tolerance/4);

console.log(perceptron.toJSON())