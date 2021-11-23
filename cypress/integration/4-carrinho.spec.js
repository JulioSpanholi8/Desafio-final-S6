/// <reference types="cypress" />

import MOCarrinho from '../pages/mercado_carrinho.page'
import MOLogin from '../pages/mercado_login.page'

describe('Testes Front Mercado Online - CARRINHO', () => {
    describe('Testes de carrinho/Positivos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
        })
        it('Deve adicionar itens ao carrinho e realizar validações no modal e na página do carrinho com sucesso', () => {
            MOCarrinho.adicionarItemCarrinho()
            MOCarrinho.modalCarrinho()
            MOCarrinho.paginaCarrinho()
        })
    })  
})