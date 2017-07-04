var compteur = 0;
var compteura =0;

while(compteur <3 && compteura <3 && a!="stop"){
var random =Math.random()*3;
var a = prompt ("pierre feuille ou ciseaux")
a = a.toLowerCase()
if(random>=0 && random<=1){
 random = "feuille"
}
else if (random>1 && random<=2){
 random = "pierre"
}
else{
 random = "ciseaux"
}
if(a== "pierre" && random == "ciseaux" || a=="feuille" && random == "pierre" || a=="ciseaux" && random=="feuille"){
  compteura++
    alert("Tu gagnes le point")
    alert("humain" + " " + compteura + " ordi " + compteur)
}
else if(a== "ciseaux" && random == "pierre" || a=="pierre" && random =="feuille" || a=="feuille" && random =="ciseaux"){
  compteur++
    alert("Tu perds le point")
    alert("humain" + " " + compteura + " ordi " + compteur)
}
else if ( a== random){
alert("égalité")
}
else if (a=="stop"){
 alert("Noob")
}
else if (a==""){
  alert("Tape ton choix ou tape 'stop' si tu souhaites arreter")
}
else {
  alert("Apprends à écrire")
}
}


if (compteura ==3 && compteur==0){
	alert("Perfect game ;)")
}
else if (compteura ==3){
	alert("Bravo, tu as gagné " + compteura + " à "+ compteur)
}
else if (compteur == 3){
alert("Dommage, tu as perdu " + compteur + " à " + compteura)
}
