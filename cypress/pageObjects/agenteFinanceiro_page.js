import { gerarCNPJ } from "../support/randonCNPJ";
import { gerarRazaoSocial } from "../support/randonRazaoSocial";
import { gerarCodigoDetran } from "../support/randonDetranCode"; 


const cnpj = gerarCNPJ();
const razaoSocial = gerarRazaoSocial();
const codigoDetran = gerarCodigoDetran();
const dataFimVigencia = '2030-01-01';
const dataInicioVigencia = '2024-01-01';


const AgenteFinanceiroPage = {

    agenteFinanceiroHome() {
    // Verificando título da página de instituições
            cy.get('[data-testid="bar-title"] > .chakra-heading', {timeout:5000})
            .should('be.visible')                                                           
            .as('agenteFinanceiroHome');                                                         
            cy.get('@agenteFinanceiroHome').should('contain', 'Agentes Financeiros');
        },

    criarNovoAF () {
    // Verificando botão e texto para criar uma nova IF
        cy.get('[data-testid="bar-action"]', {timeout:5000})
        .should('be.visible')
        .as('novaAFbutton');
        cy.get('@novaAFbutton')
        .should('have.text', 'Novo agente financeiro');
        cy.get('@novaAFbutton').click();
    // Verificando titulo da tela de cadastro de AF
        cy.get('[data-testid="form-heading"] > .chakra-heading', {timeout:2000})
        .should('be.visible')
        .as('DadosDoAF')

    // Inserindo novos dados para cadastrar um AF
        cy.get('@DadosDoAF').should('contain', 'Novo Agente')
        cy.get('[data-testid="codigo"]').type(codigoDetran)
        cy.get('[data-testid="uf"]')
        .select('SP')
        cy.get('[data-testid="razaoSocial"]').type(razaoSocial)
        cy.get('[data-testid="cnpj"]').type(cnpj)
        cy.get('[data-testid="categorizacao"]')
        .select('Bancos')
        cy.get('[data-testid="dataInicioVigencia"]').type(dataInicioVigencia)
        cy.get('[data-testid="dataFimVigencia"]').type(dataFimVigencia)
        cy.get('[data-testid="form-action-confirm"]')
        .should('be.visible').click()

        }

    }

    export {AgenteFinanceiroPage}
