// import express from 'express';
// import mongoose from 'mongoose';

import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'

const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/Blog',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"]

        if (match.indexOf(file.mimeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

// const router = express.Router();
// const uploadImage = multer({ dest: 'uploadImage/' })

// router.post("/file", upload.single('file'), (req, res, next) => {
//     console.log(req.file)
//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//     })
// })

export default multer({ storage });
