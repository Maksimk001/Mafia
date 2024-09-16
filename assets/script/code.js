let settings = document.querySelector('.link')
let sname = document.querySelectorAll('.block p') 
let button = document.querySelectorAll('.kill')


settings.onclick = function() {
    setting()
}
function setting() {
    window.location.href = '/assets/pages/setening.html';
}






for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        killme()
    }
    function killme() {
            button[i].style.backgroundColor = 'red'
            sname[i].style.color = 'red'
    }
}

