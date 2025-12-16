const toggle = document.getElementById("toggle");
const navigation = document.getElementById("navigation");

document.onclick = function(element) {
    if(element.target.id !== "toggle" && element.target.id !== "navigation"){
        toggle.classList.remove("active");
        navigation.classList.remove("active");
    }
}

toggle.onclick = function(){
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

const itemBesoins = document.querySelectorAll(".itemBesoin");

for(const itemBesoin of itemBesoins){
    itemBesoin.addEventListener("mouseover", () => {
        itemBesoin.style.backgroundColor = "#000";
        itemBesoin.style.color = "#fff";    
    })
    itemBesoin.addEventListener("mouseout", () =>{ 
        itemBesoin.style.backgroundColor = "#fff";
        itemBesoin.style.color = "#000";
    })
}

const liens = document.querySelectorAll("a");

for(const lien of liens){
    lien.addEventListener("mouseover", () =>{
        lien.style.transition = "0.5s"
        lien.style.color = "#D7FF55";
    })
    lien.addEventListener("mouseout", () =>{
        lien.style.transition = "0.5s";
        lien.style.color = "#fff";
    })
}

// Gestion du panier d'achat
const raquetteButtons = document.querySelectorAll(".produitArticle button");

// On boucle car on récupère un tableau de boutons avec querySelectorAll
for(const button of raquetteButtons){
    // On écoute le clic sur chaque bouton
    button.addEventListener("click", (e) => {
        const produitArticle = e.target.closest(".produitArticle"); // Récupère l'élément parent le plus proche avec la classe "produitArticle", c'est une alternative à parentElement
        const image = produitArticle.querySelector("img").src; // Récupère la source de l'image
        const titre = produitArticle.querySelector("p").textContent; // Récupère le texte du paragraphe
        const prix = e.target.textContent; // Récupère le texte du bouton (le prix)

        // Créer un objet produit
        const produit = {
            image: image,
            titre: titre,
            prix: prix
        };

        // Récupérer le panier existant ou créer un nouveau tableau
        let panier = JSON.parse(localStorage.getItem("panier")) || [];

        // Ajouter le produit au panier
        panier.push(produit);

        // Sauvegarder dans le localStorage
        localStorage.setItem("panier", JSON.stringify(panier));
    });
}