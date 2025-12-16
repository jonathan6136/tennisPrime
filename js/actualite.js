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

const divs = document.querySelectorAll("#image-court2");
for( const div of divs){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#00ffff";
        console.log("souris desssus");
        div.style.transition = "1s"
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus")
    })
}

const divs2 = document.querySelectorAll("#image-court3");
for( const div of divs2){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#00ff4cff";
        console.log("souris desssus");
        div.style.transition = "1s"
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus")
    })
}

const divs3 = document.querySelectorAll("#image-court4");
for( const div of divs3){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#ff0000ff";
        console.log("souris desssus");
        div.style.transition = "1s"
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus")
    })  
}

const divs4 = document.querySelectorAll("#image-court5");
for( const div of divs4){
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#ff008cff";
        console.log("souris desssus");
        div.style.transition = "1s"
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#000";
        console.log("souris pas desssus")
    })
}