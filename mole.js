hearts = 5;
t=500;
b=0;
point=0;
var timer = setInterval(function() {
    if (hearts <= 0){
        clearInterval(timer);
    }
    if (b>=120000){
        clearInterval(timer);
    }
    y=getRnd(1,9);
    var p = document.getElementById(y);
    p.src="mc.jpg";
    b+=800;
    console.log(b);
    t=500+(getRnd(1,5)*100);
    p.style.opacity=1;
    setTimeout(() => {
        p.src="hole.jpg";
        p.style.opacity=0.9;
    }, t);
    document.getElementById("p").innerHTML=point;
    document.getElementById("h").innerHTML=hearts;
}, 800);
function hit (i){
    if (hearts==0){
        return;
    }
    var x=document.getElementById(i).style.opacity;
    if (x == 1){
        point+=1;
    }
    else{
        hearts-=1;
    }
    console.log(point);
    console.log(hearts);
}
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}