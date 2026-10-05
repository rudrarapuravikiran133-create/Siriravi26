
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "siriravi" && password === "sirirevii@2009") {

        window.location.href = "home.html";

    } else {

        document.getElementById("message").innerHTML =
            "Wrong Username or Password";

    }
}

