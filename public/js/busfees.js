var dt = "";
function d_t(){
  dt = new Date(); 
                datetime = dt.getDate() + "/"
                + (dt.getMonth()+1)  + "/" 
                + dt.getFullYear() + " @ "  
                + dt.getHours() + ":"  
                + dt.getMinutes() + ":" 
                + dt.getSeconds();
                console.log(dt);
}
d_t();
  var email_id="";
  var email_ID ="";
  var date ="";
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
          User_ID = user.uid;
          Email_ID = user.email;
          date = dt;
        //   window.location = 'index.html';
          $('.uid').html('hello');
        //   document.getElementById("user_para").innerHTML = "welcome user : " + email_id
          email_id = User_ID;
          email_ID = Email_ID;
        //   firebase.database().ref('schoolfees/'+date+'/user/'+email_id).set({
        //     EmailID:email_ID,
        //     UserId:email_id,
        //     Date: date
  
        // });
  
      }
  
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("userlogin_div").style.display = "block";
      
    }
  });
   function logout(){
     firebase.auth().signOut().then(() => {
       // Sign-out successful.
     }).catch((error) => {
       // An error happened.
     });
   }
   var nameV, fathernameV , dclassV, mediumV, busV, amountV,remarkV,date;
    function Ready(){
        nameV = document.getElementById('namebox').value;
        fathernameV = document.getElementById('fathersnamebox').value;
        dclassV = document.getElementById('dclass').value;
        mediumV = document.getElementById('medium').value;
        busV = document.getElementById('dbus').value;
        amountV = document.getElementById('amount').value;
        remarkV = document.getElementById('remark').value;
        date = datetime;
      }
      document.getElementById('insert').onclick = function(){
        document.getElementById('insert').style.display="none";
        Ready();
        if(nameV!=""&&fathernameV!=""&&dclassV!=""&&mediumV!=""&&busV!=""&&amountV!=""&&remarkV!=""){
          firebase.database().ref('BusFees/'+dt).set({
            Name: nameV,
            FathersName: fathernameV,
            Date: date,
            Class: dclassV,
            Medium: mediumV,
            Bus: busV,
            Amount: amountV,
            Remark: remarkV,
            EntryPerson: email_ID,
            UserID: email_id
        }, (error) => {
          if (error) {
            // The write failed...
          } else {
            document.getElementById("billname").innerHTML = nameV;
            document.getElementById("billfname").innerHTML = fathernameV;
            document.getElementById("billclass").innerHTML = dclassV;
            document.getElementById("billbus").innerHTML = busV;
            document.getElementById("billamount").innerHTML = amountV;
            document.getElementById("billremark").innerHTML = remarkV;
            document.getElementById("billdate").innerHTML = date;
            document.getElementById("showp").style.display="block";
            document.getElementById("hidep").style.display="none";
            document.getElementById('nav').style.display="none";

            // Data saved successfully!
            // window.location="./home.html";
          }
        });
        }
        else{
          alert("Please Fill all the fields");
          document.getElementById('insert').style.display="block";

        }
        // firebase.database().ref('BusFees/'+dt).set({
        //     Name: nameV,
        //     FathersName: fathernameV,
        //     Date: date,
        //     Class: dclassV,
        //     Medium: mediumV,
        //     Bus: busV,
        //     Amount: amountV,
        //     Remark: remarkV,
        //     EntryPerson: email_ID,
        //     UserID: email_id
        // });
    
      }
      document.getElementById('printbtn').onclick = function(){
        document.getElementById('printbtn').style.display="none";
        document.getElementById('rotate_logo').style.display="none";

        // var printContents = document.getElementById('showp').innerHTML;
        // var originalContents = document.body.innerHTML;

        // document.body.innerHTML = printContents;

        window.print();

        // document.body.innerHTML = originalContents;
        document.getElementById('close').style.display="block";
            }


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