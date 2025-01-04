function generarColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = generarColorAleatorio();
});
