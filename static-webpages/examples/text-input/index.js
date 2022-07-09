
import {addGithubIconLink, addNextIconLink} from '../utils.js'

function getInputValue(){
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    console.log(first_name + " " + last_name);
}


addGithubIconLink("https://github.com/luzhixing12345/html-css-js/tree/main/examples/text-input")
addNextIconLink(null,"../mouse-input/index.html")