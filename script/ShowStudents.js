document.addEventListener("DOMContentLoaded", function() {
    // Sample data for Students
    const sampleStudents = [
        {
            rollNumber: 1,
            name: 'Habiba Saad',
            department: 'IT',
            yearLevel: '3rd Year',
            email: 'habibasaad@gmail.com',
            phoneNumber: '01234567890',
            username: 'Habiba'
        },
        {
            rollNumber: 2,
            name: 'Mariam',
            department: 'IT',
            yearLevel: '2nd Year',
            email: 'Mariam@gmail.com',
            phoneNumber: '010876543210',
            username: 'Mariam '
        },
        {
            rollNumber: 3,
            name: 'Salma',
            department: 'IT',
            yearLevel: '2nd Year',
            email: 'Salma@gmail.com',
            phoneNumber: '010456789230',
            username: 'Salma'
        },
        {
            rollNumber: 4,
            name: 'Rana',
            department: 'IT',
            yearLevel: '2nd Year',
            email: 'Rana@gmail.com',
            phoneNumber: '010216549870',
            username: 'Rana'
        }
    ];

    // Store sample data in localStorage if not already present
    if (!localStorage.getItem('studentsData')) {
        localStorage.setItem('studentsData', JSON.stringify(sampleStudents));
    }

    // Populate the table with data from localStorage
    populateStudentsTable();
});

function populateStudentsTable(students = JSON.parse(localStorage.getItem('studentsData')) || []) {
    const studentsTableBody = document.getElementById('studentsTableBody');
    studentsTableBody.innerHTML = ''; // Clear existing rows

    students.forEach(student => {
        const row = document.createElement('tr');
        row.classList.add('student-row');
        row.innerHTML = `
            <td>${student.rollNumber}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.yearLevel}</td>
            <td>${student.email}</td>
            <td>${student.phoneNumber}</td>
            <td>${student.username}</td>
            <td>
                <button class="details-btn edit" onclick="">Edit</button>
                <button class="details-btn delete" onclick="deleteStudent(${student.rollNumber})">Delete</button>
            </td>
        `;
        studentsTableBody.appendChild(row);
    });
}

function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const studentsData = JSON.parse(localStorage.getItem('studentsData')) || [];

    const filteredStudents = studentsData.filter(student => {
        return student.name.toLowerCase().includes(searchInput) || 
               student.department.toLowerCase().includes(searchInput);
    });

    populateStudentsTable(filteredStudents);
}



function deleteStudent(rollNumber) {
    if (confirm(`Are you sure you want to delete student with roll number: ${rollNumber}?`)) {
        let studentsData = JSON.parse(localStorage.getItem('studentsData')) || [];
        studentsData = studentsData.filter(student => student.rollNumber !== rollNumber);
        localStorage.setItem('studentsData', JSON.stringify(studentsData));
        searchStudents(); // Re-filter the table after deletion
    }
}

console.log(localStorage.getItem('studentsData'));
