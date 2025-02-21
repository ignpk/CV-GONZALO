let rotacion = 0;
function girar() {
    rotacion += 180;
    document.getElementById("caja").style.transform = `rotateY(${rotacion}deg)`;
}