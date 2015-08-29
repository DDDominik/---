var list = document.querySelector('#list'),
clear = document.querySelector('.clear'),
falist = document.querySelectorAll('.fa-list'),
filter = document.querySelector('#filter');


function getStyle(element, styleProperty) {
    var value = "";
    if (!element)
        throw new TypeError(element + "is null or not define");
    if ((!styleProperty instanceof String) || (!styleProperty))
        throw new TypeError(styleProperty + ' is null or not defined');
    if (element.style[styleProperty])
        value = element.style[styleProperty];
    else {
        value = element.currentStyle ? element.currentStyle[styleProperty] : window.getComputedStyle(element, null)[styleProperty];
    }
    return value;
}




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
	falist[i].addEventListener("touchstart", function () {
		var son = this.querySelector('.son');

		if(getStyle(son,"opacity") == "0"){
			son.style.height = '120px';
			son.style.opacity = '1';
		}else{
			son.style.height = '0';
			son.style.opacity = '0';
		}
	});
};