
const image = document.querySelector('#image')


function changeImage(){


const url = prompt(" enter your image URL");
const borderColor = prompt("enter the border color")
const width = prompt("enter the width")
const height = prompt(" enter the height")
const borderRadius = prompt(" enter the borderRadius")


    image.setAttribute('src', url);
    image.style.border = `2px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    }