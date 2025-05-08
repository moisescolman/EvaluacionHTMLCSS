document.addEventListener("DOMContentLoaded", () => {
  
  
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
  ];
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];

  const fechaHoy = new Date();
 
  const nombreDia = diasSemana[fechaHoy.getDay()];
  
  const numeroDia = fechaHoy.getDate();
  const nombreMes = meses[fechaHoy.getMonth()];
  const year = fechaHoy.getFullYear();

  const textoFecha = `${nombreDia}, ${numeroDia} de ${nombreMes} de ${year}`;

  const elementoFecha = document.getElementById("fecha-actual");
  
  if (elementoFecha) {
    
    
    elementoFecha.textContent = textoFecha;
  }
});
