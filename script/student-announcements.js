function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentsContainer = button.parentElement.nextElementSibling;
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        commentElement.innerHTML = `
            <p>${commentText}</p>
            <button class="edit" onclick="editComment(this)">Edit</button>
            <button class="delete" onclick="deleteComment(this)">Delete</button>
        `;

        commentsContainer.appendChild(commentElement);
        commentInput.value = '';
    }
}

function editComment(button) {
    const commentElement = button.parentElement;
    const commentTextElement = commentElement.querySelector('p');
    const newText = prompt('Edit Comment:', commentTextElement.textContent);

    if (newText !== null) {
        commentTextElement.textContent = newText.trim();
    }
}

function deleteComment(button) {
    const commentElement = button.parentElement;
    commentElement.remove();
}




document.addEventListener('DOMContentLoaded', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-header .toggle-button');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});



let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}