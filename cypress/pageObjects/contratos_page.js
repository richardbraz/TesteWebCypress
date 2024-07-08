import { gerarCHASSI } from "../support/randonCHASSI";
import { gerarMarcaVeiculo } from "../support/randonMarca";
import { gerarPlacaMercosul } from "../support/randonPlaca";
import { gerarRenavam } from "../support/randonRENAVAM";
import { gerarCorAleatoria } from "../support/randoCor";
import { gerarEmail } from "../support/randonEmail";
import { gerarCepAleatorio } from "../support/randonCEPValido";
import { numeroEndereco } from "../support/randonEnderecoNumero";
import { gerarNumeroTelefone } from "../support/randonNumeroTelefone";
import { gerarGravame } from "../support/randonGravame";
import { gerarNumeroContrato } from "../support/randonNumeroContrato";
import { gerarRazaoSocial } from "../support/randonRazaoSocial";
import { gerarCNPJ } from "../support/randonCNPJ";
import { gerarCPF } from "../support/randonCPF";
import { gerarNOME } from "../support/randonName";

const cpf = gerarCPF();
const nome = gerarNOME();
const cnpj = gerarCNPJ();
const email = gerarEmail();
const chassi = gerarCHASSI();
const gravame = gerarGravame();
const renavam = gerarRenavam();
const numero = numeroEndereco();
const cep = gerarCepAleatorio();
const cor = gerarCorAleatoria();
const marca = gerarMarcaVeiculo();
const placa = gerarPlacaMercosul();
const razaoSocial = gerarRazaoSocial();
const telefone = gerarNumeroTelefone();
const numeroContrato = gerarNumeroContrato();

const dataContrato = '2024-07-01';
const dataLiberacaoCredito = '2024-07-01'
const vencimentoUltimaParcela = '2025-08-20'
const vencimentoPrimeiraParcela = '2024-08-20'




