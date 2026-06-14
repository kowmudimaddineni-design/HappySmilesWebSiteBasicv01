
/* =========================================
   HAPPY SMILES DENTAL STUDIO
   APP.JS PART 1

   GSAP SETUP
   LOADER
   CURSOR
   NAVBAR
   MOBILE MENU
   SCROLL PROGRESS
========================================= */

/* GSAP */

gsap.registerPlugin(
    ScrollTrigger
);

/* APP INIT */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initLoader();

        initCursor();

        initNavbar();

        initMobileMenu();

        initScrollProgress();

    }
);

/* =========================================
   LOADER
========================================= */

function initLoader(){

    const loader =
    document.querySelector(
        ".loader"
    );

    if(!loader) return;

    window.addEventListener(
        "load",
        () => {

            gsap.to(
                ".loader-logo",
                {
                    y:-50,
                    opacity:0,
                    duration:.8
                }
            );

            gsap.to(
                loader,
                {
                    opacity:0,
                    duration:1,
                    delay:.5,

                    onComplete(){

                        loader.remove();

                    }

                }
            );

        }
    );

}

/* =========================================
   CURSOR
========================================= */

function initCursor(){

    const cursor =
    document.querySelector(
        ".cursor"
    );

    if(!cursor) return;

    document.addEventListener(
        "mousemove",
        e => {

            gsap.to(
                cursor,
                {
                    x:e.clientX,
                    y:e.clientY,
                    duration:.15
                }
            );

        }
    );

    document
    .querySelectorAll(
        "a, button"
    )
    .forEach(
        item => {

            item.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(
                        cursor,
                        {
                            scale:1.8,
                            duration:.2
                        }
                    );

                }
            );

            item.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        cursor,
                        {
                            scale:1,
                            duration:.2
                        }
                    );

                }
            );

        }
    );

}

/* =========================================
   NAVBAR SCROLL
========================================= */

function initNavbar(){

    const navbar =
    document.querySelector(
        ".navbar"
    );

    if(!navbar) return;

    window.addEventListener(
        "scroll",
        () => {

            if(window.scrollY > 50){

                navbar.classList.add(
                    "scrolled"
                );

            }

            else{

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}

/* =========================================
   MOBILE MENU
========================================= */

function initMobileMenu(){

    const button =
    document.querySelector(
        ".mobile-toggle"
    );

    const menu =
    document.querySelector(
        ".mobile-menu"
    );

    if(
        !button ||
        !menu
    ) return;

    button.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "active"
            );

        }
    );

    menu
    .querySelectorAll(
        "a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}

/* =========================================
   SCROLL PROGRESS
========================================= */

function initScrollProgress(){

    const progress =
    document.querySelector(
        ".scroll-progress"
    );

    if(!progress) return;

    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
            window.scrollY;

            const docHeight =

            document.documentElement
            .scrollHeight

            -

            window.innerHeight;

            const percent =

            (scrollTop / docHeight)

            * 100;

            progress.style.width =

            percent + "%";

        }
    );

}


/* =========================================
   HAPPY SMILES DENTAL STUDIO
   APP.JS PART 2

   HERO ANIMATIONS
   SECTION REVEALS
   CASE ANIMATIONS
   SERVICES ANIMATIONS
   DOCTOR REVEAL
   REVIEW ANIMATIONS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initHeroAnimations();

        initRevealAnimations();

        initCaseAnimations();

        initServiceAnimations();

        initDoctorAnimations();

        initReviewAnimations();

    }
);

/* =========================================
   HERO ANIMATION
========================================= */

