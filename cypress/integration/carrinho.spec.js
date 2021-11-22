/// <reference types="cypress" />

import MOLogin from '../pages/mercado_login.page'
import MOCarrinho from '../pages/mercado_carrinho.page'

describe('Testes Front Mercado Online - CARRINHO', () => {
    describe('Testes de carrinho/Positivos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
            MOLogin.acessarLogin()
            MOLogin.realizarLogin()
        })
        it('Deve adicionar itens ao carrinho e realizar validações no modal com sucesso', () => {
            MOCarrinho.adicionarItemCarrinho()
        })
    })  
})