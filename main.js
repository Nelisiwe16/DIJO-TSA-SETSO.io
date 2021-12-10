// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  projectId:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "${xxxxxxxxxxxxxxxxxxxxxxxxxxx}"
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