function initHeroAnimations(){

    const heroTitle =
    document.querySelector(
        ".hero-title"
    );

    if(!heroTitle) return;

    const tl =
    gsap.timeline();

    tl.from(
        ".hero-tag",
        {
            opacity:0,
            y:40,
            duration:1
        }
    )

    .from(
        ".hero-title",
        {
            opacity:0,
            y:100,
            duration:1.4,
            ease:"power4.out"
        },
        "-=.5"
    )

    .from(
        ".hero-actions",
        {
            opacity:0,
            y:40,
            duration:1
        },
        "-=.8"
    );

    gsap.to(
        ".hero-title",
        {
            scale:.85,
            opacity:.3,
            y:-180,

            scrollTrigger:{
                trigger:".hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        }
    );

}

/* =========================================
   SECTION REVEALS
========================================= */

function initRevealAnimations(){

    const sections =

    document.querySelectorAll(

        ".cases-intro, .comparison-section, .logo-shrine, .statement, .intermission"

    );

    sections.forEach(
        section => {

            gsap.from(
                section,
                {
                    opacity:0,
                    y:80,

                    duration:1.2,

                    ease:"power3.out",

                    scrollTrigger:{
                        trigger:section,
                        start:"top 80%"
                    }

                }
            );

        }
    );

}

/* =========================================
   CASE ANIMATIONS
========================================= */

function initCaseAnimations(){

    const cases =

    document.querySelectorAll(
        ".case-item"
    );

    if(!cases.length) return;

    gsap.from(
        ".case-item",
        {
            opacity:0,
            y:120,

            stagger:.2,

            duration:1.2,

            ease:"power4.out",

            scrollTrigger:{
                trigger:".cases-grid",
                start:"top 75%"
            }

        }
    );

}

/* =========================================
   SERVICES
========================================= */

function initServiceAnimations(){

    gsap.utils.toArray(

        ".service-panel"

    )

    .forEach(
        panel => {

            const title =

            panel.querySelector(
                ".service-title"
            );

            gsap.from(
                title,
                {
                    opacity:0,

                    y:200,

                    duration:1.4,

                    ease:"power4.out",

                    scrollTrigger:{
                        trigger:panel,
                        start:"top 75%"
                    }

                }
            );

        }
    );

}

/* =========================================
   DOCTOR REVEAL
========================================= */

function initDoctorAnimations(){

    const doctor =

    document.querySelector(
        ".doctor-reveal"
    );

    if(!doctor) return;

    gsap.from(
        ".doctor-image",
        {
            opacity:0,

            scale:.85,

            duration:1.5,

            ease:"power4.out",

            scrollTrigger:{
                trigger:doctor,
                start:"top 75%"
            }

        }
    );

    gsap.from(
        ".doctor-copy",
        {
            opacity:0,

            x:120,

            duration:1.5,

            ease:"power4.out",

            scrollTrigger:{
                trigger:doctor,
                start:"top 75%"
            }

        }
    );

}

/* =========================================
   REVIEWS
========================================= */

function initReviewAnimations(){

    const reviews =

    document.querySelectorAll(
        ".reviews-list blockquote"
    );

    if(!reviews.length) return;

    gsap.from(
        reviews,
        {
            opacity:0,

            y:100,

            stagger:.25,

            duration:1.2,

            ease:"power4.out",

            scrollTrigger:{
                trigger:".reviews-luxury",
                start:"top 75%"
            }

        }
    );

}


/* =========================================
   HAPPY SMILES DENTAL STUDIO
   APP.JS PART 3

   COMPARISON SLIDER
   LIGHTBOX
   PARALLAX
   ACTIVE NAVIGATION
   IMAGE PRELOADER
   PERFORMANCE HELPERS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initComparisonSlider();

        initLightbox();

        initParallaxImages();

        initActiveNavigation();

        preloadImages();

        initPerformanceHelpers();

    }
);

/* =========================================
   BEFORE / AFTER SLIDER
========================================= */

function initComparisonSlider(){

    const slider =

    document.querySelector(
        ".comparison-slider"
    );

    const afterWrap =

    document.querySelector(
        ".comparison-after-wrap"
    );

    if(
        !slider ||
        !afterWrap
    ) return;

    slider.addEventListener(
        "input",
        () => {

            afterWrap.style.width =

            slider.value + "%";

        }
    );

}

/* =========================================
   LIGHTBOX
========================================= */

function initLightbox(){

    const lightbox =

    document.querySelector(
        ".lightbox"
    );

    if(!lightbox) return;

    const lightboxImage =

    lightbox.querySelector(
        "img"
    );

    document

    .querySelectorAll(
        ".case-image img"
    )

    .forEach(
        image => {

            image.addEventListener(
                "click",
                () => {

                    lightbox.classList.add(
                        "active"
                    );

                    lightboxImage.src =
                    image.src;

                }
            );

        }
    );

    lightbox.addEventListener(
        "click",
        () => {

            lightbox.classList.remove(
                "active"
            );

        }
    );

}

/* =========================================
   PARALLAX IMAGES
========================================= */

function initParallaxImages(){

    gsap.utils.toArray(

        ".parallax-image"

    )

    .forEach(
        image => {

            gsap.to(
                image,
                {

                    y:-120,

                    ease:"none",

                    scrollTrigger:{

                        trigger:image,

                        scrub:true

                    }

                }
            );

        }
    );

}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

function initActiveNavigation(){

    const sections =

    document.querySelectorAll(
        "section[id]"
    );

    const navLinks =

    document.querySelectorAll(
        ".nav-menu a"
    );

    if(
        !sections.length ||
        !navLinks.length
    ) return;

    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(
                section => {

                    const sectionTop =

                    section.offsetTop - 200;

                    if(

                        window.scrollY >= sectionTop

                    ){

                        current =
                        section.getAttribute(
                            "id"
                        );

                    }

                }
            );

            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );

                    const href =

                    link.getAttribute(
                        "href"
                    );

                    if(

                        href === "#" + current

                    ){

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );

}

/* =========================================
   IMAGE PRELOADER
========================================= */

function preloadImages(){

    const images = [

        "assets/images/logo.png",

        "assets/images/exterior.png",

        "assets/images/dr-kowmudi.png",

       
    ];

    images.forEach(
        src => {

            const image =

            new Image();

            image.src = src;

        }
    );

}

/* =========================================
   PERFORMANCE HELPERS
========================================= */

function initPerformanceHelpers(){

    const prefersReducedMotion =

    window.matchMedia(

        "(prefers-reduced-motion: reduce)"

    );

    if(

        prefersReducedMotion.matches

    ){

        gsap.globalTimeline.clear();

    }

    console.log(

        "Happy Smiles Performance Layer Ready"

    );

}

/* =========================================
   END OF PART 3
========================================= */


/* =========================================
   HAPPY SMILES DENTAL STUDIO
   APP.JS PART 4

   LUXURY ENHANCEMENTS
   GOLD SWEEP
   COUNTERS
   MAGNETIC BUTTONS
   EASTER EGG
========================================= */

/* =========================================
   MAGNETIC BUTTONS
========================================= */

function initMagneticButtons(){

    const buttons =

    document.querySelectorAll(

        ".btn-gold, .cta-primary, .gum-button"

    );

    buttons.forEach(
        button => {

            button.addEventListener(
                "mousemove",
                e => {

                    const rect =

                    button.getBoundingClientRect();

                    const x =

                    e.clientX -

                    rect.left -

                    rect.width / 2;

                    const y =

                    e.clientY -

                    rect.top -

                    rect.height / 2;

                    gsap.to(
                        button,
                        {
                            x:x * .15,
                            y:y * .15,
                            duration:.3
                        }
                    );

                }
            );

            button.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        button,
                        {
                            x:0,
                            y:0,
                            duration:.4
                        }
                    );

                }
            );

        }
    );

}

