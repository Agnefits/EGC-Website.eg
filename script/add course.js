function addCourse() {
    var courseName = document.getElementById('courseName').value;
    var courseDescription = document.getElementById('courseDescription').value;
    var courseStartDate = document.getElementById('courseStartDate').value;
    var practicalDegree = document.getElementById('practicalDegree').value;
    var sectionAttendance = document.getElementById('sectionAttendance').value;
    var lectureAttendance = document.getElementById('lectureAttendance').value;

    var message = `The course has been added successfully:
courseName: ${courseName}
courseDescription: ${courseDescription}
courseStartDate: ${courseStartDate}
practicalDegree: ${practicalDegree}
sectionAttendance: ${sectionAttendance}
lectureAttendance: ${lectureAttendance}`;

    alert(message);
}
function zoomIn(element) {
    element.style.transform = "scale(1.05)";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
}





const fileInput = document.getElementById('course_image');
const imageContainer = document.getElementById('picturecourse');

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imageContainer.src = e.target.result;
    };

    reader.readAsDataURL(file);
});