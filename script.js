document.getElementById('birthdate-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Get the input date value
  const birthdate = new Date(document.getElementById('birthdate').value);
  
  if (!birthdate.getTime()) {
    alert("Please select a valid birthdate.");
    return;
  }

  // Add 180 days to the birthdate
  const startSolidDate = new Date(birthdate);
  startSolidDate.setDate(birthdate.getDate() + 180); // Add 180 days
  
  // Format the date to a readable format
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const startDateFormatted = startSolidDate.toLocaleDateString('en-US', options);

  // Display the result
  document.getElementById('result').innerHTML = `<p>Start solids on: <strong>${startDateFormatted}</strong></p>`;
});
