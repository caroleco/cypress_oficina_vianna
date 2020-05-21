describe('Novo caso', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name=user-id]').type('56163d6c394f85d5')
        cy.get('button').contains('Entrar').click()
    })

    it('Cadastrando', () => {
        cy.get('#new-incident').click()
        cy.get('input[placeholder=Título]').type('ok title')
        cy.get('textarea').type('Tetando a aplicação')
        cy.get('#valor').type('120.00')
        cy.get('button[type=submit]').click()
        cy.get('li').should('contain','ok title')
        cy.get('li strong').contains('CASO').next().should('contain','ok title')
    })
})