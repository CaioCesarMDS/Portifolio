const disabledButtons = document.querySelectorAll("#disabled");

disabledButtons.forEach((disabledButton) => {
    disabledButton.onclick = (e) => {
        e.preventDefault();
        swal({
            title: "Sinto muito!",
            text: "Esse projeto não está disponível no momento!",
            icon: "error",
            button: {
                text: "OK",
                className: "button-alert-color",
            },
        });
    };
});

function sendMailSuccess() {
    swal({
        title: "Sucesso!",
        text: "Mensagem enviada com sucesso!",
        icon: "success",
        button: {
            text: "OK",
            className: "button-alert-color",
        },
    });
}

function sendMailError(error) {
    swal({
        title: "Erro!",
        text: `Erro, ao enviar e-mail! ${error}`,
        icon: "error",
        button: {
            text: "OK",
            className: "button-alert-color",
        },
    });
}

function emptyFieldsError() {
    swal({
        title: "Erro!",
        text: "Preencha todos os campos!",
        icon: "error",
        button: {
            text: "OK",
            className: "button-alert-color",
        },
    });
}

export { emptyFieldsError, sendMailError, sendMailSuccess };
