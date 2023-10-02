// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD5N9oduQ5wcODYq6xPjSLSkQdEGhZc0Yw",
    authDomain: "aula2-66620.firebaseapp.com",
    databaseURL: "https://aula2-66620-default-rtdb.firebaseio.com",
    projectId: "aula2-66620",
    storageBucket: "aula2-66620.appspot.com",
    messagingSenderId: "264621840710",
    appId: "1:264621840710:web:88b4cff6b8a5fc54aeed47"
  };
  
// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();

// Adicionando um cliente
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const clienteNome = document.getElementById('nome').value;
    const clienteEndereco = document.getElementById('endereco').value;
    const clienteTelefone = document.getElementById('telefone').value;

    database.ref('clientes').push({
        nome: clienteNome,
        endereco: clienteEndereco,
        telefone: clienteTelefone
    });

    // Limpar campos após adicionar
    document.getElementById('nome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
});

// Ouvindo as mudanças na lista de clientes
database.ref('clientes').on('child_added', function(data) {
    const li = document.createElement('li');
    li.id = data.key;
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        Nome: ${data.val().nome}<br>
        Endereço: ${data.val().endereco}<br>
        Telefone: ${data.val().telefone}
        <button class="btn btn-danger btn-sm" onclick="deleteCliente('${data.key}')">Excluir</button>
    `;
    document.getElementById('clienteList').appendChild(li);
});

// Função para excluir cliente
function deleteCliente(clienteId) {
    database.ref('clientes/' + clienteId).remove();
    document.getElementById(clienteId).remove();
}
