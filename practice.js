var firebaseConfig = {
    apiKey: "AIzaSyC08iINJcqXtfl7JhKy1pjOqWo-2s_L36E",
    authDomain: "welcomebot-9nap.firebaseapp.com",
    databaseURL: "https://welcomebot-9nap-default-rtdb.firebaseio.com",
    projectId: "welcomebot-9nap",
    storageBucket: "welcomebot-9nap.appspot.com",
    messagingSenderId: "99115027135",
    appId: "1:99115027135:web:9abf0be5f19dcb85ded40a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Why hello there"
    });
}