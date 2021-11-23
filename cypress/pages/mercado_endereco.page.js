import Base from './_base.page'
import autFixtures from '../dynamics/autFixtures'
import {ENDERECO as ED} from './components/mercado_endereco.elements'

export default class MOCadastrarEnderecos extends Base {
    static cadastroEndereco() {
        super.verifyElement(ED.MENU_CONTA, 3)
        super.clickOnElement(ED.MENU_CONTA, 3)
        super.verifyElement(ED.BTN_EDITAR)
        super.clickOnElement(ED.BTN_EDITAR)
        super.clickOnElement(ED.MENU_CONTA, 3)
        cy.wait(2000)
        cy.url().then((url) => {
            if (url.includes('/addresses/edit')) {
                cy.reload()
                this.cadastroEndereco()
            }
        })
    }
}