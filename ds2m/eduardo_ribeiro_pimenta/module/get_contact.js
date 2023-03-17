'use strict'


export const getContatos = async () =>  {

    let url = "http://localhost:8080/contacts/1"

    let b = {}

    let contatos = await fetch(url)

    return contatos.json()

}

