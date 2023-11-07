logo = document.getElementById('Image');
logo.src = "rickroll4k.gif";

link = document.getElementById('Link');

x = 0;
y = 0;
subx = false;
suby = false;

function updateX() {
    if (x <= 0) {
        subx = true;
    } else if (x > window.innerWidth-500) {
        subx = false;
    }
    if (subx) {
        x += 5;
    } else {
        x -= 5;
    }
    return x;
}
function updateY() {
    if (y > window.innerHeight-350) {
        suby = true;
    } else if (y <= 0) {
        suby = false;
    }
    if (suby) {
        y -= 5;
    } else {
        y += 5;
    }
    return y;
}

setInterval(function() {
    logo.style.paddingLeft = updateX(); 
    logo.style.paddingTop = updateY();

    link.style.paddingTop = logo.style.paddingTop;
    link.style.paddingLeft = logo.style.paddingLeft;
}, 10)
