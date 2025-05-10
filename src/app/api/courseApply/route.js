import dbConnect from '@/lib/dbConnection.js';
import CourseApplyModel from '@/models/courseApply.model.js';
import { coursesDataArray } from '@/utils/CoursesDataArray.js';
import { z } from 'zod';
import { Resend } from 'resend';
import { generateEmailTemplate } from '@/utils/emailTemplate';
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server';
import GmailSmtpEmailing from '@/utils/GmailSmtpEmailing';
import ResendEmailing from '@/utils/ResendEmailing';

// Todos

// make file for courseApplySchema of zod in separate file
// make resend in separate file
// make nodemailer config and code in separate file





console.log(process.env.Resend_Api_key)
const resend = new Resend(process.env.Resend_Api_key);




const CourseApplySchema = z.object({
  username: z.string().min(3).max(30),
  fatherName: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(8).max(20),
//   phoneNo: z.number().min(10).max(13),
  gender: z.enum(["male", "female"]),
  country: z.string(),
  city: z.string(),
//   fullAddress: z.string().min(10).max(50),
  refferedBy: z.string().min(3).max(20),
  agreeOrNot: z.union([z.literal("true"), z.literal(true)]),
  courseId: z.string()
});






// // shift the user and key to env later
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "ikkhan007m@gmail.com",
//     pass: "qivu psqx gmap mtyc",
//   },
// });





export async function POST(req) {


  await dbConnect();



  const body = await req.json();


  const parseResult = CourseApplySchema.safeParse(body);
  if (!parseResult.success) {
    return Response.json({ error: true, ErrorReason: parseResult.error.errors }, { status: 400 });
  }






  const {
    username, fatherName, cnicNo, email, password, phoneNo,
    gender, country, city, fullAddress, refferedBy, agreeOrNot, courseId
  } = body;





  const presentCourse = coursesDataArray.find(item => item.id == courseId);

  if (!presentCourse) {
    return Response.json({ success: false, msg: "Course not found" }, { status: 400 });
  }



// check that is course is present on numbher or not

//   const existing = await CourseApplyModel.findOne({ phoneNo });
//   if (existing) {
//     return Response.json({ success: false, msg: "Course already applied on this phoneNo" }, { status: 409 });
//   }






  const newApply = await CourseApplyModel.create({
    username, fatherName, cnicNo, email, phoneNo, password,
    gender, country, city, fullAddress, refferedBy, seenByAdminStatus: false,
    AppliedCourse: {
      courseId: presentCourse.id,
      courseName: presentCourse.courseName,
      coursePrice: presentCourse.coursePrice
    }
  });






  return NextResponse.json({success:true , msg:"The Apply for course is registered", courseApplyData:newApply})







// resend want tha domain so we for now neglect it 

  // try {


  //   let ResendEmailingResponse= await ResendEmailing(username, email, presentCourse)

  //   if(!ResendEmailingResponse?.data){
  //       return Response.json({success:false, reason:"Email is not send successfully"})
  //   }

  //   return Response.json({ success: true, data: emailResp }, { status: 201 });




  // } catch (error) {
  //   console.log(error)
  //   return Response.json({ success: false, msg: "User created, but email failed", error }, { status: 500 });
  // }






// Gmail SMTP email system

// const GmailSmtpEmailingResponse= await GmailSmtpEmailing(username,email,presentCourse)

// if(!GmailSmtpEmailingResponse){
//   return NextResponse.json({success:false, message:"email is failed"})
// }








// return NextResponse.json({success:true, message:"Email is successfuly send to user", GmailSmtpEmailingResponse})








}
