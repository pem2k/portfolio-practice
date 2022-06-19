//when button is clicked
function buttonclick()    
{    
//checks menu state
    var menuList = document.getElementById("menu");  
//if the class it finds is menu off, change to menu on  
    if (menuList.className == "menuOff")    
    {    
    
        menuList.className = "menuOn";    
    } else    
//otherwise, turn menu off
    {    
    
        menuList.className = "menuOff";    
    }    
}   