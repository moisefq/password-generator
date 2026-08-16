const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateBtn = document.getElementById("generate-btn")
let passwordOne = document.getElementById("password-one")
let passwordtwo = document.getElementById("password-two")
let passwordLength = document.getElementById("passwordLength")

console.log(passwordLength.value)

let password1 = ""
let password2 = ""

generateBtn.addEventListener("click", firstPassword)
function firstPassword(){
    if (passwordLength.value !== ""){
        for (let i = 0; i <= passwordLength.value; i++){
            password1 += characters[Math.floor(Math.random() * characters.length)]
            passwordOne.textContent = password1
            password2 += characters[Math.floor(Math.random() * characters.length)]
            passwordtwo.textContent = password2
    }
    password1 =""
    password2 =""
    } else if (passwordLength.value === "") {
        alert("Password is requied")
    }
}

