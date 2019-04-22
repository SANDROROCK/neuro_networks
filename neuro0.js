const { Layer, Network } = require ('synaptic');

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);


inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer
});

var learnRate = .3;


for (var i =0 ; i < 200000; i++){

    myNetwork.activate([1,1]);
    myNetwork.propagate(learnRate,[1]);

    myNetwork.activate([1,0]);
    myNetwork.propagate(learnRate,[0]);

    myNetwork.activate([0,1]);
    myNetwork.propagate(learnRate,[0]);

    myNetwork.activate([0,0]);
    myNetwork.propagate(learnRate,[1]);

  


}

console.log(myNetwork.activate([0,4]));
