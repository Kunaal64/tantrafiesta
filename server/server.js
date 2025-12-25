const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const PASSWORD = process.env.password; // Note: In .env make sure it's 'password' or match implementation

    // Transporter configuration from existing Next.js code
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "tantrafiestadummymailer@gmail.com",
            pass: PASSWORD,
        },
        secure: true,
    });

    try {
        // Verify connection configuration
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        const mailData = {
            from: "tantrafiestadummymailer@gmail.com",
            to: "tantrafiesta@iiitn.ac.in",
            subject: `TantraFiesta Query Form: Query From ${name}`,
            text: message + " | Sent from: " + email,
            html: `<div>${message}</div><p>Sent from: ${email}</p>`,
        };

        // Send mail
        const info = await new Promise((resolve, reject) => {
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        res.status(200).json({ status: 'success', info });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ status: 'error', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
