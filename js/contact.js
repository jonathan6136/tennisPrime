const form = document.querySelector("#formulaire");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const monObjetContact = Object.fromEntries(formData);
    const objetEnString = JSON.stringify(monObjetContact);
    localStorage.setItem("form", objetEnString);
    document.location.href="result.html"
});
