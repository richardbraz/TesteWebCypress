/// <reference types="cypress" />

import {LoginPage, LoginPageBackoffice} from "../../../pageObjects/login_page"
import {HomePage} from "../../../pageObjects/home_page";
import {InstituicaoPage} from "../../../pageObjects/instituicaoFinanceira_page"

describe('Testes regressivos ERDOC', () => {

    it('CT001 - Cadastrar uma IF logado como usuário Backoffice', () => {

cy.clearAllCookies()
cy.viewport(1400,900);

        LoginPage.visit()
        LoginPageBackoffice.userNameBackoffice()
        LoginPageBackoffice.passwordBackoffice()
// Pausa a execução até que o usuário resolva o CAPTCHA manualmente
cy.pause();
        LoginPage.submit()
        HomePage.instituicaoFinanceira()
        InstituicaoPage.instituicaoHome()
        InstituicaoPage.criarNovaIF()
        
    })
})


