import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC--rwZZfF2d5p6DUjaFJ_EAJwrQC75TmQ",
  authDomain: "deverest-app.firebaseapp.com",
  databaseURL: "https://deverest-app.firebaseio.com",
  projectId: "deverest-app",
  storageBucket: "",
  messagingSenderId: "193523676923"
};

export default () => {
  firebase.initializeApp(config);
}