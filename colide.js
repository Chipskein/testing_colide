const canvas=document.getElementsByTagName("canvas")[0];
let context=canvas.getContext("2d");
let x=0;
let y=0;    
let x1 = 350;
let y1 = 700;
    
function draw(){
    //q
    context.fillStyle = "red";
    context.fillRect(x, y, 50, 50)
    //q2
    context.fillStyle = "blue";
    context.fillRect(x1, y1, 50, 50);
}
function cls(){
    context.clearRect(0,0,canvas.width,canvas.height)
}
document.addEventListener("keydown",function (e){
    //R
    if (e.keyCode == 39) { 
        if ((x + 50)< 800) { 
            x+=10 
        } 
        else { 
            x = 0; 
        } 
    }
    //L
    if (e.keyCode == 37) { 
        if (x > 0) {
         x-=10 
        } 
        else { 
            x = 750; 
        } 
    }})    
let int=setInterval(()=>{
    cls();
},75)
let int2=setInterval(()=>{
    draw();
    y++
    if(y>=750){
        y=0;
    }
    /*
    */
        //  cima  && esquerda &&    direita
    if ((y+50)>y1&&(x+50)>x1&&(x)<(x1+50)) {clearInterval(int2);clearInterval(int);}
},1)


