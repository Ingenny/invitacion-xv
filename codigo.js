// ============================================
// CÓDIGO PARA INVITACIÓN DIGITAL DE XV AÑOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    console.log('✨ La invitación está lista ✨');

    // ============================================
    // 1. VARIABLES
    // ============================================

    const botonAbrir = document.getElementById('botonAbrir');
    const botonRSVP = document.getElementById('botonRSVP');
    const botonMapa = document.getElementById('botonMapa');
    const botonMusica = document.getElementById('botonMusica');
    const portada = document.getElementById('portada');
    const invitacionDetallada = document.getElementById('invitacionDetallada');
    const formularioRSVP = document.getElementById('formularioRSVP');
    const contenedorMapa = document.getElementById('contenedorMapa');
    const contenedorMusica = document.getElementById('contenedorMusica');
    const formulario = document.getElementById('formConfirmacion');
    const menosPersonas = document.getElementById('menosPersonas');
    const masPersonas = document.getElementById('masPersonas');
    const numeroPersonas = document.getElementById('numeroPersonas');
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    const copiarBtn = document.querySelector('.copiar-btn');

    // Carrusel
    const carruselFotos = document.getElementById('carruselFotos');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const indicador = document.getElementById('indicador');

    // ============================================
    // 2. CONTADOR
    // ============================================

    const fechaEvento = new Date(2026, 5, 27, 20, 0, 0).getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaEvento - ahora;
        if (tiempoRestante > 0) {
            const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
            document.getElementById('dias').textContent = dias < 10 ? '0' + dias : dias;
            document.getElementById('horas').textContent = horas < 10 ? '0' + horas : horas;
            document.getElementById('minutos').textContent = minutos < 10 ? '0' + minutos : minutos;
            document.getElementById('segundos').textContent = segundos < 10 ? '0' + segundos : segundos;
        }
    }
    setInterval(actualizarContador, 1000);
    actualizarContador();

    // ============================================
    // 3. CARRUSEL DE FOTOS
    // ============================================

    let paginaActualCarrusel = 1;
    const totalPaginasCarrusel = 3;

    function mostrarPaginaCarrusel(numero) {
        const paginas = [pagina1, pagina2, pagina3];
        paginas.forEach(pagina => {
            if (pagina) pagina.style.display = 'none';
        });
        const paginaSeleccionada = document.getElementById('pagina' + numero);
        if (paginaSeleccionada) paginaSeleccionada.style.display = 'block';
        paginaActualCarrusel = numero;
        if (indicador) indicador.textContent = paginaActualCarrusel + ' / ' + totalPaginasCarrusel;
    }

    // ============================================
    // 4. EFECTO ESPIRAL DE DIAMANTES
    // ============================================

    function crearEfectoEspiral(x, y) {
        const onda = document.createElement('div');
        onda.style.position = 'fixed';
        onda.style.left = x + 'px';
        onda.style.top = y + 'px';
        onda.style.width = '0';
        onda.style.height = '0';
        onda.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0))';
        onda.style.borderRadius = '50%';
        onda.style.transform = 'translate(-50%, -50%)';
        onda.style.pointerEvents = 'none';
        onda.style.zIndex = '9997';
        onda.style.animation = 'onda 0.8s ease-out forwards';
        document.body.appendChild(onda);

        const diamantes = ['💎', '✨', '⭐', '💠', '💫', '♦️'];
        for (let i = 0; i < 16; i++) {
            setTimeout(function() {
                const diamante = document.createElement('div');
                diamante.style.position = 'fixed';
                diamante.style.pointerEvents = 'none';
                diamante.style.zIndex = '9999';
                diamante.style.animation = 'brilloEspiral 0.8s ease-out forwards';
                diamante.style.filter = 'drop-shadow(0 0 5px gold)';
                diamante.innerHTML = diamantes[Math.floor(Math.random() * diamantes.length)];
                const angulo = (i / 16) * Math.PI * 2;
                diamante.style.left = (x + Math.cos(angulo) * 70) + 'px';
                diamante.style.top = (y + Math.sin(angulo) * 70) + 'px';
                diamante.style.fontSize = (25 + Math.random() * 15) + 'px';
                document.body.appendChild(diamante);
                setTimeout(function() { diamante.remove(); }, 800);
            }, i * 30);
        }
        setTimeout(function() { onda.remove(); }, 800);
    }

    // ============================================
    // 5. BOTÓN ABRIR INVITACIÓN (CON EFECTO ESPIRAL + CARRUSEL)
    // ============================================

    if (botonAbrir) {
        botonAbrir.addEventListener('click', function(event) {
            console.log('🎉 Abriendo con espiral de diamantes y carrusel');
            
            crearEfectoEspiral(event.clientX, event.clientY);
            
            const destello = document.createElement('div');
            destello.className = 'destello';
            document.body.appendChild(destello);
            setTimeout(function() { destello.remove(); }, 600);
            
            setTimeout(function() {
                if (portada) portada.style.display = 'none';
                if (carruselFotos) {
                    carruselFotos.style.display = 'flex';
                    mostrarPaginaCarrusel(1);
                } else if (invitacionDetallada) {
                    invitacionDetallada.style.display = 'block';
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 400);
        });
    }

    // ============================================
    // 6. BOTONES RSVP, MAPA, MÚSICA
    // ============================================

    if (botonRSVP) {
        botonRSVP.addEventListener('click', function() {
            if (contenedorMapa) contenedorMapa.style.display = 'none';
            if (contenedorMusica) contenedorMusica.style.display = 'none';
            if (formularioRSVP) formularioRSVP.style.display = 'block';
        });
    }

    if (botonMapa) {
        botonMapa.addEventListener('click', function() {
            if (formularioRSVP) formularioRSVP.style.display = 'none';
            if (contenedorMusica) contenedorMusica.style.display = 'none';
            if (contenedorMapa) contenedorMapa.style.display = 'block';
        });
    }

    if (botonMusica) {
        botonMusica.addEventListener('click', function() {
            if (formularioRSVP) formularioRSVP.style.display = 'none';
            if (contenedorMapa) contenedorMapa.style.display = 'none';
            if (contenedorMusica) contenedorMusica.style.display = 'block';
        });
    }

    // ============================================
    // 7. BOTONES CARRUSEL CON EFECTO ESPIRAL
    // ============================================

    // Función para crear efecto espiral (con posición desde el centro del botón)
    function crearEfectoEspiralDesdeBoton(boton, x, y) {
        const onda = document.createElement('div');
        onda.style.position = 'fixed';
        onda.style.left = x + 'px';
        onda.style.top = y + 'px';
        onda.style.width = '0';
        onda.style.height = '0';
        onda.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0))';
        onda.style.borderRadius = '50%';
        onda.style.transform = 'translate(-50%, -50%)';
        onda.style.pointerEvents = 'none';
        onda.style.zIndex = '9997';
        onda.style.animation = 'onda 0.6s ease-out forwards';
        document.body.appendChild(onda);
        
        const diamantes = ['💎', '✨', '⭐', '💠', '💫', '♦️'];
        for (let i = 0; i < 12; i++) {
            setTimeout(function() {
                const diamante = document.createElement('div');
                diamante.style.position = 'fixed';
                diamante.style.pointerEvents = 'none';
                diamante.style.zIndex = '9999';
                diamante.style.animation = 'brilloEspiral 0.6s ease-out forwards';
                diamante.style.filter = 'drop-shadow(0 0 5px gold)';
                diamante.innerHTML = diamantes[Math.floor(Math.random() * diamantes.length)];
                const angulo = (i / 12) * Math.PI * 2;
                const radio = 50;
                diamante.style.left = (x + Math.cos(angulo) * radio) + 'px';
                diamante.style.top = (y + Math.sin(angulo) * radio) + 'px';
                diamante.style.fontSize = (20 + Math.random() * 15) + 'px';
                document.body.appendChild(diamante);
                setTimeout(function() { diamante.remove(); }, 600);
            }, i * 20);
        }
        setTimeout(function() { onda.remove(); }, 600);
    }

    // Botón SIGUIENTE con efecto
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', function(event) {
            // Obtener posición del clic
            const x = event.clientX;
            const y = event.clientY;
            
            // Crear efecto espiral
            crearEfectoEspiralDesdeBoton(this, x, y);
            
            // Efecto de brillo en el botón
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 20px gold';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 200);
            
            // Cambiar página
            if (paginaActualCarrusel < totalPaginasCarrusel) {
                mostrarPaginaCarrusel(paginaActualCarrusel + 1);
            } else {
                if (carruselFotos) carruselFotos.style.display = 'none';
                if (invitacionDetallada) invitacionDetallada.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Botón ANTERIOR con efecto
    if (btnAnterior) {
        btnAnterior.addEventListener('click', function(event) {
            // Obtener posición del clic
            const x = event.clientX;
            const y = event.clientY;
            
            // Crear efecto espiral
            crearEfectoEspiralDesdeBoton(this, x, y);
            
            // Efecto de brillo en el botón
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 20px gold';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 200);
            
            // Cambiar página
            if (paginaActualCarrusel > 1) {
                mostrarPaginaCarrusel(paginaActualCarrusel - 1);
            }
        });
    }
    // ============================================
    // 8. FORMULARIO WHATSAPP
    // ============================================

    if (menosPersonas) {
        menosPersonas.addEventListener('click', function() {
            let valor = parseInt(numeroPersonas.value);
            if (valor > 1) numeroPersonas.value = valor - 1;
        });
    }

    if (masPersonas) {
        masPersonas.addEventListener('click', function() {
            let valor = parseInt(numeroPersonas.value);
            if (valor < 10) numeroPersonas.value = valor + 1;
        });
    }

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const nombre = document.getElementById('nombreInvitado').value.trim();
            const email = document.getElementById('emailInvitado').value.trim();
            const personas = numeroPersonas.value;
            if (nombre === '') {
                alert('⚠️ Ingresa tu nombre');
                return;
            }
            if (email === '' || email.indexOf('@') === -1) {
                alert('⚠️ Email válido');
                return;
            }
            const numeroWhatsApp = '584141346514';
            const mensaje = '🎉 *NUEVA CONFIRMACIÓN* 🎉%0A📝 ' + nombre + '%0A📧 ' + email + '%0A👥 ' + personas + '%0A✨ Confirmado!';
            window.open('https://wa.me/' + numeroWhatsApp + '?text=' + mensaje, '_blank');
            alert('✅ ¡Gracias ' + nombre + '! Te esperamos.');
            formulario.reset();
            numeroPersonas.value = 1;
            if (formularioRSVP) formularioRSVP.style.display = 'none';
        });
    }

    // ============================================
    // 9. COMPARTIR REDES
    // ============================================

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            window.open('https://wa.me/?text=' + encodeURIComponent('¡Invitación a mis XV años! 🎉 ') + window.location.href, '_blank');
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
        });
    }

    if (copiarBtn) {
        copiarBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(function() {
                alert('🔗 Enlace copiado');
            });
        });
    }

    // ============================================
    // 10. MÚSICA
    // ============================================

    let musicaActiva = false;
    let musicaActual = null;
    let yaReprodujo = false;

    const botonMusicaFlotante = document.createElement('div');
    botonMusicaFlotante.id = 'musicaFlotante';
    botonMusicaFlotante.innerHTML = '🎵';
    botonMusicaFlotante.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; border-radius: 50%; background: #D4AF37; color: #0A2463; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; font-size: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s;';
    document.body.appendChild(botonMusicaFlotante);

    musicaActual = new Audio('musica/no-crezcas-mas.mp3');
    musicaActual.loop = true;
    musicaActual.volume = 0.6;

    function iniciarMusica() {
        if (!yaReprodujo && musicaActual) {
            musicaActual.play().then(function() {
                musicaActiva = true;
                yaReprodujo = true;
                botonMusicaFlotante.innerHTML = '🔊';
            }).catch(function(e) {
                console.log('Error:', e);
            });
        }
    }

    document.body.addEventListener('click', function activarMusica() {
        iniciarMusica();
        document.body.removeEventListener('click', activarMusica);
    });

    botonMusicaFlotante.addEventListener('click', function(e) {
        e.stopPropagation();
        if (musicaActiva) {
            musicaActual.pause();
            this.innerHTML = '🎵';
            musicaActiva = false;
        } else {
            musicaActual.play().catch(function() {});
            this.innerHTML = '🔊';
            musicaActiva = true;
            yaReprodujo = true;
        }
    });

    console.log('🚀 Todo listo');

});
