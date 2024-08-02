function addAnnouncement() {
    const announcementInput = document.getElementById('announcement-input');
    const announcementText = announcementInput.value.trim();

    if (announcementText) {
        const postsContainer = document.getElementById('posts');
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-controls"style="margin-bottom:70px">
                <button class="edit" onclick="editPost(this)">Edit</button>
                <button class="delete" onclick="deletePost(this)">Delete</button>
            </div>
            <p style="margin-right:50px ; margin-top:70px">${announcementText}</p>
            <div class="comment" style="margin-top:20px">
                <input type="text" placeholder="Add Comment here .......">
                <button onclick="addComment(this)">Send</button>
            </div>
            <div class="comments"></div>
            
        `;

        postsContainer.appendChild(postElement);
        announcementInput.value = '';
    }
}

function editPost(button) {
    const postElement = button.parentElement.parentElement;
    const postTextElement = postElement.querySelector('p');
    const newText = prompt('Edit Post :', postTextElement.textContent);

    if (newText !== null) {
        postTextElement.textContent = newText.trim();
    }
}

function deletePost(button) {
    const postElement = button.parentElement.parentElement;
    postElement.remove();
}

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


