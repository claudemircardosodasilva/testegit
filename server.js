const express = require('express');
const app = express();

app.get ('/ ola', (req, res) => {
    res.status(200).send({ message: 'Alo Mundo agora rota olá'});
})

app.listen(3001,() => {
      console.log('Api rodando na porta 3001');

})
