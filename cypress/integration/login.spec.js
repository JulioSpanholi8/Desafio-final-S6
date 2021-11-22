/// <reference types="cypress" />

import MOLogin from '../pages/mercado_login.page'

describe('Testes Front Mercado Online - LOGIN', () => {
    describe('Testes de login/Positivos', () => {
        before(() => {
            MOLogin.acessarMercadoOnline()
            MOLogin.acessarLogin()
        })
        it('Deve verificar se os campos para login estão adequados', () => {
            MOLogin.verificarLogin()
        })
        it('Deve realizar login no sistema com sucesso', () => {
            MOLogin.acessarMercadoOnline()
            MOLogin.acessarLogin()
            MOLogin.realizarLogin()
        })
    })
        
    /****************************************************************************/

    describe('Testes de login/Negativos', () => {
        it('Deve realizar login no sistema com usuário inexistente', () => {
            MOLogin.acessarMercadoOnline()
            MOLogin.acessarLogin()
            MOLogin.falhaLogin()
        })
    })
})