var generatedValue = '';

$(document).ready(item => {
    $("#generate-btn").click(() => {
        generateLink();
    });
    $("#copy-to-clipboard").click(() => {
        copyValueToClipBoard();
    }); 
});

function copyValueToClipBoard() {
    navigator.clipboard.writeText(generatedValue);
    alert('Copiado! Aumente suas vendas...');
}

function generateLink() {
    generatedValue = '';
    let number = $("#number").val();
    let message = $("#message").val();

    if(number == null || message == null) {
        alert("O campo número e mensagem não deve ser vazio");
        return;
    }

    generatedValue = `https://api.whatsapp.com/send?phone=55${number}&text=${message}`;

    $("#generated-value-text").html(generatedValue);
    $("#generated-value").css("display", "block");
}