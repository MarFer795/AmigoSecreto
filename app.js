let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("¡Por favor ingrese un nombre válido!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("¡Este nombre ya ha sido agregado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Añade al menos un amigo para realizar el sorteo.");
        return;
    }
    
    const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(nomeSorteado);
}

function exibirResultado(nomeSorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto elegido es: '${nomeSorteado}'`;
    listaResultado.appendChild(li);
}

function reiniciarJuego() {
    // Vaciar la lista de amigos
    amigos = [];

    // Limpiar la lista en el HTML
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Resetear el campo de entrada
    document.getElementById("amigo").value = "";
}


