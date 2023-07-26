const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express')

const app = express();

let i = 0
app.get('/', (req, res) =>{
    res.send(`É a vez de ${jogadores[i]} jogar!`)
    i = (i + 1) % jogadores.length
})

app.listen(3000, ()=>{
    console.log(`O servidor foi inicializado na porta 3000`)
})