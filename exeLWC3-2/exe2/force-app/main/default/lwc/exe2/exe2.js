import { LightningElement, api } from 'lwc';

export default class Exe2 extends LightningElement {

    
  // A variável de classe dadosEmpresa é definida com o decorator @track, o que permite que seu valor seja rastreado
  // e atualizado na interface do usuário automaticamente
  @api dadosEmpresa = {
    primeiroNome: '', // Inicializa a variável primeiroNome com uma string vazia
    sobrenome: '', // Inicializa a variável sobrenome com uma string vazia
    email: '', // Inicializa a variável email com uma string vazia
    website: '', // Inicializa a variável website com uma string vazia
    empresa: '', // Inicializa a variável empresa com uma string vazia
    receitaAnual: '' // Inicializa a variável receitaAnual com uma string vazia
  };

  // A função handleInputChange é chamada sempre que um campo de entrada é alterado
  handleInputChange(event) {
    // A constante { label, value } é usada para extrair as propriedades label e value do evento do campo de entrada
    const { label, value } = event.target;
    // A técnica de object spread é usada para atualizar a variável dadosEmpresa com a nova propriedade e valor
    // fornecidos pelo usuário
    this.dadosEmpresa = { ...this.dadosEmpresa, [label.toLowerCase()]: value };
  }
}