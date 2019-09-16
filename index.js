'use strict';

const validator = require('./lib/validator.js');

let testObject = {prop1: 'hello', prop2: 5, prop3: [1,'hello', 2, 'world', 3, '!']};

console.log(testObject.filter(element => validator.isString(element)));
