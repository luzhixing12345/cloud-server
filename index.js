
const container = document.getElementById('container')

const ID = ['static-web','blog','tools','about']

for (var i=0 ; i<ID.length; i++) {
    var element = document.getElementById(ID[i]);
    element.addEventListener('mouseenter',()=>setBlur())
    element.addEventListener('mouseleave',()=>removeBlur())
}

console.log(123);

function setBlur() {
    console.log(container.style.backdropFilter);
    container.style.backdropFilter = 'blur(2px)';
    console.log(container.style.backdropFilter);
}

function removeBlur() {
    container.style.backdropFilter = 'blur(0px)';
}