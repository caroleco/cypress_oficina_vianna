describe('Dropdown', () => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
    })

    it('Seleção', () => {
        cy.get('#dropdown').select('Option 1')
        cy.get('#dropdown').select('2')
    })

})