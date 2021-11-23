import Base from './_base.page'
import autFixtures from '../dynamics/autFixtures'
import {CHECKOUT as CK} from './components/mercado_checkout.elements'
import {MODAL} from './components/mercado_carrinho.elements'
import {PAGECART as PC} from './components/mercado_carrinho.elements'

export default class MOCheckout extends Base {
    static realizarCheckout(){
        super.clickOnElement(MODAL.CART_MODAL)
        cy.wait(2000)
        super.clickOnElement(MODAL.BTN_FINALIZAR)
        super.validarUrl('/checkout/cart')
        super.clickOnElement(CK.BTN_CONTINUAR)
        cy.fixture(`../fixtures/cadastro_usuario/userValido`).then((usuarioNovo) => {
            super.typeValue(CK.CHECK_LOGIN, usuarioNovo.valido.email)
        })
        super.verifyElement(CK.BTN_SEGUIR)
        super.clickOnElement(CK.BTN_SEGUIR)
    }
}