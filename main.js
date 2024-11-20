$(document).ready(function() {
    const nomeTarefa = $('#input-box');
    const botaoSubmit = $('#botao-progresso');

    function inserindoTarefa() {
        botaoSubmit.click(function() {
            const tarefa = nomeTarefa.val().trim();

            if (tarefa) {
                // Adiciona a tarefa à lista se o campo não estiver vazio
                $('#lista-tarefas').append('<li>' + tarefa + '</li>');

                // Limpa o campo de entrada
                nomeTarefa.val('');
            } else {
                // Exibe um alerta informando que o campo de tarefa está vazio
                alert('Por favor, digite uma tarefa antes de adicionar!');
            }
        });
    }

    function marcarConcluida() {
        $(document).on('click', '#lista-tarefas li', function() {
            // Adiciona ou remove a classe "completed" quando o item é clicado
            $(this).toggleClass('completed');
        });
    }

    // Chamando as funções
    inserindoTarefa();
    marcarConcluida();
});



