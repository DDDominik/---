var list = document.getElementById('list');
var shadow = document.getElementById('shadow');
var clear = document.getElementById('clear');
// var check = document.getElementById('conter').getElementsByTagName('span');

list.onclick = function(){
	shadow.style.display = 'block';
	 // alert('123');
}
clear.onclick = function(){
	shadow.style.display = 'none';
	// alert('123');
}
// for(i = 0;i<check.length; i++){
// 	// alert(check.length);
// 	check.onclick = function(){
// 		if(this.style.display == ""){
// 			this.style.display = "block";
// 		}
// 	}
// }
