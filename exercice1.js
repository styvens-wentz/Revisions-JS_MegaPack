const nomVoiture = 'Peugeot';
const x = 50;

const demo = document.createElement('div');
demo.id = 'demo';
document.body.append(demo);


const z = 5;
const w = 10;

document.getElementById('demo').innerHTML = 'z vaux ' + z + ', w vaux ' + w + ', le résultat est : ' + (z+w);

const d = z + w;

alert(d);

const prenom = 'John', nom = 'doe', age = 35;

alert(10 * 5);
alert(10 / 2);
alert(15 % 9 );

l = 10; k = 5;
l = l + k;
alert(l);

function maFonction() {
    alert("Salut tout le monde !")
}

window.onload = maFonction();

function maFonctionDeRetour() {
    return "Bonjour!";
}
document.getElementById('demoRetour').innerHTML = maFonctionDeRetour();

const boutton = document.createElement('button');
boutton.id = 'monBoutton';
boutton.innerHTML = 'Boutton';
document.body.append(boutton);

boutton.addEventListener("click", function () {
    alert()
});

const changeSurOver = document.createElement('div');
changeSurOver.id = 'changeSurOver';
document.body.append(changeSurOver);
changeSurOver.style.height = '100px';
changeSurOver.style.width = '500px';

changeSurOver.addEventListener("mouseover", function () {
    changeSurOver.style.background = 'red'
});

const txt = "une longue phrase";
const longueur = txt.length;
alert(longueur);

const str1 = "Bonjour ", str2 = "le monde!";
alert(str1 + str2);

const listeVoitures = ["Renault", "Volvo", "Citroen"];
const maVoiture = listeVoitures[1];
listeVoitures[0] = "Ford";
alert(listeVoitures.length);
listeVoitures.pop();
listeVoitures.push("Ferrari");

const rNumber = Math.random();
const fNumber = Math.round(35.4);

const nombreUn = 10, nombreDeux = 5;
if (nombreUn > nombreDeux) {
    alert('"nombreUn est supérieur à nombreDeux"')
}

const nombreTrois = nombreQuatre = 10;
if (nombreTrois === nombreQuatre) {
    alert("nombreTrois est égal à nombreQuatre")
}
if (nombreUn !== nombreDeux) {
    alert("nombreUn n'est pas égal à nombreDeux")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

const fruit = ["pomme", "banane", "poire"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

let i = 0;
while (i < 10) {
    i++;
}

i = 0;
while (i < 10){
    i += 2;
}

for (let i = 0; i < 11; i++) {
    if (i === 5) {
        alert('Fin de la révison')
    }
}


