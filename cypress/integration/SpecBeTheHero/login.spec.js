describe('ok', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Não tenho cadastro', () => {
        cy.get('.back-link').click()
        cy.get('input[name="ong name"]').type('testenad')
        cy.get('#email').type('carol@t.com')
        cy.get('input[placeholder=Whatsapp]').type('32985848548')
        cy.get('#city').type('Juiz de Fora')
        cy.get('#uf').type('MG')
        cy.contains('Cadastrar').click()
        cy.get('.success').should('contain', 'Seu ID de acesso')
    })

    it.only('Login', () => {
        cy.server()
        cy.route('POST', 'http://localhost:3333/session').as('postSession')

        cy.get('input[name=user-id]').type('6cbfd3c4')

        cy.get('button').contains('Entrar').click().wait('@postSession').then((xhr) => {
            assert.equal(xhr.response.body.name, 'APAD')
        }).and('have.property', 'status', 200)

        cy.url().should('include', 'profile')
        cy.get('.exit').click()
        cy.get('h1').contains('Faça seu logon')


    })
})