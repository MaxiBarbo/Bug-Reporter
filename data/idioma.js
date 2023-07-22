// Variables globales para almacenar los valores iniciales y alternativos de las etiquetas
let etiquetas = [
    { id: 'textReport', inicial: 'Reporte de Bugs', alternativo: 'Bugs Report'},
    { id: 'titulo', inicial: 'Título', alternativo: 'Title'},
    { id: 'labelDefecto', inicial: 'Tipo de Defecto', alternativo: 'Defect Type'},
    { id: 'fecha', inicial: 'Fecha', alternativo: 'Date'},
    { id: 'frecuencia', inicial: 'Frecuencia', alternativo: 'Frequency'},
    { id: 'labelPrioridad', inicial: 'Prioridad', alternativo: 'Priority'},
    { id: 'dispositivo', inicial: 'Dispositivo', alternativo: 'Device'},
    { id: 'navegador', inicial: 'Navegador', alternativo: 'Browser'},
    { id: 'labelPasos', inicial: 'Pasos de Ejecución', alternativo: 'Execution Steps'},
    { id: 'esperado', inicial: 'Resultado Esperado', alternativo: 'Expected result'},
    { id: 'actual', inicial: 'Resultado Actual', alternativo: 'Current result'},
  ];
  
  function alternarTexto() {
    etiquetas.forEach(etiqueta => {
      const elemento = document.getElementById(etiqueta.id);
      const textoActual = elemento.textContent;
  
      if (textoActual === etiqueta.inicial) {
        elemento.textContent = etiqueta.alternativo;
      } else {
        elemento.textContent = etiqueta.inicial;
      }
    });
  }
  