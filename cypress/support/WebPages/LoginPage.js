/**
 * Login Page Fields 
 */

export let LoginPage = {
  UserNameField: () => cy.get('#user-name'),
  PasswordField: () => cy.get('#password'),
  LoginButton: () => cy.get('#login-button'),
  ErrorMessage: () => cy.get('[data-test="error"]'),
};