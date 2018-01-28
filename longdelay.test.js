const longdelay = require('./longdelay');

describe('testing output value of function', () => {
	test('Function must add coreectly  when more than 1  arguments given', () =>{
		longdelay.adder(4);
		longdelay.adder(-5);
		longdelay.adder(0);
		expect(longdelay.adder()).toEqual(-1);
	});
	test('Function must return correct value when 0 arguments given', () =>{
		// longdelay.adder(4);
		// longdelay.adder(5);
		expect(longdelay.adder()).toEqual(0);
	});
	test('Function must return correct value when more than 1  arguments given', () =>{
		longdelay.adder(4);
		longdelay.adder(5);
		expect(longdelay.adder()).toEqual(9);
	});

});

describe('testing return type of function', () => {
	test('Function must return correct value when 0 arguments given', () =>{
		// longdelay.adder(4);
		// longdelay.adder(5);
		expect(typeof(longdelay.adder())).toBe('number');
	});
	test('Function must return correct value when more than 1  arguments given', () =>{
		longdelay.adder(4);
		longdelay.adder(5);
		expect(typeof(longdelay.adder())).toBe('number');
	});
});
