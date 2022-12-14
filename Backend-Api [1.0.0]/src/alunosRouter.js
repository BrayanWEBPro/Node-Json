const express = require('express');

const router = express.Router();
router.use(express.json());


router.get('/', (req, res) => {
    res.send(`GET ALL`);
});

router.get('/:id', (req, res) => {
    res.send(`GET ID: ${req.params.id}`);
});

router.get('/matricula/:matricula', (req, res) => {
    res.send(`GET Matricula: ${req.params.matricula}`);
});

//Atulaizar
router.put('/:id', (req, res) => {
    res.send(`PUT ID: ${req.body}`);
});

//Salvar
router.post('/', (req, res) => {
    res.send(`POST: ${JSON.stringify(req.body)}`);
});

//Deletar
router.delete('/:id', (req, res) => {
    res.send(`DELETE: ${req.params.id}`);
});

module.exports = router;