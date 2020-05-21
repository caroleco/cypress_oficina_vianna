describe('Novo caso', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name=user-id]').type('56163d6c394f85d5')
        cy.get('button').contains('Entrar').click()
    })

    it('Cadastrando', () => {

    })
})