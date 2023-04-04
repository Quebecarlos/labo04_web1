console.log('Salut!');

const personne = require('./personne');
console.log(personne);
console.log('voici le nom:', personne.nom);
console.log('voici le nom:', personne.age);
const Personne = require('./classPersonne');
const paul = new Personne('Paul larue, 39');
paul.salut();
console.log('voici son nom:', paul.nom);
console.log('voici son nom:', paul.age);


