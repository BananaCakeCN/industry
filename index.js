const sleep = ms => new Promise(res => setTimeout(res, ms));
async function rem(ele){
    ele.style.animation = 'rem 1s ease forwards';
    await sleep(1000)
    ele.remove()
}
document.getElementById('start').onclick = function(){
    rem(document.getElementById('page1'));
}