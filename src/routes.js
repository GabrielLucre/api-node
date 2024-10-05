import { Router } from 'express';
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controller/Pessoa.js';

const router = Router();

router.get('/', (req, res) => {
    return res.json({
        "statusCode": 200,
        "msg": "Api rodando"
    });
});

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;