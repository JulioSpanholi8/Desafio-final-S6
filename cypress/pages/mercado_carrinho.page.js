import Base from './_base.page'
import {CARRINHO as CART} from './components/mercado_carrinho.elements'
import {MODAL} from './components/mercado_carrinho.elements'
import {PAGECART as PC} from './components/mercado_carrinho.elements'

export default class MOCarrinho extends Base {
    static adicionarItemCarrinho() {
        super.verifyElement(CART.ADD_PRODUTO1)
        super.clickOnElement(CART.ADD_PRODUTO1)
        super.verifyElement(CART.ADD_PRODUTO2)
        super.clickOnElement(CART.ADD_PRODUTO2) 
    }
    static modalCarrinho(){
        super.verifyElement(MODAL.CART_MODAL)
        super.clickOnElement(MODAL.CART_MODAL)
        super.verifyElement(MODAL.BUSCAR_CART)
        super.verifyElement(MODAL.CART_PEDIDO1)
        super.verifyElement(MODAL.CART_PEDIDO2)
        super.verifyElement(MODAL.TOTAL_CART)
        super.verifyElement(MODAL.BTN_FINALIZAR)
        super.verifyElement(MODAL.BTN_LIMPARCART)
        cy.wait(2000)
        super.clickOnElement(MODAL.BTN_FINALIZAR)
        super.validarUrl('/checkout/cart')
    }
    static paginaCarrinho(){
        super.verifyElement(PC.DADOS_SEGUROS)
        super.verifyElement(PC.QUANTIDADE)
        super.verifyElement(PC.TXT_PRODUTO)
        super.verifyElement(PC.PRECO_CART)
        super.verifyElement(PC.RESUMO_CART)
        super.verifyElement(PC.CEP_CART)
        super.verifyElement(PC.BTN_CONTINUAR)
    }
}