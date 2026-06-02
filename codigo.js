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

  const fechaEvento = new Date(2026, 6, 4, 20, 0, 0).getTime()

  function actualizarContador() {
    const ahora = new Date().getTime()
    const tiempoRestante = fechaEvento - ahora
    if (tiempoRestante > 0) {
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
      const horas = Math.floor(
        (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutos = Math.floor(
        (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60),
      )
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000)
      document.getElementById('dias').textContent =
        dias < 10 ? '0' + dias : dias
      document.getElementById('horas').textContent =
        horas < 10 ? '0' + horas : horas
      document.getElementById('minutos').textContent =
        minutos < 10 ? '0' + minutos : minutos
      document.getElementById('segundos').textContent =
        segundos < 10 ? '0' + segundos : segundos
    }
  }
  setInterval(actualizarContador, 1000)
  actualizarContador()

  // ============================================
  // 3. EFECTO ESPIRAL
  // ============================================

  function crearEfectoEspiral(x, y) {
    const esMovil = window.innerWidth <= 768
    const radioGrande = esMovil ? 70 : 110
    const radioMediano = esMovil ? 50 : 75
    const radioPequeno = esMovil ? 30 : 45

    const onda = document.createElement('div')
    onda.style.position = 'fixed'
    onda.style.left = x + 'px'
    onda.style.top = y + 'px'
    onda.style.width = '0'
    onda.style.height = '0'
    onda.style.background =
      'radial-gradient(circle, rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0))'
    onda.style.borderRadius = '50%'
    onda.style.transform = 'translate(-50%, -50%)'
    onda.style.pointerEvents = 'none'
    onda.style.zIndex = '9997'
    onda.style.animation = 'onda 0.8s ease-out forwards'
    document.body.appendChild(onda)

    const formas = ['✦', '✧', '✵', '✶', '·', '•']
    const colores = ['#ffd700', '#fff8dc', '#f5e6b8', '#ffe4b5', '#daa520']

    const numGrande = esMovil ? 12 : 18
    for (let i = 0; i < numGrande; i++) {
      setTimeout(function () {
        const particula = document.createElement('div')
        particula.style.position = 'fixed'
        particula.style.pointerEvents = 'none'
        particula.style.zIndex = '9999'
        particula.style.animation = 'brilloEspiral 0.8s ease-out forwards'
        particula.innerHTML = formas[Math.floor(Math.random() * formas.length)]
        particula.style.color =
          colores[Math.floor(Math.random() * colores.length)]

        const angulo = (i / numGrande) * Math.PI * 2
        particula.style.left = x + Math.cos(angulo) * radioGrande + 'px'
        particula.style.top = y + Math.sin(angulo) * radioGrande + 'px'
        particula.style.fontSize =
          (esMovil ? 12 : 16) + Math.random() * 8 + 'px'
        particula.style.textShadow = '0 0 5px gold'

        document.body.appendChild(particula)
        setTimeout(function () {
          particula.remove()
        }, 800)
      }, i * 25)
    }

    const numMediano = esMovil ? 10 : 16
    for (let i = 0; i < numMediano; i++) {
      setTimeout(function () {
        const particula = document.createElement('div')
        particula.style.position = 'fixed'
        particula.style.pointerEvents = 'none'
        particula.style.zIndex = '9999'
        particula.style.animation = 'brilloEspiral 0.7s ease-out forwards'
        particula.innerHTML = formas[Math.floor(Math.random() * formas.length)]
        particula.style.color =
          colores[Math.floor(Math.random() * colores.length)]

        const angulo = (i / numMediano) * Math.PI * 2
        particula.style.left = x + Math.cos(angulo) * radioMediano + 'px'
        particula.style.top = y + Math.sin(angulo) * radioMediano + 'px'
        particula.style.fontSize =
          (esMovil ? 10 : 14) + Math.random() * 6 + 'px'
        particula.style.textShadow = '0 0 4px gold'

        document.body.appendChild(particula)
        setTimeout(function () {
          particula.remove()
        }, 700)
      }, i * 20)
    }

    const numPequeno = esMovil ? 8 : 14
    for (let i = 0; i < numPequeno; i++) {
      setTimeout(function () {
        const particula = document.createElement('div')
        particula.style.position = 'fixed'
        particula.style.pointerEvents = 'none'
        particula.style.zIndex = '9999'
        particula.style.animation = 'brilloEspiral 0.6s ease-out forwards'
        particula.innerHTML = formas[Math.floor(Math.random() * formas.length)]
        particula.style.color =
          colores[Math.floor(Math.random() * colores.length)]

        const angulo = (i / numPequeno) * Math.PI * 2
        particula.style.left = x + Math.cos(angulo) * radioPequeno + 'px'
        particula.style.top = y + Math.sin(angulo) * radioPequeno + 'px'
        particula.style.fontSize = (esMovil ? 8 : 12) + Math.random() * 6 + 'px'
        particula.style.textShadow = '0 0 3px gold'

        document.body.appendChild(particula)
        setTimeout(function () {
          particula.remove()
        }, 600)
      }, i * 15)
    }

    const numEscarcha = esMovil ? 30 : 50
    for (let i = 0; i < numEscarcha; i++) {
      setTimeout(function () {
        const particula = document.createElement('div')
        particula.style.position = 'fixed'
        particula.style.pointerEvents = 'none'
        particula.style.zIndex = '9998'
        particula.style.animation = 'brilloEspiral 0.4s ease-out forwards'
        particula.innerHTML = '·'
        particula.style.color = '#ffd700'
        particula.style.opacity = '0.5'

        const angulo = Math.random() * Math.PI * 2
        const radio = (esMovil ? 25 : 40) + Math.random() * 60
        particula.style.left = x + Math.cos(angulo) * radio + 'px'
        particula.style.top = y + Math.sin(angulo) * radio + 'px'
        particula.style.fontSize = (esMovil ? 4 : 6) + Math.random() * 4 + 'px'

        document.body.appendChild(particula)
        setTimeout(function () {
          particula.remove()
        }, 400)
      }, i * 10)
    }

    setTimeout(function () {
      onda.remove()
    }, 800)
  }

  // ============================================
  // BOTONES: CONFIRMAR, UBICACIÓN, APORTE
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
  // FORMULARIO WHATSAPP
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
    // Esto arregla automáticamente las tildes y espacios para WhatsApp
    const mensaje = `🎉 *NUEVA CONFIRMACIÓN* 🎉\n📝 ${nombre}\n✨ ¡Confirmado!`;
    const urlSegura = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(urlSegura, '_blank');
    alert(`✅ ¡Gracias ${nombre}! Te esperamos.`);
    formulario.reset();
    if (formularioRSVP) formularioRSVP.style.display = 'none';
  });
}

 // ============================================
