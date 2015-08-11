 window.onload = function () {
    var ad_box_paly = document.getElementById('ad_box_paly');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 5;
    var animated = false;
    var interval = 3000;
    var timer;


    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if(left>-200){
                    list.style.left = -980 * len + 'px';
                }
                if(left<(-980 * len)) {
                    list.style.left = '-980px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, 2000);
    }
    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-980);
        showButton();
    }
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        animate(980);
        showButton();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -980 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }
    play();

// 二级导航
  var  fa_nav1 = document.getElementById('fa_nav1');
  var  fa_nav2 = document.getElementById('fa_nav2');
  var  fa_nav3 = document.getElementById('fa_nav3');
  var  fa_nav4 = document.getElementById('fa_nav4');

  function showSon(){
    this.className = 'on';
    this.getElementsByTagName("ul")[0].className = 'son_nav_on';
  }
  function stopSon(){
    this.className = 'fa_nav';
    this.getElementsByTagName("ul")[0].className = 'son_nav';
  }
  fa_nav1.onmouseover = showSon;
  fa_nav2.onmouseover = showSon;
  fa_nav3.onmouseover = showSon;
  fa_nav4.onmouseover = showSon;
  fa_nav1.onmouseout = stopSon;
  fa_nav2.onmouseout = stopSon;
  fa_nav3.onmouseout = stopSon;
  fa_nav4.onmouseout = stopSon;
}