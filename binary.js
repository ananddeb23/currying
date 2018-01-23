function returnSum(arg1, arg2){
	if(typeof(arg1) != 'number' || typeof(arg2) != 'number'){
		return;
	}
	return arg1 + arg2;
}
module.exports.returnSum = returnSum;
