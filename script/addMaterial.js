document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Material uploaded successfully!');
        window.location.href = '../page/courseMaterials.html';
    });
});
