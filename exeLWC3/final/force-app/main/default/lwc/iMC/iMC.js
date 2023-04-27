import { LightningElement, api } from 'lwc';

export default class IMC extends LightningElement {

    
  @api nome;
  @api peso;
  @api altura;
  @api imc;

  handleInputChange(event) {
    const fieldName = event.target.label.toLowerCase();
    const value = event.target.value;
    this[fieldName] = value;
  }

  calcularIMC() {
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    this.imc = imc.toFixed(2);
  }
}