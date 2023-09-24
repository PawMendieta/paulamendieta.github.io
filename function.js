
document.getElementById('boton_color').addEventListener('click', function () {
document.body.style.backgroundColor = '#EBC9BB';
})

document.getElementById('boton_video').onclick= function mostrarVideo () {
    document.getElementById('video_contenedor').style.display = 'block';

    var iframe =
    documen.getElementById('youtube-video');
    iframe.src =
    iframe.src.replace('autoplay=0', 'autoplay=1');
}