/* =========================================
   GOLD SWEEP
========================================= */

function initGoldSweep(){

    gsap.utils.toArray(

        ".gold-sweep"

    )

    .forEach(
        element => {

            gsap.from(
                element,
                {
                    opacity:0,

                    duration:1,

                    scrollTrigger:{
                        trigger:element,
                        start:"top 85%"
                    }

                }
            );

        }
    );

}

/* =========================================
   SIMPLE COUNTER
========================================= */

function animateCounter(

    element,
    target

){

    let count = 0;

    const speed =

    target / 100;

    const timer =

    setInterval(
        () => {

            count += speed;

            if(
                count >= target
            ){

                count = target;

                clearInterval(
                    timer
                );

            }

            element.textContent =

            Math.floor(
                count
            );

        },
        20
    );

}

/* =========================================
   LOGO EASTER EGG
========================================= */

function initLogoEasterEgg(){

    const logo =

    document.querySelector(
        ".nav-logo"
    );

    if(!logo) return;

    logo.addEventListener(
        "click",
        () => {

            gsap.fromTo(

                logo,

                {
                    rotate:0
                },

                {
                    rotate:360,

                    duration:1
                }

            );

        }
    );

}

/* =========================================
   APPEND TO INIT
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initMagneticButtons();

        initGoldSweep();

        initLogoEasterEgg();

    }

);

/* =========================================
   END OF PART 4
========================================= */


