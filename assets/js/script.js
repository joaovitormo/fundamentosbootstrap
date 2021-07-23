let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let txtMsg = document.querySelector('#txtMsg')
let openLogin = document.getElementById('login')
let temNome =false
let temMsg = false
let Email = false
function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 7) {
        nome.style.border = '2px solid red'
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        console.log(temNome)
    } else {
        nome.style.border = '3px solid green'
        txtNome.innerHTML = ''
        temNome = true
        console.log(temNome)
    }
}


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.border = '2px solid red'
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        email.style.border = '2px solid green'
        txtEmail.innerHTML = ''
        temEmail = true
    }
}


function validaMsg() {
    
    if (msg.value.length < 15) {
        msg.style.border = '2px solid red'
        txtMsg.innerHTML = 'Mensagem muito pequena, digite mais :)'
        txtMsg.style.color = 'red'
    } else {
        msg.style.border = '2px solid green'
        txtMsg.innerHTML = ''
        temMsg = true
    }
}

function mensagem() {
    if (temMsg == true && temEmail == true && temNome == true) {
        alert("Obrigado pelo contato :)")
    } else{
        alert("Mensagem não enviada, preencha todos os campos")
        
    }
   
}




 