import axios from 'axios';

const AuthService = {
    login: (email, password, callback) => {
        axios.post('/auth/login', {
            email: email,
            password: password
        }).then(function (response) {
            return callback(null, response.data.data);
        }).catch(function (error) {
            return callback(error);
        });
    },

    register: (email, password, callback) => {
        axios.post('/auth/register', {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.data);
            return callback(null, 'OK');
        }).catch(function (error) {
            console.log(error.response.data);
            return callback('Register failed');
        });
    },

    loadUserFromToken: (token, callback) => {
        axios.get('/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            return callback(null, response.data);
        }).catch((err) => {
            console.log(err.response);
            return callback(err.response);
        });
    }
};

export default AuthService;
