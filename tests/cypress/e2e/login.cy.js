/// <reference types='cypress' />

describe('Login tests', () => {
    beforeEach('Visit page', () => {
        cy.visit('/')

    })
    it('Success', () => {
        cy.get('#login-screen #username').should('be.visible').and('be.empty')
        cy.get('#login-screen #username').type('ale')
        cy.get('#login-screen #password').should('be.visible').and('be.empty')
        cy.get('#login-screen #password').type('senha')
        cy.get('#login-screen button').click()
        cy.get('h1').should('be.visible')
    })
    it('Success - Login when press "Enter" key', () => {
        cy.get('#login-screen #username').should('be.visible').and('be.empty')
        cy.get('#login-screen #username').type('ale')
        cy.get('#login-screen #password').should('be.visible').and('be.empty')
        cy.get('#login-screen #password').type('senha{ENTER}')
        cy.get('h1').should('be.visible')
    })

    it('Fail - Login whitout password', () => {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub')
        })
        cy.get('#login-screen #username').should('be.visible').and('be.empty')
        cy.get('#login-screen #username').type('ale')
        cy.get('#login-screen #password').should('be.visible').and('be.empty')
        cy.get('#login-screen button').click()
        cy.get('@alertStub').then((alertStub) => {
            const alertText = alertStub.args[0][0]
            expect(alertText).eql('Login falhou, cheque seu usário e senha')
        })

    })
})