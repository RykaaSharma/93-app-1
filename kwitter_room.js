// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIzvPDvRmEhlpSn6XJ8dHvadfCVrmoiCg",
    authDomain: "activity-3e6f1.firebaseapp.com",
    projectId: "activity-3e6f1",
    storageBucket: "activity-3e6f1.appspot.com",
    messagingSenderId: "682462237915",
    appId: "1:682462237915:web:11bd8aa594ce9fde0428fe",
    measurementId: "G-2QV04HYHGH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
