import Base from './_base.page'
import {LOGIN as LG} from './components/mercado_login.elements'
import {CARRINHO as CART} from './components/mercado_carrinho.elements'

export default class MOLogin extends Base {
    static acessarMercadoOnline(){
        cy.visit('/')
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
    static realizarLogin(){
        super.clickOnElement(LG.BTN_ENTRAR)
        super.clickOnElement(LG.BTN_LOGIN)
        cy.fixture(`../fixtures/userValido.json`).then((usuarioNovo) => {
            super.typeValue(LG.INP_EMAIL, usuarioNovo.valido.email)
        })
        super.clickOnElement(LG.BTN_CONTINUE)
        super.validarElemento(LG.INP_SENHA)
        cy.fixture(`../fixtures/userValido.json`).then((usuarioNovo) => {
            super.typeValue(LG.INP_SENHA, usuarioNovo.valido.senha)
        })
        super.validarElemento(LG.BTN_LOGAR)
        super.clickOnElement(LG.BTN_LOGAR)
        super.validarUrl('/my-account')
        super.clickOnElement(CART.IMG_LOGO)
    }
    static falhaLogin(){
        super.clickOnElement(LG.BTN_ENTRAR)
        super.clickOnElement(LG.BTN_LOGIN)
        cy.fixture(`../fixtures/userInvalido.json`).then((usuarioNovo) => {
            super.typeValue(LG.INP_EMAIL, usuarioNovo.invalido.email)
        })
        super.clickOnElement(LG.BTN_CONTINUE)
        super.validarElemento(LG.INP_SENHA)
        cy.fixture(`../fixtures/userInvalido.json`).then((usuarioNovo) => {
            super.typeValue(LG.INP_SENHA, usuarioNovo.invalido.senha)
        })
        super.validarElemento(LG.BTN_LOGAR)
        super.clickOnElement(LG.BTN_LOGAR)
        super.validarUrl('/central-do-cliente')
    }
}