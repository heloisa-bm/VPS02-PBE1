const con = require('../connect/banco').con;

const create = (req, res) => {
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let nome = req.body.nome;
    let validade = req.body.validade;
    let idforn = req.body.idforn;
    
    let query = 'INSERT INTO clientes (descricao, preco, nome, validade, idforn) VALUES'
    query += `('${descricao}','${preco}','${nome}','${validade}','${idforn}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}


const update = (req, res) => {
        let descricao = req.body.descricao;
        let preco = req.body.preco;
        let nome = req.body.nome;
        let validade = req.body.validade;
        let idforn = req.body.email;
        


    let query = `UPDATE clientes SET descricao = '${descricao}', preco = '${preco}', nome = '${nome}', validade = '${validade}', idforn = '${idforn}' `
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}


const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM clientes WHERE cliente_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}




module.exports = {
    create,
    read,
    deletar,
    update
}