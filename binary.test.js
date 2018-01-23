let binary= require('./binary');

describe('Testing the return type and value ',()=>{
	it('return type of input and output must be same ',() =>{
		expect(typeof(binary.returnSum(2,3))).toBe('number');
	});

});
describe('Testing combinations to get correct value ',()=>{
	it('both positive numbers must return positive sum ',() =>{
		expect((binary.returnSum(2, 3))).toBe(5);
	});
	it('both negative numbers must return negative sum ',() =>{
		expect((binary.returnSum(-4, -6))).toBe(-10);
	});
	it('mix of positive and negative numbers must return appropriate sum ',() =>{
		expect((binary.returnSum(2, -3))).toBe(-1);
	});
});
describe('Testing the input validation  ',()=>{
	it('return type of undefined input must be undefined ',() =>{
		expect((binary.returnSum('aff',3))).toEqual(undefined);
	});
	it('return value of input and output must be same ',() =>{
		expect((binary.returnSum('abc','abc'))).toEqual(undefined);
	});
});
