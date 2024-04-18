import { HomePage } from '../support/WebPages/HomePage';
import { LoginPage } from '../support/WebPages/LoginPage';

/**
 * Test 1 - User can add item to cart and remove item from cart
 * Test 2 - User can add multiple items to the cart
 */

context('Cart Operations Tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('standard_user', 'secret_sauce')
    })

    /**
    * Test suite for the Cart Page functionality.
    */
    describe('User', () => {

        /**
        * Test case to validate that user can add or remove item from cart
        */
        it('can add or remove item to/from cart', () => {

            HomePage.Items()
                .first()
                .find('.btn_primary')
                .click()

            HomePage.ShoppingCartItemCount()
                .should('have.text', '1')

            HomePage.Items()
                .first()
                .find('.btn_secondary')
                .click()

            HomePage.ShoppingCartItemCount()
                .should('not.exist')
        })

        /**
        * Test case to validate that user can add multiple items to cart
        */
        it('can add multiple products', () => {
            let inCart = 0;
            HomePage.Items()
                .each(($el, index, $list) => {
                    if (index % 2 == 0) {
                        cy.wrap($el).find('.btn_primary')
                            .click()

                        inCart++;
                    }
                })
                .then(() => {
                    HomePage.ShoppingCartItemCount()
                        .should('have.text', '' + inCart)
                })

        })
    })
})