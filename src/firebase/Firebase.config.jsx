import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBEzF8AvdrHmtVhCg5ESlnya_iArXNBtZE",
    authDomain: "basic-auth-shamimspro.firebaseapp.com",
    projectId: "basic-auth-shamimspro",
    storageBucket: "basic-auth-shamimspro.appspot.com",
    messagingSenderId: "541750192403",
    appId: "1:541750192403:web:c4a11ec0989b87c15c52e6"
};

const app = initializeApp(firebaseConfig);

export default app;