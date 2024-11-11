const conexao = require('../infra/connection');

class Jogador{
    adiciona(jogador, res){
        let sql = 'INSERT INTO jogador SET ?'
        conexao.query(sql, jogador,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    } 
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM jogador where id_jogador = ?'
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
        let sql3 = 'SELECT * FROM jogador';
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
        let sqlEdit = 'UPDATE jogador SET ? WHERE id_jogador = ?';
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
module.exports = new Jogador; 
