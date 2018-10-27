window.onload=function(){
    img_box = document.querySelector('.imgBox');
    var x = 0;
    var y = 0;
    function trans(){
        x = x + 10;
        y = y + 10;
        img_box.style.transform='perspective(700px) rotateY('+x+'deg) rotateX('+y+'deg)';
    }
    setInterval(trans,500);//每隔0.5s调用trans函数
}
