import $ from "jquery";
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Modal from '../js/views/Modal'

var tools = {};

function toggleSidebar() {
    $('#sidebar').toggleClass('sidebar-active');
    $('#view-main').toggleClass('sidebar-active');
    $('#menu-hamburger-cont').toggleClass('sidebar-active').toggleClass('fadeout');
    $('#menu-side').toggleClass('sidebar-active');
    $('#menu-nav').toggleClass('sidebar-active');
    $('#text-hero-cont').toggleClass('sidebar-active');
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


function openModal(modalText){
    var modal = document.getElementById("myModal");
    var modalCont = document.createElement("div");
    modalCont.id = "modal-cont";
    document.body.appendChild(modalCont);

    ReactDOM.render(<Modal>
        Modal
    </Modal>, document.getElementById("modal-cont"));

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
        document.body.removeChild(modalCont);
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.removeChild(modalCont);
        }
    }
}

export default tools = {
    toggleSidebar: toggleSidebar,
    stickyNavbar: stickyNavbar,
    smoothScrolling: smoothScrolling,
    openModal: openModal
 };