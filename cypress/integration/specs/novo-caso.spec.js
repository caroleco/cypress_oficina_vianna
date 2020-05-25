
var faker = require('faker');
let randomName = faker.company.companyName();

describe('Novo caso', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name=user-id]').type('56163d6c394f85d5')
        cy.get('button').contains('Entrar').click()
    })

    it('Cadastrando com sucesso', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type(`${randomName}`)
        cy.get('textarea').type('Testando a aplicação')
        cy.get('#valor').type('120.00')
        cy.get('button[type=submit]').click()
        cy.get('li').should('contain', 'ok title')
        cy.get('li strong').contains('CASO').next().should('contain', 'ok title')
    })

    it('Cadastrando e excluindo um caso', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type(`${randomName}`)
        cy.get('textarea').type('Excluir')
        cy.get('#valor').type('120.00')
        cy.get('button[type=submit]').click()
        cy.get('li').contains(`${randomName}`).parent().within(() => {
            cy.get('button').click()
        })
        cy.get('li strong').contains('CASO').next().should('not.contain', `${randomName}`)
    })

    it('Cadastrando sem valor e verificando mensagem de erro', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type(`${randomName}`)
        cy.get('textarea').type('Testando a aplicação')
        cy.get('button[type=submit]').click()
        cy.get('p.error').should('contain', 'Ops! Incidente não foi cadastrado.')
    })

    /*O próximo teste é um bug intencional no sistema, para demonstrar a reação de Cypress
    quando há bug.*/
    it('Cadastrando inserindo string no campo de Valor', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type(`${randomName}`)
        cy.get('textarea').type('Testando a aplicação')
        cy.get('#valor').type('teste string')
        cy.get('button[type=submit]').click()
        cy.get('p.error').should('contain', 'Ops! Incidente não foi cadastrado.')
    })
})