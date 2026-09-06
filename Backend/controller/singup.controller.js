import User from "../model/singup.model.js";

export const singupData = async(req,res) =>{
    try {
        const {fullname,email,password,phone}=req.body;
        const user = await User.findOne({email})
        if (user){
            return res.status(400).json({message:"user already exist!"})
        }
        const createUser = new User({
            fullname,
            email,
            password,
            phone
        })
        await createUser.save()
        return res.status(200).json({message:"User created successfully!"});
    } catch (error) {
        return res.status(500).json(error);
    }
}