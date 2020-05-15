import * as sgMail from '@sendgrid/mail';
import * as express from 'express';
import * as functions from 'firebase-functions';

const app = express();

app.use(express.json());

app.post('/api/contact', (req, res) => {
  sgMail.setApiKey(functions.config().sendgrid.key);

  sgMail
    .send({
      to: 'info@zoldos-group.com',
      from: 'info@zoldos-group.com',
      replyTo: req.body.email,
      subject: 'Now website contact',
      text: 'Please open this email with a javascript enabled browser',
      html: `
        <p><b>Name:</b> ${req.body.name}</p>
        <p><b>Email:</b> ${req.body.email}</p>
        <p><b>Phone:</b> ${req.body.phone}</p>
        <p><b>Subject:</b> ${req.body.subject}</p>
        <p><b>Message:</b> ${req.body.message}</p>
      `,
    })
    .then(() => {

    }, error => {
      console.error(error);
    });
});

export const api = functions
  .region('europe-west2')
  .https.onRequest(app);
