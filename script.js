let blur = document.getElementById("blur");
let popup = document.getElementById("popup");
let flag = 0;
function toggle() {
    if(flag == 0){
        blur.classList.toggle('active');
        // console.log("done");
        popup.classList.toggle('active');
        // console.log(popup);
        flag = 1;
    }
}
function visible(){
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}
window.onscroll = toggle;
setTimeout(toggle, 20000);