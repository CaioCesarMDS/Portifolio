const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const app = express();
const port = 3030;

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World" + ` ${user}`);
});

app.post("/send-mail", (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res
            .status(400)
            .json({ message: "Por favor, preencha todos os campos obrigatórios." });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
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
            res.send(info);
        })
        .catch((error) => res.send(error));
});

app.listen(port, () => console.log(`Running on port ${port}`));
