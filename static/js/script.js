console.log("hi");

document.addEventListener("DOMContentLoaded", function () {
    gsap.from("h1", { duration: 1, y: -50, ease: "power2.out" });
    gsap.from("p", { duration: 1, y: 50, ease: "power2.out", delay: 0.5 });
    gsap.from("a", { duration: 1, scale: 0, ease: "elastic.out(1, 0.3)", delay: 1 });

    console.log("hi");

    document.querySelectorAll(".blog-article").forEach((article) => {
        article.addEventListener("mouseenter", () => {
            gsap.to(article, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", duration: 0.3 });
        });

        article.addEventListener("mouseleave", () => {
            gsap.to(article, { scale: 1, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", duration: 0.3 });
        });
    });
});


