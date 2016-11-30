import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyD1wzSuBF9H63AokjtqFhfOho-PrcvArWI",
    authDomain: "slova-firebase.firebaseapp.com",
    databaseURL: "https://slova-firebase.firebaseio.com",
    storageBucket: "slova-firebase.appspot.com",
    messagingSenderId: "681826621877"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};