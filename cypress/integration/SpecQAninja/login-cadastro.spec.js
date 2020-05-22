describe(()=>{
    before(()=>{
        cy.visit('https://training-wheels-protocol.herokuapp.com/access')
    })

    it('Cadastrar usuário',()=>{
        cy.get('form[name=signup]').within(()=>{
            cy.get('input[name=username]').type('Carol')
            cy.get('input[id=PasswordInput]').type('Carol')

            /*find('input[id$=UsernameInput]').set 'carol' - $ ending
        find('input[id^=PasswordInput]').set '111' * ->begining
        find('a[id*=GetStartedButton]').click   * search all over */
        })
    })
})