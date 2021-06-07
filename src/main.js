let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好我是一名前端新人！
接下来我要做一个太极阴阳图
首先需要给个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*然后左右分色*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border: none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个小球勾勒太极图内部线条
我选择用伪元素构造小球
*/
#div1::before{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}`
let string2 = '';
let n = -1;
let step = (() => {
    n = n + 1;
    if (string[n] === '\n') {
        string2 += "<br>";
    } else if (string[n] === ' ') {
        string2 += "&nbsp";
    } else {
        string2 += string[n];
    }
    setTimeout(() => {
        if (n < string.length) {
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            window.scrollTo(0, document.body.scrollHeight);
            html.scrollTo(0, document.body.scrollHeight);
            step();
        } else {

        }
    }, 10)

})

step()