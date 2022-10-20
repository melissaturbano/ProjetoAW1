/*Codificado por Nicole Miguel*/
function validarEmail () {
    var email = document.getElementById("email_id");

    if(email == " " || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 )
     {
        alert( "Por favor, informe um e-mail válido!" );
        return false;
     }
}
