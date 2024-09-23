let age = prompt("Veillez entrez votre age");
if(age>=0 && age <= 14){
    alert("Vous etes enfant");
    }
    else if(age>=15 && age <= 25){
        alert("Adolescents");
        }
    else if (age>=25 && age <= 64){
        alert("Adultes");
        }

    else if (age > 64){
        alert("Vous êtes Aînés");
    }
    else{
        alert("Veillez entrez l'âge valide");
    }