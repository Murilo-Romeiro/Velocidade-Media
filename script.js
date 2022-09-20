let velocidades = []

function calcular(){
    if(localStorage.getItem('velocidades') != null){
        velocidades = JSON.parse(localStorage.getItem('velocidades'))
      }
    dist = document.getElementById("d").value
    tempo = document.getElementById("t").value
    vmedia = document.getElementById("v").value = dist / tempo
    velocidades.push(vmedia)

    localStorage.setItem('velocidades', JSON.stringify(velocidades))
    
}

function limpar(){
    dist = document.getElementById("d").value = ""
    tempo = document.getElementById("t").value = ""
    resultado = document.getElementById("v").value = ""
}   
