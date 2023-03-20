'use strict'


export const getContatos = async () =>  {

    let url = "http://localhost:8080/contacts/1"

    let response = await fetch(url)

    let contatos = await response.json()

    return contatos

}

