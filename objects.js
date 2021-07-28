class humans{
	constructor(name,age){
		this.name=name
		this.age=age

	}





speak(){
	console.log(this.name+ "speak");
}

}


class man extends humans{

	// speak(){console.log(man);}

}

new man("Jalaal").speak()

