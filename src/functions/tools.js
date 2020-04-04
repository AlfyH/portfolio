import $ from "jquery";

var tools = {
    toggleSidebar() {
        $('#sidebar').toggleClass('sidebar-active');
        $('#view-main').toggleClass('sidebar-active');
        $('#menu-hamburger-cont').toggleClass('sidebar-active').toggleClass('fadeout');
    },
    stickyNavbar(sticky, navbar) {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
     }

    
}

export default tools;