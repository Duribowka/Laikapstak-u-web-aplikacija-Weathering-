const button = document.getElementById("return");
let x = 0;
let y = 0;

button.addEventListener("click", () => {
    window.scrollTo({
        left: x, 
        top: y,
    behavior: 'smooth'
});
})