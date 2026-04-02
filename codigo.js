// ============================================
// CÓDIGO PARA INVITACIÓN DIGITAL DE XV AÑOS
// ============================================

// ESPERAR A QUE LA PÁGINA CARGUE COMPLETA
document.addEventListener('DOMContentLoaded', function () {

    console.log('✨ La invitación está lista ✨');

    // ============================================
    // 1. VARIABLES PRINCIPALES (NUESTROS CONTROLES)
    // ============================================

    // Botones principales
    const botonAbrir = document.getElementById('botonAbrir');
    const botonRSVP = document.getElementById('botonRSVP');
    const botonMapa = document.getElementById('botonMapa');
    const botonMusica = document.getElementById('botonMusica');


    // Secciones de la página
    const portada = document.getElementById('portada');
    const invitacionDetallada = document.getElementById('invitacionDetallada');
    const formularioRSVP = document.getElementById('formularioRSVP');
    const contenedorMapa = document.getElementById('contenedorMapa');
    const contenedorMusica = document.getElementById('contenedorMusica');

    // Elementos del contador
    const diasElemento = document.getElementById('dias');
    const horasElemento = document.getElementById('horas');
    const minutosElemento = document.getElementById('minutos');
    const segundosElemento = document.getElementById('segundos');

    // Formulario
    const formulario = document.getElementById('formConfirmacion');
    const menosPersonas = document.getElementById('menosPersonas');
    const masPersonas = document.getElementById('masPersonas');
    const numeroPersonas = document.getElementById('numeroPersonas');

    // Botones para compartir
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    const copiarBtn = document.querySelector('.copiar-btn');

    // ============================================
    // 2. FUNCIÓN PRINCIPAL: ABRIR INVITACIÓN
    // ============================================

    botonAbrir.addEventListener('click', function () {
        console.log('🎉 ¡Abriendo la invitación!');

        // ==== EFECTO DE DESTELLO ====
        const destello = document.createElement('div');
        destello.className = 'destello';
        document.body.appendChild(destello);

        // Eliminar el destello después de la animación
        setTimeout(() => {
            destello.remove();
        }, 600);
        // ==== FIN DESTELLO ====

        // Ocultar portada
        portada.style.display = 'none';

        // Mostrar invitación detallada
        invitacionDetallada.style.display = 'block';

        // Hacer scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });

        hacerSonidoExito();
    });

    // ============================================
    // 3. FUNCIÓN: CONTADOR REGRESIVO SIMPLE
    // ============================================

    // Fecha del evento (cambia esta fecha)
    const fechaEvento = new Date('April 10, 2026 20:00:00').getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaEvento - ahora;

        if (tiempoRestante > 0) {
            const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            if (diasElemento) diasElemento.textContent = dias < 10 ? '0' + dias : dias;
            if (horasElemento) horasElemento.textContent = horas < 10 ? '0' + horas : horas;

            // Para minutos y segundos (si existen)
            const minutosElemento = document.getElementById('minutos');
            const segundosElemento = document.getElementById('segundos');
            if (minutosElemento) minutosElemento.textContent = minutos < 10 ? '0' + minutos : minutos;
            if (segundosElemento) segundosElemento.textContent = segundos < 10 ? '0' + segundos : segundos;
        } else {
            if (diasElemento) diasElemento.textContent = '00';
            if (horasElemento) horasElemento.textContent = '00';
            const minutosElemento = document.getElementById('minutos');
            const segundosElemento = document.getElementById('segundos');
            if (minutosElemento) minutosElemento.textContent = '00';
            if (segundosElemento) segundosElemento.textContent = '00';
        }
    }

    // Actualizar cada segundo
    setInterval(actualizarContador, 1000);

    // Llamar una vez al cargar
    actualizarContador();

    // ============================================
    // 4. FUNCIONES PARA LOS BOTONES DE ACCIÓN
    // ============================================

    // Botón CONFIRMAR (RSVP)
    botonRSVP.addEventListener('click', function () {
        console.log('📝 Mostrando formulario RSVP');

        // Ocultar otros paneles
        contenedorMapa.style.display = 'none';
        contenedorMusica.style.display = 'none';

        // Mostrar formulario
        formularioRSVP.style.display = 'block';

        // Efecto visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // Botón UBICACIÓN
    botonMapa.addEventListener('click', function () {
        console.log('🗺️ Mostrando mapa');

        // Ocultar otros paneles
        formularioRSVP.style.display = 'none';
        contenedorMusica.style.display = 'none';

        // Mostrar mapa
        contenedorMapa.style.display = 'block';

        // Efecto visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // Botón MÚSICA
    botonMusica.addEventListener('click', function () {
        console.log('🎵 Mostrando música');

        // Ocultar otros paneles
        formularioRSVP.style.display = 'none';
        contenedorMapa.style.display = 'none';

        // Mostrar música
        contenedorMusica.style.display = 'block';

        // Efecto visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
     // ============================================
    // 5. FORMULARIO RSVP - CON WHATSAPP
    // ============================================

    // Contador de personas
    menosPersonas.addEventListener('click', function () {
        let valor = parseInt(numeroPersonas.value);
        if (valor > 1) {
            numeroPersonas.value = valor - 1;
            hacerSonidoClick();
        }
    });

    masPersonas.addEventListener('click', function () {
        let valor = parseInt(numeroPersonas.value);
        if (valor < 10) {
            numeroPersonas.value = valor + 1;
            hacerSonidoClick();
        }
    });

    // Enviar formulario a WhatsApp
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombreInvitado').value.trim();
        const email = document.getElementById('emailInvitado').value.trim();
        const personas = numeroPersonas.value;

        // Validar nombre
        if (nombre === '') {
            alert('⚠️ Por favor, ingresa tu nombre');
            document.getElementById('nombreInvitado').focus();
            return;
        }

        if (nombre.length < 3) {
            alert('⚠️ Por favor, ingresa tu nombre completo');
            return;
        }

        // Validar email
        if (email === '') {
            alert('⚠️ Por favor, ingresa tu email');
            document.getElementById('emailInvitado').focus();
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('⚠️ Por favor, ingresa un email válido (ejemplo: nombre@correo.com)');
            return;
        }

        // ==== NÚMERO DE WHATSAPP PARA RECIBIR CONFIRMACIONES ====
        // CAMBIA ESTE NÚMERO por el tuyo (código de país + número sin +)
        // Ejemplo Venezuela: 584121234567
        // Ejemplo Colombia: 573001234567
        const numeroWhatsApp = '584141346514'; // <--- ¡CAMBIA ESTO!

        // Crear mensaje para WhatsApp
        const mensajeWhatsApp = `🎉 *NUEVA CONFIRMACIÓN XV AÑOS* 🎉%0A%0A📝 *Nombre:* ${nombre}%0A📧 *Email:* ${email}%0A👥 *Acompañantes:* ${personas}%0A✨ *¡Confirmado!* ✨`;
        
        // Abrir WhatsApp con el mensaje
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`, '_blank');

        // Mensaje de éxito para el invitado
        alert(`✅ ¡GRACIAS POR CONFIRMAR!
        
📝 Nombre: ${nombre}
📧 Email: ${email}
👥 Acompañantes: ${personas}

✨ ¡Te esperamos en la fiesta!
📱 Te enviaremos los detalles por WhatsApp`);

        // Limpiar formulario
        formulario.reset();
        numeroPersonas.value = 1;
        formularioRSVP.style.display = 'none';

        hacerSonidoExito();
    });

    // ============================================
    // 6. COMPARTIR EN REDES SOCIALES
    // ============================================

    whatsappBtn.addEventListener('click', function () {
        const mensaje = encodeURIComponent('¡Estás invitado a mis XV años! 🎉\n\nAbre la invitación aquí: ');
        const url = window.location.href;
        window.open(`https://wa.me/?text=${mensaje}${url}`, '_blank');

        hacerSonidoCompartir();
    });

    facebookBtn.addEventListener('click', function () {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');

        hacerSonidoCompartir();
    });

    copiarBtn.addEventListener('click', function () {
        const url = window.location.href;

        // Método moderno
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('🔗 ¡Enlace copiado al portapapeles!\n\nPega el link para compartir.');
                hacerSonidoCopiar();
            })
            .catch(() => {
                // Método alternativo para navegadores antiguos
                const tempInput = document.createElement('input');
                tempInput.value = url;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);

                alert('🔗 ¡Enlace copiado!');
                hacerSonidoCopiar();
            });
    });

    // ============================================
    // 7. EFECTOS DE SONIDO (OPCIONALES)
    // ============================================

    function hacerSonidoClick() {
        // Sonido simple (podrías agregar un archivo de sonido real)
        console.log('🔊 Sonido de click');
        // Para sonidos reales, necesitarías archivos .mp3
    }

    function hacerSonidoExito() {
        console.log('🎊 Sonido de éxito');
    }

    function hacerSonidoCompartir() {
        console.log('📤 Sonido de compartir');
    }

    function hacerSonidoCopiar() {
        console.log('📋 Sonido de copiar');
    }

    // ============================================
    // 8. EFECTOS VISUALES ADICIONALES
    // ============================================

    // Efecto al pasar mouse sobre botones
    const todosBotones = document.querySelectorAll('button');
    todosBotones.forEach(boton => {
        boton.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        boton.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // ============================================
    // 9. MENSAJE DE BIENVENIDA EN CONSOLA
    // ============================================

    console.log(`
    ╔══════════════════════════════════╗
    ║   INVITACIÓN XV AÑOS CARGADA     ║
    ║        ¡BIENVENIDO/A!            ║
    ╚══════════════════════════════════╝
    `);

    // ============================================
    // 10. INICIALIZACIÓN COMPLETA
    // ============================================

    console.log('🚀 Todo listo. La invitación está funcionando.');
    // ============================================
    // MÚSICA DE FONDO
    // ============================================
    let musicaActiva = false;
    let musicaActual = null;
    let yaReprodujo = false;

    // Crear botón flotante para la música
    const botonMusicaFlotante = document.createElement('div');
    botonMusicaFlotante.id = 'musicaFlotante';
    botonMusicaFlotante.innerHTML = '🎵';
    botonMusicaFlotante.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #D4AF37;
        color: #0A2463;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9999;
        font-size: 24px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s;
    `;
    document.body.appendChild(botonMusicaFlotante);

    // Cargar música local
    musicaActual = new Audio('musica/no-crezcas-mas.mp3');
    musicaActual.loop = true;
    musicaActual.volume = 0.6;

    function iniciarMusica() {
        if (!yaReprodujo && musicaActual) {
            musicaActual.play().then(() => {
                musicaActiva = true;
                yaReprodujo = true;
                botonMusicaFlotante.innerHTML = '🔊';
            }).catch((e) => {
                console.log('Error:', e);
            });
        }
    }

    document.body.addEventListener('click', function activarMusica() {
        iniciarMusica();
        document.body.removeEventListener('click', activarMusica);
    });

    botonMusicaFlotante.addEventListener('click', function (e) {
        e.stopPropagation();
        if (musicaActiva) {
            musicaActual.pause();
            this.innerHTML = '🎵';
            musicaActiva = false;
        } else {
            musicaActual.play().catch(() => { });
            this.innerHTML = '🔊';
            musicaActiva = true;
            yaReprodujo = true;
        }
    });
    // ============================================
    // CARRUSEL DE FOTOS - VERSIÓN CORREGIDA
    // ============================================

    const carruselFotos = document.getElementById('carruselFotos');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const pagina3 = document.getElementById('pagina3');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const indicador = document.getElementById('indicador');

    let paginaActualCarrusel = 1;
    const totalPaginasCarrusel = 3;

    function mostrarPaginaCarrusel(numero) {
        // Ocultar todas las páginas
        const paginas = [pagina1, pagina2, pagina3];
        paginas.forEach(pagina => {
            if (pagina) {
                pagina.style.display = 'none';
            }
        });

        // Mostrar la seleccionada
        const paginaSeleccionada = document.getElementById(`pagina${numero}`);
        if (paginaSeleccionada) {
            paginaSeleccionada.style.display = 'block';
        }

        paginaActualCarrusel = numero;
        if (indicador) indicador.textContent = `${paginaActualCarrusel} / ${totalPaginasCarrusel}`;
    }

    // Guardar la función original del botón y reemplazarla
    // Eliminar el event listener anterior si existe
    const nuevoBotonAbrir = botonAbrir;

    // Crear nueva función para abrir con carrusel
    function abrirConCarrusel() {
        console.log('🎉 ¡Abriendo con carrusel de fotos!');

        // Destello
        const destello = document.createElement('div');
        destello.className = 'destello';
        document.body.appendChild(destello);
        setTimeout(() => destello.remove(), 600);

        // Ocultar portada
        if (portada) portada.style.display = 'none';

        // Mostrar carrusel
        if (carruselFotos) {
            carruselFotos.style.display = 'flex';
            mostrarPaginaCarrusel(1);
        }
    }

    // Reemplazar el evento del botón
    botonAbrir.removeEventListener('click', botonAbrir.clickHandler);
    botonAbrir.addEventListener('click', abrirConCarrusel);

    // Botón siguiente
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', function () {
            if (paginaActualCarrusel < totalPaginasCarrusel) {
                mostrarPaginaCarrusel(paginaActualCarrusel + 1);
            } else {
                // Última foto, mostrar invitación detallada
                if (carruselFotos) carruselFotos.style.display = 'none';
                if (invitacionDetallada) invitacionDetallada.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Botón anterior
    if (btnAnterior) {
        btnAnterior.addEventListener('click', function () {
            if (paginaActualCarrusel > 1) {
                mostrarPaginaCarrusel(paginaActualCarrusel - 1);
            }
        });
    }

}); // <--- CIERRE DEL DOMContentLoaded
