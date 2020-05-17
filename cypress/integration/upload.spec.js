describe('File Upload', () => {
    before(() => {
        cy.visit('/upload')
    })

    it('Upload de imagem', () => {
        const fileName = 'image.jpg';
        cy.fixture('assets/' + fileName).then((fileContent) => {
            cy.get('input#file-upload').upload({ fileContent, fileName, mimeType: 'image/jpg' })
        })

        cy.get('input[type=submit]').click()

        cy.get('#uploaded-files').should('contain', fileName)
    })
})