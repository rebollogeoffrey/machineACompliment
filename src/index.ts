import {ComplimentMachine} from "./class/complimentMachine"

const test = new ComplimentMachine<boolean>(true, "gentil")

console.log('test.compliment(2) :>> ', test.compliment());

const test2 = new ComplimentMachine<number>(2, "drole")

console.log('test.compliment(2) :>> ', test2.compliment());

const test3= new ComplimentMachine<string>("Bob", "gentil")

console.log('test.compliment(2) :>> ', test3.compliment());