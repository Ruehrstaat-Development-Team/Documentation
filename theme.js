let colors = [{
    c1: "#203763",
    c2: "#4a0d5c"
}, {
    c1: "#522375",
    c2: "#533630"
}, {
    c1: "#263543",
    c2: "#252348"
}];

const animationScale = 1;
const emphasizedAnimationDuration = .5 * animationScale;
const emphasizedAnimationPath = "cubic-bezier(0.2, 0, 0, 1)";
const emphasizedAnimation = emphasizedAnimationDuration + "s" + " " + emphasizedAnimationPath;
const exitAnimationDuration = .2 * animationScale;
const exitAnimationPath = "ease-in";
const exitAnimation = exitAnimationDuration + "s" + " " + exitAnimationPath;
const enterAnimationDuration = .2 * animationScale;
const enterAnimationPath = "ease-out";
const enterAnimation = enterAnimationDuration + "s" + " " + enterAnimationPath;

let currentFullScreen = null;
let selectedCard = null;

docReady(function () {

    setHomeBackground();
    startMenuListener();

});

function startMenuListener() {
    //add event listener to all menu items to zoom to fullscreen
    let menuItems = document.getElementsByClassName("card");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function () {
            zoomToFullscreen(menuItems[i]);
        });
    }
}

function zoomToFullscreen(el) {
    // create copy of el at the same position in viewport and animate it to full screen
    let copy = el.cloneNode(true);
    let image = copy.getElementsByClassName("image")[0];
    let icon = image.getElementsByClassName("icon")[0];
    let filter = image.getElementsByClassName("filter")[0];
    copy.id = "content"
    copy.style.top = el.getBoundingClientRect().top + "px";
    copy.style.left = el.getBoundingClientRect().left + "px";
    copy.style.width = el.getBoundingClientRect().width + "px";
    copy.style.height = el.getBoundingClientRect().height + "px";
    copy.style.borderRadius = "20px";
    copy.style.transition = "all " + emphasizedAnimation;
    image.style.transition = "all " + emphasizedAnimation;
    icon.style.transition = "all " + exitAnimation;
    filter.style.transition = "all " + exitAnimation;
    document.body.appendChild(copy);
    currentFullScreen = copy;
    selectedCard = el;

    setTimeout(function () {
        copy.style.top = "0";
        copy.style.left = "0";
        copy.style.width = "100%";
        copy.style.height = "100%";
        copy.style.borderRadius = "0";
        image.style.height = "75px"
        image.style.borderRadius = "0";
        icon.style.opacity = "0";
        filter.style.borderRadius = "0";
        filter.style.opacity = "0";
        let content = copy.getElementsByClassName("content")[0];
        content.style.transition = "all " + exitAnimation;
        content.style.opacity = "0";
        let parser = new DOMParser();
        setTimeout(function () {
            fetch("/shared/topnav.html")
                .then(response => response.text())
                .then(data => {
                    image.appendChild( parser.parseFromString(data, "text/html").documentElement.getElementsByTagName("body")[0].getElementsByTagName("div")[0]);
                    let topnav = document.getElementById("top-nav")
                    topnav.style.opacity = "0";
                    topnav.style.transition = "all " + enterAnimation;
                    setTimeout(function () {
                        topnav.style.opacity = "1";
                    }, 10);
                })
                .then(function () {
                    let backbutton = document.getElementById("back-icon");
                    backbutton.addEventListener("click", function () {
                        zoomToCard();
                    });
                });
            
        }, emphasizedAnimationDuration * 1000);
    }, 10);
}

function zoomToCard(){
    // take currentFullScreen and animate it to the position of selectedCard
    let image = currentFullScreen.getElementsByClassName("image")[0];
    let icon = image.getElementsByClassName("icon")[0];
    let filter = image.getElementsByClassName("filter")[0];
    currentFullScreen.style.transition = "all " + emphasizedAnimation;
    image.style.transition = "all " + emphasizedAnimation;
    icon.style.transition = "all " + enterAnimation;
    filter.style.transition = "all " + enterAnimation;
    setTimeout(function () {
        document.getElementById("top-nav").remove();
        currentFullScreen.style.top = selectedCard.getBoundingClientRect().top + "px";
        currentFullScreen.style.left = selectedCard.getBoundingClientRect().left + "px";
        currentFullScreen.style.width = selectedCard.getBoundingClientRect().width + "px";
        currentFullScreen.style.height = selectedCard.getBoundingClientRect().height + "px";
        currentFullScreen.style.borderRadius = "20px";
        image.style.height = null;
        image.style.borderRadius = null;
        icon.style.opacity = null;
        icon.style.color = "#aaa";
        filter.style.borderRadius = null;
        let content = currentFullScreen.getElementsByClassName("content")[0];
        content.style.transition = "all " + exitAnimation;
        content.style.opacity = "1";
        setTimeout(function () {
            fetch("/shared/topnav.html")
                .then(response => response.text())
                .then(data => { image.innerHTML = data; });
            currentFullScreen.remove();
        }, emphasizedAnimationDuration * 1000);
    }, 10);
}

function setHomeBackground() {
    let background = document.getElementById("background");
    let color = colors[Math.floor(Math.random() * colors.length)];
    background.style.background = "linear-gradient(45deg, " + color.c1 + ", " + color.c2 + ")";
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  