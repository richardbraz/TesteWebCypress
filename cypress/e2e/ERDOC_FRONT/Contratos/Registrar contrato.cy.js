/// <reference types="cypress" />

import {LoginPage} from "../../../pageObjects/login_page"
import {HomePage} from "../../../pageObjects/home_page";
import {ContratoPage} from"../../../pageObjects/contratos_page";

describe('Testes regressivos ERDOC', () => {

    it('CT001 - Registrar um contrato logado como usuário Master', () => {

cy.clearAllCookies()
cy.viewport(1400,900);

        LoginPage.visit()
        LoginPage.usernameMasterIF()
        LoginPage.passwordMasterIF()
// Pausa a execução até que o usuário resolva o CAPTCHA manualmente
cy.pause();
        LoginPage.submit()
        HomePage.contratos()
        ContratoPage.criarNovoContrato()
        
        
    })
})