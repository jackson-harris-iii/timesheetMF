$(document).ready(function () {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfkQhjkTP4ZxnEYEORgDtswEFzXDFmfRM",
    authDomain: "timesheetmf-7e794.firebaseapp.com",
    databaseURL: "https://timesheetmf-7e794.firebaseio.com",
    projectId: "timesheetmf-7e794",
    storageBucket: "",
    messagingSenderId: "60738281119"
};
firebase.initializeApp(config);

var database = firebase.database();


function showThings() {
    var name = $('#EmployeeName').val().trim()
    var role = $('#role').val().trim()
    var startDate = $('#startDate').val().trim()
    var monthlyRate = $('#monthlyRate').val().trim()    
    
    database.ref('/employees').push({
        EmployeeName: name,
        EmployeeRole: role,
        EmployeeStartDate: startDate,
        EmployeeRate: monthlyRate
        
    });

    console.log(name)    
}

// database.ref().on("value", function(snapshot) {
//     if (snapshot.child("").exists() && snapshot.child("highPrice").exists()) {

//         // Set the variables for highBidder/highPrice equal to the stored values in firebase.
//         highPrice = snapshot.child('highBidder')
//         highBidder = snapshot.child('highPrice')


//         // Change the HTML to reflect the stored values
//         $('#highest-bidder').text(highBidder)
//         $('#highest-price').text(highPrice)

// })

$('#submitButton').click(showThings)
})

