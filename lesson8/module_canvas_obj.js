function drawSK(ctx) {
    ctx.beginPath();
    ctx.moveTo(35, 580);
    ctx.lineTo(35, 580-560);
    ctx.lineTo(35-10, 580+15-560);
    ctx.lineTo(35, 580-560);
    ctx.lineTo(35+10, 580+15-560);
    ctx.moveTo(35, 580-58*1);
    ctx.lineTo(35+10, 580-58*1);
    ctx.lineTo(35-10, 580-58*1);
    ctx.moveTo(35, 580-58*2);
    ctx.lineTo(35+10, 580-58*2);
    ctx.lineTo(35-10, 580-58*2);
    ctx.moveTo(35, 580-58*3);
    ctx.lineTo(35+10, 580-58*3);
    ctx.lineTo(35-10, 580-58*3);
    ctx.moveTo(35, 580-58*4);
    ctx.lineTo(35+10, 580-58*4);
    ctx.lineTo(35-10, 580-58*4);
    ctx.moveTo(35, 580-58*5);
    ctx.lineTo(35+10, 580-58*5);
    ctx.lineTo(35-10, 580-58*5);
    ctx.moveTo(35, 580-58*6);
    ctx.lineTo(35+10, 580-58*6);
    ctx.lineTo(35-10, 580-58*6);
    ctx.moveTo(35, 580-58*7);
    ctx.lineTo(35+10, 580-58*7);
    ctx.lineTo(35-10, 580-58*7);
    ctx.moveTo(35, 580-58*8);
    ctx.lineTo(35+10, 580-58*8);
    ctx.lineTo(35-10, 580-58*8);
    ctx.moveTo(35, 580-58*9);
    ctx.lineTo(35+10, 580-58*9);
    ctx.lineTo(35-10, 580-58*9);
    ctx.moveTo(35, 580);
    ctx.lineTo(35+560, 580);
    ctx.lineTo(25-15+560, 580-10);
    ctx.lineTo(35+560, 580);
    ctx.lineTo(25-15+560, 580+10);
    ctx.moveTo(35+58*1, 580);
    ctx.lineTo(35+58*1, 580+10);
    ctx.lineTo(35+58*1, 580-10);
    ctx.moveTo(35+58*2, 580);
    ctx.lineTo(35+58*2, 580+10);
    ctx.lineTo(35+58*2, 580-10);
    ctx.moveTo(35+58*3, 580);
    ctx.lineTo(35+58*3, 580+10);
    ctx.lineTo(35+58*3, 580-10);
    ctx.moveTo(35+58*4, 580);
    ctx.lineTo(35+58*4, 580+10);
    ctx.lineTo(35+58*4, 580-10);
    ctx.moveTo(35+58*5, 580);
    ctx.lineTo(35+58*5, 580+10);
    ctx.lineTo(35+58*5, 580-10);
    ctx.moveTo(35+58*6, 580);
    ctx.lineTo(35+58*6, 580+10);
    ctx.lineTo(35+58*6, 580-10);
    ctx.moveTo(35+58*7, 580);
    ctx.lineTo(35+58*7, 580+10);
    ctx.lineTo(35+58*7, 580-10);
    ctx.moveTo(35+58*8, 580);
    ctx.lineTo(35+58*8, 580+10);
    ctx.lineTo(35+58*8, 580-10);
    ctx.moveTo(35+58*9, 580);
    ctx.lineTo(35+58*9, 580+10);
    ctx.lineTo(35+58*9, 580-10);
    ctx.stroke();
    ctx.stroke();
};

function diagram(data=[20, 30, 40, 45, 52, 12, 65, 45], ctx) {
    for (let i = 0; i < data.length; i++) {
        let el = data[i];
        ctx.fillRect((35+58*(i+1))-5, 580, 10, -(Math.round(el*5.8)))
    };
};

export { diagram, drawSK }