// Configuração do Firebase
const firebaseConfig = {
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

// Adicionando um jogador
document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const bookAge = document.getElementById('bookAge').value;
    const bookImage = document.getElementById('bookImage').files[0];

    if (playerImage) {
        const imageName = new Date().getTime() + "-" + playerImage.name;
        const uploadTask = storage.ref('book_images/' + imageName).put(bookImage);

        uploadTask.on('state_changed', function(snapshot) {
            // Progress function...
        }, function(error) {
            // Handle unsuccessful uploads
            console.error(error);
        }, function() {
            // Get download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                database.ref('players').push({
                    name: bookName,
                    age: bookAge,
                    imageUrl: downloadURL
                });

                // Limpar campos após adicionar
                document.getElementById('bookName').value = '';
                document.getElementById('bookAge').value = '';
                document.getElementById('bookImage').value = '';
            });
        });
    } else {
        // Caso você queira adicionar jogadores sem imagens
        database.ref('book').push({
            name: bookName,
            age: bookAge
        });

        // Limpar campos após adicionar
        document.getElementById('bookName').value = '';
        document.getElementById('bookAge').value = '';
    }
});

// Ouvindo as mudanças na lista de jogadores
database.ref('players').on('child_added', function(data) {
    const li = document.createElement('li');
    li.id = data.key;
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        <img src="${data.val().imageUrl}" width="50" class="mr-2">
        ${data.val().name} - ${data.val().age} anos
        <button class="btn btn-danger btn-sm" onclick="deletebook('${data.key}')">Excluir</button>
    `;
    document.getElementById('bookList').appendChild(li);
});

// Função para excluir jogador
function deletePlayer(bookId) {
    database.ref('book/' + bookId).remove();
    document.getElementById(bookId).remove();
}
