docReady(function() {

    let menuhandle = document.getElementById("menu-handle");
    menuhandle.addEventListener("click", function (e) {
        e.stopPropagation();
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("hidden");
    });
});

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  