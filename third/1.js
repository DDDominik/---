var list = document.querySelector('#list'),
clear = document.querySelector('.clear'),
falist = document.querySelectorAll('.fa-list'),
filter = document.querySelector('#filter');

list.addEventListener("touchend",function(){
	// alert("11");
	filter.style.visibility = 'visible';
	filter.style.opacity = '1';
});

clear.addEventListener("touchend",function(){
	// alert("11");
	filter.style.visibility = 'hidden';
	filter.style.opacity = '0';
});

for(var i = 0, len = falist.length; i < len; i ++) {
	falist[i].addEventListener("touchend", function () {
		var son = this.querySelector('.son');
		son.style.height = '100px';
		son.style.opacity = '1';
	});
};