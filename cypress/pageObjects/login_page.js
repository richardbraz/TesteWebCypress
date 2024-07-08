const LoginPage = {
    
    visit() {
        
        cy.visit('https://hml.registrauto.com.br/entrar')

// Link ambiente de produção: https://plataforma.registrauto.com.br/entrar
    },
//Logar como usuário Master IF
    usernameMasterIF(nomeUsuarioMasterIF) {
        cy.get('[data-testid="nomeUsuario"]').click().type('richard.azevedo@crdc.com.br')
    },  
    passwordMasterIF(senhaMasterIF) {
        cy.get('[data-testid="senha"]').click().type('Z@heer03062023')
    },
    submit() {
        cy.get('[data-testid="submitBtn"]').click()
    }
}

const LoginPageBackoffice = {

//Logar como usuário Backoffice
    userNameBackoffice(nomeUsuarioBackoffice) {
        cy.get('[data-testid="nomeUsuario"]').click().type('backoffice')
    },  
    passwordBackoffice(senhaBackoffice) {
        cy.get('[data-testid="senha"]').click().type('Teste;123')
    }

}
export {LoginPage, LoginPageBackoffice}
 
