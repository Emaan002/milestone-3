// const toggleButton = document.getElementById("toggleButton");
// const skillsSection = document.getElementById("skillsSection");
// // Toggle function
// toggleButton.addEventListener("click", () => {
//   if (
//     skillsSection.style.display === "none" ||
//     skillsSection.style.display === ""
//   ) {
//     skillsSection.style.display = "block";
//     toggleButton.textContent = "Hide Skills";
//     toggleButton.classList.add("active"); // Change button color
//   } else {
//     skillsSection.style.display = "none";
//     toggleButton.textContent = "Show Skills";
//     toggleButton.classList.remove("active"); // Revert button color
//   }
// });
// Get DOM elements
var toggleButton = document.getElementById('toggleButton');
var skillsSection = document.getElementById('skillsSection');
var generateResumeBtn = document.querySelector('.btn');
var resumeOutput = document.getElementById('resumeOutput');
var jobTitleInput = document.getElementById('job-title');
var firstNameInput = document.getElementById('first-name');
var lastNameInput = document.getElementById('last-name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var locationInput = document.getElementById('location');
var countryInput = document.getElementById('country');
var educationSelect = document.getElementById('education');
var experienceInput = document.getElementById('experience');
// Initially hide the skills section
skillsSection.style.display = 'none';
// Toggle the visibility of the skills section when the button is clicked
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
// Generate the resume output dynamically
generateResumeBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    // Collect form values
    var jobTitle = jobTitleInput.value;
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var location = locationInput.value;
    var country = countryInput.value;
    var education = educationSelect.value;
    var experience = experienceInput.value;
    // Generate resume content dynamically
    var resumeHTML = "\n    <h2>Generated Resume</h2>\n    <p><strong>Wanted Job Title:</strong> ".concat(jobTitle, "</p>\n    <p><strong>Name:</strong> ").concat(firstName, " ").concat(lastName, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n    <p><strong>Location:</strong> ").concat(location, ", ").concat(country, "</p>\n    <p><strong>Education Level:</strong> ").concat(education, "</p>\n    <p><strong>Experience:</strong> ").concat(experience, "</p>\n  ");
    // Display the resume in the resumeOutput div
    resumeOutput.innerHTML = resumeHTML;
});
