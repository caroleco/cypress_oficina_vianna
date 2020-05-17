describe('File Download', () => {
    before(() => {
        cy.visit('/download')
    })

    it('Download arquivo Hi.jpg',()=>{
        cy.downloadFile('https://the-internet.herokuapp.com/download/Hi.jpg','downloads','Hi.jpg')
    })

})