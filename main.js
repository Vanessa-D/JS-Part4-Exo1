// Convertir un tableau en chaine

// Initialisation d'un tableau
let programmingLanguages = ['HTML', 'CSS', 'Bootstrap', 'Javascript'];
// Fonction qui au clic du bouton affiche le contenu du tableau dans une modale
// La méthode join permet de diversifier les séparateurs 
function displayArray(){
        alert(programmingLanguages.join(", "));
}


// OR :
// alert(programmingLanguages.toString()); --> toString ne prend pas de paramètres (donc plus limité)


// OR affichage dans le document HTML :
/*
function displayAlert(){
        document.getElementById("p").innerHTML = programmingLanguages.join(", ");
}
*/