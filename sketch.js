// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {

    let hr = hour();
    let min = minute();
    let sec = second();

    let count_s = 0;
    let count_m = 0;
    let count_h = 0;

    let rad_s = 50;
    let rad_m = 100;
    let rad_h = 200;

    var c = document.getElementById("myCanvas")
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, 800, 600);

    while(count_s < sec) {
        ctx.beginPath();
        ctx.arc(400 + rad_s * Math.sin(count_s * 6 * (Math.PI / 180)), 300 + rad_s * Math.cos(count_s * 6 * (Math.PI / 180)), 2, 0, 2 * Math.PI);
        ctx.stroke();
        count_s = count_s + 1;
    }

    while(count_m < min) {
        ctx.beginPath();
        ctx.arc(400 + rad_m * Math.sin(count_m * 6 * (Math.PI / 180)), 300 + rad_m * Math.cos(count_m * 6 * (Math.PI / 180)), 5, 0, 2 * Math.PI);
        ctx.stroke();
        count_m = count_m + 1;
    }

    while(count_h < hr) {
        ctx.beginPath();
        ctx.arc(400 + rad_h * Math.sin(count_h * 15 * (Math.PI / 180)), 300 + rad_h * Math.cos(count_h * 15 * (Math.PI / 180)), 25, 0, 2 * Math.PI);
        ctx.stroke();
        count_h = count_h + 1;
    }

}