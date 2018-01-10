import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDeHXreyUZL4Oy09_LCwD6AtAo12o-Kvjo",
  authDomain: "awesome-project-dev.firebaseapp.com",
  databaseURL: "https://awesome-project-dev.firebaseio.com",
  projectId: "awesome-project-dev",
  storageBucket: "",
  messagingSenderId: "101058552026"
};

export default () => {
  firebase.initializeApp(config);
}