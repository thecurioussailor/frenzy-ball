var canvas = document.querySelector('canvas');

canvas.width = 428;
canvas.height = 540;

var c = canvas.getContext("2d")

c.fillStyle = "rgb(60, 179, 113, 1)"
c.fillRect(0,4,54,54);
c.fillRect(58,4,54,54);
c.fillRect(116,4,54,54);
c.fillRect(174,4,54,54);
c.fillRect(232,4,54,54);
c.fillRect(290,4,54,54);
c.fillRect(348,4,54,54);

c.beginPath();
c.arc(200,200, 9, 0, Math.PI * 2, false);
c.strokeStyle = "white"
c.stroke();

