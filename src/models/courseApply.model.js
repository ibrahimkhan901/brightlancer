import mongoose, { Schema } from "mongoose";




const courseApplySchema= new Schema({
    courseId:{
        type:String
    },
    username:{
        type:String,
        require:true
    },
    fatherName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    phoneNo:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        Enumerator:["male", "female"]
    },
    cnicNo:{
        type:Number,
        require:true
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    province:{
        type:String
    },
    refferedBy:{
        type:String
    },
    agreeOrNot:{
        type:String
    },
    AppliedCourse:{
        courseId:{
            type:String
        },
        courseName:{
            type:String
        },
        coursePrice:{
            type:String
        }
    },
    seenByAdminStatus:{
        type:String,
        default:false
    }
},
{
    timestamps:true
}
)



export default mongoose.models.courseApply || mongoose.model("courseApply", courseApplySchema)