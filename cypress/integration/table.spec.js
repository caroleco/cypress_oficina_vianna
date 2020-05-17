describe('Tabela', () => {
    before(() => {
        cy.visit('/tables')
    })
    context('Example 1', () => {
        it('Editando Frank Bach', () => {
            cy.get('#table1 tbody tr').contains('Bach').parent().within(($ln) => {
                cy.contains('edit').click()
            })

            cy.url().should('contain', 'edit')
        })
        it('Deletando Frank Bach', () => {
            cy.get('#table1 tbody tr').contains('Bach').parent().within(($ln) => {
                cy.contains('delete').click()
            })

            cy.url().should('contain', 'delete')
        })

        it('Afirmações sobre Json Doe', () => {
            cy.get('#table1 tbody tr').contains('Jason').parent().within(($ln) => {
                expect($ln).to.include.text('Doe')
                expect($ln).to.include.text('jdoe@hotmail.com')
                expect($ln).to.include.text('$100.00')
            })
        })
    })

    context('Example 2', () => {
        it('Verificando sobrenomes', () => {
            cy.get('#table2 tbody td.last-name').within(($lastname) => {
                let names = ["Smith", "Bach", "Doe", "Conway"];
                names.forEach((name) => {
                    expect($lastname).to.contain.text(name)
                })
            })
        })
    })
})