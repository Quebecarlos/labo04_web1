const path = require('path');

const nomfichier = 'c:\\temp\\truc.html';
const repertoire = __dirname;
const fichier = __filename;
console.log(fichier);
console.log(path.basename(fichier));
console.log("aff de path.basename", path.basename(nomfichier));
console.log("aff de path.basename du fichier courant", path.basename(fichier));
console.log("aff de path.basename du fichier courant", path.basename(fichier));
console.log("aff de path.extname du fichier courant", path.extname(fichier, '.js'));
console.log("aff de path.dirname du fichier courant", path.dirname(fichier, '.js'));
console.log('Aff de dir_name:', __dirname);
console.log('Aff de path.parse:', path.parse(nomfichier));
let partieFichier = path.parse(__filename);
console.log('ext=', partieFichier.ext);
console.log('nom=', partieFichier.name);
console.log('disque=', partieFichier.root);
console.log('nom complet du fichier=', partieFichier.base);
console.log('Construction d\'un path:', path.join(__dirname, 'test', 'dossier2','fichier.txt'));


