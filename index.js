
const container = document.getElementById('container')

const ID = ['static-web','blog','tools','about']

for (var i=0 ; i<ID.length; i++) {
    var element = document.getElementById(ID[i]);
    element.addEventListener('mouseenter',()=>setBlur())
    element.addEventListener('mouseleave',()=>removeBlur())
}


function setBlur() {
    container.style.backdropFilter = 'blur(2px)';
}

function removeBlur() {
    container.style.backdropFilter = 'blur(0px)';
}