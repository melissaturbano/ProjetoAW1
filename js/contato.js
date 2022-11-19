/*Codificado por Nicole Miguel */

let nome = document.querySelector("#nome_id");
let sobrenome = document.querySelector("#sobrenome_id");

let dados = {
    nome: nome_id.value,
    sobrenome: sobrenome_id.value
};

$(document).ready(function() {

   $("#form").submit(function() {

    dados = jQuery (this).serialize();

    $.ajax({
        url: 'https://reqres.in/api/users',
        cache: false,
        data: dados,
        type: "POST",
        
        success: function() {
            alert("Obrigada Sr(a) " + nome.value + ", mensagem cadastrada com sucesso!")
        }

    });

    return false;
   });

});




