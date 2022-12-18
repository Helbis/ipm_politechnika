function update(){
	const trList = document.getElementsByTagName("tr");
	// On table change, update the onclick event listener

	for (const el in trList){
		el.addEventListener("click", function (){
			el.toggleAttribute("marked");
			console.log("marked");
		});
	}
}

update();
console.log("hey");