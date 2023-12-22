document.addEventListener('blur', function (event) {
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;
  
    if (connectedValidation && message && !isValid) {
      connectedValidation.innerText = message;
    } else {
      connectedValidation.innerText = '';
    }
}, true);


function validate(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
}
