import axios from "axios";

export const getPosts = async () => {
    return await axios.get('/posts');
}