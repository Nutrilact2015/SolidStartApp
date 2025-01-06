// Script.js

document.getElementById('birthdate-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Get the input date value
  const birthdate = new Date(document.getElementById('birthdate').value);
  
  if (!birthdate.getTime()) {
    alert("Please select a valid birthdate.");
    return;
  }

  // Add 181 days to the birthdate
  const startSolidDate = new Date(birthdate);
  startSolidDate.setDate(birthdate.getDate() + 181); // Add 181 days
  
  // Format the date to a readable format (e.g., "January 6, 2025")
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const startDateFormatted = startSolidDate.toLocaleDateString('en-US', options);

  // Display the result
  document.getElementById('result').innerHTML = `<p>Start solids on: <strong>${startDateFormatted}</strong></p>`;
});
