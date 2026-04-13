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
    const paginaDos = document.getElementById('paginaDos');
    const invitacionDetallada = document.getElementById('invitacionDetallada');
    const formularioRSVP = document.getElementById('formularioRSVP');
    const contenedorMapa = document.getElementById('contenedorMapa');
    const contenedorMusica = document.getElementById('contenedorMusica');
    const formulario = document.getElementById('formConfirmacion');
    const menosPersonas = document.getElementById('menosPersonas');
    const masPersonas = document.getElementById('masPersonas');
    const numeroPersonas = document.getElementById('numeroPersonas');
    const btnSiguientePagina = document.getElementById('btnSiguientePagina');

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
    // 3. EFECTO ESPIRAL
    // ============================================

    function crearEfectoEspiral(x, y) {
        const esMovil = window.innerWidth <= 768;
        const radioGrande = esMovil ? 70 : 110;
        const radioMediano = esMovil ? 50 : 75;
        const radioPequeno = esMovil ? 30 : 45;
        
        const onda = document.createElement('div');
        onda.style.position = 'fixed';
        onda.style.left = x + 'px';
        onda.style.top = y + 'px';
        onda.style.width = '0';
        onda.style.height = '0';
        onda.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0))';
        onda.style.borderRadius = '50%';
        onda.style.transform = 'translate(-50%, -50%)';
        onda.style.pointerEvents = 'none';
        onda.style.zIndex = '9997';
        onda.style.animation = 'onda 0.8s ease-out forwards';
        document.body.appendChild(onda);

        const formas = ['✦', '✧', '✵', '✶', '·', '•'];
        const colores = ['#ffd700', '#fff8dc', '#f5e6b8', '#ffe4b5', '#daa520'];
        
        const numGrande = esMovil ? 12 : 18;
        for (let i = 0; i < numGrande; i++) {
            setTimeout(function() {
                const particula = document.createElement('div');
                particula.style.position = 'fixed';
                particula.style.pointerEvents = 'none';
                particula.style.zIndex = '9999';
                particula.style.animation = 'brilloEspiral 0.8s ease-out forwards';
                particula.innerHTML = formas[Math.floor(Math.random() * formas.length)];
                particula.style.color = colores[Math.floor(Math.random() * colores.length)];
                
                const angulo = (i / numGrande) * Math.PI * 2;
                particula.style.left = (x + Math.cos(angulo) * radioGrande) + 'px';
                particula.style.top = (y + Math.sin(angulo) * radioGrande) + 'px';
                particula.style.fontSize = (esMovil ? 12 : 16) + Math.random() * 8 + 'px';
                particula.style.textShadow = '0 0 5px gold';
                
                document.body.appendChild(particula);
                setTimeout(function() { particula.remove(); }, 800);
            }, i * 25);
        }
        
        const numMediano = esMovil ? 10 : 16;
        for (let i = 0; i < numMediano; i++) {
            setTimeout(function() {
                const particula = document.createElement('div');
                particula.style.position = 'fixed';
                particula.style.pointerEvents = 'none';
                particula.style.zIndex = '9999';
                particula.style.animation = 'brilloEspiral 0.7s ease-out forwards';
                particula.innerHTML = formas[Math.floor(Math.random() * formas.length)];
                particula.style.color = colores[Math.floor(Math.random() * colores.length)];
                
                const angulo = (i / numMediano) * Math.PI * 2;
                particula.style.left = (x + Math.cos(angulo) * radioMediano) + 'px';
                particula.style.top = (y + Math.sin(angulo) * radioMediano) + 'px';
                particula.style.fontSize = (esMovil ? 10 : 14) + Math.random() * 6 + 'px';
                particula.style.textShadow = '0 0 4px gold';
                
                document.body.appendChild(particula);
                setTimeout(function() { particula.remove(); }, 700);
            }, i * 20);
        }
        
        const numPequeno = esMovil ? 8 : 14;
        for (let i = 0; i < numPequeno; i++) {
            setTimeout(function() {
                const particula = document.createElement('div');
                particula.style.position = 'fixed';
                particula.style.pointerEvents = 'none';
                particula.style.zIndex = '9999';
                particula.style.animation = 'brilloEspiral 0.6s ease-out forwards';
                particula.innerHTML = formas[Math.floor(Math.random() * formas.length)];
                particula.style.color = colores[Math.floor(Math.random() * colores.length)];
                
                const angulo = (i / numPequeno) * Math.PI * 2;
                particula.style.left = (x + Math.cos(angulo) * radioPequeno) + 'px';
                particula.style.top = (y + Math.sin(angulo) * radioPequeno) + 'px';
                particula.style.fontSize = (esMovil ? 8 : 12) + Math.random() * 6 + 'px';
                particula.style.textShadow = '0 0 3px gold';
                
                document.body.appendChild(particula);
                setTimeout(function() { particula.remove(); }, 600);
            }, i * 15);
        }
        
        const numEscarcha = esMovil ? 30 : 50;
        for (let i = 0; i < numEscarcha; i++) {
            setTimeout(function() {
                const particula = document.createElement('div');
                particula.style.position = 'fixed';
                particula.style.pointerEvents = 'none';
                particula.style.zIndex = '9998';
                particula.style.animation = 'brilloEspiral 0.4s ease-out forwards';
                particula.innerHTML = '·';
                particula.style.color = '#ffd700';
                particula.style.opacity = '0.5';
                
                const angulo = Math.random() * Math.PI * 2;
                const radio = (esMovil ? 25 : 40) + Math.random() * 60;
                particula.style.left = (x + Math.cos(angulo) * radio) + 'px';
                particula.style.top = (y + Math.sin(angulo) * radio) + 'px';
                particula.style.fontSize = (esMovil ? 4 : 6) + Math.random() * 4 + 'px';
                
                document.body.appendChild(particula);
                setTimeout(function() { particula.remove(); }, 400);
            }, i * 10);
        }
        
        setTimeout(function() { onda.remove(); }, 800);
    }

    // ============================================
    // BOTONES: CONFIRMAR, UBICACIÓN, APORTE
    // ============================================

    if (botonRSVP) {
        botonRSVP.addEventListener('click', function() {
            document.getElementById('contenedorMapa').style.display = 'none';
            document.getElementById('contenedorMusica').style.display = 'none';
            document.getElementById('formularioRSVP').style.display = 'block';
        });
    }

    if (botonMapa) {
        botonMapa.addEventListener('click', function() {
            document.getElementById('formularioRSVP').style.display = 'none';
            document.getElementById('contenedorMusica').style.display = 'none';
            document.getElementById('contenedorMapa').style.display = 'block';
        });
    }

    if (botonMusica) {
        botonMusica.addEventListener('click', function() {
            document.getElementById('formularioRSVP').style.display = 'none';
            document.getElementById('contenedorMapa').style.display = 'none';
            document.getElementById('contenedorMusica').style.display = 'block';
        });
    }

    // ============================================
    // FORMULARIO WHATSAPP
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
    // MÚSICA
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

    // ============================================
    // VARITA MÁGICA
    // ============================================

    function crearEfectoVaritaMagica() {
        const fondo = document.createElement('div');
        fondo.className = 'fondo-magico';
        document.body.appendChild(fondo);
        
        const onda = document.createElement('div');
        onda.className = 'onda-varita';
        document.body.appendChild(onda);
        
        const varita = document.createElement('div');
        varita.className = 'varita-movimiento';
        varita.innerHTML = '🪄';
        document.body.appendChild(varita);
        
        const glitterItems = ['✦', '✧', '·', '•', '✵', '✶'];
        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                const particula = document.createElement('div');
                particula.className = 'destello-varita';
                particula.innerHTML = glitterItems[Math.floor(Math.random() * glitterItems.length)];
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                particula.style.left = x + 'px';
                particula.style.top = y + 'px';
                particula.style.fontSize = (12 + Math.random() * 18) + 'px';
                particula.style.color = '#ffd700';
                particula.style.textShadow = '0 0 5px gold, 0 0 10px #ffaa00';
                particula.style.filter = 'drop-shadow(0 0 3px gold)';
                document.body.appendChild(particula);
                setTimeout(() => particula.remove(), 800);
            }, i * 40);
        }
        
        for (let i = 0; i < 80; i++) {
            setTimeout(() => {
                const particula = document.createElement('div');
                particula.className = 'destello-varita';
                particula.innerHTML = '·';
                particula.style.left = Math.random() * window.innerWidth + 'px';
                particula.style.top = Math.random() * window.innerHeight + 'px';
                particula.style.fontSize = (6 + Math.random() * 8) + 'px';
                particula.style.color = '#ffd700';
                particula.style.opacity = '0.7';
                document.body.appendChild(particula);
                setTimeout(() => particula.remove(), 600);
            }, i * 25);
        }
        
        setTimeout(() => {
            fondo.remove();
            onda.remove();
            varita.remove();
        }, 2800);
    }

    // ============================================
    // BOTÓN ABRIR INVITACIÓN
    // ============================================

    if (botonAbrir) {
        botonAbrir.addEventListener('click', function(event) {
            console.log('🎉 Abriendo invitación');
            
            const destello = document.createElement('div');
            destello.className = 'destello';
            document.body.appendChild(destello);
            setTimeout(() => destello.remove(), 600);
            
            if (portada) portada.style.display = 'none';
            if (paginaDos) {
                paginaDos.style.display = 'flex';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            setTimeout(() => {
                crearEfectoVaritaMagica();
            }, 300);
        });
    }

    // ============================================
    // BOTÓN SIGUIENTE (página 2 -> página 3)
    // ============================================

    if (btnSiguientePagina) {
        btnSiguientePagina.addEventListener('click', function() {
            console.log('➡️ Siguiente página');
            
            if (paginaDos) paginaDos.style.display = 'none';
            if (invitacionDetallada) invitacionDetallada.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    console.log('🚀 Todo listo');

});
