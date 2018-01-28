let tot = 0;
let adder =(arg) => {
	if(arg === undefined){
		let res = tot;
		tot = 0;
		return res;
	}
	tot += arg;
	return adder;


};
module.exports = adder;
// adder(4);
// adder(5);
//console.log(adder());
//module.exports.adder = adder;
