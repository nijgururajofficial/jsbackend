import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadOnCloudinary = async (loaclFilePath) => {
  try {
    if (!loaclFilePath) return null;

    //upload the file to cloudinary
    const response = await cloudinary.uploader.upload(loaclFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(loaclFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(loaclFilePath); // remove the locally saved temporary file
    return null;
  }
};

export { uploadOnCloudinary };
