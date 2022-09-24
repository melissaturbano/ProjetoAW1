/*Melissa Turbano*/
function Enviar() {

    var nome = document.getElementById("nome_id");
    var sobrenome = document.getElementById("sobrenome_id");

    if (nome.value != "" && sobrenome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ', sua mensagem foi encaminhada com sucesso.');
    } else {
        alert( "Por favor, preencha seus dados!" );
    }

}
