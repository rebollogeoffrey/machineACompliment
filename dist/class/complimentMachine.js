"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplimentMachine = void 0;
class ComplimentMachine {
    constructor(type, caractere) {
        this.type = type;
        this.caractere = caractere;
    }
    compliment() {
        const messageToSend = this.getComplimentForPersonType(this.type, this.caractere);
        return messageToSend;
    }
    getPersonType(type) {
        if (typeof type === 'string') {
            return 'ami';
        }
        else if (typeof type === 'number') {
            return 'collègue';
        }
        else if (typeof type === 'boolean') {
            return 'membre de la famille';
        }
        else {
            throw TypeError('Type de personne non pris en charge.');
        }
    }
    getComplimentForPersonType(type, caractere) {
        const compl = [{ person: "ami", caractere: "gentil", message: "Tu es un ami gentil, sympatoche même" }, { person: "collègue", caractere: "gentil", message: "Tu es un pote du taffe gentil, mais lèche cul" }, { person: "membre de la famille", caractere: "gentil", message: "Tu es un fréro gentil, le sang de la veine" }, { person: "ami", caractere: "drole", message: "Tu es un copain rigolo, #Coluche" }, { person: "colègue", caractere: "drole", message: "Tu es un collabo...rateur marrant, #Desproges" }, { person: "membre de la famille", caractere: "drole", message: "Tu es un frérito giga drole, #Coluche" }];
        const personType = this.getPersonType(type);
        const messageToSend = compl.map((data) => {
            if (data.person === personType && data.caractere === caractere) {
                return data.message ? data.message : "Type de personne non pris en charge";
            }
        });
        return messageToSend;
    }
}
exports.ComplimentMachine = ComplimentMachine;
module.exports = { ComplimentMachine };
