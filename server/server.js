const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow requests from the frontend (running on a different port in dev)
app.use(cors());
// Parse incoming JSON request bodies
app.use(express.json());

/**
 * POST /api/contact
 * 
 * Endpoint to handle contact form submissions.
 * Receives name, email, and message from the request body.
 * Uses Nodemailer to send an email to the organizers.
 */
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const PASSWORD = process.env.password; // Note: In .env make sure it's 'password' or match implementation

    // Transporter configuration for Gmail SMTP
    // Note: Requires a valid 'password' in .env file (App Password for Gmail)
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

        // Send the email using the configured transporter
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

        // Respond with success status and info
        res.status(200).json({ status: 'success', info });
    } catch (error) {
        // Handle errors (connection, authentication, sending failure)
        console.error('Email sending failed:', error);
        res.status(500).json({ status: 'error', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
