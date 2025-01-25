// Elements
const btnLogin = document.querySelector(".login__submit");
const inputUserName = document.querySelector(".user__name");
const inputUserPassword = document.querySelector(".user__password");


console.log(btnLogin);

const userName = "pavan";
const password = "Pav@0211"




btnLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    
    
    

    if(inputUserName.value === userName && inputUserPassword.value === password)
    {
        alert("Login Successfull");
        console.log(inputUserName);
        console.log(inputUserPassword);
    }
    else{
        alert("Login Not Sucessfull");
    }
    


});

