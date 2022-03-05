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
        return await axios.delete(`${URL}/delete/${id}`)
    }
    catch (err) {
        console.log("Error while deletePost API", err)
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${URL}/file/upload`, data)
    }
    catch (err) {
        console.log("Error while uploadFile API", err)
    }
}

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/adduser`, data)
    }
    catch (err) {
        console.log("Error while addUser API", err)
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/loginuser`, data)
    }
    catch (err) {
        console.log("Error while loginuser API", err)
    }
}

export const newComment = async (data) => {
    try {
        return await axios.post(`${URL}/comment/new`, data)
    }
    catch (err) {
        console.log("Error while newComment API", err)
    }
}

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${URL}/comments/${id}`)
        return response.data;
    }
    catch (err) {
        console.log("Error while getComments API", err)
    }
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${URL}/comment/delete/${id}`)
    }
    catch (err) {
        console.log("Error while deleteComment API", err)
    }
}
