/*
Created by Franz Zemen 02/21/2024
License Type: MIT
*/

import { getValidator } from '@franzzemen/fastest-validator-wrapper';
import {ValidationSchema} from "fastest-validator";
import * as chai from 'chai';

const should = chai.should();
const expect = chai.expect;


const schema:ValidationSchema = {
  hello: {type: 'string'}
}


describe('get-validator test', () => {
  it('should work', done => {
    const test = {hello: 'world'};
    const validator = getValidator();
    const check = validator.compile(schema);
    const result = check(test);
    result.should.be.true;
    done();
  })
})
