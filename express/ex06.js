const express1 = require('express')
const express2 = require('express')
console.log(express1 === express2)

const sever1 = express1()
const sever2 = express2()
console.log(sever1 === sever2);

const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2)
