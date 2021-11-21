/// <reference types="cypress" />

import MercadoOnlineLogin from '../pages/mercado_login.page'

describe('Testes Front Mercado Online - LOGIN', () => {
    describe('Testes de login positivos', () => {
        before(() => {
            MercadoOnlineLogin.acessarMercadoOnline()
        })
        it('Deve verificar se os campos para login estão adequados', () => {
            MercadoOnlineLogin.acessarLogin()
            MercadoOnlineLogin.verificarLogin()
        })
    })
})