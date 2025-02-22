console.log("hi");

document.addEventListener("DOMContentLoaded", function () {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Smooth Page Load Animation
    gsap.from("body", { opacity: 0, duration: 1, ease: "power2.out" });

    // Header Animation
    gsap.from("nav", { y: -50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.5 });

    // Hero Section Animation
    gsap.from("h1", { y: -50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.8 });
    gsap.from("p", { y: 50, opacity: 0, duration: 1, ease: "power2.out", delay: 1 });
    gsap.from("a", { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 0.3)", delay: 1.2 });

    // Project Cards Animation
    gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
            },
            delay: index * 0.2,
        });
    });

    // Contact Form Animation
    gsap.from(".contact-form", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
        },
    });

    // Contact Info Animation
    gsap.from(".contact-info", {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
        },
    });

    // Hover Effects for Cards
    gsap.utils.toArray(".project-card, .blog-article").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", duration: 0.3 });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", duration: 0.3 });
        });
    });
});