const ContratoPage = {

    contratoHome() {
        // Verificando título da página de contratos
        cy.verTituloPagina().should('contain', 'Novo Contrato')

        },

    criarNovoContrato() {
        // Verificando botão e texto para registrar um novo contrato
        cy.get('[data-testid="bar-action"]', {timeout:5000})
        .should('be.visible')
        .as('NovoContratobutton');
        cy.get('@NovoContratobutton')
        .should('have.text', 'Novo Contrato');
        cy.get('@NovoContratobutton').click();
        
        // Preenchendo Chassi e Estado
        cy.get('[data-testid="form-heading"] > .chakra-heading')
        .should('be.visible')
        .as('NovoContrato')
        cy.get('@NovoContrato').should('contain', 'Novo contrato')
        cy.get(':nth-child(1) > .chakra-form-control > .chakra-input__group > [data-testid="chassi"]').type(chassi) 
        cy.get('[data-testid="uf"]')
        .select('SP')
        cy.btnContinuar(); 

        // Preenchendo Dados do veículo
        cy.verTituloPagina().should('contain', 'Dados do veículo')
        cy.get('[data-testid="renavam"]').type(renavam)
        cy.get(':nth-child(5) > .chakra-form-control > .chakra-input__group > [data-testid="placa"]').type(placa)
        cy.get('[data-testid="anoFabricacao"]').type('2023')
        cy.get('[data-testid="anoModelo"]').type('2024')
        cy.get('[data-testid="identificacaoRemarcacao"]')
        .select('NÃO')
        cy.get('[data-testid="especie"]')
        .select('Não Informado')
        cy.get('[data-testid="cor"]').type(cor)
        cy.get('[data-testid="marca"]').type(marca)
        cy.btnContinuar();

        // Preenchendo Dados do credor
        cy.get('[data-testid="form-heading"] > .chakra-heading', {timeout:3000})
        .should('be.visible')
        .as('dadosCredor');
        cy.get('@dadosCredor').should('contain', 'Dados do credor')
        cy.get('[data-testid="cnpj"]')
        .select('Nu Financiamentos S.A')
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="endereco.cep"]').type(cep)
        cy.get('[data-testid="endereco.numero"]').type(numero)
        cy.get('[data-testid="endereco.complemento"]').type('Praça da felicidade')
        cy.numTelefone().type(telefone)
        cy.btnContinuar(); 

        // Preenchendo Dados do contrato
        cy.verTituloPagina().should('contain', 'Dados do contrato')
        cy.get('[data-testid="dataContrato"]').type(dataContrato)
        cy.get(':nth-child(2) > .chakra-form-control > .chakra-input__group > [data-testid="numeroContrato"]').type(numeroContrato)
        cy.get('[data-testid="numeroGravame"]').type(gravame)
        cy.get('[data-testid="tipoRestricao"]')
        .select('Arrendamento Mercantil')
        cy.get('[data-testid="quantidadeMeses"]').type('12')
        cy.btnContinuar();    
        
        // Preenchendo Dados complementares
        cy.verTituloPagina().should('contain', 'Dados complementares')
        cy.get('[data-testid="identificadorTaxaMora"]').select('Sim')
        cy.get('[data-testid="valorTaxaMora"]').type('2000')
        cy.get('[data-testid="identificadorTaxaMulta"]').select('Sim')
        cy.get('[data-testid="valorTaxaMulta"]').type('2000')
        cy.get('[data-testid="valorIOF"]').type('50000')
        cy.get('[data-testid="valorTaxaJurosMes"]').type('5000')
        cy.get('[data-testid="valorTaxaJurosAno"]').type('50000')
        cy.get('[data-testid="valorTaxaContrato"]').type('1000000')
        cy.get('[data-testid="indices"]').type('INPC')
        cy.get('[data-testid="identificadorComissao"]').select('Sim')
        cy.get('[data-testid="valorComissao"]').type('250000')
        cy.get('[data-testid="indicacaoPenalidade"]').select('Sim')
        cy.get('[data-testid="penalidade"]').type('IPVA')
        cy.get('[data-testid="principalRecebedorPagamento"]').type(razaoSocial)
        cy.get('[data-testid="tipoDocumentoRecebedor"]').select('CNPJ')
        cy.get('[data-testid="documentoPrincipalRecebedorPagamento"]').type(cnpj)
        cy.get('[data-testid="tipoDocumentoVendedor"]').select('CPF')
        cy.get('[data-testid="documentoVendedor"]').type(cpf)
        cy.get('[data-testid="comentarios"]').type('Teste de registro de contrato via automação')
        cy.get('[data-testid="correcaoMonetaria"]').type('300')
        cy.btnContinuar();

        // Preenchendo Dados do financiamento
        cy.verTituloPagina().should('contain', 'Dados do financiamento')
        cy.get('[data-testid="valorTotalDivida"]').type('5000000')
        cy.get('[data-testid="valorParcela"]').type('500000')
        cy.get('[data-testid="dataLiberacaoCredito"]').type(dataLiberacaoCredito)
        cy.get('[data-testid="municipioContrato"]').select('PIRACICABA')
        cy.get('[data-testid="vencimentoPrimeiraParcela"]').type(vencimentoPrimeiraParcela)
        cy.get('[data-testid="vencimentoUltimaParcela"]').type(vencimentoUltimaParcela)
        cy.btnContinuar();

        // Preenchendo Empresas administradoras de consórcio
        cy.verTituloPagina().should('contain', 'Empresas administradoras de consórcio')
        cy.get('[data-testid="cotaConsorcio"]').type('325874')
        cy.get('[data-testid="numeroGrupo"]').type('12')
        cy.btnContinuar();

        // Preenchendo Dados do devedor 
        cy.verTituloPagina().should('contain', 'Dados do devedor')
        cy.get('[data-testid="nome"]').type(nome)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="tipoDocumento"]').select('CPF')
        cy.get('[data-testid="documento"]').type(cpf)
        cy.get('[data-testid="endereco.cep"]').type(cep)
        cy.get('[data-testid="endereco.numero"]').type(numero)
        cy.numTelefone().type(telefone)
        cy.btnContinuar();

        // Verificando aba Anexos
        cy.verTituloPagina().should('contain', 'Anexos')
        cy.btnContinuar();

        // Verificando contrato criado com sucesso
        cy.verTituloPagina().should('contain', 'Validação de Contrato')

        cy.contains('Contrato aprovado!').then(() => {
            cy.btnFinalizar();
        })
    
    }

}

export{ContratoPage}
