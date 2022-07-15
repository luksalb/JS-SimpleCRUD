var usuarios = [
    {"login": "admin", "senha": "admin"},
    {"login": "user", "senha": "123"},
];

/*const sLogin = document.querySelector('#m-login');
const sSenha = document.querySelector('#m-senha'); */
var usuario = document.getElementsByName('login')[0].value.toLowerCase();
var senha = document.getElementsByName('m-senha')[0].value;

function Login(){
        for (var u in usuarios) {
            var us = usuarios[u];
            if (us.login === usuario && us.senha === senha) {
                window.location = "index.html";
                return true;
            }
        }
        alert("Dados incorretos, tente novamente.");
        return false;  
}

btnLogin.addEventListener('click', Login);

