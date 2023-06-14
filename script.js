var box=document.getElementById('target');

var max_width=window.innerWidth;
var max_height=window.innerHeight;

box.addEventListener('mouseover',function()
{
    var coordinates=box.getBoundingClientRect();
    console.log('mouse over function')
    
    var position=getpos(coordinates.width,coordinates.height);
    //var x=Math.random()*max_width;
    //var y=Math.random()*max_height;

    box.style.left=position.x+'px';
    box.style.top=position.y+'px';

});

function getpos(currX,currY)
{
    var newX=Math.random()*max_width;
    var newY=Math.random()*max_width;
    console.log(Math.random());
       
    return {
        x: newX,
        y: newY
    };
}