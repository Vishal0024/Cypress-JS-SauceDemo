import { CheckoutPage } from '../support/WebPages/CheckoutPage';
import { HomePage } from '../support/WebPages/HomePage';
import { LoginPage } from '../support/WebPages/LoginPage';

/**
 * Test 1 - User can successfully place the order
 */

context('Checkout Tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('standard_user','secret_sauce')
    })

    /**
    * Test case to validate that user can place order successfully
    */
    describe('User', () => {
        it('Can successfully place order', () => {
            let firstName = 'Vishal'
            let lastname = 'Bansal'
            let zipcode = '148101'

            HomePage.Items()
                .each(($el, index, $list) => {
                    if (index % 2 == 0) {
                        cy.wrap($el).find('.btn_primary')
                            .click()
                    }
                })

           CheckoutPage.ShoppingCartLink()
                .click();

           CheckoutPage.CheckoutBtn()
                .click();

            CheckoutPage.FirstNameInput()
                .type(firstName)
                .should('have.value', firstName)

            CheckoutPage.LastNameInput()
                .type(lastname)
                .should('have.value', lastname)

           CheckoutPage.PostalCodeInput()
                .type(zipcode)
                .should('have.value', zipcode)

            CheckoutPage.ContinueBtn().click()

            CheckoutPage.Subtotal()
                .should('have.text', 'Item total: $53.97')

            CheckoutPage.Tax()
                .should('have.text', 'Tax: $4.32')

            CheckoutPage.TotalAmount()
                .should('have.text', 'Total: $58.29')

            CheckoutPage.ContinueBtn().click()

            cy.get('.complete-header')
                .should('have.text', 'Thank you for your order!')

        })
    })
})