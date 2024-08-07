document.addEventListener("DOMContentLoaded", function() {
    // Sample data for Teaching Assistants
    const sampleTeachingAssistants = [
        {
            rollNumber: 1,
            name: 'TA Amr Adel',
            department: 'IT',
            email: 'amradel@gmail.com',
            phoneNumber: '01234567890',
            username: 'Amr'
        },
        {
            rollNumber: 2,
            name: 'TA sayd',
            department: 'Electricity',
            email: 'sayd@gmail.com',
            phoneNumber: '010986543210',
            username: 'sayd'
        },
        {
            rollNumber: 3,
            name: 'TA Aml',
            department: 'IT',
            email: 'aml@gmail.com',
            phoneNumber: '01145789230',
            username: 'Aml'
        },
        {
            rollNumber: 4,
            name: 'TA Gehad',
            department: 'IT',
            email: 'gehad@gmail.com',
            phoneNumber: '010326549870',
            username: 'Gehad'
        }
    ];

    // Store sample data in localStorage if not already present
    if (!localStorage.getItem('teachingAssistantsData')) {
        localStorage.setItem('teachingAssistantsData', JSON.stringify(sampleTeachingAssistants));
    }

    // Populate the table with data from localStorage
    populateTeachingAssistantsTable();
});

function populateTeachingAssistantsTable(assistants = JSON.parse(localStorage.getItem('teachingAssistantsData')) || []) {
    const assistantsTableBody = document.getElementById('assistantsTableBody');
    assistantsTableBody.innerHTML = ''; // Clear existing rows

    assistants.forEach(assistant => {
        const row = document.createElement('tr');
        row.classList.add('assistant-row');
        row.innerHTML = `
            <td>${assistant.rollNumber}</td>
            <td>${assistant.name}</td>
            <td>${assistant.department}</td>
            <td>${assistant.email}</td>
            <td>${assistant.phoneNumber}</td>
            <td>${assistant.username}</td>
            <td>
                <button class="details-btn edit" onclick="">Edit</button>
                <button class="details-btn delete" onclick="deleteAssistant(${assistant.rollNumber})">Delete</button>
            </td>
        `;
        assistantsTableBody.appendChild(row);
    });
}

function searchTeachingAssistants() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const assistantsData = JSON.parse(localStorage.getItem('teachingAssistantsData')) || [];

    const filteredAssistants = assistantsData.filter(assistant => {
        return assistant.name.toLowerCase().includes(searchInput) || 
               assistant.department.toLowerCase().includes(searchInput);
    });

    populateTeachingAssistantsTable(filteredAssistants);
}

function deleteAssistant(rollNumber) {
    if (confirm(`Are you sure you want to delete TA with roll number: ${rollNumber}?`)) {
        let assistantsData = JSON.parse(localStorage.getItem('teachingAssistantsData')) || [];
        assistantsData = assistantsData.filter(assistant => assistant.rollNumber !== rollNumber);
        localStorage.setItem('teachingAssistantsData', JSON.stringify(assistantsData));
        searchTeachingAssistants(); // Re-filter the table after deletion
    }
}

console.log(localStorage.getItem('teachingAssistantsData'));
