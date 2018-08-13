import firebase from 'firebase';
import config from './firebaseCinfig';

const initDataBase = () => {
    firebase.initializeApp(config).then(res => {
        console.log(JSON.stringify(res));
    })
}

const Signup = () => {

}

const Login = () => {

}

export const FirebaseProvider = {
    init: initDataBase,
    signupUser: Signup,
    loginUser: Login
}

