const sessionButton = document.getElementById("session");

sessionButton.addEventListener("click", () =>{
    CurrentUser();
})

function CurrentUser() {
    const user = localStorage.getItem("username");

    if(user){
        console.log("Logged in as", user);
    }
    else{
        console.log("Logged out");
    }
}