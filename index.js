const sleep = ms => new Promise(res => setTimeout(res, ms));
async function rem(ele){
    ele.style.animation = 'rem 1s ease forwards';
    await sleep(1000)
    ele.remove()
}
var page;
document.getElementById('start').onclick = function(){
    rem(document.getElementById('page1'));
    page = 2;
}
document.getElementById('n1').onclick = function(){
    rem(document.getElementById('page' + page));
    page++;
    if(page==6){
        this.remove()
    }
}