const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "niin1.html"
    }else{
        alert("you inported a wrong Key or password")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "niin1-32911-53623" && password === "bypass"){
        return true
    }else{
        return false
    }
}
