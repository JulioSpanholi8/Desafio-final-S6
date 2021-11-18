/// <reference types="cypress" />

import MercadoOnlineLogin from '../pages/mercado_login.page'
import MercadoOnlineCadastrarUsuario from '../pages/mercado_cdusuario.page'

describe('Testes Front Mercado Online - CADASTRO DE USUARIO', () => {
    describe('Testes de cadastro de usuário positivos', () => {
        before(() => {
            MercadoOnlineLogin.acessarMercadoOnline()
        })
        it('Deve verificar se os campos para cadastro de pessoa física estão adequados', () => {
            MercadoOnlineCadastrarUsuario.acessarCadastro()
            MercadoOnlineCadastrarUsuario.verificarCadastroPessoaFisica()
        })
        it('Deve verificar se os campos para cadastro de pessoa jurídica estão adequados', () => {
            MercadoOnlineCadastrarUsuario.acessarCadastro()
            MercadoOnlineCadastrarUsuario.verificarCadastroPessoaJuridica()
        })
        it('Deve realizar o cadastro de uma pessoa física', () => {
            MercadoOnlineCadastrarUsuario.cadastroUsuarioFisico()
        })
    })
})