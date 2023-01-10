const cloudinary = require('cloudinary');
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;


cloudinary.config({
    cloud_name: CLOUD_NAME,
    apy_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

const deleteCloudinary = async (req, res) => {
    const { public_id } = req.params;

    try {
        await window.cloudinary.uploader.destroy(public_id);
        res.status(200).send('Delete sucesfully');
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { deleteCloudinary };

