function togglePackage(event){
    event.classList.toggle('package-hidden')
    event.parentElement.nextElementSibling.classList.toggle('package-hidden')
}