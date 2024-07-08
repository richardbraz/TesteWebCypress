const HomePage = {
    
instituicaoFinanceira() {
        cy.contains('[data-testid="navigation-button"]', 'Instituições', {timeout:5000})
        .should('be.visible')
        .as('instituicoesButton');
        cy.get('@instituicoesButton').click();
    },
usuarios() {
        cy.contains('[data-testid="navigation-button"]', 'Usuários', {timeout:5000})
        .should('be.visible')
        .as('usuariosButton');
        cy.get('@usuariosButton').click();
    },
agentesFinanceiros() {
        cy.contains('[data-testid="navigation-button"]', 'Agentes Financeiros', {timeout:5000})
        .should('be.visible')
        .as('agenteFinanceiroButton');
        cy.get('@agenteFinanceiroButton').click();
    },
contratos() {
        cy.contains('[data-testid="navigation-button"]', 'Contratos', {timeout:5000})
        .should('be.visible')
        .as('contratosButton');
        cy.get('@contratosButton').click();
    },
relatorios() {
        cy.contains('[data-testid="navigation-button"]', 'Relatórios', {timeout:5000})
        .should('be.visible')
        .as('relatoriosButton');
        cy.get('@relatoriosButton').click();
    },
gestaoDeTaxas() {
        cy.contains('[data-testid="navigation-button"]', 'Gestão de Taxas', {timeout:5000})
        .should('be.visible')
        .as('gestaoButton');
        cy.get('@gestaoButton').click();
    }

}

export {HomePage}