/**
 * Checkout Page Fields 
 */

export let CheckoutPage = {
    ShoppingCartLink:() => cy.get('.shopping_cart_link'),
    CheckoutBtn:() =>  cy.get('.checkout_button'),
    FirstNameInput:() => cy.get('#first-name'),
    LastNameInput:() =>  cy.get('#last-name'),
    PostalCodeInput:() =>  cy.get('#postal-code'),
    ContinueBtn: () => cy.get('.cart_button'),
    Subtotal:() => cy.get('.summary_subtotal_label'),
    Tax:() => cy.get('.summary_tax_label'),
    TotalAmount:() => cy.get('.summary_total_label'),
};