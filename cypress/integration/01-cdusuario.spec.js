/// <reference types="cypress" />

import MOLogin from '../pages/mercado_login.page'
import MOCadastrarUsuario from '../pages/mercado_cdusuario.page'

describe('Testes Front Mercado Online - CADASTRO DE USUARIO', () => {
    describe('Testes cadastro de usuário/Positivos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
            MOCadastrarUsuario.acessarCadastro()
        })
        it('Deve verificar se os campos para cadastro de pessoa jurídica estão adequados', () => {
            MOCadastrarUsuario.verificarCadastroPessoaJuridica()
        })
        it('Deve verificar se os campos para cadastro de pessoa física estão adequados', () => {
            MOCadastrarUsuario.verificarCadastroPessoaFisica()
        })
        it('Deve realizar o cadastro de uma pessoa física com sucesso', () => {
            MOCadastrarUsuario.cadastroPessoaFisica()
        })
    })

    /****************************************************************************/

    describe('Testes cadastro de usuário/Negativos', () => {
        beforeEach(() => {
            MOLogin.acessarMercadoOnline()
            MOCadastrarUsuario.acessarCadastro()
        })
        it('Deve realizar o cadastro de uma pessoa com cpf inválido', () => {
            MOCadastrarUsuario.campoCpfInvalido()
        })
    })
})