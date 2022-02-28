import axios from 'axios';

const URL = 'http://localhost:8000'

export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post)
    }
    catch (err) {
        console.log("Error while createPost API", err)
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${URL}/posts${param}`);
        return response.data;
    }
    catch (err) {
        console.log("Error while getAllPosts API", err)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`)
        console.log('id from api', response.data)
        return response.data;
    }
    catch (err) {
        console.log("Error while getPost API", err)
    }
}

export const updatePost = async (id, post) => {
    try {
        await axios.post(`${URL}/update/${id}`, post)
    }
    catch (err) {
        console.log("Error while updatePost API", err)
    }
}

export const deletePost = async (id) => {
    try {
        await axios.post(`${URL}/delete/${id}`)
    }
    catch (err) {
        console.log("Error while deletePost API", err)
    }
}