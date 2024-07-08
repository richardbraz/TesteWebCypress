import { should } from "chai";
import { gerarCPF } from "../support/randonCpf";
import { gerarCNPJ } from "../support/randonCNPJ";
import { gerarNOME } from "../support/randonName";
import { gerarEmail } from "../support/randonEMAIL";
import { numeroEndereco } from "../support/randonEnderecoNumero";
import { gerarRazaoSocial } from "../support/randonRazaoSocial";
import { gerarCepAleatorio } from "../support/randonCEPValido";
import { gerarNumeroTelefone } from "../support/randonNumeroTelefone";


const cpf = gerarCPF();
const cnpj = gerarCNPJ();
const nome = gerarNOME();
const email = gerarEmail();
const numero = numeroEndereco();
const cep = gerarCepAleatorio();
const telefone = gerarNumeroTelefone();
const razaoSocial = gerarRazaoSocial();


const InstituicaoPage = {

instituicaoHome() {
// Verificando título da página de instituições
        cy.get('[data-testid="bar-title"] > .chakra-heading', {timeout:5000})
        .should('be.visible')                                                           
        .as('instituiçãoHome');                                                         
        cy.get('@instituiçãoHome').should('contain', 'Instituições');
    },
criarNovaIF() {               
// Verificando botão e texto para criar uma nova IF
        cy.get('[data-testid="bar-action"]', {timeout:5000})
        .should('be.visible')
        .as('novaIFbutton');
        cy.get('@novaIFbutton')
        .should('have.text', 'Nova instituição');
        cy.get('@novaIFbutton').click();
// Verificando titulo da tela de cadastro de IF 
        cy.get('.css-10sq1yq > .chakra-heading', {timeout:3000})
        .should('be.visible')
        .as('DadosDaIF')

// Inserindo novos dados para cadastrar uma IF
        cy.get('@DadosDaIF').should('contain', 'Dados da instituição financeira')
        cy.get('[data-testid="razaoSocial"]').type(razaoSocial)
        cy.get('[data-testid="cnpj"]').type(cnpj)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="contato"]').type(telefone)
        cy.get('[data-testid="form-action-confirm-1"]')
        .should('be.visible').click()
// Verificando título da tela de Endereço da IF
        cy.get('.css-79elbk > .chakra-heading', {timeout:2000})
        .should('be.visible')
        .as('EnderecoIF')
// Inserindo endereço da IF
        cy.get('@EnderecoIF').should('contain', 'Endereços da instituição financeira')
        cy.get('[data-testid="0.cep"]').type(cep)
        cy.get('[data-testid="0.numero"]').type(numero)
        cy.get('[data-testid="0.tipoEndereco"]')
        .select('Matriz')
        cy.get('[data-testid="form-action-confirm-2"]')
        .should('be.visible').click()
// Verificando título da tela de Responsáveis legais 
        cy.get('.css-79elbk > .chakra-heading', {timeout:2000})
        .should('be.visible')
        .as('ResponsaveisLegais')
// Inserindo responsáveis pela IF
        cy.get('@ResponsaveisLegais').should('contain', 'Responsáveis legais')
        cy.get('[data-testid="0.nome"]').type(nome)
        cy.get('[data-testid="0.cpf"]').type(cpf)
        cy.get('[data-testid="0.contato"]').type(telefone)
        cy.get('[data-testid="form-action-confirm-3"]')
        .should('be.visible').click()


        }
        
}


export {InstituicaoPage}