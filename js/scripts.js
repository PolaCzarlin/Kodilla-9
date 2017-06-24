var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur ='triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(text);
console.log(dinosaurUpperCased);

var textCharsAfter = text.replace('Velociraptor','TRICERATOPS');
if (text !== 0){
	console.log(text.slice(0, text.length/2 + 1));
	console.log(text.length/2);
}
