let lastScrollTop = 0;
let x = $("#header");
let y;
window.addEventListener("scroll", (() => {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    var scrollDelta = scrollTop - lastScrollTop;

    if (scrollDelta > 0) {
        x.css("top", "-250px");
        console.log(scrollDelta);
    }


    if (scrollDelta < -20) {
        console.log(scrollDelta);
        x.css("top", "0px");
        setTimeout(() => {

        }, 5000);
    }

    lastScrollTop = scrollTop;
}))