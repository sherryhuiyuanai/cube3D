// original function for rotating the whole 3d cube
window.onload=function()
{
    setTimeout(action, 100); // 打开页面1秒之后才会有反应

    function action()
    {
      setInterval(rotation,7); // 每隔0.005s调用trans函数
    }

    var x = 0, y = 0;
    function rotation()
    {
        x = x + 0.5, y = y + 0.5; // 这个是iteration效果的旋转叠加
        document.querySelector('.imgBox').style.transform='perspective(1000px) rotateY('+x+'deg) rotateX('+y+'deg)';
    }

    // perspective就是实际离物体中心的距离，perspective越大，前小后大的透视感就越强，
    // 然后越小的话，就像是近距离看东西，前大后小。两个效果都是线长和平行就会越歪一点。
    // 这里我找到的尺寸大概是1000左右的perspective,不会太扭曲。
}

// function for rotating U (top), heven't finished yet
window.onload=function()
{
    setTimeout(action, 100); // 打开页面1秒之后才会有反应

    function action()
    {
      setInterval(rotation,7); // 每隔0.005s调用trans函数
    }

    var x = 0, y = 0;
    function rotation()
    {
        x = x + 0.5, y = y + 0.5; // 这个是iteration效果的旋转叠加
        document.querySelector('.top')
        .style.transform='translateZ(100px) rotateZ('+x+'deg)';

        document.querySelector('.imgBox')
        .style.transform='perspective(1000px) rotateY(30deg) rotateX(40deg)';
    }

    // perspective就是实际离物体中心的距离，perspective越大，前小后大的透视感就越强，
    // 然后越小的话，就像是近距离看东西，前大后小。两个效果都是线长和平行就会越歪一点。
    // 这里我找到的尺寸大概是1000左右的perspective,不会太扭曲。
}
