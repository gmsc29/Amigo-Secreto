let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value;

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    amigoInput.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigoItem = document.createElement('li');
        amigoItem.textContent = amigos[i];
        lista.appendChild(amigoItem);
    }
}

function sortearAmigo() {
    // Validar
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    // Gerar índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Mostrar o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
}