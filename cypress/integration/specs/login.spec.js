describe('ok', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Login com fixture', () => {
        cy.server()
        cy.route('POST', 'http://localhost:3333/session').as('postSession')

        cy.fixture('login').then((login) => {
            cy.get('input[name=user-id]').type(login.user_id, { log: false })
        })

        cy.get('button').contains('Entrar').click().wait('@postSession').then((xhr) => {
            assert.equal(xhr.response.body.name, 'APAD')
        }).and('have.property', 'status', 200)

        cy.url().should('include', 'profile')
        cy.get('.exit').click()
        cy.get('h1').contains('Faça seu logon')
    })

})