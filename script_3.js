function HalfPyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}
let number = "";
while (true) {
(number === "") 
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
number = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if (number < 0) {
    console.log("try again, le chiffre doit être positif");
} else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
    break; // On quitte la boucle
}
}

HalfPyramid(number);
