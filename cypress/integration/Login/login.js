import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('faço login com {string}', (login) => {
    cy.get('input[name=user-id]').type(login)
    cy.get('button').contains('Entrar').click()
})

Then('devo ser autenticado',()=>{
    expect(localStorage.getItem('ongName')).to.eq('APAD')
    expect(localStorage.getItem('ongId')).to.eq('6cbfd3c4')
})

And('sistema deve ser redirecionado para página profile', () => {
    cy.url().should('contain', 'profile')
})

And('devo ver a mensagem {string}', (mensagem) => {
    cy.get('header span').should('contain', mensagem)
})

Then('não devo ser autenticado',()=>{
    expect(localStorage).to.be.empty
})

And('devo ver alerta de mensagem {string}', (mensagem) => {
    cy.get('.error').should('contain', mensagem)
})
