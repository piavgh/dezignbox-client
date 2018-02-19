import axios from 'axios';

const AuthService = {
    login: (email, password, callback) => {
        setTimeout(() => {
            if (email === 'piavghoang@gmail.com' && password === '123456xx') {
                return callback(null);
            } else {
                return callback(new Error('Invalid email and password'));
            }
        }, 2000);
    }
};

export default AuthService;
