const formbtn=document.querySelector("#formopen");
let home=document.querySelector(".home");
let formcontainer=document.querySelector(".formcontainer");
let formclosebtn=document.querySelector(".formclose")
let signupbtn=document.querySelector("#signup")
let loginbtn=document.querySelector("#login")
let pwhide=document.querySelectorAll(".pwhide")
console.log(loginbtn,formbtn,home,formcontainer,formclosebtn,signupbtn,pwhide)


formbtn.addEventListener("click",()=>{
    home.classList.add("show")
})
formclosebtn.addEventListener("click",()=>{
    home.classList.remove("show")
})


pwhide.forEach((icon) => {
    icon.addEventListener("click",()=>{
        let getpwinput=icon.parentElement.querySelector("input");
        console.log(getpwinput)
        if(getpwinput.type==="password"){
            getpwinput.type="text";
            icon.classList.replace("uil-eye-slash", "uil-eye")
        }
        else{
            getpwinput.type="password";
            icon.classList.replace("uil-eye","uil-eye-slash")
        }
    })
})


signupbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    formcontainer.classList.add("active")
})
loginbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    formcontainer.classList.remove("active")
})