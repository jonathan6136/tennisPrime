const resultForm = localStorage.getItem("form");

if (resultForm) {
    const objetOriginal = JSON.parse(resultForm);
    const resultDiv = document.querySelector("#result");
    for(object in objetOriginal){
        const p = document.createElement("p");
        p.textContent = objetOriginal[object];
        resultDiv.appendChild(p);
    }
}

