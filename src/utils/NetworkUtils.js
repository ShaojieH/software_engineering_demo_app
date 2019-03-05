//getUserInfo(url)
import axios from 'axios';
const post = (path) => (data) => {
    axios.post(path, data)
    .then(data => {return JSON.parse(data)})
    .catch(error => console.log(error))
};

