const { Admin } = require("../models/admin")
const { Banner } = require("../models/banner")



const createBanner = async (req, res) => {
    const { adminId } = req.query
    const bannerInfo = req.body 
    
    try {

        let searchAdmin = await Admin.findByPk(adminId)

        if(searchAdmin){
            console.log("ENTROOO")
            let banner = await Banner.create(bannerInfo)
            searchAdmin.addBanner(banner)
            return res.status(200).json('Banner created')
        }

       
        
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
        
    }
}

const getAllBanner = async (req, res) => {
    try {
        
        let allBanner = await Banner.findAll()
        return res.status(200).json(allBanner)

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
        
    }
}

const deleteBanner = async (req, res) => {
    const { id } = req.query

    try {
        let searchBanner = await Banner.findByPk(id)
        searchBanner.destroy()
        return res.status(200).json('Deleted successful')
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

module.exports = { createBanner, getAllBanner, deleteBanner }