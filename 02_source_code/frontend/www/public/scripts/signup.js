const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeatPassword");

form.addEventListener("submit", signup);

async function signup(event){
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    if (password !== repeatPassword) {
        console.log("Passwords do not match.");
        return;
    }

    const response = await fetch("http://localhost:5000/signup",
    {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username: username,
            password: password

        })

    }
    );

    const result = await response.json();

    if (result.success) {

    console.log(result.message);

    window.location.href = "index.html";

    }
    else {

    console.log(result.message);

    }

    return;

}