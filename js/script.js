// Hoja de Trabajo 3 - Interactividad con JavaScript

/* 1. Galería de imágenes: modal al hacer clic */
const modal = document.getElementById('modal-imagen');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const cerrarModal = document.getElementById('cerrar-modal');

document.querySelectorAll('.img-galeria').forEach((img) => {
    img.addEventListener('click', () => {
        const titulo = img.closest('figure').querySelector('figcaption').textContent;
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitulo.textContent = titulo;
        modal.classList.remove('oculto');
    });
});

cerrarModal.addEventListener('click', () => {
    modal.classList.add('oculto');
});

modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.classList.add('oculto');
    }
});

/* 2. Calculadora de cotización */
const btnCalcular = document.getElementById('btn-calcular');

btnCalcular.addEventListener('click', () => {
    const asistentes = Number(document.getElementById('asistentes').value);
    const precioPaquete = Number(document.getElementById('paquete').value);
    const checkboxesExtra = document.querySelectorAll('input[name="extra"]:checked');

    let precioExtras = 0;
    checkboxesExtra.forEach((casilla) => {
        precioExtras += Number(casilla.value);
    });

    const resultado = document.getElementById('resultado-cotizacion');

    if (!asistentes || asistentes < 1) {
        resultado.textContent = 'Ingresa un número válido de asistentes.';
        return;
    }

    const total = asistentes * (precioPaquete + precioExtras);
    resultado.textContent = `Total estimado para ${asistentes} persona(s): Q${total.toFixed(2)}`;
});

/* 3. Filtro de actividades en tiempo real */
const buscador = document.getElementById('buscar-actividad');
const actividades = document.querySelectorAll('#lista-actividades li');
const sinResultados = document.getElementById('sin-resultados');

buscador.addEventListener('input', () => {
    const termino = buscador.value.trim().toLowerCase();
    let visibles = 0;

    actividades.forEach((actividad) => {
        const coincide = actividad.textContent.toLowerCase().includes(termino);
        actividad.classList.toggle('oculto', !coincide);
        if (coincide) visibles++;
    });

    sinResultados.classList.toggle('oculto', visibles > 0);
});

/* 4. Formulario de contacto: validación y mensaje de confirmación */
const formContacto = document.getElementById('form-contacto');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const personas = document.getElementById('personas');

    const campos = [nombre, correo, personas];
    let formularioValido = true;

    campos.forEach((campo) => {
        if (campo.value.trim() === '') {
            campo.classList.add('campo-invalido');
            formularioValido = false;
        } else {
            campo.classList.remove('campo-invalido');
        }
    });

    if (!formularioValido) {
        mensajeConfirmacion.textContent = 'Por favor completa todos los campos antes de enviar.';
        return;
    }

    mensajeConfirmacion.textContent = `¡Gracias ${nombre.value}, tu solicitud para ${personas.value} persona(s) ha sido registrada!`;
    formContacto.reset();
});

/* 5. Testimonios aleatorios */
const nombresTestimonios = ['Ana Gómez', 'Carlos López', 'María Ixchel', 'Jorge Ramírez', 'Lucía Morales'];
const comentariosTestimonios = [
    'Una experiencia inolvidable, los templos de Tikal al amanecer son espectaculares.',
    'El paseo en lancha por el lago fue mi parte favorita, muy bien organizado todo.',
    'Excelente guía y buena comida, superó mis expectativas.',
    'Flores es un pueblo hermoso, ideal para descansar después de la caminata en Tikal.',
    'Recomiendo el recorrido nocturno, se ven animales que de día no aparecen.'
];

const listaTestimonios = document.getElementById('lista-testimonios');
const btnOtrasOpiniones = document.getElementById('btn-otras-opiniones');

function mostrarTestimoniosAleatorios() {
    const indices = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5).slice(0, 3);

    listaTestimonios.innerHTML = '';
    indices.forEach((i) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('testimonio');
        tarjeta.innerHTML = `<p>"${comentariosTestimonios[i]}"</p><p class="autor">— ${nombresTestimonios[i]}</p>`;
        listaTestimonios.appendChild(tarjeta);
    });
}

btnOtrasOpiniones.addEventListener('click', mostrarTestimoniosAleatorios);
mostrarTestimoniosAleatorios();
