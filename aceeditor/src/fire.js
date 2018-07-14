import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBEkukXOdM0TqwDfwZdInjw7JCNhVJUsxY",
    authDomain: "aceeditor-f3e88.firebaseapp.com",
    databaseURL: "https://aceeditor-f3e88.firebaseio.com",
    projectId: "aceeditor-f3e88",
    storageBucket: "",
    messagingSenderId: "243916118918"
  };
   var fire = firebase.initializeApp(config);
export default fire;