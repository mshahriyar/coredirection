/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage.cy"


describe('TestSuite', function(){

    it('valid Login Test', function(){
        const login= new LoginPage
        login.visit()
        login.fillEmail('shahriyar3@mailinator.com')
        login.fillPassword('Shery123')
        login.submit()
        cy.title().should('be.equal', 'Core Direction | Inspiring Movement')
    })
    it('invalid Login Test', function(){
        const login= new LoginPage
        login.visit()
        login.fillEmail('shery114.com')
        login.fillPassword('Shery123')
        login.submit()
        cy.title().should('not.be.equal', 'Welcome to the coredirection')
    })
})