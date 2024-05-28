let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.height = screen.availHeight; //可视区域的高度
canvas.width = screen.availWidth; //可视区域的宽度
let str = 'XMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSB'.split('');
let ArrWidth = Array(Math.ceil(canvas.width / 10)).fill(0); //获取宽度例如1920 / 10 192
console.log(ArrWidth);
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)'; //填充背景颜色
    ctx.fillRect(0, 0, canvas.width, canvas.height); //背景
    ctx.fillStyle = "#0f0"; //文字颜色
    ArrWidth.forEach((item, index) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
        ArrWidth[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10; //添加随机数让字符随机出现不至于那么平整
    });
    console.log(ArrWidth);
};
setInterval(rain, 40);
