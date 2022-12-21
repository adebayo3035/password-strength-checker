var password = document.getElementById('passwordInput')
var strengthBar = document.getElementById('password_strength')
var strength_text = document.getElementById('strength_text')
let uppercase_checkbox = document.getElementById('uppercase')
let lowercase_checkbox = document.getElementById('lowercase')
let number_checkbox = document.getElementById('numbers')
let specialChar_checkbox = document.getElementById('special_char')
/**
    * Strong password values
    */
let strong_pass = {
    lowerCase: 8,
    upperCase: 3,
    digits: 2,
    symbols: 2,
}
 
/**
    * medium_password
    */
let medium_pass = {
    lowerCase: 5,
    upperCase: 1,
    digits: 1,
    symbols: 1,
}
 
/**
    * Patterns
    */
var lowerCase = /[a-z]/g;
var upperCases = /[A-Z]/g;
var digits = /[0-9]/g;
var symbols = /[^a-zA-Z-0-9]/g;

function submitCard(){
    var pass = password.value;
    var lc_len = (pass.match(lowerCase) || []).length;
    var uc_len = (pass.match(upperCases) || []).length;
    var d_len = (pass.match(digits) || []).length;
    var sym_len = (pass.match(symbols) || []).length;
    if(lc_len >= strong_pass.lowerCase && uc_len >= strong_pass.upperCase && d_len >= strong_pass.digits && sym_len >= strong_pass.symbols){
        // Password is strong
        // strength = 100;
        strength_text.textContent = "Password is Strong!!!";
        strengthBar.style.background = "purple"
        strengthBar.value ="100"
    }
    else if(lc_len >= medium_pass.lowerCase && uc_len >= medium_pass.upperCase && d_len >= medium_pass.digits && sym_len >= medium_pass.symbols){
        strength_text.textContent = "Password is Not Strong Enough!!!";
        strengthBar.style.background = "royalblue"
        strengthBar.value ="67"
    }
    else if(pass.length > 0){
        strength_text.textContent = "Password is Weak!!!";
        strengthBar.style.background = "#f23"
        strengthBar.value ="33.3"
    }
    else{
        strength_text.innerHtml = "";
        strengthBar.style.backgroundColor = "transparent"
        strengthBar.value ="0"
    }
    
    // CHANGE COLOR OF PROGRESS bar
    if(strengthBar.value === 0){
        strengthBar.style.background = 'transparent'
    
    }
    else if(strengthBar.value === 33.3){
        strengthBar.classList.add('red-progress')
    }
    else if(strengthBar.value === 67){
        strengthBar.classList.add('blue-progress')
    }
    else if(strengthBar.value === 100){
        strengthBar.classList.add('green-progress')
    }

    //Checkbox Controller
    if(lc_len >= strong_pass.lowerCase || lc_len >= medium_pass.lowerCase){
        lowercase_checkbox.checked = true
    }
    else{
        lowercase_checkbox.checked = false
    }

    //UpperCase Controller
    if(uc_len >= strong_pass.upperCase || uc_len >= medium_pass.upperCase){
        uppercase_checkbox.checked = true
    }
    else{
        uppercase_checkbox.checked = false
    }

    // nUMBERS CONTROLLER
    if(d_len >= strong_pass.digits || d_len >= medium_pass.digits){
        number_checkbox.checked = true
    }
    else{
        number_checkbox.checked = false
    }
    //Special Characters Controller
    if(sym_len >= strong_pass.symbols || sym_len >= medium_pass.symbols){
        specialChar_checkbox.checked = true
    }
    else{
        specialChar_checkbox.checked = false
    }


}
 
 