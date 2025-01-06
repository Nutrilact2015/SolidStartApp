let currentLanguage = "en"; // Default language

async function loadTranslations() {
  const response = await fetch("translations.json");
  return response.json();
}

async function applyTranslations() {
  const translations = await loadTranslations();
  const texts = translations[currentLanguage];

  document.querySelector("h1").textContent = texts.title;
  document.querySelector("p").textContent = texts.description;
  document.querySelector("label[for='dob']").textContent = texts.dob_label;
  document.querySelector("button").textContent = texts.calculate_button;
  document.getElementById("recommended-date-label").textContent = texts.recommended_date;
}

window.onload = async function () {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  await applyTranslations();
};

document.getElementById("language-selector").addEventListener("change", async function (event) {
  currentLanguage = event.target.value;
  await applyTranslations();
});

document.getElementById('dob-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    alert("Please select a valid date of birth!");
    return;
  }
  const dob = new Date(dobInput);
  const solidStartDate = new Date(dob.setMonth(dob.getMonth() + 6));
  scheduleReminder(solidStartDate);
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
