import Base from './_base.page'
import autFixtures from '../pages/autFixtures'
import {CADASTRAR as CD} from './components/mercado_cdusuario.elements'

export default class MOCadastrarUsuario extends Base {
    static acessarCadastro(){
        super.validarElemento(CD.BTN_CADASTRO)
        super.clickOnElement(CD.BTN_CADASTRO)
        super.validarUrl(CD.URL)
        super.validateElementText(CD.TXT_CADASTRO, 'Cadastro de novo cliente')
        super.validarElemento(CD.IMG_SEGURO)
    }
    static verificarCadastroPessoaFisica(){
        super.validarElemento(CD.INP_NOME)
        super.validarElemento(CD.INP_NASCIMENTO)
        super.validarElemento(CD.INP_CPF)
        super.validarElemento(CD.INP_TELEFONE)
        super.validarElemento(CD.INP_CELULAR)
        super.validarElemento(CD.INP_EMAIL)
        super.validarElemento(CD.INP_EMAIL2)
        super.validarElemento(CD.INP_SENHA)
        super.validarElemento(CD.INP_SENHA2)
        super.validarElemento(CD.BTN_AVANCAR)
    }
    static verificarCadastroPessoaJuridica(){
        super.clickOnElement(CD.BTN_JURIDICA)
        super.validarElemento(CD.INP_RAZAOSOCIAL)
        super.validarElemento(CD.INP_IE)
        super.validarElemento(CD.INP_CNPJ)
        super.validarElemento(CD.INP_NOMECLIENTE)
        super.validarElemento(CD.INP_NASCIMENTOPJ)
        super.validarElemento(CD.INP_CPFPJ)
        super.validarElemento(CD.INP_TELEFONE)
        super.validarElemento(CD.INP_CELULAR)
        super.validarElemento(CD.INP_EMAIL)
        super.validarElemento(CD.INP_EMAIL2)
        super.validarElemento(CD.INP_SENHA)
        super.validarElemento(CD.INP_SENHA2)
        super.validarElemento(CD.BTN_AVANCAR)
    }
    static cadastroPessoaFisica(){
        autFixtures.usuarioValido()
        cy.readFile(`cypress/fixtures/userValido.json`).then((usuarioNovo) => {
            super.typeValue(CD.INP_NOME, usuarioNovo.valido.nome)
            super.typeValue(CD.INP_NASCIMENTO, usuarioNovo.valido.nascimento)
            super.typeValue(CD.INP_CPF, usuarioNovo.valido.cpf)
            //super.typeValue(CD.INP_TELEFONE, usuarioNovo.valido.telefone)
            super.typeValue(CD.INP_CELULAR, usuarioNovo.valido.celular)
            super.typeValue(CD.INP_EMAIL, usuarioNovo.valido.email)
            super.typeValue(CD.INP_EMAIL2, usuarioNovo.valido.email)
            super.typeValue(CD.INP_SENHA, usuarioNovo.valido.senha)
            super.typeValue(CD.INP_SENHA2, usuarioNovo.valido.senha)
        })
        super.clickOnElement(CD.BTN_AVANCAR)
        super.validarUrl('/loja')
    }

    /****************************************************************************/

    static campoCpfInvalido(){
        autFixtures.usuarioInvalido()
        cy.readFile(`cypress/fixtures/userInvalido.json`).then((usuarioNovo) => {
            super.typeValue(CD.INP_NOME, usuarioNovo.invalido.nome)
            super.typeValue(CD.INP_NASCIMENTO, usuarioNovo.invalido.nascimento)
            super.typeValue(CD.INP_CPF, usuarioNovo.invalido.cpf)
            super.typeValue(CD.INP_TELEFONE, usuarioNovo.invalido.telefone)
            super.typeValue(CD.INP_CELULAR, usuarioNovo.invalido.celular)
            super.typeValue(CD.INP_EMAIL, usuarioNovo.invalido.email)
            super.typeValue(CD.INP_EMAIL2, usuarioNovo.invalido.email)
            super.typeValue(CD.INP_SENHA, usuarioNovo.invalido.senha)
            super.typeValue(CD.INP_SENHA2, usuarioNovo.invalido.senha)
        })
        super.clickOnElement(CD.BTN_AVANCAR)
        super.validateElementText(CD.TXT_ERROCPF, 'CPF inválido! Por favor, digite um número válido.')
    }   
}