let delay= require('./delay');

describe('Testing the return type and value ',()=>{
	it('return type of input and output must be same ',() =>{
		expect(typeof(delay.outer(2)(3))).toBe('number');
	});

});
describe('Testing combinations to get correct value ',()=>{
	it('both positive numbers must return positive sum ',() =>{
		expect((delay.outer(2)(3))).toBe(5);
	});
	it('both negative numbers must return negative sum ',() =>{
		expect((delay.outer(-4) (-6))).toBe(-10);
	});
	it('mix of positive and negative numbers must return appropriate sum ',() =>{
		expect((delay.outer(2) (-3))).toBe(-1);
	});
});
describe('Testing the input validation  ',()=>{
	it('return type of undefined input must be undefined ',() =>{
		expect((delay.outer('aff')(3))).toEqual(undefined);
	});
	it('return value of input and output must be same ',() =>{
		expect((delay.outer('abc')('abc'))).toEqual(undefined);
	});
});
