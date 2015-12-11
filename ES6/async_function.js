async function asyncValue(value){
	await timeout(50);
	console.log("daying");
	return value;
}

function timeout(ms){
	return new Promise((resolve) => {
		setTimeout(resolve,ms);
	});
}

asyncValue("nihao");


class nihao{
	constructor(a,b){
		this.a = a;
		this.b = b;
	}

	toString () {
		console.log("%s哈哈哈哈%s",this.a,this.b);
	}
}

var n = new nihao("A","B");

n.toString();
