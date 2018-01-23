function outer(arg1){
	return (arg2) => {
		if(typeof(arg1) != 'number' || typeof(arg2) != 'number'){
			return;
		}
		return arg1 + arg2;};
}
module.exports.outer = outer;
