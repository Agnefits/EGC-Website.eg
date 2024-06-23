document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    button.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function(event) {
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
