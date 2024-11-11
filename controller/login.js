// Parte de back end
const Login = require('../model/login');
const rota = '/login'; // defininfdo a rota de login

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota, (req, res)=>{
        Login.lista(res);
    });
    app.get((rota+'/:id'), (req,res)=>{
        let id = parseInt(red.params.id);
        Login.buscaPorId(id, res);
    })
    
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        Login.adiciona(req.body, res)
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(red.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        Login.altera(id, valores, res);
    })

    app.post('/autentica', (req, res) => {
        const { email, senha } = req.body;
    
        // Verifica se os campos foram preenchidos
        if (!email || !senha) {
            return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios' });
        }
    
        // Chama o método de autenticação
        Login.autentica(email, senha, res);
    })
}
