interface IComplimentMachine<T>{
    type: T ;
    caractere : string;

    compliment() :string;
    
}

export class ComplimentMachine<T> implements IComplimentMachine<T>{
    type : T;
    caractere: string;
    constructor(type :T, caractere: string){
        this.type= type;
        this.caractere=caractere;
        
    }

    public compliment() {
        const messageToSend = this.getComplimentForPersonType(this.type, this.caractere)
        return messageToSend as unknown as string;
    }

    private getPersonType(type : T): string {
        if (typeof type === 'string') {
            return 'ami';
        } else if (typeof type === 'number') {
            return 'collègue';
        } else if (typeof type === 'boolean') {
            return 'membre de la famille';
        } else {
            throw TypeError('Type de personne non pris en charge.');
        }
    }

    private getComplimentForPersonType(type: T, caractere:string) {
    const compl: Array<{person:string, caractere:string, message:string}> = [{ person:"ami", caractere:"gentil", message:"Tu es un ami gentil, sympatoche même"},{ person:"collègue", caractere:"gentil", message:"Tu es un pote du taffe gentil, mais lèche cul"}, { person:"membre de la famille", caractere:"gentil", message:"Tu es un fréro gentil, le sang de la veine"}, { person:"ami", caractere:"drole", message:"Tu es un copain rigolo, #Coluche"}, { person:"colègue", caractere:"drole", message:"Tu es un collabo...rateur marrant, #Desproges"}, { person:"membre de la famille", caractere:"drole", message:"Tu es un frérito giga drole, #Coluche"} ]
    const personType: string =  this.getPersonType(type)
    const messageToSend = compl.map((data)=> {
        if(data.person=== personType && data.caractere===caractere){
            return data.message? data.message : "Type de personne non pris en charge";
        }
     })
     return messageToSend;
    }

}


module.exports = {ComplimentMachine};
