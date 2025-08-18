const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const form = document.querySelector("#form");
form.addEventListener('submit',(e)=>{
    if(!validateInput()){
        e.preventDefault();
    }
})
function validateInput(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true;
    if(usernameval===""){
        success = false;
        setmsg(username,"username is required");
    }
    else{
        setsuccess(username)
    }
    if(emailval===""){
        success = false;
        setmsg(email,"Email is required");
    }
    else if(!validateemail(emailval)){
        success = false;
        setmsg(email,"Please enter a valid Email address");
    }
    else{
        setsuccess(email)
    }
    if(passwordval===""){
        success = false;
        setmsg(password,"Password is required");
    }
    //else if (passwordval.length<8){
      //  success = false;
        //setmsg(password,"Password must be atleast 8 character");
    //}
    else if(!validatepassword(passwordval)){
        success = false;
        setmsg(password,"1 UpperCase, 2 LowerCase, 3 digit, 4 symbol");
    }
    if(cpasswordval===""){
        success = false;
        setmsg(cpassword,"confirm password is required");
    }
    else if(cpasswordval!==passwordval){
        success = false;
        setmsg(cpassword,"password does not match");
    }
    else{
        setsuccess(cpassword)
    }
    return success;
}
function setmsg(element,message){
    const inputgroup = element.parentElement;
    const msgElement = inputgroup.querySelector('.msg') 

    msgElement.innerText = message;
    inputgroup.classList.add('msg');
    inputgroup.classList.remove('success');
}

function setsuccess(element){
    const inputgroup = element.parentElement;
    const msgElement = inputgroup.querySelector('.msg');
        msgElement.innerText='';
        inputgroup.classList.add('msg');
        inputgroup.classList.remove('success');
}

const validateemail = (email) =>{
    return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    
}
const validatepassword = (password)=>{
    return /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[!@#$%^&*]).{8,}$/.test(password);
}
