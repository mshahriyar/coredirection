///   <reference types="Cypress" />

class LoginPage
{
    
    visit()
    {
        cy.visit('/')
        //cy.visit(cypress.e2e('baseUrl'))
        cy.get('.btn-sign-in').click()

    }

    fillEmail(value)
    {
        const field=cy.get('#signInEmail')
        field.clear()
        field.type(value)
        return this
    }
    fillPassword(value)
    {
        const field=cy.get('#signInPassword')
        field.clear()
        field.type(value)
        return this
    }

    submit()
    {
        const button=cy.contains('Sign In')
        button.click()

    }
}
 export default LoginPage


    





  



    

  