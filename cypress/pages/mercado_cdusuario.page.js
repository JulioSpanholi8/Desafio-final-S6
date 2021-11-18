import Base from './_base.page'

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
}