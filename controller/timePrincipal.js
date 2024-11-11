const TimePrincipal = require('../model/timePrincipal');
const rota = '/timePrincipal'; // defininfdo a rota de login

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota, (req, res)=>{
        TimePrincipal.lista(res);
    });
    app.get((rota+'/:id'), (req,res)=>{
        let id = parseInt(red.params.id);
        TimePrincipal.buscaPorId(id, res);
    })
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        TimePrincipal.adiciona(req.body, res)
        
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(red.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        TimePrincipal.altera(id, valores, res);
    })

}
