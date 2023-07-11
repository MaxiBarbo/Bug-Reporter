// Variables globales para almacenar los valores iniciales y alternativos de las etiquetas
let etiquetas = [
    { id: 'textReport', inicial: 'Reporte de Bugs', alternativo: 'Bugs Report'},
    { id: 'labelTitulo', inicial: 'Título:', alternativo: 'Title:'},
    { id: 'labelDefecto', inicial: 'Tipo de Defecto:', alternativo: 'Defect Type:'},
    { id: 'labelFecha', inicial: 'Fecha:', alternativo: 'Date:'},
    { id: 'labelFrecuencia', inicial: 'Frecuencia:', alternativo: 'Frequency:'},
    { id: 'labelPrioridad', inicial: 'Prioridad:', alternativo: 'Priority:'},
    { id: 'labelDispositivo', inicial: 'Dispositivo / Navegador:', alternativo: 'Device / Browser:'},
    { id: 'labelPasos', inicial: 'Pasos de Ejecución:', alternativo: 'Execution Steps:'},
    { id: 'labelEsperado', inicial: 'Resultado Esperado:', alternativo: 'Expected result:'},
    { id: 'labelActual', inicial: 'Resultado Actual:', alternativo: 'Current result:'},
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
  