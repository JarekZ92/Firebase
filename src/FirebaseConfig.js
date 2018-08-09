import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBiZSfvMUXkOvOS1aj15L7QoWICS4EAyYE",
    authDomain: "jfddl5-messengers.firebaseapp.com",
    databaseURL: "https://jfddl5-messengers.firebaseio.com",
    projectId: "jfddl5-messengers",
    storageBucket: "jfddl5-messengers.appspot.com",
    messagingSenderId: "442694238239"
};

firebase.initializeApp(config);

const database = firebase.database()

export const database = firebase.database()