
// Chiamata API con la chiamata post con il server in comunicazione.

import axios from "axios";
import localPosts from "./posts.json"

/**
 *  Gestione delle chiamate nell'api:
 *  @function handleFetch_Data - gestione della chiamata GET con il server.
 *  @function handlePostParmsposts - gestione della chiamata POST con il server.
 *  @param obj - importazione dello oggetto ottenuto dai valori scritti alla funzione "handlePostParmsposts".
 */


const url_api = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
const local_posts = localPosts;
const object_post_test = {
    author: "Gabriele diStasio",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    id: 910,
    public: true,
    title: "Una Poesia in Latino"
};

async function handleFetch_Data(){
    try {
        const response_data = await axios.get(url_api);
        const data = await response_data.data;
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function handlePostParmsposts(obj) {
    try {
        const data_res = await axios.post(url_api, obj);
        const response_data = data_res.data;
        console.log(response_data);
        return data_res;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export {
    handleFetch_Data,
    local_posts,
    handlePostParmsposts
}