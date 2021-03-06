import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost, uploadFile } from "../../service/api";

const useStyle = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}))

const intialValues = {
    title: "",
    description: '',
    picture: "",
    username: 'wdcs',
    categories: 'All',
    createdDate: new Date()
}

const UpdateView = () => {
    const classes = useStyle();

    const navigate = useNavigate();

    const [post, setPost] = useState(intialValues);
    const [file, setFile] = useState('')
    const [image, setImage] = useState('')

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    const { id } = useParams();

    useEffect(() => {
        const getImage = async () => {
            console.log("file", file);
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data)
            }
        }
        getImage();
    }, [file])

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id);
            console.log("data", data);
            setPost(data)
        }
        fetchData()
    }, [])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const updateBlog = async () => {
        await updatePost(id, post)
        console.log("id-----------", id);
        navigate(`/details/${id}`)
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />

            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle fontSize="large" color='action' />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <InputBase
                    placeholder="Title"
                    value={post.title}
                    className={classes.textfield}
                    onChange={(e) => handleChange(e)}
                    name='title'
                />
                <Button variant="contained" color="primary"
                    onClick={() => updateBlog()}>Update</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                value={post.description}
                onChange={(e) => handleChange(e)}
                name='description'
            />
        </Box>
    )
}

export default UpdateView;