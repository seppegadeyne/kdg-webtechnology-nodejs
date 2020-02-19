let time = 0;
let timer = setInterval(function () {
    time += 1;
    console.log(time + " seconds have passed");
    if (time > 2) {
        clearInterval(timer);
    }
}, 1000);