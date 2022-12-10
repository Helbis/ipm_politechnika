const trList = document.getElementsByTagName("tr");

function update(){
	// On table change, update the onclick event listener
	for (const el of trList){
		el.addEventListener("click", markRow);
	}
}

function markRow(){
	// mark row for edition

}