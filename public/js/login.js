var email_id = ""

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
          email_id = user.uid;
          window.location = 'loading.html';
          $('.uid').html('hello');
        //   document.getElementById("user_para").innerHTML = "welcome user : " + email_id
          
      }



    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("userlogin_div").style.display = "block";
      
    }
  });


  var email="";
  var password="";

  function ready(){
      email = document.getElementById('emailbox').value;
      password = document.getElementById('passwordbox').value;

  }

  function signup(){
    alert("You are not allowed to perform this action");
    window.location="./index.html";
    // ready();
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((user) => {
    //     window.alert("Thanks! for signup");
    //     window.location = "./index.html";
    //   // Signed in 
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   alert("Sign Up Failed");
    //   // ..
    // });
  }


  function login(){
    ready()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        window.location = "./loading.html";
      // Signed in 
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("failed");
    });
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });