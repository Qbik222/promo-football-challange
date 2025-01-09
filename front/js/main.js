const mainPage = document.querySelector(".fav-page")

//for test
const menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu-test"),
    easyBtn = document.querySelector(".easy"),
    mediumBtn = document.querySelector(".medium"),
    hightBtn = document.querySelector(".hight"),
    noStateBtn = document.querySelector(".not-join")

function changeStatePage (btn, state){
    btn.addEventListener("click", () =>{
        mainPage.className = "fav-page"
        if(state){
            mainPage.classList.add(state)
        }
    })
}

changeStatePage(easyBtn, "_easy")
changeStatePage(mediumBtn, "_medium")
changeStatePage(hightBtn, "_hight")
changeStatePage(noStateBtn, false)
