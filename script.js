$(document).ready(function (){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
            },
            textarea: {
                required: true,
            },

        },
        messages: {
            nome: '<span class="error">Campo obrigatório*</span>',
            email: '<span class="error">Campo obrigatório*</span>',
            textarea: '<span class="error">Campo obrigatório*</span>',
        },

        

    });
})