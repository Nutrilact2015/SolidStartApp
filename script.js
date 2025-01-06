/document.getElementById('dob-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    alert("Please select a valid date of birth!");
    return;
  }
  const dob = new Date(dobInput);

  // Add 181 days to the DOB
  dob.setDate(dob.getDate() + 181); 

  // Display the recommended solid start date
  document.getElementById("recommended-date-label").textContent = `Recommended date to start solids: ${dob.toDateString()}`;
  
  // Schedule a reminder
  scheduleReminder(dob);
});

function scheduleReminder(solidStartDate) {
  const now = new Date();
  const timeUntilNotification = solidStartDate - now;

  if (timeUntilNotification > 0) {
    setTimeout(() => {
      new Notification("Time to Start Solids!", {
        body: "Today is the recommended date to start solids for your child. Happy feeding!",
      });
    }, timeUntilNotification);
  }
}
