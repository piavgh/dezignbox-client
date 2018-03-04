import axios from 'axios';

const AuthService = {
    login: (email, password, callback) => {
        axios.post('/login', {
            email: email,
            password: password
        }).then(function (response) {
            return callback(null, response.data.currentUser);
        }).catch(function (error) {
            return callback('Invalid email and password');
        });
    },

    register: (email, password, callback) => {
        axios.post('/register', {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response.data);
            return callback(null, 'OK');
        }).catch(function (error) {
            console.log(error.response.data);
            return callback('Register failed');
        });
    }
};

export default AuthService;
