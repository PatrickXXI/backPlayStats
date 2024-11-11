// Parte de back end
const Jogador = require('../model/jogador');
const rota = '/jogador'; // defininfdo a rota de login

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota, (req, res)=>{
        Jogador.lista(res);
    });
    app.get((rota+'/:id'), (req,res)=>{
        let id = parseInt(red.params.id);
        Jogador.buscaPorId(id, res);
    })
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        Jogador.adiciona(req.body, res)
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(red.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        Jogador.altera(id, valores, res);
    })

}