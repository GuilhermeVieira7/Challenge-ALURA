let amigos = []

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';    
        atualizarLista();
        verificarCampo();
    }
}

function verificarCampo() {
    let campo = document.getElementById('amigo').value;
    let botao = document.getElementById('Adicionar');
    if (campo.trim() !== "") {
        botao.style.backgroundColor = "green";
        botao.style.color = "white";
    } else {
        botao.style.backgroundColor = "";
        botao.style.color = "";
    }
}
   function atualizarLista() {
        document.getElementById('listaAmigos').innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
    }


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo para sortear. Por favor, adicione amigos primeiro.');
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        document.getElementById('resultado').innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
        amigos.splice(indiceSorteado, 1);
    }
}