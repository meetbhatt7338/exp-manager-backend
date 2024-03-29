const multer = require('multer');
const path = require('path');
const cloudnaryController = require('../utils/UploadFileCloundinary');
const serviceSchema = require('../models/ProfilePicModel');



const getimageByuser = async(req, res) => {

    const allService = await serviceSchema.find({user:req.params.id});
    res.status(200).json({
        message: "All services",
        data: allService
    })



}



const storage = multer.diskStorage({
    //destination:"./uploads",
    filename: function(req, file, cb){
        //cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);
    }    
})

const upload  = multer({
    storage: storage,
    limits:{fileSize: 1000000},

}).single('myProfile');


const fileUpload = async(req, res) => {

        
        upload(req,res,async(err)=>{
            // console.log(err)
            if(err){
                res.status(500).json({
                    message: "Error uploading file"
                })
            }
            else{
                if(req.file == undefined){
                    res.status(400).json({
                        message: "No file selected"
                    })
                }
                else{
                    // console.log('ghg',req.file.path);
                    const result = await cloudnaryController.uploadImage(req.file.path);
                    // console.log("upload coontroller....",result);
                    // console.log("upload coontroller....",result.secure_url);
                    //console.log(req.body)
                    const serviceObj = {
                        user:req.params.id,
                        profilImgeUrl: result.secure_url
                    }
                    const savedService = await serviceSchema.create(serviceObj);
                    //if else...
                    res.status(200).json({
                        message: "File uploaded",
                        data: savedService
                        
                    })
                }
            }
        })

}
module.exports = {
    fileUpload,
    getimageByuser
}