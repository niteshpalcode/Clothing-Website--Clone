document.querySelector("#signupForm").addEventListener("submit",signUpFun);
document.querySelector("#signinPage").addEventListener("submit",signInFun);

function indexfun(){
    console.log("abc")
    window.location.href="index.html"
}

let userArr=JSON.parse(localStorage.getItem("userDataKey"))||[];
function signUpFun(event){
    
    event.preventDefault();
    // console.log("SignUp page")

    let userData={
        title:document.querySelector("#userTilte").value,
        acTitle:document.querySelector("#userAcTitle").value,
        name1:document.querySelector("#signupName1").value,
        name2:document.querySelector("#signupName2").value,
        email:document.querySelector("#signupEmail").value,
        pass1:document.querySelector("#password1").value,
        pass2:document.querySelector("#password2").value,
        // check:document.querySelector("#signupTick").value
    }
   

    if(checkEmails(userData.email)==true && checkPassword(userData.pass1,userData.pass2)==true){
        userArr.push(userData);
        localStorage.setItem("userDataKey",JSON.stringify(userArr));
        alert("Sign Up Successfully")
        console.log(userArr)
    }
    else if(checkEmails(userData.email)==false && checkPassword(userData.pass1,userData.pass2)==true){
        alert("Account has already created")
    }
    else if(checkEmails(userData.email)==true && checkPassword(userData.pass1,userData.pass2)==false){
        alert("password Mismatched!")
    }
    
}

function checkEmails(email){
    var filtered=userArr.filter(function(element){     
        return email === element.email;
    })
    if(filtered.length>0){     
        return false;
    }
    else{
        return true;
    }
}

function checkPassword(pass1,pass2){
    let count=0
    for(let i=0,j=0;i<pass1.length,j<pass2.length;i++,j++){
    if (pass1[i]==pass2[j]){
        count++
    }
   else{
       break;
   }
}
    if(count==pass1.length&&count==pass2.length){
        return true;
    }
    else{
        return false
    }
}
// sign in
function signInFun(event){
event.preventDefault();
console.log("sign in")
let data={
    email:document.querySelector("#siginEmail").value,
    password:document.querySelector("#siginPassword").value
}
if (checksignindata(data.email,data.password)==true){
    localStorage.setItem("siginKey",JSON.stringify(data))
    alert("sign In successflly")

}
else{
    alert("wrong email,password")
}
}
function checksignindata(email,password){
let filetr=userArr.filter(function(element){
    return element.email===email && element.pass1===password;
})
if(filetr.length>0){
    return true;
}
else{
    return false
}
}
