import Banner from "../model/banner.model.js"

export const getBanner = async(req,res) =>{
    try {
        const banner = await Banner.find()
        res.status(200).json(banner)
    } catch (error) {
        res.status(500).json(error)
    }
}