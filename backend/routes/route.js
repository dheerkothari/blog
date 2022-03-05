import express from 'express';

import multer from 'multer';

// const upload = multer({ dest: 'uploadImage/' })
const upload = multer({ storage: storage })


import { createPost, getAllPost, getPost, updatePost, deletePost } from '../Controller/postController.js';
import storage, { uploadImage, getImage } from '../Controller/image-controller.js'
import { addUser, loginUser } from '../Controller/user-controller.js';
import { newComment, getComments, deleteComment } from '../Controller/comment-controller.js';
// import upload from '../utils/upload.js'

const router = express.Router();

router.post('/create', createPost)

router.get('/posts', getAllPost)
router.get('/post/:id', getPost)

router.post('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)

router.post('/file/upload', upload.single('file'), uploadImage)
// router.get('/file/:filename', getImage);

router.post('/adduser', addUser)
router.post('/loginuser', loginUser)

router.post('/comment/new', newComment)
router.get('/comments/:id', getComments)
router.delete('/comment/delete/:id', deleteComment)

export default router;