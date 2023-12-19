// Sample JavaScript code for interacting with the interface

// Assume you have an API endpoint or server-side code to fetch student data
const fetchStudents = async () => {
    try {
        // Fetch data from the server
        const response = await fetch('/api/students');
        const data = await response.json();

        // Display the list of students in the interface
        displayStudents(data);
    } catch (error) {
        console.error('Error fetching students:', error.message);
    }
};

// Display the list of students in the interface
const displayStudents = (students) => {
    const studentList = document.getElementById('studentList');

    // Clear existing list items
    studentList.innerHTML = '';

    // Populate the list with student names and information
    students.forEach((student) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${student.Name}, Contact: ${student.ContactDetails}`;
        studentList.appendChild(listItem);
    });
};

// Fetch and display students when the page loads
window.addEventListener('load', () => {
    fetchStudents();
});
