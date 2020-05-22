import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('faço login com {string}', (login) => {
    cy.get('input[name=user-id]').type(login)
    cy.get('button').contains('Entrar').click()
})

Then('sistema deve ser redirecionado para página profile', () => {
    cy.url().should('contain', 'profile')
})

And('devo ver a mensagem {string}', (mensagem) => {
    cy.get('header span').should('contain', mensagem)
})

Then('devo ver alerta de mensagem {string}', (mensagem) => {
    cy.get('.error').should('contain', mensagem)
})
