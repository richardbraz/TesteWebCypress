// Comandos para diversas funcionalidades e telas

// Botão "Finalizar Contrato"

Cypress.Commands.add('btnFinalizar', () => {
    cy.get('.css-1f8spr7 > [data-testid="form-action-confirm"]').click()
})

// Botão "Continuar"
Cypress.Commands.add('btnContinuar', () => {
    cy.get('[data-testid="form-action-confirm"]').click();
});

// Botão "Cancelar"
Cypress.Commands.add('btnCancelar', () => {
    cy.get('.css-k676u0 > :nth-child(2)').click();
});

//Botão "Voltar"
Cypress.Commands.add('btnVoltar', () => {
    cy.get('.css-k676u0 > :nth-child(1)').click();
})

// Confirmar titulo da página de acesso
Cypress.Commands.add('verTituloPagina', () => {
    return cy.get('[data-testid="form-heading"] > .chakra-heading');
});

// Campo "Telefone"
Cypress.Commands.add('numTelefone', () => {
    cy.get('[data-testid="telefone"]')
})
