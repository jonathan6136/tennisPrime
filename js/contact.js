
const baliseNom = document.querySelector("#nom");
const nom = baliseNom.value;
console.log(nom);
const balisePrenom = document.querySelector("#prenom");
const prenom = balisePrenom.value;
console.log(prenom);
const baliseEmail = document.querySelector("#email");
const email = baliseEmail.value;
console.log(email);
const baliseNumero = document.querySelector("#number");
const numero = baliseNumero.value;
console.log(numero);
const baliseMotif = document.querySelector("#message");
const motif = baliseMotif.value;
console.log(motif);
let form = document.querySelector("#formulaire");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("formulaire reçu");
});
const result = {
    nom : nom,
    prenom: prenom,
    adresseMail : email,
    numeroDeTelephone : numero,
    motif : motif,
}
let baliseNomFormulaire = localStorage.setItem("#nom", result.nom);
