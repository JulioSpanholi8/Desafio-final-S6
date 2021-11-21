import Base from './_base.page'
import {LOGIN as LG} from './components/mercado_login.elements'

export default class MOLogin extends Base {
    static acessarMercadoOnline(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }
    static acessarLogin(){
        super.validarElemento(LG.BTN_ENTRAR)
        super.clickOnElement(LG.BTN_ENTRAR)
        super.validarUrl(LG.URL)
    }
    static verificarLogin(){
        super.validateElementText(LG.TXT_LOGIN, 'Já sou cadastrado')
        super.validateElementText(LG.TXT_AUTENTICAR, 'Informe seu e-mail ou CPF/CNPJ para se autenticar.')
        super.validarElemento(LG.BTN_LOGIN)
        super.clickOnElement(LG.BTN_LOGIN)
        super.validarElemento(LG.INP_IDENTIFICAR)
        super.validarElemento(LG.BTN_CONTINUE)
        super.validarElemento(LG.BTN_FACEBOOK)
    }
}