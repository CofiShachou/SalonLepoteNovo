let lastScrollTop = 0;
let x = $("#header");
let y=$("#hero");
window.addEventListener("scroll", (() => {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        x.css("top", "-250px");
    }
    else {
        x.css("top", "0px");
    }
    lastScrollTop = scrollTop;
}))