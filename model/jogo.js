const conexao = require('../infra/connection');

class Jogo{
    adiciona(jogo, res){
        let sql = 'INSERT INTO jogo SET ?'
        conexao.query(sql, jogo,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    } 
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM jogo where id_jogo = ?'
        conexao.query(sql2,id, (erro, res)=>{
            if(erro){
                res.status(400).json(erro);
                console.log(erro);
            }else{
                res.status(200).json(res)
            }
        })
    }
    lista(res){
        let sql3 = 'SELECT * FROM jogo';
        conexao.query(sql3,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }

    eltera(id, valores, res){
        let sqlEdit = 'UPDATE jogo SET ? WHERE id_jogo = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }

}
module.exports = new Jogo; 
