
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            
            navbar.style.top = "0";
        } else {
            
            navbar.style.top = "-50px"; 
        }
        prevScrollPos = currentScrollPos;
    };