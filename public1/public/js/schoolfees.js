function d_t(){
    dt=new Date($.now());
}

var firebaseConfig = {
    apiKey: "AIzaSyDG0hh0kfi83_zY0zPihlYK020gGvPv5_w",
    authDomain: "trimurticonventschool.firebaseapp.com",
    projectId: "trimurticonventschool",
    storageBucket: "trimurticonventschool.appspot.com",
    messagingSenderId: "541011944774",
    appId: "1:541011944774:web:8286e955dd856915e0f147",
    measurementId: "G-XYHGZ31ENC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.

      
      

      var user = firebase.auth().currentUser;
      if(user != null){
          var email_id = user.uid;
        //   window.location = 'index.html';
          $('.uid').html('hello');
        //   document.getElementById("user_para").innerHTML = "welcome user : " + email_id
          console.log(email_id);
      }



    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("userlogin_div").style.display = "block";
      
    }
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      window.location="./index.html";
      // ...
    }
  });