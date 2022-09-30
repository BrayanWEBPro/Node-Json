const express = require('express');
const alunosRouter = require('./alunosRouter')

const app = express();
app.use(express.json());

app.use('/alunos', alunosRouter);

app.listen(3000, () => {
    console.log('Server started');
})