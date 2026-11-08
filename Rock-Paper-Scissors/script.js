const choices = ["Pedra", "Papel", "Tesoura"]
let userChoice
let pc

let result = document.getElementById("result")

let pedra = document.getElementById("pedra")
let papel = document.getElementById("papel")
let tesoura = document.getElementById("tesoura")

function happys() {
x=document.getElementById("happy");
x.style.visibility="visible";
}
function happyh() {
x=document.getElementById("happy");
x.style.visibility="hidden";
}


function idks() {
x=document.getElementById("idk");
x.style.visibility="visible";
}
function idkh() {
x=document.getElementById("idk");
x.style.visibility="hidden";
}

function sads() {
x=document.getElementById("sad");
x.style.visibility="visible";
}
function sadh() {
x=document.getElementById("sad");
x.style.visibility="hidden";
}

function validate() {
    pc = choices[Math.floor(Math.random() * 3)]
    
    if (pedra.checked && pc == "Pedra") {
        result.innerHTML = "Empate!!!"
        idks()
        happyh()
        sadh()
    }
    else if (pedra.checked && pc == "Papel") {
        result.innerHTML = "Perdeu!!!"
        sads()
        happyh()
        idkh()
    }
    else if (pedra.checked && pc == "Tesoura") {
        result.innerHTML = "Ganhou!!!"
        happys()
        idkh()
        sadh()
    }

    else if (papel.checked && pc == "Pedra") {
        result.innerHTML = "Ganhou!!!"
        happys()
        idkh()
        sadh()
    }
    else if (papel.checked && pc == "Papel") {
        result.innerHTML = "Empate!!!"
        idks()
        happyh()
        sadh()
    }
    else if (papel.checked && pc == "Tesoura") {
        result.innerHTML = "Perdeu!!!"
        sads()
        happyh()
        idkh()
    }

    else if (tesoura.checked && pc == "Pedra") {
        result.innerHTML = "Perdeu!!!"
        sads()
        happyh()
        idkh()
    }
    else if (tesoura.checked && pc == "Papel") {
        result.innerHTML = "Ganhou!!!"
        happys()
        idkh()
        sadh()
    }
    else if (tesoura.checked && pc == "Tesoura") {
        result.innerHTML = "Empate!!!"
        idks()
        happyh()
        sadh()
    }
    else {
        result.innerHTML = "Escolha uma opção!!!"
    }
}