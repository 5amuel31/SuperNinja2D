function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "12345678"){
        location.href = "jogo.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}