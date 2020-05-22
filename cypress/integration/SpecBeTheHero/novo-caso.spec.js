var rn = require('random-number');
var options = {
    min: 1
    , max: 999
    , integer: true
}

let random_number = rn(options);

describe('Novo caso', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name=user-id]').type('56163d6c394f85d5')
        cy.get('button').contains('Entrar').click()
    })

    it('Cadastrando com sucesso', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type('ok title')
        cy.get('textarea').type('Testando a aplicação')
        cy.get('#valor').type('120.00')
        cy.get('button[type=submit]').click()
        cy.get('li').should('contain', 'ok title')
        cy.get('li strong').contains('CASO').next().should('contain', 'ok title')
    })

    it('Cadastrando e excluindo um caso', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type(`Exclusão ${random_number}`)
        cy.get('textarea').type('Excluir')
        cy.get('#valor').type('120.00')
        cy.get('button[type=submit]').click()
        cy.get('li').contains(`Exclusão ${random_number}`).parent().within(() => {
            cy.get('button').click()
        })
        cy.get('li strong').contains('CASO').next().should('not.contain', `Exclusão ${random_number}`)
    })

    it('ERRADO - Cadastrando e excluindo um caso pelo ID do ícone', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type('Exclusão')
        cy.get('textarea').type('Excluir')
        cy.get('#valor').type('120.00')
        cy.get('button[type=submit]').click()
        cy.get('button[id^=trash]').eq(1).click()
    })

    it('Cadastrando sem valor e verificando mensagem de erro', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type('ok title')
        cy.get('textarea').type('Testando a aplicação')
        cy.get('button[type=submit]').click()
        cy.get('p.error').should('contain', 'Ops! Incidente não foi cadastrado.')
    })

    it.only('Cadastrando inserindo string no campo de Valor', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type('ok title')
        cy.get('textarea').type('Testando a aplicação')
        cy.get('#valor').type('teste string')
        cy.get('button[type=submit]').click()
        cy.get('p.error').should('contain', 'Ops! Incidente não foi cadastrado.')
    })
})