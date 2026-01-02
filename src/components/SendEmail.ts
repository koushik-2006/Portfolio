import { Resend } from "resend";
import { redirect } from 'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 

export const sendEmail = async (formData: FormData) => {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY");
    return {
      error: "Server configuration error: Missing API Key"
    }
  }
  const resend = new Resend(resendApiKey);

  const name = formData.get("name");
  const email = formData.get("email"); // Assuming SenderEmail is now 'email'
  const message = formData.get("message");

  if (!name || !email || !message) {
    return {
      error: "Please fill out all fields",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `koushik.sethuraman6@gmail.com`,
      subject: `${name} From Contact Form.`,
      reply_to: `${email}`,
      text: `sender email: ${email} 
     ${message}`,
    });
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to send email"
    }
  }

  return redirect('/')
};
