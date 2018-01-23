let program = require('./program');

describe('Testing the return type and value ',()=>{
	it('return type of input and output must be same ',() =>{
		expect(typeof(program.returnArgument('abc'))).toBe('string');
	});
	it('return value of input and output must be same ',() =>{
		expect((program.returnArgument('abc'))).toBe('abc');
	});
});
