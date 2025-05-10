import { generateEmailTemplate } from "./emailTemplate";
import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";








const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ikkhan007m@gmail.com",
      pass: "qivu psqx gmap mtyc",
    },
  });









export default async function GmailSmtpEmailing(courseApplyData){

    


try {


    const html = generateEmailTemplate(courseApplyData);
    
    const gmailSendingRes=await transporter.sendMail({
      from: "ikkhan007m@gmail.com",
      to:courseApplyData.email,
      subject:"Brightlancer Course subscription",
      html,
    });
  
    return gmailSendingRes;
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
  
  




}