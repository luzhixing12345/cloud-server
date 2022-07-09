

/* <a href="#">
<img src="../../../github.svg">
</a> */
const icon_set = document.getElementById('icon-set')
console.log(icon_set);



export function addGithubIconLink(link) {
    var a = document.createElement('a')
    a.setAttribute('href', link);
    var image = document.createElement('img');
    image.src = "../../../icon/github.svg";
    a.appendChild(image);
    icon_set.appendChild(a);
}


export function addNextIconLink(after_link, before_link) {
    if (after_link != null) {
        var a_after = document.createElement('a')
        a_after.setAttribute('href', after_link);
        var image_after = document.createElement('img');
        image_after.src = "../../../icon/right-arrow.svg";
        a_after.appendChild(image_after);
        icon_set.appendChild(a_after);
    }
    if (before_link != null) {
        var a_before = document.createElement('a')
        a_before.setAttribute('href', before_link);
        var image_before = document.createElement('img');
        image_before.src = "../../../icon/left-arrow.svg";
        a_before.appendChild(image_before);
        icon_set.appendChild(a_before);
    }

}
