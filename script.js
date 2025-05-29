document.addEventListener("DOMContentLoaded", function () {
    const cursos = [
        "Enfermagem",
        "Engenharia Civil",
        "Biomedicina",
        "Análise e Desenvolvimento de Sistemas",
        "Medicina",
        "Tecnologia em Jogos Digitais",
        "Outros"
    ];

    const formContato = document.getElementById("junte-se-a-nos");
    const modal = document.getElementById("modal-sucesso");
    const fecharBtn = document.getElementById("fechar-modal");

    formContato.addEventListener("submit", function (event) {
        event.preventDefault();
        modal.classList.add("mostrar");
        formContato.reset();
    });

    fecharBtn.addEventListener("click", function () {
        modal.classList.remove("mostrar");
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.classList.remove("mostrar");
        }
    });
});
