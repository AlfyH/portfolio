import $ from "jquery";

function toggleSidebar() {
    $('#sidebar').toggleClass('sidebar-active');
    $('#view-main').toggleClass('sidebar-active');
    $('#menu-hamburger-cont').toggleClass('sidebar-active').toggleClass('fadeout');
    $('#menu-side').toggleClass('sidebar-active');
    $('#menu-nav').toggleClass('sidebar-active');
    $('#text-hero-cont').toggleClass('sidebar-active');
};

function toggleSidebarMain() {
    if (document.getElementById("sidebar").classList.contains("sidebar-active")){
        $('#sidebar').toggleClass('sidebar-active');
        $('#view-main').toggleClass('sidebar-active');
        $('#menu-hamburger-cont').toggleClass('sidebar-active').toggleClass('fadeout');
        $('#menu-side').toggleClass('sidebar-active');
        $('#menu-nav').toggleClass('sidebar-active');
        $('#text-hero-cont').toggleClass('sidebar-active');
    }
};

function stickyNavbar(sticky, navbar) {
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
};

function smoothScrolling(){
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
};

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}


export default {
  toggleSidebar,
  stickyNavbar,
  smoothScrolling,
  toggleSidebarMain,
  disableScroll,
  enableScroll
};