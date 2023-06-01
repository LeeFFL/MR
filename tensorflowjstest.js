
const model = await tf.loadLayersModel('localstorage://model.json');
model.predict(tf.tensor('testimg0.PNG')).print();
/*src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"
tf.loadLayersModel('localstorge://model.json').then(funtion(model){
    model.predict(tf.tensor('testimg0.PNG')).print();
});
console.log(prediction);*/