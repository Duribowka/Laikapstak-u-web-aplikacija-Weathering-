const form = document.getElementById("signinForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", signin);

async function signin(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    const response = await fetch(
        "http://localhost:5000/signin",
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
    console.log(result.message);

    if (result.success) {

        localStorage.setItem(
            "username",
            username
        );

        window.location.href =
            "index.html";

    }

}