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
    }
};

export default AuthService;
