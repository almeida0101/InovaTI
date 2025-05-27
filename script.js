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
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-cadastro");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_da9p14u", "SEU_TEMPLATE_ID", this)
            .then(function (response) {
                console.log("SUCESSO!", response.status, response.text);
                document.getElementById("modal-sucesso").style.display = "block";
            }, function (error) {
                console.error("FALHA...", error);
                alert("Erro ao enviar. Tente novamente.");
            });
    });

    document.getElementById("fechar-modal").addEventListener("click", function () {
        document.getElementById("modal-sucesso").style.display = "none";
    });
});


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
