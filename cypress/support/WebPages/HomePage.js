/**
 * Home Page Fields 
 */

export let HomePage = {
  HomepageLogo: () => cy.get('.app_logo'),
  Items: () => cy.get('.inventory_item'),
  ShoppingCartItemCount: () => cy.get('.shopping_cart_link > .shopping_cart_badge'),
};