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
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const generateResumeBtn = document.querySelector('.btn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

const jobTitleInput = document.getElementById('job-title') as HTMLInputElement;
const firstNameInput = document.getElementById('first-name') as HTMLInputElement;
const lastNameInput = document.getElementById('last-name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const locationInput = document.getElementById('location') as HTMLInputElement;
const countryInput = document.getElementById('country') as HTMLInputElement;
const educationSelect = document.getElementById('education') as HTMLSelectElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;

// Initially hide the skills section
skillsSection.style.display = 'none';

// Toggle the visibility of the skills section when the button is clicked
toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});

// Generate the resume output dynamically
generateResumeBtn.addEventListener('click', (event: Event) => {
  event.preventDefault(); // Prevent form submission

  // Collect form values
  const jobTitle = jobTitleInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const location = locationInput.value;
  const country = countryInput.value;
  const education = educationSelect.value;
  const experience = experienceInput.value;

  // Generate resume content dynamically
  const resumeHTML = `
    <h2>Generated Resume</h2>
    <p><strong>Wanted Job Title:</strong> ${jobTitle}</p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Location:</strong> ${location}, ${country}</p>
    <p><strong>Education Level:</strong> ${education}</p>
    <p><strong>Experience:</strong> ${experience}</p>
  `;

  // Display the resume in the resumeOutput div
  resumeOutput.innerHTML = resumeHTML;
});

