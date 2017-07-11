var compteurplayer=0;
var compteurbot=0;
var imgAll = document.querySelectorAll("img");
var username = prompt("Veuillez indiquer votre nom d'utilisateur...");
var x = document.createElement("img");
var y = document.createElement("img");
var joueur;
var choixOrdi;

for (let i = 0; i < imgAll.length; i++){
  imgAll[i].addEventListener("click", function() {
    joueur = imgAll[i].alt;
    y.setAttribute("src", "img/"+joueur+".gif");
    console.log(joueur);
    var random =Math.random()*3;
    if(random>=0 && random<=1){
      choixOrdi = "Pierre";
     x.setAttribute("src", "img/Pierre.gif");
    }
    else if (random>1 && random<=2){
      choixOrdi= "Feuille";
      x.setAttribute("src", "img/Feuille.gif");
    }
    else{
     choixOrdi = "Ciseaux";
     x.setAttribute("src", "img/Ciseaux.gif");
    }
    console.log(choixOrdi);
    document.body.appendChild(y);
    document.body.appendChild(x);

    var resultat;

        if ( joueur== "Pierre" && choixOrdi == "Ciseaux" || joueur == "Feuille" && choixOrdi == "Pierre" || joueur == "Ciseaux" && choixOrdi == "Feuille") {
            resultat = "Vous avez gagné !";
            compteurplayer++
      } else if (joueur == "Ciseaux" && choixOrdi == "Pierre" || joueur== "Pierre" && choixOrdi == "Feuille" || joueur == "Feuille" && choixOrdi == "Ciseaux") {
          resultat = "Vous avez perdu !";
          compteurbot++
      } else if (joueur == choixOrdi) {
      resultat = "Il y'a une egalité !";
      }

    document.querySelector(".res").innerHTML = `
      ${username} : ${joueur}</br>
      Ordi : ${choixOrdi}</br>
      ${resultat}
    `;
    document.querySelector(".compteurplayer").innerHTML = compteurplayer
    document.querySelector(".compteurbot").innerHTML = compteurbot
  })


}
