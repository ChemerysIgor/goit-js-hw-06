const form = document.querySelector(`.login-form`)
form.addEventListener(`submit`, onForm)
function onForm (event){
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    if (email.value.trim() === ""||password.value.trim() === "") {return alert = `Всі поля повинні бути заповнені`} else{
    const formForBackend = {
        email : email.value,
        password : password.value
    }
     console.log(formForBackend);
    return form.reset();
}
    
}