import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDagC5Og2vmqTt5wGT5u5WyMv19m5YeiuQ",
    authDomain: "fir-sndbox.firebaseapp.com",
    databaseURL: "https://fir-sndbox.firebaseio.com",
    projectId: "fir-sndbox",
    storageBucket: "fir-sndbox.appspot.com",
    messagingSenderId: "273741848287"
};

firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()