/*
Created by Franz Zemen 02/21/2024
License Type: MIT
*/
import { getValidator } from '@franzzemen/fastest-validator-wrapper';
const schema = {
    hello: { type: 'string' }
};
describe('get-validator test', () => {
    it('should work', done => {
        const test = { hello: 'world' };
        const validator = getValidator();
        const check = validator.compile(schema);
        const result = check(test);
        result.should.be.true;
        done();
    });
});
//# sourceMappingURL=get-validator.test.js.map