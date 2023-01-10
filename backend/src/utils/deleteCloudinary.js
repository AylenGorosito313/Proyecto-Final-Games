const cloudinary = require('cloudinary');
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;


cloudinary.config({
    cloud_name: CLOUD_NAME,
    apy_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

