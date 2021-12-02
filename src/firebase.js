import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAjOKo7Yznw_iq5Ib_QEeKUdHSp_CgLin0",
  authDomain: "todo-list-tutorials.firebaseapp.com",
  databaseURL : "https://todo-list-tutorials-default-rtdb.firebaseio.com/",
  projectId: "todo-list-tutorials",
  storageBucket: "todo-list-tutorials.appspot.com",
  messagingSenderId: "264040337337",
  appId: "1:264040337337:web:193a5ea429ce1bf973f068",
  measurementId: "G-ETB7SBNMWJ"
};

firebase.initializeApp(config);

export default firebase.database();
