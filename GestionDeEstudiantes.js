

let escuela = {
    estudiantes: []
  };
  
  function agregarEstudiante(nombre, calificaciones) {
    
    let estudiante = {
      nombre: nombre,
      calificaciones: calificaciones
    };
    
    escuela.estudiantes.push(estudiante);
  }
  
  function listarEstudiantes() {
   
    escuela.estudiantes.forEach(estudiante => {
      console.log(`Estudiante: ${estudiante.nombre}, Calificaciones: ${estudiante.calificaciones.join(', ')}`);
    });
  }
  
  function promedioEstudiante(nombre) {
    
    let estudiante = escuela.estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
      let sumaCalificaciones = estudiante.calificaciones.reduce((acc, curr) => acc + curr, 0);
      let promedio = sumaCalificaciones / estudiante.calificaciones.length;
      return promedio;
    } 
  }
  agregarEstudiante('gabriela',[5.0,5.0,5.0])
  agregarEstudiante('juan', [5.0, 4.7, 4.8]);
  listarEstudiantes();
  console.log(`Promedio de Juan: ${promedioEstudiante('juan')}`);
  console.log(`promedio de gabriela: ${promedioEstudiante('gabriela')}`)