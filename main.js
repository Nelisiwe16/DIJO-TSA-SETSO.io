// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClkWakhOw8T9ht_KSmFD2nO-1lf5Lxvmk",
  authDomain: "dijo-tsa-setso-online-store.firebaseapp.com",
  projectId: "dijo-tsa-setso-online-store",
  storageBucket: "dijo-tsa-setso-online-store.appspot.com",
  messagingSenderId: "529174844553",
  appId: "1:529174844553:web:bd61901642c3fcf98aa258",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get values
var name = getInputVal('name');
var surname= getInputVal('surname') 
var email = getInputVal('email')
var phone = getInputVal("phone ")
var message= getInputVal('message') 

// save message
saveMessage(name, surname, email, phone, message);

//Show alert
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display= 'none';
},3000);

//Clear form
document.getElementsById('contactform').reset();

// Function to get form values
function getInputVal(id){
    return document.getElementsById(id).value;
}

//Save message to firebase
function saveMessage(name, surname, email, phone, message){
    var newMessageRef =messageRef.push();
    newMessageRef.  set ({
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        message: message,
    });
}
