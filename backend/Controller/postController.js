import Post from '../Schema/post-schema.js';

// const storage = multer.diskStorage({

//     destination: function (req, file, cb) {
//         cb(null, 'uploadImage')
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// })


export const createPost = async (req, res) => {
    try {
        const post = await new Post(req.body)
        post.save()

        res.status(200).json('blog saved successfully');

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllPost = async (req, res) => {
    let username = req.query.username;
    let category = req.query.category;
    let posts;

    try {
        if (username) {
            posts = await Post.find({ username: username });
        }
        else if (category) {
            posts = await Post.find({ categories: category });
        }
        else
            posts = await Post.find({})

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error)
    }
}

export const updatePost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body })

        res.status(200).json('Blog updated successfully');

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deletePost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        await post.delete();

        res.status(200).json('Blog deleted successfully');

    } catch (error) {
        res.status(500).json(error)
    }
}

// export default storage;