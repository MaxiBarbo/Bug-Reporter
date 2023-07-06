
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let fecha = document.getElementById("fecha").value;
    let identificador = document.getElementById("identificador").value;
    let titulo = document.getElementById("titulo").value;
    let tipo = document.querySelector('select[name="tipo"]').value;
    let frecuencia = document.querySelector('select[name="frecuencia"]').value;
    let prioridad = document.querySelector('select[name="prioridad"]').value;
    let dispositivo = document.querySelector('select[name="dispositivo"]').value;
    let pasos = document.querySelector('textarea[name="pasos"]');
    let esperado = document.getElementById("esperado").value;
    let actual = document.getElementById("actual").value;
    let imagen = document.getElementById("preImagen");

    
    let dataArea = pasos.value.trim();
    let lineas = dataArea.split('\n');
    
    
    // Crea el contenido del archivo de Word
    var content = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
        body {
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
          background-color: #f2f2f2;
          margin: 0;
          padding: 10px;
        }
        h2 {
          color: black;
        }
        p {
          color: #001F54;
          font-weight: bold;
          font-size: 1em;
        }
        span{
            color: #2E282A;
            font-size: 0.9em;
            font-weight: bold;
        }
        ol {
          color: #2E282A;
          font-size: 0.9em;
          font-weight: bold;
        }
      </style>
        </head>
        <body>
          <h2>📝 Reporte de Bug:</h2>
          <p>Fecha:</p>
           <span>${fecha}</span>
          <p>Id:</p>
           <span>${identificador}</span>
          <p>Titulo:</p>
           <span>${titulo}</span>
          <p>Tipo de Defecto:</p>
           <span>${tipo}</span>
          <p>Frecuencia:</p>
           <span>${frecuencia}</span>
          <p>Prioridad:</p>
           <span>${prioridad}</span>
          <p>Dispositivo:</p>
           <span>${dispositivo}</span>
          <p>Pasos de Ejecucion:</p>
          <ol>${generarElementosListados(lineas)}</ol>
          <p>Resultado Esperado:</p>
           <span> ${esperado}</span>
          <p>Resultado Actual:</p>
           <span> ${actual}</span>
          
        </body>
      </html>necesito un cof
    `;
    function generarElementosListados(elementos) {
        var listaHTML = '';
        for (var i = 0; i < elementos.length; i++) {
          listaHTML += `<li>${elementos[i]}</li>`;
        }
        return listaHTML;
      }
        
    // Crea un objeto Blob con el contenido y el tipo MIME
    var blob = new Blob([content], { type: "application/msword" });
  
    // Crea un enlace para descargar el archivo de Word
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Test_Report.doc";
    link.click();
  });
  