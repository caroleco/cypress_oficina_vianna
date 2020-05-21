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
        cy.get('.success').should('contain','Seu ID de acesso')
    })

    it('Login',()=>{
        cy.get('input[name=user-id]').type('56163d6c394f85d5')
        cy.get('button').contains('Entrar').click()
        cy.url().should('include','profile')
        cy.get('.exit').click()
        cy.get('h1').contains('Faça seu logon')


    })
})