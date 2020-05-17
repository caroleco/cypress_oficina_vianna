import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('faço login com {string} e {string}', (login, senha) => {
    cy.get('input[name=username]').type(login)
    cy.get('#password').type(senha)
    cy.get('button').contains('Login').click()
})

Then('sistema deve ser redirecionado para página secure', () => {
    cy.url().should('contain', 'secure')
})

And('devo ver a mensagem de sucesso {string}', (success) => {
    cy.get('.success').should('contain', success)
})

Then('devo ver alerta de mensagem {string}', (mensagem) => {
    cy.get('.error').should('contain', mensagem)
})
