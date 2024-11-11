const conexao = require('../infra/connection');

class TimeAdversario{

    constructor(id, nome) {
        this.id_timeAdversario = id;
        this.nome_timeAdversario = nome;
        this.endereco_timeAdversario
    }
    adiciona(timeAdversario, res){
        let sql = 'INSERT INTO timeAdversario SET ?'
        conexao.query(sql, timeAdversario,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    }
    buscaPorNome(nome, res) {
        // Utilizando LIKE corretamente com o curinga (%) para buscar nomes semelhantes
        let sql2 = 'SELECT * FROM timeAdversario WHERE nome_timeAdversario LIKE ?';
        
        // Usando o curinga '%' para buscar por qualquer nome que contenha o valor de "nome"
        conexao.query(sql2, ['%' + nome + '%'], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro); // Retorna erro 400 com a descrição do erro
                console.log(erro);  // Exibe o erro no console
            } else {
                res.status(200).json(resultados); // Retorna os resultados da busca com status 200
            }
        });
    }
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM timeAdversario where id_timeAdversario = ?'
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
        let sql3 = 'SELECT * FROM timeAdversario';
        conexao.query(sql3,(erro, resultado)=>{
            if(erro){
                console.error('Erro ao consultar times adversários:', erro);  // Mais detalhes do erro
                res.status(400).json({ message: 'Erro ao consultar times adversários', error: erro });
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }

    eltera(id, valores, res){
        let sqlEdit = 'UPDATE timeAdversario SET ? WHERE id_timeAdversario = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }
     // Método toString para retornar uma string legível sobre o objeto TimeAdversario
     toString() {
        return `Time Adversário: [ID: ${this.id_timeAdversario}, Nome: ${this.nome_timeAdversario}]`;
    }
}
module.exports = new TimeAdversario; 
