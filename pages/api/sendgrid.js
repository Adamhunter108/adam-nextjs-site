import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body)
    await sendgrid.send({
      to: "adamhunter928@gmail.com",
      from: "hello@adamhunter.website",
      subject: `${req.body.subject}`,
      html: `<div>
      <h3>${req.body.fullname}, ${req.body.email}, just sent a message from the contact form on your website.</h3>
      <p>Message:</p>
      <p>${req.body.message}</p>
      </div>`,
    })
  } catch (error) {
    // console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: "" })
}

