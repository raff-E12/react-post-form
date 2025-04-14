
// Chiamata API con la chiamata post con il server in comunicazione.

import axios from "axios";
import localPosts from "./posts.json"

const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
const local_posts = localPosts;

async function handleFetch_Data(){
    try {
        const response_data = await axios.get(url);
        const data = response_data.data;
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export {
    handleFetch_Data,
    localPosts
}