var randomNumber1=Math.floor(Math.random()*11+1);
if(randomNumber1===1)
{ randomNumber1=2;
    document.querySelector("img").setAttribute("src","./images/"+randomNumber1+"img.jpg");
}
else{
    document.querySelector("img").setAttribute("src","./images/"+randomNumber1+"img.jpg");
}