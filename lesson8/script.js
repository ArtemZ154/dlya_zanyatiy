let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d'); // контекст выполнения



function line(posstart, length) {
    let [x, y] = posstart;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
};

function triangle(A=[0, 0], B=[100,100], C=[50,50]) {
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(B[0], B[1]);
    ctx.lineTo(C[0], C[1]);
    ctx.lineTo(A[0], A[1]);
    ctx.stroke()
};
 
function kvadrat(A=[0, 0], B=[0, 50], C=[50, 50], D=[50, 0]) {
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(B[0], B[1]);
    ctx.lineTo(C[0], C[1]);
    ctx.lineTo(D[0], D[1]);
    ctx.lineTo(A[0], A[1]);
    ctx.stroke();
}

function strelka(start=[350, 350], length=200, direction=3) {
    [startx, starty] = start
    ctx.beginPath();
    ctx.moveTo(startx, starty);
    if (direction == 0) {
        ctx.lineTo(startx+length, starty);
        ctx.lineTo(startx-35+length, starty-45);
        ctx.lineTo(startx+length, starty);
        ctx.lineTo(startx-35+length, starty+45);
    } else if (direction == 1) {
        ctx.lineTo(startx, starty+length);
        ctx.lineTo(startx+45, starty+length-35);
        ctx.lineTo(startx, starty+length);
        ctx.lineTo(startx-45, starty+length-35);
    } else if (direction == 2) {
        ctx.lineTo(startx-length, starty);
        ctx.lineTo(startx-length+35, starty-45);
        ctx.lineTo(startx-length, starty);
        ctx.lineTo(startx-length+35, starty+45);
    } else if (direction == 3) {
        ctx.lineTo(startx, starty-length);
        ctx.lineTo(startx-45, starty+35-length);
        ctx.lineTo(startx, starty-length);
        ctx.lineTo(startx+45, starty+35-length);
    };
    ctx.stroke();
};

strelka()