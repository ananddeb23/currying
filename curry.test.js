const curry = require('./curry');

describe('Testing the output type of the curry function ',()=>{
	const add = (a,b,c,d) => a+b+c+d;
	it('return type of must be a function ',() =>{
		expect(typeof(curry(add))).toBe('function');
	});

});
describe('Testing the output of the curry function ',()=>{
	const add = (a,b,c,d) => a+b+c+d;
	it('must output correct value when passed at once (a,b,c,d) ',() =>{
		curry(add);
		// add(1,2,);
		// add(3);
		expect(add(4,3,2,1)).toBe(10);
	});
	it('must output correct value when passed in order (a)(b)(c,d) ',() =>{
		let curried = curry(add);
		//add(1,2,3);
		// add(3);

		expect(curried(1)(4)(5,5)).toBe(15);
	});
	it('must output correct value when passed in order (a,b)(c,d) ',() =>{
		let curried = curry(add);
		//add(1,2,3);
		// add(3);

		expect(curried(1,4)(5,5)).toBe(15);
	});
	it('must output correct value when passed in order (a)(b,c,d) ',() =>{
		let curried = curry(add);
		//add(1,2,3);
		// add(3);

		expect(curried(1)(5,5,4)).toBe(15);
	});
	it('must output correct value when passed all separately (a)(b)(c)(d) ',() =>{
		let curried = curry(add);
		//add(1,2,3);
		// add(3);

		expect(curried(1)(4)(5)(5)).toBe(15);
	});
});
