import { emptyFieldsError, sendMailError, sendMailSuccess } from "./alert-messages.js";

async function sendMail(event) {
    event.preventDefault();

    const { name, email, phone, subject, message } = getFormValues();
    const baseUrl = "https://portifolio-qu7k.onrender/send-mail";

    if (name && email && subject && message) {
        try {
            await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, subject, message }),
            });

            sendMailSuccess();
        } catch (error) {
            sendMailError(error);
        }
    } else {
        emptyFieldsError();
    }
}

function getFormValues() {
    const name = document.querySelector(".input.name").value;
    const email = document.querySelector(".input.email").value;
    const phone = document.querySelector(".input.phone").value;
    const subject = document.querySelector(".input.subject").value;
    const message = document.querySelector(".textarea.message").value;
    return { name, email, phone, subject, message };
}

export { sendMail };
