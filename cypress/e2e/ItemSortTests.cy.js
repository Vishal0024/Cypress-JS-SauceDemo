import { HomePage } from '../support/WebPages/HomePage';
import { LoginPage } from '../support/WebPages/LoginPage';

/**
 * Test 1 - User can sort items by name
 * Test 2 - User can sort items by price
 */

context('Items Sorting Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user', 'secret_sauce')
  })


  /**
    * Test suite for the Items Page functionality.
    */
  describe('User', () => {

    /**
    * Test case to validate that user can sort items by name
    */
    it('can sort items by name', () => {

      cy.get('.product_sort_container').as('sort')
      cy.get('@sort').should('have.value', 'az')

      let productItemNames = [];
      let expectedproductItemNames = [];

      HomePage.Items()
        .find('.inventory_item_name')
        .each(($el, index, $list) => {
          cy.wrap($el).invoke('text').as('item')
          cy.get('@item')
            .then((item) => {
              productItemNames.push(item)
            })
        })
        .then(() => {
          expectedproductItemNames = productItemNames.concat().sort();
          expect(expectedproductItemNames).to.deep.eq(productItemNames)
        })

      cy.get('@sort').should('have.value', 'az')
        .select('Name (Z to A)')
      cy.get('@sort').should('have.value', 'za')

      HomePage.Items()
        .find('.inventory_item_name')
        .each(($el, index, $list) => {
          cy.wrap($el).should('have.text', productItemNames[productItemNames.length - index - 1])
        })
    })

    /**
    * Test case to validate that user can sort items by price
    */
    it('can sort items by price', () => {

      cy.get('.product_sort_container').as('sort')

      cy.get('@sort').select('Price (low to high)')
      cy.get('@sort').should('have.value', 'lohi')


      let productItemPrices = [];
      let expectedproductItemPrices = [];

      HomePage.Items()
        .find('.inventory_item_price')
        .each(($el, index, $list) => {
          cy.wrap($el).invoke('text').as('item')
          cy.get('@item')
            .then((item) => {
              productItemPrices.push(item)
            })
        })

      cy.get('@sort').select('Price (high to low)')
      cy.get('@sort').should('have.value', 'hilo')

      HomePage.Items()
        .find('.inventory_item_price')
        .each(($el, index, $list) => {
          cy.wrap($el).should('have.text', productItemPrices[productItemPrices.length - index - 1])
        })
    })
  })
})  