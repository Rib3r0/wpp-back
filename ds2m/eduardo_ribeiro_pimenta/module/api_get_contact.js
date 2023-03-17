'use strict'

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

const contatos = require('./contatos.js')

//define as permissões no header da API
app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*');

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());

    next();
});
//endPoints

app.get('/contacts/:id', cors(), async function(request, response, next){
    //:uf é uma variavel que será utilizada para passagens de valores, na URL da requisição

    //recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let user = request.params.id;
    let statusCode
    let json = {}
    //tratamento para validar os valores incaminhados no parametro

    if(user == '' || user == undefined ){
        statusCode = 400
        json.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada, ou não atende a quantidade de caracteres (2 digitos)"
    }else{
        let contacts = contatos.getContacts(user)
        if(contacts){
            statusCode = 200
            json = contacts
        }else{
            statusCode = 404
            
        }


    }
    
    response.status(statusCode)
    response.json(json)

})

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')

});