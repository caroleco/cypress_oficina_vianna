describe('Checkboxes e radioboxes', () => {

    context('Checkboxes', () => {
        before(() => {
            cy.visit('https://training-wheels-protocol.herokuapp.com/checkboxes')
        })

        it('Marcar Capitão América e Thor', () => {
            cy.get('input[value=cap]').check()
            cy.get('input[value=iron-man]').check()
        })

        it('Desmarcar Homem-Formiga', () => {
            cy.get('input[value=ant-man]').uncheck()
            cy.wait(3000)
        })
    })

    context('Radio Buttons', () => {
        before(() => {
            cy.visit('https://training-wheels-protocol.herokuapp.com/radios')
        })

        it('Marcar Capitão América e Thor', () => {
            cy.wait(3000)
            cy.get('input[value=cap]').check()
            cy.get('input[value=iron-man]').check()
        })
    })

})