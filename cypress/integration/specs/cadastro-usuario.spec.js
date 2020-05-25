describe('Cadastro de novo usuário', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Cadastro de usuário', () => {
        cy.get('.back-link').click()
        cy.get('input[name="ong name"]').type('testenad')
        cy.get('#email').type('carol@t.com')
        cy.get('input[placeholder=Whatsapp]').type('32985848548')
        cy.get('#city').type('Juiz de Fora')
        cy.get('#uf').type('MG')
        cy.contains('Cadastrar').click()
        cy.get('.success').should('contain', 'Seu ID de acesso')
        cy.get('#success-message span:first').should('not.be.empty')
    })

    it('Cadastro sem o campo obrigatório de cidade', () => {
        cy.get('.back-link').click()
        cy.get('input[name="ong name"]').type('Vida')
        cy.get('#email').type('vida@ong.com')
        cy.get('input[placeholder=Whatsapp]').type('32985848548')
        cy.get('#uf').type('MG')
        cy.contains('Cadastrar').click()
        cy.get('#error-message').should('contain', 'Ops! Ocorreu um erro no cadastro.')
    })
})