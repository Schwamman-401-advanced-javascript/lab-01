/* eslint-disable no-empty-function */
'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isValid(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isAnArray(str)).toBeFalsy();
    expect(validator.isAnArray(num)).toBeFalsy();
    expect(validator.isAnArray(arr)).toBeTruthy();
    expect(validator.isAnArray(obj)).toBeFalsy();
    expect(validator.isAnArray(func)).toBeFalsy();
    expect(validator.isAnArray(bool)).toBeFalsy();
  });

  it('objects', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeTruthy();
    expect(validator.isObject(bool)).toBeFalsy();
  });

  it('booleans', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isFunction(str)).toBeFalsy();
    expect(validator.isFunction(num)).toBeFalsy();
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(obj)).toBeFalsy();
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(bool)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair

  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    let testArray1 = [true, 'string', 5, 'string2', {}];
    let testArray2 = ['string', 10, 'string2', 8];
    let testArray3 = [];

    expect(validator.isValidArray(testArray1)).toBeFalsy();
    expect(validator.isValidArray(testArray2)).toBeTruthy();
    expect(validator.isValidArray(testArray3)).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    let approved = ['yes', 'Yes', 'YES', 'no', 'No', 'NO'];
    let test1 = 'yes';
    let test2 = 'YES';
    let test3 = 'no';
    let test4 = '';
    let test5 = {};

    expect(validator.isApproved(test1, approved)).toBeTruthy();
    expect(validator.isApproved(test2, approved)).toBeTruthy();
    expect(validator.isApproved(test3, approved)).toBeTruthy();
    expect(validator.isApproved(test4, approved)).toBeFalsy();
    expect(validator.isApproved(test5, approved)).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

