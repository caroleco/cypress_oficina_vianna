/// <reference types="Cypress" />
describe('Form Authentication',()=>{
    beforeEach(()=>{
        cy.visit('')
        cy.get('a').contains('Form Authentication').click()
    })
    it('Login com sucesso',()=>{
        cy.get('input[name=username]').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button').contains('Login').click()

        cy.get('.success').should('contain','You logged into a secure area!')
    })

    it.only('Login usando fixtute',()=>{
        cy.fixture('login').then((login)=>{
            cy.get('input[name=username]').type(login.username)
            cy.get('#password').type(login.password)
        })
        
        cy.get('button').contains('Login').click()

        cy.get('.success').should('contain','You logged into a secure area!')
    })

    it('Login com senha incorreta',()=>{
        cy.get('input[name=username]').type('tomsmith')
        cy.get('#password').type('Super!')
        cy.get('button').contains('Login').click()

        cy.get('.error').should('contain','Your password is invalid!')
    })
    it('Login com usuário incorreto',()=>{
        cy.get('input[name=username]').type('tom')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button').contains('Login').click()

        cy.get('.error').should('contain','Your username is invalid!')
    })
})