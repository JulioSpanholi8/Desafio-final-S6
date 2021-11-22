/// <reference types="cypress" />

import MOLogin from '../pages/mercado_login.page'
import MOCadastrarUsuario from '../pages/mercado_cdusuario.page'

describe('Testes Front Mercado Online - CADASTRO DE USUARIO', () => {
    describe('Testes cadastro de usuário/Positivos', () => {
        it('Deve verificar se os campos para cadastro de pessoa jurídica estão adequados', () => {
            MOLogin.acessarMercadoOnline()
            MOCadastrarUsuario.acessarCadastro()
            MOCadastrarUsuario.verificarCadastroPessoaJuridica()
        })
        it('Deve verificar se os campos para cadastro de pessoa física estão adequados', () => {
            MOCadastrarUsuario.acessarCadastro()
            MOCadastrarUsuario.verificarCadastroPessoaFisica()
        })
        it('Deve realizar o cadastro de uma pessoa física com sucesso', () => {
            MOCadastrarUsuario.cadastroPessoaFisica()
        })
    })

    /****************************************************************************/

    describe('Testes cadastro de usuário/Negativos', () => {
        it('Deve realizar o cadastro de uma pessoa com cpf inválido', () => {
            MOCadastrarUsuario.acessarCadastro()
            MOCadastrarUsuario.campoCpfInvalido()
        })
    })
})