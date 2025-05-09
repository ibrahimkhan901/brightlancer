import mongoose from "mongoose";

// const Mongodb_Uri= 'mongodb://localhost:27017'
const Mongodb_Uri= process.env.MONGODB_URI

if(!Mongodb_Uri){
    throw new Error("The Mongodb uri is not found")
}


let chachedData= {
    connection: null,
    promise:null
}

console.log("Printing the global value in global.mongoose", global.mongoose)

async function dbConnect(){
    if(chachedData.connection){
        return chachedData.connection;
    }

    if(!chachedData.promise){
        const dbConnect= await mongoose.connect(Mongodb_Uri+"/BL-next")
        // console.log(dbConnect)
        chachedData.promise=dbConnect
        chachedData.connection= await chachedData.promise;
        return chachedData.connection;
    }
}



export default dbConnect;