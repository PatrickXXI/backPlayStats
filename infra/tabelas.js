 //Criação de tabelas do banco de dados
 class Tabela{
    //construtor da tabela
    init(conexao){
        //this.conexao = conexao;  // todas as funções devem ser chamadas no construtor
       // this.criarLogin();
        //this.criarJogador();
        //this.criarTimeAdversario()
        //this.criarTimePrincipal()
       // this.criarJogo();
    };

    criarLogin(){
        let sql = 'CREATE TABLE IF NOT EXISTS login (id_login_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
                    'nome_timePrincipal VARCHAR(255)  NOT NULL,'+
                    'endereco_timePrincipal VARCHAR(100) NOT NULL,'+  
                    'email VARCHAR(255) UNIQUE NOT NULL,'+
                    "senha VARCHAR(100) DEFAULT 'SENHA12345')";
                    
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('tabela LOGIN criada com sucesso');
            }
        })
    }
    /*criarTimePrincipal(){
        let sql3 = 'CREATE TABLE IF NOT EXISTS timePrincipal (id_timePrincipal_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
                    'nome_timePrincipal VARCHAR(255)  NOT NULL,'+
                    'endereco_timePrincipal VARCHAR(100) NOT NULL )';
        this.conexao.query(sql3, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('tabela TIME_PRINCIPAL criada com sucesso');
            }
        })
    }*/
    criarJogador(){
        let sql1 = 'CREATE TABLE IF NOT EXISTS jogador (id_jogador_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
                    'nome_jogador VARCHAR(255)  NOT NULL,'+
                    'apelido_jogador VARCHAR(100) NOT NULL,'+
                    'posicao_jogador VARCHAR(100) NOT NULL ,'+
                    'gols_jogador INT,'+
                    'Aassistencia_jogador INT)'; 

        this.conexao.query(sql1, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('tabela JOGADOR criada com sucesso');
            }
        })
    }
    criarTimeAdversario(){
        let sql2 = 'CREATE TABLE IF NOT EXISTS timeAdversario (id_timeAdversario_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
                    'nome_timeAdversario VARCHAR(255)  NOT NULL,'+
                    'endereco_timeAdversario VARCHAR(100) NOT NULL )';
                    
        this.conexao.query(sql2, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('tabela TIME_ADVERSARIO criada com sucesso');
            }
        })
    }
 }
 module.exports = new Tabela; 