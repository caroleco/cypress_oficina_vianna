/// <reference types="Cypress" />
describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('https://training-wheels-protocol.herokuapp.com/')
        cy.get('a').contains('Login').click()
    })
    it('Login com sucesso',()=>{
        cy.get('input[name=username]').type('stark')
        cy.get('#passId').type('jarvis!')
        cy.get('button').contains('Login').click()

        cy.get('.success').should('contain','Olá, Tony Stark. Você acessou a área logada!')
    })

    it('Login com senha incorreta',()=>{
        cy.get('input[name=username]').type('stark')
        cy.get('#passId').type('marvel')
        cy.get('button').contains('Login').click()

        cy.get('.error').should('contain','Senha é invalida!')
    })
    it('Login com usuário incorreto',()=>{
        cy.get('input[name=username]').type('tom')
        cy.get('#passId').type('SuperSecretPassword!')
        cy.get('button').contains('Login').click()

        cy.get('.error').should('contain','O usuário informado não está cadastrado!')
    })
})