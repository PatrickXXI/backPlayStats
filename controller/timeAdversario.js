// Parte de back end
const TimeAdversario = require('../model/timeAdversario');
const rota = '/timeAdversario'; // defininfdo a rota de TimeAdversario

module.exports = app => { //aqui dentro fica minha rota
    app.get(rota, (req, res)=>{
        TimeAdversario.lista(res);
    });
    app.get((rota+'/:id'), (req,res)=>{
        let id = parseInt(red.params.id);
        TimeAdversario.buscaPorId(id, res);
    })
    app.post(rota, (req, res) => {
        console.log(req.body);  // imprimindo oque o usuário enviou por post
        TimeAdversario.adiciona(req.body, res)
    })
    app.patch((rota+'/:id'),(req, res)=>{
        let id = parseInt(red.params.id);  // parseInt, serve para ter certeza que o elemento que vier vai ser INT
        let valores = req.body; //Pegando todos os valores
        TimeAdversario.altera(id, valores, res);
    })
    app.get(rota + '/toString/:id', (req, res) => {
        let id = parseInt(req.params.id);  // Recuperando o ID
        TimeAdversario.buscaPorId(id, (erro, resultado) => {
            if (erro) {
                return res.status(400).json({ message: 'Erro ao buscar time adversário' });
            }

            // Criando uma instância de TimeAdversario a partir do resultado
            const timeAdversario = new TimeAdversario(resultado.id_timeAdversario_pk, resultado.nome_timeAdversario);

            // Chamando o método toString para obter a representação em string do objeto
            return res.status(200).json({ message: timeAdversario.toString() });
        });
    });
    app.get(`${rota}/toString/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        TimeAdversario.buscaPorId(id, (erro, resultado) => {
            if (erro) {
                return res.status(400).json({ message: 'Erro ao buscar time adversário' });
            }
    
            // Cria uma instância de TimeAdversario a partir do resultado
            const timeAdversario = new TimeAdversario(
                resultado[0].id_timeAdversario_pk, 
                resultado[0].nome_timeAdversario
            );
    
            // Retorna a string representando o time
            return res.status(200).json({ message: timeAdversario.toString() });
        });
    });

}
