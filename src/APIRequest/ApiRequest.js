import axios from "axios";

const BASE_URL = 'https://basic-blog.teamrabbil.com/api';



export const postCategory = async () => {
      let response = await axios.get(BASE_URL+"/post-categories");
        if (response.status === 200) {
            return response.data;
        }
        else {
            return [];
        }
}