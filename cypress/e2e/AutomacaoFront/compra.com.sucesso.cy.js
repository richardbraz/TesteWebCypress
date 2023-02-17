/// <reference types="Cypress" />

describe('Testes de compra', () => {
    it('CT001 - Realizar uma compra com sucesso', () => {


//Teste de compra com sucesso
         
cy.clearAllCookies()
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').click().type('performance_glitch_user')
        cy.wait(1500)
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.wait(1500)
        cy.get('[data-test="login-button"]').click()
        cy.wait(1500)
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')
        cy.wait(1500)
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.wait(1500)
        cy.get('.shopping_cart_link').click()
        cy.wait(1500)
        cy.get('[data-test="checkout"]').click()
        cy.wait(1500)
        cy.get('[data-test="firstName"]').click().type('Richard')
        cy.wait(1500)
        cy.get('[data-test="lastName"]').click().type('Azevedo')
        cy.wait(1500)
        cy.get('[data-test="postalCode"]').click().type('13401630')
        cy.wait(1500)
        cy.get('[data-test="continue"]').click()
        cy.wait(1500)
        cy.get('[data-test="finish"]').click()
        cy.wait(1500)
    })

})


