const toggle = document.querySelector(".login_password_icon"),
    input = document.querySelector(".login_password_field"),
    loginForm = document.querySelector(".login_form");

toggle.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        toggle.setAttribute("src", "../img/show_password.png");
    } else {
        input.type = "password";
        toggle.setAttribute("src", "../img/hide_password.png");
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let privilage = "";
    const radios = document.querySelectorAll("input[type=radio]");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            privilage = radios[i].value;
            break;
        }
    }

    window.location.href = "../index.html?privilage=" + privilage;
});