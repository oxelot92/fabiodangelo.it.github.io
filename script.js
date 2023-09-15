function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add("navbarDark");
    }
    else {
        header.classList.remove("navbarDark");
    }
}