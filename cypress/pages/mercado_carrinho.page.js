import Base from './_base.page'
import {CARRINHO as CART} from './components/mercado_carrinho.elements'

export default class MOCarrinho extends Base {
    static adicionarItemCarrinho() {
        super.clickOnElement(CART.IMG_LOGO)
        super.validarElemento(CART.ADD_PRODUTO1)
        super.clickOnElement(CART.ADD_PRODUTO1)
        super.validarElemento(CART.ADD_PRODUTO2)
        super.clickOnElement(CART.ADD_PRODUTO2) 
    }
    static modalCarrinho(){
        super.validarElemento(CART.CART_MODAL)
        super.clickOnElement(CART.CART_MODAL)
        super.validarElemento(CART.BUSCAR_CART)
        super.validarElemento(CART.CART_PEDIDO1)
        super.validarElemento(CART.CART_PEDIDO2)
        super.validarElemento(CART.TOTAL_CART)
        super.validarElemento(CART.BTN_FINALIZAR)
        super.validarElemento(CART.BTN_LIMPARCART)
    }
    static paginaCarrinho(){
        super.clickOnElement(CART.CART_MODAL)
        //super.clickOnElement(CART.BTN_FINALIZAR)
        //super.validarElemento(CART.DADOS_SEGUROS)
        //super.validarElemento(CART.RESUMO_CART)
        //super.validarElemento(CART.CEP_CART)
        //super.validarElemento(CART.BTN_CONTINUAR)
    }
}