// MÚSICA (Versión simplificada y ordenada)
// ============================================
let musicaActiva = false;
const musicaActual = new Audio('musica/no-crezcas-mas.mp3');
musicaActual.loop = true;
musicaActual.volume = 0.6;
const btnMusicaFlotante = document.getElementById('botonMusicaFlotante');

function iniciarMusica() {
  musicaActual.play().then(() => {
    musicaActiva = true;
    btnMusicaFlotante.innerHTML = '🔊';
    btnMusicaFlotante.classList.add('reproduciendo');
  }).catch(() => {
    console.log('Esperando que el usuario toque la pantalla');
  });
}

// Iniciar música al primer clic en cualquier parte de la pantalla
document.body.addEventListener('click', function activarMusica() {
  iniciarMusica();
  document.body.removeEventListener('click', activarMusica); // Se desactiva después del primer clic
}, { once: true });

// Control del botón flotante
if (btnMusicaFlotante) {
  btnMusicaFlotante.addEventListener('click', function (e) {
    e.stopPropagation(); // Evita conflictos con otros clics
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
  // VARITA MÁGICA CON EFECTO GLITTER
  // ============================================

  function crearEfectoVaritaMagica() {
    const fondo = document.createElement('div')
    fondo.className = 'fondo-magico'
    document.body.appendChild(fondo)

    const onda = document.createElement('div')
    onda.className = 'onda-varita'
    document.body.appendChild(onda)

    const varita = document.createElement('div')
    varita.className = 'varita-movimiento'
    varita.innerHTML = '🪄'
    document.body.appendChild(varita)

    const glitterItems = ['✦', '✧', '·', '•', '✵', '✶']
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        const particula = document.createElement('div')
        particula.className = 'destello-varita'
        particula.innerHTML =
          glitterItems[Math.floor(Math.random() * glitterItems.length)]
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        particula.style.left = x + 'px'
        particula.style.top = y + 'px'
        particula.style.fontSize = 12 + Math.random() * 18 + 'px'
        particula.style.color = '#ffd700'
        particula.style.textShadow = '0 0 5px gold, 0 0 10px #ffaa00'
        particula.style.filter = 'drop-shadow(0 0 3px gold)'
        document.body.appendChild(particula)
        setTimeout(() => particula.remove(), 800)
      }, i * 40)
    }

    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        const particula = document.createElement('div')
        particula.className = 'destello-varita'
        particula.innerHTML = '·'
        particula.style.left = Math.random() * window.innerWidth + 'px'
        particula.style.top = Math.random() * window.innerHeight + 'px'
        particula.style.fontSize = 6 + Math.random() * 8 + 'px'
        particula.style.color = '#ffd700'
        particula.style.opacity = '0.7'
        document.body.appendChild(particula)
        setTimeout(() => particula.remove(), 600)
      }, i * 25)
    }

    setTimeout(() => {
      fondo.remove()
      onda.remove()
      varita.remove()
    }, 2800)
  }

  // ============================================
  // BOTÓN ABRIR INVITACIÓN (con efecto explosión)
  // ============================================

  if (botonAbrir) {
    botonAbrir.addEventListener('click', function (event) {
      console.log('🎉 Abriendo invitación')

      const destello = document.createElement('div')
      destello.className = 'destello'
      document.body.appendChild(destello)
      setTimeout(() => destello.remove(), 600)

      if (portada) portada.style.display = 'none'
      if (paginaDos) {
        paginaDos.style.display = 'flex'
        paginaDos.style.animation = 'none'
        paginaDos.offsetHeight
        paginaDos.style.animation = 'explosion 0.6s ease-out forwards'
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })

      setTimeout(() => {
        crearEfectoVaritaMagica()
      }, 300)
    })
  }

  // ============================================
  // BOTÓN SIGUIENTE (página 2 -> página 3)
  // ============================================

  if (btnSiguientePagina) {
    btnSiguientePagina.addEventListener('click', function () {
      console.log('➡️ Siguiente página')

      if (paginaDos) paginaDos.style.display = 'none'
      if (invitacionDetallada) {
        invitacionDetallada.style.display = 'block'
        invitacionDetallada.style.animation =
          'abrirCarta 0.6s ease-out forwards'
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // ============================================
    // SOBRE CON EFECTO DE HUMO
    // ============================================
    const sobreInicial = document.getElementById('sobreInicial')
    const portadaInv = document.getElementById('portada')

    if (sobreInicial) {
      // Mostrar el sobre al inicio
      sobreInicial.classList.remove('abierto')

      // Al hacer clic en el sobre
      sobreInicial.addEventListener('click', function () {
        this.classList.add('abierto')

        // Esperar a que termine la animación del humo y desaparecer el sobre
        setTimeout(() => {
          sobreInicial.style.opacity = '0'
          setTimeout(() => {
            sobreInicial.style.display = 'none'
            // Mostrar la portada principal
            if (portadaInv) portadaInv.style.display = 'flex'
          }, 500)
        }, 1500)
      })
    }

    // Asegurar que la portada esté oculta al inicio
    if (portadaInv) portadaInv.style.display = 'none'
  }

  console.log('🚀 Todo listo')
})
