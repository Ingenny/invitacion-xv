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
  const pieInvitacion = document.getElementById('pieInvitacion')

  // ============================================
  // 2. CONTADOR
  // ============================================

  const fechaEvento = new Date('2026-07-04T20:00:00-04:00').getTime()

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
      evento.preventDefault()
      const nombreInput = document.getElementById('nombreInvitado')
      const nombre = nombreInput.value.trim()

      if (nombre === '') {
        alert('⚠️ Por favor, ingresa tu nombre')
        nombreInput.focus()
        return
      }

      const numeroWhatsApp = '584141346514'
      const mensaje = `🎉 *NUEVA CONFIRMACIÓN* 🎉\n📝 ${nombre}\n✨ ¡Confirmado!`
      const urlSegura = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`

      window.open(urlSegura, '_blank')
      alert(`✅ ¡Gracias ${nombre}! Te esperamos.`)
      formulario.reset()
      if (formularioRSVP) formularioRSVP.style.display = 'none'
    })
  }

  // ============================================
  // 5. MÚSICA
  // ============================================
  let musicaActiva = false
  const musicaActual = new Audio('musica/no-crezcas-mas.mp3')
  musicaActual.loop = true
  musicaActual.volume = 0.6
  const btnMusicaFlotante = document.getElementById('botonMusicaFlotante')

  function iniciarMusica() {
    musicaActual
      .play()
      .then(() => {
        musicaActiva = true
        if (btnMusicaFlotante) {
          btnMusicaFlotante.innerHTML = '🔊'
          btnMusicaFlotante.classList.add('reproduciendo')
        }
      })
      .catch(() => {
        console.log('Esperando que el usuario toque la pantalla')
      })
  }

  document.body.addEventListener(
    'click',
    function activarMusica() {
      iniciarMusica()
      document.body.removeEventListener('click', activarMusica)
    },
    { once: true },
  )

  if (btnMusicaFlotante) {
    btnMusicaFlotante.addEventListener('click', function (e) {
      e.stopPropagation()
      if (musicaActiva) {
        musicaActual.pause()
        this.innerHTML = '🎵'
        this.classList.remove('reproduciendo')
        musicaActiva = false
      } else {
        musicaActual.play()
        this.innerHTML = '🔊'
        this.classList.add('reproduciendo')
        musicaActiva = true
      }
    })
  }

  // ============================================
  // 6. EFECTO ESPIRAL DE DESTELLOS
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

    setTimeout(function () {
      onda.remove()
    }, 800)
  }

  // ============================================
  // 7. EFECTO VARITA MÁGICA
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
  // 8. BOTÓN ABRIR INVITACIÓN (Página 2 → Página 3) CON EFECTO MÁGICO
  // ============================================

  if (botonAbrir) {
    botonAbrir.addEventListener('click', function (event) {
      console.log(' Clic en ABRIR INVITACIÓN - Efecto Mágico')

      const centroX = window.innerWidth / 2
      const centroY = window.innerHeight / 2

      // Ejecutar efectos mágicos
      crearEfectoVaritaMagica()
      crearEfectoEspiral(centroX, centroY)

      // Esperar a que termine el efecto y mostrar la página del mensaje
      setTimeout(() => {
        if (portada) {
          portada.style.display = 'none'
        }

        if (paginaDos) {
          paginaDos.style.display = 'flex'
          paginaDos.style.animation = 'abrirCarta 1s ease-out forwards'
          pieInvitacion.style.display = 'none'
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 1500)
    })
  }

  // ============================================
  // 9. BOTÓN SIGUIENTE (Página 3 → Página 4) CON EFECTO MÁGICO
  // ============================================

  if (btnSiguientePagina) {
    btnSiguientePagina.addEventListener('click', function () {
      console.log('➡️ Clic en SIGUIENTE - Efecto Mágico')

      const centroX = window.innerWidth / 2
      const centroY = window.innerHeight / 2

      // Ejecutar efectos mágicos (varita + espiral)
      crearEfectoVaritaMagica()
      crearEfectoEspiral(centroX, centroY)

      // Esperar a que termine el efecto y mostrar la invitación detallada
      setTimeout(() => {
        if (paginaDos) {
          paginaDos.style.display = 'none'
        }

        if (invitacionDetallada) {
          invitacionDetallada.style.display = 'block'
          invitacionDetallada.style.animation =
            'abrirCarta 1s ease-out forwards'
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 1500) // Espera 1.5 segundos para el efecto
    })
  }
  // ============================================
  // 10. SOBRE INTERACTIVO (Página 1 → Página 2)
  // ============================================
  const sobreInicial = document.getElementById('sobreInicial')
  const envelope = document.getElementById('envelope')
  let sobreYaAbierto = false

  function accionAbrirSobre() {
    if (sobreYaAbierto) return
    sobreYaAbierto = true
    console.log('🎯 ¡Clic detectado! Abriendo sobre...')

    if (envelope) {
      envelope.classList.add('open')
      envelope.classList.remove('close')
    }

    setTimeout(() => {
      if (sobreInicial) {
        sobreInicial.style.transition = 'opacity 0.8s ease, visibility 0.8s'
        sobreInicial.style.opacity = '0'
        sobreInicial.style.visibility = 'hidden'
        sobreInicial.style.pointerEvents = 'none'
        console.log('✅ Sobre ocultado')
      }

      if (portada) {
        console.log('📄 Mostrando portada...')
        portada.style.animation = 'abrirCarta 0.8s ease-out forwards'
        portada.style.display = 'flex'
        portada.style.opacity = '1'
        portada.style.visibility = 'visible'
        console.log('✅ Portada visible con animación')
      }
    }, 2500)
  }

  if (sobreInicial) {
    sobreInicial.addEventListener('click', accionAbrirSobre)
  }

  const envelopeWrapper = document.querySelector('.envelope-wrapper')
  if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', function (e) {
      e.stopPropagation()
      accionAbrirSobre()
    })
  }

  if (envelope) {
    envelope.addEventListener('click', function (e) {
      e.stopPropagation()
      accionAbrirSobre()
    })
  }

  console.log('🚀 Todo listo')
})
