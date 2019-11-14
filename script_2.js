function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)  
  {
    f = f * i;   // ou f *= i;
  }  
  return f;
}

let number = "";
while (true) {
(number === "") 
console.log("De quel nombre veux-tu calculer la factorielle ?")
number = prompt ('De quel nombre veux-tu calculer la factorielle ?');
console.log(fact(number));

if (number < 0) {
    console.log("try again, le chiffre doit être positif");
} else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
    break; // On quitte la boucle
}
}
console.log(`Le résultat est : ${number}`);