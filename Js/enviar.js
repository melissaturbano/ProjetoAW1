/*Codificado por Melissa Turbano e Nicole Miguel*/
function validarEmail () {
    var email = document.getElementById("email_id");
    var destinatario = document.getElementById("destinatario_id");

    if(email == " " || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 && destinatario == " " || destinatario.value.indexOf('@') == -1 || destinatario.value.indexOf('.') == -1 )
     {
        alert( "Por favor, informe um e-mail válido!" );
     } else {
        alert('Sua mensagem foi encaminhada com sucesso.');
     }
}


