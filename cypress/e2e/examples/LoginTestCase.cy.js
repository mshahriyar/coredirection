/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage.cy"
const login= new LoginPage

before(function()
{
    cy.fixture('example').then(function(data){
        globalThis.data=data
    })
})

beforeEach(function()
{
    login.visit()
})

describe('TestSuite', function()
{

    it('valid Login Test', function(){
      
        
        login.fillEmail(data.email)
        login.fillPassword(data.password)
        login.submit()
        cy.title().should('be.equal', 'Core Direction | Inspiring Movement')
    })
    it('invalid Login Test', function(){
        
     
        login.fillEmail(data.wrongEmail)
        login.fillPassword(data.wrongPassword)
        login.submit()
        cy.title().should('not.be.equal', 'Welcome to the coredirection')
       //This way we can apply assertion when the text has something special that is not matching with the exact string
        // cy.title().then(function(element)
        // {
        //     const actualText= element.text()
        //     expect(actualText.includes("Welcome")).to.be.true
        // })
        
    })
})