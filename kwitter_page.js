//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBTJ1-05wYRXKT7AaYBxjJuTxexvAUCEyU",
      authDomain: "kwitterkeshav.firebaseapp.com",
      databaseURL: "https://kwitterkeshav-default-rtdb.firebaseio.com",
      projectId: "kwitterkeshav",
      storageBucket: "kwitterkeshav.appspot.com",
      messagingSenderId: "732604448238",
      appId: "1:732604448238:web:a0f0296f517ffdb285a2ff"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
