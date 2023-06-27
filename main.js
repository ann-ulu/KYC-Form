
//nav bar script
const menu = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.nav__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


//popup script
window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var acceptButton = document.getElementById('acceptButton');

    overlay.style.display = 'block';
    popup.style.display = 'block';

    acceptButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});

//read more script

document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.querySelector('.read-more-btn');
    var hiddenText = document.querySelector('.hidden-text');
  
    readMoreBtn.addEventListener('click', function() {
      hiddenText.style.display = 'block';
      readMoreBtn.style.display = 'none';
    });
  });



/*

//disable scroll
// Get the form and next section elements
// Get the form, next section, and body elements
const form = document.getElementById('personalInfoForm');
const nextSection = document.getElementById('nextSection');
const body = document.body;

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Show the next section
  nextSection.classList.remove('hidden');

  // Prompt the user to click the submit button if scrolling is attempted
  body.addEventListener('scroll', function() {
    if (!formSubmitted) {
      alert('Please click the submit button in the form first');
      body.scrollTop = 0;
    }
  });
});

// Variable to track if the form has been submitted
let formSubmitted = false;

// Add event listener to the submit button
document.getElementById('submitButton').addEventListener('click', function() {
  // Set the formSubmitted flag to true
  formSubmitted = true;
});*/


  
  

  

//fetch customer data from api
function fetchData(guid) {
    fetch(`https://androiddev.sevenup.org/csti/api/KYC/${guid}`)
      .then(response => response.json())
      .then(data => {
        // Autofill the form with the retrieved data
        document.getElementById('phoneNumber2').value = data.phoneNumber2;
        document.getElementById('phoneNumber1').value = data.phoneNumber1;
        document.getElementById('businessPhoneNumber1').value = data.businessPhoneNumber1;
        document.getElementById('businessPhoneNumber2').value = data.businessPhoneNumber2;
       document.getElementById('firstName').value = data.firstName;
        document.getElementById('lastName').value = data.lastName;
        document.getElementById('customerCode').value = data.customerCode;
        document.getElementById('sapCustomerCode').value = data.sapCustomerCode;
        document.getElementById('businessName').value = data.businessName;
        document.getElementById('businessAddress').value = data.businessAddress;
        document.getElementById('mainWarehouseAddress').value = data.mainWarehouseAddress;
        document.getElementById('address').value = data.address;
        document.getElementById('signature').value = data.signature;
        document.getElementById('isNotification').value = data.isNotification;
        document.getElementById('preferredLanguage').value = data.preferredLanguage;
        document.getElementById('companyRegNo').value = data.companyRegNo;
        

        // Fill other form fields as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Extract the GUID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const guid = urlParams.get('guid');
  
  // Fetch data and autofill the form if the GUID is present
  if (guid) {
    fetchData(guid);
  }
  
  

  function submitForm(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the form data
    const form = document.getElementById('bio-form');
    const formData = new FormData(form);

    // Send the form data to the API using fetch
    fetch('https://androiddev.sevenup.org/csti/api/KYC/', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // Display success message or perform further actions
          alert('Info received');
          // Reset the form if needed
          form.reset();
        } else {
          // Display error message or perform error handling
          alert('Error submitting the form');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Display error message or perform error handling
        alert('Error submitting the form');
      });
  }

  // Attach submitForm function to the form's submit event
  const form = document.getElementById('bio-form');
  form.addEventListener('submit', submitForm);


 