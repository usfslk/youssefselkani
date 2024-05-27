import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBUbenpSV8Ya6XQ_TEEby_1up_U9sOkPbo",
    authDomain: "chord-gen.firebaseapp.com",
    databaseURL: "https://chord-gen-default-rtdb.firebaseio.com",
    projectId: "chord-gen",
    storageBucket: "chord-gen.appspot.com",
    messagingSenderId: "1043789398457",
    appId: "1:1043789398457:web:f5dc0b6a85747fd44bf668"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase app
export const database = getDatabase(app); 