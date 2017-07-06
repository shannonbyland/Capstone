const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary');
const Journal = require('../models/journal');
// SAMPLE UPLOAD RESPONSE
// { public_id: 'x702jk1zkeqtbegnad8x',
//   version: 1497123979,
//   signature: 'db3a78947fa1f5479262e0e45d3545cd00aeb8df',
//   width: 3024,
//   height: 4032,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2017-06-10T19:46:19Z',
//   tags: [],
//   bytes: 1850618,
//   type: 'upload',
//   etag: 'd1e76bfbe00b7a8f712b45a6f39f3abf',
//   url: 'http://res.cloudinary.com/journal-love/image/upload/v1497123979/x702jk1zkeqtbegnad8x.jpg',
//   secure_url: 'https://res.cloudinary.com/journal-love/image/upload/v1497123979/x702jk1zkeqtbegnad8x.jpg',
//   original_filename: '475a6eff9982c704269c1180d7e7f807'
// }

// Creating a new journal entry
// const journal = new Journal({ title: 'title', body: 'body', image: uploadResponse.url });
// journal.save(function (err) {
// if(err) {
//   // TODO: handle journal save fail
// } else {
//   res.json({ success: 'image uploaded' });
// }

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
      // TODO: handle image upload error
    });
});

module.exports = router;
