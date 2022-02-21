var step1Container = $('#StepOneContainer');
var step2Container = $('#StepTwoContainer');
var step3Container = $('#StepThreeContainer');
var successContainer = $('#SuccessContainer');

var firstName = $('#first_name');
var lastName = $('#last_name');
var email = $('#email');
var contact = $('#contact');
var city = $('#city');
var country = $('#country');
var program = $('#select_program');
var message = $('#message');
console.log(program.find(":selected").val());

var nextStep1 = $('#StepOneNext');
var nextStep2 = $('#StepTwoNext');
var submitStep3 = $('#StepThreeSubmit');

var prevStep2 = $('#StepTwoPrevious');
var prevStep3 = $('#StepThreePrevious');

var firstNameErr = $('#first_name_error');
var lastNameErr = $('#last_name_error');
var emailErr = $('#email_error');
var contactErr = $('#contact_error');
var cityErr = $('#city_error');
var countryErr = $('#country_error');
var programErr = $('#select_program_error');
var messageErr = $('#message_error');

var errorStep1 = 0;

function step1Validate(){

    var errorCode = 0;

    var pattern = /^[a-zA-Z]{3,8}$/;
    var valid = pattern.test(firstName.val());
    if (valid){
        firstNameErr.css('display', 'none');
    }
    else{
        firstNameErr.css('display', 'block');
        errorCode = 1;
    }

    valid = pattern.test(lastName.val());
    if (valid){
        lastNameErr.css('display', 'none');
    }
    else{
        lastNameErr.css('display', 'block');
        errorCode = 1;
    }

    pattern = /^[\w]+@(gmail.com|ymail.com|yahoo.com)$/;
    valid = pattern.test(email.val());
    if (valid){
        emailErr.css('display', 'none');
    }
    else{
        emailErr.css('display', 'block');
        errorCode = 1;
    }

    if(errorCode == 0){
        return true;
    }else {
        return false;
    }
}

function step2Validate(){
    var errorCode = 0;

    // Contact validation
    var pattern = /^\+?[\w]{9,14}$/;
    var valid = pattern.test(contact.val());
    if (valid){
        contactErr.css('display', 'none');
    }
    else{
        contactErr.css('display', 'block');
        errorCode = 1;
    }

    // City validation
    pattern = /^[a-zA-Z]{3,15}$/;
    valid = pattern.test(city.val());
    if (valid){
        cityErr.css('display', 'none');
    }
    else{
        cityErr.css('display', 'block');
        errorCode = 1;
    }

    // Country validation
    valid = pattern.test(country.val());
    if (valid){
        countryErr.css('display', 'none');
    }
    else{
        countryErr.css('display', 'block');
        errorCode = 1;
    }

    if (errorCode){
        return false;
    }else{
        return true;
    }
}

function step3Validate(){
    var errorCode = 0;
    console.log(program.find(":selected").val())
    
    // Program validation
    if (program.find(":selected").val() == ""){
        errorCode = 1;
        programErr.css('display', 'block');
    }
    else{
        programErr.css('display', 'none');
    }

    // Message validation
    var pattern = /^[\w]{1,60}$/;
    var valid = pattern.test(message.val());
    if (valid){
        messageErr.css('display', 'none');
    }
    else{
        messageErr.css('display', 'block');
        errorCode = 1;
    }

    if (errorCode){
        return false;
    }else{
        return true;
    }
}

nextStep1.on({
    'click': function () {

        if(step1Validate()){
            step1Container.css('display', 'none');
            step2Container.css('display', 'block');
            step3Container.css('display', 'none');
        }

        return false;
    }
});

nextStep2.on({
    'click': function () {
        if(step2Validate()){
            step1Container.css('display', 'none');
            step2Container.css('display', 'none');
            step3Container.css('display', 'block');
        }
        return false;
    }
});

prevStep2.on({
    'click': function () {
        step1Container.css('display', 'block');
        step2Container.css('display', 'none');
        step3Container.css('display', 'none');
        return false;
    }
});

prevStep3.on({
    'click': function () {
        step1Container.css('display', 'none');
        step2Container.css('display', 'block');
        step3Container.css('display', 'none');
        return false;
    }
});

submitStep3.on({
    'click': function (){
        if(step3Validate()){
            successContainer.css('display', 'block');
            return false;
        }
        else{
            return false;
        }
    }
});


