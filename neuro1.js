const brain = require('brain.js');
const network = new brain.recurrent.LSTM();
const data = require ('./data.json');

const trainingData = data.map(item => ({
    input:item.text,
    output:item.reposta
    
}));

network.train (trainingData,{
    iterations:10000
});

const output = network.run('Ola qual o seu nome mesmo');

console.log(output);


