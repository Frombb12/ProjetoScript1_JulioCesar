function Logar(){ //função para validar o login

    // constantes para validação estática
    const user = "teste@teste"
    const senha_User = "teste"

    var login = document.getElementById('login').value; // obtenção dos valores de entrada
    var senha = document.getElementById('senha').value;

    if(login == user && senha == senha_User){ // processo de validaão comparando com as const
    location.href = "/home/home.html";
    }else{
        alert('Usuário ou senha incorretos')
    }

}