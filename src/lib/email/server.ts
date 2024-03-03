/* eslint-disable no-console */
'use server';

import nodemailer from 'nodemailer';

const getTransporter = async () => {
  let transporter: nodemailer.Transporter | undefined;

  if (!transporter) {
    transporter = await nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secureConnection: false,
      auth: {
        user: 'info@engpr.com',
        pass: process.env.NODEMAILER_PW
      },
      tls: {
        ciphers: 'SSLv3',
      }
    });

    await transporter.verify((error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Server is ready to take our messages (info@engpr.com)');
      }
    });
  }

  return transporter;
}

interface SendEmail {
  subject: string;
  body: string;
  recipient?: string;
}

export const sendEmail = async ({ subject, body, recipient }: SendEmail): Promise<void> => {
  const transporter = await getTransporter();
  const to = recipient || process.env.NODEMAILER_CONTACT_EMAIL;
  const message = {
    from: 'PR Engineering Website <info@engpr.com>',
    to,
    subject,
    html: body,
  };

  try {
    // Await the promise returned by the sendMail method
    await new Promise((resolve, reject) => {
      transporter.sendMail(message, (error: unknown, info: unknown) => {
        if (error) {
          console.error(error)
          reject(new Error('Error sending email'));
        } else {
          console.log(`Email Sent to ${to}`);
          resolve(info);
        }
      });
    });
  } catch (error) {
    // Handle any errors that occur during the sending process
    console.error(error);
    throw error; // Rethrowing the error after logging it
  }
}
