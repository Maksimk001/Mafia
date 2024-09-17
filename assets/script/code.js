// Настройки

let opclsetting = document.querySelector('button.link')
let setting = document.querySelector('div.setting')
let minus = document.querySelectorAll('button.minus')
let plus = document.querySelectorAll('button.plus')
let rolskol = document.querySelectorAll('p.kol')
let savebutton = document.querySelector('button.save')
let savebuttonstat = true

opclsetting.onclick = function() {
    openclose()
}
function openclose() {
    setting.classList.toggle('close')
}





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
    addRoles(rolsarr)
}

function addRoles(rolsarr) {
    addKiller(rolsarr)
    addMafia(rolsarr)
    addDoctor(rolsarr)
    addShreif(rolsarr)
    addLove(rolsarr)
    addLive(rolsarr)
}
function addKiller(rolsarr) {

    for (let i = 0; i < rolsarr.Killer; i++) {
        document.querySelector("div.cart").innerHTML +=`
        <div class="block" id="killer">
            <input type="text" class="left">
            <p>Маньяк</p>
            <input type="text" class="right">
            <button class="kill"></button>
        </div>`;
    }
}
function addMafia(rolsarr) {
    for (let i = 0; i < rolsarr.Mafia; i++) {
        document.querySelector("div.cart").innerHTML +=`
        <div class="block" id="Mafia">
            <input type="text" class="left">
            <p>Мафия</p>
            <input type="text" class="right">
            <button class="kill"></button>
        </div>`;
    }
}
function addDoctor(rolsarr) {
    for (let i = 0; i < rolsarr.Doctor; i++) {
        document.querySelector("div.cart").innerHTML +=`
        <div class="block" id="Doctor">
            <input type="text" class="left">
            <p>Доктор</p>
            <input type="text" class="right">
            <button class="kill"></button>
        </div>`;
    }
}
function addShreif(rolsarr) {
    for (let i = 0; i < rolsarr.Shreif; i++) {
        document.querySelector("div.cart").innerHTML +=`
        <div class="block" id="Shreif">
            <input type="text" class="left">
            <p>Комисар</p>
            <input type="text" class="right">
            <button class="kill"></button>
        </div>`;
    }
}
function addLove(rolsarr) {
    for (let i = 0; i < rolsarr.Love; i++) {
        document.querySelector("div.cart").innerHTML +=`
        <div class="block" id="Love">
            <input type="text" class="left">
            <p>Любовница</p>
            <input type="text" class="right">
            <button class="kill"></button>
        </div>`;
    }
}
function addLive(rolsarr) {
    for (let i = 0; i < rolsarr.funny; i++) {
        document.querySelector("div.cart").innerHTML +=`
        <div class="block" id="Live">
            <input type="text" class="left">
            <p>Обыватель</p>
            <input type="text" class="right">
            <button class="kill"></button>
        </div>`;
    }

    initializing()
}


function initializing() {

let block = document.querySelectorAll('.block')
let sname = document.querySelectorAll('.block p') 
let button = document.querySelectorAll('button.kill')
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
}