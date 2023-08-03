// Adding eventListener to Register button
const submit = document.getElementById("submitButton");
submit.addEventListener('click', function(event){
    event.preventDefault();
    clearErrors();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!firstName) {
        displayError('firstNameError', 'Please enter your first name.');
      }
      if (!lastName) {
        displayError('lastNameError', 'Please enter your last name.');
      }
      if (!dateOfBirth) {
        displayError('dateOfBirthError', 'Please enter your date of birth.');
      }
      if (!gender) {
        displayError('genderError', 'Please select your gender.');
      }
      if (password == '') { 
        displayError('passwordError', 'Please enter a password.');
      }
      if (confirmPassword == '') {
        displayError('confirmPasswordError', 'Please confirm your password.');
      }
      if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match.');
      }
      if (password == confirmPassword ) {
        if (password.length < 8){
            displayError('confirmPasswordError', 'Passwords must be atleast 8 characters.');
        } else {
            console.log("Success")
            successMessage();
        }
      }
     
    });
// Function adds error content to the specified element
    function displayError(inputElement, errorMessage) {
      const errorElement = document.getElementById(inputElement);
      errorElement.textContent = errorMessage;
    }

// Function to clear error content 
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        for (const errorElement of errorElements) {
          errorElement.textContent = '';
        }
      }

// Success message after the elment is added successfully
    function successMessage() {
      console.log("Success")
      location.reload();
      alert('Record added successfully!');
    }
