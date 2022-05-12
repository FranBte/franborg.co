console.log("fran")

function toggleNav() {
    console.log("navtoggle")
    nav = document.getElementsByClassName("nav__items")[0]
    if (nav.classList.contains("nav--closed")) {
        nav.classList.remove("nav--closed")
        nav.classList.add("nav--open")
    } else {
        nav.classList.remove("nav--open")
        nav.classList.add("nav--closed")
    }
}