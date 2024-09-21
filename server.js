const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.post("/send-mail", (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Fill in the required fields" });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        auth: { user, pass },
    });

    transporter
        .sendMail({
            from: user,
            to: user,
            replyTo: email,
            subject: subject,
            html: `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
          `,
        })
        .then((info) => {
            res.status(200).json({ message: "Email sent successfully", info });
        })
        .catch((error) => {
            res.status(500).json({ message: "Error sending email", error });
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`Running on port ${port}`));
