const myFunction = () => {
  const winScroll = window.scrollY;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = `${scrolled}%`;
};

window.onscroll = myFunction;

const evalForm = async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("txt-first-name").value;
  const email = document.getElementById("txt-email").value;
  const subject = document.getElementById("txt-subject").value;
  const message = document.getElementById("txt-message").value;

  try {
      const response = await fetch("/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ firstName, email, subject, message })
      });

      const responseData = await response.json();

      if (response.ok) {
          displayMessage("success", responseData.message);
          document.getElementById("contact-form").reset();
      } else {
          displayMessage("error", responseData.error);
      }
  } catch (error) {
      console.error("Error:", error);
      displayMessage("error", "An error occurred. Please try again later.");
  }
};

document.getElementById("contact-form").onsubmit = evalForm;

function displayMessage(type, message) {
  const formMessages = document.getElementById("form-messages");
  formMessages.innerHTML = `<div class="${type}">${message}</div>`;
}
