/// <reference types="cypress" />

import MOLogin from '../pages/mercado_login.page'

describe('Testes Front Mercado Online - LOGIN', () => {
    describe('Testes de login/Positivos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
        })
        it('Deve realizar login no sistema com sucesso', () => {
            MOLogin.realizarLogin()
        })
    })
        
    /****************************************************************************/

    describe('Testes de login/Negativos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
        })
        it('Deve realizar login no sistema com usuário inexistente', () => {
            MOLogin.falhaLogin()
        })
    })
})