class ComplimentMachine<T> {
  compliment(person: T): string {
    return "";
  }

  private getPersonType(person: T) {
    if (typeof person === "string") return "ami.e";
    else if (typeof person === "number") return "collegue";
    else if (typeof person === "boolean") return "membre de la famille";
    else return "Le type de personne n'est pas connu";
  }
  private getComplimentForPersonType() {}
}
