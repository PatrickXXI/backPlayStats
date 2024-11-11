//Conexão com servidor
// npm i express consign body-parser mysql express-form-data

const customExpress = require('./config/customExpress');
const conexao = require('./infra/connection');
const Tabelas = require('./infra/tabelas');
const app = customExpress(); // esta recebendo aquele objeto que esta dentro do customExpres APP

conexao.connect(erro =>{
    if(erro){
        console.log(erro);
    }else{
        Tabelas.init(conexao);
        console.log('Conectado com sucesso');
        app.listen(3000,() => console.log('Servidor rodando na porta 3000'));
    }
});
