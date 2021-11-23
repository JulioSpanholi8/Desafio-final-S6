import Base from './_base.page'
import {ENDERECO as ED} from './components/mercado_endereco.elements'

export default class MOCadastrarEnderecos extends Base {
    static cadastroEndereco() {
        cy.wait(2000)
        super.validarUrl('/my-account')
        super.verifyElement(ED.MENU_CONTA, 3)
        super.clickOnElement(ED.MENU_CONTA, 3)
        cy.wait(4000)
        super.verifyElement(ED.BTN_EDITAR)
        super.clickOnElement(ED.BTN_EDITAR, 0)
        cy.wait(4000)
        cy.readFile(`cypress/fixtures/cadastro_endereco/endereco.json`).then((enderecoNovo) => {
            super.typeValue(ED.FORM_CEP, enderecoNovo.valido.cep)
        })
        cy.wait(2000)
        super.typeValue(ED.FORM_NOMEENDERECO, "Endereco Principal")
        super.typeValue(ED.FORM_NUMERO, "s/n")
        super.clickOnElement(ED.BTN_SALVAR)
        super.validarUrl('/my-account/addresses')
    }
}