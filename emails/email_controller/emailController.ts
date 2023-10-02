import nodemailer from "nodemailer";

const email = process.env.GMAIL_ADDRESS;
const pass = process.env.GMAIL_APP_PASS;

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
};

const transporter = nodemailer.createTransport({
  ...smtpOptions,
});

export const sendMailVerification = async (data: EmailPayload) => {
  await transporter.sendMail({
    from: email,
    ...data,
  });
};
