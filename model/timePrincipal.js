const conexao = require('../infra/connection');

class TimePrincipal{
    adiciona(timePrincipal, res){
        let sql = 'INSERT INTO timePrincipal SET ?'
        conexao.query(sql, timePrincipal,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    } 
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM timePrincipal where id_timePrincipal = ?'
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
        let sql3 = 'SELECT * FROM timePrincipal';
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
        let sqlEdit = 'UPDATE timePrincipal SET ? WHERE id_timePrincipal = ?';
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
module.exports = new TimePrincipal; 
