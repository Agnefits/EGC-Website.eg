const toggle = document.querySelector(".login_password_icon"),
    input = document.querySelector(".login_password_field");
toggle.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        toggle.setAttribute("src", "../img/show_password.png");
    } else {
        input.type = "password";
        toggle.setAttribute("src", "../img/hide_password.png");
    }
})