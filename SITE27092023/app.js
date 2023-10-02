// Configurações do Firebase (substitua pelas suas)
var firebaseConfig = {
    apiKey: "AIzaSyD5N9oduQ5wcODYq6xPjSLSkQdEGhZc0Yw",
    authDomain: "aula2-66620.firebaseapp.com",
    databaseURL: "https://aula2-66620-default-rtdb.firebaseio.com",
    projectId: "aula2-66620",
    storageBucket: "aula2-66620.appspot.com",
    messagingSenderId: "264621840710",
    appId: "1:264621840710:web:88b4cff6b8a5fc54aeed47"
  };
  
  // Inicializar o Firebase
  firebase.initializeApp(firebaseConfig);
  
  $("#login-form").submit(function(event) {
      event.preventDefault();
  
      var email = $("#email").val();
      var password = $("#password").val();
  
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          alert("Login realizado com sucesso!");
          window.location.href="Formulario.html"; //alterar para o nome do arquivo de vocês.
      })
      .catch((error) => {
          alert("Erro: login invalido" + error.message);
      });
  });
  