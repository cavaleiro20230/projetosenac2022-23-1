<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        // Bloqueia o menu de contexto do botão direito do mouse
        document.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        });

        // Detecta a tecla F12 pressionada
        document.addEventListener("keydown", function(e) {
            if (e.key === "F12") {
                alert("A tecla F12 está desabilitada.");
                e.preventDefault();
            }
        });
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro com Firebase</title>
    
    <style>
        /* Estilos para o formulário de cadastro */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
        }

        #signup-form {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 40px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        button {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        /* Estilos para mensagens de erro */
        .alert {
            background-color: #ff6b6b;
            color: #fff;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 4px;
            font-size: 16px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Cadastro</h1>
    <form id="signup-form">
        <label for="name">Nome:</label>
        <input type="text" id="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" required><br><br>

        <label for="password">Senha:</label>
        <input type="password" id="password" required><br><br>

        <button type="submit">Cadastrar</button>
    </form>

    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>

    <script>
        var firebaseConfig = {
     
     apiKey: "AIzaSyD5N9oduQ5wcODYq6xPjSLSkQdEGhZc0Yw",
     authDomain: "aula2-66620.firebaseapp.com",
     databaseURL: "https://aula2-66620-default-rtdb.firebaseio.com",
     projectId: "aula2-66620",
     storageBucket: "aula2-66620.appspot.com",
     messagingSenderId: "264621840710",
     appId: "1:264621840710:web:88b4cff6b8a5fc54aeed47"
    };
        firebase.initializeApp(firebaseConfig);

        const signupForm = document.querySelector("#signup-form");

        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            // Criar um usuário no Firebase Authentication
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Cadastro bem-sucedido
                    const user = userCredential.user;
                    alert("Usuário cadastrado com sucesso!");
                    console.log("Usuário cadastrado com sucesso:", user);

                    // Atualizar o perfil do usuário com o nome
                    user.updateProfile({
                        displayName: name
                    }).then(function() {
                        console.log("Perfil do usuário atualizado com sucesso.");
                        
                        // Redirecionar para a página de login após o cadastro
                        window.location.href = "index.html"; // Substitua "login.html" pelo nome da sua página de login
                    }).catch(function(error) {
                        console.error("Erro ao atualizar o perfil do usuário:", error);
                    });
                })
                .catch((error) => {
                    // Tratar erros durante o cadastro
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Erro durante o cadastro: " + errorMessage);
                    console.error("Erro durante o cadastro:", errorCode, errorMessage);
                });
        });
    </script>
</body>
</html>




