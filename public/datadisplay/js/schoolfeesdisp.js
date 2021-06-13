function d_t(){
    dt=new Date($.now());
 }
 var currentdate = new Date(); 
                datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


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
         d_t();
           User_ID = user.uid;
           Email_ID = user.email;
           date = dt;
         //   window.location = 'index.html';
           $('.uid').html('hello');
         //   document.getElementById("user_para").innerHTML = "welcome user : " + email_id

           email_id = User_ID;
           email_ID = Email_ID;
         //   firebase.database().ref('LoginRecord/'+email_id+'/Date/'+date).set({
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
//    function SelectAllData(){
//        firebase.database().ref('schoolfees/Mon Jan 25 2021 18:57:54 GMT+0530 (India Standard Time)/v33lu7yPBRXPz89GW52TQzExceg2').once('value',
//        function(AllRecords){
//            AllRecords.forEach(
//                function(CurrentRecord){
//                    var FirstName = CurrentRecord.val().Name;
//                    var LastName = CurrentRecord.val().Surname;
//                    var Class = CurrentRecord.val().Class;
//                    var Medium = CurrentRecord.val().Medium;
//                    var Amount = CurrentRecord.val().Amount;
//                    var Date = CurrentRecord.val().Date;
//                    var EntryPerson = CurrentRecord.val().EntryPerson;
//                    var Remark = CurrentRecord.val().Remark;
//                    AddItemsToTable(FirstName , LastName ,Class ,Medium , Amount , Date , EntryPerson, Remark);
//                }
//            )
//        })
//    }
//    window.onload = SelectAllData;

//    var stdNo = 0;
//    function AddItemsToTable(FirstName , LastName ,Class ,Medium , Amount , Date , EntryPerson, Remark){
//        var tbody = document.getElementById('tbody1');
//        var trow =document.createElement('tr');
//        var td1 =document.createElement('td');
//        var td2 =document.createElement('td');
//        var td3 =document.createElement('td');
//        var td4 =document.createElement('td');
//        var td5 =document.createElement('td');
//        var td6 =document.createElement('td');
//        var td7 =document.createElement('td');
//        var td8 =document.createElement('td');
//        var td9 =document.createElement('td');
//        td1.innerHTML=++stdNo;
//        td2.innerHTML= FirstName;
//        td3.innerHTML= LastName;
//        td4.innerHTML= Class;
//        td5.innerHTML= Medium;
//        td6.innerHTML= Amount;
//        td7.innerHTML= Date;
//        td8.innerHTML= EntryPerson;
//        td9.innerHTML= Remark;

//        trow.appendChild(td1);
//        trow.appendChild(td2);
//        trow.appendChild(td3);
//        trow.appendChild(td4);
//        trow.appendChild(td5);
//        trow.appendChild(td6);
//        trow.appendChild(td7);
//        trow.appendChild(td8);
//        trow.appendChild(td9);
//        tbody.appendChild(trow);
//    }

   var templateString = "";

  // Retrieve new posts as they are added to our database
  function getdata(){
  var playersRef = firebase.database().ref("schoolfees/");
      playersRef.on("child_added", function(data) {
      var mokData = [data.val()] ;
      console.log(mokData);
      $.each(mokData, function (i) {
        templateString = '<tr> <th scope="row">*</th> <td>'+mokData[i].Name+'</td> <td>'+mokData[i].Surname+'</td> <td>'+mokData[i].Class+'</td> <td>'+mokData[i].Medium+'</td> <td>'+mokData[i].Amount+'</td> <td>'+mokData[i].Date+'</td> <td>'+mokData[i].EntryPerson+'</td> <td>'+mokData[i].Remark+'</td> </tr>';
        $('#tbody1').append(templateString);
          })
      });
  }
  getdata();

  function totalt(){
    $(document).ready(function() {
      $('table thead th').each(function(i=4) {
          calculateColumn(i=4);
      });
  });
  
  function calculateColumn(index) {
      var totalSum = 0;
      $('table tr').each(function() {
          var value = parseInt($('td', this).eq(index).text());
          if (!isNaN(value)) {
              totalSum += value;
          }
      });
      $('table tfoot td').eq(index).text('Total Amount: ' + totalSum);
  }
  }
   
 
 
 
   firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/firebase.User
       var uid = user.uid;
       // ...
     } else {
       // User is signed out
       window.location="../index.html";
       // ...
     }
   });
