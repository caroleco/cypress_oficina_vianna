describe('Dropdown', () => {
    before(() => {
        cy.visit('https://training-wheels-protocol.herokuapp.com/dropdown')
    })

    it('Selecionar Tony Stark', () => {
        cy.get('#dropdown').select('Tony Stark')
        cy.get('#dropdown').select('5')
    })

})