import axios from "axios";

// since this particular API doesn't require you to be authenticated, then all we need to specify is the base url
// of the api. Other APIs will require you to add headers, auth methods, etc

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    headers:{
        "Authorization": `AIzaSyDWaQcuD2wTryvjSa-beWuoM_oyZOMYuY0` /* access key */
    }
});