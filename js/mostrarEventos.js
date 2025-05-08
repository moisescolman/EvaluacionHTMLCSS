// array de objetos con info de los eventos
const eventos = [
    {
      id: 1,
      titulo: 'Technarte Bilbao 2025',
      fecha: '16/05/2025',
      lugar: 'Palacio Euskalduna',
      descripcion: 'Artists, designers and researchers from all around the world meet to share their vision of the fusion between art and technology.',
      imagen: '../img/events-img/1.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=1'
    },
    {
      id: 2,
      titulo: 'OROZKOROCK 2025',
      fecha: '24/05/2025',
      lugar: 'Orozco',
      descripcion: 'El quinto año de Orozkorock será la mayor fiesta rockera de todos estos años concentrado en un solo día, el sábado 24 de mayo.',
      imagen: '../img/events-img/2.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=2'
    },
    {
      id: 3,
      titulo: 'Retiro de yoga',
      fecha: '24/05/2025',
      lugar: 'Gautegiz Arteaga',
      descripcion: 'Ven a disfrutar de un día de retiro de yoga y terapia energética con ShivaVibes para mimarte y recargar energías.',
      imagen: '../img/events-img/3.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=3'
    },
    {
      id: 4,
      titulo: 'SET CONGRESS',
      fecha: '09/05/2025',
      lugar: 'Bilbao Exhibition Centre',
      descripcion: 'Ven a vivir la primera edición de un congreso único en Europa, que se celebrará en Bilbao el 9 de mayo de 2025.',
      imagen: '../img/events-img/4.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=4'
    },
    {
      id: 5,
      titulo: 'ZK Market',
      fecha: '18/05/2025',
      lugar: 'La Terminal FICC',
      descripcion: 'ZK Market La Terminal, el mercado de las pulgas de Bilbao. Ven y participa!',
      imagen: '../img/events-img/5.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=5'
    },
    {
      id: 6,
      titulo: 'Club Flamenco',
      fecha: '24/05/2025',
      lugar: 'La Terminal FICC',
      descripcion: 'La bailaora granaína Eva Manzano visita de nuevo el Club Flamenco #hACERIA donde disfrutaremos de su maestría sobre nuestro Tablao.',
      imagen: '../img/events-img/6.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=6'
    },
    {
      id: 7,
      titulo: 'Mysterious Bilbao Outdoor Escape Game',
      fecha: '08/05/2025',
      lugar: 'Teatro Arriaga',
      descripcion: 'Follow clues, solve puzzles, discover new places and learn incredible stories of the city past and present during this city adventure.',
      imagen: '../img/events-img/7.avif',
      enlaceDetalle: '../pages/detalle-evento.html?id=7'
    }
  ];
  
//   para el index
  document.addEventListener('DOMContentLoaded', () => {
    const contRecomendados = document.getElementById('contenedor-recomendados');
    if (contRecomendados) {
      // limitar la cantidad de eventos que se muestra en el index
      const limite = 3;
      for (let i = 0; i < limite; i++) {
        const evento = eventos[i];
        contRecomendados.innerHTML += `
          <article class="tarjeta-evento">
            <img src="${evento.imagen}" alt="${evento.titulo}"/>
            <div class="contenido-evento">
              <h3>${evento.titulo}</h3>
              <p class="datos">${evento.fecha} • ${evento.lugar}</p>
              <p>${evento.descripcion}</p>
              <a href="${evento.enlaceDetalle}" class="boton-detalles">Ver detalles</a>
            </div>
          </article>
        `;
      }
    }
  
   
    // para todos los eventos
    const contenedorEventos = document.getElementById('contenedor-eventos');
    if (contenedorEventos) {
      eventos.forEach(evento => {
        contenedorEventos.innerHTML += `
          <article class="tarjeta-evento">
            <img src="${evento.imagen}" alt="${evento.titulo}"/>
            <div class="contenido-evento">
              <h3>${evento.titulo}</h3>
              <p class="datos">${evento.fecha} • ${evento.lugar}</p>
              <p>${evento.descripcion}</p>
              <a href="${evento.enlaceDetalle}" class="boton-detalles">Ver detalles</a>
            </div>
          </article>
        `;
      })
    }
  });
  