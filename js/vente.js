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