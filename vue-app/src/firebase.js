import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQ1goPIzRG7_6_jBZnB3DwUmuJb-j2Qls",
    authDomain: "vuegram-92f1e.firebaseapp.com",
    projectId: "vuegram-92f1e",
    storageBucket: "vuegram-92f1e.appetit.com",
    messagingSenderId: "891495208357",
    appId: "1:891495208357:web:9069c84dfb13d6f6b2044c",
    measurementId: "G-NECE7MKM4L"
};
firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

//collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

//export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
};