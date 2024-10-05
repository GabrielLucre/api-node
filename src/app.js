// import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controller/Pessoa.js';

import express from 'express';

import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

import router from './routes.js'
app.use(router);

// app.get('/', function (req, res) {
//     res.send('Toma!')
// });

// app.get('/pessoas', async function (req, res) {
//     let pessoas = await selectPessoas();
//     res.json(pessoas);
// });

// app.get('/pessoa', async function (req, res) {
//     let pessoa = await selectPessoa(req.body.id);
//     res.json(pessoa);
// });

// app.post('/pessoa', function (req, res) {
//     insertPessoa(req.body);
//     res.json({
//         "statusCode": 200,
//     });
// });

// app.put('/pessoa', function (req, res) {
//     if (req.body && !req.body.id) {
//         res.json({
//             "statusCode": 400,
//             "msg": "Você precisa informar um id"
//         })
//     } else {
//         updatePessoa(req.body);
//         res.json({
//             "statusCode": 200,
//         });
//     }
// });

// app.delete('/pessoa', async function (req, res) {
//     let pessoa = await deletePessoa(req.body.id);
//     res.json(pessoa);
// });

app.listen(3000, () => console.log("Api rodando."))

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log('Rodando em https'));