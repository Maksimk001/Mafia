let sname = document.querySelectorAll('.block p') 
let button = document.querySelectorAll('.kill')










for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        killme()
    }
    function killme() {
            button[i].style.backgroundColor = 'red'
            sname[i].style.color = 'red'
    }
}