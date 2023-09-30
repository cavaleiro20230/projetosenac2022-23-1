const firebaseConfig = {
    apiKey: "AIzaSyB0CdgzLp0brihyvqNTAr70egeiqiW3N8Q",
    authDomain: "projeto-c7d01.firebaseapp.com",
    projectId: "projeto-c7d01",
    storageBucket: "projeto-c7d01.appspot.com",
    messagingSenderId: "118301864681",
    appId: "1:118301864681:web:33daf1507f2d3c44c7b678",
    measurementId: "G-3CKQM5GPYK"
  };
  firebase.initializeApp(firebaseConfig);

// Quando o formulário for enviado
$("#formulario").submit(function(event) {
    event.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();

    // Autenticar usuário com o Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Autenticado com sucesso!");
            window.location.href = "nomedapaginadotime.html"; // Altere para o nome do arquivo desejado
        })
        .catch((error) => {
            alert("Erro ao autenticar: " + error.message);
        });
});