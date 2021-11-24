/// <reference types="cypress" />

import MOCarrinho from '../pages/mercado_carrinho.page'
import MOLogin from '../pages/mercado_login.page'
import MOCheckout from '../pages/mercado_checkout.page'

describe('Testes Front Mercado Online - CHECKOUT', () => {
    describe('Testes de checkout/Positivos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
            MOLogin.realizarLogin()
            MOCarrinho.adicionarItemCarrinho()
        })
        it('Deve adicionar itens ao carrinho e realizar checkout com sucesso', () => {
            MOCheckout.realizarCheckout()
        })
    })

    /****************************************************************************/

    
})