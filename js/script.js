//  ***********  swipper  *************************
const swiper = new Swiper(".swiper", {
    // 基本設定
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 3000,
    },

    effect: "slide",
    speed: 1000,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//  ***********  nav  *************************

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("stickyNav");
    const header02 = document.querySelector(".header02");

    let navOffset = header02.offsetTop + header02.offsetHeight;

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        if (scrollPosition >= navOffset) {
            nav.classList.add("sticky");

            document.body.style.paddingTop = nav.offsetHeight + "px";
        } else {
            nav.classList.remove("sticky");
            document.body.style.paddingTop = "0";
        }
    });

    window.addEventListener("resize", function () {
        navOffset = header02.offsetTop + header02.offsetHeight;
    });
});

// 　　*******************  drawer　　*************
const navbutton01 = document.getElementById("drawerButton");
const navlist = document.querySelector(".header03 nav ul");

function downbotton() {
    navlist.classList.toggle("open");
    navbutton01.classList.toggle("redesign");
}

navbutton01.addEventListener("click", downbotton);
