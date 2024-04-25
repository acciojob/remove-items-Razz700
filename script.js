//your JS code here. If required.
let a=document.getElementById("colorSelect");
let btn=document.querySelector("form>input");
let array=[];
            for (let i = 0; i < a.length; i++) {
                array.push(a[i].value);  
     }
     function render(){
        a.innerHTML="";
        array.forEach((item,i)=>{
        a.innerHTML+=`<option>${item}</option>`});
     }
     btn.addEventListener("click",fun);
     function fun(){
        array=array.filter((item,i)=>item!=a.value
        );
        render();
     }