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
}

database.ref('/employees').on("child_added", function(data) {
   var employee = data.val()
    console.log(employee.EmployeeName)
       var employeeData = $('<tr>')
    var name = $('<td>').text(employee.EmployeeName) 
    var role = $('<td>').text(employee.EmployeeRole) 
    var date = $('<td>').text(employee.EmployeeStartDate) 
    var rate = $('<td>').text(employee.EmployeeRate) 
    var now = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(now)
    // var monthsWorked = $('<td>').text() 
    employeeData.append(name)
    employeeData.append(role)
    employeeData.append(date)
    employeeData.append(rate)
    $('#employeeInfo').append(employeeData)
       
})

$('#submitButton').click(showThings)
})

