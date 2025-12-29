/*
let section1_overlay;
let ticking = false;

window.onload = () => {
    section1_overlay = document.getElementById("section1").querySelector(".overlay");
    window.addEventListener("scroll", throttledScroll);
}

function throttledScroll() {
    if (!ticking) {
        window.requestAnimationFrame(customMouseScroll);
        ticking = true;
    }
}

function animation(x) {
    return 1 / (1 + Math.exp(3 - 5*x))
}

function customMouseScroll() {
    const rect = section1_overlay.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
        const scrollProgress = animation(1 - (rect.top / window.innerHeight));

        console.log(1 - rect.top / window.innerHeight)

        const children = section1_overlay.querySelectorAll("div");
        const childCount = children.length;
        
        // Each child gets 1/childCount of the scroll range
        children.forEach((child, index) => {
            const startPoint = index / childCount;
            const endPoint = (index + 1) / childCount;
            
            // Calculate opacity for this child only
            let opacity = 0;
            if (scrollProgress >= startPoint) {
                opacity = Math.min(1, (scrollProgress - startPoint) / (endPoint - startPoint));
            }
            
            child.style.opacity = opacity;
        });
    }
    
    ticking = false;
}
*/

function animation(x) {
    return 2.5 / (1 + Math.exp(4*x - 1))
}

window.onload = () => {
    section1_overlay = document.getElementById("section1").querySelector(".text-container");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            let top = entry.boundingClientRect.top;
            let opacity = animation((top + window.innerHeight) / (entry.boundingClientRect.height + window.innerHeight))
            console.log([(top + window.innerHeight) / (entry.boundingClientRect.height + window.innerHeight), opacity])

            section1_overlay.querySelectorAll("div").forEach((child, index) => {
                index = (3 - index);

                child.style.opacity = Math.min(1, (opacity * index));
            });
        });
    }, {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0, 0.01, 0.02... 1.00
    });
    
    observer.observe(section1_overlay);
}