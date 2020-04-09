import $ from "jquery";

var tools = {
    toggleSidebar() {
        $('#sidebar').toggleClass('sidebar-active');
        $('#view-main').toggleClass('sidebar-active');
        $('#menu-hamburger-cont').toggleClass('sidebar-active').toggleClass('fadeout');
        $('#menu-side').toggleClass('sidebar-active');
        $('#menu-nav').toggleClass('sidebar-active');
    },

    stickyNavbar(sticky, navbar) {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            $('#main-content-after-menu').addClass("sticky");
            $('#menu-nav').addClass("sticky");
            $('#menu-hamburger-cont').addClass("sticky");
        } else {
            navbar.classList.remove("sticky");
            $('#main-content-after-menu').removeClass("sticky");
            $('#menu-nav').removeClass("sticky");
            $('#menu-hamburger-cont').removeClass("sticky");
        }
     },

     smoothScrolling(){
         $(document).on('click', 'a[href^="#"]', function (event) {
             event.preventDefault();

             $('html, body').animate({
                 scrollTop: $($.attr(this, 'href')).offset().top
             }, 500);
         });
     }
}

export default tools;