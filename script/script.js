const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const contatoRadio = document.getElementsByName("contato");
const mensagemTextArea = document.getElementById("mensagem");

nomeInput.onkeyup = () => {
    console.log("nomeInput: ", nomeInput.value);
};

telefoneInput.onkeyup = () => {
    console.log("telefoneInput: ", telefoneInput.value);
};

emailInput.onkeyup = () => {
    console.log("emailInput: ", emailInput.value);
};

contatoRadio.forEach(
    radioSelected => {
        radioSelected.onclick = () => {
            console.log("contatoRadio: ", radioSelected.value);
        };
    }
);

mensagemTextArea.onkeyup = () => {
    console.log("mensagemTextArea: ", `${mensagemTextArea.value}`);
};


