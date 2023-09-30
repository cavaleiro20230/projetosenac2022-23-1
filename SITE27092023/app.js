// Configurações do Firebase (substitua pelas suas)
var firebaseConfig = {
    apiKey: "AIzaSyB0CdgzLp0brihyvqNTAr70egeiqiW3N8Q",
    authDomain: "projeto-c7d01.firebaseapp.com",
    projectId: "projeto-c7d01",
    storageBucket: "projeto-c7d01.appspot.com",
    messagingSenderId: "118301864681",
    appId: "1:118301864681:web:33daf1507f2d3c44c7b678",
    measurementId: "G-3CKQM5GPYK"
  
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
          window.location.href="index2.html"; //alterar para o nome do arquivo de vocês.
      })
      .catch((error) => {
          alert("Erro: login invalido" + error.message);
      });
  });
  