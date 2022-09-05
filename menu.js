const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// when I click a toogleTag, toggle a class on the mainTag
// if it's open make the toggleTag say close
// if not, make the toggleTag say open
toggleTag.addEventListener("click", function(){
    mainTag.classList.toggle("open")
    
    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = '<img src="./assets/close.svg" alt=""> Close'
    } else {
        toggleTag.innerHTML = '<img src="./assets/menu.svg" alt=""> Menu'
    }



})