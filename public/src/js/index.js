import "./alert-messages.js";
import { addLightClass } from "./config.js";
import "./mobilemenu.js";
import { sendMail } from "./send-mail.js";
import "./skill-name.js";
import "./slider-image.js";

document.getElementById("check").addEventListener("change", addLightClass);
document.getElementById("btn-sendmail").addEventListener("click", sendMail);
