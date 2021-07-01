AOS.init();

window.onscroll = function () { navigation_scroll_function() };

var header = document.getElementById("header");
function navigation_scroll_function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.height = "4.5em";
        header.style.boxShadow = "0px 2px 15px rgba(0, 0, 0, 0.1)";

    }
    else {
        header.style.height = "6em"
        header.style.boxShadow = "none";
    }
}


var nav_link = document.getElementsByClassName("nav-link");
for (var i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener("click", function () {
        for (var j = 0; j < nav_link.length; j++) {
            nav_link[j].className = "nav-link";
        }
        this.className += " active";
    });
}

var darkmodebtn = document.getElementById("dark-light-switch");
var web_body = document.getElementById("body");
var home_container = document.getElementById("home-container");
darkmodebtn.addEventListener("click", function () {
    if (web_body.className == "light") {
        web_body.className = "dark";
        home_container.style.backgroundImage = "url('../../img/home/dark-background.jpg')";
        home_container.style.backgroundPosition = "center";
    }
    else {
        web_body.className = "light";
        home_container.style.backgroundImage = "url('../../img/home/light-background.jpg')";
        home_container.style.backgroundPosition = "center";
    }
});

var video_modal_container = document.getElementById("video-modal");
var video_modal_close_btn = document.getElementById("video-modal-close-btn");
var modal_video_play_btn = document.getElementById("modal-video-play-btn");
modal_video_play_btn.addEventListener("click", function () {
    if (video_modal_container.className == "video-modal") {
        video_modal_container.className += " active";
    }
});
video_modal_close_btn.addEventListener("click", function () {
    video_modal_container.className = "video-modal";
});
video_modal_container.addEventListener("click", function () {
    video_modal_container.className = "video-modal";
});

var smaller_menu_container = document.getElementById("smaller-menu-container");
var navbar_toggle_btn = document.getElementById("navbar-toggle-btn");
var menu_close_btn = document.getElementById("menu-close-btn");
var smaller_menu_link = document.getElementsByClassName("smaller-menu-link");

navbar_toggle_btn.addEventListener("click", function () {
    if (smaller_menu_container.className == "smaller-menu-container") {
        smaller_menu_container.className += " active";
    }
});

menu_close_btn.addEventListener("click", function () {
    if (smaller_menu_container.className == "smaller-menu-container active") {
        smaller_menu_container.className = "smaller-menu-container";
    }
});

for (var i = 0; i < smaller_menu_link.length; i++) {
    smaller_menu_link[i].addEventListener("click", function () {
        if (smaller_menu_container.className == "smaller-menu-container active") {
            smaller_menu_container.className = "smaller-menu-container";
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        autoplay: true,
    }).mount();
});


var clp_btns = document.getElementsByClassName("clp-btn");
for (var i = 0; i < clp_btns.length; i++) {
    clp_btns[i].addEventListener('click', function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

document.getElementById("map-api").style.height = document.getElementById("contact-form").offsetHeight - 1.5 + "px";

var link_boxes = document.getElementsByClassName("link-box");
var max_height = 0;

for (var i = 0; i < link_boxes.length; i++) {
    if (max_height < link_boxes[i].offsetHeight) {
        max_height = link_boxes[i].offsetHeight;
    }
}

for (var i = 0; i < link_boxes.length; i++) {
    link_boxes[i].style.height = max_height + "px";
}