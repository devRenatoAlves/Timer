const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click' , () => {
    iniciarRelogio()
})

pausar.addEventListener('click' , () => {
    clearInterval(intervalo)
})
 
zerar.addEventListener('click' , () => {
    clearInterval(intervalo)
    segundos = 0
    
    relogio.innerHTML = '00:00:00'
})

let segundos = 0;
let intervalo;

function timer (hora) {
    const data = new Date(hora*1000)

    return data.toLocaleTimeString('pt-BR' , {
        hour12: false ,
        timeZone: 'GMT'
    })
}

function iniciarRelogio () {
    intervalo = setInterval(()=> {
        segundos++
        relogio.innerHTML = timer(segundos)
    }, 1000)
}

const hora = timer()