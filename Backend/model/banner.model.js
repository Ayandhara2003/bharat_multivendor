import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
    image:String
})

const Banner = mongoose.model("Banner",bannerSchema)

export default Banner;