/// <reference types="cypress" />

import MOCadastrarEnderecos from '../pages/mercado_endereco.page'
import MOLogin from '../pages/mercado_login.page'

describe('Testes Front Mercado Online - CADASTRAO DE ENDERECOS', () => {
    describe('Testes cadastro de enderecos/Positivos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()   
        })
        it('Deve adicionar um endereco com sucesso', () => {
            MOLogin.realizarLogin()
        })
    }) 
})