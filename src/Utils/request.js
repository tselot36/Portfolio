import axios from "axios";

const USER_API_BASE_URL = process.env.REACT_APP_SEND_EMAIL_BASE_URL ?? "http://localhost:8080/sending-email";
class request {
    createUser(users) {
        return axios.post(USER_API_BASE_URL, users);
    }
}

export default new request();