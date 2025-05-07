let usuarios = [];

// Sign up
function salvarCadastro() {
    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const mensagemCadastro = document.getElementById('mensagemCadastro');

    if (nome !== "" && email !== "" && senha !== "") {
        usuarios.push({ nome, email, senha });
        mensagemCadastro.textContent = "Cadastrando...";
        mensagemCadastro.style.color = "rgb(0, 0, 0)";
        mensagemCadastro.style.backgroundColor = "#B5C99A";
        
        setTimeout(() => {
            mensagemCadastro.textContent = "Conta criada com sucesso!";
            mensagemCadastro.style.color = "green";
            mensagemCadastro.style.backgroundColor = "#B5C99A";
        }, 2000);
        setTimeout(() => {
            window.location.href = "boasVindas.html";
        }, 4000);

    } else {
        setTimeout(() => {
            mensagemCadastro.textContent = "Dados de cadastro inválidos!";
            mensagemCadastro.style.color = "red";
            mensagemCadastro.style.backgroundColor = "#B5C99A";
        }, 2000);
        
    }
}

// Login
function fazerLogin() {
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const mensagemLogin = document.getElementById('mensagemLogin');

    const usuarioValido = usuarios.find(u => u.email === email && u.senha === senha);

    const loginAdm = [{"email": 'admim.com', "senha": 'admim.com'}];

    if (usuarioValido) {

        mensagemLogin.textContent = "Fazendo login...";
        mensagemLogin.style.color = "rgb(0, 0, 0)";
        mensagemLogin.style.backgroundColor = "#B5C99A";

        setTimeout(() => {
            mensagemLogin.textContent = "🎉 Você entrou no site!";
            mensagemLogin.style.color = "green";
            mensagemLogin.style.backgroundColor = "#B5C99A";
        }, 2000);
        setTimeout(() => {
            window.location.href = "boasVindas.html";
        }, 4000);

    
    } else if (loginAdm) {
        
        mensagemLogin.textContent = "Fazendo login...";
        mensagemLogin.style.color = "rgb(0, 0, 0)";
        mensagemLogin.style.backgroundColor = "#B5C99A";

        setTimeout(() => {
            mensagemLogin.textContent = "🎉 Você entrou no site!";
            mensagemLogin.style.color = "darkblue";
            mensagemLogin.style.backgroundColor = "#B5C99A";
        }, 2000);
        setTimeout(() => {
            window.location.href = "boasVindas.html";
        }, 4000);

    } else {
        setTimeout(() => {
            mensagemLogin.textContent = "Email ou senha incorreto.";
            mensagemLogin.style.color = "red";
            mensagemLogin.style.backgroundColor = "#B5C99A";
        }, 2000);
        
    }
}