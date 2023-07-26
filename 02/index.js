const express = require('express')

const app = express()

let segundos = 0
let minutos = 0
let cronometro

const tempoFormatado = (tempo) => {
   return tempo.toString().padStart(2, '0')
}

const iniciarCronometro = () =>{
    cronometro = setInterval(()=>{
        segundos++
        if(segundos === 60){
            segundos = 0
            minutos++
        }
    },1000)
}

const pausarCronometro = () => {
    clearInterval(cronometro)
}

const zerarCronometro = () => {
    minutos = 0
    segundos = 0
}

app.get('/', (req, res)=>{
    const minutosFormatado = tempoFormatado(minutos)
    const segundosFormatado = tempoFormatado(segundos)
     res.send(`Tempo atual do cronômetro: ${minutosFormatado} minutos e ${segundosFormatado} segundos`)
 })

app.get('/iniciar', (req, res)=>{
    iniciarCronometro()
    res.send('Cronômetro inicado!')
})

app.get('/Pausar', (req, res)=>{
    pausarCronometro()
    res.send('Cronômetro pausado!')
})

app.get('/Zerar', (req, res)=>{
  zerarCronometro()
  res.send('Cronômetro zerado!')
})

app.get('/Continuar', (req, res)=>{
    iniciarCronometro()
    res.send('Cronômetro continuando!')
})



app.listen(8000)