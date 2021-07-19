let allgroups = document.querySelector("#allgroups");
	let active = document.querySelector("#active");
	let newest = document.querySelector("#newest");
	let popular = document.querySelector("#popular");
	
	newest.addEventListener('click', adjustGroup, false);
	popular.addEventListener('click', adjustGroup, false);
	active.addEventListener('click', adjustGroup, false);
	
	function adjustGroup (e){

if (this == newest) {  
allgroups.setAttribute('class', 'one');  
document.querySelector('.groups .currentTab').setAttribute('class', ''); 
this.setAttribute('class','currentTab');   
}

else if (this == active) {
allgroups.setAttribute('class', 'duo'); 
document.querySelector('.groups .currentTab').setAttribute('class', ''); 
this.setAttribute('class','currentTab');   
}
else if (this == popular)
{allgroups.setAttribute('class', 'three');
document.querySelector('.groups .currentTab').setAttribute('class', ''); 
this.setAttribute('class','currentTab');   
}
	}
	