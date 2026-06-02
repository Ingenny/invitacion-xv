document.addEventListener('DOMContentLoaded', function () {
  console.log('✨ La invitación está lista ✨');

  // 1. VARIABLES
  const sobreInicial = document.getElementById('sobreInicial');
  const envelope = document.getElementById('envelope');
  const portada = document.getElementById('portada');
  const botonAbrir = document.getElementById('botonAbrir');
  const paginaDos = document.getElementById('paginaDos');
  const btnSiguientePagina = document.getElementById('btnSiguientePagina');
  const invitacionDetallada = document.getElementById('invitacionDetallada');
  const botonRSVP = document.getElementById('botonRSVP');
  const botonMapa = document.getElementById('botonMapa');
  const botonMusica = document.getElementById('botonMusica');
  const formularioRSVP = document.getElementById('formularioRSVP');
  const contenedorMapa = document.getElementById('contenedorMapa');
  const contenedorMusica = document.getElementById('contenedorMusica');
  const formulario = document.getElementById('formConfirmacion');
  const btnMusicaFlotante = document.getElementById('botonMusicaFlotante');

  let sobreYaAbierto = false;

  // 2. CONTADOR
  const fechaEvento = new Date('2026-07-04T20:00:00-04:00').getTime();
  function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaEvento - ahora;
    if (tiempoRestante > 0) {
      document.getElementById('dias').textContent = String(Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))).padStart(2, '0');
      document.getElementById('horas').textContent = String(Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      document.getElementById('minutos').textContent = String(Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      document.getElementById('segundos').textContent = String(Math.floor((tiempoRestante % (1000 * 60)) / 1000)).padStart(2, '0');
    }
  }
  setInterval(actualizarContador, 1000);
  actualizarContador();

  // 3. NAVEGACIÓN UNIFICADA
  // Paso A: Clic en el sobre
  if (sobreInicial) {
    sobreInicial.addEventListener('click', function() {
      if (sobreYaAbierto) return;
      sobreYaAbierto = true;
      console.log("🎯 Clic detectado: Abriendo sobre...");
      
      if (envelope) {
        envelope.classList.add('open');
        envelope.classList.remove('close');
      }

      setTimeout(() => {
        sobreInicial.style.transition = 'opacity 0.8s ease, visibility 0.8s';
        sobreInicial.style.opacity = '0';
        sobreInicial.style.visibility = 'hidden';
        sobreInicial.style.pointerEvents = 'none'; // Deja de bloquear la pantalla
        
        if (portada) {
          portada.style.display = 'flex';
          setTimeout(() => { portada.style.animation = 'abrirCarta 0.8s ease-out forwards'; }, 50);
        }
      }, 2500);
    });
  }

  // Paso B: Clic en "Abrir Invitación"
  if (botonAbrir) {
    botonAbrir.addEventListener('click', function() {
      if (portada) portada.style.display = 'none';
      if (paginaDos) {
        paginaDos.style.display = 'flex';
        paginaDos.style.animation = 'abrirCarta 0.8s ease-out forwards';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Paso C: Clic en "Siguiente"
  if (btnSiguientePagina) {
    btnSiguientePagina.addEventListener('click', function() {
      if (paginaDos) paginaDos.style.display = 'none';
      if (invitacionDetallada) {
        invitacionDetallada.style.display = 'block';
        invitacionDetallada.style.animation = 'abrirCarta 0.8s ease-out forwards';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. PESTAÑAS (RSVP, Mapa, Aporte)
  function mostrarSeccion(idActivo) {
    ['formularioRSVP', 'contenedorMapa', 'contenedorMusica'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === idActivo) ? 'block' : 'none';
    });
  }
  if (botonRSVP) botonRSVP.addEventListener('click', () => mostrarSeccion('formularioRSVP'));
  if (botonMapa) botonMapa.addEventListener('click', () => mostrarSeccion('contenedorMapa'));
  if (botonMusica) botonMusica.addEventListener('click', () => mostrarSeccion('contenedorMusica'));

  // 5. FORMULARIO WHATSAPP SEGURO
  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      const nombreInput = document.getElementById('nombreInvitado');
      const nombre = nombreInput.value.trim();
      if (!nombre) { alert('⚠️ Por favor, ingresa tu nombre'); nombreInput.focus(); return; }
      
      const mensaje = `🎉 *NUEVA CONFIRMACIÓN* 🎉\n📝 ${nombre}\n✨ ¡Confirmado!`;
      const url = `https://wa.me/584141346514?text=${encodeURIComponent(mensaje)}`;
      
      window.open(url, '_blank');
      alert(`✅ ¡Gracias ${nombre}! Te esperamos.`);
      formulario.reset();
      mostrarSeccion(null);
    });
  }

  // 6. MÚSICA FLOTANTE
  let musicaActiva = false;
  const musicaActual = new Audio('musica/no-crezcas-mas.mp3');
  musicaActual.loop = true;
  musicaActual.volume = 0.6;

  function iniciarMusica() {
    musicaActual.play().then(() => {
      musicaActiva = true;
      btnMusicaFlotante.innerHTML = '🔊';
      btnMusicaFlotante.classList.add('reproduciendo');
    }).catch(() => console.log('Esperando interacción del usuario'));
  }

  document.body.addEventListener('click', function activarMusica() {
    iniciarMusica();
    document.body.removeEventListener('click', activarMusica);
  }, { once: true });

  if (btnMusicaFlotante) {
    btnMusicaFlotante.addEventListener('click', function (e) {
      e.stopPropagation();
      if (musicaActiva) {
        musicaActual.pause();
        this.innerHTML = '🎵';
        this.classList.remove('reproduciendo');
        musicaActiva = false;
      } else {
        musicaActual.play();
        this.innerHTML = '🔊';
        this.classList.add('reproduciendo');
        musicaActiva = true;
      }
    });
  }

  console.log('🚀 Todo listo y funcionando');
});
