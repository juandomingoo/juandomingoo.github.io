// Portafolio · utilidades comunes

// Menú en celular
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav ul').classList.toggle('open');
});

// Videos: pega el link de YouTube o Google Drive en data-video="" de cada ficha.
// Si está vacío, se muestra "Video próximamente" sobre una captura del proyecto.
document.querySelectorAll('.video[data-video]').forEach((box) => {
  const url = box.dataset.video.trim();
  if (!url) return;
  let src = null;
  const yt = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (yt) src = `https://www.youtube.com/embed/${yt[1]}`;
  else if (drive) src = `https://drive.google.com/file/d/${drive[1]}/preview`;
  if (src) {
    box.innerHTML = `<iframe src="${src}" title="Video del proyecto" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  } else if (/\.mp4$/i.test(url)) {
    box.innerHTML = `<video src="${url}" controls playsinline></video>`;
  }
});

// Fotos que todavía no existen: se reemplazan por un recuadro "Foto pendiente"
document.querySelectorAll('img[data-ph]').forEach((img) => {
  const swap = () => {
    const d = document.createElement('div');
    d.className = 'ph';
    d.textContent = img.dataset.ph || 'Foto pendiente';
    img.replaceWith(d);
  };
  if (img.complete && img.naturalWidth === 0) swap();
  else img.addEventListener('error', swap);
});
