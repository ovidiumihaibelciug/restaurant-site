import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAxsHvN9RUgPi9h-MwOvLhuWAjIysBwJo",
    authDomain: "restaurant-1526195458616.firebaseapp.com",
    databaseURL: "https://restaurant-1526195458616.firebaseio.com",
    projectId: "restaurant-1526195458616",
    storageBucket: "restaurant-1526195458616.appspot.com",
    messagingSenderId: "544927375599"
};

firebase.initializeApp(config);

export default firebase;