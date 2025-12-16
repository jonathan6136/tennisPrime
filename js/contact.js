const form = document.querySelector("#formulaire");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const monObjetContact = Object.fromEntries(formData);
    const objetEnString = JSON.stringify(monObjetContact);
    localStorage.setItem("form", objetEnString);
    document.location.href="result.html"
});
const toggle = document.querySelector("#toggle");
const navigation = document.querySelector("#navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

const divs = document.querySelectorAll("#nom");
for( const div of divs){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#00ffff";
        console.log("souris desssus");
        div.style.transition = "1s";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus");
    })
}

const divs2 = document.querySelectorAll("#prenom");
for( const div of divs2){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#00ff4cff";
        console.log("souris desssus");
        div.style.transition = "1s";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus");
    })
}

const divs3 = document.querySelectorAll("#email");
for( const div of divs3){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#ff0000ff";
        console.log("souris desssus");
        div.style.transition = "1s";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus");
    })
}

const divs4 = document.querySelectorAll("#number");
for( const div of divs4){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#ff008cff";
        console.log("souris desssus");
        div.style.transition = "1s";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus");
    })
}

const divs5 = document.querySelectorAll("#message");
for( const div of divs5){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#d0ff00ff";
        console.log("souris desssus");
        div.style.transition = "1s";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus");
    })
}
