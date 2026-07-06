checkSession();
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

async function checkSession() {
    const username = localStorage.getItem("username");

    if (!username) {
        return;
    }

    const response = await fetch(`http://localhost:5000/session/${username}`);
    const result = await response.json();

    if (!result.logged_in) {

        localStorage.removeItem(
            "username"
        );

        console.log(
            "Stored session removed."
        );

    }

}