document.addEventListener('DOMContentLoaded', function () {

    // Handle Add Material button click
    document.querySelector('.dropdown-button').addEventListener('click', function() {
        window.location.href = '../page/add_material.html';
    });

    // Handle dropdown menu toggle for each card
    document.querySelectorAll('.menu-icon').forEach(menuIcon => {
        menuIcon.addEventListener('click', function(event) {
            event.stopPropagation();
            const dropdown = this.closest('.card').querySelector('.dropdown-content2');
            dropdown.classList.toggle('show2');

            // Hide other dropdowns
            document.querySelectorAll('.dropdown-content2').forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('show2');
                }
            });
        });
    });

    // Hide dropdowns when clicking outside
    window.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-content2').forEach(dropdown => {
            dropdown.classList.remove('show2');
        });
    });

    // Handle material deletion
    document.querySelectorAll('.delete').forEach(deleteButton => {
        deleteButton.addEventListener('click', function(event) {
            event.preventDefault();
            this.closest('.card').remove();
        });
    });

    // Handle material editing
    document.querySelectorAll('.edit').forEach(editButton => {
        editButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = '../page/add_material.html';
        });
    });

});

function goBack() {
    window.location.href = "../page/coursework.html";
}
