import dbConnect from "@/lib/dbConnection";
import courseApplyModel from "@/models/courseApply.model";
import GmailSmtpEmailing from "@/utils/GmailSmtpEmailing";
import { NextResponse } from "next/server";








export  async function POST(req) {

    try {



        await dbConnect()

        const body = await req.json()

        const { courseApplyId } = body;

        if (!courseApplyId || courseApplyId == "") {
            return NextResponse.json({ success: false, msg: "The id of course is not found" }, { status: 400 })
        }


        let existingCourseApply = await courseApplyModel.findOne({ _id: courseApplyId })
        if (!existingCourseApply) {
            return NextResponse.json({ success: false, msg: "The course on this id is not found" }, { status: 400 })
        }


        let gmailResponse = await GmailSmtpEmailing(existingCourseApply)



        if (!gmailResponse) {
            return NextResponse.json({ success: false, msg: "The email is not successfully send" })
        }



        return NextResponse.json({ success: true, msg: "The email is successfully send" })





    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, error: true, msg: "error from sending email in backend" })
    }

}