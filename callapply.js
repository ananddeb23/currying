var callAndApply = {
	caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
		//your code

		console.log(method.call(object, nameArg, ageArg, tShirtSizeArg));
	},
	applier: function (object, method, argumentsArr) {
		// your code
		method.apply(object, argumentsArr);
	}
};
module.exports = callAndApply;
