faker.locale = 'pt_BR'
import faker from "faker"
import fakerbr from "faker-br"

export default class factory {
    static gerarNovoUsuario(tipo){
        switch(tipo){
            case "valido":
                return{
                    "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
                    "cpf": `${fakerbr.br.cpf()}`,
                    "email": `${faker.internet.email()}`,
                    "senha": `${faker.internet.password()}`
                }      
            case "invalido":
                return{
                    "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
                    "cpf": `${fakerbr.br.cpf()}`,
                    "email": `${faker.internet.email()}`,
                    "senha": `${faker.internet.password()}`
                }     
        }   
    }
}