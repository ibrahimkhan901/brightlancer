import { generateEmailTemplate } from "./emailTemplate";




export default async function ResendEmailing(username,email, presentCourse){



    const html = generateEmailTemplate(username, presentCourse);

    const emailResp = await resend.emails.send({
      from: 'Brightlancers <onboarding@resend.dev>',
      to: email,
      subject:"Course subscription payment",
      html,
    });

    return emailResp;


}