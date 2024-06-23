document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('message-form');
    const messageContainer = document.getElementById('messages-container');
    let editingMessage = null;

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const description = document.getElementById('description').value;
        const files = document.getElementById('fileInput').files; // Get uploaded files

        if (editingMessage) {
            // Update existing message
            editingMessage.querySelector('p').textContent = description;

            // Clear existing file attachments
            const fileContainer = editingMessage.querySelector('.file-container');
            if (fileContainer) {
                fileContainer.innerHTML = '';
            } else {
                const newFileContainer = document.createElement('div');
                newFileContainer.classList.add('file-container');
                editingMessage.appendChild(newFileContainer);
            }

            // Add new file attachments
            if (files.length > 0) {
                const fileList = document.createElement('ul'); // Use an unordered list for file links
                for (const file of files) {
                    const listItem = document.createElement('li');
                    listItem.classList.add('file-item'); // Add a CSS class for styling (optional)

                    const img_file = document.createElement('img');
                    img_file.src = '../image/image_f.png'; // **Keep this for the initial placeholder image**
                    img_file.classList.add('img_file');
                    const fileLink = document.createElement('a');
                    fileLink.href = URL.createObjectURL(file); // Generate temporary URL for the file
                    fileLink.textContent = file.name;
                    fileLink.target = '_blank'; // Open files in a new tab

                    listItem.appendChild(fileLink);
                    fileList.appendChild(listItem);
                }
                editingMessage.querySelector('.file-container').appendChild(fileList);
            }

            editingMessage = null;
        } else {
            // Create a new message element dynamically
            const newMessage = document.createElement('div');
            newMessage.classList.add('message'); // Add a CSS class for styling (optional)

            // Display the entered description
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = description;
            newMessage.appendChild(descriptionElement);

            const li = document.createElement('a');
            li.classList.add('li');
            newMessage.appendChild(li);
            const im = document.createElement('img');
            im.classList.add('im');
            im.src = '../image/bullets.png';
            li.appendChild(im);

            // Handle file attachments (if any)
            if (files.length > 0) {
                const fileContainer = document.createElement('div'); // Create a separate container for files
                fileContainer.classList.add('file-container'); // Add a CSS class for styling (optional)

                const fileList = document.createElement('ul'); // Use an unordered list for file links
                for (const file of files) {
                    const listItem = document.createElement('li');
                    listItem.classList.add('file-item'); // Add a CSS class for styling (optional)

                    const img_file = document.createElement('img');
                    img_file.src = '../image/image_f.png'; // **Keep this for the initial placeholder image**
                    img_file.classList.add('img_file');
                    const fileLink = document.createElement('a');
                    fileLink.href = URL.createObjectURL(file); // Generate temporary URL for the file
                    fileLink.textContent = file.name;
                    fileLink.target = '_blank'; // Open files in a new tab

                    listItem.appendChild(fileLink);
                    newMessage.appendChild(img_file);
                    fileList.appendChild(listItem);
                }
                fileContainer.appendChild(fileList); // Add file list to the file container
                newMessage.appendChild(fileContainer); // Add file container to the message element
            }

            // Add dropdown-content2 to the new message
            const dropdownContent2 = document.createElement('div');
            dropdownContent2.classList.add('dropdown-content2');
            dropdownContent2.innerHTML = `
              <a href="#" class="edit">Edit</a>
              <a href="#" class="delete">Delete</a>
          `;
            newMessage.appendChild(dropdownContent2);

            // Append the constructed message element to the container
            messageContainer.appendChild(newMessage);

            // Add event listener for the im image to toggle dropdown-content2
            im.addEventListener('click', function(event) {
                event.stopPropagation();
                const allDropdowns = document.querySelectorAll('.dropdown-content2');
                allDropdowns.forEach(dropdown => {
                    if (dropdown !== dropdownContent2) {
                        dropdown.classList.remove('show2');
                    }
                });
                dropdownContent2.classList.toggle('show2');
            });

            // Add event listener for the delete link to remove the message
            const deleteLink = dropdownContent2.querySelector('.delete');
            deleteLink.addEventListener('click', function(event) {
                event.preventDefault();
                newMessage.remove();
            });

            // Add event listener for the edit link to edit the message
            const editLink = dropdownContent2.querySelector('.edit');
            editLink.addEventListener('click', function(event) {
                event.preventDefault();
                document.getElementById('description').value = description;

                // Display file names as hints
                const fileNames = Array.from(newMessage.querySelectorAll('.file-item a')).map(a => a.textContent);
                document.getElementById('fileInput').setAttribute('data-file-names', fileNames.join(', '));
                document.getElementById('fileHints').textContent = `Files: ${fileNames.join(', ')}`;

                editingMessage = newMessage;
            });
        }

        // Clear the form (optional)
        document.getElementById('description').value = '';
        document.getElementById('fileInput').value = ''; // Clear file input
        document.getElementById('fileHints').textContent = ''; // Clear file hints
    });

    // Hide dropdown-content2 when clicking outside
    window.addEventListener('click', function(event) {
        const allDropdowns = document.querySelectorAll('.dropdown-content2');
        allDropdowns.forEach(dropdown => {
            dropdown.classList.remove('show2');
        });
    });
});