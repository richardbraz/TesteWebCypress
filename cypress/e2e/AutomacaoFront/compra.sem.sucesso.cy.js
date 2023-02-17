/// <reference types="Cypress" />

describe('Testes de compra', () => {
    it('CT001 - Realizar uma compra sem sucesso', () => {

//Teste de compra semm sucesso
cy.clearCookies
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').click().type('problem_user')
        cy.wait(1500)
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.wait(1500)
        cy.get('[data-test="login-button"]').click()
        cy.wait(1500)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.wait(1500)
        cy.get('.shopping_cart_badge').click()
        cy.wait(1500)
        cy.get('[data-test="checkout"]').click()
        cy.wait(1500)
        cy.get('[data-test="firstName"]').click().type('Richard')
        cy.wait(1500)
        cy.get('[data-test="continue"]').click()
        cy.wait(1500)
        cy.get('.error-message-container').should('be.visible')

    })
})
