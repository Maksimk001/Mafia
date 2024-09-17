let sname = document.querySelectorAll('.block p') 
let button = document.querySelectorAll('.kill')
let inputleft = document.querySelectorAll('div.block input.left')
let inputright = document.querySelectorAll('div.block input.right')


for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        killme()
    }
    function killme() {
            button[i].style.backgroundColor = 'red'
            sname[i].style.color = 'red'
            inputleft[i].style.border = '1px solid red'
            inputright[i].style.border = '1px solid red'
    }
}



// Настройки
let opclsetting = document.querySelector('button.link')
let setting = document.querySelector('div.setting')
opclsetting.onclick = function() {
    openclose()
}
function openclose() {
    setting.classList.toggle('close')
}



let minus = document.querySelectorAll('button.minus')
let plus = document.querySelectorAll('button.plus')
let rolskol = document.querySelectorAll('p.kol')

for (let i = 0; i < minus.length; i++) {
    minus[i].onclick = function() {
        minusrols();

        function minusrols() {
            if (rolskol[i].textContent != 0)
            rolskol[i].textContent = rolskol[i].textContent - 1
        }
    }
}
for (let i = 0; i < plus.length; i++) {
    plus[i].onclick = function() {
        plusrols();

        function plusrols() {
            rolskol[i].textContent =+ rolskol[i].textContent + 1
        }
    }
}


let savebutton = document.querySelector('button.save')
let savebuttonstat = true
savebutton.onclick = function() {
    saveroles()
}
function saveroles() {
    savebutton.style.backgroundColor = 'gray'
    
    let rolsarr = {
        'Killer': rolskol[0].textContent,
        'Mafia': rolskol[1].textContent,
        'Doctor': rolskol[2].textContent,
        'Shreif': rolskol[3].textContent,
        'Love': rolskol[4].textContent,
        'funny': rolskol[5].textContent
    }
    console.log(rolsarr);
}