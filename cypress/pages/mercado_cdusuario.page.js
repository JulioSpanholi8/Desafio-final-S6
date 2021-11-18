import Base from './_base.page'

import Factory from '../dynamics/factory.js'
import {CADASTRAR as CD} from './components/mercado_cdusuario.elements'

export default class MercadoOnlineCadastrarUsuario extends Base {
    static acessarCadastro(){
        super.validarElemento(CD.BTN_CADASTRO)
        super.clickOnElement(CD.BTN_CADASTRO)
        super.validarUrl(CD.URL)
        super.validateElementText(CD.TXT_CADASTRO, 'Cadastro de novo cliente')
        super.validarElemento(CD.IMG_SEGURO)
    }
    static verificarCadastroPessoaFisica(){
        super.validarElemento(CD.INP_NOMECOMPLETO)
        super.validarElemento(CD.INP_NASCIMENTO)
        super.validarElemento(CD.INP_CPF)
        super.validarElemento(CD.INP_TELEFONE_FIXO)
        super.validarElemento(CD.INP_CELULAR)
        super.validarElemento(CD.INP_EMAIL)
        super.validarElemento(CD.INP_REPITA_EMAIL)
        super.validarElemento(CD.INP_SENHA)
        super.validarElemento(CD.INP_REPITA_SENHA)
        super.validarElemento(CD.BTN_AVANCAR)
    }
    static verificarCadastroPessoaJuridica(){
        super.clickOnElement(CD.BTN_JURIDICA)
        super.validarElemento(CD.INP_RAZAOSOCIAL)
        super.validarElemento(CD.INP_IE)
        super.validarElemento(CD.INP_CNPJ)
        super.validarElemento(CD.INP_NOME_CLIENTE)
        super.validarElemento(CD.INP_NASCIMENTO_PJ)
        super.validarElemento(CD.INP_CPF_PJ)
        super.validarElemento(CD.INP_TELEFONE_FIXO)
        super.validarElemento(CD.INP_CELULAR)
        super.validarElemento(CD.INP_EMAIL)
        super.validarElemento(CD.INP_REPITA_EMAIL)
        super.validarElemento(CD.INP_SENHA)
        super.validarElemento(CD.INP_REPITA_SENHA)
        super.validarElemento(CD.BTN_AVANCAR)
    }
    static cadastroUsuarioFisico(){
        let usuarioNovo = Factory.gerarNovoUsuario("valido")
        super.typeValue(CD.INP_NOMECOMPLETO, usuarioNovo.nome)
        super.typeValue(CD.INP_CPF, usuarioNovo.cpf)
        super.typeValue(CD.INP_CELULAR, '55 996000000')
        super.typeValue(CD.INP_EMAIL, usuarioNovo.email)
        super.typeValue(CD.INP_REPITA_EMAIL, usuarioNovo.email)
        super.typeValue(CD.INP_SENHA, usuarioNovo.senha)
        super.typeValue(CD.INP_REPITA_SENHA, usuarioNovo.senha)
        super.clickOnElement(CD.BTN_AVANCAR)
        super.validarUrl('/loja')
    }
}