const button = document.querySelector(".btn-platform")
console.log(button)

const elementPlatforms = document.querySelector(".btn-platform .platformsinButton")

button.addEventListener("click", () =>{
    if(elementPlatforms.classList.contains("active")){
        elementPlatforms.classList.remove("active");
    }        
    else{
        elementPlatforms.classList.add("active")
    }
})