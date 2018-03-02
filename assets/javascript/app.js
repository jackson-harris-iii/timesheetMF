$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDcy3WxCDC1Biy5PTv1ILvMSSlbJM1iVkw",
        authDomain: "timesheetmf.firebaseapp.com",
        databaseURL: "https://timesheetmf.firebaseio.com",
        projectId: "timesheetmf",
        storageBucket: "",
        messagingSenderId: "274605900626"
    };
    firebase.initializeApp(config);

    console.log('ready')

    // Data Picker Initialization
    $(function () {
        $('#datetimepicker1').datetimepicker();
    });

    // Data Picker Initialization
    $('.datepicker').pickadate();

})

