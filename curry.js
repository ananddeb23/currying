const curry = (fx) => {
	var arity = fx.length;

	return function f1() {
		var args = Array.prototype.slice.call(arguments, 0);
		if (args.length >= arity) {
			return fx.apply(null, args);
		}
		else {
			return function f2() {
				var args2 = Array.prototype.slice.call(arguments, 0);
				return f1.apply(null, args.concat(args2));
			};
		}
	};
};
module.exports = curry;
const add = (a,b,c,d) => a+b+c+d;
let curried = curry(add);
console.log(curried(2));
console.log(curried(3));
console.log(curried(1)(4)(5,5));
