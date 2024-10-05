// select objects based on their class name
const fontBtn = document.querySelector(".btn-fraktur-antiqua");
const frakturA = document.querySelector(".frakturA");
const antiquaA = document.querySelector(".antiquaA");

// get font setting stored in local storage
const currentFont = localStorage.getItem("font") || "fraktur";

if (currentFont === "antiqua") {
    document.body.classList.add("alternate-font");
    frakturA.style.display = 'block';
    antiquaA.style.display = 'none';
} else {
    document.body.classList.add("default-font");
    frakturA.style.display = 'none';
    antiquaA.style.display = 'block';
}

fontBtn.addEventListener("click", function () {
    document.body.classList.toggle("alternate-font");
    document.body.classList.toggle("default-font");

    /* initialise default value */
    let font = "fraktur";

    if (document.body.classList.contains("default-font")) {
        font = "fraktur";
        // hide other letter
        frakturA.style.display = 'none';
        antiquaA.style.display = 'block';
    }
    else {
        font = "antiqua";
        // hide other letter
        frakturA.style.display = 'block';
        antiquaA.style.display = 'none';
    }
    localStorage.setItem("font", font);
});