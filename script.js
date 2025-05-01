document.addEventListener("DOMContentLoaded", function() {
    const cursos = [
        "Administração",
        "Ciência da Computação",
        "Engenharia Civil",
        "Psicologia",
        "Direito"
    ];


    const formContato = document.getElementById("junte-se-a-nos");
    formContato.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
        formContato.reset();
    });
});