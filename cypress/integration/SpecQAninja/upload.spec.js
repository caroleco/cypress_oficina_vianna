describe('File Upload', () => {
    before(() => {
        cy.visit('https://training-wheels-protocol.herokuapp.com/upload')
    })

    it('Upload de imagem', () => {
        const fileName = 'image.jpg';
        cy.fixture('assets/' + fileName).then((fileContent) => {
            cy.get('input#file-upload').upload({ fileContent, fileName, mimeType: 'image/jpg' })
        })

        cy.get('input[type=submit]').click()

        cy.get('#uploaded-file').should('contain', fileName)
        cy.get('img#new-image').should('have.attr','src','/uploads/image.jpg')

    })
})