// firebaseConfig.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCS0x7l9-rEuL4oslKGyeBwXMHjK8vIERs",
  authDomain: "devproja-6528d.firebaseapp.com",
  projectId: "devproja-6528d",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "82286381972",
  appId: "1:82286381972:android:d2bd15a794c98223f19d81",
};

if (!firebase?.apps?.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();