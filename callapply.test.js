const callapply = require('./callapply');
global.console = {
	warn: jest.fn(),
	log: jest.fn(),
};
describe('Testing the caller  ',()=>{
	let method = function( obj, name, age, tShirtSize) {
		this.name = name;
		this.age = age;
		this.tShirtSize = tShirtSize;
		console.log('hello');
	};
	let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };
	it('must output to console on execution ',() =>{
		callapply.caller(person, method, 'anand',32, 40);
		expect((global.console.log)).toHaveBeenCalledWith('hello');
	});

});
describe('Testing the applier  ',()=>{
	let method = function( obj, args) {

		console.log('applier');
	};
	let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };
	it('must output to console on execution ',() =>{
		callapply.applier(person, method, ['anand',32, 40]);
		expect((global.console.log)).toHaveBeenCalledWith('applier');
	});

});
