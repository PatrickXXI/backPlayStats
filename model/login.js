// utilizado para controlar as ações do banco de dados
const conexao = require('../infra/connection');

class Login{

    adiciona(login, res){
        let sql = 'INSERT INTO login SET ?';
        conexao.query(sql, login, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro);
            }else{
                res.status(200).json(resultado); // resolvendo o status em formato json
            }
        })
    }
    buscaPorId(id, res){
        let sql2 = 'SELECT * FROM login where id_login_pk = ?'
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
        let sql3 = 'SELECT * FROM login';
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
        let sqlEdit = 'UPDATE login SET ? WHERE id_login = ?';
        conexao.query(sqlEdit, [valores,id], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);   // resolvendo o status em formato json
                console.log(erro)
            }else{
                res.status(200).json(resultado) // resolvendo o status em formato json
            }
        })
    }
    // Método para autenticação de email e senha
    autentica(email, senha, res) {
        // 1. Consulta para verificar se o email existe
        let sql = 'SELECT * FROM login WHERE email = ?';
        conexao.query(sql, [email], (erro, resultado) => {
            if (erro) {
                console.log(erro);
                return res.status(500).json({ success: false, message: 'Erro no servidor ao verificar o email. Tente novamente.' });
            }

            if (resultado.length === 0) {
                // Se o email não existir, retorna erro
                return res.status(400).json({ success: false, message: 'O E-mail informado não existe!' });
            }

            // 2. Verifica se a senha bate com a armazenada no banco
            const usuario = resultado[0];  // O usuário encontrado
            if (usuario.senha !== senha) {
                // Se as senhas não coincidirem
                return res.status(400).json({ success: false, message: 'Senha incorreta!' });
            }

            // 3. Se tudo estiver correto, retorna sucesso
            return res.status(200).json({ success: true, message: 'Login realizado com sucesso!' });
        });
    }
}
module.exports = new Login; 