// stopPropgration and ImmidiatePropogation

document.querySelector('.main').addEventListener('click',function() {
    console.log("Click Main Div");
});
document.querySelector('.divOne').addEventListener('click',function(){
    console.log("Click div One Div");
});
document.querySelector('.divTwo').addEventListener('click',function(){
    console.log("Click div Two Div");
});
document.querySelector('.divThree').addEventListener('click',function(){
    console.log("Click div Three Div");
});
document.querySelector('.divFour').addEventListener('click',function(e){
    console.log("Click div Four Div");
    e.stopImmediatePropagation();
});
document.querySelector('.divFive').addEventListener('click',function(e){
    console.log("Click div Five Div");
    e.stopPropagation();
    // e.stopImmediatePropagation();
});