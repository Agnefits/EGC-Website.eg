document.addEventListener("DOMContentLoaded", function() {
    // Sample data
    const sampleDoctors = [
        {
            rollNumber: 1,
            name: 'Dr. Mohamed Medhat',
            department: 'IT',
            email: 'mohamedmedhat@gmail.com',
            phoneNumber: '01034567890'
        },
        {
            rollNumber: 2,
            name: 'Dr. Ali',
            department: 'IT',
            email: 'ali@gmail.com',
            phoneNumber: '01986541210'
        },
        {
            rollNumber: 3,
            name: 'Dr. Hisham',
            department: 'IT',
            email: 'hisham@gmail.com',
            phoneNumber: '010567891230'
        },
        {
            rollNumber: 4,
            name: 'Dr. Abdelrahman Ali',
            department: 'Electricity',
            email: 'AbdelrahmanAli@gmail.com',
            phoneNumber: '01216549870'
        }
    ];

    // Store sample data in localStorage if not already present
    if (!localStorage.getItem('doctorsData')) {
        localStorage.setItem('doctorsData', JSON.stringify(sampleDoctors));
    }

    // Populate the table with data from localStorage
    populateDoctorsTable();
});

function populateDoctorsTable(doctors = JSON.parse(localStorage.getItem('doctorsData')) || []) {
    const doctorsTableBody = document.getElementById('doctorsTableBody');
    doctorsTableBody.innerHTML = ''; // Clear existing rows

    doctors.forEach(doctor => {
        const row = document.createElement('tr');
        row.classList.add('doctor-row');
        row.innerHTML = `
            <td>${doctor.rollNumber}</td>
            <td>${doctor.name}</td>
            <td>${doctor.department}</td>
            <td>${doctor.email}</td>
            <td>${doctor.phoneNumber}</td>
            <td>
                <button class="details-btn edit" onclick="">Edit</button>
                <button class="details-btn delete" onclick="deleteDoctor(${doctor.rollNumber})">Delete</button>
            </td>
        `;
        doctorsTableBody.appendChild(row);
    });
}

function searchDoctors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const doctorsData = JSON.parse(localStorage.getItem('doctorsData')) || [];

    const filteredDoctors = doctorsData.filter(doctor => {
        return doctor.name.toLowerCase().includes(searchInput) || 
               doctor.department.toLowerCase().includes(searchInput);
    });

    populateDoctorsTable(filteredDoctors);
}


function deleteDoctor(rollNumber) {
    if (confirm(`Are you sure you want to delete doctor with roll number: ${rollNumber}?`)) {
        let doctorsData = JSON.parse(localStorage.getItem('doctorsData')) || [];
        doctorsData = doctorsData.filter(doctor => doctor.rollNumber !== rollNumber);
        localStorage.setItem('doctorsData', JSON.stringify(doctorsData));
        searchDoctors(); // Re-filter the table after deletion
    }
}

console.log(localStorage.getItem('doctorsData'));
