<?php
$servername = "localhost"; // Nome do servidor
$username = "root"; // Nome de usuário do banco de dados
$password = ""; // Senha do banco de dados
$database = "banco"; // Nome do banco de dados

// Cria uma conexão MySQL
$conectando = mysqli_connect($servername, $username, $password, $database);

// Verifique se a conexão foi bem-sucedida
if (!$conectando) {
    die("Conexão falhou: " . mysqli_connect_error());
}

$email = $senha = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["email"])) {
        $email = $_POST["email"];
    }
    if (isset($_POST["senha"])) {
        $senha = $_POST["senha"];
    }

    // Hash da senha
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

    // Use uma declaração preparada para inserir os dados
    $stmt = mysqli_prepare($conectando, "INSERT INTO usuarios (email, senha) VALUES (?, ?)");
    mysqli_stmt_bind_param($stmt, "ss", $email, $senhaHash);

    if (mysqli_stmt_execute($stmt)) {
        echo "Registro inserido com sucesso.";
    } else {
        echo "Erro ao inserir registro: " . mysqli_error($conectando);
    }

    mysqli_stmt_close($stmt);
}

// Feche a conexão com o MySQL
mysqli_close($conectando);
?>
