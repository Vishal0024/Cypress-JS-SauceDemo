import { LoginPage } from '../support/WebPages/LoginPage';
import { HomePage } from '../support/WebPages/HomePage';

/**
 * Test 1 - User can see username input field 
 * Test 2 - User can see password input field
 * Test 3 - User can see login button
 * Test 4 - User can login with valid username and password
 * Test 5 - User can not login with incorrect password and see error message
 * Test 6 - User can not login with locked out user and see proper error message
 */

context('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  /**
  * Test suite for the Login Page functionality.
  */
  describe('Login Page', () => {

    /**
    * Test case to verify the presence and initial state of the username input field.
    */
    it('has user name input field', () => {
      LoginPage.UserNameField()
        .should('be.visible')
        .and('have.value', '')
    })

    /**
    * Test case to verify the presence and initial state of the password input field.
    */
    it('has password input field', () => {
      LoginPage.PasswordField()
        .should('be.visible')
        .and('have.value', '')

    })

    /**
    * Test case to verify the presence of the login button.
    */
    it('has login button', () => {
      LoginPage.LoginButton()
        .should('be.visible')
    })
  })

  /**
  * Test suite to validate user login feature with various scenarios - Valid Credentials, Incorrect Password, and Locked User.
  */
  describe('A User', () => {

    /**
    * Test case to verify successful login with standard user credentials.
    */
    it('can successfully login with standard user', () => {
      LoginPage.UserNameField()
        .type('standard_user')

      LoginPage.PasswordField()
        .type('secret_sauce')

      LoginPage.LoginButton().click()

      HomePage.HomepageLogo()
        .should('be.visible')

    })

    /**
    * Test case to verify unsuccessful login with incorrect password.
    */
    it('cannot login with wrong password', () => {
      LoginPage.UserNameField()
        .type('standard_user')

      LoginPage.PasswordField()
        .type('wrong_password')

      LoginPage.LoginButton().click()

      LoginPage.ErrorMessage()
        .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    /**
    * Test case to verify unsuccessful login due to locked user account.
    */
    it('cannot login due to locked user', () => {
      LoginPage.UserNameField()
        .type('locked_out_user')

      LoginPage.PasswordField()
        .type('secret_sauce')

      LoginPage.LoginButton().click()

      LoginPage.ErrorMessage()
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })
  })
})