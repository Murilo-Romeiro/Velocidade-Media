array = []

function calcular(){
    dist = document.getElementById("d").value
    tempo = document.getElementById("t").value
    vmedia = document.getElementById("v").value = dist / tempo
    array.push(vmedia)
    console.log(array)
}

function limpar(){
    dist = document.getElementById("d").value = ""
    tempo = document.getElementById("t").value = ""
    resultado = document.getElementById("v").value = ""
}   