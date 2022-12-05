let string= " ";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((item)=>{

    item.addEventListener("click",(event)=>{
        if(event.target.innerHTML=="="){
            string=eval(string);
            document.querySelector(".input").value = string; // we can take input also instead of .input
        }
        else if(event.target.innerHTML=="C"){
            string=" ";
            document.querySelector(".input").value = string; // we can take input also instead of .input
        }
        else{
                   // console.log(event.target)
       string=string + event.target.innerHTML;
       document.querySelector(".input").value = string; // we can take input also instead of .input
        }

     /*  // console.log(event.target)
       string=string + event.target.innerHTML;
       document.querySelector(".input").value = string; // we can take input also instead of .input*/
    })
})