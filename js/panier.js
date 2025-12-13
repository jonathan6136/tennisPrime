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

// Gestion du panier
const divVide = document.querySelector(".vide");
const sousTotal = document.getElementById("sousTotal");

// Récupérer le panier du localStorage
let panier = JSON.parse(localStorage.getItem("panier")) || [];

// Afficher un message si le panier est vide
if(panier.length === 0){
    const p = document.createElement("p");
    p.textContent = "Votre panier est vide";
    p.className = "panierVide";
    divVide.insertBefore(p, divVide.firstChild);
} else {
    // Afficher les articles
    for(const article of panier){
        const articleDiv = document.createElement("div");
        articleDiv.className = "articlePanier";

        const img = document.createElement("img");
        img.src = article.image;
        img.className = "articleImage";

        const textDiv = document.createElement("div");
        textDiv.className = "articleText";

        const titre = document.createElement("p");
        titre.textContent = article.titre;
        titre.className = "articleTitre";

        const prix = document.createElement("p");
        prix.textContent = article.prix;
        prix.className = "articlePrix";

        textDiv.appendChild(titre);
        textDiv.appendChild(prix);

        articleDiv.appendChild(img);
        articleDiv.appendChild(textDiv);

        divVide.insertBefore(articleDiv, divVide.firstChild);
    }

    // Calculer le sous-total
    let total = 0;
    for(const article of panier){
        const prixNombre = parseFloat(article.prix.replace("€", ""));
        total += prixNombre;
    }

    sousTotal.textContent = total + "€";
}