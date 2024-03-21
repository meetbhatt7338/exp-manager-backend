const cloundanry = require("cloudinary").v2;

const uploadImage = async (file) => {
  
  cloundanry.config({
    cloud_name: "ddgbku3qp",
    api_key: "798639149473555",
    api_secret: "y9ZKU9pbVEHUEPA7ievQUEFQbjQ",
  });
  
  const result = await cloundanry.uploader.upload(file)
  return result;
  
};
module.exports = {
    uploadImage,
}