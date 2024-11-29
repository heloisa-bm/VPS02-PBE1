const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;
    
    let query = 'INSERT INTO clientes (nome, cnpj, email) VALUES'
    query += `('${nome}','${cnpj}','${email}')`;
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
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;


    let query = `UPDATE clientes SET nome = '${nome}', cnpj = '${cnpj}', email = '${email}' `
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