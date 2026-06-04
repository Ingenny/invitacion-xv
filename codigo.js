// ============================================
// CÓDIGO PARA INVITACIÓN DIGITAL DE XV AÑOS
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  console.log('✨ La invitación está lista ✨')

  // ============================================
  // 1. VARIABLES
  // ============================================

  const botonAbrir = document.getElementById('botonAbrir')
  const botonRSVP = document.getElementById('botonRSVP')
  const botonMapa = document.getElementById('botonMapa')
  const botonMusica = document.getElementById('botonMusica')
  const portada = document.getElementById('portada')
  const paginaDos = document.getElementById('paginaDos')
  const invitacionDetallada = document.getElementById('invitacionDetallada')
  const formularioRSVP = document.getElementById('formularioRSVP')
  const contenedorMapa = document.getElementById('contenedorMapa')
  const contenedorMusica = document.getElementById('contenedorMusica')
  const formulario = document.getElementById('formConfirmacion')
  const btnSiguientePagina = document.getElementById('btnSiguientePagina')

  // ============================================
  // 2. CONTADOR
  // ============================================

  const fechaEvento = new Date('2026-07-04T20:00:00-04:00').getTime()

  function actualizarContador() {
    const ahora = new Date().getTime()
    const tiempoRestante = fechaEvento - ahora
    if (tiempoRestante > 0) {
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000)
      document.getElementById('dias').textContent = dias < 10 ? '0' + dias : dias
      document.getElementById('horas').textContent = horas < 10 ? '0' + horas : horas
      document.getElementById('minutos').textContent = minutos < 10 ? '0' + minutos : minutos
      document.getElementById('segundos').textContent = segundos < 10 ? '0' + segundos : segundos
    }
  }
  setInterval(actualizarContador, 1000)
  actualizarContador()

  // ============================================
  // 3. BOTONES: CONFIRMAR, UBICACIÓN, APORTE
  // ============================================

  if (botonRSVP) {
    botonRSVP.addEventListener('click', function () {
      document.getElementById('contenedorMapa').style.display = 'none'
      document.getElementById('contenedorMusica').style.display = 'none'
      document.getElementById('formularioRSVP').style.display = 'block'
    })
  }

  if (botonMapa) {
    botonMapa.addEventListener('click', function () {
      document.getElementById('formularioRSVP').style.display = 'none'
      document.getElementById('contenedorMusica').style.display = 'none'
      document.getElementById('contenedorMapa').style.display = 'block'
    })
  }

  if (botonMusica) {
    botonMusica.addEventListener('click', function () {
      document.getElementById('contenedorMapa').style.display = 'none'
      document.getElementById('formularioRSVP').style.display = 'none'
      document.getElementById('contenedorMusica').style.display = 'block'
    })
  }

  // ============================================
  // 4. FORMULARIO WHATSAPP
  // ============================================
  if (formulario) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      const nombreInput = document.getElementById('nombreInvitado');
      const nombre = nombreInput.value.trim();
      
      if (nombre === '') {
        alert('⚠️ Por favor, ingresa tu nombre');
        nombreInput.focus();
        return;
      }
      
      const numeroWhatsApp = '584141346514';
      const mensaje = `🎉 *NUEVA CONFIRMACIÓN* 🎉\n📝 ${nombre}\n✨ ¡Confirmado!`;
      const urlSegura = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
      
      window.open(urlSegura, '_blank');
      alert(`✅ ¡Gracias ${nombre}! Te esperamos.`);
      formulario.reset();
      if (formularioRSVP) formularioRSVP.style.display = 'none';
    });
  }

  // ============================================
  // 5. MÚSICA
  // ============================================
  let musicaActiva = false;
  const musicaActual = new Audio('musica/no-crezcas-mas.mp3');
  musicaActual.loop = true;
  musicaActual.volume = 0.6;
  const btnMusicaFlotante = document.getElementById('botonMusicaFlotante');

  function iniciarMusica() {
    musicaActual.play().then(() => {
      musicaActiva = true;
      if (btnMusicaFlotante) {
        btnMusicaFlotante.innerHTML = '🔊';
        btnMusicaFlotante.classList.add('reproduciendo');
      }
    }).catch(() => {
      console.log('Esperando que el usuario toque la pantalla');
    });
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

  // ============================================
  // 6. BOTÓN ABRIR INVITACIÓN (Página 2 → Página 3)
  // ============================================

    if (btnSiguientePagina) {
    btnSiguientePagina.addEventListener('click', function () {
      console.log('➡️ Siguiente página')

      if (paginaDos) {
        paginaDos.style.display = 'none'
        paginaDos.classList.remove('visible')
      }
      
      if (invitacionDetallada) {
        invitacionDetallada.classList.add('visible')  // ← Usamos clase en vez de display directo
        invitacionDetallada.style.animation = 'abrirCarta 0.6s ease-out forwards'
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  // ============================================
  // 7. BOTÓN SIGUIENTE (Página 3 → Página 4)
  // ============================================

  if (btnSiguientePagina) {
    btnSiguientePagina.addEventListener('click', function () {
      console.log('➡️ Siguiente página')

      if (paginaDos) paginaDos.style.display = 'none'
      if (invitacionDetallada) {
        invitacionDetallada.style.display = 'block'
        invitacionDetallada.style.animation = 'abrirCarta 0.6s ease-out forwards'
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  // ============================================
  // 8. SOBRE INTERACTIVO (Página 1 → Página 2)
  // ============================================
  const sobreInicial = document.getElementById('sobreInicial');
  const envelope = document.getElementById('envelope');
  let sobreYaAbierto = false;

  function accionAbrirSobre() {
    if (sobreYaAbierto) return;
    sobreYaAbierto = true;
    console.log("🎯 ¡Clic detectado! Abriendo sobre...");
    
    if (envelope) {
      envelope.classList.add('open');
      envelope.classList.remove('close');
    }

    setTimeout(() => {
      if (sobreInicial) {
        sobreInicial.style.transition = 'opacity 0.8s ease, visibility 0.8s';
        sobreInicial.style.opacity = '0';
        sobreInicial.style.visibility = 'hidden';
        sobreInicial.style.pointerEvents = 'none';
        console.log('✅ Sobre ocultado');
      }
      
      if (portada) {
        console.log('📄 Mostrando portada...');
        portada.style.display = 'flex';
        portada.style.opacity = '1';
        portada.style.visibility = 'visible';
        
        setTimeout(() => {
          portada.style.animation = 'abrirCarta 0.8s ease-out forwards';
          console.log('✅ Portada visible con animación');
        }, 100);
      }
    }, 2500); 
  }

  if (sobreInicial) {
    sobreInicial.addEventListener('click', accionAbrirSobre);
  }

  const envelopeWrapper = document.querySelector('.envelope-wrapper');
  if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', function(e) {
      e.stopPropagation();
      accionAbrirSobre();
    });
  }
  
  if (envelope) {
    envelope.addEventListener('click', function(e) {
      e.stopPropagation();
      accionAbrirSobre();
    });
  }

  console.log('🚀 Todo listo')
})
