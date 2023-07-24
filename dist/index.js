"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const complimentMachine_1 = require("./class/complimentMachine");
const test = new complimentMachine_1.ComplimentMachine(true, "gentil");
console.log('test.compliment(2) :>> ', test.compliment());
const test2 = new complimentMachine_1.ComplimentMachine(2, "drol");
console.log('test.compliment(2) :>> ', test2.compliment());
const test3 = new complimentMachine_1.ComplimentMachine("Bob", "gentil");
console.log('test.compliment(2) :>> ', test3.compliment());
