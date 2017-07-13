const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary');
const Journal = require('../models/journal');

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const router = new express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  cloudinary.uploader.upload(req.file.path)
    .then( uploadResponse => {
      return res.json({ "url": uploadResponse.url });
    })
    .catch(function(err){
        return res.json(err);
    });
});

module.exports = router;
