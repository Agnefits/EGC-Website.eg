document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.add-assignment-button').addEventListener('click', function () {
        window.location.href = '../page/assignment.html';
    });

    document.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('menu-icon')) {
            event.stopPropagation();

            const card = target.closest('.card');

            if (card) {
                const dropdownContent2 = card.querySelector('.dropdown-content2');
                if (dropdownContent2) {
                    dropdownContent2.classList.toggle('show2');
                    const allDropdowns = document.querySelectorAll('.dropdown-content2');
                    allDropdowns.forEach(dropdown => {
                        if (dropdown !== dropdownContent2) {
                            dropdown.classList.remove('show2');
                        }
                    });
                }
            }
        } else {
            const allDropdowns = document.querySelectorAll('.dropdown-content2');
            allDropdowns.forEach(dropdown => {
                dropdown.classList.remove('show2');
            });
        }
    });

    const deleteLinks = document.querySelectorAll('.delete');

    deleteLinks.forEach(deleteLink => {
        deleteLink.addEventListener('click', function (event) {
            event.preventDefault();
            this.closest('.card').remove();
        });
    });
});

function goBack() {
    window.location.href = "../page/coursework.html";
}
