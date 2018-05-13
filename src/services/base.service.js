import axios from 'axios';

export default axios.create({
    baseURL: `http://api.evernista.com`
});
