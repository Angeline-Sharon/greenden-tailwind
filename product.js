//Selecting side navbar,menuicon

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//Product Search Functionality
var productcontainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productcontainer.queryselectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    
    for(count=0; count<productlist.length; count=count+1)
    {
        var productname= productlist[count].queryselector("h1").textcontent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})