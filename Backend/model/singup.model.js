import mongoose from "mongoose";

const signupSchema =mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number
    }
})

const User = mongoose.model('User',signupSchema);
export default User