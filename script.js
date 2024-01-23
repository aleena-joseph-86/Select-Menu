        const inputbox=document.querySelector(".input");
        const items  = document.querySelectorAll(".listitem")
        const list= document.getElementById("listid");
        const arrow = document.getElementById("arrow");

        items.forEach(item=>{
            item.addEventListener("click",e=>{
            inputbox.innerHTML=item.textContent;});
            }
        );

        arrow.onclick=function(){
            list.classList.toggle("lists");
            arrow.classList.toggle("rot");
            inputbox.innerHTML="select any option";
        }