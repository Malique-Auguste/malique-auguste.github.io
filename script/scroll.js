let portfolio;

window.onload = () => {
    portfolio = document.getElementById("portfolio");
    portfolio.onwheel = customMouseScroll;
}


function customMouseScroll(event){
    
    let delta = event.deltaX;

    if(Math.abs(delta) < Math.abs(event.deltaY)) {
        delta = event.deltaY
    }
    
    portfolio.scrollBy({
        top: 0,
        left: delta,
        behavior: 'auto'
    });

    console.log("scroll")
}

